"use strict";(self.webpackChunk_uniswap_docs=self.webpackChunk_uniswap_docs||[]).push([[918],{7445:(e,t,n)=>{n.d(t,{Z:()=>Z});var l=n(9917),c=n(4930),E=n(5625),r=n(7294),a=n(4076),i=n(9345),s=n(2518);const T="#F14544",o="#5CFE9D",m="#FAF40A";let I;var u;!function(e){e[e.MEDIUM=.5]="MEDIUM",e[e.FULL=1]="FULL"}(I||(I={})),function(e){e.NEGATIVE="NEGATIVE",e.NEUTRAL="NEUTRAL",e.POSITIVE="POSITIVE"}(u||(u={}));const M=l.Z.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`,d=(0,l.Z)(a.Z)`
  fill: ${e=>e.selected?o:"transparent"};
  opacity: ${e=>e.selected?I.FULL:I.MEDIUM};

  &:hover {
    fill: ${o};
  }
`,N=(0,l.Z)(i.Z)`
  fill: ${e=>e.selected?T:"transparent"};
  opacity: ${e=>e.selected?I.FULL:I.MEDIUM};

  &:hover {
    fill: ${T};
  }
`,f=(0,l.Z)(s.Z)`
  fill: ${e=>e.selected?m:"transparent"};
  opacity: ${e=>e.selected?I.FULL:I.MEDIUM};
  margin: 0 0.2rem;

  &:hover {
    fill: ${m};
  }
`,S=l.Z.div`
  font-size: 1rem;
  padding-right: 0.5rem;
`;function Z(e){let{analyticsSection:t}=e;const[n,l]=(0,r.useState)(null),a=(0,r.useCallback)((e=>n&&n===e),[n]);return r.createElement(M,null,r.createElement(S,null,"Helpful?"),r.createElement(c.M8,{element:E.rV.POSITIVE_SENTIMENT,name:E.Gz.SENTIMENT_SUBMITTED,events:[E.TM.onClick],section:t},r.createElement(d,{selected:a(u.POSITIVE),onClick:()=>{l(u.POSITIVE)}})),r.createElement(c.M8,{element:E.rV.NEUTRAL_SENTIMENT,name:E.Gz.SENTIMENT_SUBMITTED,events:[E.TM.onClick],section:t},r.createElement(f,{selected:a(u.NEUTRAL),onClick:()=>{l(u.NEUTRAL)}})),r.createElement(c.M8,{element:E.rV.NEGATIVE_SENTIMENT,name:E.Gz.SENTIMENT_SUBMITTED,events:[E.TM.onClick],section:t},r.createElement(N,{selected:a(u.NEGATIVE),onClick:()=>{l(u.NEGATIVE)}})))}},1636:(e,t,n)=>{n.d(t,{Z:()=>T});var l=n(9917),c=n(1986),E=n(5625),r=n(7294),a=n(7445);const i=l.Z.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`,s=l.Z.div`
  margin-bottom: 0.7rem;
`;function T(e){return r.createElement(i,null,r.createElement(c.Z,e),r.createElement(s,null,r.createElement(a.Z,{analyticsSection:E.ZO.TOP_SECTION})))}},4935:(e,t,n)=>{n.d(t,{Z:()=>s});var l=n(9917),c=n(4966),E=n(5625),r=n(7294),a=n(7445);const i=l.Z.div`
  margin-top: 1.5rem;
`;function s(e){return r.createElement(r.Fragment,null,r.createElement(i,null,r.createElement(a.Z,{analyticsSection:E.ZO.BOTTOM_SECTION})),r.createElement(c.Z,e))}}}]);