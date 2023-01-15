import './styles.module.css'
import React from 'react'
import Link from '@docusaurus/Link'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styled from '@emotion/styled'
import Discord from '@site/static/img/discord.svg'
import GitHub from '@site/static/img/github.svg'
import Npm from '@site/static/img/npm.svg'
import AUTHOR from '@site/static/img/nicholijin.jpg'
import SKYPE from '@site/static/img/skype.png'
import Layout from '@theme/Layout'
import ThemedImage from '@theme/ThemedImage'
import { ArrowUpRight as LinkIcon, BookOpen, HelpCircle } from 'react-feather'


export const actions = [
  {
    title: 'How to install',
    icon: HelpCircle,
    to: '/v1/installation',
    text: `Learn how to install.`,
  },
  {
    title: 'Integrate in ES6',
    icon: BookOpen,
    to: '/v1/es6/overview',
    text: `Learn how to integrate in ES6 Module.`,
  },
  {
    title: 'Integrate in AMD',
    icon: BookOpen,
    to: '/v1/amd/overview',
    text: `Learn how to integrate in AMD Module.`,
  },
]

export const resourcesLinks = [
  {
    title: 'country-cities',
    href: 'https://github.com/nicholidev/country-cities',
    icon: GitHub,
  },
  {
    title: 'country-cities',
    href: 'https://www.npmjs.com/package/country-state-city',
    icon: Npm,
  },
]

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 16px;
  justify-content: center;
  margin: 0 auto;
  padding: 1rem 0;
  max-width: 960px;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    padding: 1rem;
    max-width: 100%;
    margin: 0 1rem;
  }
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`

const TwoRow = styled(Row)`
  grid-template-columns: 1fr 1fr;
  grid-gap: 48px;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`

const Card = styled.div`
  display: flex;
  max-height: 250px;
  min-width: 350px;
  padding: 1rem;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 20px;
  border: 1px solid var(--ifm-color-emphasis-200);
  /* flex: 1 1 0px; */

  &:hover {
    border: 1px solid var(--ifm-color-emphasis-400);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.05);
  }

  @media (max-width: 960px) {
    width: 100%;
  }
`

const CenterCard = styled(Card)`
  min-width: 250px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  display: grid;
  grid-template-columns: 48px 1fr;
  gap: 24px;

  h3 {
    margin-bottom: 0.25rem;
  }

  p {
    margin-bottom: 0;
  }
`

const ShadowCard = styled(Card)`
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.05);
  background-color: #ffffff10;
  backdrop-filter: blur(10px);
  min-height: 200px;
  /* background-color: var(--ifm-color-emphasis-0); */
`

const WideCard = styled(ShadowCard)`
  @media (max-width: 960px) {
    margin: 0 2rem;
    max-height: fit-content;
    width: fit-content;
  }
`

const IconWrapper = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  margin-right: 0.5rem;
`

const LinkIconWrapper = styled.div`
  opacity: 0.25;
`

const TopSection = styled.div`
  width: 100%;
  align-items: center;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;
`

const LinkRow = styled.div`
  width: 100%;
  align-items: center;
  justify-content: space-between;
  display: flex;
  flex-direction: row;

  a h3 {
    color: black !important;
  }
`

const DocsHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100%;
  position: relative;
`

const StyledImage = styled(ThemedImage)`
  position: relative;
  z-index: -1;
  width: 100%;
  object-fit: cover;
`

const StyledTitleImage = styled(StyledImage)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  position: absolute;
  opacity: 0.2;
  mask-image: linear-gradient(rgba(0, 0, 0, 1), transparent);
`

const StyledIcon = styled.div`
  svg {
    fill: var(--ifm-font-color-base);
  }
`

export default function Home() {
  return (
    <Layout title={`NPM country-cities Documentation`} description="Technical Documentation For The country-cities npm package">
      <Container>
        <DocsHeader>
          <div
            style={{
              padding: '4rem 0  ',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <h1 style={{ fontWeight: 600 }}>😍 country-cities Documentation </h1>
          </div>
          <StyledTitleImage
            sources={{
              light: useBaseUrl('/img/grow.png'),
              dark: useBaseUrl('/img/grow2.png'),
            }}
          />
          <Row>
            {actions.map((action) => (
              <Link key={action.to} style={{ textDecoration: 'none' }} to={action.to}>
                <ShadowCard key={action.title}>
                  <TopSection>
                    <IconWrapper>
                      <action.icon style={{ width: '24px' }} />
                    </IconWrapper>
                    <LinkIconWrapper>
                      <LinkIcon />
                    </LinkIconWrapper>
                  </TopSection>
                  <h3 style={{ marginBottom: '.75rem', fontWeight: 500 }}>{action.title}</h3>
                  <p style={{ marginBottom: '0.5rem', fontWeight: 300 }}>{action.text}</p>
                </ShadowCard>
              </Link>
            ))}
          </Row>
        </DocsHeader>
        <hr />
        <TwoRow
          style={{
            gap: '48px',
            alignItems: 'center',
          }}
        >
          <StyledImage
            style={{ maxHeight: '400px' }}
            sources={{
              light: useBaseUrl('/img/banner.png'),
              dark: useBaseUrl('/img/banner.png'),
            }}
          />
          <div>
            <h2>Resources Links</h2>
            {resourcesLinks.map((action) => (

              <Link key={action.href} to={action.href}>
                <Card key={action.href} style={{ marginBottom: '0.5rem' }}>
                  <LinkRow>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <IconWrapper>
                        <StyledIcon>
                          <action.icon style={{ width: '24px' }} />
                        </StyledIcon>
                      </IconWrapper>
                      {action.title}
                    </div>
                    <LinkIconWrapper>
                      <LinkIcon />
                    </LinkIconWrapper>
                  </LinkRow>
                </Card>
              </Link>
            ))}
          </div>
        </TwoRow>
        <hr />
        <Row>
          <Link style={{ textDecoration: 'none' }} href={'https://discord.gg/Pr3GZP8238'}>
            <CenterCard>
              <Discord style={{ width: '48px', height: '48px' }} />
              <div>
                <h3>Discord</h3>
                <p>Join with me Discord.</p>
              </div>
            </CenterCard>
          </Link>
          <Link style={{ textDecoration: 'none' }} href={'https://join.skype.com/invite/hwp9PMp0W8mA'}>
            <CenterCard>
              <img src={SKYPE} width="48" height="48" alt="Skype Icon" style={{ width: '48px', height: '48px' }} />
              <div>
                <h3>Skype</h3>
                <p>Join with me skype.</p>
              </div>
            </CenterCard>
          </Link>
          <Link style={{ textDecoration: 'none' }} href={'https://github.com/nicholidev'}>
            <CenterCard>
              <StyledIcon>
                <GitHub style={{ width: '48px', height: '48px' }} />
              </StyledIcon>
              <div>
                <h3>GitHub</h3>
                <p>Find me in Github.</p>
              </div>
            </CenterCard>
          </Link>
        </Row>
        <Link
          style={{
            textDecoration: 'none',
            maxWidth: '960px',
            margin: '0 auto 4rem auto',
            width: '100%',
          }}
          href={'https://nicholijin.com/'}
        >
          <WideCard
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'center',
              gap: '24px',
            }}
          >
            <img src={AUTHOR} width={'120px'}  alt="Nicholi Jin"/>
            <div>
              <h2 style={{ marginBottom: '0.5rem' }}>About the Author</h2>
              <p style={{ margin: '0rem' }}>
                <b>Nicholi Jin</b>(me) is a software engineer, working as a full-time full remote worker. I love
                architecting & building high-quality software and intuitive web applications. Also, I love to make the
                relation-ship with projects owners and developers{' '}
                <a href="https://nicholijin.com/contact" target="_blank" rel="noreferrer">
                  <b>Contact</b>
                </a>&nbsp;
                me anytime.
              </p>
            </div>
          </WideCard>
        </Link>
      </Container>
    </Layout>
  )
}
