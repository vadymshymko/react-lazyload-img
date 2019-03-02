!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n(require("react")):"function"==typeof define&&define.amd?define(["react"],n):"object"==typeof exports?exports.ReactjsLazilyLoadImg=n(require("react")):e.ReactjsLazilyLoadImg=n(e.React)}(window,function(e){return function(e){var n={};function o(r){if(n[r])return n[r].exports;var t=n[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,o),t.l=!0,t.exports}return o.m=e,o.c=n,o.d=function(e,n,r){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,n){if(1&n&&(e=o(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)o.d(r,t,function(n){return e[n]}.bind(null,t));return r},o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="",o(o.s=11)}([function(e,n,o){e.exports=o(15)()},function(e,n){e.exports=function(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}},function(e,n){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},function(n,o){n.exports=e},function(e,n){function o(){return e.exports=o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},o.apply(this,arguments)}e.exports=o},function(e,n,o){var r=o(12);e.exports=function(e,n){if(null==e)return{};var o,t,i=r(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)o=a[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}},function(e,n){e.exports=function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}},function(e,n){function o(e,n){for(var o=0;o<n.length;o++){var r=n[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,n,r){return n&&o(e.prototype,n),r&&o(e,r),e}},function(e,n,o){var r=o(13),t=o(2);e.exports=function(e,n){return!n||"object"!==r(n)&&"function"!=typeof n?t(e):n}},function(e,n){function o(n){return e.exports=o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},o(n)}e.exports=o},function(e,n,o){var r=o(14);e.exports=function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&r(e,n)}},function(e,n,o){"use strict";o.r(n);var r=o(4),t=o.n(r),i=o(5),a=o.n(i),c=o(6),l=o.n(c),s=o(7),u=o.n(s),f=o(8),d=o.n(f),p=o(9),m=o.n(p),y=o(2),b=o.n(y),h=o(10),g=o.n(h),v=o(1),O=o.n(v),L=o(3),S=o.n(L),E=o(0),w=o.n(E),P=function(e){function n(e){var o;return l()(this,n),o=d()(this,m()(n).call(this,e)),O()(b()(o),"lazyLoad",function(e){o.observer?e.forEach(function(e){e.isIntersecting&&(o.loadMainImg(),o.observer.unobserve(o.img))}):!1===o.isActive&&(o.isActive=!0,setTimeout(function(){o.img.getBoundingClientRect().top<=window.innerHeight&&o.img.getBoundingClientRect().bottom>=0&&"none"!==getComputedStyle(o.img).display&&(document.removeEventListener("scroll",o.lazyLoad),window.removeEventListener("resize",o.lazyLoad),window.removeEventListener("orientationchange",o.lazyLoad),o.loadMainImg()),o.isActive=!1},200))}),O()(b()(o),"handleImgRef",function(e){o.img=e}),O()(b()(o),"handleLoad",function(e){var n=o.props,r=n.onPlaceholderLoad,t=n.onLoad,i=n.loadAfterPlaceholderEnd,a=n.useObserverFallback;o.isMainImgLoading?t(e):(r(e),!i&&("IntersectionObserver"in window||a)||o.loadMainImg())}),O()(b()(o),"handleError",function(e){var n=o.props,r=n.onPlaceholderError,t=n.onError,i=n.loadAfterPlaceholderEnd;o.isMainImgLoading?t(e):(r(e),i&&o.loadMainImg())}),O()(b()(o),"loadMainImg",function(){var e=o.props,n=e.src,r=e.srcSet,t=e.className,i=e.onLoad,a=e.onError;o.img&&(n||r)&&(o.isMainImgLoading=!0,o.img.onLoad=i,o.img.onError=a,o.img.src=n,o.img.srcSet=r,o.img.className=t)}),o.img=null,o.observer=null,o.isActive=!1,o.isMainImgLoading=!1,o}return g()(n,e),u()(n,[{key:"componentDidMount",value:function(){this.img&&("IntersectionObserver"in window?(this.observer=new IntersectionObserver(this.lazyLoad),this.observer.observe(this.img)):this.img.getBoundingClientRect().top<=window.innerHeight&&this.img.getBoundingClientRect().bottom>=0&&"none"!==getComputedStyle(this.img).display?this.loadMainImg():(document.addEventListener("scroll",this.lazyLoad),window.addEventListener("resize",this.lazyLoad),window.addEventListener("orientationchange",this.lazyLoad)))}},{key:"componentWillUnmount",value:function(){"IntersectionObserver"in window&&this.observer&&this.img&&this.observer.unobserve(this.img),document.removeEventListener("scroll",this.lazyLoad),window.removeEventListener("resize",this.lazyLoad),window.removeEventListener("orientationchange",this.lazyLoad)}},{key:"render",value:function(){var e=this.props,n=e.placeholderSrc,o=e.placeholderSrcSet,r=e.placeholderClassName,i=(e.onPlaceholderLoad,e.onPlaceholderError,e.src),c=e.srcSet,l=(e.className,e.onLoad,e.onError,e.loadAfterPlaceholderEnd,e.useObserverFallback,a()(e,["placeholderSrc","placeholderSrcSet","placeholderClassName","onPlaceholderLoad","onPlaceholderError","src","srcSet","className","onLoad","onError","loadAfterPlaceholderEnd","useObserverFallback"]));return n||o||i||c?S.a.createElement("img",t()({},l,{src:n,srcSet:o,className:r,onLoad:this.handleLoad,onError:this.handleError,ref:this.handleImgRef})):null}}]),n}(L.Component);O()(P,"propTypes",{placeholderSrc:w.a.string,placeholderSrcSet:w.a.string,placeholderClassName:w.a.string,onPlaceholderLoad:w.a.func,onPlaceholderError:w.a.func,src:w.a.string,srcSet:w.a.string,className:w.a.string,onLoad:w.a.func,onError:w.a.func,loadAfterPlaceholderEnd:w.a.bool,useObserverFallback:w.a.bool}),O()(P,"defaultProps",{placeholderSrc:null,placeholderSrcSet:null,placeholderClassName:"",onPlaceholderLoad:function(){},onPlaceholderError:function(){},src:null,srcSet:null,className:"",onLoad:function(){},onError:function(){},loadAfterPlaceholderEnd:!1,useObserverFallback:!0}),n.default=P},function(e,n){e.exports=function(e,n){if(null==e)return{};var o,r,t={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],n.indexOf(o)>=0||(t[o]=e[o]);return t}},function(e,n){function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(n){return"function"==typeof Symbol&&"symbol"===o(Symbol.iterator)?e.exports=r=function(e){return o(e)}:e.exports=r=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":o(e)},r(n)}e.exports=r},function(e,n){function o(n,r){return e.exports=o=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},o(n,r)}e.exports=o},function(e,n,o){"use strict";var r=o(16);function t(){}function i(){}i.resetWarningCache=t,e.exports=function(){function e(e,n,o,t,i,a){if(a!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function n(){return e}e.isRequired=e;var o={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:i,resetWarningCache:t};return o.PropTypes=o,o}},function(e,n,o){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}])});