"use strict";(self.webpackChunk_uniswap_docs=self.webpackChunk_uniswap_docs||[]).push([[917],{9917:(e,t,r)=>{r.d(t,{Z:()=>Ne});var n=r(7294),a=r.t(n,2),i=r(7462);const o=function(e){var t=Object.create(null);return function(r){return void 0===t[r]&&(t[r]=e(r)),t[r]}};var s=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;const c=o((function(e){return s.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91}));var l=function(){function e(e){var t=this;this._insertTag=function(e){var r;r=0===t.tags.length?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,r),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var r=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(t);try{r.insertRule(e,r.cssRules.length)}catch(n){0}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach((function(e){return e.parentNode&&e.parentNode.removeChild(e)})),this.tags=[],this.ctr=0},e}(),u=Math.abs,d=String.fromCharCode,f=Object.assign;function p(e){return e.trim()}function h(e,t,r){return e.replace(t,r)}function m(e,t){return e.indexOf(t)}function g(e,t){return 0|e.charCodeAt(t)}function v(e,t,r){return e.slice(t,r)}function y(e){return e.length}function b(e){return e.length}function k(e,t){return t.push(e),e}var x=1,w=1,C=0,A=0,S=0,_="";function P(e,t,r,n,a,i,o){return{value:e,root:t,parent:r,type:n,props:a,children:i,line:x,column:w,length:o,return:""}}function $(e,t){return f(P("",null,null,"",null,null,0),e,{length:-e.length},t)}function T(){return S=A>0?g(_,--A):0,w--,10===S&&(w=1,x--),S}function O(){return S=A<C?g(_,A++):0,w++,10===S&&(w=1,x++),S}function E(){return g(_,A)}function R(){return A}function z(e,t){return v(_,e,t)}function M(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function I(e){return x=w=1,C=y(_=e),A=0,[]}function L(e){return _="",e}function N(e){return p(z(A-1,F(91===e?e+2:40===e?e+1:e)))}function j(e){for(;(S=E())&&S<33;)O();return M(e)>2||M(S)>3?"":" "}function H(e,t){for(;--t&&O()&&!(S<48||S>102||S>57&&S<65||S>70&&S<97););return z(e,R()+(t<6&&32==E()&&32==O()))}function F(e){for(;O();)switch(S){case e:return A;case 34:case 39:34!==e&&39!==e&&F(S);break;case 40:41===e&&F(e);break;case 92:O()}return A}function q(e,t){for(;O()&&e+S!==57&&(e+S!==84||47!==E()););return"/*"+z(t,A-1)+"*"+d(47===e?e:O())}function D(e){for(;!M(E());)O();return z(e,A)}var G="-ms-",U="-moz-",W="-webkit-",B="comm",X="rule",V="decl",Y="@keyframes";function Z(e,t){for(var r="",n=b(e),a=0;a<n;a++)r+=t(e[a],a,e,t)||"";return r}function K(e,t,r,n){switch(e.type){case"@import":case V:return e.return=e.return||e.value;case B:return"";case Y:return e.return=e.value+"{"+Z(e.children,n)+"}";case X:e.value=e.props.join(",")}return y(r=Z(e.children,n))?e.return=e.value+"{"+r+"}":""}function J(e){return L(Q("",null,null,null,[""],e=I(e),0,[0],e))}function Q(e,t,r,n,a,i,o,s,c){for(var l=0,u=0,f=o,p=0,v=0,b=0,x=1,w=1,C=1,A=0,S="",_=a,P=i,$=n,z=S;w;)switch(b=A,A=O()){case 40:if(108!=b&&58==g(z,f-1)){-1!=m(z+=h(N(A),"&","&\f"),"&\f")&&(C=-1);break}case 34:case 39:case 91:z+=N(A);break;case 9:case 10:case 13:case 32:z+=j(b);break;case 92:z+=H(R()-1,7);continue;case 47:switch(E()){case 42:case 47:k(te(q(O(),R()),t,r),c);break;default:z+="/"}break;case 123*x:s[l++]=y(z)*C;case 125*x:case 59:case 0:switch(A){case 0:case 125:w=0;case 59+u:v>0&&y(z)-f&&k(v>32?re(z+";",n,r,f-1):re(h(z," ","")+";",n,r,f-2),c);break;case 59:z+=";";default:if(k($=ee(z,t,r,l,u,a,s,S,_=[],P=[],f),i),123===A)if(0===u)Q(z,t,$,$,_,i,f,s,P);else switch(99===p&&110===g(z,3)?100:p){case 100:case 109:case 115:Q(e,$,$,n&&k(ee(e,$,$,0,0,a,s,S,a,_=[],f),P),a,P,f,s,n?_:P);break;default:Q(z,$,$,$,[""],P,0,s,P)}}l=u=v=0,x=C=1,S=z="",f=o;break;case 58:f=1+y(z),v=b;default:if(x<1)if(123==A)--x;else if(125==A&&0==x++&&125==T())continue;switch(z+=d(A),A*x){case 38:C=u>0?1:(z+="\f",-1);break;case 44:s[l++]=(y(z)-1)*C,C=1;break;case 64:45===E()&&(z+=N(O())),p=E(),u=f=y(S=z+=D(R())),A++;break;case 45:45===b&&2==y(z)&&(x=0)}}return i}function ee(e,t,r,n,a,i,o,s,c,l,d){for(var f=a-1,m=0===a?i:[""],g=b(m),y=0,k=0,x=0;y<n;++y)for(var w=0,C=v(e,f+1,f=u(k=o[y])),A=e;w<g;++w)(A=p(k>0?m[w]+" "+C:h(C,/&\f/g,m[w])))&&(c[x++]=A);return P(e,t,r,0===a?X:s,c,l,d)}function te(e,t,r){return P(e,t,r,B,d(S),v(e,2,-2),0)}function re(e,t,r,n){return P(e,t,r,V,v(e,0,n),v(e,n+1,-1),n)}var ne=function(e,t,r){for(var n=0,a=0;n=a,a=E(),38===n&&12===a&&(t[r]=1),!M(a);)O();return z(e,A)},ae=function(e,t){return L(function(e,t){var r=-1,n=44;do{switch(M(n)){case 0:38===n&&12===E()&&(t[r]=1),e[r]+=ne(A-1,t,r);break;case 2:e[r]+=N(n);break;case 4:if(44===n){e[++r]=58===E()?"&\f":"",t[r]=e[r].length;break}default:e[r]+=d(n)}}while(n=O());return e}(I(e),t))},ie=new WeakMap,oe=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var t=e.value,r=e.parent,n=e.column===r.column&&e.line===r.line;"rule"!==r.type;)if(!(r=r.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||ie.get(r))&&!n){ie.set(e,!0);for(var a=[],i=ae(t,a),o=r.props,s=0,c=0;s<i.length;s++)for(var l=0;l<o.length;l++,c++)e.props[c]=a[s]?i[s].replace(/&\f/g,o[l]):o[l]+" "+i[s]}}},se=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}};function ce(e,t){switch(function(e,t){return 45^g(e,0)?(((t<<2^g(e,0))<<2^g(e,1))<<2^g(e,2))<<2^g(e,3):0}(e,t)){case 5103:return W+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return W+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return W+e+U+e+G+e+e;case 6828:case 4268:return W+e+G+e+e;case 6165:return W+e+G+"flex-"+e+e;case 5187:return W+e+h(e,/(\w+).+(:[^]+)/,W+"box-$1$2"+G+"flex-$1$2")+e;case 5443:return W+e+G+"flex-item-"+h(e,/flex-|-self/,"")+e;case 4675:return W+e+G+"flex-line-pack"+h(e,/align-content|flex-|-self/,"")+e;case 5548:return W+e+G+h(e,"shrink","negative")+e;case 5292:return W+e+G+h(e,"basis","preferred-size")+e;case 6060:return W+"box-"+h(e,"-grow","")+W+e+G+h(e,"grow","positive")+e;case 4554:return W+h(e,/([^-])(transform)/g,"$1"+W+"$2")+e;case 6187:return h(h(h(e,/(zoom-|grab)/,W+"$1"),/(image-set)/,W+"$1"),e,"")+e;case 5495:case 3959:return h(e,/(image-set\([^]*)/,W+"$1$`$1");case 4968:return h(h(e,/(.+:)(flex-)?(.*)/,W+"box-pack:$3"+G+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+W+e+e;case 4095:case 3583:case 4068:case 2532:return h(e,/(.+)-inline(.+)/,W+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(y(e)-1-t>6)switch(g(e,t+1)){case 109:if(45!==g(e,t+4))break;case 102:return h(e,/(.+:)(.+)-([^]+)/,"$1"+W+"$2-$3$1"+U+(108==g(e,t+3)?"$3":"$2-$3"))+e;case 115:return~m(e,"stretch")?ce(h(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(115!==g(e,t+1))break;case 6444:switch(g(e,y(e)-3-(~m(e,"!important")&&10))){case 107:return h(e,":",":"+W)+e;case 101:return h(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+W+(45===g(e,14)?"inline-":"")+"box$3$1"+W+"$2$3$1"+G+"$2box$3")+e}break;case 5936:switch(g(e,t+11)){case 114:return W+e+G+h(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return W+e+G+h(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return W+e+G+h(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return W+e+G+e+e}return e}var le=[function(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case V:e.return=ce(e.value,e.length);break;case Y:return Z([$(e,{value:h(e.value,"@","@"+W)})],n);case X:if(e.length)return function(e,t){return e.map(t).join("")}(e.props,(function(t){switch(function(e,t){return(e=t.exec(e))?e[0]:e}(t,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Z([$(e,{props:[h(t,/:(read-\w+)/,":-moz-$1")]})],n);case"::placeholder":return Z([$(e,{props:[h(t,/:(plac\w+)/,":"+W+"input-$1")]}),$(e,{props:[h(t,/:(plac\w+)/,":-moz-$1")]}),$(e,{props:[h(t,/:(plac\w+)/,G+"input-$1")]})],n)}return""}))}}];const ue=function(e){var t=e.key;if("css"===t){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,(function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))}))}var n=e.stylisPlugins||le;var a,i,o={},s=[];a=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),(function(e){for(var t=e.getAttribute("data-emotion").split(" "),r=1;r<t.length;r++)o[t[r]]=!0;s.push(e)}));var c,u,d,f,p=[K,(f=function(e){c.insert(e)},function(e){e.root||(e=e.return)&&f(e)})],h=(u=[oe,se].concat(n,p),d=b(u),function(e,t,r,n){for(var a="",i=0;i<d;i++)a+=u[i](e,t,r,n)||"";return a});i=function(e,t,r,n){c=r,Z(J(e?e+"{"+t.styles+"}":t.styles),h),n&&(m.inserted[t.name]=!0)};var m={key:t,sheet:new l({key:t,container:a,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:o,registered:{},insert:i};return m.sheet.hydrate(s),m};const de=function(e){for(var t,r=0,n=0,a=e.length;a>=4;++n,a-=4)t=1540483477*(65535&(t=255&e.charCodeAt(n)|(255&e.charCodeAt(++n))<<8|(255&e.charCodeAt(++n))<<16|(255&e.charCodeAt(++n))<<24))+(59797*(t>>>16)<<16),r=1540483477*(65535&(t^=t>>>24))+(59797*(t>>>16)<<16)^1540483477*(65535&r)+(59797*(r>>>16)<<16);switch(a){case 3:r^=(255&e.charCodeAt(n+2))<<16;case 2:r^=(255&e.charCodeAt(n+1))<<8;case 1:r=1540483477*(65535&(r^=255&e.charCodeAt(n)))+(59797*(r>>>16)<<16)}return(((r=1540483477*(65535&(r^=r>>>13))+(59797*(r>>>16)<<16))^r>>>15)>>>0).toString(36)};const fe={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};var pe=/[A-Z]|^ms/g,he=/_EMO_([^_]+?)_([^]*?)_EMO_/g,me=function(e){return 45===e.charCodeAt(1)},ge=function(e){return null!=e&&"boolean"!=typeof e},ve=o((function(e){return me(e)?e:e.replace(pe,"-$&").toLowerCase()})),ye=function(e,t){switch(e){case"animation":case"animationName":if("string"==typeof t)return t.replace(he,(function(e,t,r){return ke={name:t,styles:r,next:ke},t}))}return 1===fe[e]||me(e)||"number"!=typeof t||0===t?t:t+"px"};function be(e,t,r){if(null==r)return"";if(void 0!==r.__emotion_styles)return r;switch(typeof r){case"boolean":return"";case"object":if(1===r.anim)return ke={name:r.name,styles:r.styles,next:ke},r.name;if(void 0!==r.styles){var n=r.next;if(void 0!==n)for(;void 0!==n;)ke={name:n.name,styles:n.styles,next:ke},n=n.next;return r.styles+";"}return function(e,t,r){var n="";if(Array.isArray(r))for(var a=0;a<r.length;a++)n+=be(e,t,r[a])+";";else for(var i in r){var o=r[i];if("object"!=typeof o)null!=t&&void 0!==t[o]?n+=i+"{"+t[o]+"}":ge(o)&&(n+=ve(i)+":"+ye(i,o)+";");else if(!Array.isArray(o)||"string"!=typeof o[0]||null!=t&&void 0!==t[o[0]]){var s=be(e,t,o);switch(i){case"animation":case"animationName":n+=ve(i)+":"+s+";";break;default:n+=i+"{"+s+"}"}}else for(var c=0;c<o.length;c++)ge(o[c])&&(n+=ve(i)+":"+ye(i,o[c])+";")}return n}(e,t,r);case"function":if(void 0!==e){var a=ke,i=r(e);return ke=a,be(e,t,i)}}if(null==t)return r;var o=t[r];return void 0!==o?o:r}var ke,xe=/label:\s*([^\s;\n{]+)\s*(;|$)/g;var we=function(e,t,r){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var n=!0,a="";ke=void 0;var i=e[0];null==i||void 0===i.raw?(n=!1,a+=be(r,t,i)):a+=i[0];for(var o=1;o<e.length;o++)a+=be(r,t,e[o]),n&&(a+=i[o]);xe.lastIndex=0;for(var s,c="";null!==(s=xe.exec(a));)c+="-"+s[1];return{name:de(a)+c,styles:a,next:ke}},Ce=!!a.useInsertionEffect&&a.useInsertionEffect,Ae=Ce||function(e){return e()},Se=(Ce||n.useLayoutEffect,(0,n.createContext)("undefined"!=typeof HTMLElement?ue({key:"css"}):null));Se.Provider;var _e=function(e){return(0,n.forwardRef)((function(t,r){var a=(0,n.useContext)(Se);return e(t,a,r)}))},Pe=(0,n.createContext)({});function $e(e,t,r){var n="";return r.split(" ").forEach((function(r){void 0!==e[r]?t.push(e[r]+";"):n+=r+" "})),n}var Te=function(e,t,r){var n=e.key+"-"+t.name;!1===r&&void 0===e.registered[n]&&(e.registered[n]=t.styles)},Oe=c,Ee=function(e){return"theme"!==e},Re=function(e){return"string"==typeof e&&e.charCodeAt(0)>96?Oe:Ee},ze=function(e,t,r){var n;if(t){var a=t.shouldForwardProp;n=e.__emotion_forwardProp&&a?function(t){return e.__emotion_forwardProp(t)&&a(t)}:a}return"function"!=typeof n&&r&&(n=e.__emotion_forwardProp),n},Me=function(e){var t=e.cache,r=e.serialized,n=e.isStringTag;Te(t,r,n);Ae((function(){return function(e,t,r){Te(e,t,r);var n=e.key+"-"+t.name;if(void 0===e.inserted[t.name]){var a=t;do{e.insert(t===a?"."+n:"",a,e.sheet,!0),a=a.next}while(void 0!==a)}}(t,r,n)}));return null};const Ie=function e(t,r){var a,o,s=t.__emotion_real===t,c=s&&t.__emotion_base||t;void 0!==r&&(a=r.label,o=r.target);var l=ze(t,r,s),u=l||Re(c),d=!u("as");return function(){var f=arguments,p=s&&void 0!==t.__emotion_styles?t.__emotion_styles.slice(0):[];if(void 0!==a&&p.push("label:"+a+";"),null==f[0]||void 0===f[0].raw)p.push.apply(p,f);else{0,p.push(f[0][0]);for(var h=f.length,m=1;m<h;m++)p.push(f[m],f[0][m])}var g=_e((function(e,t,r){var a=d&&e.as||c,i="",s=[],f=e;if(null==e.theme){for(var h in f={},e)f[h]=e[h];f.theme=(0,n.useContext)(Pe)}"string"==typeof e.className?i=$e(t.registered,s,e.className):null!=e.className&&(i=e.className+" ");var m=we(p.concat(s),t.registered,f);i+=t.key+"-"+m.name,void 0!==o&&(i+=" "+o);var g=d&&void 0===l?Re(a):u,v={};for(var y in e)d&&"as"===y||g(y)&&(v[y]=e[y]);return v.className=i,v.ref=r,(0,n.createElement)(n.Fragment,null,(0,n.createElement)(Me,{cache:t,serialized:m,isStringTag:"string"==typeof a}),(0,n.createElement)(a,v))}));return g.displayName=void 0!==a?a:"Styled("+("string"==typeof c?c:c.displayName||c.name||"Component")+")",g.defaultProps=t.defaultProps,g.__emotion_real=g,g.__emotion_base=c,g.__emotion_styles=p,g.__emotion_forwardProp=l,Object.defineProperty(g,"toString",{value:function(){return"."+o}}),g.withComponent=function(t,n){return e(t,(0,i.Z)({},r,n,{shouldForwardProp:ze(g,n,!0)})).apply(void 0,p)},g}};var Le=Ie.bind();["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach((function(e){Le[e]=Le(e)}));const Ne=Le}}]);