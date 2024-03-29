"use strict";(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[3981],{87512:(L,C,n)=>{n.r(C),n.d(C,{default:()=>We});var e=n(53547),f=n(97132),c=n(78384),D=n(15482),O=n(49656),i=n(68547),F=n(35395),W=n(80117),d=n(94117),g=n(39272),V=n(42462),$=n(32104);const A=t=>Object.entries(t).every(([,a])=>Object.entries(a).every(([,o])=>o));var E=n(9524),v=n(40264),h=n(33483),H=n(64459),z=n(64290),P=n.n(z),K=n(45697),r=n.n(K),Z=n(71289),N=n(66952),m=n(16289);const k=({type:t,title:a,number:o,content:l,hasLine:u})=>{const{formatMessage:y}=(0,f.useIntl)();return e.createElement(d.Box,null,e.createElement(v.Flex,null,e.createElement(d.Box,{minWidth:(0,i.pxToRem)(30),marginRight:5},e.createElement(Z.Z,{type:t,number:o})),e.createElement(h.Typography,{variant:"delta",as:"h3"},y(a))),e.createElement(v.Flex,{alignItems:"flex-start"},e.createElement(v.Flex,{justifyContent:"center",minWidth:(0,i.pxToRem)(30),marginBottom:3,marginTop:3,marginRight:5},u&&e.createElement(N.Z,{type:t,minHeight:t===m.lW?(0,i.pxToRem)(85):(0,i.pxToRem)(65)})),e.createElement(d.Box,{marginTop:2},t===m.lW&&l)))};k.defaultProps={content:void 0,number:void 0,type:m.VM,hasLine:!0},k.propTypes={content:r().node,number:r().number,title:r().shape({id:r().string,defaultMessage:r().string}).isRequired,type:r().oneOf([m.lW,m.hx,m.VM]),hasLine:r().bool};const U=k,J=(t,a)=>t===-1||a<t?m.hx:a>t?m.VM:m.lW,T=({sections:t,currentSectionKey:a})=>{const o=t.findIndex(l=>l.key===a);return e.createElement(d.Box,null,t.map((l,u)=>e.createElement(U,{key:l.key,title:l.title,content:l.content,number:u+1,type:J(o,u),hasLine:u!==t.length-1})))};T.defaultProps={currentSectionKey:void 0},T.propTypes={sections:r().arrayOf(r().shape({key:r().string.isRequired,title:r().shape({id:r().string,defaultMessage:r().string}).isRequired,content:r().node})).isRequired,currentSectionKey:r().string};const Y=T;var Q=n(76910),X=Object.defineProperty,b=Object.getOwnPropertySymbols,w=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable,G=(t,a,o)=>a in t?X(t,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[a]=o,_=(t,a)=>{for(var o in a||(a={}))w.call(a,o)&&G(t,o,a[o]);if(b)for(var o of b(a))q.call(a,o)&&G(t,o,a[o]);return t};const ee=()=>{var t;const{guidedTourState:a,setSkipped:o}=(0,i.useGuidedTour)(),{formatMessage:l}=(0,f.useIntl)(),{trackUsage:u}=(0,i.useTracking)(),y=Object.entries(Q.Z).map(([p,s])=>({key:p,title:s.home.title,content:e.createElement(i.LinkButton,{onClick:()=>u(s.home.trackingEvent),to:s.home.cta.target,endIcon:e.createElement(P(),null)},l(s.home.cta.title))})),x=(t=y.map(p=>_({isDone:Object.entries(a[p.key]).every(([,s])=>s)},p)).find(p=>!p.isDone))==null?void 0:t.key,M=()=>{o(!0),u("didSkipGuidedtour")};return e.createElement(d.Box,{hasRadius:!0,shadow:"tableShadow",paddingTop:7,paddingRight:4,paddingLeft:7,paddingBottom:4,background:"neutral0"},e.createElement(E.Stack,{spacing:6},e.createElement(h.Typography,{variant:"beta",as:"h2"},l({id:"app.components.GuidedTour.title",defaultMessage:"3 steps to get started"})),e.createElement(Y,{sections:y,currentSectionKey:x})),e.createElement(v.Flex,{justifyContent:"flex-end"},e.createElement(H.Button,{variant:"tertiary",onClick:M},l({id:"app.components.GuidedTour.skip",defaultMessage:"Skip the tour"}))))};var te=n(22499),R=n(10407),ne=n(74657),ae=n.n(ne),oe=n(42365),re=n.n(oe),le=n(94869),ie=n.n(le),se=n(70450),ce=n.n(se),de=n(73910),me=n.n(de),ue=n(3849),pe=n.n(ue),ge=n(90431),fe=n.n(ge);const he=(0,c.default)(ie())`
  path {
    fill: #7289da !important;
  }
`,ye=(0,c.default)(ce())`
  > path:first-child {
    fill: #ff4500;
  }
`,I=(0,c.default)(me())`
  > path:first-child {
    fill: #8e75ff;
  }
  > path:nth-child(2) {
    fill: #8e75ff;
  }
  > path:nth-child(3) {
    fill: #8e75ff;
  }
`,Ee=(0,c.default)(pe())`
  path {
    fill: #1da1f2 !important;
  }
`,ve=(0,c.default)(fe())`
  > path:first-child {
    fill: #231f20;
  }
  > path:nth-child(2) {
    fill: #fff9ae;
  }
  > path:nth-child(3) {
    fill: #00aeef;
  }
  > path:nth-child(4) {
    fill: #00a94f;
  }
  > path:nth-child(5) {
    fill: #f15d22;
  }
  > path:nth-child(6) {
    fill: #e31b23;
  }
`,Se=[{name:"Github",link:"https://github.com/strapi/strapi/",icon:e.createElement(re(),{fill:"#7289DA"}),alt:"github"},{name:"Discord",link:"https://slack.strapi.io/",icon:e.createElement(he,null),alt:"discord"},{name:"Reddit",link:"https://www.reddit.com/r/Strapi/",icon:e.createElement(ye,null),alt:"reddit"},{name:"Twitter",link:"https://twitter.com/strapijs",icon:e.createElement(Ee,null),alt:"twitter"},{name:"Forum",link:"https://forum.strapi.io",icon:e.createElement(ve,null),alt:"forum"},{name:"Blog",link:"https://strapi.io/blog?utm_source=referral&utm_medium=admin&utm_campaign=career%20page",icon:e.createElement(I,null),alt:"blog"},{name:"We are hiring!",link:"https://strapi.io/careers?utm_source=referral&utm_medium=admin&utm_campaign=blog",icon:e.createElement(I,null),alt:"career"}],Ce=(0,c.default)(te.LinkButton)`
  display: flex;
  align-items: center;
  border: none;

  svg {
    width: ${({theme:t})=>t.spaces[6]};
    height: ${({theme:t})=>t.spaces[6]};
  }

  span {
    word-break: keep-all;
  }
`,ke=(0,c.default)(g.Grid)`
  row-gap: ${({theme:t})=>t.spaces[2]};
  column-gap: ${({theme:t})=>t.spaces[4]};
`,Te=()=>{const{formatMessage:t}=(0,f.useIntl)();return e.createElement(d.Box,{as:"aside","aria-labelledby":"join-the-community",background:"neutral0",hasRadius:!0,paddingRight:5,paddingLeft:5,paddingTop:6,paddingBottom:6,shadow:"tableShadow"},e.createElement(d.Box,{paddingBottom:7},e.createElement(E.Stack,{spacing:5},e.createElement(E.Stack,{spacing:3},e.createElement(h.Typography,{variant:"delta",as:"h2",id:"join-the-community"},t({id:"app.components.HomePage.community",defaultMessage:"Join the community"})),e.createElement(h.Typography,{textColor:"neutral600"},t({id:"app.components.HomePage.community.content",defaultMessage:"Discuss with team members, contributors and developers on different channels"}))),e.createElement(R.Link,{href:"https://feedback.strapi.io/",isExternal:!0,endIcon:e.createElement(ae(),null)},t({id:"app.components.HomePage.roadmap",defaultMessage:"See our road map"})))),e.createElement(ke,null,Se.map(a=>e.createElement(g.GridItem,{col:6,s:12,key:a.name},e.createElement(Ce,{size:"L",startIcon:a.icon,variant:"tertiary",href:a.link,isExternal:!0},a.name)))))},Be=(0,c.default)(h.Typography)`
  word-break: break-word;
`,xe=(0,c.default)(E.Stack)`
  align-items: flex-start;
`,B=({hasCreatedContentType:t,onCreateCT:a})=>{const{formatMessage:o}=(0,f.useIntl)();return e.createElement("div",null,e.createElement(d.Box,{paddingLeft:6,paddingBottom:10},e.createElement(xe,{spacing:5},e.createElement(h.Typography,{as:"h1",variant:"alpha"},o(t?{id:"app.components.HomePage.welcome.again",defaultMessage:"Welcome \u{1F44B}"}:{id:"app.components.HomePage.welcome",defaultMessage:"Welcome on board!"})),e.createElement(Be,{textColor:"neutral600",variant:"epsilon"},o(t?{id:"app.components.HomePage.welcomeBlock.content.again",defaultMessage:"We hope you are making progress on your project! Feel free to read the latest news about Strapi. We are giving our best to improve the product based on your feedback."}:{id:"app.components.HomePage.welcomeBlock.content",defaultMessage:"Congrats! You are logged as the first administrator. To discover the powerful features provided by Strapi, we recommend you to create your first Content type!"})),t?e.createElement(R.Link,{isExternal:!0,href:"https://strapi.io/blog"},o({id:"app.components.HomePage.button.blog",defaultMessage:"See more on the blog"})):e.createElement(H.Button,{size:"L",onClick:a,endIcon:e.createElement(P(),null)},o({id:"app.components.HomePage.create",defaultMessage:"Create your first Content type"})))))};B.defaultProps={hasCreatedContentType:void 0,onCreateCT:void 0},B.propTypes={hasCreatedContentType:r().bool,onCreateCT:r().func};const Me=B;var Le=n(97557),He=n.n(Le),Pe=n(64214),be=n.n(Pe),Ge=n(91021),Re=n.n(Ge),Ie=n(46884),je=n.n(Ie);const S=c.default.a`
  text-decoration: none;
`,De=()=>{const{formatMessage:t}=(0,f.useIntl)(),{trackUsage:a}=(0,i.useTracking)(),o=l=>{a(l)};return e.createElement(E.Stack,{spacing:5},e.createElement(S,{href:"https://strapi.io/resource-center",target:"_blank",rel:"noopener noreferrer nofollow",onClick:()=>o("didClickonReadTheDocumentationSection")},e.createElement(i.ContentBox,{title:t({id:"global.documentation",defaultMessage:"Documentation"}),subtitle:t({id:"app.components.BlockLink.documentation.content",defaultMessage:"Discover the essential concepts, guides and instructions."}),icon:e.createElement(He(),null),iconBackground:"primary100"})),e.createElement(S,{href:"https://strapi.io/starters",target:"_blank",rel:"noopener noreferrer nofollow",onClick:()=>o("didClickonCodeExampleSection")},e.createElement(i.ContentBox,{title:t({id:"app.components.BlockLink.code",defaultMessage:"Code example"}),subtitle:t({id:"app.components.BlockLink.code.content",defaultMessage:"Learn by using ready-made starters for your projects."}),icon:e.createElement(be(),null),iconBackground:"warning100"})),e.createElement(S,{href:"https://strapi.io/blog/categories/tutorials",target:"_blank",rel:"noopener noreferrer nofollow",onClick:()=>o("didClickonTutorialSection")},e.createElement(i.ContentBox,{title:t({id:"app.components.BlockLink.tutorial",defaultMessage:"Tutorials"}),subtitle:t({id:"app.components.BlockLink.tutorial.content",defaultMessage:"Follow step-by-step instructions to use and customize Strapi."}),icon:e.createElement(Re(),null),iconBackground:"secondary100"})),e.createElement(S,{href:"https://strapi.io/blog",target:"_blank",rel:"noopener noreferrer nofollow",onClick:()=>o("didClickonBlogSection")},e.createElement(i.ContentBox,{title:t({id:"app.components.BlockLink.blog",defaultMessage:"Blog"}),subtitle:t({id:"app.components.BlockLink.blog.content",defaultMessage:"Read the latest news about Strapi and the ecosystem."}),icon:e.createElement(je(),null),iconBackground:"alternative100"})))},Oe=(0,c.default)(d.Box)`
  position: absolute;
  top: 0;
  right: 0;
  img {
    width: ${150/16}rem;
  }
`,Fe=()=>{const{collectionTypes:t,singleTypes:a,isLoading:o}=(0,$.bP)(),{guidedTourState:l,isGuidedTourVisible:u,isSkipped:y}=(0,i.useGuidedTour)(),j=!A(l)&&u&&!y,{push:x}=(0,O.useHistory)(),M=s=>{s.preventDefault(),x("/plugins/content-type-builder/content-types/create-content-type")},p=(0,e.useMemo)(()=>{const s=Ve=>Ve.filter($e=>$e.isDisplayed);return s(t).length>1||s(a).length>0},[t,a]);return o?e.createElement(i.LoadingIndicatorPage,null):e.createElement(F.Layout,null,e.createElement(f.FormattedMessage,{id:"HomePage.helmet.title",defaultMessage:"Homepage"},s=>e.createElement(D.Helmet,{title:s[0]})),e.createElement(W.Main,null,e.createElement(Oe,null,e.createElement("img",{alt:"","aria-hidden":!0,src:V})),e.createElement(d.Box,{padding:10},e.createElement(g.Grid,null,e.createElement(g.GridItem,{col:8,s:12},e.createElement(Me,{onCreateCT:M,hasCreatedContentType:p}))),e.createElement(g.Grid,{gap:6},e.createElement(g.GridItem,{col:8,s:12},j?e.createElement(ee,null):e.createElement(De,null)),e.createElement(g.GridItem,{col:4,s:12},e.createElement(Te,null))))))},We=(0,e.memo)(Fe)},42462:(L,C,n)=>{L.exports=n.p+"fb376b132d18bf4522ca.png"}}]);
