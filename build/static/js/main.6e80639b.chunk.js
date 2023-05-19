(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,function(e,t,n){"use strict";var r=n(0),a=n.n(r).a.createContext({items:[],totalAmount:0,addItem:function(e){},remove:function(e){},clear:function(){}});t.a=a},function(e,t,n){e.exports={button:"HeaderCartButton_button__1VfEp",icon:"HeaderCartButton_icon__1xTaD",badge:"HeaderCartButton_badge__13zej",bump:"HeaderCartButton_bump__1_4ZW"}},,function(e,t,n){e.exports={backdrop:"Modal_backdrop__2wXWr",modal:"Modal_modal__htZpG","slide-down":"Modal_slide-down__218wE"}},function(e,t,n){},function(e,t,n){e.exports={meal:"MealItem_meal__2zHLh",description:"MealItem_description__1q1dC",price:"MealItem_price__2XidF"}},,,,function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(4),i=n.n(o),c=n(5),u=n.n(c),l=function(e){return a.a.createElement("div",{className:u.a.backdrop,onClick:e.onCloseBackDrop})},s=function(e){return a.a.createElement("div",{className:u.a.modal},a.a.createElement("div",{className:u.a.content},e.children))},m=document.getElementById("overlays");t.a=function(e){return a.a.createElement(r.Fragment,null,i.a.createPortal(a.a.createElement(l,{onCloseBackDrop:e.onCloseModal}),m),i.a.createPortal(a.a.createElement(s,null,e.children),m))}},,,function(e,t,n){e.exports={header:"Header_header__2CCdN",search:"Header_search__29i6b"}},function(e,t,n){e.exports=n.p+"static/media/meals.55c74990.jpeg"},function(e,t,n){e.exports={"main-image":"MainImage_main-image__1UU9U"}},function(e,t,n){e.exports={sum:"MealsSummary_sum__viLNz"}},function(e,t,n){e.exports={card:"Card_card__1tOV5"}},function(e,t,n){e.exports={form:"MealItemForm_form__33_nk"}},function(e,t,n){e.exports={input:"Input_input__1MfJI"}},function(e,t,n){e.exports=n(42)},,,,,,,,function(e,t,n){},,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var r=n(13),a=n.n(r),o=n(0),i=n.n(o),c=(n(29),n(1)),u=n(11),l=n(14),s=n.n(l),m=function(){return i.a.createElement("svg",{"data-testid":"cart-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},i.a.createElement("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"}))},f=n(2),d=n(3),h=n.n(d),p=function(e){var t=Object(o.useState)(!1),n=Object(c.a)(t,2),r=n[0],a=n[1],u=Object(o.useContext)(f.a).items,l=u.reduce(function(e,t){return e+t.amount},0),s="".concat(h.a.button," ").concat(r?h.a.bump:"");return Object(o.useEffect)(function(){if(0!==u.length){a(!0);var e=setTimeout(function(){a(!1)},300);return function(){clearTimeout(e)}}},[u]),i.a.createElement("button",{"data-testid":"cart-button",className:s,onClick:e.onClickHeaderCartBtn},i.a.createElement("span",{className:h.a.icon},i.a.createElement(m,null)),i.a.createElement("span",null,"Your Cart"),i.a.createElement("span",{"data-testid":"cart-badge",className:h.a.badge},l))},v=n(15),y=n.n(v),g=n(16),E=n.n(g),b=function(){return i.a.createElement("div",{"data-testid":"main-img",className:E.a["main-image"]},i.a.createElement("img",{src:y.a,alt:"A Table Full Of Delicious Food!."}))},w=function(e){return i.a.createElement(o.Fragment,null,i.a.createElement("header",{className:s.a.header},i.a.createElement("h1",null,"YummyTreat"),i.a.createElement(p,{onClickHeaderCartBtn:e.onShowCartFromHeader})),i.a.createElement(b,null))},_=n(17),x=n.n(_),j=function(){return i.a.createElement("section",{className:x.a.sum},i.a.createElement("h2",null,"Delicious Food, Delivered To You"),i.a.createElement("p",null,"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."),i.a.createElement("p",null,"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"))},O=n(12),C=n(18),L=n.n(C),N=function(e){return i.a.createElement("div",{className:L.a.card},e.children)},k=n(6),I=n.n(k),A=n(7),S=n.n(A),M=n(19),F=n.n(M),H=n(20),P=n.n(H),T=i.a.forwardRef(function(e,t){return i.a.createElement("div",{className:P.a.input},i.a.createElement("label",{htmlFor:e.inputProps.id},e.label),i.a.createElement("input",Object.assign({ref:t},e.inputProps)))}),B=function(e){var t=Object(o.useState)(!0),n=Object(c.a)(t,2),r=n[0],a=n[1],u=Object(o.useRef)();return i.a.createElement("form",{className:F.a.form,onSubmit:function(t){t.preventDefault();var n=u.current.value,r=+n;0===n.trim().length||r<0||r>5?a(!1):e.onAddToCart(r)}},i.a.createElement(T,{ref:u,label:"Quantity",inputProps:{id:"amount_"+e.id,type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),i.a.createElement("button",{type:"submit"},"+ Add"),!r&&i.a.createElement("p",null,"please entered a valid amount (1-5)."))},G=function(e){var t=Object(o.useContext)(f.a),n="$".concat(e.price.toFixed(2));return i.a.createElement("li",{className:S.a.meal},i.a.createElement("div",null,i.a.createElement("h3",null,e.name),i.a.createElement("div",{className:S.a.description},e.description),i.a.createElement("div",{className:S.a.price},n)),i.a.createElement("div",null,i.a.createElement(B,{onAddToCart:function(n){t.addItem({id:e.id,name:e.name,amount:n,price:e.price})}})))};function z(){z=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r=Object.defineProperty||function(e,t,n){e[t]=n.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function u(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(N){u=function(e,t,n){return e[t]=n}}function l(e,t,n,a){var o=t&&t.prototype instanceof f?t:f,i=Object.create(o.prototype),c=new O(a||[]);return r(i,"_invoke",{value:w(e,n,c)}),i}function s(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(N){return{type:"throw",arg:N}}}e.wrap=l;var m={};function f(){}function d(){}function h(){}var p={};u(p,o,function(){return this});var v=Object.getPrototypeOf,y=v&&v(v(C([])));y&&y!==t&&n.call(y,o)&&(p=y);var g=h.prototype=f.prototype=Object.create(p);function E(e){["next","throw","return"].forEach(function(t){u(e,t,function(e){return this._invoke(t,e)})})}function b(e,t){var a;r(this,"_invoke",{value:function(r,o){function i(){return new t(function(a,i){!function r(a,o,i,c){var u=s(e[a],e,o);if("throw"!==u.type){var l=u.arg,m=l.value;return m&&"object"==typeof m&&n.call(m,"__await")?t.resolve(m.__await).then(function(e){r("next",e,i,c)},function(e){r("throw",e,i,c)}):t.resolve(m).then(function(e){l.value=e,i(l)},function(e){return r("throw",e,i,c)})}c(u.arg)}(r,o,a,i)})}return a=a?a.then(i,i):i()}})}function w(e,t,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return L()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var c=_(i,n);if(c){if(c===m)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=s(e,t,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===m)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}function _(e,t){var n=t.method,r=e.iterator[n];if(void 0===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,_(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var a=s(r,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,m;var o=a.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,m):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function C(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,a=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:L}}function L(){return{value:void 0,done:!0}}return d.prototype=h,r(g,"constructor",{value:h,configurable:!0}),r(h,"constructor",{value:d,configurable:!0}),d.displayName=u(h,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,u(e,c,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},E(b.prototype),u(b.prototype,i,function(){return this}),e.AsyncIterator=b,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var i=new b(l(t,n,r,a),o);return e.isGeneratorFunction(n)?i:i.next().then(function(e){return e.done?e.value:i.next()})},E(g),u(g,c,"Generator"),u(g,o,function(){return this}),u(g,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=C,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return i.type="throw",i.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),u=n.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),j(n),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;j(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:C(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),m}},e}var D=function(){var e=Object(o.useState)([]),t=Object(c.a)(e,2),n=t[0],r=t[1],a=Object(o.useState)(!0),u=Object(c.a)(a,2),l=u[0],s=u[1],m=Object(o.useState)(),f=Object(c.a)(m,2),d=f[0],h=f[1];if(Object(o.useEffect)(function(){(function(){var e=Object(O.a)(z().mark(function e(){var t,n,a,o;return z().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://foodorder-7968b-default-rtdb.firebaseio.com/meals.json");case 2:if(t=e.sent,console.log(t),t.ok){e.next=6;break}throw new Error("something went wrong..!");case 6:return e.next=8,t.json();case 8:for(o in n=e.sent,a=[],n)a.push({id:o,name:n[o].name,description:n[o].description,price:n[o].price});r(a),s(!1);case 13:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}})()().catch(function(e){s(!1),h(e.message)})},[]),l)return i.a.createElement("section",{className:I.a.MealsLoading},i.a.createElement("p",null," Meals Loading..."));if(d)return i.a.createElement("section",{className:I.a.MealsError},i.a.createElement("p",null," ",d));var p=n.map(function(e){return i.a.createElement(G,{id:e.id,key:e.id,name:e.name,description:e.description,price:e.price})});return i.a.createElement("section",{className:I.a.meals},i.a.createElement(N,null,i.a.createElement("ul",null,p)))},R=function(e){return i.a.createElement(o.Fragment,null,i.a.createElement(j,null),i.a.createElement(D,null))},Y=n(9),q=n(8),J={items:[],totalAmount:0},U=function(e,t){if("Add-Cart-Item"===t.identifier){var n,r=e.items.findIndex(function(e){return e.id===t.item.id}),a=e.items[r],o=e.totalAmount+t.item.price*t.item.amount;if(a){var i=Object(q.a)({},a,{amount:a.amount+t.item.amount});(n=Object(Y.a)(e.items))[r]=i}else n=e.items.concat(t.item);return{items:n,totalAmount:o}}if("Remove-Cart-Item"===t.identifier){var c,u=e.items.findIndex(function(e){return e.id===t.id}),l=e.items[u],s=e.totalAmount-l.price;if(1===l.amount)c=e.items.filter(function(e){return e.id!==t.id});else{var m=Object(q.a)({},l,{amount:l.amount-1});(c=Object(Y.a)(e.items))[u]=m}return{items:c,totalAmount:s}}return t.identifier,J},V=function(e){var t=Object(o.useReducer)(U,J),n=Object(c.a)(t,2),r=n[0],a=n[1],u={items:r.items,totalAmount:r.totalAmount,addItem:function(e){a({identifier:"Add-Cart-Item",item:e})},remove:function(e){a({identifier:"Remove-Cart-Item",id:e})},clearCartAfterSubmit:function(){a({identifier:"Clear"})}};return i.a.createElement(f.a.Provider,{value:u},e.children)},W=Object(o.lazy)(function(){return n.e(1).then(n.bind(null,49))});var X=function(){var e=Object(o.useState)(!1),t=Object(c.a)(e,2),n=t[0],r=t[1],a=Object(o.useState)(!0),l=Object(c.a)(a,2),s=l[0],m=l[1];return i.a.createElement(V,null,n&&i.a.createElement(o.Suspense,{fallback:i.a.createElement("p",null,"Loading...")},i.a.createElement(W,{onCloseCartBtn:function(){r(!1)}})),!s&&i.a.createElement(u.a,{onCloseModal:function(){m(!0)}},i.a.createElement("p",null,"We are offline as of now, do enjoy these quotes below"),i.a.createElement("p",null,"\u201cPart of the secret of success is to eat what you like and let the food fight it out inside.\u201d")),i.a.createElement(w,{onShowCartFromHeader:function(){r(!0)}}),i.a.createElement("main",null,i.a.createElement(R,null)))};a.a.createRoot(document.getElementById("root")).render(i.a.createElement(X,null))}],[[21,3,2]]]);
//# sourceMappingURL=main.6e80639b.chunk.js.map