(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{43:function(t,e,r){t.exports={"cart-item":"CartItem_cart-item__FDy3U",summary:"CartItem_summary__zOwgF",price:"CartItem_price__1Ap4N",amount:"CartItem_amount__39KY7",actions:"CartItem_actions__1Oeqa"}},45:function(t,e,r){t.exports={"cart-items":"Cart_cart-items__25UVU",total:"Cart_total__4B0bG",actions:"Cart_actions__fhk4c","button--alt":"Cart_button--alt__3-pY1",button:"Cart_button__wrQqF"}},47:function(t,e,r){t.exports={form:"CheckoutForm_form__2geY0",control:"CheckoutForm_control__2uSDX",actions:"CheckoutForm_actions__35WVE",submit:"CheckoutForm_submit__9yMP2",invalid:"CheckoutForm_invalid__2fMfW","error-text":"CheckoutForm_error-text__1TeHF","button--alt":"CheckoutForm_button--alt__1VbsO",button:"CheckoutForm_button__FeRgT"}},49:function(t,e,r){"use strict";r.r(e);var n=r(12),a=r(8),o=r(1),i=r(0),c=r.n(i),l=r(11),u=r(43),s=r.n(u),m=function(t){var e="$".concat(t.price.toFixed(2));return c.a.createElement("li",{className:s.a["cart-item"]},c.a.createElement("div",null,c.a.createElement("h2",null,t.name),c.a.createElement("div",{className:s.a.summary},c.a.createElement("span",{className:s.a.price},e),c.a.createElement("span",{className:s.a.amount},"x ",t.amount))),c.a.createElement("div",{className:s.a.actions},c.a.createElement("button",{onClick:t.onRemoveCartItem},"\u2212"),c.a.createElement("button",{onClick:t.onAddCartItem},"+")))},f=r(45),h=r.n(f),d=r(2),p=function(t){var e=Object(i.useState)(""),r=Object(o.a)(e,2),n=r[0],a=r[1],c=Object(i.useState)(!1),l=Object(o.a)(c,2),u=l[0],s=l[1],m=t(n);return{value:n,hasError:!m&&u,isValid:m,valueChangeHandler:function(t){a(t.target.value),s(!0)},inputBlurHandler:function(t){a(t.target.value),s(!0)},reset:function(){a(""),s(!1)}}},v=r(47),y=r.n(v),b=function(t){var e=p(function(t){return""!==t.trim()}),r=e.value,n=e.isValid,a=e.hasError,l=e.valueChangeHandler,u=e.inputBlurHandler,s=e.reset,m=Object(i.useState)(""),f=Object(o.a)(m,2),h=f[0],d=f[1],v=Object(i.useState)(""),b=Object(o.a)(v,2),g=b[0],E=b[1],_=Object(i.useState)(""),w=Object(o.a)(_,2),C=w[0],O=w[1],x=Object(i.useState)(!1),j=Object(o.a)(x,2),N=j[0],L=j[1],k=Object(i.useState)(!1),F=Object(o.a)(k,2),S=F[0],I=F[1],P=Object(i.useState)(!1),B=Object(o.a)(P,2),G=B[0],T=B[1],A=""!==h.trim(),V=!A&&N,Y=""!==g.trim(),H=!Y&&S,D=5===C.trim().length,J=!D&&G,M=function(t){switch(t.target.id){case"street":L(!0);break;case"city":I(!0);break;case"postalcode":T(!0)}},R="".concat(y.a.control,"\n   ").concat(a?y.a.invalid:""),U="".concat(y.a.control,"\n    ").concat(V?y.a.invalid:""),q="".concat(y.a.control,"\n    ").concat(H?y.a.invalid:""),W="".concat(y.a.control,"\n    ").concat(J?y.a.invalid:"");return c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),n&&Y&&A&&D&&(t.onConfirmOrder({name:r,street:h,city:g,postalCode:C}),s(),d(""),L(!1),E(""),I(!1),O(""),T(!1))}},c.a.createElement("div",{className:R},c.a.createElement("label",{htmlFor:"name"},"Your Name : "),c.a.createElement("input",{type:"text",id:"name",onChange:l,onBlur:u,value:r}),a&&c.a.createElement("p",{className:"error-text"},"Name must not be empty,Enter Valid Name")),c.a.createElement("div",{className:U},c.a.createElement("label",{htmlFor:"street"},"Street"),c.a.createElement("input",{type:"text",id:"street",onChange:function(t){d(t.target.value),L(!0)},onBlur:M,value:h}),V&&N&&c.a.createElement("p",{className:"error-text"},"Enter Valid Street Name")),c.a.createElement("div",{className:q},c.a.createElement("label",{htmlFor:"city"},"City"),c.a.createElement("input",{type:"text",id:"city",onChange:function(t){E(t.target.value),I(!0)},onBlur:M,value:g}),H&&S&&c.a.createElement("p",null,"Enter your City Name")),c.a.createElement("div",{className:W},c.a.createElement("label",{htmlFor:"postalcode"},"Postal Code"),c.a.createElement("input",{type:"number",id:"postalcode",onChange:function(t){O(t.target.value),T(!0)},onBlur:M,value:C}),J&&G&&c.a.createElement("p",null,"Enter Valid Postal Code (no long Five) ")),c.a.createElement("div",{className:y.a.actions},c.a.createElement("button",{type:"button",onClick:t.onCancel,className:y.a["button--alt"]},"Cancel"),c.a.createElement("button",{className:y.a.button}," Confirm ")))};function g(){g=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(k){l=function(t,e,r){return t[e]=r}}function u(t,e,r,a){var o=e&&e.prototype instanceof f?e:f,i=Object.create(o.prototype),c=new j(a||[]);return n(i,"_invoke",{value:w(t,r,c)}),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(k){return{type:"throw",arg:k}}}t.wrap=u;var m={};function f(){}function h(){}function d(){}var p={};l(p,o,function(){return this});var v=Object.getPrototypeOf,y=v&&v(v(N([])));y&&y!==e&&r.call(y,o)&&(p=y);var b=d.prototype=f.prototype=Object.create(p);function E(t){["next","throw","return"].forEach(function(e){l(t,e,function(t){return this._invoke(e,t)})})}function _(t,e){var a;n(this,"_invoke",{value:function(n,o){function i(){return new e(function(a,i){!function n(a,o,i,c){var l=s(t[a],t,o);if("throw"!==l.type){var u=l.arg,m=u.value;return m&&"object"==typeof m&&r.call(m,"__await")?e.resolve(m.__await).then(function(t){n("next",t,i,c)},function(t){n("throw",t,i,c)}):e.resolve(m).then(function(t){u.value=t,i(u)},function(t){return n("throw",t,i,c)})}c(l.arg)}(n,o,a,i)})}return a=a?a.then(i,i):i()}})}function w(t,e,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return L()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=C(i,r);if(c){if(c===m)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===m)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}function C(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,C(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),m;var a=s(n,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,m;var o=a.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,m):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,m)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function N(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:L}}function L(){return{value:void 0,done:!0}}return h.prototype=d,n(b,"constructor",{value:d,configurable:!0}),n(d,"constructor",{value:h,configurable:!0}),h.displayName=l(d,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,l(t,c,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},E(_.prototype),l(_.prototype,i,function(){return this}),t.AsyncIterator=_,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new _(u(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},E(b),l(b,c,"Generator"),l(b,o,function(){return this}),l(b,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=N,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),x(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;x(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:N(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),m}},t}e.default=function(t){var e=Object(i.useState)(!1),r=Object(o.a)(e,2),u=r[0],s=r[1],f=Object(i.useState)(!1),p=Object(o.a)(f,2),v=p[0],y=p[1],E=Object(i.useContext)(d.a),_="$".concat(E.totalAmount.toFixed(2)),w=E.items.length>0,C=function(t){E.remove(t)},O=function(t){E.addItem(Object(a.a)({},t,{amount:1}))},x=function(){var t=Object(n.a)(g().mark(function t(e){return g().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return s(!0),t.next=3,fetch("https://foodorder-7968b-default-rtdb.firebaseio.com/orders.json",{method:"POST",body:JSON.stringify({user:e,orderedItems:E.items})});case 3:s(!1),y(!0),E.clearCartAfterSubmit();case 6:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),j=c.a.createElement("ul",{className:h.a["cart-items"]},E.items.map(function(t){return c.a.createElement(m,{key:t.id,name:t.name,amount:t.amount,price:t.price,onRemoveCartItem:C.bind(null,t.id),onAddCartItem:O.bind(null,t)})})),N=c.a.createElement(c.a.Fragment,null,j,c.a.createElement("div",{className:h.a.total},c.a.createElement("span",null,"Total Amount"),c.a.createElement("span",null,_)),w&&c.a.createElement(b,{onConfirmOrder:x,onCancel:t.onCloseCartBtn})),L=c.a.createElement("p",null,"sending order data..."),k=c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"successfully send the order.., we will notify you once the order is ready."),c.a.createElement("div",{className:h.a.actions},c.a.createElement("button",{className:h.a.button,onClick:t.onCloseCartBtn},"Close")));return c.a.createElement(l.a,{onCloseModal:t.onCloseCartBtn},!u&&!v&&N,u&&L,!u&&v&&k)}}}]);
//# sourceMappingURL=1.8aa05ee9.chunk.js.map