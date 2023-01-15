import { useLocation } from '@docusaurus/router'
import OriginalNavBarItem from '@theme-original/NavbarItem'
import { TraceEvent } from '@uniswap/analytics'
import { BrowserEvent, DocsProtocolVersion, SharedEventName } from '@uniswap/analytics-events'
import React from 'react'

enum ProtocolVersion {
  V1 = 'V1',
  V2 = 'V2',
  V3 = 'V3',
}

const UNKNOWN_PROTOCOL_VERSION = 'UNKNOWN_PROTOCOL_VERSION'

const getSection = (version: string) => {
  switch (version) {
    case ProtocolVersion.V1:
      return DocsProtocolVersion.V1
    case ProtocolVersion.V2:
      return DocsProtocolVersion.V2
    case ProtocolVersion.V3:
      return DocsProtocolVersion.V3
    default:
      return UNKNOWN_PROTOCOL_VERSION
  }
}

const getSelectedDocVersion = (docVersion: string) => {
  switch (docVersion) {
    case ProtocolVersion.V1:
    case '1.0.0':
      return ProtocolVersion.V1
    case ProtocolVersion.V2:
    case '2.0.0':
      return ProtocolVersion.V2
    // Default to the current doc version
    default:
      return ProtocolVersion.V3
  }
}

const getClassName = (className: string, version: string) => {
  return className + ' ' + version
}

export default function NavbarItem(props: { className: string; label: string }) {
  const { pathname } = useLocation()

  const docVersionFromPath = pathname.split('/')
  const selectedDocVersion = getSelectedDocVersion(docVersionFromPath[2])

  return (
    <>
      <TraceEvent
        events={[BrowserEvent.onClick]}
        element={props.label}
        name={SharedEventName.NAVBAR_CLICKED}
        section={getSection(selectedDocVersion)}
      >
        <OriginalNavBarItem {...props} className={getClassName(props.className, selectedDocVersion)} />
      </TraceEvent>
    </>
  )
}
