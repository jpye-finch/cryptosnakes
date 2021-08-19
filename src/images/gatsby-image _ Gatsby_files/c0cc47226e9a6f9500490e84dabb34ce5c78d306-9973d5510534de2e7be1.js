/*! For license information please see c0cc47226e9a6f9500490e84dabb34ce5c78d306-9973d5510534de2e7be1.js.LICENSE.txt */
(self.webpackChunkgatsbyjs_com=self.webpackChunkgatsbyjs_com||[]).push([[4589],{40156:function(e,t,r){"use strict";var n=r(67294),o=r(12265),a=r(27490),i=r(25342),c=r(85413),s=r(8812),u=r(15706),f=r.n(u);function l(e,t){if(!e){var r=new Error("loadable: "+t);throw r.framesToPop=1,r.name="Invariant Violation",r}}var p=n.createContext();var d={initialChunks:{}};var y=function(e){return e};function h(e){var t=e.defaultResolveComponent,r=void 0===t?y:t,u=e.render,h=e.onLoad;function m(e,t){void 0===t&&(t={});var y=function(e){return"function"==typeof e?{requireAsync:e}:e}(e),m={};function b(e){return t.cacheKey?t.cacheKey(e):y.resolve?y.resolve(e):null}function v(e,n,o){var a=t.resolveComponent?t.resolveComponent(e,n):r(e);if(t.resolveComponent&&!(0,s.isValidElementType)(a))throw new Error("resolveComponent returned something that is not a React component!");return f()(o,a,{preload:!0}),a}var g,S=function(e){function r(r){var n;return(n=e.call(this,r)||this).state={result:null,error:null,loading:!0,cacheKey:b(r)},n.promise=null,l(!r.__chunkExtractor||y.requireSync,"SSR requires `@loadable/babel-plugin`, please install it"),r.__chunkExtractor?(!1===t.ssr||(y.requireAsync(r).catch((function(){})),n.loadSync(),r.__chunkExtractor.addChunk(y.chunkName(r))),(0,i.Z)(n)):(!1!==t.ssr&&(y.isReady&&y.isReady(r)||y.chunkName&&d.initialChunks[y.chunkName(r)])&&n.loadSync(),n)}(0,c.Z)(r,e),r.getDerivedStateFromProps=function(e,t){var r=b(e);return(0,a.Z)({},t,{cacheKey:r,loading:t.loading||t.cacheKey!==r})};var n=r.prototype;return n.componentDidMount=function(){this.mounted=!0,this.state.loading?this.loadAsync():this.state.error||this.triggerOnLoad()},n.componentDidUpdate=function(e,t){t.cacheKey!==this.state.cacheKey&&(this.promise=null,this.loadAsync())},n.componentWillUnmount=function(){this.mounted=!1},n.safeSetState=function(e,t){this.mounted&&this.setState(e,t)},n.triggerOnLoad=function(){var e=this;h&&setTimeout((function(){h(e.state.result,e.props)}))},n.loadSync=function(){if(this.state.loading)try{var e=v(y.requireSync(this.props),this.props,C);this.state.result=e,this.state.loading=!1}catch(t){this.state.error=t}},n.getCacheKey=function(){return b(this.props)||JSON.stringify(this.props)},n.getCache=function(){return m[this.getCacheKey()]},n.setCache=function(e){m[this.getCacheKey()]=e},n.loadAsync=function(){var e=this;if(!this.promise){var r=this.props,n=(r.__chunkExtractor,r.forwardedRef,(0,o.Z)(r,["__chunkExtractor","forwardedRef"]));this.promise=y.requireAsync(n).then((function(r){var n=v(r,e.props,C);t.suspense&&e.setCache(n),e.safeSetState({result:v(r,e.props,C),loading:!1},(function(){return e.triggerOnLoad()}))})).catch((function(t){e.safeSetState({error:t,loading:!1})}))}return this.promise},n.render=function(){var e=this.props,r=e.forwardedRef,n=e.fallback,i=(e.__chunkExtractor,(0,o.Z)(e,["forwardedRef","fallback","__chunkExtractor"])),c=this.state,s=c.error,f=c.loading,l=c.result;if(t.suspense){var p=this.getCache();if(!p)throw this.loadAsync();return u({loading:!1,fallback:null,result:p,options:t,props:(0,a.Z)({},i,{ref:r})})}if(s)throw s;var d=n||t.fallback||null;return f?d:u({loading:f,fallback:d,result:l,options:t,props:(0,a.Z)({},i,{ref:r})})},r}(n.Component),w=(g=S,function(e){return n.createElement(p.Consumer,null,(function(t){return n.createElement(g,Object.assign({__chunkExtractor:t},e))}))}),C=n.forwardRef((function(e,t){return n.createElement(w,Object.assign({forwardedRef:t},e))}));return C.preload=function(e){y.requireAsync(e)},C.load=function(e){return y.requireAsync(e)},C}return{loadable:m,lazy:function(e,t){return m(e,(0,a.Z)({},t,{suspense:!0}))}}}var m=h({defaultResolveComponent:function(e){return e.__esModule?e.default:e.default||e},render:function(e){var t=e.result,r=e.props;return n.createElement(t,r)}}),b=m.loadable,v=m.lazy,g=h({onLoad:function(e,t){e&&t.forwardedRef&&("function"==typeof t.forwardedRef?t.forwardedRef(e):t.forwardedRef.current=e)},render:function(e){var t=e.result,r=e.loading,n=e.props;return!r&&n.children?n.children(t):null}}),S=g.loadable,w=g.lazy;var C=b;C.lib=S,v.lib=w;t.ZP=C},15706:function(e,t,r){"use strict";var n=r(8812),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},c={};function s(e){return n.isMemo(e)?i:c[e.$$typeof]||o}c[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},c[n.Memo]=i;var u=Object.defineProperty,f=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,d=Object.getPrototypeOf,y=Object.prototype;e.exports=function e(t,r,n){if("string"!=typeof r){if(y){var o=d(r);o&&o!==y&&e(t,o,n)}var i=f(r);l&&(i=i.concat(l(r)));for(var c=s(t),h=s(r),m=0;m<i.length;++m){var b=i[m];if(!(a[b]||n&&n[b]||h&&h[b]||c&&c[b])){var v=p(r,b);try{u(t,b,v)}catch(g){}}}}return t}},10165:function(e,t){"use strict";var r="function"==typeof Symbol&&Symbol.for,n=r?Symbol.for("react.element"):60103,o=r?Symbol.for("react.portal"):60106,a=r?Symbol.for("react.fragment"):60107,i=r?Symbol.for("react.strict_mode"):60108,c=r?Symbol.for("react.profiler"):60114,s=r?Symbol.for("react.provider"):60109,u=r?Symbol.for("react.context"):60110,f=r?Symbol.for("react.async_mode"):60111,l=r?Symbol.for("react.concurrent_mode"):60111,p=r?Symbol.for("react.forward_ref"):60112,d=r?Symbol.for("react.suspense"):60113,y=r?Symbol.for("react.suspense_list"):60120,h=r?Symbol.for("react.memo"):60115,m=r?Symbol.for("react.lazy"):60116,b=r?Symbol.for("react.block"):60121,v=r?Symbol.for("react.fundamental"):60117,g=r?Symbol.for("react.responder"):60118,S=r?Symbol.for("react.scope"):60119;function w(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case f:case l:case a:case c:case i:case d:return e;default:switch(e=e&&e.$$typeof){case u:case p:case m:case h:case s:return e;default:return t}}case o:return t}}}function C(e){return w(e)===l}t.AsyncMode=f,t.ConcurrentMode=l,t.ContextConsumer=u,t.ContextProvider=s,t.Element=n,t.ForwardRef=p,t.Fragment=a,t.Lazy=m,t.Memo=h,t.Portal=o,t.Profiler=c,t.StrictMode=i,t.Suspense=d,t.isAsyncMode=function(e){return C(e)||w(e)===f},t.isConcurrentMode=C,t.isContextConsumer=function(e){return w(e)===u},t.isContextProvider=function(e){return w(e)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return w(e)===p},t.isFragment=function(e){return w(e)===a},t.isLazy=function(e){return w(e)===m},t.isMemo=function(e){return w(e)===h},t.isPortal=function(e){return w(e)===o},t.isProfiler=function(e){return w(e)===c},t.isStrictMode=function(e){return w(e)===i},t.isSuspense=function(e){return w(e)===d},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===a||e===l||e===c||e===i||e===d||e===y||"object"==typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===h||e.$$typeof===s||e.$$typeof===u||e.$$typeof===p||e.$$typeof===v||e.$$typeof===g||e.$$typeof===S||e.$$typeof===b)},t.typeOf=w},8812:function(e,t,r){"use strict";e.exports=r(10165)},25342:function(e,t,r){"use strict";function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}r.d(t,{Z:function(){return n}})}}]);
//# sourceMappingURL=c0cc47226e9a6f9500490e84dabb34ce5c78d306-9973d5510534de2e7be1.js.map