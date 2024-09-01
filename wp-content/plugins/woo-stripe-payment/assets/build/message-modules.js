(()=>{"use strict";var e={996:(e,t)=>{function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,i(n.key),n)}}function i(e){var t=function(e,t){if("object"!=r(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!=r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==r(t)?t:t+""}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(){return e=function e(t,r){var n=r.elementType,o=void 0===n?"":n,i=r.elementId,a=void 0===i?"":i,u=r.isSupported,c=void 0===u?function(){return!0}:u;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.gateway=t,this.elementType=o,this.elementId=a,this.isSupported=c,this.msgElement=null},t=[{key:"getElementType",value:function(){return this.elementType}},{key:"createMessage",value:function(){if(this.isSupported(this.gateway)&&this.createMessageElement()){var e=this.getElementContainer();e&&this.mount(e)}}},{key:"createMessageElement",value:function(){try{if(this.msgElement)this.msgElement.update(this.getMessageOptions());else if(this.gateway.elements){var e=this.gateway.params.elementOptions,t=e.locale,r=void 0===t?"auto":t,n=e.appearance,o=void 0===n?{}:n,i=this.gateway.stripe.elements({locale:r,appearance:o});this.msgElement=i.create(this.getElementType(),this.getMessageOptions())}}catch(e){}return this.msgElement}},{key:"getMessageOptions",value:function(){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){var n,o,a;n=e,o=t,a=r[t],(o=i(o))in n?Object.defineProperty(n,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[o]=a})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({amount:this.getTotalPriceCents(),currency:this.gateway.get_currency()},this.gateway.params.messageOptions)}},{key:"mount",value:function(e){try{this.msgElement.mount(e)}catch(e){console.log(e)}}},{key:"getElementContainer",value:function(){}},{key:"getTotalPriceCents",value:function(){var e;return null===(e=this.gateway.get_gateway_data())||void 0===e?void 0:e.total_cents}},{key:"getTotalPrice",value:function(){var e;return null===(e=this.gateway.get_gateway_data())||void 0===e?void 0:e.total}}],t&&o(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t}();t.default=a},448:(e,t,r)=>{function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(r(428));function i(e){return e&&e.__esModule?e:{default:e}}function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,u(n.key),n)}}function u(e){var t=function(e,t){if("object"!=n(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!=n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==n(t)?t:t+""}function c(e,t,r){return t=s(t),function(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,l()?Reflect.construct(t,r||[],s(e).constructor):t.apply(e,r))}function l(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(l=function(){return!!e})()}function s(e){return s=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},s(e)}function f(e,t){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},f(e,t)}var y=function(e){function t(e,r){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=c(this,t,[e,r])).containerId=r.containerId,n.initialize(),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}(t,e),r=t,(n=[{key:"initialize",value:function(){(0,o.default)(document.body).on("updated_wc_div",this.updatedHtml.bind(this)),(0,o.default)(document.body).on("updated_cart_totals",this.updatedHtml.bind(this)),this.createMessage()}},{key:"updatedHtml",value:function(){this.gateway.has_gateway_data()&&this.createMessage()}},{key:"getElementContainer",value:function(){return(0,o.default)("#".concat(this.elementId)).length||(0,o.default)(".cart_totals table.shop_table > tbody").append('<tr id="'.concat(this.containerId,'"><td colspan="2"><div id="').concat(this.elementId,'"></div></td></tr>')),document.getElementById(this.elementId)}}])&&a(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,n}(i(r(996)).default);t.default=y},434:(e,t)=>{function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,a(n.key),n)}}function a(e){var t=function(e,t){if("object"!=r(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!=r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==r(t)?t:t+""}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=function(){return e=function e(t,r,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.id=n.id,this.elementType=n.elementType,this.props=n,this.stripe=t,this.elements=t.elements({locale:"auto"}),this.data=r,this.initialize()},t=[{key:"initialize",value:function(){this.createMessages()}},{key:"createMessages",value:function(){if(this.props.isSupported(this)){var e,t=function(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,i=function(){};return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u=!0,c=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return u=e.done,e},e:function(e){c=!0,a=e},f:function(){try{u||null==r.return||r.return()}finally{if(c)throw a}}}}(this.data.products);try{for(t.s();!(e=t.n()).done;){var r=e.value;this.isSupportedProduct(r)&&this.createMessage(r)}}catch(e){t.e(e)}finally{t.f()}}}},{key:"createMessage",value:function(e){try{var t=this.elements.create(this.elementType,this.getMessageOptions(e)),r=this.getMessageContainer(e);r&&t.mount(r)}catch(e){console.log(e)}}},{key:"isSupportedProduct",value:function(e){var t=!this.data.excluded_product_types.includes(e.product_type);return t&&this.props.isSupportedProduct&&(t=this.props.isSupportedProduct(this,e)),t}},{key:"getMessageContainer",value:function(e){var t="".concat(this.id,"-").concat(e.id);return t="wc-stripe-shop-message-".concat(t),document.getElementById("".concat(t))}},{key:"getMessageOptions",value:function(e){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){var n,o,i;n=e,o=t,i=r[t],(o=a(o))in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({amount:e.price_cents,currency:this.data.currency},this.data[this.id].messageOptions)}}],t&&i(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t}();t.default=u},194:(e,t,r)=>{function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(r(428));function i(e){return e&&e.__esModule?e:{default:e}}function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,u(n.key),n)}}function u(e){var t=function(e,t){if("object"!=n(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!=n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==n(t)?t:t+""}function c(e,t,r){return t=f(t),function(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,l()?Reflect.construct(t,r||[],f(e).constructor):t.apply(e,r))}function l(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(l=function(){return!!e})()}function s(){return s="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=f(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},s.apply(this,arguments)}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}function y(e,t){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},y(e,t)}var p=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=c(this,t,[].concat(n))).initialize(),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&y(e,t)}(t,e),r=t,(n=[{key:"isEnabled",value:function(){return this.gateway.params.payment_sections.includes("checkout")}},{key:"initialize",value:function(){this.isEnabled()&&((0,o.default)(document.body).on("updated_checkout",this.updatedCheckout.bind(this)),this.gateway.has_gateway_data()&&this.createMessage())}},{key:"updatedCheckout",value:function(){this.createMessage()}},{key:"createMessage",value:function(){this.gateway.has_gateway_data()&&s(f(t.prototype),"createMessage",this).call(this)}},{key:"getElementContainer",value:function(){return(0,o.default)("#".concat(this.elementId)).length||(0,o.default)('label[for="payment_method_'.concat(this.gateway.gateway_id,'"]')).append('<div id="'.concat(this.elementId,'"></div>')),document.getElementById(this.elementId)}}])&&a(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,n}(i(r(996)).default);t.default=p},583:(e,t,r)=>{function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(r(428));function i(e){return e&&e.__esModule?e:{default:e}}function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,u(n.key),n)}}function u(e){var t=function(e,t){if("object"!=n(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!=n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==n(t)?t:t+""}function c(e,t,r){return t=s(t),function(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,l()?Reflect.construct(t,r||[],s(e).constructor):t.apply(e,r))}function l(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(l=function(){return!!e})()}function s(e){return s=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},s(e)}function f(e,t){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},f(e,t)}var y=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=c(this,t,[].concat(n))).initialize(),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}(t,e),r=t,n=[{key:"initialize",value:function(){(0,o.default)(document.body).on("change",'[name="quantity"]',this.createMessage.bind(this,!0)),(0,o.default)("form.cart").on("found_variation",this.foundVariation.bind(this)),(0,o.default)("form.cart").on("reset_data",this.resetVariationData.bind(this)),this.createMessage()}},{key:"foundVariation",value:function(){var e;(e=this.gateway).found_variation.apply(e,arguments),this.createMessage()}},{key:"resetVariationData",value:function(){var e;(e=this.gateway).reset_variation_data.apply(e,arguments),this.createMessage()}},{key:"getElementContainer",value:function(){return(0,o.default)("#".concat(this.elementId)).length||((0,o.default)(".summary .price").length?(0,o.default)(".summary .price").append('<div id="'.concat(this.elementId,'"></div>')):(0,o.default)(".price").length&&(0,o.default)((0,o.default)(".price")[0]).append('<div id="'.concat(this.elementId,'"></div>'))),document.getElementById(this.elementId)}},{key:"getTotalPriceCents",value:function(){var e;return this.gateway.has_gateway_data()?(null===(e=this.gateway.get_gateway_data())||void 0===e||null===(e=e.product)||void 0===e?void 0:e.price_cents)*this.getQuantity():0}},{key:"getQuantity",value:function(){var e=(0,o.default)('[name="quantity"]').val();return isNaN(e)&&(e=0),parseInt(e)}}],n&&a(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,n}(i(r(996)).default);t.default=y},428:e=>{e.exports=window.jQuery}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,r),i.exports}var n={};(()=>{var e=n;Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"AbstractMessage",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"CartMessage",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(e,"CategoryMessage",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(e,"CheckoutMessage",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(e,"ProductMessage",{enumerable:!0,get:function(){return o.default}});var t=c(r(996)),o=c(r(583)),i=c(r(448)),a=c(r(194)),u=c(r(434));function c(e){return e&&e.__esModule?e:{default:e}}})(),(this.wcStripeModules=this.wcStripeModules||{}).messageModules=n})();
//# sourceMappingURL=message-modules.js.map