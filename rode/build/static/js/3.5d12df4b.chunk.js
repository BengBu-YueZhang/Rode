(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{274:function(e,t,r){"use strict";var n=Object.prototype.hasOwnProperty,o=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}(),a=function(e,t){for(var r=t&&t.plainObjects?Object.create(null):{},n=0;n<e.length;++n)"undefined"!==typeof e[n]&&(r[n]=e[n]);return r};e.exports={arrayToObject:a,assign:function(e,t){return Object.keys(t).reduce(function(e,r){return e[r]=t[r],e},e)},compact:function(e){for(var t=[{obj:{o:e},prop:"o"}],r=[],n=0;n<t.length;++n)for(var o=t[n],a=o.obj[o.prop],i=Object.keys(a),c=0;c<i.length;++c){var l=i[c],s=a[l];"object"===typeof s&&null!==s&&-1===r.indexOf(s)&&(t.push({obj:a,prop:l}),r.push(s))}return function(e){for(var t;e.length;){var r=e.pop();if(t=r.obj[r.prop],Array.isArray(t)){for(var n=[],o=0;o<t.length;++o)"undefined"!==typeof t[o]&&n.push(t[o]);r.obj[r.prop]=n}}return t}(t)},decode:function(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(t){return e}},encode:function(e){if(0===e.length)return e;for(var t="string"===typeof e?e:String(e),r="",n=0;n<t.length;++n){var a=t.charCodeAt(n);45===a||46===a||95===a||126===a||a>=48&&a<=57||a>=65&&a<=90||a>=97&&a<=122?r+=t.charAt(n):a<128?r+=o[a]:a<2048?r+=o[192|a>>6]+o[128|63&a]:a<55296||a>=57344?r+=o[224|a>>12]+o[128|a>>6&63]+o[128|63&a]:(n+=1,a=65536+((1023&a)<<10|1023&t.charCodeAt(n)),r+=o[240|a>>18]+o[128|a>>12&63]+o[128|a>>6&63]+o[128|63&a])}return r},isBuffer:function(e){return null!==e&&"undefined"!==typeof e&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))},isRegExp:function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},merge:function e(t,r,o){if(!r)return t;if("object"!==typeof r){if(Array.isArray(t))t.push(r);else{if("object"!==typeof t)return[t,r];(o.plainObjects||o.allowPrototypes||!n.call(Object.prototype,r))&&(t[r]=!0)}return t}if("object"!==typeof t)return[t].concat(r);var i=t;return Array.isArray(t)&&!Array.isArray(r)&&(i=a(t,o)),Array.isArray(t)&&Array.isArray(r)?(r.forEach(function(r,a){n.call(t,a)?t[a]&&"object"===typeof t[a]?t[a]=e(t[a],r,o):t.push(r):t[a]=r}),t):Object.keys(r).reduce(function(t,a){var i=r[a];return n.call(t,a)?t[a]=e(t[a],i,o):t[a]=i,t},i)}}},275:function(e,t,r){"use strict";var n=String.prototype.replace,o=/%20/g;e.exports={default:"RFC3986",formatters:{RFC1738:function(e){return n.call(e,o,"+")},RFC3986:function(e){return e}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},280:function(e,t,r){"use strict";var n=r(281),o=r(282),a=r(275);e.exports={formats:a,parse:o,stringify:n}},281:function(e,t,r){"use strict";var n=r(274),o=r(275),a={brackets:function(e){return e+"[]"},indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},i=Date.prototype.toISOString,c={delimiter:"&",encode:!0,encoder:n.encode,encodeValuesOnly:!1,serializeDate:function(e){return i.call(e)},skipNulls:!1,strictNullHandling:!1},l=function e(t,r,o,a,i,l,s,p,u,f,d,y){var m=t;if("function"===typeof s)m=s(r,m);else if(m instanceof Date)m=f(m);else if(null===m){if(a)return l&&!y?l(r,c.encoder):r;m=""}if("string"===typeof m||"number"===typeof m||"boolean"===typeof m||n.isBuffer(m))return l?[d(y?r:l(r,c.encoder))+"="+d(l(m,c.encoder))]:[d(r)+"="+d(String(m))];var b,h=[];if("undefined"===typeof m)return h;if(Array.isArray(s))b=s;else{var g=Object.keys(m);b=p?g.sort(p):g}for(var v=0;v<b.length;++v){var O=b[v];i&&null===m[O]||(h=Array.isArray(m)?h.concat(e(m[O],o(r,O),o,a,i,l,s,p,u,f,d,y)):h.concat(e(m[O],r+(u?"."+O:"["+O+"]"),o,a,i,l,s,p,u,f,d,y)))}return h};e.exports=function(e,t){var r=e,i=t?n.assign({},t):{};if(null!==i.encoder&&void 0!==i.encoder&&"function"!==typeof i.encoder)throw new TypeError("Encoder has to be a function.");var s="undefined"===typeof i.delimiter?c.delimiter:i.delimiter,p="boolean"===typeof i.strictNullHandling?i.strictNullHandling:c.strictNullHandling,u="boolean"===typeof i.skipNulls?i.skipNulls:c.skipNulls,f="boolean"===typeof i.encode?i.encode:c.encode,d="function"===typeof i.encoder?i.encoder:c.encoder,y="function"===typeof i.sort?i.sort:null,m="undefined"!==typeof i.allowDots&&i.allowDots,b="function"===typeof i.serializeDate?i.serializeDate:c.serializeDate,h="boolean"===typeof i.encodeValuesOnly?i.encodeValuesOnly:c.encodeValuesOnly;if("undefined"===typeof i.format)i.format=o.default;else if(!Object.prototype.hasOwnProperty.call(o.formatters,i.format))throw new TypeError("Unknown format option provided.");var g,v,O=o.formatters[i.format];"function"===typeof i.filter?r=(v=i.filter)("",r):Array.isArray(i.filter)&&(g=v=i.filter);var j,w=[];if("object"!==typeof r||null===r)return"";j=i.arrayFormat in a?i.arrayFormat:"indices"in i?i.indices?"indices":"repeat":"indices";var x=a[j];g||(g=Object.keys(r)),y&&g.sort(y);for(var E=0;E<g.length;++E){var k=g[E];u&&null===r[k]||(w=w.concat(l(r[k],k,x,p,u,f?d:null,v,y,m,b,O,h)))}var A=w.join(s),N=!0===i.addQueryPrefix?"?":"";return A.length>0?N+A:""}},282:function(e,t,r){"use strict";var n=r(274),o=Object.prototype.hasOwnProperty,a={allowDots:!1,allowPrototypes:!1,arrayLimit:20,decoder:n.decode,delimiter:"&",depth:5,parameterLimit:1e3,plainObjects:!1,strictNullHandling:!1},i=function(e,t,r){if(e){var n=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,a=/(\[[^[\]]*])/g,i=/(\[[^[\]]*])/.exec(n),c=i?n.slice(0,i.index):n,l=[];if(c){if(!r.plainObjects&&o.call(Object.prototype,c)&&!r.allowPrototypes)return;l.push(c)}for(var s=0;null!==(i=a.exec(n))&&s<r.depth;){if(s+=1,!r.plainObjects&&o.call(Object.prototype,i[1].slice(1,-1))&&!r.allowPrototypes)return;l.push(i[1])}return i&&l.push("["+n.slice(i.index)+"]"),function(e,t,r){for(var n=t,o=e.length-1;o>=0;--o){var a,i=e[o];if("[]"===i)a=(a=[]).concat(n);else{a=r.plainObjects?Object.create(null):{};var c="["===i.charAt(0)&&"]"===i.charAt(i.length-1)?i.slice(1,-1):i,l=parseInt(c,10);!isNaN(l)&&i!==c&&String(l)===c&&l>=0&&r.parseArrays&&l<=r.arrayLimit?(a=[])[l]=n:a[c]=n}n=a}return n}(l,t,r)}};e.exports=function(e,t){var r=t?n.assign({},t):{};if(null!==r.decoder&&void 0!==r.decoder&&"function"!==typeof r.decoder)throw new TypeError("Decoder has to be a function.");if(r.ignoreQueryPrefix=!0===r.ignoreQueryPrefix,r.delimiter="string"===typeof r.delimiter||n.isRegExp(r.delimiter)?r.delimiter:a.delimiter,r.depth="number"===typeof r.depth?r.depth:a.depth,r.arrayLimit="number"===typeof r.arrayLimit?r.arrayLimit:a.arrayLimit,r.parseArrays=!1!==r.parseArrays,r.decoder="function"===typeof r.decoder?r.decoder:a.decoder,r.allowDots="boolean"===typeof r.allowDots?r.allowDots:a.allowDots,r.plainObjects="boolean"===typeof r.plainObjects?r.plainObjects:a.plainObjects,r.allowPrototypes="boolean"===typeof r.allowPrototypes?r.allowPrototypes:a.allowPrototypes,r.parameterLimit="number"===typeof r.parameterLimit?r.parameterLimit:a.parameterLimit,r.strictNullHandling="boolean"===typeof r.strictNullHandling?r.strictNullHandling:a.strictNullHandling,""===e||null===e||"undefined"===typeof e)return r.plainObjects?Object.create(null):{};for(var c="string"===typeof e?function(e,t){for(var r={},n=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,i=t.parameterLimit===1/0?void 0:t.parameterLimit,c=n.split(t.delimiter,i),l=0;l<c.length;++l){var s,p,u=c[l],f=u.indexOf("]="),d=-1===f?u.indexOf("="):f+1;-1===d?(s=t.decoder(u,a.decoder),p=t.strictNullHandling?null:""):(s=t.decoder(u.slice(0,d),a.decoder),p=t.decoder(u.slice(d+1),a.decoder)),o.call(r,s)?r[s]=[].concat(r[s]).concat(p):r[s]=p}return r}(e,r):e,l=r.plainObjects?Object.create(null):{},s=Object.keys(c),p=0;p<s.length;++p){var u=s[p],f=i(u,c[u],r);l=n.merge(l,f,r)}return n.compact(l)}},299:function(e,t,r){"use strict";var n=r(1),o=r.n(n),a=r(2),i=r.n(a),c=r(15),l=r.n(c),s=r(43),p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var f=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},d=function(e){function t(){var r,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=Array(o),i=0;i<o;i++)a[i]=arguments[i];return r=n=u(this,e.call.apply(e,[this].concat(a))),n.handleClick=function(e){if(n.props.onClick&&n.props.onClick(e),!e.defaultPrevented&&0===e.button&&!n.props.target&&!f(e)){e.preventDefault();var t=n.context.router.history,r=n.props,o=r.replace,a=r.to;o?t.replace(a):t.push(a)}},u(n,r)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=(e.replace,e.to),r=e.innerRef,n=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}(e,["replace","to","innerRef"]);l()(this.context.router,"You should not use <Link> outside a <Router>"),l()(void 0!==t,'You must specify the "to" property');var a=this.context.router.history,i="string"===typeof t?Object(s.b)(t,null,null,a.location):t,c=a.createHref(i);return o.a.createElement("a",p({},n,{onClick:this.handleClick,href:c,ref:r}))},t}(o.a.Component);d.propTypes={onClick:i.a.func,target:i.a.string,replace:i.a.bool,to:i.a.oneOfType([i.a.string,i.a.object]).isRequired,innerRef:i.a.oneOfType([i.a.string,i.a.func])},d.defaultProps={replace:!1},d.contextTypes={router:i.a.shape({history:i.a.shape({push:i.a.func.isRequired,replace:i.a.func.isRequired,createHref:i.a.func.isRequired}).isRequired}).isRequired},t.a=d},363:function(e,t,r){"use strict";r.r(t);var n=r(19),o=r(20),a=r(22),i=r(21),c=r(23),l=r(1),s=r.n(l),p=r(288),u=r.n(p),f=r(33),d=r(18),y=r(34),m=r(60),b=r.n(m),h=r(82),g=r.n(h),v=r(271),O=r.n(v),j=r(272),w=r.n(j),x=r(278),E=r.n(x),k=r(279),A=r.n(k),N=r(3),R=r(31),C=Object(R.a)([function(e){return e.get("userInfo")}],function(e){return e}),P=r(38),D=r(280),L=r.n(D),H=r(299),S={root:{display:"flex",width:"100%",minHeight:"100%",justifyContent:"flex-start",alignItems:"center",flexDirection:"column",padding:"30px 0",boxSizing:"border-box",backgroundColor:"#fff"},name:{marginTop:"10px",padding:"0 60px"},signature:{marginTop:"5px",color:g.a[600],wordBreak:"break-all",padding:"0 60px"},list:{width:"80%",marginTop:"30px"},text:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},link:{fontSize:"14px",color:g.a[600]}},T=function(e){function t(){var e,r;Object(n.a)(this,t);for(var o=arguments.length,c=new Array(o),l=0;l<o;l++)c[l]=arguments[l];return(r=Object(a.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(c)))).init=function(){var e="";console.log(),e=r.props.location.search?L.a.parse(r.props.location.search.split("?")[1]).name:Object(P.a)("loginname"),r.props.dispatch(N.a.userRequest(e))},r}return Object(c.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.init()}},{key:"render",value:function(){var e=this.props,t=e.classes,r=e.userInfo;return s.a.createElement("div",{className:t.root},s.a.createElement(u.a,{src:r.get("avatar_url")}),s.a.createElement(b.a,{variant:"h6",className:t.name},r.get("loginname")),s.a.createElement(b.a,{component:"p",className:t.signature},"\u79ef\u5206: ",r.get("score")),s.a.createElement("div",{className:t.list},s.a.createElement(b.a,{component:"p"},"\u6700\u8fd1\u521b\u5efa\u8bdd\u9898"),s.a.createElement(O.a,null,r.get("recent_topics")&&r.get("recent_topics").size&&r.get("recent_topics").map(function(e){return s.a.createElement(s.a.Fragment,{key:e.id},s.a.createElement(w.a,{button:!0},s.a.createElement(E.a,{primary:s.a.createElement("p",{className:t.text},s.a.createElement(H.a,{className:t.link,to:{pathname:"/detail",search:"?id=".concat(e.id)}},e.title))})),s.a.createElement(A.a,null))}))),s.a.createElement("div",{className:t.list},s.a.createElement(b.a,{component:"p"},"\u6700\u8fd1\u53c2\u4e0e\u8bdd\u9898"),s.a.createElement(O.a,null,r.get("recent_replies")&&r.get("recent_replies").size&&r.get("recent_replies").map(function(e){return s.a.createElement(s.a.Fragment,{key:e.id},s.a.createElement(w.a,{button:!0},s.a.createElement(E.a,{className:t.text,primary:s.a.createElement("p",{className:t.text},s.a.createElement(H.a,{className:t.link,to:{pathname:"/detail",search:"?id=".concat(e.id)}},e.title))})),s.a.createElement(A.a,null))}))))}}]),t}(s.a.Component);t.default=Object(d.c)(Object(y.b)(function(e){return{userInfo:C(e)}}),Object(f.withStyles)(S))(T)}}]);
//# sourceMappingURL=3.5d12df4b.chunk.js.map