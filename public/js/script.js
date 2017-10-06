/*! jQuery v1.9.0 | (c) 2005, 2012 jQuery Foundation, Inc. | jquery.org/license */(function(e,t){"use strict";function n(e){var t=e.length,n=st.type(e);return st.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}function r(e){var t=Tt[e]={};return st.each(e.match(lt)||[],function(e,n){t[n]=!0}),t}function i(e,n,r,i){if(st.acceptData(e)){var o,a,s=st.expando,u="string"==typeof n,l=e.nodeType,c=l?st.cache:e,f=l?e[s]:e[s]&&s;if(f&&c[f]&&(i||c[f].data)||!u||r!==t)return f||(l?e[s]=f=K.pop()||st.guid++:f=s),c[f]||(c[f]={},l||(c[f].toJSON=st.noop)),("object"==typeof n||"function"==typeof n)&&(i?c[f]=st.extend(c[f],n):c[f].data=st.extend(c[f].data,n)),o=c[f],i||(o.data||(o.data={}),o=o.data),r!==t&&(o[st.camelCase(n)]=r),u?(a=o[n],null==a&&(a=o[st.camelCase(n)])):a=o,a}}function o(e,t,n){if(st.acceptData(e)){var r,i,o,a=e.nodeType,u=a?st.cache:e,l=a?e[st.expando]:st.expando;if(u[l]){if(t&&(r=n?u[l]:u[l].data)){st.isArray(t)?t=t.concat(st.map(t,st.camelCase)):t in r?t=[t]:(t=st.camelCase(t),t=t in r?[t]:t.split(" "));for(i=0,o=t.length;o>i;i++)delete r[t[i]];if(!(n?s:st.isEmptyObject)(r))return}(n||(delete u[l].data,s(u[l])))&&(a?st.cleanData([e],!0):st.support.deleteExpando||u!=u.window?delete u[l]:u[l]=null)}}}function a(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(Nt,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:wt.test(r)?st.parseJSON(r):r}catch(o){}st.data(e,n,r)}else r=t}return r}function s(e){var t;for(t in e)if(("data"!==t||!st.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}function u(){return!0}function l(){return!1}function c(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}function f(e,t,n){if(t=t||0,st.isFunction(t))return st.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return st.grep(e,function(e){return e===t===n});if("string"==typeof t){var r=st.grep(e,function(e){return 1===e.nodeType});if(Wt.test(t))return st.filter(t,r,!n);t=st.filter(t,r)}return st.grep(e,function(e){return st.inArray(e,t)>=0===n})}function p(e){var t=zt.split("|"),n=e.createDocumentFragment();if(n.createElement)for(;t.length;)n.createElement(t.pop());return n}function d(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function h(e){var t=e.getAttributeNode("type");return e.type=(t&&t.specified)+"/"+e.type,e}function g(e){var t=nn.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function m(e,t){for(var n,r=0;null!=(n=e[r]);r++)st._data(n,"globalEval",!t||st._data(t[r],"globalEval"))}function y(e,t){if(1===t.nodeType&&st.hasData(e)){var n,r,i,o=st._data(e),a=st._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)st.event.add(t,n,s[n][r])}a.data&&(a.data=st.extend({},a.data))}}function v(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!st.support.noCloneEvent&&t[st.expando]){r=st._data(t);for(i in r.events)st.removeEvent(t,i,r.handle);t.removeAttribute(st.expando)}"script"===n&&t.text!==e.text?(h(t).text=e.text,g(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),st.support.html5Clone&&e.innerHTML&&!st.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Zt.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}function b(e,n){var r,i,o=0,a=e.getElementsByTagName!==t?e.getElementsByTagName(n||"*"):e.querySelectorAll!==t?e.querySelectorAll(n||"*"):t;if(!a)for(a=[],r=e.childNodes||e;null!=(i=r[o]);o++)!n||st.nodeName(i,n)?a.push(i):st.merge(a,b(i,n));return n===t||n&&st.nodeName(e,n)?st.merge([e],a):a}function x(e){Zt.test(e.type)&&(e.defaultChecked=e.checked)}function T(e,t){if(t in e)return t;for(var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=Nn.length;i--;)if(t=Nn[i]+n,t in e)return t;return r}function w(e,t){return e=t||e,"none"===st.css(e,"display")||!st.contains(e.ownerDocument,e)}function N(e,t){for(var n,r=[],i=0,o=e.length;o>i;i++)n=e[i],n.style&&(r[i]=st._data(n,"olddisplay"),t?(r[i]||"none"!==n.style.display||(n.style.display=""),""===n.style.display&&w(n)&&(r[i]=st._data(n,"olddisplay",S(n.nodeName)))):r[i]||w(n)||st._data(n,"olddisplay",st.css(n,"display")));for(i=0;o>i;i++)n=e[i],n.style&&(t&&"none"!==n.style.display&&""!==n.style.display||(n.style.display=t?r[i]||"":"none"));return e}function C(e,t,n){var r=mn.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function k(e,t,n,r,i){for(var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;4>o;o+=2)"margin"===n&&(a+=st.css(e,n+wn[o],!0,i)),r?("content"===n&&(a-=st.css(e,"padding"+wn[o],!0,i)),"margin"!==n&&(a-=st.css(e,"border"+wn[o]+"Width",!0,i))):(a+=st.css(e,"padding"+wn[o],!0,i),"padding"!==n&&(a+=st.css(e,"border"+wn[o]+"Width",!0,i)));return a}function E(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=ln(e),a=st.support.boxSizing&&"border-box"===st.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=un(e,t,o),(0>i||null==i)&&(i=e.style[t]),yn.test(i))return i;r=a&&(st.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+k(e,t,n||(a?"border":"content"),r,o)+"px"}function S(e){var t=V,n=bn[e];return n||(n=A(e,t),"none"!==n&&n||(cn=(cn||st("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(cn[0].contentWindow||cn[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=A(e,t),cn.detach()),bn[e]=n),n}function A(e,t){var n=st(t.createElement(e)).appendTo(t.body),r=st.css(n[0],"display");return n.remove(),r}function j(e,t,n,r){var i;if(st.isArray(t))st.each(t,function(t,i){n||kn.test(e)?r(e,i):j(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==st.type(t))r(e,t);else for(i in t)j(e+"["+i+"]",t[i],n,r)}function D(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(lt)||[];if(st.isFunction(n))for(;r=o[i++];)"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function L(e,n,r,i){function o(u){var l;return a[u]=!0,st.each(e[u]||[],function(e,u){var c=u(n,r,i);return"string"!=typeof c||s||a[c]?s?!(l=c):t:(n.dataTypes.unshift(c),o(c),!1)}),l}var a={},s=e===$n;return o(n.dataTypes[0])||!a["*"]&&o("*")}function H(e,n){var r,i,o=st.ajaxSettings.flatOptions||{};for(r in n)n[r]!==t&&((o[r]?e:i||(i={}))[r]=n[r]);return i&&st.extend(!0,e,i),e}function M(e,n,r){var i,o,a,s,u=e.contents,l=e.dataTypes,c=e.responseFields;for(o in c)o in r&&(n[c[o]]=r[o]);for(;"*"===l[0];)l.shift(),i===t&&(i=e.mimeType||n.getResponseHeader("Content-Type"));if(i)for(o in u)if(u[o]&&u[o].test(i)){l.unshift(o);break}if(l[0]in r)a=l[0];else{for(o in r){if(!l[0]||e.converters[o+" "+l[0]]){a=o;break}s||(s=o)}a=a||s}return a?(a!==l[0]&&l.unshift(a),r[a]):t}function q(e,t){var n,r,i,o,a={},s=0,u=e.dataTypes.slice(),l=u[0];if(e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u[1])for(n in e.converters)a[n.toLowerCase()]=e.converters[n];for(;i=u[++s];)if("*"!==i){if("*"!==l&&l!==i){if(n=a[l+" "+i]||a["* "+i],!n)for(r in a)if(o=r.split(" "),o[1]===i&&(n=a[l+" "+o[0]]||a["* "+o[0]])){n===!0?n=a[r]:a[r]!==!0&&(i=o[0],u.splice(s--,0,i));break}if(n!==!0)if(n&&e["throws"])t=n(t);else try{t=n(t)}catch(c){return{state:"parsererror",error:n?c:"No conversion from "+l+" to "+i}}}l=i}return{state:"success",data:t}}function _(){try{return new e.XMLHttpRequest}catch(t){}}function F(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}function O(){return setTimeout(function(){Qn=t}),Qn=st.now()}function B(e,t){st.each(t,function(t,n){for(var r=(rr[t]||[]).concat(rr["*"]),i=0,o=r.length;o>i;i++)if(r[i].call(e,t,n))return})}function P(e,t,n){var r,i,o=0,a=nr.length,s=st.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=Qn||O(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,a=0,u=l.tweens.length;u>a;a++)l.tweens[a].run(o);return s.notifyWith(e,[l,o,n]),1>o&&u?n:(s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:st.extend({},t),opts:st.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Qn||O(),duration:n.duration,tweens:[],createTween:function(t,n){var r=st.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)l.tweens[n].run(1);return t?s.resolveWith(e,[l,t]):s.rejectWith(e,[l,t]),this}}),c=l.props;for(R(c,l.opts.specialEasing);a>o;o++)if(r=nr[o].call(l,e,c,l.opts))return r;return B(l,c),st.isFunction(l.opts.start)&&l.opts.start.call(e,l),st.fx.timer(st.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function R(e,t){var n,r,i,o,a;for(n in e)if(r=st.camelCase(n),i=t[r],o=e[n],st.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),a=st.cssHooks[r],a&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function W(e,t,n){var r,i,o,a,s,u,l,c,f,p=this,d=e.style,h={},g=[],m=e.nodeType&&w(e);n.queue||(c=st._queueHooks(e,"fx"),null==c.unqueued&&(c.unqueued=0,f=c.empty.fire,c.empty.fire=function(){c.unqueued||f()}),c.unqueued++,p.always(function(){p.always(function(){c.unqueued--,st.queue(e,"fx").length||c.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[d.overflow,d.overflowX,d.overflowY],"inline"===st.css(e,"display")&&"none"===st.css(e,"float")&&(st.support.inlineBlockNeedsLayout&&"inline"!==S(e.nodeName)?d.zoom=1:d.display="inline-block")),n.overflow&&(d.overflow="hidden",st.support.shrinkWrapBlocks||p.done(function(){d.overflow=n.overflow[0],d.overflowX=n.overflow[1],d.overflowY=n.overflow[2]}));for(r in t)if(o=t[r],Zn.exec(o)){if(delete t[r],u=u||"toggle"===o,o===(m?"hide":"show"))continue;g.push(r)}if(a=g.length){s=st._data(e,"fxshow")||st._data(e,"fxshow",{}),"hidden"in s&&(m=s.hidden),u&&(s.hidden=!m),m?st(e).show():p.done(function(){st(e).hide()}),p.done(function(){var t;st._removeData(e,"fxshow");for(t in h)st.style(e,t,h[t])});for(r=0;a>r;r++)i=g[r],l=p.createTween(i,m?s[i]:0),h[i]=s[i]||st.style(e,i),i in s||(s[i]=l.start,m&&(l.end=l.start,l.start="width"===i||"height"===i?1:0))}}function $(e,t,n,r,i){return new $.prototype.init(e,t,n,r,i)}function I(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=wn[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}function z(e){return st.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}var X,U,V=e.document,Y=e.location,J=e.jQuery,G=e.$,Q={},K=[],Z="1.9.0",et=K.concat,tt=K.push,nt=K.slice,rt=K.indexOf,it=Q.toString,ot=Q.hasOwnProperty,at=Z.trim,st=function(e,t){return new st.fn.init(e,t,X)},ut=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,lt=/\S+/g,ct=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,ft=/^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,pt=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,dt=/^[\],:{}\s]*$/,ht=/(?:^|:|,)(?:\s*\[)+/g,gt=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,mt=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,yt=/^-ms-/,vt=/-([\da-z])/gi,bt=function(e,t){return t.toUpperCase()},xt=function(){V.addEventListener?(V.removeEventListener("DOMContentLoaded",xt,!1),st.ready()):"complete"===V.readyState&&(V.detachEvent("onreadystatechange",xt),st.ready())};st.fn=st.prototype={jquery:Z,constructor:st,init:function(e,n,r){var i,o;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:ft.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof st?n[0]:n,st.merge(this,st.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:V,!0)),pt.test(i[1])&&st.isPlainObject(n))for(i in n)st.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(o=V.getElementById(i[2]),o&&o.parentNode){if(o.id!==i[2])return r.find(e);this.length=1,this[0]=o}return this.context=V,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):st.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),st.makeArray(e,this))},selector:"",length:0,size:function(){return this.length},toArray:function(){return nt.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=st.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return st.each(this,e,t)},ready:function(e){return st.ready.promise().done(e),this},slice:function(){return this.pushStack(nt.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(st.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:tt,sort:[].sort,splice:[].splice},st.fn.init.prototype=st.fn,st.extend=st.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},u=1,l=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},u=2),"object"==typeof s||st.isFunction(s)||(s={}),l===u&&(s=this,--u);l>u;u++)if(null!=(e=arguments[u]))for(n in e)r=s[n],i=e[n],s!==i&&(c&&i&&(st.isPlainObject(i)||(o=st.isArray(i)))?(o?(o=!1,a=r&&st.isArray(r)?r:[]):a=r&&st.isPlainObject(r)?r:{},s[n]=st.extend(c,a,i)):i!==t&&(s[n]=i));return s},st.extend({noConflict:function(t){return e.$===st&&(e.$=G),t&&e.jQuery===st&&(e.jQuery=J),st},isReady:!1,readyWait:1,holdReady:function(e){e?st.readyWait++:st.ready(!0)},ready:function(e){if(e===!0?!--st.readyWait:!st.isReady){if(!V.body)return setTimeout(st.ready);st.isReady=!0,e!==!0&&--st.readyWait>0||(U.resolveWith(V,[st]),st.fn.trigger&&st(V).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===st.type(e)},isArray:Array.isArray||function(e){return"array"===st.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?Q[it.call(e)]||"object":typeof e},isPlainObject:function(e){if(!e||"object"!==st.type(e)||e.nodeType||st.isWindow(e))return!1;try{if(e.constructor&&!ot.call(e,"constructor")&&!ot.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var r;for(r in e);return r===t||ot.call(e,r)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||V;var r=pt.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=st.buildFragment([e],t,i),i&&st(i).remove(),st.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=st.trim(n),n&&dt.test(n.replace(gt,"@").replace(mt,"]").replace(ht,"")))?Function("return "+n)():(st.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||st.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&st.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(yt,"ms-").replace(vt,bt)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,r){var i,o=0,a=e.length,s=n(e);if(r){if(s)for(;a>o&&(i=t.apply(e[o],r),i!==!1);o++);else for(o in e)if(i=t.apply(e[o],r),i===!1)break}else if(s)for(;a>o&&(i=t.call(e[o],o,e[o]),i!==!1);o++);else for(o in e)if(i=t.call(e[o],o,e[o]),i===!1)break;return e},trim:at&&!at.call("\ufeff\u00a0")?function(e){return null==e?"":at.call(e)}:function(e){return null==e?"":(e+"").replace(ct,"")},makeArray:function(e,t){var r=t||[];return null!=e&&(n(Object(e))?st.merge(r,"string"==typeof e?[e]:e):tt.call(r,e)),r},inArray:function(e,t,n){var r;if(t){if(rt)return rt.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else for(;n[o]!==t;)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,r){var i,o=0,a=e.length,s=n(e),u=[];if(s)for(;a>o;o++)i=t(e[o],o,r),null!=i&&(u[u.length]=i);else for(o in e)i=t(e[o],o,r),null!=i&&(u[u.length]=i);return et.apply([],u)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(r=e[n],n=e,e=r),st.isFunction(e)?(i=nt.call(arguments,2),o=function(){return e.apply(n||this,i.concat(nt.call(arguments)))},o.guid=e.guid=e.guid||st.guid++,o):t},access:function(e,n,r,i,o,a,s){var u=0,l=e.length,c=null==r;if("object"===st.type(r)){o=!0;for(u in r)st.access(e,n,u,r[u],!0,a,s)}else if(i!==t&&(o=!0,st.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(st(e),n)})),n))for(;l>u;u++)n(e[u],r,s?i:i.call(e[u],u,n(e[u],r)));return o?e:c?n.call(e):l?n(e[0],r):a},now:function(){return(new Date).getTime()}}),st.ready.promise=function(t){if(!U)if(U=st.Deferred(),"complete"===V.readyState)setTimeout(st.ready);else if(V.addEventListener)V.addEventListener("DOMContentLoaded",xt,!1),e.addEventListener("load",st.ready,!1);else{V.attachEvent("onreadystatechange",xt),e.attachEvent("onload",st.ready);var n=!1;try{n=null==e.frameElement&&V.documentElement}catch(r){}n&&n.doScroll&&function i(){if(!st.isReady){try{n.doScroll("left")}catch(e){return setTimeout(i,50)}st.ready()}}()}return U.promise(t)},st.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){Q["[object "+t+"]"]=t.toLowerCase()}),X=st(V);var Tt={};st.Callbacks=function(e){e="string"==typeof e?Tt[e]||r(e):st.extend({},e);var n,i,o,a,s,u,l=[],c=!e.once&&[],f=function(t){for(n=e.memory&&t,i=!0,u=a||0,a=0,s=l.length,o=!0;l&&s>u;u++)if(l[u].apply(t[0],t[1])===!1&&e.stopOnFalse){n=!1;break}o=!1,l&&(c?c.length&&f(c.shift()):n?l=[]:p.disable())},p={add:function(){if(l){var t=l.length;(function r(t){st.each(t,function(t,n){var i=st.type(n);"function"===i?e.unique&&p.has(n)||l.push(n):n&&n.length&&"string"!==i&&r(n)})})(arguments),o?s=l.length:n&&(a=t,f(n))}return this},remove:function(){return l&&st.each(arguments,function(e,t){for(var n;(n=st.inArray(t,l,n))>-1;)l.splice(n,1),o&&(s>=n&&s--,u>=n&&u--)}),this},has:function(e){return st.inArray(e,l)>-1},empty:function(){return l=[],this},disable:function(){return l=c=n=t,this},disabled:function(){return!l},lock:function(){return c=t,n||p.disable(),this},locked:function(){return!c},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],!l||i&&!c||(o?c.push(t):f(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},st.extend({Deferred:function(e){var t=[["resolve","done",st.Callbacks("once memory"),"resolved"],["reject","fail",st.Callbacks("once memory"),"rejected"],["notify","progress",st.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return st.Deferred(function(n){st.each(t,function(t,o){var a=o[0],s=st.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&st.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?st.extend(e,r):r}},i={};return r.pipe=r.then,st.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t,n,r,i=0,o=nt.call(arguments),a=o.length,s=1!==a||e&&st.isFunction(e.promise)?a:0,u=1===s?e:st.Deferred(),l=function(e,n,r){return function(i){n[e]=this,r[e]=arguments.length>1?nt.call(arguments):i,r===t?u.notifyWith(n,r):--s||u.resolveWith(n,r)}};if(a>1)for(t=Array(a),n=Array(a),r=Array(a);a>i;i++)o[i]&&st.isFunction(o[i].promise)?o[i].promise().done(l(i,r,o)).fail(u.reject).progress(l(i,n,t)):--s;return s||u.resolveWith(r,o),u.promise()}}),st.support=function(){var n,r,i,o,a,s,u,l,c,f,p=V.createElement("div");if(p.setAttribute("className","t"),p.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",r=p.getElementsByTagName("*"),i=p.getElementsByTagName("a")[0],!r||!i||!r.length)return{};o=V.createElement("select"),a=o.appendChild(V.createElement("option")),s=p.getElementsByTagName("input")[0],i.style.cssText="top:1px;float:left;opacity:.5",n={getSetAttribute:"t"!==p.className,leadingWhitespace:3===p.firstChild.nodeType,tbody:!p.getElementsByTagName("tbody").length,htmlSerialize:!!p.getElementsByTagName("link").length,style:/top/.test(i.getAttribute("style")),hrefNormalized:"/a"===i.getAttribute("href"),opacity:/^0.5/.test(i.style.opacity),cssFloat:!!i.style.cssFloat,checkOn:!!s.value,optSelected:a.selected,enctype:!!V.createElement("form").enctype,html5Clone:"<:nav></:nav>"!==V.createElement("nav").cloneNode(!0).outerHTML,boxModel:"CSS1Compat"===V.compatMode,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},s.checked=!0,n.noCloneChecked=s.cloneNode(!0).checked,o.disabled=!0,n.optDisabled=!a.disabled;try{delete p.test}catch(d){n.deleteExpando=!1}s=V.createElement("input"),s.setAttribute("value",""),n.input=""===s.getAttribute("value"),s.value="t",s.setAttribute("type","radio"),n.radioValue="t"===s.value,s.setAttribute("checked","t"),s.setAttribute("name","t"),u=V.createDocumentFragment(),u.appendChild(s),n.appendChecked=s.checked,n.checkClone=u.cloneNode(!0).cloneNode(!0).lastChild.checked,p.attachEvent&&(p.attachEvent("onclick",function(){n.noCloneEvent=!1}),p.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})p.setAttribute(l="on"+f,"t"),n[f+"Bubbles"]=l in e||p.attributes[l].expando===!1;return p.style.backgroundClip="content-box",p.cloneNode(!0).style.backgroundClip="",n.clearCloneStyle="content-box"===p.style.backgroundClip,st(function(){var r,i,o,a="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",s=V.getElementsByTagName("body")[0];s&&(r=V.createElement("div"),r.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",s.appendChild(r).appendChild(p),p.innerHTML="<table><tr><td></td><td>t</td></tr></table>",o=p.getElementsByTagName("td"),o[0].style.cssText="padding:0;margin:0;border:0;display:none",c=0===o[0].offsetHeight,o[0].style.display="",o[1].style.display="none",n.reliableHiddenOffsets=c&&0===o[0].offsetHeight,p.innerHTML="",p.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",n.boxSizing=4===p.offsetWidth,n.doesNotIncludeMarginInBodyOffset=1!==s.offsetTop,e.getComputedStyle&&(n.pixelPosition="1%"!==(e.getComputedStyle(p,null)||{}).top,n.boxSizingReliable="4px"===(e.getComputedStyle(p,null)||{width:"4px"}).width,i=p.appendChild(V.createElement("div")),i.style.cssText=p.style.cssText=a,i.style.marginRight=i.style.width="0",p.style.width="1px",n.reliableMarginRight=!parseFloat((e.getComputedStyle(i,null)||{}).marginRight)),p.style.zoom!==t&&(p.innerHTML="",p.style.cssText=a+"width:1px;padding:1px;display:inline;zoom:1",n.inlineBlockNeedsLayout=3===p.offsetWidth,p.style.display="block",p.innerHTML="<div></div>",p.firstChild.style.width="5px",n.shrinkWrapBlocks=3!==p.offsetWidth,s.style.zoom=1),s.removeChild(r),r=p=o=i=null)}),r=o=u=a=i=s=null,n}();var wt=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,Nt=/([A-Z])/g;st.extend({cache:{},expando:"jQuery"+(Z+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?st.cache[e[st.expando]]:e[st.expando],!!e&&!s(e)},data:function(e,t,n){return i(e,t,n,!1)},removeData:function(e,t){return o(e,t,!1)},_data:function(e,t,n){return i(e,t,n,!0)},_removeData:function(e,t){return o(e,t,!0)},acceptData:function(e){var t=e.nodeName&&st.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),st.fn.extend({data:function(e,n){var r,i,o=this[0],s=0,u=null;if(e===t){if(this.length&&(u=st.data(o),1===o.nodeType&&!st._data(o,"parsedAttrs"))){for(r=o.attributes;r.length>s;s++)i=r[s].name,i.indexOf("data-")||(i=st.camelCase(i.substring(5)),a(o,i,u[i]));st._data(o,"parsedAttrs",!0)}return u}return"object"==typeof e?this.each(function(){st.data(this,e)}):st.access(this,function(n){return n===t?o?a(o,e,st.data(o,e)):null:(this.each(function(){st.data(this,e,n)}),t)},null,n,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){st.removeData(this,e)})}}),st.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=st._data(e,n),r&&(!i||st.isArray(r)?i=st._data(e,n,st.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=st.queue(e,t),r=n.length,i=n.shift(),o=st._queueHooks(e,t),a=function(){st.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),o.cur=i,i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return st._data(e,n)||st._data(e,n,{empty:st.Callbacks("once memory").add(function(){st._removeData(e,t+"queue"),st._removeData(e,n)})})}}),st.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?st.queue(this[0],e):n===t?this:this.each(function(){var t=st.queue(this,e,n);st._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&st.dequeue(this,e)})},dequeue:function(e){return this.each(function(){st.dequeue(this,e)})},delay:function(e,t){return e=st.fx?st.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=st.Deferred(),a=this,s=this.length,u=function(){--i||o.resolveWith(a,[a])};for("string"!=typeof e&&(n=e,e=t),e=e||"fx";s--;)r=st._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(u));return u(),o.promise(n)}});var Ct,kt,Et=/[\t\r\n]/g,St=/\r/g,At=/^(?:input|select|textarea|button|object)$/i,jt=/^(?:a|area)$/i,Dt=/^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,Lt=/^(?:checked|selected)$/i,Ht=st.support.getSetAttribute,Mt=st.support.input;st.fn.extend({attr:function(e,t){return st.access(this,st.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){st.removeAttr(this,e)})},prop:function(e,t){return st.access(this,st.prop,e,t,arguments.length>1)},removeProp:function(e){return e=st.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,u="string"==typeof e&&e;if(st.isFunction(e))return this.each(function(t){st(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(lt)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(Et," "):" ")){for(o=0;i=t[o++];)0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=st.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,u=0===arguments.length||"string"==typeof e&&e;if(st.isFunction(e))return this.each(function(t){st(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(lt)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(Et," "):"")){for(o=0;i=t[o++];)for(;r.indexOf(" "+i+" ")>=0;)r=r.replace(" "+i+" "," ");n.className=e?st.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e,r="boolean"==typeof t;return st.isFunction(e)?this.each(function(n){st(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n)for(var i,o=0,a=st(this),s=t,u=e.match(lt)||[];i=u[o++];)s=r?s:!a.hasClass(i),a[s?"addClass":"removeClass"](i);else("undefined"===n||"boolean"===n)&&(this.className&&st._data(this,"__className__",this.className),this.className=this.className||e===!1?"":st._data(this,"__className__")||"")})},hasClass:function(e){for(var t=" "+e+" ",n=0,r=this.length;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(Et," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=st.isFunction(e),this.each(function(r){var o,a=st(this);1===this.nodeType&&(o=i?e.call(this,r,a.val()):e,null==o?o="":"number"==typeof o?o+="":st.isArray(o)&&(o=st.map(o,function(e){return null==e?"":e+""})),n=st.valHooks[this.type]||st.valHooks[this.nodeName.toLowerCase()],n&&"set"in n&&n.set(this,o,"value")!==t||(this.value=o))});if(o)return n=st.valHooks[o.type]||st.valHooks[o.nodeName.toLowerCase()],n&&"get"in n&&(r=n.get(o,"value"))!==t?r:(r=o.value,"string"==typeof r?r.replace(St,""):null==r?"":r)}}}),st.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){for(var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,u=0>i?s:o?i:0;s>u;u++)if(n=r[u],!(!n.selected&&u!==i||(st.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&st.nodeName(n.parentNode,"optgroup"))){if(t=st(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n=st.makeArray(t);return st(e).find("option").each(function(){this.selected=st.inArray(st(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attr:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return e.getAttribute===t?st.prop(e,n,r):(a=1!==s||!st.isXMLDoc(e),a&&(n=n.toLowerCase(),o=st.attrHooks[n]||(Dt.test(n)?kt:Ct)),r===t?o&&a&&"get"in o&&null!==(i=o.get(e,n))?i:(e.getAttribute!==t&&(i=e.getAttribute(n)),null==i?t:i):null!==r?o&&a&&"set"in o&&(i=o.set(e,r,n))!==t?i:(e.setAttribute(n,r+""),r):(st.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(lt);if(o&&1===e.nodeType)for(;n=o[i++];)r=st.propFix[n]||n,Dt.test(n)?!Ht&&Lt.test(n)?e[st.camelCase("default-"+n)]=e[r]=!1:e[r]=!1:st.attr(e,n,""),e.removeAttribute(Ht?n:r)},attrHooks:{type:{set:function(e,t){if(!st.support.radioValue&&"radio"===t&&st.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!st.isXMLDoc(e),a&&(n=st.propFix[n]||n,o=st.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):At.test(e.nodeName)||jt.test(e.nodeName)&&e.href?0:t}}}}),kt={get:function(e,n){var r=st.prop(e,n),i="boolean"==typeof r&&e.getAttribute(n),o="boolean"==typeof r?Mt&&Ht?null!=i:Lt.test(n)?e[st.camelCase("default-"+n)]:!!i:e.getAttributeNode(n);return o&&o.value!==!1?n.toLowerCase():t},set:function(e,t,n){return t===!1?st.removeAttr(e,n):Mt&&Ht||!Lt.test(n)?e.setAttribute(!Ht&&st.propFix[n]||n,n):e[st.camelCase("default-"+n)]=e[n]=!0,n}},Mt&&Ht||(st.attrHooks.value={get:function(e,n){var r=e.getAttributeNode(n);return st.nodeName(e,"input")?e.defaultValue:r&&r.specified?r.value:t
},set:function(e,n,r){return st.nodeName(e,"input")?(e.defaultValue=n,t):Ct&&Ct.set(e,n,r)}}),Ht||(Ct=st.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&("id"===n||"name"===n||"coords"===n?""!==r.value:r.specified)?r.value:t},set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},st.attrHooks.contenteditable={get:Ct.get,set:function(e,t,n){Ct.set(e,""===t?!1:t,n)}},st.each(["width","height"],function(e,n){st.attrHooks[n]=st.extend(st.attrHooks[n],{set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}})})),st.support.hrefNormalized||(st.each(["href","src","width","height"],function(e,n){st.attrHooks[n]=st.extend(st.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return null==r?t:r}})}),st.each(["href","src"],function(e,t){st.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}})),st.support.style||(st.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),st.support.optSelected||(st.propHooks.selected=st.extend(st.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),st.support.enctype||(st.propFix.enctype="encoding"),st.support.checkOn||st.each(["radio","checkbox"],function(){st.valHooks[this]={get:function(e){return null===e.getAttribute("value")?"on":e.value}}}),st.each(["radio","checkbox"],function(){st.valHooks[this]=st.extend(st.valHooks[this],{set:function(e,n){return st.isArray(n)?e.checked=st.inArray(st(e).val(),n)>=0:t}})});var qt=/^(?:input|select|textarea)$/i,_t=/^key/,Ft=/^(?:mouse|contextmenu)|click/,Ot=/^(?:focusinfocus|focusoutblur)$/,Bt=/^([^.]*)(?:\.(.+)|)$/;st.event={global:{},add:function(e,n,r,i,o){var a,s,u,l,c,f,p,d,h,g,m,y=3!==e.nodeType&&8!==e.nodeType&&st._data(e);if(y){for(r.handler&&(a=r,r=a.handler,o=a.selector),r.guid||(r.guid=st.guid++),(l=y.events)||(l=y.events={}),(s=y.handle)||(s=y.handle=function(e){return st===t||e&&st.event.triggered===e.type?t:st.event.dispatch.apply(s.elem,arguments)},s.elem=e),n=(n||"").match(lt)||[""],c=n.length;c--;)u=Bt.exec(n[c])||[],h=m=u[1],g=(u[2]||"").split(".").sort(),p=st.event.special[h]||{},h=(o?p.delegateType:p.bindType)||h,p=st.event.special[h]||{},f=st.extend({type:h,origType:m,data:i,handler:r,guid:r.guid,selector:o,needsContext:o&&st.expr.match.needsContext.test(o),namespace:g.join(".")},a),(d=l[h])||(d=l[h]=[],d.delegateCount=0,p.setup&&p.setup.call(e,i,g,s)!==!1||(e.addEventListener?e.addEventListener(h,s,!1):e.attachEvent&&e.attachEvent("on"+h,s))),p.add&&(p.add.call(e,f),f.handler.guid||(f.handler.guid=r.guid)),o?d.splice(d.delegateCount++,0,f):d.push(f),st.event.global[h]=!0;e=null}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,m=st.hasData(e)&&st._data(e);if(m&&(u=m.events)){for(t=(t||"").match(lt)||[""],l=t.length;l--;)if(s=Bt.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){for(f=st.event.special[d]||{},d=(r?f.delegateType:f.bindType)||d,p=u[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;o--;)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&f.teardown.call(e,h,m.handle)!==!1||st.removeEvent(e,d,m.handle),delete u[d])}else for(d in u)st.event.remove(e,d+t[l],n,r,!0);st.isEmptyObject(u)&&(delete m.handle,st._removeData(e,"events"))}},trigger:function(n,r,i,o){var a,s,u,l,c,f,p,d=[i||V],h=n.type||n,g=n.namespace?n.namespace.split("."):[];if(s=u=i=i||V,3!==i.nodeType&&8!==i.nodeType&&!Ot.test(h+st.event.triggered)&&(h.indexOf(".")>=0&&(g=h.split("."),h=g.shift(),g.sort()),c=0>h.indexOf(":")&&"on"+h,n=n[st.expando]?n:new st.Event(h,"object"==typeof n&&n),n.isTrigger=!0,n.namespace=g.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+g.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:st.makeArray(r,[n]),p=st.event.special[h]||{},o||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!o&&!p.noBubble&&!st.isWindow(i)){for(l=p.delegateType||h,Ot.test(l+h)||(s=s.parentNode);s;s=s.parentNode)d.push(s),u=s;u===(i.ownerDocument||V)&&d.push(u.defaultView||u.parentWindow||e)}for(a=0;(s=d[a++])&&!n.isPropagationStopped();)n.type=a>1?l:p.bindType||h,f=(st._data(s,"events")||{})[n.type]&&st._data(s,"handle"),f&&f.apply(s,r),f=c&&s[c],f&&st.acceptData(s)&&f.apply&&f.apply(s,r)===!1&&n.preventDefault();if(n.type=h,!(o||n.isDefaultPrevented()||p._default&&p._default.apply(i.ownerDocument,r)!==!1||"click"===h&&st.nodeName(i,"a")||!st.acceptData(i)||!c||!i[h]||st.isWindow(i))){u=i[c],u&&(i[c]=null),st.event.triggered=h;try{i[h]()}catch(m){}st.event.triggered=t,u&&(i[c]=u)}return n.result}},dispatch:function(e){e=st.event.fix(e);var n,r,i,o,a,s=[],u=nt.call(arguments),l=(st._data(this,"events")||{})[e.type]||[],c=st.event.special[e.type]||{};if(u[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){for(s=st.event.handlers.call(this,e,l),n=0;(o=s[n++])&&!e.isPropagationStopped();)for(e.currentTarget=o.elem,r=0;(a=o.handlers[r++])&&!e.isImmediatePropagationStopped();)(!e.namespace_re||e.namespace_re.test(a.namespace))&&(e.handleObj=a,e.data=a.data,i=((st.event.special[a.origType]||{}).handle||a.handler).apply(o.elem,u),i!==t&&(e.result=i)===!1&&(e.preventDefault(),e.stopPropagation()));return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],u=n.delegateCount,l=e.target;if(u&&l.nodeType&&(!e.button||"click"!==e.type))for(;l!=this;l=l.parentNode||this)if(l.disabled!==!0||"click"!==e.type){for(i=[],r=0;u>r;r++)a=n[r],o=a.selector+" ",i[o]===t&&(i[o]=a.needsContext?st(o,this).index(l)>=0:st.find(o,this,null,[l]).length),i[o]&&i.push(a);i.length&&s.push({elem:l,handlers:i})}return n.length>u&&s.push({elem:this,handlers:n.slice(u)}),s},fix:function(e){if(e[st.expando])return e;var t,n,r=e,i=st.event.fixHooks[e.type]||{},o=i.props?this.props.concat(i.props):this.props;for(e=new st.Event(r),t=o.length;t--;)n=o[t],e[n]=r[n];return e.target||(e.target=r.srcElement||V),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,i.filter?i.filter(e,r):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,o,a=n.button,s=n.fromElement;return null==e.pageX&&null!=n.clientX&&(r=e.target.ownerDocument||V,i=r.documentElement,o=r.body,e.pageX=n.clientX+(i&&i.scrollLeft||o&&o.scrollLeft||0)-(i&&i.clientLeft||o&&o.clientLeft||0),e.pageY=n.clientY+(i&&i.scrollTop||o&&o.scrollTop||0)-(i&&i.clientTop||o&&o.clientTop||0)),!e.relatedTarget&&s&&(e.relatedTarget=s===e.target?n.toElement:s),e.which||a===t||(e.which=1&a?1:2&a?3:4&a?2:0),e}},special:{load:{noBubble:!0},click:{trigger:function(){return st.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t}},focus:{trigger:function(){if(this!==V.activeElement&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===V.activeElement&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=st.extend(new st.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?st.event.trigger(i,null,t):st.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},st.removeEvent=V.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,n,r){var i="on"+n;e.detachEvent&&(e[i]===t&&(e[i]=null),e.detachEvent(i,r))},st.Event=function(e,n){return this instanceof st.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?u:l):this.type=e,n&&st.extend(this,n),this.timeStamp=e&&e.timeStamp||st.now(),this[st.expando]=!0,t):new st.Event(e,n)},st.Event.prototype={isDefaultPrevented:l,isPropagationStopped:l,isImmediatePropagationStopped:l,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=u,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=u,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=u,this.stopPropagation()}},st.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){st.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!st.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),st.support.submitBubbles||(st.event.special.submit={setup:function(){return st.nodeName(this,"form")?!1:(st.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=st.nodeName(n,"input")||st.nodeName(n,"button")?n.form:t;r&&!st._data(r,"submitBubbles")&&(st.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),st._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&st.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return st.nodeName(this,"form")?!1:(st.event.remove(this,"._submit"),t)}}),st.support.changeBubbles||(st.event.special.change={setup:function(){return qt.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(st.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),st.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),st.event.simulate("change",this,e,!0)})),!1):(st.event.add(this,"beforeactivate._change",function(e){var t=e.target;qt.test(t.nodeName)&&!st._data(t,"changeBubbles")&&(st.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||st.event.simulate("change",this.parentNode,e,!0)}),st._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return st.event.remove(this,"._change"),!qt.test(this.nodeName)}}),st.support.focusinBubbles||st.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){st.event.simulate(t,e.target,st.event.fix(e),!0)};st.event.special[t]={setup:function(){0===n++&&V.addEventListener(e,r,!0)},teardown:function(){0===--n&&V.removeEventListener(e,r,!0)}}}),st.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(s in e)this.on(s,n,r,e[s],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=l;else if(!i)return this;return 1===o&&(a=i,i=function(e){return st().off(e),a.apply(this,arguments)},i.guid=a.guid||(a.guid=st.guid++)),this.each(function(){st.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,st(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=l),this.each(function(){st.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){st.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?st.event.trigger(e,n,r,!0):t},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),st.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){st.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)},_t.test(t)&&(st.event.fixHooks[t]=st.event.keyHooks),Ft.test(t)&&(st.event.fixHooks[t]=st.event.mouseHooks)}),function(e,t){function n(e){return ht.test(e+"")}function r(){var e,t=[];return e=function(n,r){return t.push(n+=" ")>C.cacheLength&&delete e[t.shift()],e[n]=r}}function i(e){return e[P]=!0,e}function o(e){var t=L.createElement("div");try{return e(t)}catch(n){return!1}finally{t=null}}function a(e,t,n,r){var i,o,a,s,u,l,c,d,h,g;if((t?t.ownerDocument||t:R)!==L&&D(t),t=t||L,n=n||[],!e||"string"!=typeof e)return n;if(1!==(s=t.nodeType)&&9!==s)return[];if(!M&&!r){if(i=gt.exec(e))if(a=i[1]){if(9===s){if(o=t.getElementById(a),!o||!o.parentNode)return n;if(o.id===a)return n.push(o),n}else if(t.ownerDocument&&(o=t.ownerDocument.getElementById(a))&&O(t,o)&&o.id===a)return n.push(o),n}else{if(i[2])return Q.apply(n,K.call(t.getElementsByTagName(e),0)),n;if((a=i[3])&&W.getByClassName&&t.getElementsByClassName)return Q.apply(n,K.call(t.getElementsByClassName(a),0)),n}if(W.qsa&&!q.test(e)){if(c=!0,d=P,h=t,g=9===s&&e,1===s&&"object"!==t.nodeName.toLowerCase()){for(l=f(e),(c=t.getAttribute("id"))?d=c.replace(vt,"\\$&"):t.setAttribute("id",d),d="[id='"+d+"'] ",u=l.length;u--;)l[u]=d+p(l[u]);h=dt.test(e)&&t.parentNode||t,g=l.join(",")}if(g)try{return Q.apply(n,K.call(h.querySelectorAll(g),0)),n}catch(m){}finally{c||t.removeAttribute("id")}}}return x(e.replace(at,"$1"),t,n,r)}function s(e,t){for(var n=e&&t&&e.nextSibling;n;n=n.nextSibling)if(n===t)return-1;return e?1:-1}function u(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function l(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function c(e){return i(function(t){return t=+t,i(function(n,r){for(var i,o=e([],n.length,t),a=o.length;a--;)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function f(e,t){var n,r,i,o,s,u,l,c=X[e+" "];if(c)return t?0:c.slice(0);for(s=e,u=[],l=C.preFilter;s;){(!n||(r=ut.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),u.push(i=[])),n=!1,(r=lt.exec(s))&&(n=r.shift(),i.push({value:n,type:r[0].replace(at," ")}),s=s.slice(n.length));for(o in C.filter)!(r=pt[o].exec(s))||l[o]&&!(r=l[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?a.error(e):X(e,u).slice(0)}function p(e){for(var t=0,n=e.length,r="";n>t;t++)r+=e[t].value;return r}function d(e,t,n){var r=t.dir,i=n&&"parentNode"===t.dir,o=I++;return t.first?function(t,n,o){for(;t=t[r];)if(1===t.nodeType||i)return e(t,n,o)}:function(t,n,a){var s,u,l,c=$+" "+o;if(a){for(;t=t[r];)if((1===t.nodeType||i)&&e(t,n,a))return!0}else for(;t=t[r];)if(1===t.nodeType||i)if(l=t[P]||(t[P]={}),(u=l[r])&&u[0]===c){if((s=u[1])===!0||s===N)return s===!0}else if(u=l[r]=[c],u[1]=e(t,n,a)||N,u[1]===!0)return!0}}function h(e){return e.length>1?function(t,n,r){for(var i=e.length;i--;)if(!e[i](t,n,r))return!1;return!0}:e[0]}function g(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;u>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),l&&t.push(s));return a}function m(e,t,n,r,o,a){return r&&!r[P]&&(r=m(r)),o&&!o[P]&&(o=m(o,a)),i(function(i,a,s,u){var l,c,f,p=[],d=[],h=a.length,m=i||b(t||"*",s.nodeType?[s]:s,[]),y=!e||!i&&t?m:g(m,p,e,s,u),v=n?o||(i?e:h||r)?[]:a:y;if(n&&n(y,v,s,u),r)for(l=g(v,d),r(l,[],s,u),c=l.length;c--;)(f=l[c])&&(v[d[c]]=!(y[d[c]]=f));if(i){if(o||e){if(o){for(l=[],c=v.length;c--;)(f=v[c])&&l.push(y[c]=f);o(null,v=[],l,u)}for(c=v.length;c--;)(f=v[c])&&(l=o?Z.call(i,f):p[c])>-1&&(i[l]=!(a[l]=f))}}else v=g(v===a?v.splice(h,v.length):v),o?o(null,a,v,u):Q.apply(a,v)})}function y(e){for(var t,n,r,i=e.length,o=C.relative[e[0].type],a=o||C.relative[" "],s=o?1:0,u=d(function(e){return e===t},a,!0),l=d(function(e){return Z.call(t,e)>-1},a,!0),c=[function(e,n,r){return!o&&(r||n!==j)||((t=n).nodeType?u(e,n,r):l(e,n,r))}];i>s;s++)if(n=C.relative[e[s].type])c=[d(h(c),n)];else{if(n=C.filter[e[s].type].apply(null,e[s].matches),n[P]){for(r=++s;i>r&&!C.relative[e[r].type];r++);return m(s>1&&h(c),s>1&&p(e.slice(0,s-1)).replace(at,"$1"),n,r>s&&y(e.slice(s,r)),i>r&&y(e=e.slice(r)),i>r&&p(e))}c.push(n)}return h(c)}function v(e,t){var n=0,r=t.length>0,o=e.length>0,s=function(i,s,u,l,c){var f,p,d,h=[],m=0,y="0",v=i&&[],b=null!=c,x=j,T=i||o&&C.find.TAG("*",c&&s.parentNode||s),w=$+=null==x?1:Math.E;for(b&&(j=s!==L&&s,N=n);null!=(f=T[y]);y++){if(o&&f){for(p=0;d=e[p];p++)if(d(f,s,u)){l.push(f);break}b&&($=w,N=++n)}r&&((f=!d&&f)&&m--,i&&v.push(f))}if(m+=y,r&&y!==m){for(p=0;d=t[p];p++)d(v,h,s,u);if(i){if(m>0)for(;y--;)v[y]||h[y]||(h[y]=G.call(l));h=g(h)}Q.apply(l,h),b&&!i&&h.length>0&&m+t.length>1&&a.uniqueSort(l)}return b&&($=w,j=x),v};return r?i(s):s}function b(e,t,n){for(var r=0,i=t.length;i>r;r++)a(e,t[r],n);return n}function x(e,t,n,r){var i,o,a,s,u,l=f(e);if(!r&&1===l.length){if(o=l[0]=l[0].slice(0),o.length>2&&"ID"===(a=o[0]).type&&9===t.nodeType&&!M&&C.relative[o[1].type]){if(t=C.find.ID(a.matches[0].replace(xt,Tt),t)[0],!t)return n;e=e.slice(o.shift().value.length)}for(i=pt.needsContext.test(e)?-1:o.length-1;i>=0&&(a=o[i],!C.relative[s=a.type]);i--)if((u=C.find[s])&&(r=u(a.matches[0].replace(xt,Tt),dt.test(o[0].type)&&t.parentNode||t))){if(o.splice(i,1),e=r.length&&p(o),!e)return Q.apply(n,K.call(r,0)),n;break}}return S(e,l)(r,t,M,n,dt.test(e)),n}function T(){}var w,N,C,k,E,S,A,j,D,L,H,M,q,_,F,O,B,P="sizzle"+-new Date,R=e.document,W={},$=0,I=0,z=r(),X=r(),U=r(),V=typeof t,Y=1<<31,J=[],G=J.pop,Q=J.push,K=J.slice,Z=J.indexOf||function(e){for(var t=0,n=this.length;n>t;t++)if(this[t]===e)return t;return-1},et="[\\x20\\t\\r\\n\\f]",tt="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",nt=tt.replace("w","w#"),rt="([*^$|!~]?=)",it="\\["+et+"*("+tt+")"+et+"*(?:"+rt+et+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+nt+")|)|)"+et+"*\\]",ot=":("+tt+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+it.replace(3,8)+")*)|.*)\\)|)",at=RegExp("^"+et+"+|((?:^|[^\\\\])(?:\\\\.)*)"+et+"+$","g"),ut=RegExp("^"+et+"*,"+et+"*"),lt=RegExp("^"+et+"*([\\x20\\t\\r\\n\\f>+~])"+et+"*"),ct=RegExp(ot),ft=RegExp("^"+nt+"$"),pt={ID:RegExp("^#("+tt+")"),CLASS:RegExp("^\\.("+tt+")"),NAME:RegExp("^\\[name=['\"]?("+tt+")['\"]?\\]"),TAG:RegExp("^("+tt.replace("w","w*")+")"),ATTR:RegExp("^"+it),PSEUDO:RegExp("^"+ot),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+et+"*(even|odd|(([+-]|)(\\d*)n|)"+et+"*(?:([+-]|)"+et+"*(\\d+)|))"+et+"*\\)|)","i"),needsContext:RegExp("^"+et+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+et+"*((?:-\\d)?\\d*)"+et+"*\\)|)(?=[^-]|$)","i")},dt=/[\x20\t\r\n\f]*[+~]/,ht=/\{\s*\[native code\]\s*\}/,gt=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,mt=/^(?:input|select|textarea|button)$/i,yt=/^h\d$/i,vt=/'|\\/g,bt=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,xt=/\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,Tt=function(e,t){var n="0x"+t-65536;return n!==n?t:0>n?String.fromCharCode(n+65536):String.fromCharCode(55296|n>>10,56320|1023&n)};try{K.call(H.childNodes,0)[0].nodeType}catch(wt){K=function(e){for(var t,n=[];t=this[e];e++)n.push(t);return n}}E=a.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},D=a.setDocument=function(e){var r=e?e.ownerDocument||e:R;return r!==L&&9===r.nodeType&&r.documentElement?(L=r,H=r.documentElement,M=E(r),W.tagNameNoComments=o(function(e){return e.appendChild(r.createComment("")),!e.getElementsByTagName("*").length}),W.attributes=o(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return"boolean"!==t&&"string"!==t}),W.getByClassName=o(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",e.getElementsByClassName&&e.getElementsByClassName("e").length?(e.lastChild.className="e",2===e.getElementsByClassName("e").length):!1}),W.getByName=o(function(e){e.id=P+0,e.innerHTML="<a name='"+P+"'></a><div name='"+P+"'></div>",H.insertBefore(e,H.firstChild);var t=r.getElementsByName&&r.getElementsByName(P).length===2+r.getElementsByName(P+0).length;return W.getIdNotName=!r.getElementById(P),H.removeChild(e),t}),C.attrHandle=o(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==V&&"#"===e.firstChild.getAttribute("href")})?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},W.getIdNotName?(C.find.ID=function(e,t){if(typeof t.getElementById!==V&&!M){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},C.filter.ID=function(e){var t=e.replace(xt,Tt);return function(e){return e.getAttribute("id")===t}}):(C.find.ID=function(e,n){if(typeof n.getElementById!==V&&!M){var r=n.getElementById(e);return r?r.id===e||typeof r.getAttributeNode!==V&&r.getAttributeNode("id").value===e?[r]:t:[]}},C.filter.ID=function(e){var t=e.replace(xt,Tt);return function(e){var n=typeof e.getAttributeNode!==V&&e.getAttributeNode("id");return n&&n.value===t}}),C.find.TAG=W.tagNameNoComments?function(e,n){return typeof n.getElementsByTagName!==V?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){for(;n=o[i];i++)1===n.nodeType&&r.push(n);return r}return o},C.find.NAME=W.getByName&&function(e,n){return typeof n.getElementsByName!==V?n.getElementsByName(name):t},C.find.CLASS=W.getByClassName&&function(e,n){return typeof n.getElementsByClassName===V||M?t:n.getElementsByClassName(e)},_=[],q=[":focus"],(W.qsa=n(r.querySelectorAll))&&(o(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||q.push("\\["+et+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||q.push(":checked")}),o(function(e){e.innerHTML="<input type='hidden' i=''/>",e.querySelectorAll("[i^='']").length&&q.push("[*^$]="+et+"*(?:\"\"|'')"),e.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),q.push(",.*:")})),(W.matchesSelector=n(F=H.matchesSelector||H.mozMatchesSelector||H.webkitMatchesSelector||H.oMatchesSelector||H.msMatchesSelector))&&o(function(e){W.disconnectedMatch=F.call(e,"div"),F.call(e,"[s!='']:x"),_.push("!=",ot)}),q=RegExp(q.join("|")),_=RegExp(_.join("|")),O=n(H.contains)||H.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},B=H.compareDocumentPosition?function(e,t){var n;return e===t?(A=!0,0):(n=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t))?1&n||e.parentNode&&11===e.parentNode.nodeType?e===r||O(R,e)?-1:t===r||O(R,t)?1:0:4&n?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var n,i=0,o=e.parentNode,a=t.parentNode,u=[e],l=[t];if(e===t)return A=!0,0;if(e.sourceIndex&&t.sourceIndex)return(~t.sourceIndex||Y)-(O(R,e)&&~e.sourceIndex||Y);if(!o||!a)return e===r?-1:t===r?1:o?-1:a?1:0;if(o===a)return s(e,t);for(n=e;n=n.parentNode;)u.unshift(n);for(n=t;n=n.parentNode;)l.unshift(n);for(;u[i]===l[i];)i++;return i?s(u[i],l[i]):u[i]===R?-1:l[i]===R?1:0},A=!1,[0,0].sort(B),W.detectDuplicates=A,L):L},a.matches=function(e,t){return a(e,null,null,t)},a.matchesSelector=function(e,t){if((e.ownerDocument||e)!==L&&D(e),t=t.replace(bt,"='$1']"),!(!W.matchesSelector||M||_&&_.test(t)||q.test(t)))try{var n=F.call(e,t);if(n||W.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(r){}return a(t,L,null,[e]).length>0},a.contains=function(e,t){return(e.ownerDocument||e)!==L&&D(e),O(e,t)},a.attr=function(e,t){var n;return(e.ownerDocument||e)!==L&&D(e),M||(t=t.toLowerCase()),(n=C.attrHandle[t])?n(e):M||W.attributes?e.getAttribute(t):((n=e.getAttributeNode(t))||e.getAttribute(t))&&e[t]===!0?t:n&&n.specified?n.value:null},a.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},a.uniqueSort=function(e){var t,n=[],r=1,i=0;if(A=!W.detectDuplicates,e.sort(B),A){for(;t=e[r];r++)t===e[r-1]&&(i=n.push(r));for(;i--;)e.splice(n[i],1)}return e},k=a.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=k(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=k(t);return n},C=a.selectors={cacheLength:50,createPseudo:i,match:pt,find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(xt,Tt),e[3]=(e[4]||e[5]||"").replace(xt,Tt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||a.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&a.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return pt.CHILD.test(e[0])?null:(e[4]?e[2]=e[4]:n&&ct.test(n)&&(t=f(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){return"*"===e?function(){return!0}:(e=e.replace(xt,Tt).toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=z[e+" "];return t||(t=RegExp("(^|"+et+")"+e+"("+et+"|$)"))&&z(e,function(e){return t.test(e.className||typeof e.getAttribute!==V&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=a.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.substr(i.length-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.substr(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!u&&!s;if(m){if(o){for(;g;){for(f=t;f=f[g];)if(s?f.nodeName.toLowerCase()===y:1===f.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){for(c=m[P]||(m[P]={}),l=c[e]||[],d=l[0]===$&&l[1],p=l[0]===$&&l[2],f=d&&m.childNodes[d];f=++d&&f&&f[g]||(p=d=0)||h.pop();)if(1===f.nodeType&&++p&&f===t){c[e]=[$,d,p];break}}else if(v&&(l=(t[P]||(t[P]={}))[e])&&l[0]===$)p=l[1];else for(;(f=++d&&f&&f[g]||(p=d=0)||h.pop())&&((s?f.nodeName.toLowerCase()!==y:1!==f.nodeType)||!++p||(v&&((f[P]||(f[P]={}))[e]=[$,p]),f!==t)););return p-=i,p===r||0===p%r&&p/r>=0}}},PSEUDO:function(e,t){var n,r=C.pseudos[e]||C.setFilters[e.toLowerCase()]||a.error("unsupported pseudo: "+e);return r[P]?r(t):r.length>1?(n=[e,e,"",t],C.setFilters.hasOwnProperty(e.toLowerCase())?i(function(e,n){for(var i,o=r(e,t),a=o.length;a--;)i=Z.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:i(function(e){var t=[],n=[],r=S(e.replace(at,"$1"));return r[P]?i(function(e,t,n,i){for(var o,a=r(e,null,i,[]),s=e.length;s--;)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:i(function(e){return function(t){return a(e,t).length>0}}),contains:i(function(e){return function(t){return(t.textContent||t.innerText||k(t)).indexOf(e)>-1}}),lang:i(function(e){return ft.test(e||"")||a.error("unsupported lang: "+e),e=e.replace(xt,Tt).toLowerCase(),function(t){var n;do if(n=M?t.getAttribute("xml:lang")||t.getAttribute("lang"):t.lang)return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===H},focus:function(e){return e===L.activeElement&&(!L.hasFocus||L.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!C.pseudos.empty(e)},header:function(e){return yt.test(e.nodeName)},input:function(e){return mt.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:c(function(){return[0]}),last:c(function(e,t){return[t-1]}),eq:c(function(e,t,n){return[0>n?n+t:n]}),even:c(function(e,t){for(var n=0;t>n;n+=2)e.push(n);return e}),odd:c(function(e,t){for(var n=1;t>n;n+=2)e.push(n);return e}),lt:c(function(e,t,n){for(var r=0>n?n+t:n;--r>=0;)e.push(r);return e}),gt:c(function(e,t,n){for(var r=0>n?n+t:n;t>++r;)e.push(r);return e})}};for(w in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})C.pseudos[w]=u(w);for(w in{submit:!0,reset:!0})C.pseudos[w]=l(w);S=a.compile=function(e,t){var n,r=[],i=[],o=U[e+" "];if(!o){for(t||(t=f(e)),n=t.length;n--;)o=y(t[n]),o[P]?r.push(o):i.push(o);o=U(e,v(i,r))}return o},C.pseudos.nth=C.pseudos.eq,C.filters=T.prototype=C.pseudos,C.setFilters=new T,D(),a.attr=st.attr,st.find=a,st.expr=a.selectors,st.expr[":"]=st.expr.pseudos,st.unique=a.uniqueSort,st.text=a.getText,st.isXMLDoc=a.isXML,st.contains=a.contains}(e);var Pt=/Until$/,Rt=/^(?:parents|prev(?:Until|All))/,Wt=/^.[^:#\[\.,]*$/,$t=st.expr.match.needsContext,It={children:!0,contents:!0,next:!0,prev:!0};st.fn.extend({find:function(e){var t,n,r;if("string"!=typeof e)return r=this,this.pushStack(st(e).filter(function(){for(t=0;r.length>t;t++)if(st.contains(r[t],this))return!0}));for(n=[],t=0;this.length>t;t++)st.find(e,this[t],n);return n=this.pushStack(st.unique(n)),n.selector=(this.selector?this.selector+" ":"")+e,n},has:function(e){var t,n=st(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(st.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(f(this,e,!1))},filter:function(e){return this.pushStack(f(this,e,!0))},is:function(e){return!!e&&("string"==typeof e?$t.test(e)?st(e,this.context).index(this[0])>=0:st.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){for(var n,r=0,i=this.length,o=[],a=$t.test(e)||"string"!=typeof e?st(e,t||this.context):0;i>r;r++)for(n=this[r];n&&n.ownerDocument&&n!==t&&11!==n.nodeType;){if(a?a.index(n)>-1:st.find.matchesSelector(n,e)){o.push(n);break}n=n.parentNode}return this.pushStack(o.length>1?st.unique(o):o)},index:function(e){return e?"string"==typeof e?st.inArray(this[0],st(e)):st.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?st(e,t):st.makeArray(e&&e.nodeType?[e]:e),r=st.merge(this.get(),n);return this.pushStack(st.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),st.fn.andSelf=st.fn.addBack,st.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return st.dir(e,"parentNode")},parentsUntil:function(e,t,n){return st.dir(e,"parentNode",n)},next:function(e){return c(e,"nextSibling")},prev:function(e){return c(e,"previousSibling")
},nextAll:function(e){return st.dir(e,"nextSibling")},prevAll:function(e){return st.dir(e,"previousSibling")},nextUntil:function(e,t,n){return st.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return st.dir(e,"previousSibling",n)},siblings:function(e){return st.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return st.sibling(e.firstChild)},contents:function(e){return st.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:st.merge([],e.childNodes)}},function(e,t){st.fn[e]=function(n,r){var i=st.map(this,t,n);return Pt.test(e)||(r=n),r&&"string"==typeof r&&(i=st.filter(r,i)),i=this.length>1&&!It[e]?st.unique(i):i,this.length>1&&Rt.test(e)&&(i=i.reverse()),this.pushStack(i)}}),st.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),1===t.length?st.find.matchesSelector(t[0],e)?[t[0]]:[]:st.find.matches(e,t)},dir:function(e,n,r){for(var i=[],o=e[n];o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!st(o).is(r));)1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});var zt="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",Xt=/ jQuery\d+="(?:null|\d+)"/g,Ut=RegExp("<(?:"+zt+")[\\s/>]","i"),Vt=/^\s+/,Yt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,Jt=/<([\w:]+)/,Gt=/<tbody/i,Qt=/<|&#?\w+;/,Kt=/<(?:script|style|link)/i,Zt=/^(?:checkbox|radio)$/i,en=/checked\s*(?:[^=]|=\s*.checked.)/i,tn=/^$|\/(?:java|ecma)script/i,nn=/^true\/(.*)/,rn=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,on={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:st.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},an=p(V),sn=an.appendChild(V.createElement("div"));on.optgroup=on.option,on.tbody=on.tfoot=on.colgroup=on.caption=on.thead,on.th=on.td,st.fn.extend({text:function(e){return st.access(this,function(e){return e===t?st.text(this):this.empty().append((this[0]&&this[0].ownerDocument||V).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(st.isFunction(e))return this.each(function(t){st(this).wrapAll(e.call(this,t))});if(this[0]){var t=st(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstChild&&1===e.firstChild.nodeType;)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return st.isFunction(e)?this.each(function(t){st(this).wrapInner(e.call(this,t))}):this.each(function(){var t=st(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=st.isFunction(e);return this.each(function(n){st(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){st.nodeName(this,"body")||st(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.insertBefore(e,this.firstChild)})},before:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){for(var n,r=0;null!=(n=this[r]);r++)(!e||st.filter(e,[n]).length>0)&&(t||1!==n.nodeType||st.cleanData(b(n)),n.parentNode&&(t&&st.contains(n.ownerDocument,n)&&m(b(n,"script")),n.parentNode.removeChild(n)));return this},empty:function(){for(var e,t=0;null!=(e=this[t]);t++){for(1===e.nodeType&&st.cleanData(b(e,!1));e.firstChild;)e.removeChild(e.firstChild);e.options&&st.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return st.clone(this,e,t)})},html:function(e){return st.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(Xt,""):t;if(!("string"!=typeof e||Kt.test(e)||!st.support.htmlSerialize&&Ut.test(e)||!st.support.leadingWhitespace&&Vt.test(e)||on[(Jt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(Yt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(st.cleanData(b(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){var t=st.isFunction(e);return t||"string"==typeof e||(e=st(e).not(this).detach()),this.domManip([e],!0,function(e){var t=this.nextSibling,n=this.parentNode;(n&&1===this.nodeType||11===this.nodeType)&&(st(this).remove(),t?t.parentNode.insertBefore(e,t):n.appendChild(e))})},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){e=et.apply([],e);var i,o,a,s,u,l,c=0,f=this.length,p=this,m=f-1,y=e[0],v=st.isFunction(y);if(v||!(1>=f||"string"!=typeof y||st.support.checkClone)&&en.test(y))return this.each(function(i){var o=p.eq(i);v&&(e[0]=y.call(this,i,n?o.html():t)),o.domManip(e,n,r)});if(f&&(i=st.buildFragment(e,this[0].ownerDocument,!1,this),o=i.firstChild,1===i.childNodes.length&&(i=o),o)){for(n=n&&st.nodeName(o,"tr"),a=st.map(b(i,"script"),h),s=a.length;f>c;c++)u=i,c!==m&&(u=st.clone(u,!0,!0),s&&st.merge(a,b(u,"script"))),r.call(n&&st.nodeName(this[c],"table")?d(this[c],"tbody"):this[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,st.map(a,g),c=0;s>c;c++)u=a[c],tn.test(u.type||"")&&!st._data(u,"globalEval")&&st.contains(l,u)&&(u.src?st.ajax({url:u.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):st.globalEval((u.text||u.textContent||u.innerHTML||"").replace(rn,"")));i=o=null}return this}}),st.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){st.fn[e]=function(e){for(var n,r=0,i=[],o=st(e),a=o.length-1;a>=r;r++)n=r===a?this:this.clone(!0),st(o[r])[t](n),tt.apply(i,n.get());return this.pushStack(i)}}),st.extend({clone:function(e,t,n){var r,i,o,a,s,u=st.contains(e.ownerDocument,e);if(st.support.html5Clone||st.isXMLDoc(e)||!Ut.test("<"+e.nodeName+">")?s=e.cloneNode(!0):(sn.innerHTML=e.outerHTML,sn.removeChild(s=sn.firstChild)),!(st.support.noCloneEvent&&st.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||st.isXMLDoc(e)))for(r=b(s),i=b(e),a=0;null!=(o=i[a]);++a)r[a]&&v(o,r[a]);if(t)if(n)for(i=i||b(e),r=r||b(s),a=0;null!=(o=i[a]);a++)y(o,r[a]);else y(e,s);return r=b(s,"script"),r.length>0&&m(r,!u&&b(e,"script")),r=i=o=null,s},buildFragment:function(e,t,n,r){for(var i,o,a,s,u,l,c,f=e.length,d=p(t),h=[],g=0;f>g;g++)if(o=e[g],o||0===o)if("object"===st.type(o))st.merge(h,o.nodeType?[o]:o);else if(Qt.test(o)){for(s=s||d.appendChild(t.createElement("div")),a=(Jt.exec(o)||["",""])[1].toLowerCase(),u=on[a]||on._default,s.innerHTML=u[1]+o.replace(Yt,"<$1></$2>")+u[2],c=u[0];c--;)s=s.lastChild;if(!st.support.leadingWhitespace&&Vt.test(o)&&h.push(t.createTextNode(Vt.exec(o)[0])),!st.support.tbody)for(o="table"!==a||Gt.test(o)?"<table>"!==u[1]||Gt.test(o)?0:s:s.firstChild,c=o&&o.childNodes.length;c--;)st.nodeName(l=o.childNodes[c],"tbody")&&!l.childNodes.length&&o.removeChild(l);for(st.merge(h,s.childNodes),s.textContent="";s.firstChild;)s.removeChild(s.firstChild);s=d.lastChild}else h.push(t.createTextNode(o));for(s&&d.removeChild(s),st.support.appendChecked||st.grep(b(h,"input"),x),g=0;o=h[g++];)if((!r||-1===st.inArray(o,r))&&(i=st.contains(o.ownerDocument,o),s=b(d.appendChild(o),"script"),i&&m(s),n))for(c=0;o=s[c++];)tn.test(o.type||"")&&n.push(o);return s=null,d},cleanData:function(e,n){for(var r,i,o,a,s=0,u=st.expando,l=st.cache,c=st.support.deleteExpando,f=st.event.special;null!=(o=e[s]);s++)if((n||st.acceptData(o))&&(i=o[u],r=i&&l[i])){if(r.events)for(a in r.events)f[a]?st.event.remove(o,a):st.removeEvent(o,a,r.handle);l[i]&&(delete l[i],c?delete o[u]:o.removeAttribute!==t?o.removeAttribute(u):o[u]=null,K.push(i))}}});var un,ln,cn,fn=/alpha\([^)]*\)/i,pn=/opacity\s*=\s*([^)]*)/,dn=/^(top|right|bottom|left)$/,hn=/^(none|table(?!-c[ea]).+)/,gn=/^margin/,mn=RegExp("^("+ut+")(.*)$","i"),yn=RegExp("^("+ut+")(?!px)[a-z%]+$","i"),vn=RegExp("^([+-])=("+ut+")","i"),bn={BODY:"block"},xn={position:"absolute",visibility:"hidden",display:"block"},Tn={letterSpacing:0,fontWeight:400},wn=["Top","Right","Bottom","Left"],Nn=["Webkit","O","Moz","ms"];st.fn.extend({css:function(e,n){return st.access(this,function(e,n,r){var i,o,a={},s=0;if(st.isArray(n)){for(i=ln(e),o=n.length;o>s;s++)a[n[s]]=st.css(e,n[s],!1,i);return a}return r!==t?st.style(e,n,r):st.css(e,n)},e,n,arguments.length>1)},show:function(){return N(this,!0)},hide:function(){return N(this)},toggle:function(e){var t="boolean"==typeof e;return this.each(function(){(t?e:w(this))?st(this).show():st(this).hide()})}}),st.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=un(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":st.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,u=st.camelCase(n),l=e.style;if(n=st.cssProps[u]||(st.cssProps[u]=T(l,u)),s=st.cssHooks[n]||st.cssHooks[u],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:l[n];if(a=typeof r,"string"===a&&(o=vn.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(st.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||st.cssNumber[u]||(r+="px"),st.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(l[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{l[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,u=st.camelCase(n);return n=st.cssProps[u]||(st.cssProps[u]=T(e.style,u)),s=st.cssHooks[n]||st.cssHooks[u],s&&"get"in s&&(o=s.get(e,!0,r)),o===t&&(o=un(e,n,i)),"normal"===o&&n in Tn&&(o=Tn[n]),r?(a=parseFloat(o),r===!0||st.isNumeric(a)?a||0:o):o},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),e.getComputedStyle?(ln=function(t){return e.getComputedStyle(t,null)},un=function(e,n,r){var i,o,a,s=r||ln(e),u=s?s.getPropertyValue(n)||s[n]:t,l=e.style;return s&&(""!==u||st.contains(e.ownerDocument,e)||(u=st.style(e,n)),yn.test(u)&&gn.test(n)&&(i=l.width,o=l.minWidth,a=l.maxWidth,l.minWidth=l.maxWidth=l.width=u,u=s.width,l.width=i,l.minWidth=o,l.maxWidth=a)),u}):V.documentElement.currentStyle&&(ln=function(e){return e.currentStyle},un=function(e,n,r){var i,o,a,s=r||ln(e),u=s?s[n]:t,l=e.style;return null==u&&l&&l[n]&&(u=l[n]),yn.test(u)&&!dn.test(n)&&(i=l.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),l.left="fontSize"===n?"1em":u,u=l.pixelLeft+"px",l.left=i,a&&(o.left=a)),""===u?"auto":u}),st.each(["height","width"],function(e,n){st.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&hn.test(st.css(e,"display"))?st.swap(e,xn,function(){return E(e,n,i)}):E(e,n,i):t},set:function(e,t,r){var i=r&&ln(e);return C(e,t,r?k(e,n,r,st.support.boxSizing&&"border-box"===st.css(e,"boxSizing",!1,i),i):0)}}}),st.support.opacity||(st.cssHooks.opacity={get:function(e,t){return pn.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=st.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===st.trim(o.replace(fn,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=fn.test(o)?o.replace(fn,i):o+" "+i)}}),st(function(){st.support.reliableMarginRight||(st.cssHooks.marginRight={get:function(e,n){return n?st.swap(e,{display:"inline-block"},un,[e,"marginRight"]):t}}),!st.support.pixelPosition&&st.fn.position&&st.each(["top","left"],function(e,n){st.cssHooks[n]={get:function(e,r){return r?(r=un(e,n),yn.test(r)?st(e).position()[n]+"px":r):t}}})}),st.expr&&st.expr.filters&&(st.expr.filters.hidden=function(e){return 0===e.offsetWidth&&0===e.offsetHeight||!st.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||st.css(e,"display"))},st.expr.filters.visible=function(e){return!st.expr.filters.hidden(e)}),st.each({margin:"",padding:"",border:"Width"},function(e,t){st.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];4>r;r++)i[e+wn[r]+t]=o[r]||o[r-2]||o[0];return i}},gn.test(e)||(st.cssHooks[e+t].set=C)});var Cn=/%20/g,kn=/\[\]$/,En=/\r?\n/g,Sn=/^(?:submit|button|image|reset)$/i,An=/^(?:input|select|textarea|keygen)/i;st.fn.extend({serialize:function(){return st.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=st.prop(this,"elements");return e?st.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!st(this).is(":disabled")&&An.test(this.nodeName)&&!Sn.test(e)&&(this.checked||!Zt.test(e))}).map(function(e,t){var n=st(this).val();return null==n?null:st.isArray(n)?st.map(n,function(e){return{name:t.name,value:e.replace(En,"\r\n")}}):{name:t.name,value:n.replace(En,"\r\n")}}).get()}}),st.param=function(e,n){var r,i=[],o=function(e,t){t=st.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=st.ajaxSettings&&st.ajaxSettings.traditional),st.isArray(e)||e.jquery&&!st.isPlainObject(e))st.each(e,function(){o(this.name,this.value)});else for(r in e)j(r,e[r],n,o);return i.join("&").replace(Cn,"+")};var jn,Dn,Ln=st.now(),Hn=/\?/,Mn=/#.*$/,qn=/([?&])_=[^&]*/,_n=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Fn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,On=/^(?:GET|HEAD)$/,Bn=/^\/\//,Pn=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Rn=st.fn.load,Wn={},$n={},In="*/".concat("*");try{Dn=Y.href}catch(zn){Dn=V.createElement("a"),Dn.href="",Dn=Dn.href}jn=Pn.exec(Dn.toLowerCase())||[],st.fn.load=function(e,n,r){if("string"!=typeof e&&Rn)return Rn.apply(this,arguments);var i,o,a,s=this,u=e.indexOf(" ");return u>=0&&(i=e.slice(u,e.length),e=e.slice(0,u)),st.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(o="POST"),s.length>0&&st.ajax({url:e,type:o,dataType:"html",data:n}).done(function(e){a=arguments,s.html(i?st("<div>").append(st.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,a||[e.responseText,t,e])}),this},st.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){st.fn[t]=function(e){return this.on(t,e)}}),st.each(["get","post"],function(e,n){st[n]=function(e,r,i,o){return st.isFunction(r)&&(o=o||i,i=r,r=t),st.ajax({url:e,type:n,dataType:o,data:r,success:i})}}),st.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Dn,type:"GET",isLocal:Fn.test(jn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":In,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":st.parseJSON,"text xml":st.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?H(H(e,st.ajaxSettings),t):H(st.ajaxSettings,e)},ajaxPrefilter:D(Wn),ajaxTransport:D($n),ajax:function(e,n){function r(e,n,r,s){var l,f,v,b,T,N=n;2!==x&&(x=2,u&&clearTimeout(u),i=t,a=s||"",w.readyState=e>0?4:0,r&&(b=M(p,w,r)),e>=200&&300>e||304===e?(p.ifModified&&(T=w.getResponseHeader("Last-Modified"),T&&(st.lastModified[o]=T),T=w.getResponseHeader("etag"),T&&(st.etag[o]=T)),304===e?(l=!0,N="notmodified"):(l=q(p,b),N=l.state,f=l.data,v=l.error,l=!v)):(v=N,(e||!N)&&(N="error",0>e&&(e=0))),w.status=e,w.statusText=(n||N)+"",l?g.resolveWith(d,[f,N,w]):g.rejectWith(d,[w,N,v]),w.statusCode(y),y=t,c&&h.trigger(l?"ajaxSuccess":"ajaxError",[w,p,l?f:v]),m.fireWith(d,[w,N]),c&&(h.trigger("ajaxComplete",[w,p]),--st.active||st.event.trigger("ajaxStop")))}"object"==typeof e&&(n=e,e=t),n=n||{};var i,o,a,s,u,l,c,f,p=st.ajaxSetup({},n),d=p.context||p,h=p.context&&(d.nodeType||d.jquery)?st(d):st.event,g=st.Deferred(),m=st.Callbacks("once memory"),y=p.statusCode||{},v={},b={},x=0,T="canceled",w={readyState:0,getResponseHeader:function(e){var t;if(2===x){if(!s)for(s={};t=_n.exec(a);)s[t[1].toLowerCase()]=t[2];t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===x?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return x||(e=b[n]=b[n]||e,v[e]=t),this},overrideMimeType:function(e){return x||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>x)for(t in e)y[t]=[y[t],e[t]];else w.always(e[w.status]);return this},abort:function(e){var t=e||T;return i&&i.abort(t),r(0,t),this}};if(g.promise(w).complete=m.add,w.success=w.done,w.error=w.fail,p.url=((e||p.url||Dn)+"").replace(Mn,"").replace(Bn,jn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=st.trim(p.dataType||"*").toLowerCase().match(lt)||[""],null==p.crossDomain&&(l=Pn.exec(p.url.toLowerCase()),p.crossDomain=!(!l||l[1]===jn[1]&&l[2]===jn[2]&&(l[3]||("http:"===l[1]?80:443))==(jn[3]||("http:"===jn[1]?80:443)))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=st.param(p.data,p.traditional)),L(Wn,p,n,w),2===x)return w;c=p.global,c&&0===st.active++&&st.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!On.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(Hn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=qn.test(o)?o.replace(qn,"$1_="+Ln++):o+(Hn.test(o)?"&":"?")+"_="+Ln++)),p.ifModified&&(st.lastModified[o]&&w.setRequestHeader("If-Modified-Since",st.lastModified[o]),st.etag[o]&&w.setRequestHeader("If-None-Match",st.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&w.setRequestHeader("Content-Type",p.contentType),w.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+In+"; q=0.01":""):p.accepts["*"]);for(f in p.headers)w.setRequestHeader(f,p.headers[f]);if(p.beforeSend&&(p.beforeSend.call(d,w,p)===!1||2===x))return w.abort();T="abort";for(f in{success:1,error:1,complete:1})w[f](p[f]);if(i=L($n,p,n,w)){w.readyState=1,c&&h.trigger("ajaxSend",[w,p]),p.async&&p.timeout>0&&(u=setTimeout(function(){w.abort("timeout")},p.timeout));try{x=1,i.send(v,r)}catch(N){if(!(2>x))throw N;r(-1,N)}}else r(-1,"No Transport");return w},getScript:function(e,n){return st.get(e,t,n,"script")},getJSON:function(e,t,n){return st.get(e,t,n,"json")}}),st.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return st.globalEval(e),e}}}),st.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),st.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=V.head||st("head")[0]||V.documentElement;return{send:function(t,i){n=V.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var Xn=[],Un=/(=)\?(?=&|$)|\?\?/;st.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Xn.pop()||st.expando+"_"+Ln++;return this[e]=!0,e}}),st.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,u=n.jsonp!==!1&&(Un.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Un.test(n.data)&&"data");return u||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=st.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,u?n[u]=n[u].replace(Un,"$1"+o):n.jsonp!==!1&&(n.url+=(Hn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||st.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,Xn.push(o)),s&&st.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Vn,Yn,Jn=0,Gn=e.ActiveXObject&&function(){var e;for(e in Vn)Vn[e](t,!0)};st.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&_()||F()}:_,Yn=st.ajaxSettings.xhr(),st.support.cors=!!Yn&&"withCredentials"in Yn,Yn=st.support.ajax=!!Yn,Yn&&st.ajaxTransport(function(n){if(!n.crossDomain||st.support.cors){var r;return{send:function(i,o){var a,s,u=n.xhr();if(n.username?u.open(n.type,n.url,n.async,n.username,n.password):u.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)u[s]=n.xhrFields[s];n.mimeType&&u.overrideMimeType&&u.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)u.setRequestHeader(s,i[s])}catch(l){}u.send(n.hasContent&&n.data||null),r=function(e,i){var s,l,c,f,p;try{if(r&&(i||4===u.readyState))if(r=t,a&&(u.onreadystatechange=st.noop,Gn&&delete Vn[a]),i)4!==u.readyState&&u.abort();else{f={},s=u.status,p=u.responseXML,c=u.getAllResponseHeaders(),p&&p.documentElement&&(f.xml=p),"string"==typeof u.responseText&&(f.text=u.responseText);try{l=u.statusText}catch(d){l=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=f.text?200:404}}catch(h){i||o(-1,h)}f&&o(s,l,f,c)},n.async?4===u.readyState?setTimeout(r):(a=++Jn,Gn&&(Vn||(Vn={},st(e).unload(Gn)),Vn[a]=r),u.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Qn,Kn,Zn=/^(?:toggle|show|hide)$/,er=RegExp("^(?:([+-])=|)("+ut+")([a-z%]*)$","i"),tr=/queueHooks$/,nr=[W],rr={"*":[function(e,t){var n,r,i=this.createTween(e,t),o=er.exec(t),a=i.cur(),s=+a||0,u=1,l=20;if(o){if(n=+o[2],r=o[3]||(st.cssNumber[e]?"":"px"),"px"!==r&&s){s=st.css(i.elem,e,!0)||n||1;do u=u||".5",s/=u,st.style(i.elem,e,s+r);while(u!==(u=i.cur()/a)&&1!==u&&--l)}i.unit=r,i.start=s,i.end=o[1]?s+(o[1]+1)*n:n}return i}]};st.Animation=st.extend(P,{tweener:function(e,t){st.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");for(var n,r=0,i=e.length;i>r;r++)n=e[r],rr[n]=rr[n]||[],rr[n].unshift(t)},prefilter:function(e,t){t?nr.unshift(e):nr.push(e)}}),st.Tween=$,$.prototype={constructor:$,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(st.cssNumber[n]?"":"px")},cur:function(){var e=$.propHooks[this.prop];return e&&e.get?e.get(this):$.propHooks._default.get(this)},run:function(e){var t,n=$.propHooks[this.prop];return this.pos=t=this.options.duration?st.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):$.propHooks._default.set(this),this}},$.prototype.init.prototype=$.prototype,$.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=st.css(e.elem,e.prop,"auto"),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){st.fx.step[e.prop]?st.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[st.cssProps[e.prop]]||st.cssHooks[e.prop])?st.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},$.propHooks.scrollTop=$.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},st.each(["toggle","show","hide"],function(e,t){var n=st.fn[t];st.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(I(t,!0),e,r,i)}}),st.fn.extend({fadeTo:function(e,t,n,r){return this.filter(w).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=st.isEmptyObject(e),o=st.speed(t,n,r),a=function(){var t=P(this,st.extend({},e),o);a.finish=function(){t.stop(!0)},(i||st._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=st.timers,a=st._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&tr.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&st.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=st._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=st.timers,a=r?r.length:0;for(n.finish=!0,st.queue(this,e,[]),i&&i.cur&&i.cur.finish&&i.cur.finish.call(this),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),st.each({slideDown:I("show"),slideUp:I("hide"),slideToggle:I("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){st.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),st.speed=function(e,t,n){var r=e&&"object"==typeof e?st.extend({},e):{complete:n||!n&&t||st.isFunction(e)&&e,duration:e,easing:n&&t||t&&!st.isFunction(t)&&t};return r.duration=st.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in st.fx.speeds?st.fx.speeds[r.duration]:st.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){st.isFunction(r.old)&&r.old.call(this),r.queue&&st.dequeue(this,r.queue)},r},st.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},st.timers=[],st.fx=$.prototype.init,st.fx.tick=function(){var e,n=st.timers,r=0;for(Qn=st.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||st.fx.stop(),Qn=t},st.fx.timer=function(e){e()&&st.timers.push(e)&&st.fx.start()},st.fx.interval=13,st.fx.start=function(){Kn||(Kn=setInterval(st.fx.tick,st.fx.interval))},st.fx.stop=function(){clearInterval(Kn),Kn=null},st.fx.speeds={slow:600,fast:200,_default:400},st.fx.step={},st.expr&&st.expr.filters&&(st.expr.filters.animated=function(e){return st.grep(st.timers,function(t){return e===t.elem}).length}),st.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){st.offset.setOffset(this,e,t)});var n,r,i={top:0,left:0},o=this[0],a=o&&o.ownerDocument;if(a)return n=a.documentElement,st.contains(n,o)?(o.getBoundingClientRect!==t&&(i=o.getBoundingClientRect()),r=z(a),{top:i.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:i.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):i},st.offset={setOffset:function(e,t,n){var r=st.css(e,"position");"static"===r&&(e.style.position="relative");var i,o,a=st(e),s=a.offset(),u=st.css(e,"top"),l=st.css(e,"left"),c=("absolute"===r||"fixed"===r)&&st.inArray("auto",[u,l])>-1,f={},p={};c?(p=a.position(),i=p.top,o=p.left):(i=parseFloat(u)||0,o=parseFloat(l)||0),st.isFunction(t)&&(t=t.call(e,n,s)),null!=t.top&&(f.top=t.top-s.top+i),null!=t.left&&(f.left=t.left-s.left+o),"using"in t?t.using.call(e,f):a.css(f)}},st.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===st.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),st.nodeName(e[0],"html")||(n=e.offset()),n.top+=st.css(e[0],"borderTopWidth",!0),n.left+=st.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-st.css(r,"marginTop",!0),left:t.left-n.left-st.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent||V.documentElement;e&&!st.nodeName(e,"html")&&"static"===st.css(e,"position");)e=e.offsetParent;return e||V.documentElement})}}),st.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);st.fn[e]=function(i){return st.access(this,function(e,i,o){var a=z(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?st(a).scrollLeft():o,r?o:st(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}}),st.each({Height:"height",Width:"width"},function(e,n){st.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){st.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return st.access(this,function(n,r,i){var o;return st.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?st.css(n,r,s):st.style(n,r,i,s)},n,a?i:t,a,null)}})}),e.jQuery=e.$=st,"function"==typeof define&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return st})})(window);

/************************************/
/*!
 * classie v1.0.0
 * class helper functions
 * from bonzo https://github.com/ded/bonzo
 * MIT license
 *
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true, unused: true */
/*global define: false */

( function( window ) {

    'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

    function classReg( className ) {
        return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
    }

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
    var hasClass, addClass, removeClass;

    if ( 'classList' in document.documentElement ) {
        hasClass = function( elem, c ) {
            return elem.classList.contains( c );
        };
        addClass = function( elem, c ) {
            elem.classList.add( c );
        };
        removeClass = function( elem, c ) {
            elem.classList.remove( c );
        };
    }
    else {
        hasClass = function( elem, c ) {
            return classReg( c ).test( elem.className );
        };
        addClass = function( elem, c ) {
            if ( !hasClass( elem, c ) ) {
                elem.className = elem.className + ' ' + c;
            }
        };
        removeClass = function( elem, c ) {
            elem.className = elem.className.replace( classReg( c ), ' ' );
        };
    }

    function toggleClass( elem, c ) {
        var fn = hasClass( elem, c ) ? removeClass : addClass;
        fn( elem, c );
    }

    var classie = {
        // full names
        hasClass: hasClass,
        addClass: addClass,
        removeClass: removeClass,
        toggleClass: toggleClass,
        // short names
        has: hasClass,
        add: addClass,
        remove: removeClass,
        toggle: toggleClass
    };

// transport
    if ( typeof define === 'function' && define.amd ) {
        // AMD
        define( classie );
    } else {
        // browser global
        window.classie = classie;
    }

})( window );
function init() {
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 300,
            header = document.querySelector("header");
        if (distanceY > shrinkOn) {
            classie.add(header,"smaller");
        } else {
            if (classie.has(header,"smaller")) {
                classie.remove(header,"smaller");
            }
        }
    });
}
window.onload = init();

//@ sourceMappingURL=jquery.min.map
/***************************CLOCK***************************************/
function updateClock() {
    var m_names = new Array("January", "February", "March",
        "April", "May", "June", "July", "August", "September",
        "October", "November", "December");
    var d = new Date();
    var curr_date = d.getDate();
    var curr_month = d.getMonth();
    var curr_year = d.getFullYear();
    var today = (curr_date + " " + m_names[curr_month]
    + ", " + curr_year);

    var currentTime = new Date();
    var currentHours = currentTime.getHours();
    var currentMinutes = currentTime.getMinutes();
    var currentSeconds = currentTime.getSeconds();

    // Pad the minutes and seconds with leading zeros, if required
    currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
    currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;

    // Choose either "AM" or "PM" as appropriate
    var timeOfDay = (currentHours < 12) ? "AM" : "PM";

    // Convert the hours component to 12-hour format if needed
    currentHours = (currentHours > 12) ? currentHours - 12 : currentHours;

    // Convert an hours component of "0" to "12"
    currentHours = (currentHours == 0) ? 12 : currentHours;

    // Compose the string for display
    var currentTimeString = today + " " + currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;


    $("#clock").html(currentTimeString);


    //get UTC TIME
    //UTC + 5.5 hours in Sri Lanka Time
    var dt = new Date();
    var offset = 5.5;
    var utc2 = dt.getTime() + (dt.getTimezoneOffset() * 60000);

    var utc = new Date(utc2 + (3600000 * offset));
    var utc_curr_date = utc.getDate();
    var utc_curr_month = utc.getMonth();
    var utc_curr_year = utc.getFullYear();
    var utc_today = (utc_curr_date + " " + m_names[utc_curr_month]
    + ", " + utc_curr_year);

    var utc_currentTime = new Date(utc2 + (3600000 * offset));
    var utc_currentHours = utc_currentTime.getHours();
    var utc_currentMinutes = utc_currentTime.getMinutes();
    var utc_currentSeconds = utc_currentTime.getSeconds();

    // Pad the minutes and seconds with leading zeros, if required
    utc_currentMinutes = (utc_currentMinutes < 10 ? "0" : "") + utc_currentMinutes;
    utc_currentSeconds = (utc_currentSeconds < 10 ? "0" : "") + utc_currentSeconds;

    // Choose either "AM" or "PM" as appropriate
    var utc_timeOfDay = (utc_currentHours < 12) ? "AM" : "PM";

    // Convert the hours component to 12-hour format if needed
    utc_currentHours = (utc_currentHours > 12) ? utc_currentHours - 12 : utc_currentHours;

    // Convert an hours component of "0" to "12"
    utc_currentHours = (utc_currentHours == 0) ? 12 : utc_currentHours;

    // Compose the string for display
    var utc_currentTimeString = 'SL Time(UTM +5.30 Sri Jayawardenepura): ' + utc_today + " " + utc_currentHours + ":" + utc_currentMinutes + ":" + utc_currentSeconds + " " + utc_timeOfDay;

    $("#clocksl").html(utc_currentTimeString);

}


setInterval('updateClock()', 1000);
/***************************END CLOCK***************************************/
/***************************************************************************/
///////////////// NIVO SLIDER/////////////////////////////
/*
 * jQuery Nivo Slider v3.2
 * http://nivo.dev7studios.com
 *
 * Copyright 2012, Dev7studios
 * Free to use and abuse under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 */
/*
 * jQuery Nivo Slider v3.2
 * http://nivo.dev7studios.com
 *
 * Copyright 2012, Dev7studios
 * Free to use and abuse under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 */
(function($) {
    var NivoSlider = function(element, options) {
        // Defaults are below
        var settings = $.extend({}, $.fn.nivoSlider.defaults, options);

        // Useful variables. Play carefully.
        var vars = {
            currentSlide: 0,
            currentImage: '',
            totalSlides: 0,
            running: false,
            paused: false,
            stop: false,
            controlNavEl: false
        };

        // Get this slider
        var slider = $(element);
        slider.data('nivo:vars', vars).addClass('nivoSlider');

        // Find our slider children
        var kids = slider.children();
        kids.each(function() {
            var child = $(this);
            var link = '';
            if (!child.is('img')) {
                if (child.is('a')) {
                    child.addClass('nivo-imageLink');
                    link = child;
                }
                child = child.find('img:first');
            }
            // Get img width & height
            var childWidth = (childWidth === 0) ? child.attr('width') : child.width(),
                childHeight = (childHeight === 0) ? child.attr('height') : child.height();

            if (link !== '') {
                link.css('display', 'none');
            }
            child.css('display', 'none');
            vars.totalSlides++;
        });

        // If randomStart
        if (settings.randomStart) {
            settings.startSlide = Math.floor(Math.random() * vars.totalSlides);
        }

        // Set startSlide
        if (settings.startSlide > 0) {
            if (settings.startSlide >= vars.totalSlides) {
                settings.startSlide = vars.totalSlides - 1;
            }
            vars.currentSlide = settings.startSlide;
        }

        // Get initial image
        if ($(kids[vars.currentSlide]).is('img')) {
            vars.currentImage = $(kids[vars.currentSlide]);
        } else {
            vars.currentImage = $(kids[vars.currentSlide]).find('img:first');
        }

        // Show initial link
        if ($(kids[vars.currentSlide]).is('a')) {
            $(kids[vars.currentSlide]).css('display', 'block');
        }

        // Set first background
        var sliderImg = $('<img/>').addClass('nivo-main-image');
        sliderImg.attr('src', vars.currentImage.attr('src')).show();
        slider.append(sliderImg);

        // Detect Window Resize
        $(window).resize(function() {
            slider.children('img').width(slider.width());
            sliderImg.attr('src', vars.currentImage.attr('src'));
            sliderImg.stop().height('auto');
            $('.nivo-slice').remove();
            $('.nivo-box').remove();
        });

        //Create caption
        slider.append($('<div class="nivo-caption"></div>'));

        // Process caption function
        var processCaption = function(settings) {
            var nivoCaption = $('.nivo-caption', slider);
            if (vars.currentImage.attr('title') != '' && vars.currentImage.attr('title') != undefined) {
                var title = vars.currentImage.attr('title');
                if (title.substr(0, 1) == '#')
                    title = $(title).html();

                if (nivoCaption.css('display') == 'block') {
                    setTimeout(function() {
                        nivoCaption.html(title);
                    }, settings.animSpeed);
                } else {
                    nivoCaption.html(title);
                    nivoCaption.stop().fadeIn(settings.animSpeed);
                }
            } else {
                nivoCaption.stop().fadeOut(settings.animSpeed);
            }
        }

        //Process initial  caption
        processCaption(settings);

        // In the words of Super Mario "let's a go!"
        var timer = 0;
        if (!settings.manualAdvance && kids.length > 1) {
            timer = setInterval(function() {
                nivoRun(slider, kids, settings, false);
            }, settings.pauseTime);
        }

        // Add Direction nav
        if (settings.directionNav) {
            slider.append('<div class="nivo-directionNav"><a class="nivo-prevNav">' + settings.prevText + '</a><a class="nivo-nextNav">' + settings.nextText + '</a></div>');

            $(slider).on('click', 'a.nivo-prevNav', function() {
                if (vars.running) {
                    return false;
                }
                clearInterval(timer);
                timer = '';
                vars.currentSlide -= 2;
                nivoRun(slider, kids, settings, 'prev');
            });

            $(slider).on('click', 'a.nivo-nextNav', function() {
                if (vars.running) {
                    return false;
                }
                clearInterval(timer);
                timer = '';
                nivoRun(slider, kids, settings, 'next');
            });
        }

        // Add Control nav
        if (settings.controlNav) {
            vars.controlNavEl = $('<div class="nivo-controlNav"></div>');
            slider.after(vars.controlNavEl);
            for (var i = 0; i < kids.length; i++) {
                if (settings.controlNavThumbs) {
                    vars.controlNavEl.addClass('nivo-thumbs-enabled');
                    var child = kids.eq(i);
                    if (!child.is('img')) {
                        child = child.find('img:first');
                    }
                    if (child.attr('data-thumb'))
                        vars.controlNavEl.append('<a class="nivo-control" rel="' + i + '"><img src="' + child.attr('data-thumb') + '" alt="" /></a>');
                } else {
                    vars.controlNavEl.append('<a class="nivo-control" rel="' + i + '">' + (i + 1) + '</a>');
                }
            }

            //Set initial active link
            $('a:eq(' + vars.currentSlide + ')', vars.controlNavEl).addClass('active');

            $('a', vars.controlNavEl).bind('click', function() {
                if (vars.running)
                    return false;
                if ($(this).hasClass('active'))
                    return false;
                clearInterval(timer);
                timer = '';
                sliderImg.attr('src', vars.currentImage.attr('src'));
                vars.currentSlide = $(this).attr('rel') - 1;
                nivoRun(slider, kids, settings, 'control');
            });
        }

        //For pauseOnHover setting
        if (settings.pauseOnHover) {
            slider.hover(function() {
                vars.paused = true;
                clearInterval(timer);
                timer = '';
            }, function() {
                vars.paused = false;
                // Restart the timer
                if (timer === '' && !settings.manualAdvance) {
                    timer = setInterval(function() {
                        nivoRun(slider, kids, settings, false);
                    }, settings.pauseTime);
                }
            });
        }

        // Event when Animation finishes
        slider.bind('nivo:animFinished', function() {
            sliderImg.attr('src', vars.currentImage.attr('src'));
            vars.running = false;
            // Hide child links
            $(kids).each(function() {
                if ($(this).is('a')) {
                    $(this).css('display', 'none');
                }
            });
            // Show current link
            if ($(kids[vars.currentSlide]).is('a')) {
                $(kids[vars.currentSlide]).css('display', 'block');
            }
            // Restart the timer
            if (timer === '' && !vars.paused && !settings.manualAdvance) {
                timer = setInterval(function() {
                    nivoRun(slider, kids, settings, false);
                }, settings.pauseTime);
            }
            // Trigger the afterChange callback
            settings.afterChange.call(this);
        });

        // Add slices for slice animations
        var createSlices = function(slider, settings, vars) {
            if ($(vars.currentImage).parent().is('a'))
                $(vars.currentImage).parent().css('display', 'block');
            $('img[src="' + vars.currentImage.attr('src') + '"]', slider).not('.nivo-main-image,.nivo-control img').width(slider.width()).css('visibility', 'hidden').show();
            var sliceHeight = ($('img[src="' + vars.currentImage.attr('src') + '"]', slider).not('.nivo-main-image,.nivo-control img').parent().is('a')) ? $('img[src="' + vars.currentImage.attr('src') + '"]', slider).not('.nivo-main-image,.nivo-control img').parent().height() : $('img[src="' + vars.currentImage.attr('src') + '"]', slider).not('.nivo-main-image,.nivo-control img').height();

            for (var i = 0; i < settings.slices; i++) {
                var sliceWidth = Math.round(slider.width() / settings.slices);

                if (i === settings.slices - 1) {
                    slider.append(
                        $('<div class="nivo-slice" name="' + i + '"><img src="' + vars.currentImage.attr('src') + '" style="position:absolute; width:' + slider.width() + 'px; height:auto; display:block !important; top:0; left:-' + ((sliceWidth + (i * sliceWidth)) - sliceWidth) + 'px;" /></div>').css({
                            left: (sliceWidth * i) + 'px',
                            width: (slider.width() - (sliceWidth * i)) + 'px',
                            height: sliceHeight + 'px',
                            opacity: '0',
                            overflow: 'hidden'
                        })
                    );
                } else {
                    slider.append(
                        $('<div class="nivo-slice" name="' + i + '"><img src="' + vars.currentImage.attr('src') + '" style="position:absolute; width:' + slider.width() + 'px; height:auto; display:block !important; top:0; left:-' + ((sliceWidth + (i * sliceWidth)) - sliceWidth) + 'px;" /></div>').css({
                            left: (sliceWidth * i) + 'px',
                            width: sliceWidth + 'px',
                            height: sliceHeight + 'px',
                            opacity: '0',
                            overflow: 'hidden'
                        })
                    );
                }
            }

            $('.nivo-slice', slider).height(sliceHeight);
            sliderImg.stop().animate({
                height: $(vars.currentImage).height()
            }, settings.animSpeed);
        };

        // Add boxes for box animations
        var createBoxes = function(slider, settings, vars) {
            if ($(vars.currentImage).parent().is('a'))
                $(vars.currentImage).parent().css('display', 'block');
            $('img[src="' + vars.currentImage.attr('src') + '"]', slider).not('.nivo-main-image,.nivo-control img').width(slider.width()).css('visibility', 'hidden').show();
            var boxWidth = Math.round(slider.width() / settings.boxCols),
                boxHeight = Math.round($('img[src="' + vars.currentImage.attr('src') + '"]', slider).not('.nivo-main-image,.nivo-control img').height() / settings.boxRows);


            for (var rows = 0; rows < settings.boxRows; rows++) {
                for (var cols = 0; cols < settings.boxCols; cols++) {
                    if (cols === settings.boxCols - 1) {
                        slider.append(
                            $('<div class="nivo-box" name="' + cols + '" rel="' + rows + '"><img src="' + vars.currentImage.attr('src') + '" style="position:absolute; width:' + slider.width() + 'px; height:auto; display:block; top:-' + (boxHeight * rows) + 'px; left:-' + (boxWidth * cols) + 'px;" /></div>').css({
                                opacity: 0,
                                left: (boxWidth * cols) + 'px',
                                top: (boxHeight * rows) + 'px',
                                width: (slider.width() - (boxWidth * cols)) + 'px'

                            })
                        );
                        $('.nivo-box[name="' + cols + '"]', slider).height($('.nivo-box[name="' + cols + '"] img', slider).height() + 'px');
                    } else {
                        slider.append(
                            $('<div class="nivo-box" name="' + cols + '" rel="' + rows + '"><img src="' + vars.currentImage.attr('src') + '" style="position:absolute; width:' + slider.width() + 'px; height:auto; display:block; top:-' + (boxHeight * rows) + 'px; left:-' + (boxWidth * cols) + 'px;" /></div>').css({
                                opacity: 0,
                                left: (boxWidth * cols) + 'px',
                                top: (boxHeight * rows) + 'px',
                                width: boxWidth + 'px'
                            })
                        );
                        $('.nivo-box[name="' + cols + '"]', slider).height($('.nivo-box[name="' + cols + '"] img', slider).height() + 'px');
                    }
                }
            }

            sliderImg.stop().animate({
                height: $(vars.currentImage).height()
            }, settings.animSpeed);
        };

        // Private run method
        var nivoRun = function(slider, kids, settings, nudge) {
            // Get our vars
            var vars = slider.data('nivo:vars');

            // Trigger the lastSlide callback
            if (vars && (vars.currentSlide === vars.totalSlides - 1)) {
                settings.lastSlide.call(this);
            }

            // Stop
            if ((!vars || vars.stop) && !nudge) {
                return false;
            }

            // Trigger the beforeChange callback
            settings.beforeChange.call(this);

            // Set current background before change
            if (!nudge) {
                sliderImg.attr('src', vars.currentImage.attr('src'));
            } else {
                if (nudge === 'prev') {
                    sliderImg.attr('src', vars.currentImage.attr('src'));
                }
                if (nudge === 'next') {
                    sliderImg.attr('src', vars.currentImage.attr('src'));
                }
            }

            vars.currentSlide++;
            // Trigger the slideshowEnd callback
            if (vars.currentSlide === vars.totalSlides) {
                vars.currentSlide = 0;
                settings.slideshowEnd.call(this);
            }
            if (vars.currentSlide < 0) {
                vars.currentSlide = (vars.totalSlides - 1);
            }
            // Set vars.currentImage
            if ($(kids[vars.currentSlide]).is('img')) {
                vars.currentImage = $(kids[vars.currentSlide]);
            } else {
                vars.currentImage = $(kids[vars.currentSlide]).find('img:first');
            }

            // Set active links
            if (settings.controlNav) {
                $('a', vars.controlNavEl).removeClass('active');
                $('a:eq(' + vars.currentSlide + ')', vars.controlNavEl).addClass('active');
            }

            // Process caption
            processCaption(settings);

            // Remove any slices from last transition
            $('.nivo-slice', slider).remove();

            // Remove any boxes from last transition
            $('.nivo-box', slider).remove();

            var currentEffect = settings.effect,
                anims = '';

            // Generate random effect
            if (settings.effect === 'random') {
                anims = new Array('sliceDownRight', 'sliceDownLeft', 'sliceUpRight', 'sliceUpLeft', 'sliceUpDown', 'sliceUpDownLeft', 'fold', 'fade',
                    'boxRandom', 'boxRain', 'boxRainReverse', 'boxRainGrow', 'boxRainGrowReverse');
                currentEffect = anims[Math.floor(Math.random() * (anims.length + 1))];
                if (currentEffect === undefined) {
                    currentEffect = 'fade';
                }
            }

            // Run random effect from specified set (eg: effect:'fold,fade')
            if (settings.effect.indexOf(',') !== -1) {
                anims = settings.effect.split(',');
                currentEffect = anims[Math.floor(Math.random() * (anims.length))];
                if (currentEffect === undefined) {
                    currentEffect = 'fade';
                }
            }

            // Custom transition as defined by "data-transition" attribute
            if (vars.currentImage.attr('data-transition')) {
                currentEffect = vars.currentImage.attr('data-transition');
            }

            // Run effects
            vars.running = true;
            var timeBuff = 0,
                i = 0,
                slices = '',
                firstSlice = '',
                totalBoxes = '',
                boxes = '';

            if (currentEffect === 'sliceDown' || currentEffect === 'sliceDownRight' || currentEffect === 'sliceDownLeft') {
                createSlices(slider, settings, vars);
                timeBuff = 0;
                i = 0;
                slices = $('.nivo-slice', slider);
                if (currentEffect === 'sliceDownLeft') {
                    slices = $('.nivo-slice', slider)._reverse();
                }

                slices.each(function() {
                    var slice = $(this);
                    slice.css({'top': '0px'});
                    if (i === settings.slices - 1) {
                        setTimeout(function() {
                            slice.animate({opacity: '1.0'}, settings.animSpeed, '', function() {
                                slider.trigger('nivo:animFinished');
                            });
                        }, (100 + timeBuff));
                    } else {
                        setTimeout(function() {
                            slice.animate({opacity: '1.0'}, settings.animSpeed);
                        }, (100 + timeBuff));
                    }
                    timeBuff += 50;
                    i++;
                });
            } else if (currentEffect === 'sliceUp' || currentEffect === 'sliceUpRight' || currentEffect === 'sliceUpLeft') {
                createSlices(slider, settings, vars);
                timeBuff = 0;
                i = 0;
                slices = $('.nivo-slice', slider);
                if (currentEffect === 'sliceUpLeft') {
                    slices = $('.nivo-slice', slider)._reverse();
                }

                slices.each(function() {
                    var slice = $(this);
                    slice.css({'bottom': '0px'});
                    if (i === settings.slices - 1) {
                        setTimeout(function() {
                            slice.animate({opacity: '1.0'}, settings.animSpeed, '', function() {
                                slider.trigger('nivo:animFinished');
                            });
                        }, (100 + timeBuff));
                    } else {
                        setTimeout(function() {
                            slice.animate({opacity: '1.0'}, settings.animSpeed);
                        }, (100 + timeBuff));
                    }
                    timeBuff += 50;
                    i++;
                });
            } else if (currentEffect === 'sliceUpDown' || currentEffect === 'sliceUpDownRight' || currentEffect === 'sliceUpDownLeft') {
                createSlices(slider, settings, vars);
                timeBuff = 0;
                i = 0;
                var v = 0;
                slices = $('.nivo-slice', slider);
                if (currentEffect === 'sliceUpDownLeft') {
                    slices = $('.nivo-slice', slider)._reverse();
                }

                slices.each(function() {
                    var slice = $(this);
                    if (i === 0) {
                        slice.css('top', '0px');
                        i++;
                    } else {
                        slice.css('bottom', '0px');
                        i = 0;
                    }

                    if (v === settings.slices - 1) {
                        setTimeout(function() {
                            slice.animate({opacity: '1.0'}, settings.animSpeed, '', function() {
                                slider.trigger('nivo:animFinished');
                            });
                        }, (100 + timeBuff));
                    } else {
                        setTimeout(function() {
                            slice.animate({opacity: '1.0'}, settings.animSpeed);
                        }, (100 + timeBuff));
                    }
                    timeBuff += 50;
                    v++;
                });
            } else if (currentEffect === 'fold') {
                createSlices(slider, settings, vars);
                timeBuff = 0;
                i = 0;

                $('.nivo-slice', slider).each(function() {
                    var slice = $(this);
                    var origWidth = slice.width();
                    slice.css({top: '0px', width: '0px'});
                    if (i === settings.slices - 1) {
                        setTimeout(function() {
                            slice.animate({width: origWidth, opacity: '1.0'}, settings.animSpeed, '', function() {
                                slider.trigger('nivo:animFinished');
                            });
                        }, (100 + timeBuff));
                    } else {
                        setTimeout(function() {
                            slice.animate({width: origWidth, opacity: '1.0'}, settings.animSpeed);
                        }, (100 + timeBuff));
                    }
                    timeBuff += 50;
                    i++;
                });
            } else if (currentEffect === 'fade') {
                createSlices(slider, settings, vars);

                firstSlice = $('.nivo-slice:first', slider);
                firstSlice.css({
                    'width': slider.width() + 'px'
                });

                firstSlice.animate({opacity: '1.0'}, (settings.animSpeed * 2), '', function() {
                    slider.trigger('nivo:animFinished');
                });
            } else if (currentEffect === 'slideInRight') {
                createSlices(slider, settings, vars);

                firstSlice = $('.nivo-slice:first', slider);
                firstSlice.css({
                    'width': '0px',
                    'opacity': '1'
                });

                firstSlice.animate({width: slider.width() + 'px'}, (settings.animSpeed * 2), '', function() {
                    slider.trigger('nivo:animFinished');
                });
            } else if (currentEffect === 'slideInLeft') {
                createSlices(slider, settings, vars);

                firstSlice = $('.nivo-slice:first', slider);
                firstSlice.css({
                    'width': '0px',
                    'opacity': '1',
                    'left': '',
                    'right': '0px'
                });

                firstSlice.animate({width: slider.width() + 'px'}, (settings.animSpeed * 2), '', function() {
                    // Reset positioning
                    firstSlice.css({
                        'left': '0px',
                        'right': ''
                    });
                    slider.trigger('nivo:animFinished');
                });
            } else if (currentEffect === 'boxRandom') {
                createBoxes(slider, settings, vars);

                totalBoxes = settings.boxCols * settings.boxRows;
                i = 0;
                timeBuff = 0;

                boxes = shuffle($('.nivo-box', slider));
                boxes.each(function() {
                    var box = $(this);
                    if (i === totalBoxes - 1) {
                        setTimeout(function() {
                            box.animate({opacity: '1'}, settings.animSpeed, '', function() {
                                slider.trigger('nivo:animFinished');
                            });
                        }, (100 + timeBuff));
                    } else {
                        setTimeout(function() {
                            box.animate({opacity: '1'}, settings.animSpeed);
                        }, (100 + timeBuff));
                    }
                    timeBuff += 20;
                    i++;
                });
            } else if (currentEffect === 'boxRain' || currentEffect === 'boxRainReverse' || currentEffect === 'boxRainGrow' || currentEffect === 'boxRainGrowReverse') {
                createBoxes(slider, settings, vars);

                totalBoxes = settings.boxCols * settings.boxRows;
                i = 0;
                timeBuff = 0;

                // Split boxes into 2D array
                var rowIndex = 0;
                var colIndex = 0;
                var box2Darr = [];
                box2Darr[rowIndex] = [];
                boxes = $('.nivo-box', slider);
                if (currentEffect === 'boxRainReverse' || currentEffect === 'boxRainGrowReverse') {
                    boxes = $('.nivo-box', slider)._reverse();
                }
                boxes.each(function() {
                    box2Darr[rowIndex][colIndex] = $(this);
                    colIndex++;
                    if (colIndex === settings.boxCols) {
                        rowIndex++;
                        colIndex = 0;
                        box2Darr[rowIndex] = [];
                    }
                });

                // Run animation
                for (var cols = 0; cols < (settings.boxCols * 2); cols++) {
                    var prevCol = cols;
                    for (var rows = 0; rows < settings.boxRows; rows++) {
                        if (prevCol >= 0 && prevCol < settings.boxCols) {
                            /* Due to some weird JS bug with loop vars
                             being used in setTimeout, this is wrapped
                             with an anonymous function call */
                            (function(row, col, time, i, totalBoxes) {
                                var box = $(box2Darr[row][col]);
                                var w = box.width();
                                var h = box.height();
                                if (currentEffect === 'boxRainGrow' || currentEffect === 'boxRainGrowReverse') {
                                    box.width(0).height(0);
                                }
                                if (i === totalBoxes - 1) {
                                    setTimeout(function() {
                                        box.animate({opacity: '1', width: w, height: h}, settings.animSpeed / 1.3, '', function() {
                                            slider.trigger('nivo:animFinished');
                                        });
                                    }, (100 + time));
                                } else {
                                    setTimeout(function() {
                                        box.animate({opacity: '1', width: w, height: h}, settings.animSpeed / 1.3);
                                    }, (100 + time));
                                }
                            })(rows, prevCol, timeBuff, i, totalBoxes);
                            i++;
                        }
                        prevCol--;
                    }
                    timeBuff += 100;
                }
            }
        };

        // Shuffle an array
        var shuffle = function(arr) {
            for (var j, x, i = arr.length; i; j = parseInt(Math.random() * i, 10), x = arr[--i], arr[i] = arr[j], arr[j] = x)
                ;
            return arr;
        };

        // For debugging
        var trace = function(msg) {
            if (this.console && typeof console.log !== 'undefined') {
                console.log(msg);
            }
        };

        // Start / Stop
        this.stop = function() {
            if (!$(element).data('nivo:vars').stop) {
                $(element).data('nivo:vars').stop = true;
                trace('Stop Slider');
            }
        };

        this.start = function() {
            if ($(element).data('nivo:vars').stop) {
                $(element).data('nivo:vars').stop = false;
                trace('Start Slider');
            }
        };

        // Trigger the afterLoad callback
        settings.afterLoad.call(this);

        return this;
    };

    $.fn.nivoSlider = function(options) {
        return this.each(function(key, value) {
            var element = $(this);
            // Return early if this element already has a plugin instance
            if (element.data('nivoslider')) {
                return element.data('nivoslider');
            }
            // Pass options to plugin constructor
            var nivoslider = new NivoSlider(this, options);
            // Store plugin object in this element's data
            element.data('nivoslider', nivoslider);
        });
    };

    //Default settings
    $.fn.nivoSlider.defaults = {
        effect: 'fade',
        slices: 32,
        boxCols: 8,
        boxRows: 30,
        animSpeed: 700,
        pauseTime: 7000,
        startSlide: 0,
        directionNav: true,
        controlNav: false,
        controlNavThumbs: false,
        pauseOnHover: true,
        manualAdvance: false,
        prevText: 'Prev',
        nextText: 'Next',
        randomStart: false,
        beforeChange: function() {
        },
        afterChange: function() {
        },
        slideshowEnd: function() {
        },
        lastSlide: function() {
        },
        afterLoad: function() {
        }
    };

    $.fn._reverse = [].reverse;

})(jQuery);
$('#slider').nivoSlider();
/////////////////NIVO END/////////////////////////////////

/**************************************************************************************************/
/*!
 * jQuery JavaScript Library v2.1.4
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2015-04-28T16:01Z
 */
!function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document)
            throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
    function c(a) {
        var b = "length"in a && a.length, c = _.type(a);
        return"function" === c || _.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }
    function d(a, b, c) {
        if (_.isFunction(b))
            return _.grep(a, function(a, d) {
                return!!b.call(a, d, a) !== c
            });
        if (b.nodeType)
            return _.grep(a, function(a) {
                return a === b !== c
            });
        if ("string" == typeof b) {
            if (ha.test(b))
                return _.filter(b, a, c);
            b = _.filter(b, a)
        }
        return _.grep(a, function(a) {
            return U.call(b, a) >= 0 !== c
        })
    }
    function e(a, b) {
        for (; (a = a[b]) && 1 !== a.nodeType; )
            ;
        return a
    }
    function f(a) {
        var b = oa[a] = {};
        return _.each(a.match(na) || [], function(a, c) {
            b[c] = !0
        }), b
    }
    function g() {
        Z.removeEventListener("DOMContentLoaded", g, !1), a.removeEventListener("load", g, !1), _.ready()
    }
    function h() {
        Object.defineProperty(this.cache = {}, 0, {get: function() {
            return{}
        }}), this.expando = _.expando + h.uid++
    }
    function i(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType)
            if (d = "data-" + b.replace(ua, "-$1").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : ta.test(c) ? _.parseJSON(c) : c
                } catch (e) {
                }
                sa.set(a, b, c)
            } else
                c = void 0;
        return c
    }
    function j() {
        return!0
    }
    function k() {
        return!1
    }
    function l() {
        try {
            return Z.activeElement
        } catch (a) {
        }
    }
    function m(a, b) {
        return _.nodeName(a, "table") && _.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }
    function n(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
    }
    function o(a) {
        var b = Ka.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }
    function p(a, b) {
        for (var c = 0, d = a.length; d > c; c++)
            ra.set(a[c], "globalEval", !b || ra.get(b[c], "globalEval"))
    }
    function q(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (ra.hasData(a) && (f = ra.access(a), g = ra.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j)
                    for (c = 0, d = j[e].length; d > c; c++)
                        _.event.add(b, e, j[e][c])
            }
            sa.hasData(a) && (h = sa.access(a), i = _.extend({}, h), sa.set(b, i))
        }
    }
    function r(a, b) {
        var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
        return void 0 === b || b && _.nodeName(a, b) ? _.merge([a], c) : c
    }
    function s(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && ya.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
    }
    function t(b, c) {
        var d, e = _(c.createElement(b)).appendTo(c.body), f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : _.css(e[0], "display");
        return e.detach(), f
    }
    function u(a) {
        var b = Z, c = Oa[a];
        return c || (c = t(a, b), "none" !== c && c || (Na = (Na || _("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = Na[0].contentDocument, b.write(), b.close(), c = t(a, b), Na.detach()), Oa[a] = c), c
    }
    function v(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ra(a), c && (g = c.getPropertyValue(b) || c[b]), c && ("" !== g || _.contains(a.ownerDocument, a) || (g = _.style(a, b)), Qa.test(g) && Pa.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g
    }
    function w(a, b) {
        return{get: function() {
            return a() ? void delete this.get : (this.get = b).apply(this, arguments)
        }}
    }
    function x(a, b) {
        if (b in a)
            return b;
        for (var c = b[0].toUpperCase() + b.slice(1), d = b, e = Xa.length; e--; )
            if (b = Xa[e] + c, b in a)
                return b;
        return d
    }
    function y(a, b, c) {
        var d = Ta.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }
    function z(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2)
            "margin" === c && (g += _.css(a, c + wa[f], !0, e)), d ? ("content" === c && (g -= _.css(a, "padding" + wa[f], !0, e)), "margin" !== c && (g -= _.css(a, "border" + wa[f] + "Width", !0, e))) : (g += _.css(a, "padding" + wa[f], !0, e), "padding" !== c && (g += _.css(a, "border" + wa[f] + "Width", !0, e)));
        return g
    }
    function A(a, b, c) {
        var d = !0, e = "width" === b ? a.offsetWidth : a.offsetHeight, f = Ra(a), g = "border-box" === _.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = v(a, b, f), (0 > e || null == e) && (e = a.style[b]), Qa.test(e))
                return e;
            d = g && (Y.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + z(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }
    function B(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)
            d = a[g], d.style && (f[g] = ra.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && xa(d) && (f[g] = ra.access(d, "olddisplay", u(d.nodeName)))) : (e = xa(d), "none" === c && e || ra.set(d, "olddisplay", e ? c : _.css(d, "display"))));
        for (g = 0; h > g; g++)
            d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }
    function C(a, b, c, d, e) {
        return new C.prototype.init(a, b, c, d, e)
    }
    function D() {
        return setTimeout(function() {
            Ya = void 0
        }), Ya = _.now()
    }
    function E(a, b) {
        var c, d = 0, e = {height: a};
        for (b = b?1:0; 4 > d; d += 2 - b)
            c = wa[d], e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a), e
    }
    function F(a, b, c) {
        for (var d, e = (cb[b] || []).concat(cb["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a))
                return d
    }
    function G(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this, m = {}, n = a.style, o = a.nodeType && xa(a), p = ra.get(a, "fxshow");
        c.queue || (h = _._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
            h.unqueued || i()
        }), h.unqueued++, l.always(function() {
            l.always(function() {
                h.unqueued--, _.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height"in b || "width"in b) && (c.overflow = [n.overflow, n.overflowX, n.overflowY], j = _.css(a, "display"), k = "none" === j ? ra.get(a, "olddisplay") || u(a.nodeName) : j, "inline" === k && "none" === _.css(a, "float") && (n.display = "inline-block")), c.overflow && (n.overflow = "hidden", l.always(function() {
            n.overflow = c.overflow[0], n.overflowX = c.overflow[1], n.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d], $a.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (o ? "hide" : "show")) {
                    if ("show" !== e || !p || void 0 === p[d])
                        continue;
                    o = !0
                }
                m[d] = p && p[d] || _.style(a, d)
            } else
                j = void 0;
        if (_.isEmptyObject(m))
            "inline" === ("none" === j ? u(a.nodeName) : j) && (n.display = j);
        else {
            p ? "hidden"in p && (o = p.hidden) : p = ra.access(a, "fxshow", {}), f && (p.hidden = !o), o ? _(a).show() : l.done(function() {
                _(a).hide()
            }), l.done(function() {
                var b;
                ra.remove(a, "fxshow");
                for (b in m)
                    _.style(a, b, m[b])
            });
            for (d in m)
                g = F(o ? p[d] : 0, d, l), d in p || (p[d] = g.start, o && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }
    function H(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = _.camelCase(c), e = b[d], f = a[c], _.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = _.cssHooks[d], g && "expand"in g) {
                f = g.expand(f), delete a[d];
                for (c in f)
                    c in a || (a[c] = f[c], b[c] = e)
            } else
                b[d] = e
    }
    function I(a, b, c) {
        var d, e, f = 0, g = bb.length, h = _.Deferred().always(function() {
            delete i.elem
        }), i = function() {
            if (e)
                return!1;
            for (var b = Ya || D(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++)
                j.tweens[g].run(f);
            return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
        }, j = h.promise({elem: a, props: _.extend({}, b), opts: _.extend(!0, {specialEasing: {}}, c), originalProperties: b, originalOptions: c, startTime: Ya || D(), duration: c.duration, tweens: [], createTween: function(b, c) {
            var d = _.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
            return j.tweens.push(d), d
        }, stop: function(b) {
            var c = 0, d = b ? j.tweens.length : 0;
            if (e)
                return this;
            for (e = !0; d > c; c++)
                j.tweens[c].run(1);
            return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
        }}), k = j.props;
        for (H(k, j.opts.specialEasing); g > f; f++)
            if (d = bb[f].call(j, a, k, j.opts))
                return d;
        return _.map(k, F, j), _.isFunction(j.opts.start) && j.opts.start.call(a, j), _.fx.timer(_.extend(i, {elem: a, anim: j, queue: j.opts.queue})), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    function J(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0, f = b.toLowerCase().match(na) || [];
            if (_.isFunction(c))
                for (; d = f[e++]; )
                    "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }
    function K(a, b, c, d) {
        function e(h) {
            var i;
            return f[h] = !0, _.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return"string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j), e(j), !1)
            }), i
        }
        var f = {}, g = a === tb;
        return e(b.dataTypes[0]) || !f["*"] && e("*")
    }
    function L(a, b) {
        var c, d, e = _.ajaxSettings.flatOptions || {};
        for (c in b)
            void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && _.extend(!0, a, d), a
    }
    function M(a, b, c) {
        for (var d, e, f, g, h = a.contents, i = a.dataTypes; "*" === i[0]; )
            i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d)
            for (e in h)
                if (h[e] && h[e].test(d)) {
                    i.unshift(e);
                    break
                }
        if (i[0]in c)
            f = i[0];
        else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break
                }
                g || (g = e)
            }
            f = f || g
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }
    function N(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters)
                j[g.toLowerCase()] = a.converters[g];
        for (f = k.shift(); f; )
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f)
                    f = i;
                else if ("*" !== i && i !== f) {
                    if (g = j[i + " " + f] || j["* " + f], !g)
                        for (e in j)
                            if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                                break
                            }
                    if (g !== !0)
                        if (g && a["throws"])
                            b = g(b);
                        else
                            try {
                                b = g(b)
                            } catch (l) {
                                return{state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f}
                            }
                }
        return{state: "success", data: b}
    }
    function O(a, b, c, d) {
        var e;
        if (_.isArray(b))
            _.each(b, function(b, e) {
                c || yb.test(a) ? d(a, e) : O(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
            });
        else if (c || "object" !== _.type(b))
            d(a, b);
        else
            for (e in b)
                O(a + "[" + e + "]", b[e], c, d)
    }
    function P(a) {
        return _.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
    }
    var Q = [], R = Q.slice, S = Q.concat, T = Q.push, U = Q.indexOf, V = {}, W = V.toString, X = V.hasOwnProperty, Y = {}, Z = a.document, $ = "2.1.4", _ = function(a, b) {
        return new _.fn.init(a, b)
    }, aa = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ba = /^-ms-/, ca = /-([\da-z])/gi, da = function(a, b) {
        return b.toUpperCase()
    };
    _.fn = _.prototype = {jquery: $, constructor: _, selector: "", length: 0, toArray: function() {
        return R.call(this)
    }, get: function(a) {
        return null != a ? 0 > a ? this[a + this.length] : this[a] : R.call(this)
    }, pushStack: function(a) {
        var b = _.merge(this.constructor(), a);
        return b.prevObject = this, b.context = this.context, b
    }, each: function(a, b) {
        return _.each(this, a, b)
    }, map: function(a) {
        return this.pushStack(_.map(this, function(b, c) {
            return a.call(b, c, b)
        }))
    }, slice: function() {
        return this.pushStack(R.apply(this, arguments))
    }, first: function() {
        return this.eq(0)
    }, last: function() {
        return this.eq(-1)
    }, eq: function(a) {
        var b = this.length, c = +a + (0 > a ? b : 0);
        return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
    }, end: function() {
        return this.prevObject || this.constructor(null)
    }, push: T, sort: Q.sort, splice: Q.splice}, _.extend = _.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || _.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
            if (null != (a = arguments[h]))
                for (b in a)
                    c = g[b], d = a[b], g !== d && (j && d && (_.isPlainObject(d) || (e = _.isArray(d))) ? (e ? (e = !1, f = c && _.isArray(c) ? c : []) : f = c && _.isPlainObject(c) ? c : {}, g[b] = _.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g
    }, _.extend({expando: "jQuery" + ($ + Math.random()).replace(/\D/g, ""), isReady: !0, error: function(a) {
        throw new Error(a)
    }, noop: function() {
    }, isFunction: function(a) {
        return"function" === _.type(a)
    }, isArray: Array.isArray, isWindow: function(a) {
        return null != a && a === a.window
    }, isNumeric: function(a) {
        return!_.isArray(a) && a - parseFloat(a) + 1 >= 0
    }, isPlainObject: function(a) {
        return"object" !== _.type(a) || a.nodeType || _.isWindow(a) ? !1 : a.constructor && !X.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0
    }, isEmptyObject: function(a) {
        var b;
        for (b in a)
            return!1;
        return!0
    }, type: function(a) {
        return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? V[W.call(a)] || "object" : typeof a
    }, globalEval: function(a) {
        var b, c = eval;
        a = _.trim(a), a && (1 === a.indexOf("use strict") ? (b = Z.createElement("script"), b.text = a, Z.head.appendChild(b).parentNode.removeChild(b)) : c(a))
    }, camelCase: function(a) {
        return a.replace(ba, "ms-").replace(ca, da)
    }, nodeName: function(a, b) {
        return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
    }, each: function(a, b, d) {
        var e, f = 0, g = a.length, h = c(a);
        if (d) {
            if (h)
                for (; g > f && (e = b.apply(a[f], d), e !== !1); f++)
                    ;
            else
                for (f in a)
                    if (e = b.apply(a[f], d), e === !1)
                        break
        } else if (h)
            for (; g > f && (e = b.call(a[f], f, a[f]), e !== !1); f++)
                ;
        else
            for (f in a)
                if (e = b.call(a[f], f, a[f]), e === !1)
                    break;
        return a
    }, trim: function(a) {
        return null == a ? "" : (a + "").replace(aa, "")
    }, makeArray: function(a, b) {
        var d = b || [];
        return null != a && (c(Object(a)) ? _.merge(d, "string" == typeof a ? [a] : a) : T.call(d, a)), d
    }, inArray: function(a, b, c) {
        return null == b ? -1 : U.call(b, a, c)
    }, merge: function(a, b) {
        for (var c = +b.length, d = 0, e = a.length; c > d; d++)
            a[e++] = b[d];
        return a.length = e, a
    }, grep: function(a, b, c) {
        for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)
            d = !b(a[f], f), d !== h && e.push(a[f]);
        return e
    }, map: function(a, b, d) {
        var e, f = 0, g = a.length, h = c(a), i = [];
        if (h)
            for (; g > f; f++)
                e = b(a[f], f, d), null != e && i.push(e);
        else
            for (f in a)
                e = b(a[f], f, d), null != e && i.push(e);
        return S.apply([], i)
    }, guid: 1, proxy: function(a, b) {
        var c, d, e;
        return"string" == typeof b && (c = a[b], b = a, a = c), _.isFunction(a) ? (d = R.call(arguments, 2), e = function() {
            return a.apply(b || this, d.concat(R.call(arguments)))
        }, e.guid = a.guid = a.guid || _.guid++, e) : void 0
    }, now: Date.now, support: Y}), _.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
        V["[object " + b + "]"] = b.toLowerCase()
    });
    var ea = /*!
     * Sizzle CSS Selector Engine v2.2.0-pre
     * http://sizzlejs.com/
     *
     * Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors
     * Released under the MIT license
     * http://jquery.org/license
     *
     * Date: 2014-12-16
     */
        function(a) {
            function b(a, b, c, d) {
                var e, f, g, h, i, j, l, n, o, p;
                if ((b ? b.ownerDocument || b : O) !== G && F(b), b = b || G, c = c || [], h = b.nodeType, "string" != typeof a || !a || 1 !== h && 9 !== h && 11 !== h)
                    return c;
                if (!d && I) {
                    if (11 !== h && (e = sa.exec(a)))
                        if (g = e[1]) {
                            if (9 === h) {
                                if (f = b.getElementById(g), !f || !f.parentNode)
                                    return c;
                                if (f.id === g)
                                    return c.push(f), c
                            } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && M(b, f) && f.id === g)
                                return c.push(f), c
                        } else {
                            if (e[2])
                                return $.apply(c, b.getElementsByTagName(a)), c;
                            if ((g = e[3]) && v.getElementsByClassName)
                                return $.apply(c, b.getElementsByClassName(g)), c
                        }
                    if (v.qsa && (!J || !J.test(a))) {
                        if (n = l = N, o = b, p = 1 !== h && a, 1 === h && "object" !== b.nodeName.toLowerCase()) {
                            for (j = z(a), (l = b.getAttribute("id"))?n = l.replace(ua, "\\$&"):b.setAttribute("id", n), n = "[id='" + n + "'] ", i = j.length; i--; )
                                j[i] = n + m(j[i]);
                            o = ta.test(a) && k(b.parentNode) || b, p = j.join(",")
                        }
                        if (p)
                            try {
                                return $.apply(c, o.querySelectorAll(p)), c
                            } catch (q) {
                            } finally {
                                l || b.removeAttribute("id")
                            }
                    }
                }
                return B(a.replace(ia, "$1"), b, c, d)
            }
            function c() {
                function a(c, d) {
                    return b.push(c + " ") > w.cacheLength && delete a[b.shift()], a[c + " "] = d
                }
                var b = [];
                return a
            }
            function d(a) {
                return a[N] = !0, a
            }
            function e(a) {
                var b = G.createElement("div");
                try {
                    return!!a(b)
                } catch (c) {
                    return!1
                } finally {
                    b.parentNode && b.parentNode.removeChild(b), b = null
                }
            }
            function f(a, b) {
                for (var c = a.split("|"), d = a.length; d--; )
                    w.attrHandle[c[d]] = b
            }
            function g(a, b) {
                var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || V) - (~a.sourceIndex || V);
                if (d)
                    return d;
                if (c)
                    for (; c = c.nextSibling; )
                        if (c === b)
                            return-1;
                return a ? 1 : -1
            }
            function h(a) {
                return function(b) {
                    var c = b.nodeName.toLowerCase();
                    return"input" === c && b.type === a
                }
            }
            function i(a) {
                return function(b) {
                    var c = b.nodeName.toLowerCase();
                    return("input" === c || "button" === c) && b.type === a
                }
            }
            function j(a) {
                return d(function(b) {
                    return b = +b, d(function(c, d) {
                        for (var e, f = a([], c.length, b), g = f.length; g--; )
                            c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                    })
                })
            }
            function k(a) {
                return a && "undefined" != typeof a.getElementsByTagName && a
            }
            function l() {
            }
            function m(a) {
                for (var b = 0, c = a.length, d = ""; c > b; b++)
                    d += a[b].value;
                return d
            }
            function n(a, b, c) {
                var d = b.dir, e = c && "parentNode" === d, f = Q++;
                return b.first ? function(b, c, f) {
                    for (; b = b[d]; )
                        if (1 === b.nodeType || e)
                            return a(b, c, f)
                } : function(b, c, g) {
                    var h, i, j = [P, f];
                    if (g) {
                        for (; b = b[d]; )
                            if ((1 === b.nodeType || e) && a(b, c, g))
                                return!0
                    } else
                        for (; b = b[d]; )
                            if (1 === b.nodeType || e) {
                                if (i = b[N] || (b[N] = {}), (h = i[d]) && h[0] === P && h[1] === f)
                                    return j[2] = h[2];
                                if (i[d] = j, j[2] = a(b, c, g))
                                    return!0
                            }
                }
            }
            function o(a) {
                return a.length > 1 ? function(b, c, d) {
                    for (var e = a.length; e--; )
                        if (!a[e](b, c, d))
                            return!1;
                    return!0
                } : a[0]
            }
            function p(a, c, d) {
                for (var e = 0, f = c.length; f > e; e++)
                    b(a, c[e], d);
                return d
            }
            function q(a, b, c, d, e) {
                for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)
                    (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
                return g
            }
            function r(a, b, c, e, f, g) {
                return e && !e[N] && (e = r(e)), f && !f[N] && (f = r(f, g)), d(function(d, g, h, i) {
                    var j, k, l, m = [], n = [], o = g.length, r = d || p(b || "*", h.nodeType ? [h] : h, []), s = !a || !d && b ? r : q(r, m, a, h, i), t = c ? f || (d ? a : o || e) ? [] : g : s;
                    if (c && c(s, t, h, i), e)
                        for (j = q(t, n), e(j, [], h, i), k = j.length; k--; )
                            (l = j[k]) && (t[n[k]] = !(s[n[k]] = l));
                    if (d) {
                        if (f || a) {
                            if (f) {
                                for (j = [], k = t.length; k--; )
                                    (l = t[k]) && j.push(s[k] = l);
                                f(null, t = [], j, i)
                            }
                            for (k = t.length; k--; )
                                (l = t[k]) && (j = f ? aa(d, l) : m[k]) > -1 && (d[j] = !(g[j] = l))
                        }
                    } else
                        t = q(t === g ? t.splice(o, t.length) : t), f ? f(null, g, t, i) : $.apply(g, t)
                })
            }
            function s(a) {
                for (var b, c, d, e = a.length, f = w.relative[a[0].type], g = f || w.relative[" "], h = f ? 1 : 0, i = n(function(a) {
                    return a === b
                }, g, !0), j = n(function(a) {
                    return aa(b, a) > -1
                }, g, !0), k = [function(a, c, d) {
                    var e = !f && (d || c !== C) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d));
                    return b = null, e
                }]; e > h; h++)
                    if (c = w.relative[a[h].type])
                        k = [n(o(k), c)];
                    else {
                        if (c = w.filter[a[h].type].apply(null, a[h].matches), c[N]) {
                            for (d = ++h; e > d && !w.relative[a[d].type]; d++)
                                ;
                            return r(h > 1 && o(k), h > 1 && m(a.slice(0, h - 1).concat({value: " " === a[h - 2].type ? "*" : ""})).replace(ia, "$1"), c, d > h && s(a.slice(h, d)), e > d && s(a = a.slice(d)), e > d && m(a))
                        }
                        k.push(c)
                    }
                return o(k)
            }
            function t(a, c) {
                var e = c.length > 0, f = a.length > 0, g = function(d, g, h, i, j) {
                    var k, l, m, n = 0, o = "0", p = d && [], r = [], s = C, t = d || f && w.find.TAG("*", j), u = P += null == s ? 1 : Math.random() || .1, v = t.length;
                    for (j && (C = g !== G && g); o !== v && null != (k = t[o]); o++) {
                        if (f && k) {
                            for (l = 0; m = a[l++]; )
                                if (m(k, g, h)) {
                                    i.push(k);
                                    break
                                }
                            j && (P = u)
                        }
                        e && ((k = !m && k) && n--, d && p.push(k))
                    }
                    if (n += o, e && o !== n) {
                        for (l = 0; m = c[l++]; )
                            m(p, r, g, h);
                        if (d) {
                            if (n > 0)
                                for (; o--; )
                                    p[o] || r[o] || (r[o] = Y.call(i));
                            r = q(r)
                        }
                        $.apply(i, r), j && !d && r.length > 0 && n + c.length > 1 && b.uniqueSort(i)
                    }
                    return j && (P = u, C = s), p
                };
                return e ? d(g) : g
            }
            var u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N = "sizzle" + 1 * new Date, O = a.document, P = 0, Q = 0, R = c(), S = c(), T = c(), U = function(a, b) {
                return a === b && (E = !0), 0
            }, V = 1 << 31, W = {}.hasOwnProperty, X = [], Y = X.pop, Z = X.push, $ = X.push, _ = X.slice, aa = function(a, b) {
                for (var c = 0, d = a.length; d > c; c++)
                    if (a[c] === b)
                        return c;
                return-1
            }, ba = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ca = "[\\x20\\t\\r\\n\\f]", da = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", ea = da.replace("w", "w#"), fa = "\\[" + ca + "*(" + da + ")(?:" + ca + "*([*^$|!~]?=)" + ca + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ea + "))|)" + ca + "*\\]", ga = ":(" + da + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + fa + ")*)|.*)\\)|)", ha = new RegExp(ca + "+", "g"), ia = new RegExp("^" + ca + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ca + "+$", "g"), ja = new RegExp("^" + ca + "*," + ca + "*"), ka = new RegExp("^" + ca + "*([>+~]|" + ca + ")" + ca + "*"), la = new RegExp("=" + ca + "*([^\\]'\"]*?)" + ca + "*\\]", "g"), ma = new RegExp(ga), na = new RegExp("^" + ea + "$"), oa = {ID: new RegExp("^#(" + da + ")"), CLASS: new RegExp("^\\.(" + da + ")"), TAG: new RegExp("^(" + da.replace("w", "w*") + ")"), ATTR: new RegExp("^" + fa), PSEUDO: new RegExp("^" + ga), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ca + "*(even|odd|(([+-]|)(\\d*)n|)" + ca + "*(?:([+-]|)" + ca + "*(\\d+)|))" + ca + "*\\)|)", "i"), bool: new RegExp("^(?:" + ba + ")$", "i"), needsContext: new RegExp("^" + ca + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ca + "*((?:-\\d)?\\d*)" + ca + "*\\)|)(?=[^-]|$)", "i")}, pa = /^(?:input|select|textarea|button)$/i, qa = /^h\d$/i, ra = /^[^{]+\{\s*\[native \w/, sa = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ta = /[+~]/, ua = /'|\\/g, va = new RegExp("\\\\([\\da-f]{1,6}" + ca + "?|(" + ca + ")|.)", "ig"), wa = function(a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            }, xa = function() {
                F()
            };
            try {
                $.apply(X = _.call(O.childNodes), O.childNodes), X[O.childNodes.length].nodeType
            } catch (ya) {
                $ = {apply: X.length ? function(a, b) {
                    Z.apply(a, _.call(b))
                } : function(a, b) {
                    for (var c = a.length, d = 0; a[c++] = b[d++]; )
                        ;
                    a.length = c - 1
                }}
            }
            v = b.support = {}, y = b.isXML = function(a) {
                var b = a && (a.ownerDocument || a).documentElement;
                return b ? "HTML" !== b.nodeName : !1
            }, F = b.setDocument = function(a) {
                var b, c, d = a ? a.ownerDocument || a : O;
                return d !== G && 9 === d.nodeType && d.documentElement ? (G = d, H = d.documentElement, c = d.defaultView, c && c !== c.top && (c.addEventListener ? c.addEventListener("unload", xa, !1) : c.attachEvent && c.attachEvent("onunload", xa)), I = !y(d), v.attributes = e(function(a) {
                    return a.className = "i", !a.getAttribute("className")
                }), v.getElementsByTagName = e(function(a) {
                    return a.appendChild(d.createComment("")), !a.getElementsByTagName("*").length
                }), v.getElementsByClassName = ra.test(d.getElementsByClassName), v.getById = e(function(a) {
                    return H.appendChild(a).id = N, !d.getElementsByName || !d.getElementsByName(N).length
                }), v.getById ? (w.find.ID = function(a, b) {
                    if ("undefined" != typeof b.getElementById && I) {
                        var c = b.getElementById(a);
                        return c && c.parentNode ? [c] : []
                    }
                }, w.filter.ID = function(a) {
                    var b = a.replace(va, wa);
                    return function(a) {
                        return a.getAttribute("id") === b
                    }
                }) : (delete w.find.ID, w.filter.ID = function(a) {
                    var b = a.replace(va, wa);
                    return function(a) {
                        var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                        return c && c.value === b
                    }
                }), w.find.TAG = v.getElementsByTagName ? function(a, b) {
                    return"undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : v.qsa ? b.querySelectorAll(a) : void 0
                } : function(a, b) {
                    var c, d = [], e = 0, f = b.getElementsByTagName(a);
                    if ("*" === a) {
                        for (; c = f[e++]; )
                            1 === c.nodeType && d.push(c);
                        return d
                    }
                    return f
                }, w.find.CLASS = v.getElementsByClassName && function(a, b) {
                        return I ? b.getElementsByClassName(a) : void 0
                    }, K = [], J = [], (v.qsa = ra.test(d.querySelectorAll)) && (e(function(a) {
                    H.appendChild(a).innerHTML = "<a id='" + N + "'></a><select id='" + N + "-\f]' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && J.push("[*^$]=" + ca + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || J.push("\\[" + ca + "*(?:value|" + ba + ")"), a.querySelectorAll("[id~=" + N + "-]").length || J.push("~="), a.querySelectorAll(":checked").length || J.push(":checked"), a.querySelectorAll("a#" + N + "+*").length || J.push(".#.+[+~]")
                }), e(function(a) {
                    var b = d.createElement("input");
                    b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && J.push("name" + ca + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || J.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), J.push(",.*:")
                })), (v.matchesSelector = ra.test(L = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && e(function(a) {
                    v.disconnectedMatch = L.call(a, "div"), L.call(a, "[s!='']:x"), K.push("!=", ga)
                }), J = J.length && new RegExp(J.join("|")), K = K.length && new RegExp(K.join("|")), b = ra.test(H.compareDocumentPosition), M = b || ra.test(H.contains) ? function(a, b) {
                    var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
                    return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
                } : function(a, b) {
                    if (b)
                        for (; b = b.parentNode; )
                            if (b === a)
                                return!0;
                    return!1
                }, U = b ? function(a, b) {
                    if (a === b)
                        return E = !0, 0;
                    var c = !a.compareDocumentPosition - !b.compareDocumentPosition;
                    return c ? c : (c = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & c || !v.sortDetached && b.compareDocumentPosition(a) === c ? a === d || a.ownerDocument === O && M(O, a) ? -1 : b === d || b.ownerDocument === O && M(O, b) ? 1 : D ? aa(D, a) - aa(D, b) : 0 : 4 & c ? -1 : 1)
                } : function(a, b) {
                    if (a === b)
                        return E = !0, 0;
                    var c, e = 0, f = a.parentNode, h = b.parentNode, i = [a], j = [b];
                    if (!f || !h)
                        return a === d ? -1 : b === d ? 1 : f ? -1 : h ? 1 : D ? aa(D, a) - aa(D, b) : 0;
                    if (f === h)
                        return g(a, b);
                    for (c = a; c = c.parentNode; )
                        i.unshift(c);
                    for (c = b; c = c.parentNode; )
                        j.unshift(c);
                    for (; i[e] === j[e]; )
                        e++;
                    return e ? g(i[e], j[e]) : i[e] === O ? -1 : j[e] === O ? 1 : 0
                }, d) : G
            }, b.matches = function(a, c) {
                return b(a, null, null, c)
            }, b.matchesSelector = function(a, c) {
                if ((a.ownerDocument || a) !== G && F(a), c = c.replace(la, "='$1']"), v.matchesSelector && I && (!K || !K.test(c)) && (!J || !J.test(c)))
                    try {
                        var d = L.call(a, c);
                        if (d || v.disconnectedMatch || a.document && 11 !== a.document.nodeType)
                            return d
                    } catch (e) {
                    }
                return b(c, G, null, [a]).length > 0
            }, b.contains = function(a, b) {
                return(a.ownerDocument || a) !== G && F(a), M(a, b)
            }, b.attr = function(a, b) {
                (a.ownerDocument || a) !== G && F(a);
                var c = w.attrHandle[b.toLowerCase()], d = c && W.call(w.attrHandle, b.toLowerCase()) ? c(a, b, !I) : void 0;
                return void 0 !== d ? d : v.attributes || !I ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
            }, b.error = function(a) {
                throw new Error("Syntax error, unrecognized expression: " + a)
            }, b.uniqueSort = function(a) {
                var b, c = [], d = 0, e = 0;
                if (E = !v.detectDuplicates, D = !v.sortStable && a.slice(0), a.sort(U), E) {
                    for (; b = a[e++]; )
                        b === a[e] && (d = c.push(e));
                    for (; d--; )
                        a.splice(c[d], 1)
                }
                return D = null, a
            }, x = b.getText = function(a) {
                var b, c = "", d = 0, e = a.nodeType;
                if (e) {
                    if (1 === e || 9 === e || 11 === e) {
                        if ("string" == typeof a.textContent)
                            return a.textContent;
                        for (a = a.firstChild; a; a = a.nextSibling)
                            c += x(a)
                    } else if (3 === e || 4 === e)
                        return a.nodeValue
                } else
                    for (; b = a[d++]; )
                        c += x(b);
                return c
            }, w = b.selectors = {cacheLength: 50, createPseudo: d, match: oa, attrHandle: {}, find: {}, relative: {">": {dir: "parentNode", first: !0}, " ": {dir: "parentNode"}, "+": {dir: "previousSibling", first: !0}, "~": {dir: "previousSibling"}}, preFilter: {ATTR: function(a) {
                return a[1] = a[1].replace(va, wa), a[3] = (a[3] || a[4] || a[5] || "").replace(va, wa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
            }, CHILD: function(a) {
                return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]), a
            }, PSEUDO: function(a) {
                var b, c = !a[6] && a[2];
                return oa.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && ma.test(c) && (b = z(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
            }}, filter: {TAG: function(a) {
                var b = a.replace(va, wa).toLowerCase();
                return"*" === a ? function() {
                    return!0
                } : function(a) {
                    return a.nodeName && a.nodeName.toLowerCase() === b
                }
            }, CLASS: function(a) {
                var b = R[a + " "];
                return b || (b = new RegExp("(^|" + ca + ")" + a + "(" + ca + "|$)")) && R(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                    })
            }, ATTR: function(a, c, d) {
                return function(e) {
                    var f = b.attr(e, a);
                    return null == f ? "!=" === c : c ? (f += "", "=" === c ? f === d : "!=" === c ? f !== d : "^=" === c ? d && 0 === f.indexOf(d) : "*=" === c ? d && f.indexOf(d) > -1 : "$=" === c ? d && f.slice(-d.length) === d : "~=" === c ? (" " + f.replace(ha, " ") + " ").indexOf(d) > -1 : "|=" === c ? f === d || f.slice(0, d.length + 1) === d + "-" : !1) : !0
                }
            }, CHILD: function(a, b, c, d, e) {
                var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b;
                return 1 === d && 0 === e ? function(a) {
                    return!!a.parentNode
                } : function(b, c, i) {
                    var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h;
                    if (q) {
                        if (f) {
                            for (; p; ) {
                                for (l = b; l = l[p]; )
                                    if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType)
                                        return!1;
                                o = p = "only" === a && !o && "nextSibling"
                            }
                            return!0
                        }
                        if (o = [g ? q.firstChild : q.lastChild], g && s) {
                            for (k = q[N] || (q[N] = {}), j = k[a] || [], n = j[0] === P && j[1], m = j[0] === P && j[2], l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop(); )
                                if (1 === l.nodeType && ++m && l === b) {
                                    k[a] = [P, n, m];
                                    break
                                }
                        } else if (s && (j = (b[N] || (b[N] = {}))[a]) && j[0] === P)
                            m = j[1];
                        else
                            for (; (l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h?l.nodeName.toLowerCase() !== r:1 !== l.nodeType) || !++m || (s && ((l[N] || (l[N] = {}))[a] = [P, m]), l !== b)); )
                                ;
                        return m -= e, m === d || m % d === 0 && m / d >= 0
                    }
                }
            }, PSEUDO: function(a, c) {
                var e, f = w.pseudos[a] || w.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
                return f[N] ? f(c) : f.length > 1 ? (e = [a, a, "", c], w.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function(a, b) {
                    for (var d, e = f(a, c), g = e.length; g--; )
                        d = aa(a, e[g]), a[d] = !(b[d] = e[g])
                }) : function(a) {
                    return f(a, 0, e)
                }) : f
            }}, pseudos: {not: d(function(a) {
                var b = [], c = [], e = A(a.replace(ia, "$1"));
                return e[N] ? d(function(a, b, c, d) {
                    for (var f, g = e(a, null, d, []), h = a.length; h--; )
                        (f = g[h]) && (a[h] = !(b[h] = f))
                }) : function(a, d, f) {
                    return b[0] = a, e(b, null, f, c), b[0] = null, !c.pop()
                }
            }), has: d(function(a) {
                return function(c) {
                    return b(a, c).length > 0
                }
            }), contains: d(function(a) {
                return a = a.replace(va, wa), function(b) {
                    return(b.textContent || b.innerText || x(b)).indexOf(a) > -1
                }
            }), lang: d(function(a) {
                return na.test(a || "") || b.error("unsupported lang: " + a), a = a.replace(va, wa).toLowerCase(), function(b) {
                    var c;
                    do
                        if (c = I ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))
                            return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
                    while ((b = b.parentNode) && 1 === b.nodeType);
                    return!1
                }
            }), target: function(b) {
                var c = a.location && a.location.hash;
                return c && c.slice(1) === b.id
            }, root: function(a) {
                return a === H
            }, focus: function(a) {
                return a === G.activeElement && (!G.hasFocus || G.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
            }, enabled: function(a) {
                return a.disabled === !1
            }, disabled: function(a) {
                return a.disabled === !0
            }, checked: function(a) {
                var b = a.nodeName.toLowerCase();
                return"input" === b && !!a.checked || "option" === b && !!a.selected
            }, selected: function(a) {
                return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
            }, empty: function(a) {
                for (a = a.firstChild; a; a = a.nextSibling)
                    if (a.nodeType < 6)
                        return!1;
                return!0
            }, parent: function(a) {
                return!w.pseudos.empty(a)
            }, header: function(a) {
                return qa.test(a.nodeName)
            }, input: function(a) {
                return pa.test(a.nodeName)
            }, button: function(a) {
                var b = a.nodeName.toLowerCase();
                return"input" === b && "button" === a.type || "button" === b
            }, text: function(a) {
                var b;
                return"input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
            }, first: j(function() {
                return[0]
            }), last: j(function(a, b) {
                return[b - 1]
            }), eq: j(function(a, b, c) {
                return[0 > c ? c + b : c]
            }), even: j(function(a, b) {
                for (var c = 0; b > c; c += 2)
                    a.push(c);
                return a
            }), odd: j(function(a, b) {
                for (var c = 1; b > c; c += 2)
                    a.push(c);
                return a
            }), lt: j(function(a, b, c) {
                for (var d = 0 > c ? c + b : c; --d >= 0; )
                    a.push(d);
                return a
            }), gt: j(function(a, b, c) {
                for (var d = 0 > c ? c + b : c; ++d < b; )
                    a.push(d);
                return a
            })}}, w.pseudos.nth = w.pseudos.eq;
            for (u in{radio:!0, checkbox:!0, file:!0, password:!0, image:!0})
                w.pseudos[u] = h(u);
            for (u in{submit:!0, reset:!0})
                w.pseudos[u] = i(u);
            return l.prototype = w.filters = w.pseudos, w.setFilters = new l, z = b.tokenize = function(a, c) {
                var d, e, f, g, h, i, j, k = S[a + " "];
                if (k)
                    return c ? 0 : k.slice(0);
                for (h = a, i = [], j = w.preFilter; h; ) {
                    (!d || (e = ja.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), d = !1, (e = ka.exec(h)) && (d = e.shift(), f.push({value: d, type: e[0].replace(ia, " ")}), h = h.slice(d.length));
                    for (g in w.filter)
                        !(e = oa[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(), f.push({value: d, type: g, matches: e}), h = h.slice(d.length));
                    if (!d)
                        break
                }
                return c ? h.length : h ? b.error(a) : S(a, i).slice(0)
            }, A = b.compile = function(a, b) {
                var c, d = [], e = [], f = T[a + " "];
                if (!f) {
                    for (b || (b = z(a)), c = b.length; c--; )
                        f = s(b[c]), f[N] ? d.push(f) : e.push(f);
                    f = T(a, t(e, d)), f.selector = a
                }
                return f
            }, B = b.select = function(a, b, c, d) {
                var e, f, g, h, i, j = "function" == typeof a && a, l = !d && z(a = j.selector || a);
                if (c = c || [], 1 === l.length) {
                    if (f = l[0] = l[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && v.getById && 9 === b.nodeType && I && w.relative[f[1].type]) {
                        if (b = (w.find.ID(g.matches[0].replace(va, wa), b) || [])[0], !b)
                            return c;
                        j && (b = b.parentNode), a = a.slice(f.shift().value.length)
                    }
                    for (e = oa.needsContext.test(a)?0:f.length; e-- && (g = f[e], !w.relative[h = g.type]); )
                        if ((i = w.find[h]) && (d = i(g.matches[0].replace(va, wa), ta.test(f[0].type) && k(b.parentNode) || b))) {
                            if (f.splice(e, 1), a = d.length && m(f), !a)
                                return $.apply(c, d), c;
                            break
                        }
                }
                return(j || A(a, l))(d, b, !I, c, ta.test(a) && k(b.parentNode) || b), c
            }, v.sortStable = N.split("").sort(U).join("") === N, v.detectDuplicates = !!E, F(), v.sortDetached = e(function(a) {
                return 1 & a.compareDocumentPosition(G.createElement("div"))
            }), e(function(a) {
                return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
            }) || f("type|href|height|width", function(a, b, c) {
                return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
            }), v.attributes && e(function(a) {
                return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
            }) || f("value", function(a, b, c) {
                return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
            }), e(function(a) {
                return null == a.getAttribute("disabled")
            }) || f(ba, function(a, b, c) {
                var d;
                return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
            }), b
        }(a);
    _.find = ea, _.expr = ea.selectors, _.expr[":"] = _.expr.pseudos, _.unique = ea.uniqueSort, _.text = ea.getText, _.isXMLDoc = ea.isXML, _.contains = ea.contains;
    var fa = _.expr.match.needsContext, ga = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, ha = /^.[^:#\[\.,]*$/;
    _.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? _.find.matchesSelector(d, a) ? [d] : [] : _.find.matches(a, _.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }, _.fn.extend({find: function(a) {
        var b, c = this.length, d = [], e = this;
        if ("string" != typeof a)
            return this.pushStack(_(a).filter(function() {
                for (b = 0; c > b; b++)
                    if (_.contains(e[b], this))
                        return!0
            }));
        for (b = 0; c > b; b++)
            _.find(a, e[b], d);
        return d = this.pushStack(c > 1 ? _.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d
    }, filter: function(a) {
        return this.pushStack(d(this, a || [], !1))
    }, not: function(a) {
        return this.pushStack(d(this, a || [], !0))
    }, is: function(a) {
        return!!d(this, "string" == typeof a && fa.test(a) ? _(a) : a || [], !1).length
    }});
    var ia, ja = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, ka = _.fn.init = function(a, b) {
        var c, d;
        if (!a)
            return this;
        if ("string" == typeof a) {
            if (c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : ja.exec(a), !c || !c[1] && b)
                return!b || b.jquery ? (b || ia).find(a) : this.constructor(b).find(a);
            if (c[1]) {
                if (b = b instanceof _ ? b[0] : b, _.merge(this, _.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : Z, !0)), ga.test(c[1]) && _.isPlainObject(b))
                    for (c in b)
                        _.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                return this
            }
            return d = Z.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), this.context = Z, this.selector = a, this
        }
        return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : _.isFunction(a) ? "undefined" != typeof ia.ready ? ia.ready(a) : a(_) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), _.makeArray(a, this))
    };
    ka.prototype = _.fn, ia = _(Z);
    var la = /^(?:parents|prev(?:Until|All))/, ma = {children: !0, contents: !0, next: !0, prev: !0};
    _.extend({dir: function(a, b, c) {
        for (var d = [], e = void 0 !== c; (a = a[b]) && 9 !== a.nodeType; )
            if (1 === a.nodeType) {
                if (e && _(a).is(c))
                    break;
                d.push(a)
            }
        return d
    }, sibling: function(a, b) {
        for (var c = []; a; a = a.nextSibling)
            1 === a.nodeType && a !== b && c.push(a);
        return c
    }}), _.fn.extend({has: function(a) {
        var b = _(a, this), c = b.length;
        return this.filter(function() {
            for (var a = 0; c > a; a++)
                if (_.contains(this, b[a]))
                    return!0
        })
    }, closest: function(a, b) {
        for (var c, d = 0, e = this.length, f = [], g = fa.test(a) || "string" != typeof a ? _(a, b || this.context) : 0; e > d; d++)
            for (c = this[d]; c && c !== b; c = c.parentNode)
                if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && _.find.matchesSelector(c, a))) {
                    f.push(c);
                    break
                }
        return this.pushStack(f.length > 1 ? _.unique(f) : f)
    }, index: function(a) {
        return a ? "string" == typeof a ? U.call(_(a), this[0]) : U.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
    }, add: function(a, b) {
        return this.pushStack(_.unique(_.merge(this.get(), _(a, b))))
    }, addBack: function(a) {
        return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
    }}), _.each({parent: function(a) {
        var b = a.parentNode;
        return b && 11 !== b.nodeType ? b : null
    }, parents: function(a) {
        return _.dir(a, "parentNode")
    }, parentsUntil: function(a, b, c) {
        return _.dir(a, "parentNode", c)
    }, next: function(a) {
        return e(a, "nextSibling")
    }, prev: function(a) {
        return e(a, "previousSibling")
    }, nextAll: function(a) {
        return _.dir(a, "nextSibling")
    }, prevAll: function(a) {
        return _.dir(a, "previousSibling")
    }, nextUntil: function(a, b, c) {
        return _.dir(a, "nextSibling", c)
    }, prevUntil: function(a, b, c) {
        return _.dir(a, "previousSibling", c)
    }, siblings: function(a) {
        return _.sibling((a.parentNode || {}).firstChild, a)
    }, children: function(a) {
        return _.sibling(a.firstChild)
    }, contents: function(a) {
        return a.contentDocument || _.merge([], a.childNodes)
    }}, function(a, b) {
        _.fn[a] = function(c, d) {
            var e = _.map(this, b, c);
            return"Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = _.filter(d, e)), this.length > 1 && (ma[a] || _.unique(e), la.test(a) && e.reverse()), this.pushStack(e)
        }
    });
    var na = /\S+/g, oa = {};
    _.Callbacks = function(a) {
        a = "string" == typeof a ? oa[a] || f(a) : _.extend({}, a);
        var b, c, d, e, g, h, i = [], j = !a.once && [], k = function(f) {
            for (b = a.memory && f, c = !0, h = e || 0, e = 0, g = i.length, d = !0; i && g > h; h++)
                if (i[h].apply(f[0], f[1]) === !1 && a.stopOnFalse) {
                    b = !1;
                    break
                }
            d = !1, i && (j ? j.length && k(j.shift()) : b ? i = [] : l.disable())
        }, l = {add: function() {
            if (i) {
                var c = i.length;
                !function f(b) {
                    _.each(b, function(b, c) {
                        var d = _.type(c);
                        "function" === d ? a.unique && l.has(c) || i.push(c) : c && c.length && "string" !== d && f(c)
                    })
                }(arguments), d ? g = i.length : b && (e = c, k(b))
            }
            return this
        }, remove: function() {
            return i && _.each(arguments, function(a, b) {
                for (var c; (c = _.inArray(b, i, c)) > - 1; )
                    i.splice(c, 1), d && (g >= c && g--, h >= c && h--)
            }), this
        }, has: function(a) {
            return a ? _.inArray(a, i) > -1 : !(!i || !i.length)
        }, empty: function() {
            return i = [], g = 0, this
        }, disable: function() {
            return i = j = b = void 0, this
        }, disabled: function() {
            return!i
        }, lock: function() {
            return j = void 0, b || l.disable(), this
        }, locked: function() {
            return!j
        }, fireWith: function(a, b) {
            return!i || c && !j || (b = b || [], b = [a, b.slice ? b.slice() : b], d ? j.push(b) : k(b)), this
        }, fire: function() {
            return l.fireWith(this, arguments), this
        }, fired: function() {
            return!!c
        }};
        return l
    }, _.extend({Deferred: function(a) {
        var b = [["resolve", "done", _.Callbacks("once memory"), "resolved"], ["reject", "fail", _.Callbacks("once memory"), "rejected"], ["notify", "progress", _.Callbacks("memory")]], c = "pending", d = {state: function() {
            return c
        }, always: function() {
            return e.done(arguments).fail(arguments), this
        }, then: function() {
            var a = arguments;
            return _.Deferred(function(c) {
                _.each(b, function(b, f) {
                    var g = _.isFunction(a[b]) && a[b];
                    e[f[1]](function() {
                        var a = g && g.apply(this, arguments);
                        a && _.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                    })
                }), a = null
            }).promise()
        }, promise: function(a) {
            return null != a ? _.extend(a, d) : d
        }}, e = {};
        return d.pipe = d.then, _.each(b, function(a, f) {
            var g = f[2], h = f[3];
            d[f[1]] = g.add, h && g.add(function() {
                c = h
            }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                return e[f[0] + "With"](this === e ? d : this, arguments), this
            }, e[f[0] + "With"] = g.fireWith
        }), d.promise(e), a && a.call(e, e), e
    }, when: function(a) {
        var b, c, d, e = 0, f = R.call(arguments), g = f.length, h = 1 !== g || a && _.isFunction(a.promise) ? g : 0, i = 1 === h ? a : _.Deferred(), j = function(a, c, d) {
            return function(e) {
                c[a] = this, d[a] = arguments.length > 1 ? R.call(arguments) : e, d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d)
            }
        };
        if (g > 1)
            for (b = new Array(g), c = new Array(g), d = new Array(g); g > e; e++)
                f[e] && _.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h;
        return h || i.resolveWith(d, f), i.promise()
    }});
    var pa;
    _.fn.ready = function(a) {
        return _.ready.promise().done(a), this
    }, _.extend({isReady: !1, readyWait: 1, holdReady: function(a) {
        a ? _.readyWait++ : _.ready(!0)
    }, ready: function(a) {
        (a === !0 ? --_.readyWait : _.isReady) || (_.isReady = !0, a !== !0 && --_.readyWait > 0 || (pa.resolveWith(Z, [_]), _.fn.triggerHandler && (_(Z).triggerHandler("ready"), _(Z).off("ready"))))
    }}), _.ready.promise = function(b) {
        return pa || (pa = _.Deferred(), "complete" === Z.readyState ? setTimeout(_.ready) : (Z.addEventListener("DOMContentLoaded", g, !1), a.addEventListener("load", g, !1))), pa.promise(b)
    }, _.ready.promise();
    var qa = _.access = function(a, b, c, d, e, f, g) {
        var h = 0, i = a.length, j = null == c;
        if ("object" === _.type(c)) {
            e = !0;
            for (h in c)
                _.access(a, b, h, c[h], !0, f, g)
        } else if (void 0 !== d && (e = !0, _.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
                return j.call(_(a), c)
            })), b))
            for (; i > h; h++)
                b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    };
    _.acceptData = function(a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
    }, h.uid = 1, h.accepts = _.acceptData, h.prototype = {key: function(a) {
        if (!h.accepts(a))
            return 0;
        var b = {}, c = a[this.expando];
        if (!c) {
            c = h.uid++;
            try {
                b[this.expando] = {value: c}, Object.defineProperties(a, b)
            } catch (d) {
                b[this.expando] = c, _.extend(a, b)
            }
        }
        return this.cache[c] || (this.cache[c] = {}), c
    }, set: function(a, b, c) {
        var d, e = this.key(a), f = this.cache[e];
        if ("string" == typeof b)
            f[b] = c;
        else if (_.isEmptyObject(f))
            _.extend(this.cache[e], b);
        else
            for (d in b)
                f[d] = b[d];
        return f
    }, get: function(a, b) {
        var c = this.cache[this.key(a)];
        return void 0 === b ? c : c[b]
    }, access: function(a, b, c) {
        var d;
        return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, _.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b)
    }, remove: function(a, b) {
        var c, d, e, f = this.key(a), g = this.cache[f];
        if (void 0 === b)
            this.cache[f] = {};
        else {
            _.isArray(b) ? d = b.concat(b.map(_.camelCase)) : (e = _.camelCase(b), b in g ? d = [b, e] : (d = e, d = d in g ? [d] : d.match(na) || [])), c = d.length;
            for (; c--; )
                delete g[d[c]]
        }
    }, hasData: function(a) {
        return!_.isEmptyObject(this.cache[a[this.expando]] || {})
    }, discard: function(a) {
        a[this.expando] && delete this.cache[a[this.expando]]
    }};
    var ra = new h, sa = new h, ta = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, ua = /([A-Z])/g;
    _.extend({hasData: function(a) {
        return sa.hasData(a) || ra.hasData(a)
    }, data: function(a, b, c) {
        return sa.access(a, b, c)
    }, removeData: function(a, b) {
        sa.remove(a, b)
    }, _data: function(a, b, c) {
        return ra.access(a, b, c)
    }, _removeData: function(a, b) {
        ra.remove(a, b)
    }}), _.fn.extend({data: function(a, b) {
        var c, d, e, f = this[0], g = f && f.attributes;
        if (void 0 === a) {
            if (this.length && (e = sa.get(f), 1 === f.nodeType && !ra.get(f, "hasDataAttrs"))) {
                for (c = g.length; c--; )
                    g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = _.camelCase(d.slice(5)), i(f, d, e[d])));
                ra.set(f, "hasDataAttrs", !0)
            }
            return e
        }
        return"object" == typeof a ? this.each(function() {
            sa.set(this, a)
        }) : qa(this, function(b) {
            var c, d = _.camelCase(a);
            if (f && void 0 === b) {
                if (c = sa.get(f, a), void 0 !== c)
                    return c;
                if (c = sa.get(f, d), void 0 !== c)
                    return c;
                if (c = i(f, d, void 0), void 0 !== c)
                    return c
            } else
                this.each(function() {
                    var c = sa.get(this, d);
                    sa.set(this, d, b), -1 !== a.indexOf("-") && void 0 !== c && sa.set(this, a, b)
                })
        }, null, b, arguments.length > 1, null, !0)
    }, removeData: function(a) {
        return this.each(function() {
            sa.remove(this, a)
        })
    }}), _.extend({queue: function(a, b, c) {
        var d;
        return a ? (b = (b || "fx") + "queue", d = ra.get(a, b), c && (!d || _.isArray(c) ? d = ra.access(a, b, _.makeArray(c)) : d.push(c)), d || []) : void 0
    }, dequeue: function(a, b) {
        b = b || "fx";
        var c = _.queue(a, b), d = c.length, e = c.shift(), f = _._queueHooks(a, b), g = function() {
            _.dequeue(a, b)
        };
        "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
    }, _queueHooks: function(a, b) {
        var c = b + "queueHooks";
        return ra.get(a, c) || ra.access(a, c, {empty: _.Callbacks("once memory").add(function() {
                ra.remove(a, [b + "queue", c])
            })})
    }}), _.fn.extend({queue: function(a, b) {
        var c = 2;
        return"string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? _.queue(this[0], a) : void 0 === b ? this : this.each(function() {
            var c = _.queue(this, a, b);
            _._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && _.dequeue(this, a)
        })
    }, dequeue: function(a) {
        return this.each(function() {
            _.dequeue(this, a)
        })
    }, clearQueue: function(a) {
        return this.queue(a || "fx", [])
    }, promise: function(a, b) {
        var c, d = 1, e = _.Deferred(), f = this, g = this.length, h = function() {
            --d || e.resolveWith(f, [f])
        };
        for ("string" != typeof a && (b = a, a = void 0), a = a || "fx"; g--; )
            c = ra.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
        return h(), e.promise(b)
    }});
    var va = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, wa = ["Top", "Right", "Bottom", "Left"], xa = function(a, b) {
        return a = b || a, "none" === _.css(a, "display") || !_.contains(a.ownerDocument, a)
    }, ya = /^(?:checkbox|radio)$/i;
    !function() {
        var a = Z.createDocumentFragment(), b = a.appendChild(Z.createElement("div")), c = Z.createElement("input");
        c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), Y.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", Y.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
    }();
    var za = "undefined";
    Y.focusinBubbles = "onfocusin"in a;
    var Aa = /^key/, Ba = /^(?:mouse|pointer|contextmenu)|click/, Ca = /^(?:focusinfocus|focusoutblur)$/, Da = /^([^.]*)(?:\.(.+)|)$/;
    _.event = {global: {}, add: function(a, b, c, d, e) {
        var f, g, h, i, j, k, l, m, n, o, p, q = ra.get(a);
        if (q)
            for (c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = _.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function(b) {
                return typeof _ !== za && _.event.triggered !== b.type ? _.event.dispatch.apply(a, arguments) : void 0
            }), b = (b || "").match(na) || [""], j = b.length; j--; )
                h = Da.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = _.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = _.event.special[n] || {}, k = _.extend({type: n, origType: p, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && _.expr.match.needsContext.test(e), namespace: o.join(".")}, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g, !1)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), _.event.global[n] = !0)
    }, remove: function(a, b, c, d, e) {
        var f, g, h, i, j, k, l, m, n, o, p, q = ra.hasData(a) && ra.get(a);
        if (q && (i = q.events)) {
            for (b = (b || "").match(na) || [""], j = b.length; j--; )
                if (h = Da.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                    for (l = _.event.special[n] || {}, n = (d?l.delegateType:l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length; f--; )
                        k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                    g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || _.removeEvent(a, n, q.handle), delete i[n])
                } else
                    for (n in i)
                        _.event.remove(a, n + b[j], c, d, !0);
            _.isEmptyObject(i) && (delete q.handle, ra.remove(a, "events"))
        }
    }, trigger: function(b, c, d, e) {
        var f, g, h, i, j, k, l, m = [d || Z], n = X.call(b, "type") ? b.type : b, o = X.call(b, "namespace") ? b.namespace.split(".") : [];
        if (g = h = d = d || Z, 3 !== d.nodeType && 8 !== d.nodeType && !Ca.test(n + _.event.triggered) && (n.indexOf(".") >= 0 && (o = n.split("."), n = o.shift(), o.sort()), j = n.indexOf(":") < 0 && "on" + n, b = b[_.expando] ? b : new _.Event(n, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = o.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d),
                c = null == c ? [b] : _.makeArray(c, [b]), l = _.event.special[n] || {}, e || !l.trigger || l.trigger.apply(d, c) !== !1)) {
            if (!e && !l.noBubble && !_.isWindow(d)) {
                for (i = l.delegateType || n, Ca.test(i + n) || (g = g.parentNode); g; g = g.parentNode)
                    m.push(g), h = g;
                h === (d.ownerDocument || Z) && m.push(h.defaultView || h.parentWindow || a)
            }
            for (f = 0; (g = m[f++]) && !b.isPropagationStopped(); )
                b.type = f > 1 ? i : l.bindType || n, k = (ra.get(g, "events") || {})[b.type] && ra.get(g, "handle"), k && k.apply(g, c), k = j && g[j], k && k.apply && _.acceptData(g) && (b.result = k.apply(g, c), b.result === !1 && b.preventDefault());
            return b.type = n, e || b.isDefaultPrevented() || l._default && l._default.apply(m.pop(), c) !== !1 || !_.acceptData(d) || j && _.isFunction(d[n]) && !_.isWindow(d) && (h = d[j], h && (d[j] = null), _.event.triggered = n, d[n](), _.event.triggered = void 0, h && (d[j] = h)), b.result
        }
    }, dispatch: function(a) {
        a = _.event.fix(a);
        var b, c, d, e, f, g = [], h = R.call(arguments), i = (ra.get(this, "events") || {})[a.type] || [], j = _.event.special[a.type] || {};
        if (h[0] = a, a.delegateTarget = this, !j.preDispatch || j.preDispatch.call(this, a) !== !1) {
            for (g = _.event.handlers.call(this, a, i), b = 0; (e = g[b++]) && !a.isPropagationStopped(); )
                for (a.currentTarget = e.elem, c = 0; (f = e.handlers[c++]) && !a.isImmediatePropagationStopped(); )
                    (!a.namespace_re || a.namespace_re.test(f.namespace)) && (a.handleObj = f, a.data = f.data, d = ((_.event.special[f.origType] || {}).handle || f.handler).apply(e.elem, h), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()));
            return j.postDispatch && j.postDispatch.call(this, a), a.result
        }
    }, handlers: function(a, b) {
        var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
        if (h && i.nodeType && (!a.button || "click" !== a.type))
            for (; i !== this; i = i.parentNode || this)
                if (i.disabled !== !0 || "click" !== a.type) {
                    for (d = [], c = 0; h > c; c++)
                        f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? _(e, this).index(i) >= 0 : _.find(e, this, null, [i]).length), d[e] && d.push(f);
                    d.length && g.push({elem: i, handlers: d})
                }
        return h < b.length && g.push({elem: this, handlers: b.slice(h)}), g
    }, props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: {props: "char charCode key keyCode".split(" "), filter: function(a, b) {
        return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
    }}, mouseHooks: {props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function(a, b) {
        var c, d, e, f = b.button;
        return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || Z, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
    }}, fix: function(a) {
        if (a[_.expando])
            return a;
        var b, c, d, e = a.type, f = a, g = this.fixHooks[e];
        for (g || (this.fixHooks[e] = g = Ba.test(e)?this.mouseHooks:Aa.test(e)?this.keyHooks:{}), d = g.props?this.props.concat(g.props):this.props, a = new _.Event(f), b = d.length; b--; )
            c = d[b], a[c] = f[c];
        return a.target || (a.target = Z), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a
    }, special: {load: {noBubble: !0}, focus: {trigger: function() {
        return this !== l() && this.focus ? (this.focus(), !1) : void 0
    }, delegateType: "focusin"}, blur: {trigger: function() {
        return this === l() && this.blur ? (this.blur(), !1) : void 0
    }, delegateType: "focusout"}, click: {trigger: function() {
        return"checkbox" === this.type && this.click && _.nodeName(this, "input") ? (this.click(), !1) : void 0
    }, _default: function(a) {
        return _.nodeName(a.target, "a")
    }}, beforeunload: {postDispatch: function(a) {
        void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
    }}}, simulate: function(a, b, c, d) {
        var e = _.extend(new _.Event, c, {type: a, isSimulated: !0, originalEvent: {}});
        d ? _.event.trigger(e, null, b) : _.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
    }}, _.removeEvent = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    }, _.Event = function(a, b) {
        return this instanceof _.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? j : k) : this.type = a, b && _.extend(this, b), this.timeStamp = a && a.timeStamp || _.now(), void(this[_.expando] = !0)) : new _.Event(a, b)
    }, _.Event.prototype = {isDefaultPrevented: k, isPropagationStopped: k, isImmediatePropagationStopped: k, preventDefault: function() {
        var a = this.originalEvent;
        this.isDefaultPrevented = j, a && a.preventDefault && a.preventDefault()
    }, stopPropagation: function() {
        var a = this.originalEvent;
        this.isPropagationStopped = j, a && a.stopPropagation && a.stopPropagation()
    }, stopImmediatePropagation: function() {
        var a = this.originalEvent;
        this.isImmediatePropagationStopped = j, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
    }}, _.each({mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout"}, function(a, b) {
        _.event.special[a] = {delegateType: b, bindType: b, handle: function(a) {
            var c, d = this, e = a.relatedTarget, f = a.handleObj;
            return(!e || e !== d && !_.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
        }}
    }), Y.focusinBubbles || _.each({focus: "focusin", blur: "focusout"}, function(a, b) {
        var c = function(a) {
            _.event.simulate(b, a.target, _.event.fix(a), !0)
        };
        _.event.special[b] = {setup: function() {
            var d = this.ownerDocument || this, e = ra.access(d, b);
            e || d.addEventListener(a, c, !0), ra.access(d, b, (e || 0) + 1)
        }, teardown: function() {
            var d = this.ownerDocument || this, e = ra.access(d, b) - 1;
            e ? ra.access(d, b, e) : (d.removeEventListener(a, c, !0), ra.remove(d, b))
        }}
    }), _.fn.extend({on: function(a, b, c, d, e) {
        var f, g;
        if ("object" == typeof a) {
            "string" != typeof b && (c = c || b, b = void 0);
            for (g in a)
                this.on(g, b, c, a[g], e);
            return this
        }
        if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1)
            d = k;
        else if (!d)
            return this;
        return 1 === e && (f = d, d = function(a) {
            return _().off(a), f.apply(this, arguments)
        }, d.guid = f.guid || (f.guid = _.guid++)), this.each(function() {
            _.event.add(this, a, d, c, b)
        })
    }, one: function(a, b, c, d) {
        return this.on(a, b, c, d, 1)
    }, off: function(a, b, c) {
        var d, e;
        if (a && a.preventDefault && a.handleObj)
            return d = a.handleObj, _(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
        if ("object" == typeof a) {
            for (e in a)
                this.off(e, b, a[e]);
            return this
        }
        return(b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = k), this.each(function() {
            _.event.remove(this, a, c, b)
        })
    }, trigger: function(a, b) {
        return this.each(function() {
            _.event.trigger(a, b, this)
        })
    }, triggerHandler: function(a, b) {
        var c = this[0];
        return c ? _.event.trigger(a, b, c, !0) : void 0
    }});
    var Ea = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Fa = /<([\w:]+)/, Ga = /<|&#?\w+;/, Ha = /<(?:script|style|link)/i, Ia = /checked\s*(?:[^=]|=\s*.checked.)/i, Ja = /^$|\/(?:java|ecma)script/i, Ka = /^true\/(.*)/, La = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Ma = {option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""]};
    Ma.optgroup = Ma.option, Ma.tbody = Ma.tfoot = Ma.colgroup = Ma.caption = Ma.thead, Ma.th = Ma.td, _.extend({clone: function(a, b, c) {
        var d, e, f, g, h = a.cloneNode(!0), i = _.contains(a.ownerDocument, a);
        if (!(Y.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || _.isXMLDoc(a)))
            for (g = r(h), f = r(a), d = 0, e = f.length; e > d; d++)
                s(f[d], g[d]);
        if (b)
            if (c)
                for (f = f || r(a), g = g || r(h), d = 0, e = f.length; e > d; d++)
                    q(f[d], g[d]);
            else
                q(a, h);
        return g = r(h, "script"), g.length > 0 && p(g, !i && r(a, "script")), h
    }, buildFragment: function(a, b, c, d) {
        for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, n = a.length; n > m; m++)
            if (e = a[m], e || 0 === e)
                if ("object" === _.type(e))
                    _.merge(l, e.nodeType ? [e] : e);
                else if (Ga.test(e)) {
                    for (f = f || k.appendChild(b.createElement("div")), g = (Fa.exec(e) || ["", ""])[1].toLowerCase(), h = Ma[g] || Ma._default, f.innerHTML = h[1] + e.replace(Ea, "<$1></$2>") + h[2], j = h[0]; j--; )
                        f = f.lastChild;
                    _.merge(l, f.childNodes), f = k.firstChild, f.textContent = ""
                } else
                    l.push(b.createTextNode(e));
        for (k.textContent = "", m = 0; e = l[m++]; )
            if ((!d || -1 === _.inArray(e, d)) && (i = _.contains(e.ownerDocument, e), f = r(k.appendChild(e), "script"), i && p(f), c))
                for (j = 0; e = f[j++]; )
                    Ja.test(e.type || "") && c.push(e);
        return k
    }, cleanData: function(a) {
        for (var b, c, d, e, f = _.event.special, g = 0; void 0 !== (c = a[g]); g++) {
            if (_.acceptData(c) && (e = c[ra.expando], e && (b = ra.cache[e]))) {
                if (b.events)
                    for (d in b.events)
                        f[d] ? _.event.remove(c, d) : _.removeEvent(c, d, b.handle);
                ra.cache[e] && delete ra.cache[e]
            }
            delete sa.cache[c[sa.expando]]
        }
    }}), _.fn.extend({text: function(a) {
        return qa(this, function(a) {
            return void 0 === a ? _.text(this) : this.empty().each(function() {
                (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a)
            })
        }, null, a, arguments.length)
    }, append: function() {
        return this.domManip(arguments, function(a) {
            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                var b = m(this, a);
                b.appendChild(a)
            }
        })
    }, prepend: function() {
        return this.domManip(arguments, function(a) {
            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                var b = m(this, a);
                b.insertBefore(a, b.firstChild)
            }
        })
    }, before: function() {
        return this.domManip(arguments, function(a) {
            this.parentNode && this.parentNode.insertBefore(a, this)
        })
    }, after: function() {
        return this.domManip(arguments, function(a) {
            this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
        })
    }, remove: function(a, b) {
        for (var c, d = a ? _.filter(a, this) : this, e = 0; null != (c = d[e]); e++)
            b || 1 !== c.nodeType || _.cleanData(r(c)), c.parentNode && (b && _.contains(c.ownerDocument, c) && p(r(c, "script")), c.parentNode.removeChild(c));
        return this
    }, empty: function() {
        for (var a, b = 0; null != (a = this[b]); b++)
            1 === a.nodeType && (_.cleanData(r(a, !1)), a.textContent = "");
        return this
    }, clone: function(a, b) {
        return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
            return _.clone(this, a, b)
        })
    }, html: function(a) {
        return qa(this, function(a) {
            var b = this[0] || {}, c = 0, d = this.length;
            if (void 0 === a && 1 === b.nodeType)
                return b.innerHTML;
            if ("string" == typeof a && !Ha.test(a) && !Ma[(Fa.exec(a) || ["", ""])[1].toLowerCase()]) {
                a = a.replace(Ea, "<$1></$2>");
                try {
                    for (; d > c; c++)
                        b = this[c] || {}, 1 === b.nodeType && (_.cleanData(r(b, !1)), b.innerHTML = a);
                    b = 0
                } catch (e) {
                }
            }
            b && this.empty().append(a)
        }, null, a, arguments.length)
    }, replaceWith: function() {
        var a = arguments[0];
        return this.domManip(arguments, function(b) {
            a = this.parentNode, _.cleanData(r(this)), a && a.replaceChild(b, this)
        }), a && (a.length || a.nodeType) ? this : this.remove()
    }, detach: function(a) {
        return this.remove(a, !0)
    }, domManip: function(a, b) {
        a = S.apply([], a);
        var c, d, e, f, g, h, i = 0, j = this.length, k = this, l = j - 1, m = a[0], p = _.isFunction(m);
        if (p || j > 1 && "string" == typeof m && !Y.checkClone && Ia.test(m))
            return this.each(function(c) {
                var d = k.eq(c);
                p && (a[0] = m.call(this, c, d.html())), d.domManip(a, b)
            });
        if (j && (c = _.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 1 === c.childNodes.length && (c = d), d)) {
            for (e = _.map(r(c, "script"), n), f = e.length; j > i; i++)
                g = c, i !== l && (g = _.clone(g, !0, !0), f && _.merge(e, r(g, "script"))), b.call(this[i], g, i);
            if (f)
                for (h = e[e.length - 1].ownerDocument, _.map(e, o), i = 0; f > i; i++)
                    g = e[i], Ja.test(g.type || "") && !ra.access(g, "globalEval") && _.contains(h, g) && (g.src ? _._evalUrl && _._evalUrl(g.src) : _.globalEval(g.textContent.replace(La, "")))
        }
        return this
    }}), _.each({appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith"}, function(a, b) {
        _.fn[a] = function(a) {
            for (var c, d = [], e = _(a), f = e.length - 1, g = 0; f >= g; g++)
                c = g === f ? this : this.clone(!0), _(e[g])[b](c), T.apply(d, c.get());
            return this.pushStack(d)
        }
    });
    var Na, Oa = {}, Pa = /^margin/, Qa = new RegExp("^(" + va + ")(?!px)[a-z%]+$", "i"), Ra = function(b) {
        return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null)
    };
    !function() {
        function b() {
            g.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", g.innerHTML = "", e.appendChild(f);
            var b = a.getComputedStyle(g, null);
            c = "1%" !== b.top, d = "4px" === b.width, e.removeChild(f)
        }
        var c, d, e = Z.documentElement, f = Z.createElement("div"), g = Z.createElement("div");
        g.style && (g.style.backgroundClip = "content-box", g.cloneNode(!0).style.backgroundClip = "", Y.clearCloneStyle = "content-box" === g.style.backgroundClip, f.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", f.appendChild(g), a.getComputedStyle && _.extend(Y, {pixelPosition: function() {
            return b(), c
        }, boxSizingReliable: function() {
            return null == d && b(), d
        }, reliableMarginRight: function() {
            var b, c = g.appendChild(Z.createElement("div"));
            return c.style.cssText = g.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", g.style.width = "1px", e.appendChild(f), b = !parseFloat(a.getComputedStyle(c, null).marginRight), e.removeChild(f), g.removeChild(c), b
        }}))
    }(), _.swap = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b)
            g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b)
            a.style[f] = g[f];
        return e
    };
    var Sa = /^(none|table(?!-c[ea]).+)/, Ta = new RegExp("^(" + va + ")(.*)$", "i"), Ua = new RegExp("^([+-])=(" + va + ")", "i"), Va = {position: "absolute", visibility: "hidden", display: "block"}, Wa = {letterSpacing: "0", fontWeight: "400"}, Xa = ["Webkit", "O", "Moz", "ms"];
    _.extend({cssHooks: {opacity: {get: function(a, b) {
        if (b) {
            var c = v(a, "opacity");
            return"" === c ? "1" : c
        }
    }}}, cssNumber: {columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0}, cssProps: {"float": "cssFloat"}, style: function(a, b, c, d) {
        if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
            var e, f, g, h = _.camelCase(b), i = a.style;
            return b = _.cssProps[h] || (_.cssProps[h] = x(i, h)), g = _.cssHooks[b] || _.cssHooks[h], void 0 === c ? g && "get"in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = Ua.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(_.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || _.cssNumber[h] || (c += "px"), Y.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set"in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0)
        }
    }, css: function(a, b, c, d) {
        var e, f, g, h = _.camelCase(b);
        return b = _.cssProps[h] || (_.cssProps[h] = x(a.style, h)), g = _.cssHooks[b] || _.cssHooks[h], g && "get"in g && (e = g.get(a, !0, c)), void 0 === e && (e = v(a, b, d)), "normal" === e && b in Wa && (e = Wa[b]), "" === c || c ? (f = parseFloat(e), c === !0 || _.isNumeric(f) ? f || 0 : e) : e
    }}), _.each(["height", "width"], function(a, b) {
        _.cssHooks[b] = {get: function(a, c, d) {
            return c ? Sa.test(_.css(a, "display")) && 0 === a.offsetWidth ? _.swap(a, Va, function() {
                return A(a, b, d)
            }) : A(a, b, d) : void 0
        }, set: function(a, c, d) {
            var e = d && Ra(a);
            return y(a, c, d ? z(a, b, d, "border-box" === _.css(a, "boxSizing", !1, e), e) : 0)
        }}
    }), _.cssHooks.marginRight = w(Y.reliableMarginRight, function(a, b) {
        return b ? _.swap(a, {display: "inline-block"}, v, [a, "marginRight"]) : void 0
    }), _.each({margin: "", padding: "", border: "Width"}, function(a, b) {
        _.cssHooks[a + b] = {expand: function(c) {
            for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++)
                e[a + wa[d] + b] = f[d] || f[d - 2] || f[0];
            return e
        }}, Pa.test(a) || (_.cssHooks[a + b].set = y)
    }), _.fn.extend({css: function(a, b) {
        return qa(this, function(a, b, c) {
            var d, e, f = {}, g = 0;
            if (_.isArray(b)) {
                for (d = Ra(a), e = b.length; e > g; g++)
                    f[b[g]] = _.css(a, b[g], !1, d);
                return f
            }
            return void 0 !== c ? _.style(a, b, c) : _.css(a, b)
        }, a, b, arguments.length > 1)
    }, show: function() {
        return B(this, !0)
    }, hide: function() {
        return B(this)
    }, toggle: function(a) {
        return"boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
            xa(this) ? _(this).show() : _(this).hide()
        })
    }}), _.Tween = C, C.prototype = {constructor: C, init: function(a, b, c, d, e, f) {
        this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (_.cssNumber[c] ? "" : "px")
    }, cur: function() {
        var a = C.propHooks[this.prop];
        return a && a.get ? a.get(this) : C.propHooks._default.get(this)
    }, run: function(a) {
        var b, c = C.propHooks[this.prop];
        return this.options.duration ? this.pos = b = _.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : C.propHooks._default.set(this), this
    }}, C.prototype.init.prototype = C.prototype, C.propHooks = {_default: {get: function(a) {
        var b;
        return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = _.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
    }, set: function(a) {
        _.fx.step[a.prop] ? _.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[_.cssProps[a.prop]] || _.cssHooks[a.prop]) ? _.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
    }}}, C.propHooks.scrollTop = C.propHooks.scrollLeft = {set: function(a) {
        a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
    }}, _.easing = {linear: function(a) {
        return a
    }, swing: function(a) {
        return.5 - Math.cos(a * Math.PI) / 2
    }}, _.fx = C.prototype.init, _.fx.step = {};
    var Ya, Za, $a = /^(?:toggle|show|hide)$/, _a = new RegExp("^(?:([+-])=|)(" + va + ")([a-z%]*)$", "i"), ab = /queueHooks$/, bb = [G], cb = {"*": [function(a, b) {
        var c = this.createTween(a, b), d = c.cur(), e = _a.exec(b), f = e && e[3] || (_.cssNumber[a] ? "" : "px"), g = (_.cssNumber[a] || "px" !== f && +d) && _a.exec(_.css(c.elem, a)), h = 1, i = 20;
        if (g && g[3] !== f) {
            f = f || g[3], e = e || [], g = +d || 1;
            do
                h = h || ".5", g /= h, _.style(c.elem, a, g + f);
            while (h !== (h = c.cur() / d) && 1 !== h && --i)
        }
        return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
    }]};
    _.Animation = _.extend(I, {tweener: function(a, b) {
        _.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
        for (var c, d = 0, e = a.length; e > d; d++)
            c = a[d], cb[c] = cb[c] || [], cb[c].unshift(b)
    }, prefilter: function(a, b) {
        b ? bb.unshift(a) : bb.push(a)
    }}), _.speed = function(a, b, c) {
        var d = a && "object" == typeof a ? _.extend({}, a) : {complete: c || !c && b || _.isFunction(a) && a, duration: a, easing: c && b || b && !_.isFunction(b) && b};
        return d.duration = _.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in _.fx.speeds ? _.fx.speeds[d.duration] : _.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
            _.isFunction(d.old) && d.old.call(this), d.queue && _.dequeue(this, d.queue)
        }, d
    }, _.fn.extend({fadeTo: function(a, b, c, d) {
        return this.filter(xa).css("opacity", 0).show().end().animate({opacity: b}, a, c, d)
    }, animate: function(a, b, c, d) {
        var e = _.isEmptyObject(a), f = _.speed(b, c, d), g = function() {
            var b = I(this, _.extend({}, a), f);
            (e || ra.get(this, "finish")) && b.stop(!0)
        };
        return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
    }, stop: function(a, b, c) {
        var d = function(a) {
            var b = a.stop;
            delete a.stop, b(c)
        };
        return"string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
            var b = !0, e = null != a && a + "queueHooks", f = _.timers, g = ra.get(this);
            if (e)
                g[e] && g[e].stop && d(g[e]);
            else
                for (e in g)
                    g[e] && g[e].stop && ab.test(e) && d(g[e]);
            for (e = f.length; e--; )
                f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
            (b || !c) && _.dequeue(this, a)
        })
    }, finish: function(a) {
        return a !== !1 && (a = a || "fx"), this.each(function() {
            var b, c = ra.get(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = _.timers, g = d ? d.length : 0;
            for (c.finish = !0, _.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--; )
                f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
            for (b = 0; g > b; b++)
                d[b] && d[b].finish && d[b].finish.call(this);
            delete c.finish
        })
    }}), _.each(["toggle", "show", "hide"], function(a, b) {
        var c = _.fn[b];
        _.fn[b] = function(a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(E(b, !0), a, d, e)
        }
    }), _.each({slideDown: E("show"), slideUp: E("hide"), slideToggle: E("toggle"), fadeIn: {opacity: "show"}, fadeOut: {opacity: "hide"}, fadeToggle: {opacity: "toggle"}}, function(a, b) {
        _.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), _.timers = [], _.fx.tick = function() {
        var a, b = 0, c = _.timers;
        for (Ya = _.now(); b < c.length; b++)
            a = c[b], a() || c[b] !== a || c.splice(b--, 1);
        c.length || _.fx.stop(), Ya = void 0
    }, _.fx.timer = function(a) {
        _.timers.push(a), a() ? _.fx.start() : _.timers.pop()
    }, _.fx.interval = 13, _.fx.start = function() {
        Za || (Za = setInterval(_.fx.tick, _.fx.interval))
    }, _.fx.stop = function() {
        clearInterval(Za), Za = null
    }, _.fx.speeds = {slow: 600, fast: 200, _default: 400}, _.fn.delay = function(a, b) {
        return a = _.fx ? _.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
            var d = setTimeout(b, a);
            c.stop = function() {
                clearTimeout(d)
            }
        })
    }, function() {
        var a = Z.createElement("input"), b = Z.createElement("select"), c = b.appendChild(Z.createElement("option"));
        a.type = "checkbox", Y.checkOn = "" !== a.value, Y.optSelected = c.selected, b.disabled = !0, Y.optDisabled = !c.disabled, a = Z.createElement("input"), a.value = "t", a.type = "radio", Y.radioValue = "t" === a.value
    }();
    var db, eb, fb = _.expr.attrHandle;
    _.fn.extend({attr: function(a, b) {
        return qa(this, _.attr, a, b, arguments.length > 1)
    }, removeAttr: function(a) {
        return this.each(function() {
            _.removeAttr(this, a)
        })
    }}), _.extend({attr: function(a, b, c) {
        var d, e, f = a.nodeType;
        if (a && 3 !== f && 8 !== f && 2 !== f)
            return typeof a.getAttribute === za ? _.prop(a, b, c) : (1 === f && _.isXMLDoc(a) || (b = b.toLowerCase(), d = _.attrHooks[b] || (_.expr.match.bool.test(b) ? eb : db)), void 0 === c ? d && "get"in d && null !== (e = d.get(a, b)) ? e : (e = _.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set"in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void _.removeAttr(a, b))
    }, removeAttr: function(a, b) {
        var c, d, e = 0, f = b && b.match(na);
        if (f && 1 === a.nodeType)
            for (; c = f[e++]; )
                d = _.propFix[c] || c, _.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c)
    }, attrHooks: {type: {set: function(a, b) {
        if (!Y.radioValue && "radio" === b && _.nodeName(a, "input")) {
            var c = a.value;
            return a.setAttribute("type", b), c && (a.value = c), b
        }
    }}}}), eb = {set: function(a, b, c) {
        return b === !1 ? _.removeAttr(a, c) : a.setAttribute(c, c), c
    }}, _.each(_.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = fb[b] || _.find.attr;
        fb[b] = function(a, b, d) {
            var e, f;
            return d || (f = fb[b], fb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, fb[b] = f), e
        }
    });
    var gb = /^(?:input|select|textarea|button)$/i;
    _.fn.extend({prop: function(a, b) {
        return qa(this, _.prop, a, b, arguments.length > 1)
    }, removeProp: function(a) {
        return this.each(function() {
            delete this[_.propFix[a] || a]
        })
    }}), _.extend({propFix: {"for": "htmlFor", "class": "className"}, prop: function(a, b, c) {
        var d, e, f, g = a.nodeType;
        if (a && 3 !== g && 8 !== g && 2 !== g)
            return f = 1 !== g || !_.isXMLDoc(a), f && (b = _.propFix[b] || b, e = _.propHooks[b]), void 0 !== c ? e && "set"in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get"in e && null !== (d = e.get(a, b)) ? d : a[b]
    }, propHooks: {tabIndex: {get: function(a) {
        return a.hasAttribute("tabindex") || gb.test(a.nodeName) || a.href ? a.tabIndex : -1
    }}}}), Y.optSelected || (_.propHooks.selected = {get: function(a) {
        var b = a.parentNode;
        return b && b.parentNode && b.parentNode.selectedIndex, null
    }}), _.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        _.propFix[this.toLowerCase()] = this
    });
    var hb = /[\t\r\n\f]/g;
    _.fn.extend({addClass: function(a) {
        var b, c, d, e, f, g, h = "string" == typeof a && a, i = 0, j = this.length;
        if (_.isFunction(a))
            return this.each(function(b) {
                _(this).addClass(a.call(this, b, this.className))
            });
        if (h)
            for (b = (a || "").match(na) || []; j > i; i++)
                if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(hb, " ") : " ")) {
                    for (f = 0; e = b[f++]; )
                        d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                    g = _.trim(d), c.className !== g && (c.className = g)
                }
        return this
    }, removeClass: function(a) {
        var b, c, d, e, f, g, h = 0 === arguments.length || "string" == typeof a && a, i = 0, j = this.length;
        if (_.isFunction(a))
            return this.each(function(b) {
                _(this).removeClass(a.call(this, b, this.className))
            });
        if (h)
            for (b = (a || "").match(na) || []; j > i; i++)
                if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(hb, " ") : "")) {
                    for (f = 0; e = b[f++]; )
                        for (; d.indexOf(" " + e + " ") >= 0; )
                            d = d.replace(" " + e + " ", " ");
                    g = a ? _.trim(d) : "", c.className !== g && (c.className = g)
                }
        return this
    }, toggleClass: function(a, b) {
        var c = typeof a;
        return"boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : _.isFunction(a) ? this.each(function(c) {
            _(this).toggleClass(a.call(this, c, this.className, b), b)
        }) : this.each(function() {
            if ("string" === c)
                for (var b, d = 0, e = _(this), f = a.match(na) || []; b = f[d++]; )
                    e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
            else
                (c === za || "boolean" === c) && (this.className && ra.set(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : ra.get(this, "__className__") || "")
        })
    }, hasClass: function(a) {
        for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
            if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(hb, " ").indexOf(b) >= 0)
                return!0;
        return!1
    }});
    var ib = /\r/g;
    _.fn.extend({val: function(a) {
        var b, c, d, e = this[0];
        {
            if (arguments.length)
                return d = _.isFunction(a), this.each(function(c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, _(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : _.isArray(e) && (e = _.map(e, function(a) {
                        return null == a ? "" : a + ""
                    })), b = _.valHooks[this.type] || _.valHooks[this.nodeName.toLowerCase()], b && "set"in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                });
            if (e)
                return b = _.valHooks[e.type] || _.valHooks[e.nodeName.toLowerCase()], b && "get"in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(ib, "") : null == c ? "" : c)
        }
    }}), _.extend({valHooks: {option: {get: function(a) {
        var b = _.find.attr(a, "value");
        return null != b ? b : _.trim(_.text(a))
    }}, select: {get: function(a) {
        for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
            if (c = d[i], (c.selected || i === e) && (Y.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !_.nodeName(c.parentNode, "optgroup"))) {
                if (b = _(c).val(), f)
                    return b;
                g.push(b)
            }
        return g
    }, set: function(a, b) {
        for (var c, d, e = a.options, f = _.makeArray(b), g = e.length; g--; )
            d = e[g], (d.selected = _.inArray(d.value, f) >= 0) && (c = !0);
        return c || (a.selectedIndex = -1), f
    }}}}), _.each(["radio", "checkbox"], function() {
        _.valHooks[this] = {set: function(a, b) {
            return _.isArray(b) ? a.checked = _.inArray(_(a).val(), b) >= 0 : void 0
        }}, Y.checkOn || (_.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    }), _.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        _.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), _.fn.extend({hover: function(a, b) {
        return this.mouseenter(a).mouseleave(b || a)
    }, bind: function(a, b, c) {
        return this.on(a, null, b, c)
    }, unbind: function(a, b) {
        return this.off(a, null, b)
    }, delegate: function(a, b, c, d) {
        return this.on(b, a, c, d)
    }, undelegate: function(a, b, c) {
        return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
    }});
    var jb = _.now(), kb = /\?/;
    _.parseJSON = function(a) {
        return JSON.parse(a + "")
    }, _.parseXML = function(a) {
        var b, c;
        if (!a || "string" != typeof a)
            return null;
        try {
            c = new DOMParser, b = c.parseFromString(a, "text/xml")
        } catch (d) {
            b = void 0
        }
        return(!b || b.getElementsByTagName("parsererror").length) && _.error("Invalid XML: " + a), b
    };
    var lb = /#.*$/, mb = /([?&])_=[^&]*/, nb = /^(.*?):[ \t]*([^\r\n]*)$/gm, ob = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, pb = /^(?:GET|HEAD)$/, qb = /^\/\//, rb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, sb = {}, tb = {}, ub = "*/".concat("*"), vb = a.location.href, wb = rb.exec(vb.toLowerCase()) || [];
    _.extend({active: 0, lastModified: {}, etag: {}, ajaxSettings: {url: vb, type: "GET", isLocal: ob.test(wb[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: {"*": ub, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript"}, contents: {xml: /xml/, html: /html/, json: /json/}, responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"}, converters: {"* text": String, "text html": !0, "text json": _.parseJSON, "text xml": _.parseXML}, flatOptions: {url: !0, context: !0}}, ajaxSetup: function(a, b) {
        return b ? L(L(a, _.ajaxSettings), b) : L(_.ajaxSettings, a)
    }, ajaxPrefilter: J(sb), ajaxTransport: J(tb), ajax: function(a, b) {
        function c(a, b, c, g) {
            var i, k, r, s, u, w = b;
            2 !== t && (t = 2, h && clearTimeout(h), d = void 0, f = g || "", v.readyState = a > 0 ? 4 : 0, i = a >= 200 && 300 > a || 304 === a, c && (s = M(l, v, c)), s = N(l, s, v, i), i ? (l.ifModified && (u = v.getResponseHeader("Last-Modified"), u && (_.lastModified[e] = u), u = v.getResponseHeader("etag"), u && (_.etag[e] = u)), 204 === a || "HEAD" === l.type ? w = "nocontent" : 304 === a ? w = "notmodified" : (w = s.state, k = s.data, r = s.error, i = !r)) : (r = w, (a || !w) && (w = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || w) + "", i ? o.resolveWith(m, [k, w, v]) : o.rejectWith(m, [v, w, r]), v.statusCode(q), q = void 0, j && n.trigger(i ? "ajaxSuccess" : "ajaxError", [v, l, i ? k : r]), p.fireWith(m, [v, w]), j && (n.trigger("ajaxComplete", [v, l]), --_.active || _.event.trigger("ajaxStop")))
        }
        "object" == typeof a && (b = a, a = void 0), b = b || {};
        var d, e, f, g, h, i, j, k, l = _.ajaxSetup({}, b), m = l.context || l, n = l.context && (m.nodeType || m.jquery) ? _(m) : _.event, o = _.Deferred(), p = _.Callbacks("once memory"), q = l.statusCode || {}, r = {}, s = {}, t = 0, u = "canceled", v = {readyState: 0, getResponseHeader: function(a) {
            var b;
            if (2 === t) {
                if (!g)
                    for (g = {}; b = nb.exec(f); )
                        g[b[1].toLowerCase()] = b[2];
                b = g[a.toLowerCase()]
            }
            return null == b ? null : b
        }, getAllResponseHeaders: function() {
            return 2 === t ? f : null
        }, setRequestHeader: function(a, b) {
            var c = a.toLowerCase();
            return t || (a = s[c] = s[c] || a, r[a] = b), this
        }, overrideMimeType: function(a) {
            return t || (l.mimeType = a), this
        }, statusCode: function(a) {
            var b;
            if (a)
                if (2 > t)
                    for (b in a)
                        q[b] = [q[b], a[b]];
                else
                    v.always(a[v.status]);
            return this
        }, abort: function(a) {
            var b = a || u;
            return d && d.abort(b), c(0, b), this
        }};
        if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, l.url = ((a || l.url || vb) + "").replace(lb, "").replace(qb, wb[1] + "//"), l.type = b.method || b.type || l.method || l.type, l.dataTypes = _.trim(l.dataType || "*").toLowerCase().match(na) || [""], null == l.crossDomain && (i = rb.exec(l.url.toLowerCase()), l.crossDomain = !(!i || i[1] === wb[1] && i[2] === wb[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (wb[3] || ("http:" === wb[1] ? "80" : "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = _.param(l.data, l.traditional)), K(sb, l, b, v), 2 === t)
            return v;
        j = _.event && l.global, j && 0 === _.active++ && _.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !pb.test(l.type), e = l.url, l.hasContent || (l.data && (e = l.url += (kb.test(e) ? "&" : "?") + l.data, delete l.data), l.cache === !1 && (l.url = mb.test(e) ? e.replace(mb, "$1_=" + jb++) : e + (kb.test(e) ? "&" : "?") + "_=" + jb++)), l.ifModified && (_.lastModified[e] && v.setRequestHeader("If-Modified-Since", _.lastModified[e]), _.etag[e] && v.setRequestHeader("If-None-Match", _.etag[e])), (l.data && l.hasContent && l.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", l.contentType), v.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + ub + "; q=0.01" : "") : l.accepts["*"]);
        for (k in l.headers)
            v.setRequestHeader(k, l.headers[k]);
        if (l.beforeSend && (l.beforeSend.call(m, v, l) === !1 || 2 === t))
            return v.abort();
        u = "abort";
        for (k in{success:1, error:1, complete:1})
            v[k](l[k]);
        if (d = K(tb, l, b, v)) {
            v.readyState = 1, j && n.trigger("ajaxSend", [v, l]), l.async && l.timeout > 0 && (h = setTimeout(function() {
                v.abort("timeout")
            }, l.timeout));
            try {
                t = 1, d.send(r, c)
            } catch (w) {
                if (!(2 > t))
                    throw w;
                c(-1, w)
            }
        } else
            c(-1, "No Transport");
        return v
    }, getJSON: function(a, b, c) {
        return _.get(a, b, c, "json")
    }, getScript: function(a, b) {
        return _.get(a, void 0, b, "script")
    }}), _.each(["get", "post"], function(a, b) {
        _[b] = function(a, c, d, e) {
            return _.isFunction(c) && (e = e || d, d = c, c = void 0), _.ajax({url: a, type: b, dataType: e, data: c, success: d})
        }
    }), _._evalUrl = function(a) {
        return _.ajax({url: a, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
    }, _.fn.extend({wrapAll: function(a) {
        var b;
        return _.isFunction(a) ? this.each(function(b) {
            _(this).wrapAll(a.call(this, b))
        }) : (this[0] && (b = _(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
            for (var a = this; a.firstElementChild; )
                a = a.firstElementChild;
            return a
        }).append(this)), this)
    }, wrapInner: function(a) {
        return _.isFunction(a) ? this.each(function(b) {
            _(this).wrapInner(a.call(this, b))
        }) : this.each(function() {
            var b = _(this), c = b.contents();
            c.length ? c.wrapAll(a) : b.append(a)
        })
    }, wrap: function(a) {
        var b = _.isFunction(a);
        return this.each(function(c) {
            _(this).wrapAll(b ? a.call(this, c) : a)
        })
    }, unwrap: function() {
        return this.parent().each(function() {
            _.nodeName(this, "body") || _(this).replaceWith(this.childNodes)
        }).end()
    }}), _.expr.filters.hidden = function(a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0
    }, _.expr.filters.visible = function(a) {
        return!_.expr.filters.hidden(a)
    };
    var xb = /%20/g, yb = /\[\]$/, zb = /\r?\n/g, Ab = /^(?:submit|button|image|reset|file)$/i, Bb = /^(?:input|select|textarea|keygen)/i;
    _.param = function(a, b) {
        var c, d = [], e = function(a, b) {
            b = _.isFunction(b) ? b() : null == b ? "" : b,
                d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
        };
        if (void 0 === b && (b = _.ajaxSettings && _.ajaxSettings.traditional), _.isArray(a) || a.jquery && !_.isPlainObject(a))
            _.each(a, function() {
                e(this.name, this.value)
            });
        else
            for (c in a)
                O(c, a[c], b, e);
        return d.join("&").replace(xb, "+")
    }, _.fn.extend({serialize: function() {
        return _.param(this.serializeArray())
    }, serializeArray: function() {
        return this.map(function() {
            var a = _.prop(this, "elements");
            return a ? _.makeArray(a) : this
        }).filter(function() {
            var a = this.type;
            return this.name && !_(this).is(":disabled") && Bb.test(this.nodeName) && !Ab.test(a) && (this.checked || !ya.test(a))
        }).map(function(a, b) {
            var c = _(this).val();
            return null == c ? null : _.isArray(c) ? _.map(c, function(a) {
                return{name: b.name, value: a.replace(zb, "\r\n")}
            }) : {name: b.name, value: c.replace(zb, "\r\n")}
        }).get()
    }}), _.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (a) {
        }
    };
    var Cb = 0, Db = {}, Eb = {0: 200, 1223: 204}, Fb = _.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function() {
        for (var a in Db)
            Db[a]()
    }), Y.cors = !!Fb && "withCredentials"in Fb, Y.ajax = Fb = !!Fb, _.ajaxTransport(function(a) {
        var b;
        return Y.cors || Fb && !a.crossDomain ? {send: function(c, d) {
            var e, f = a.xhr(), g = ++Cb;
            if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
                for (e in a.xhrFields)
                    f[e] = a.xhrFields[e];
            a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
            for (e in c)
                f.setRequestHeader(e, c[e]);
            b = function(a) {
                return function() {
                    b && (delete Db[g], b = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Eb[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? {text: f.responseText} : void 0, f.getAllResponseHeaders()))
                }
            }, f.onload = b(), f.onerror = b("error"), b = Db[g] = b("abort");
            try {
                f.send(a.hasContent && a.data || null)
            } catch (h) {
                if (b)
                    throw h
            }
        }, abort: function() {
            b && b()
        }} : void 0
    }), _.ajaxSetup({accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"}, contents: {script: /(?:java|ecma)script/}, converters: {"text script": function(a) {
        return _.globalEval(a), a
    }}}), _.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
    }), _.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c;
            return{send: function(d, e) {
                b = _("<script>").prop({async: !0, charset: a.scriptCharset, src: a.url}).on("load error", c = function(a) {
                    b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type)
                }), Z.head.appendChild(b[0])
            }, abort: function() {
                c && c()
            }}
        }
    });
    var Gb = [], Hb = /(=)\?(?=&|$)|\?\?/;
    _.ajaxSetup({jsonp: "callback", jsonpCallback: function() {
        var a = Gb.pop() || _.expando + "_" + jb++;
        return this[a] = !0, a
    }}), _.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (Hb.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Hb.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = _.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Hb, "$1" + e) : b.jsonp !== !1 && (b.url += (kb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
            return g || _.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments
        }, d.always(function() {
            a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Gb.push(e)), g && _.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), _.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a)
            return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || Z;
        var d = ga.exec(a), e = !c && [];
        return d ? [b.createElement(d[1])] : (d = _.buildFragment([a], b, e), e && e.length && _(e).remove(), _.merge([], d.childNodes))
    };
    var Ib = _.fn.load;
    _.fn.load = function(a, b, c) {
        if ("string" != typeof a && Ib)
            return Ib.apply(this, arguments);
        var d, e, f, g = this, h = a.indexOf(" ");
        return h >= 0 && (d = _.trim(a.slice(h)), a = a.slice(0, h)), _.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && _.ajax({url: a, type: e, dataType: "html", data: b}).done(function(a) {
            f = arguments, g.html(d ? _("<div>").append(_.parseHTML(a)).find(d) : a)
        }).complete(c && function(a, b) {
                g.each(c, f || [a.responseText, b, a])
            }), this
    }, _.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        _.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), _.expr.filters.animated = function(a) {
        return _.grep(_.timers, function(b) {
            return a === b.elem
        }).length
    };
    var Jb = a.document.documentElement;
    _.offset = {setOffset: function(a, b, c) {
        var d, e, f, g, h, i, j, k = _.css(a, "position"), l = _(a), m = {};
        "static" === k && (a.style.position = "relative"), h = l.offset(), f = _.css(a, "top"), i = _.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), _.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using"in b ? b.using.call(a, m) : l.css(m)
    }}, _.fn.extend({offset: function(a) {
        if (arguments.length)
            return void 0 === a ? this : this.each(function(b) {
                _.offset.setOffset(this, a, b)
            });
        var b, c, d = this[0], e = {top: 0, left: 0}, f = d && d.ownerDocument;
        if (f)
            return b = f.documentElement, _.contains(b, d) ? (typeof d.getBoundingClientRect !== za && (e = d.getBoundingClientRect()), c = P(f), {top: e.top + c.pageYOffset - b.clientTop, left: e.left + c.pageXOffset - b.clientLeft}) : e
    }, position: function() {
        if (this[0]) {
            var a, b, c = this[0], d = {top: 0, left: 0};
            return"fixed" === _.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), _.nodeName(a[0], "html") || (d = a.offset()), d.top += _.css(a[0], "borderTopWidth", !0), d.left += _.css(a[0], "borderLeftWidth", !0)), {top: b.top - d.top - _.css(c, "marginTop", !0), left: b.left - d.left - _.css(c, "marginLeft", !0)}
        }
    }, offsetParent: function() {
        return this.map(function() {
            for (var a = this.offsetParent || Jb; a && !_.nodeName(a, "html") && "static" === _.css(a, "position"); )
                a = a.offsetParent;
            return a || Jb
        })
    }}), _.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function(b, c) {
        var d = "pageYOffset" === c;
        _.fn[b] = function(e) {
            return qa(this, function(b, e, f) {
                var g = P(b);
                return void 0 === f ? g ? g[c] : b[e] : void(g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f)
            }, b, e, arguments.length, null)
        }
    }), _.each(["top", "left"], function(a, b) {
        _.cssHooks[b] = w(Y.pixelPosition, function(a, c) {
            return c ? (c = v(a, b), Qa.test(c) ? _(a).position()[b] + "px" : c) : void 0
        })
    }), _.each({Height: "height", Width: "width"}, function(a, b) {
        _.each({padding: "inner" + a, content: b, "": "outer" + a}, function(c, d) {
            _.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d), g = c || (d === !0 || e === !0 ? "margin" : "border");
                return qa(this, function(b, c, d) {
                    var e;
                    return _.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? _.css(b, c, g) : _.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), _.fn.size = function() {
        return this.length
    }, _.fn.andSelf = _.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return _
    });
    var Kb = a.jQuery, Lb = a.$;
    return _.noConflict = function(b) {
        return a.$ === _ && (a.$ = Lb), b && a.jQuery === _ && (a.jQuery = Kb), _
    }, typeof b === za && (a.jQuery = a.$ = _), _
}),
///////////////// Mobile Menu Panel Code /////////////////
    /*
     * jQuery mmenu v4.7.5
     * @requires jQuery 1.7.0 or later
     *
     * mmenu.frebsite.nl
     *
     * Copyright (c) Fred Heusschen
     * www.frebsite.nl
     *
     * Licensed under the MIT license:
     * http://en.wikipedia.org/wiki/MIT_License
     */
    !function(e) {
        function n() {
            l = !0, d.$wndw = e(window), d.$html = e("html"), d.$body = e("body"), e.each([i, a, o], function(e, n) {
                n.add = function(e) {
                    e = e.split(" ");
                    for (var t in e)
                        n[e[t]] = n.mm(e[t])
                }
            }), i.mm = function(e) {
                return"mm-" + e
            }, i.add("wrapper menu inline panel nopanel list nolist subtitle selected label spacer current highest hidden opened subopened subopen fullsubopen subclose"), i.umm = function(e) {
                return"mm-" == e.slice(0, 3) && (e = e.slice(3)), e
            }, a.mm = function(e) {
                return"mm-" + e
            }, a.add("parent"), o.mm = function(e) {
                return e + ".mm"
            }, o.add("toggle open close setSelected transitionend webkitTransitionEnd mousedown mouseup touchstart touchmove touchend scroll resize click keydown keyup"), e[t]._c = i, e[t]._d = a, e[t]._e = o, e[t].glbl = d
        }
        var t = "mmenu", s = "4.7.5";
        if (!e[t]) {
            var i = {}, a = {}, o = {}, l = !1, d = {$wndw: null, $html: null, $body: null};
            e[t] = function(n, s, i) {
                this.$menu = n, this.opts = s, this.conf = i, this.vars = {}, "function" == typeof this.___deprecated && this.___deprecated(), this._initMenu(), this._initAnchors(), this._initEvents();
                var a = this.$menu.children(this.conf.panelNodetype);
                for (var o in e[t].addons)
                    e[t].addons[o]._add.call(this), e[t].addons[o]._add = function() {
                    }, e[t].addons[o]._setup.call(this);
                return this._init(a), "function" == typeof this.___debug && this.___debug(), this
            }, e[t].version = s, e[t].addons = {}, e[t].uniqueId = 0, e[t].defaults = {classes: "", slidingSubmenus: !0, onClick: {setSelected: !0}}, e[t].configuration = {panelNodetype: "ul, ol, div", transitionDuration: 400, openingInterval: 25, classNames: {panel: "Panel", selected: "Selected", label: "Label", spacer: "Spacer"}}, e[t].prototype = {_init: function(n) {
                n = n.not("." + i.nopanel), n = this._initPanels(n);
                for (var s in e[t].addons)
                    e[t].addons[s]._init.call(this, n);
                this._update()
            }, _initMenu: function() {
                this.opts.offCanvas && this.conf.clone && (this.$menu = this.$menu.clone(!0), this.$menu.add(this.$menu.find("*")).filter("[id]").each(function() {
                    e(this).attr("id", i.mm(e(this).attr("id")))
                })), this.$menu.contents().each(function() {
                    3 == e(this)[0].nodeType && e(this).remove()
                }), this.$menu.parent().addClass(i.wrapper);
                var n = [i.menu];
                n.push(i.mm(this.opts.slidingSubmenus ? "horizontal" : "vertical")), this.opts.classes && n.push(this.opts.classes), this.$menu.addClass(n.join(" "))
            }, _initPanels: function(n) {
                var t = this;
                this.__findAddBack(n, "ul, ol").not("." + i.nolist).addClass(i.list);
                var s = this.__findAddBack(n, "." + i.list).find("> li");
                this.__refactorClass(s, this.conf.classNames.selected, "selected"), this.__refactorClass(s, this.conf.classNames.label, "label"), this.__refactorClass(s, this.conf.classNames.spacer, "spacer"), s.off(o.setSelected).on(o.setSelected, function(n, t) {
                    n.stopPropagation(), s.removeClass(i.selected), "boolean" != typeof t && (t = !0), t && e(this).addClass(i.selected)
                }), this.__refactorClass(this.__findAddBack(n, "." + this.conf.classNames.panel), this.conf.classNames.panel, "panel"), n.add(this.__findAddBack(n, "." + i.list).children().children().filter(this.conf.panelNodetype).not("." + i.nopanel)).addClass(i.panel);
                var l = this.__findAddBack(n, "." + i.panel), d = e("." + i.panel, this.$menu);
                if (l.each(function() {
                        var n = e(this), s = n.attr("id") || t.__getUniqueId();
                        n.attr("id", s)
                    }), l.each(function() {
                        var n = e(this), s = n.is("ul, ol") ? n : n.find("ul ,ol").first(), o = n.parent(), l = o.children("a, span"), d = o.closest("." + i.panel);
                        if (o.parent().is("." + i.list) && !n.data(a.parent)) {
                            n.data(a.parent, o);
                            var r = e('<a class="' + i.subopen + '" href="#' + n.attr("id") + '" />').insertBefore(l);
                            l.is("a") || r.addClass(i.fullsubopen), t.opts.slidingSubmenus && s.prepend('<li class="' + i.subtitle + '"><a class="' + i.subclose + '" href="#' + d.attr("id") + '">' + l.text() + "</a></li>")
                        }
                    }), this.opts.slidingSubmenus) {
                    var r = this.__findAddBack(n, "." + i.list).find("> li." + i.selected);
                    r.parents("li").removeClass(i.selected).end().add(r.parents("li")).each(function() {
                        var n = e(this), t = n.find("> ." + i.panel);
                        t.length && (n.parents("." + i.panel).addClass(i.subopened), t.addClass(i.opened))
                    }).closest("." + i.panel).addClass(i.opened).parents("." + i.panel).addClass(i.subopened)
                } else {
                    var r = e("li." + i.selected, d);
                    r.parents("li").removeClass(i.selected).end().add(r.parents("li")).addClass(i.opened)
                }
                var u = d.filter("." + i.opened);
                return u.length || (u = l.first()), u.addClass(i.opened).last().addClass(i.current), this.opts.slidingSubmenus && l.not(u.last()).addClass(i.hidden).end().appendTo(this.$menu), l
            }, _initAnchors: function() {
                var n = this;
                d.$body.on(o.click, "a", function(s) {
                    var a = e(this), l = !1, r = n.$menu.find(a).length;
                    for (var u in e[t].addons)
                        if (e[t].addons[u]._clickAnchor && (l = e[t].addons[u]._clickAnchor.call(n, a, r)))
                            break;
                    if (!l && r) {
                        var c = a.attr("href") || "";
                        if ("#" == c.slice(0, 1))
                            try {
                                e(c, n.$menu).is("." + i.panel) && (l = !0, e(c).trigger(n.opts.slidingSubmenus ? o.open : o.toggle))
                            } catch (p) {
                            }
                    }
                    if (l && s.preventDefault(), !l && r && a.is("." + i.list + " > li > a") && !a.is('[rel="external"]') && !a.is('[target="_blank"]')) {
                        n.__valueOrFn(n.opts.onClick.setSelected, a) && a.parent().trigger(o.setSelected);
                        var h = n.__valueOrFn(n.opts.onClick.preventDefault, a, "#" == c.slice(0, 1));
                        h && s.preventDefault(), n.__valueOrFn(n.opts.onClick.blockUI, a, !h) && d.$html.addClass(i.blocking), n.__valueOrFn(n.opts.onClick.close, a, h) && n.$menu.trigger(o.close)
                    }
                })
            }, _initEvents: function() {
                var n = this;
                this.$menu.on(o.toggle + " " + o.open + " " + o.close, "." + i.panel, function(e) {
                    e.stopPropagation()
                }), this.opts.slidingSubmenus ? this.$menu.on(o.open, "." + i.panel, function() {
                    return n._openSubmenuHorizontal(e(this))
                }) : this.$menu.on(o.toggle, "." + i.panel, function() {
                    var n = e(this);
                    n.trigger(n.parent().hasClass(i.opened) ? o.close : o.open)
                }).on(o.open, "." + i.panel, function() {
                    e(this).parent().addClass(i.opened)
                }).on(o.close, "." + i.panel, function() {
                    e(this).parent().removeClass(i.opened)
                })
            }, _openSubmenuHorizontal: function(n) {
                if (n.hasClass(i.current))
                    return!1;
                var t = e("." + i.panel, this.$menu), s = t.filter("." + i.current);
                return t.removeClass(i.highest).removeClass(i.current).not(n).not(s).addClass(i.hidden), n.hasClass(i.opened) ? s.addClass(i.highest).removeClass(i.opened).removeClass(i.subopened) : (n.addClass(i.highest), s.addClass(i.subopened)), n.removeClass(i.hidden).addClass(i.current), setTimeout(function() {
                    n.removeClass(i.subopened).addClass(i.opened)
                }, this.conf.openingInterval), "open"
            }, _update: function(e) {
                if (this.updates || (this.updates = []), "function" == typeof e)
                    this.updates.push(e);
                else
                    for (var n = 0, t = this.updates.length; t > n; n++)
                        this.updates[n].call(this, e)
            }, __valueOrFn: function(e, n, t) {
                return"function" == typeof e ? e.call(n[0]) : "undefined" == typeof e && "undefined" != typeof t ? t : e
            }, __refactorClass: function(e, n, t) {
                return e.filter("." + n).removeClass(n).addClass(i[t])
            }, __findAddBack: function(e, n) {
                return e.find(n).add(e.filter(n))
            }, __transitionend: function(e, n, t) {
                var s = !1, i = function() {
                    s || n.call(e[0]), s = !0
                };
                e.one(o.transitionend, i), e.one(o.webkitTransitionEnd, i), setTimeout(i, 1.1 * t)
            }, __getUniqueId: function() {
                return i.mm(e[t].uniqueId++)
            }}, e.fn[t] = function(s, i) {
                return l || n(), s = e.extend(!0, {}, e[t].defaults, s), i = e.extend(!0, {}, e[t].configuration, i), this.each(function() {
                    var n = e(this);
                    n.data(t) || n.data(t, new e[t](n, s, i))
                })
            }, e[t].support = {touch: "ontouchstart"in window || navigator.msMaxTouchPoints}
        }
    }(jQuery);
/*
 * jQuery mmenu offCanvas addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(e) {
    var t = "mmenu", o = "offCanvas";
    e[t].addons[o] = {_init: function() {
    }, _setup: function() {
        if (this.opts[o]) {
            var t = this, s = this.opts[o], p = this.conf[o];
            "string" != typeof p.pageSelector && (p.pageSelector = "> " + p.pageNodetype), a.$allMenus = (a.$allMenus || e()).add(this.$menu), this.vars.opened = !1;
            var r = [n.offcanvas];
            "left" != s.position && r.push(n.mm(s.position)), "back" != s.zposition && r.push(n.mm(s.zposition)), this.$menu.addClass(r.join(" ")).parent().removeClass(n.wrapper), this.setPage(a.$page), this[o + "_initBlocker"](), this[o + "_initWindow"](), this.$menu.on(i.open + " " + i.opening + " " + i.opened + " " + i.close + " " + i.closing + " " + i.closed + " " + i.setPage, function(e) {
                e.stopPropagation()
            }).on(i.open + " " + i.close + " " + i.setPage, function(e) {
                t[e.type]()
            }), this.$menu[p.menuInjectMethod + "To"](p.menuWrapperSelector)
        }
    }, _add: function() {
        n = e[t]._c, s = e[t]._d, i = e[t]._e, n.add("offcanvas slideout modal background opening blocker page"), s.add("style"), i.add("opening opened closing closed setPage"), a = e[t].glbl
    }, _clickAnchor: function(e) {
        if (!this.opts[o])
            return!1;
        var t = this.$menu.attr("id");
        if (t && t.length && (this.conf.clone && (t = n.umm(t)), e.is('[href="#' + t + '"]')))
            return this.open(), !0;
        if (a.$page) {
            var t = a.$page.attr("id");
            return t && t.length && e.is('[href="#' + t + '"]') ? (this.close(), !0) : !1
        }
    }}, e[t].defaults[o] = {position: "left", zposition: "back", modal: !1, moveBackground: !0}, e[t].configuration[o] = {pageNodetype: "div", pageSelector: null, menuWrapperSelector: "body", menuInjectMethod: "prepend"}, e[t].prototype.open = function() {
        if (this.vars.opened)
            return!1;
        var e = this;
        return this._openSetup(), setTimeout(function() {
            e._openFinish()
        }, this.conf.openingInterval), "open"
    }, e[t].prototype._openSetup = function() {
        var e = this;
        a.$allMenus.not(this.$menu).trigger(i.close), a.$page.data(s.style, a.$page.attr("style") || ""), a.$wndw.trigger(i.resize, [!0]);
        var t = [n.opened];
        this.opts[o].modal && t.push(n.modal), this.opts[o].moveBackground && t.push(n.background), "left" != this.opts[o].position && t.push(n.mm(this.opts[o].position)), "back" != this.opts[o].zposition && t.push(n.mm(this.opts[o].zposition)), this.opts.classes && t.push(this.opts.classes), a.$html.addClass(t.join(" ")), setTimeout(function() {
            e.vars.opened = !0
        }, this.conf.openingInterval), this.$menu.addClass(n.current + " " + n.opened)
    }, e[t].prototype._openFinish = function() {
        var e = this;
        this.__transitionend(a.$page, function() {
            e.$menu.trigger(i.opened)
        }, this.conf.transitionDuration), a.$html.addClass(n.opening), this.$menu.trigger(i.opening)
    }, e[t].prototype.close = function() {
        if (!this.vars.opened)
            return!1;
        var e = this;
        return this.__transitionend(a.$page, function() {
            e.$menu.removeClass(n.current).removeClass(n.opened), a.$html.removeClass(n.opened).removeClass(n.modal).removeClass(n.background).removeClass(n.mm(e.opts[o].position)).removeClass(n.mm(e.opts[o].zposition)), e.opts.classes && a.$html.removeClass(e.opts.classes), a.$page.attr("style", a.$page.data(s.style)), e.vars.opened = !1, e.$menu.trigger(i.closed)
        }, this.conf.transitionDuration), a.$html.removeClass(n.opening), this.$menu.trigger(i.closing), "close"
    }, e[t].prototype.setPage = function(t) {
        t || (t = e(this.conf[o].pageSelector, a.$body), t.length > 1 && (t = t.wrapAll("<" + this.conf[o].pageNodetype + " />").parent())), t.addClass(n.page + " " + n.slideout), a.$page = t
    }, e[t].prototype[o + "_initWindow"] = function() {
        a.$wndw.on(i.keydown, function(e) {
            return a.$html.hasClass(n.opened) && 9 == e.keyCode ? (e.preventDefault(), !1) : void 0
        });
        var s = 0;
        a.$wndw.on(i.resize, function(e, t) {
            if (t || a.$html.hasClass(n.opened)) {
                var o = a.$wndw.height();
                (t || o != s) && (s = o, a.$page.css("minHeight", o))
            }
        }), e[t].prototype[o + "_initWindow"] = function() {
        }
    }, e[t].prototype[o + "_initBlocker"] = function() {
        var s = e('<div id="' + n.blocker + '" class="' + n.slideout + '" />').appendTo(a.$body);
        s.on(i.touchstart, function(e) {
            e.preventDefault(), e.stopPropagation(), s.trigger(i.mousedown)
        }).on(i.mousedown, function(e) {
            e.preventDefault(), a.$html.hasClass(n.modal) || a.$allMenus.trigger(i.close)
        }), e[t].prototype[o + "_initBlocker"] = function() {
        }
    };
    var n, s, i, a
}(jQuery);
/*
 * jQuery mmenu buttonbars addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(t) {
    var n = "mmenu", a = "buttonbars";
    t[n].addons[a] = {_init: function(n) {
        this.opts[a], this.conf[a], this.__refactorClass(t("div", n), this.conf.classNames[a].buttonbar, "buttonbar"), t("." + i.buttonbar, n).each(function() {
            var n = t(this), a = n.children().not("input"), o = n.children().filter("input");
            n.addClass(i.buttonbar + "-" + a.length), o.each(function() {
                var n = t(this), i = a.filter('label[for="' + n.attr("id") + '"]');
                i.length && n.insertBefore(i)
            })
        })
    }, _setup: function() {
    }, _add: function() {
        i = t[n]._c, o = t[n]._d, r = t[n]._e, i.add("buttonbar"), s = t[n].glbl
    }}, t[n].defaults[a] = {}, t[n].configuration.classNames[a] = {buttonbar: "Buttonbar"};
    var i, o, r, s
}(jQuery);
/*
 * jQuery mmenu counters addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(t) {
    var e = "mmenu", n = "counters";
    t[e].addons[n] = {_init: function(e) {
        var s = this, d = this.opts[n];
        this.conf[n], this.__refactorClass(t("em", e), this.conf.classNames[n].counter, "counter"), d.add && e.each(function() {
            var e = t(this).data(o.parent);
            e && (e.find("> em." + a.counter).length || e.prepend(t('<em class="' + a.counter + '" />')))
        }), d.update && e.each(function() {
            var e = t(this), n = e.data(o.parent);
            if (n) {
                var d = n.find("> em." + a.counter);
                d.length && (e.is("." + a.list) || (e = e.find("> ." + a.list)), e.length && !e.data(o.updatecounter) && (e.data(o.updatecounter, !0), s._update(function() {
                    var t = e.children().not("." + a.label).not("." + a.subtitle).not("." + a.hidden).not("." + a.search).not("." + a.noresultsmsg);
                    d.html(t.length)
                })))
            }
        })
    }, _setup: function() {
        var a = this.opts[n];
        "boolean" == typeof a && (a = {add: a, update: a}), "object" != typeof a && (a = {}), a = t.extend(!0, {}, t[e].defaults[n], a), this.opts[n] = a
    }, _add: function() {
        a = t[e]._c, o = t[e]._d, s = t[e]._e, a.add("counter search noresultsmsg"), o.add("updatecounter"), d = t[e].glbl
    }}, t[e].defaults[n] = {add: !1, update: !1}, t[e].configuration.classNames[n] = {counter: "Counter"};
    var a, o, s, d
}(jQuery);
/*
 * jQuery mmenu dragOpen addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(e) {
    function t(e, t, n) {
        return t > e && (e = t), e > n && (e = n), e
    }
    var n = "mmenu", o = "dragOpen";
    e[n].addons[o] = {_init: function() {
    }, _setup: function() {
        if (this.opts.offCanvas) {
            var s = this, p = this.opts[o], d = this.conf[o];
            if ("boolean" == typeof p && (p = {open: p}), "object" != typeof p && (p = {}), p = e.extend(!0, {}, e[n].defaults[o], p), p.open) {
                if (Hammer.VERSION < 2)
                    return;
                var f, c, h, m, u = {}, g = 0, l = !1, v = !1, _ = 0, w = 0;
                switch (this.opts.offCanvas.position) {
                    case"left":
                    case"right":
                        u.events = "panleft panright", u.typeLower = "x", u.typeUpper = "X", v = "width";
                        break;
                    case"top":
                    case"bottom":
                        u.events = "panup pandown", u.typeLower = "y", u.typeUpper = "Y", v = "height"
                }
                switch (this.opts.offCanvas.position) {
                    case"left":
                    case"top":
                        u.negative = !1;
                        break;
                    case"right":
                    case"bottom":
                        u.negative = !0
                }
                switch (this.opts.offCanvas.position) {
                    case"left":
                        u.open_dir = "right", u.close_dir = "left";
                        break;
                    case"right":
                        u.open_dir = "left", u.close_dir = "right";
                        break;
                    case"top":
                        u.open_dir = "down", u.close_dir = "up";
                        break;
                    case"bottom":
                        u.open_dir = "up", u.close_dir = "down"
                }
                var b = this.__valueOrFn(p.pageNode, this.$menu, r.$page);
                "string" == typeof b && (b = e(b));
                var y = r.$page;
                switch (this.opts.offCanvas.zposition) {
                    case"front":
                        y = this.$menu;
                        break;
                    case"next":
                        y = y.add(this.$menu)
                }
                var $ = new Hammer(b[0], p.vendors.hammer);
                $.on("panstart", function(e) {
                    switch (m = e.center[u.typeLower], s.opts.offCanvas.position) {
                        case"right":
                        case"bottom":
                            m >= r.$wndw[v]() - p.maxStartPos && (g = 1);
                            break;
                        default:
                            m <= p.maxStartPos && (g = 1)
                    }
                    l = u.open_dir
                }).on(u.events + " panend", function(e) {
                    g > 0 && e.preventDefault()
                }).on(u.events, function(e) {
                    if (f = e["delta" + u.typeUpper], u.negative && (f = -f), f != _ && (l = f >= _ ? u.open_dir : u.close_dir), _ = f, _ > p.threshold && 1 == g) {
                        if (r.$html.hasClass(a.opened))
                            return;
                        g = 2, s._openSetup(), s.$menu.trigger(i.opening), r.$html.addClass(a.dragging), w = t(r.$wndw[v]() * d[v].perc, d[v].min, d[v].max)
                    }
                    2 == g && (c = t(_, 10, w) - ("front" == s.opts.offCanvas.zposition ? w : 0), u.negative && (c = -c), h = "translate" + u.typeUpper + "(" + c + "px )", y.css({"-webkit-transform": "-webkit-" + h, transform: h}))
                }).on("panend", function() {
                    2 == g && (r.$html.removeClass(a.dragging), y.css("transform", ""), s[l == u.open_dir ? "_openFinish" : "close"]()), g = 0
                })
            }
        }
    }, _add: function() {
        return"function" != typeof Hammer ? (e[n].addons[o]._init = function() {
        }, e[n].addons[o]._setup = function() {
        }, void 0) : (a = e[n]._c, s = e[n]._d, i = e[n]._e, a.add("dragging"), r = e[n].glbl, void 0)
    }}, e[n].defaults[o] = {open: !1, maxStartPos: 100, threshold: 50, vendors: {hammer: {}}}, e[n].configuration[o] = {width: {perc: .8, min: 140, max: 440}, height: {perc: .8, min: 140, max: 880}};
    var a, s, i, r
}(jQuery);
/*
 * jQuery mmenu fixedElements addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(o) {
    var t = "mmenu", d = "fixedElements";
    o[t].addons[d] = {_init: function() {
        if (this.opts.offCanvas) {
            var o = this.conf.classNames[d].fixedTop, t = this.conf.classNames[d].fixedBottom, e = this.__refactorClass(a.$page.find("." + o), o, "fixed-top"), s = this.__refactorClass(a.$page.find("." + t), t, "fixed-bottom");
            e.add(s).appendTo(a.$body).addClass(i.slideout)
        }
    }, _setup: function() {
    }, _add: function() {
        i = o[t]._c, e = o[t]._d, s = o[t]._e, i.add("fixed-top fixed-bottom"), a = o[t].glbl
    }}, o[t].defaults[d] = {}, o[t].configuration.classNames[d] = {fixedTop: "FixedTop", fixedBottom: "FixedBottom"};
    var i, e, s, a
}(jQuery);
/*
 * jQuery mmenu footer addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(t) {
    var o = "mmenu", e = "footer";
    t[o].addons[e] = {_init: function(a) {
        var d = this, i = this.opts[e], r = t("div." + n.footer, this.$menu);
        r.length && (i.update && a.each(function() {
            var o = t(this), a = t("." + d.conf.classNames[e].panelFooter, o), u = a.html();
            u || (u = i.title);
            var l = function() {
                r[u ? "show" : "hide"](), r.html(u)
            };
            o.on(s.open, l), o.hasClass(n.current) && l()
        }), t[o].addons.buttonbars && t[o].addons.buttonbars._init.call(this, r))
    }, _setup: function() {
        var a = this.opts[e];
        if ("boolean" == typeof a && (a = {add: a, update: a}), "object" != typeof a && (a = {}), a = t.extend(!0, {}, t[o].defaults[e], a), this.opts[e] = a, a.add) {
            var s = a.content ? a.content : a.title;
            t('<div class="' + n.footer + '" />').appendTo(this.$menu).append(s), this.$menu.addClass(n.hasfooter)
        }
    }, _add: function() {
        n = t[o]._c, a = t[o]._d, s = t[o]._e, n.add("footer hasfooter"), d = t[o].glbl
    }}, t[o].defaults[e] = {add: !1, content: !1, title: "", update: !1}, t[o].configuration.classNames[e] = {panelFooter: "Footer"};
    var n, a, s, d
}(jQuery);
/*
 * jQuery mmenu header addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(e) {
    var t = "mmenu", a = "header";
    e[t].addons[a] = {_init: function(s) {
        var i = this, o = this.opts[a], l = (this.conf[a], e("." + n.header, this.$menu));
        if (l.length) {
            if (o.update) {
                var h = l.find("." + n.title), c = l.find("." + n.prev), f = l.find("." + n.next), p = l.find("." + n.close), u = !1;
                r.$page && (u = "#" + r.$page.attr("id"), p.attr("href", u)), s.each(function() {
                    var t = e(this), s = t.find("." + i.conf.classNames[a].panelHeader), r = t.find("." + i.conf.classNames[a].panelPrev), l = t.find("." + i.conf.classNames[a].panelNext), p = s.html(), u = r.attr("href"), v = l.attr("href"), m = r.html(), b = l.html();
                    p || (p = t.find("." + n.subclose).html()), p || (p = o.title), u || (u = t.find("." + n.subclose).attr("href"));
                    var x = function() {
                        h[p ? "show" : "hide"](), h.html(p), c[u ? "attr" : "removeAttr"]("href", u), c[u || m ? "show" : "hide"](), c.html(m), f[v ? "attr" : "removeAttr"]("href", v), f[v || b ? "show" : "hide"](), f.html(b)
                    };
                    t.on(d.open, x), t.hasClass(n.current) && x()
                })
            }
            e[t].addons.buttonbars && e[t].addons.buttonbars._init.call(this, l)
        }
    }, _setup: function() {
        var s = this.opts[a];
        if (this.conf[a], "boolean" == typeof s && (s = {add: s, update: s}), "object" != typeof s && (s = {}), "undefined" == typeof s.content && (s.content = ["prev", "title", "next"]), s = e.extend(!0, {}, e[t].defaults[a], s), this.opts[a] = s, s.add) {
            if (s.content instanceof Array) {
                for (var d = e("<div />"), r = 0, i = s.content.length; i > r; r++)
                    switch (s.content[r]) {
                        case"prev":
                        case"next":
                        case"close":
                            d.append('<a class="' + n[s.content[r]] + '" href="#"></a>');
                            break;
                        case"title":
                            d.append('<span class="' + n.title + '"></span>');
                            break;
                        default:
                            d.append(s.content[r])
                    }
                d = d.html()
            } else
                var d = s.content;
            e('<div class="' + n.header + '" />').prependTo(this.$menu).append(d), this.$menu.addClass(n.hasheader)
        }
    }, _add: function() {
        n = e[t]._c, s = e[t]._d, d = e[t]._e, n.add("header hasheader prev next close title"), r = e[t].glbl
    }}, e[t].defaults[a] = {add: !1, title: "Menu", update: !1}, e[t].configuration.classNames[a] = {panelHeader: "Header", panelNext: "Next", panelPrev: "Prev"};
    var n, s, d, r
}(jQuery);
/*
 * jQuery mmenu labels addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(l) {
    var e = "mmenu", s = "labels";
    l[e].addons[s] = {_init: function(e) {
        var n = this.opts[s];
        this.__refactorClass(l("li", this.$menu), this.conf.classNames[s].collapsed, "collapsed"), n.collapse && l("." + a.label, e).each(function() {
            var e = l(this), s = e.nextUntil("." + a.label, "." + a.collapsed);
            s.length && (e.children("." + a.subopen).length || (e.wrapInner("<span />"), e.prepend('<a href="#" class="' + a.subopen + " " + a.fullsubopen + '" />')))
        })
    }, _setup: function() {
        var a = this.opts[s];
        "boolean" == typeof a && (a = {collapse: a}), "object" != typeof a && (a = {}), a = l.extend(!0, {}, l[e].defaults[s], a), this.opts[s] = a
    }, _add: function() {
        a = l[e]._c, n = l[e]._d, o = l[e]._e, a.add("collapsed uncollapsed"), t = l[e].glbl
    }, _clickAnchor: function(l, e) {
        if (e) {
            var s = l.parent();
            if (s.is("." + a.label)) {
                var n = s.nextUntil("." + a.label, "." + a.collapsed);
                return s.toggleClass(a.opened), n[s.hasClass(a.opened) ? "addClass" : "removeClass"](a.uncollapsed), !0
            }
        }
        return!1
    }}, l[e].defaults[s] = {collapse: !1}, l[e].configuration.classNames[s] = {collapsed: "Collapsed"};
    var a, n, o, t
}(jQuery);
/*
 * jQuery mmenu searchfield addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(e) {
    function s(e) {
        switch (e) {
            case 9:
            case 16:
            case 17:
            case 18:
            case 37:
            case 38:
            case 39:
            case 40:
                return!0
        }
        return!1
    }
    var n = "mmenu", t = "searchfield";
    e[n].addons[t] = {_init: function(n) {
        var i = this, l = this.opts[t], d = this.conf[t];
        if (l.add) {
            switch (l.addTo) {
                case"menu":
                    var c = this.$menu;
                    break;
                case"panels":
                    var c = n;
                    break;
                default:
                    var c = e(l.addTo, this.$menu).filter("." + a.panel)
            }
            c.length && c.each(function() {
                var s = e(this), n = s.is("." + a.menu) ? d.form ? "form" : "div" : "li";
                if (!s.children(n + "." + a.search).length) {
                    if (s.is("." + a.menu))
                        var t = i.$menu, r = "prependTo";
                    else
                        var t = s.children().first(), r = t.is("." + a.subtitle) ? "insertAfter" : "insertBefore";
                    var o = e("<" + n + ' class="' + a.search + '" />');
                    if ("form" == n && "object" == typeof d.form)
                        for (var c in d.form)
                            o.attr(c, d.form[c]);
                    o.append('<input placeholder="' + l.placeholder + '" type="text" autocomplete="off" />'), o[r](t)
                }
                l.noResults && (s.is("." + a.menu) && (s = s.children("." + a.panel).first()), n = s.is("." + a.list) ? "li" : "div", s.children(n + "." + a.noresultsmsg).length || e("<" + n + ' class="' + a.noresultsmsg + '" />').html(l.noResults).appendTo(s))
            })
        }
        if (this.$menu.children("." + a.search).length && this.$menu.addClass(a.hassearch), l.search) {
            var h = e("." + a.search, this.$menu);
            h.length && h.each(function() {
                var n = e(this);
                if ("menu" == l.addTo)
                    var t = e("." + a.panel, i.$menu), d = i.$menu;
                else
                    var t = n.closest("." + a.panel), d = t;
                var c = n.children("input"), h = i.__findAddBack(t, "." + a.list).children("li"), u = h.filter("." + a.label), f = h.not("." + a.subtitle).not("." + a.label).not("." + a.search).not("." + a.noresultsmsg), p = "> a";
                l.showLinksOnly || (p += ", > span"), c.off(o.keyup + " " + o.change).on(o.keyup, function(e) {
                    s(e.keyCode) || n.trigger(o.search)
                }).on(o.change, function() {
                    n.trigger(o.search)
                }), n.off(o.reset + " " + o.search).on(o.reset + " " + o.search, function(e) {
                    e.stopPropagation()
                }).on(o.reset, function() {
                    n.trigger(o.search, [""])
                }).on(o.search, function(s, n) {
                    "string" == typeof n ? c.val(n) : n = c.val(), n = n.toLowerCase(), t.scrollTop(0), f.add(u).addClass(a.hidden), f.each(function() {
                        var s = e(this);
                        e(p, s).text().toLowerCase().indexOf(n) > -1 && s.add(s.prevAll("." + a.label).first()).removeClass(a.hidden)
                    }), e(t.get().reverse()).each(function(s) {
                        var n = e(this), t = n.data(r.parent);
                        if (t) {
                            var d = n.add(n.find("> ." + a.list)).find("> li").not("." + a.subtitle).not("." + a.search).not("." + a.noresultsmsg).not("." + a.label).not("." + a.hidden);
                            d.length ? t.removeClass(a.hidden).removeClass(a.nosubresults).prevAll("." + a.label).first().removeClass(a.hidden) : "menu" == l.addTo && (n.hasClass(a.opened) && setTimeout(function() {
                                t.trigger(o.open)
                            }, 1.5 * (s + 1) * i.conf.openingInterval), t.addClass(a.nosubresults))
                        }
                    }), d[f.not("." + a.hidden).length ? "removeClass" : "addClass"](a.noresults), i._update()
                })
            })
        }
    }, _setup: function() {
        var s = this.opts[t];
        this.conf[t], "boolean" == typeof s && (s = {add: s, search: s}), "object" != typeof s && (s = {}), s = e.extend(!0, {}, e[n].defaults[t], s), "boolean" != typeof s.showLinksOnly && (s.showLinksOnly = "menu" == s.addTo), this.opts[t] = s
    }, _add: function() {
        a = e[n]._c, r = e[n]._d, o = e[n]._e, a.add("search hassearch noresultsmsg noresults nosubresults"), o.add("search reset change"), i = e[n].glbl
    }}, e[n].defaults[t] = {add: !1, addTo: "menu", search: !1, placeholder: "Search", noResults: "No results found."}, e[n].configuration[t] = {form: !1};
    var a, r, o, i
}(jQuery);
/*
 * jQuery mmenu toggles addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(e) {
    var t = "mmenu", s = "toggles";
    e[t].addons[s] = {_init: function(t) {
        var a = this;
        this.opts[s], this.conf[s], this.__refactorClass(e("input", t), this.conf.classNames[s].toggle, "toggle"), this.__refactorClass(e("input", t), this.conf.classNames[s].check, "check"), e("input." + c.toggle + ", input." + c.check, t).each(function() {
            var t = e(this), s = t.closest("li"), l = t.hasClass(c.toggle) ? "toggle" : "check", n = t.attr("id") || a.__getUniqueId();
            s.children('label[for="' + n + '"]').length || (t.attr("id", n), s.prepend(t), e('<label for="' + n + '" class="' + c[l] + '"></label>').insertBefore(s.children("a, span").last()))
        })
    }, _setup: function() {
    }, _add: function() {
        c = e[t]._c, a = e[t]._d, l = e[t]._e, c.add("toggle check"), n = e[t].glbl
    }}, e[t].defaults[s] = {}, e[t].configuration.classNames[s] = {toggle: "Toggle", check: "Check"};
    var c, a, l, n
}(jQuery);
$(function() {
    $('nav#menu').mmenu();
});
/**************************************************************************************************/

//////////////////////////////////////////// Scroll-to-top button show and hide ////////////////////////////////////////////
$(function() {
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > 100) {
            jQuery('.scrollup').fadeIn();
        } else {
            jQuery('.scrollup').fadeOut();
        }
    });
    // scroll-to-top animate
    jQuery('.scrollup').click(function() {
        jQuery("html, body").animate({scrollTop: 0}, 600);
        return false;
    });
});
//////////////////////////////////////////// Search button roll over ////////////////////////////////////////////
$(function() {
    var clicks = 0;
    $('.search-icon').click(function() {
        if (clicks == 0) {
            $('.search-area').slideDown(100);
            $('.search-text').slideDown(500);
            $('.search-button').slideDown(500);
            clicks = 1;
        } else {
            $('.search-area').hide(300);
            $('.search-text').hide(500);
            $('.search-button').hide(500);
            clicks = 0;
        }
    });
});
//////////////////////////////////////////// Text box value changer. ////////////////////////////////////////////
function clearText(thefield) {
    if (thefield.defaultValue == thefield.value) {
        thefield.value = ""
    }
}
function replaceText(thefield) {
    if (thefield.value == "") {
        thefield.value = thefield.defaultValue
    }
}
/************RESIZE HEIGHT************/
$(document).ready(function() {
    var myDiv = document.getElementById('inner-page'); //get #myDiv
    var sideDiv = document.getElementById('inner-sidebar'); //get #myDiv

    var setHeight = 0;

    var width = $(window).width(), height = $(window).height();
    /*if ((width <= 1023) && (height >= 768)) {
     alert('Remove my nav!');
     } else {
     alert('Do nothing');
     }*/
    if ((width <= 840) && (width >= 620) && myDiv != null && sideDiv != null) {
        if (myDiv.clientHeight > sideDiv.clientHeight) {
            setHeight = parseFloat(myDiv.clientHeight);
            //alert(setHeight);
            $('#inner-sidebar').height(setHeight);
        } else {



        }
    } else {

    }
});


/*********************ANIMATIONS***********************************/
!function(e, t) {
    "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t(require, exports, module) : e.ScrollReveal = t()
}(this, function(e, t, n) {
    return function() {
        "use strict";
        var e, t, n;
        this.ScrollReveal = function() {
            function i(n) {
                return"undefined" == typeof this || Object.getPrototypeOf(this) !== i.prototype ? new i(n) : (e = this, e.tools = new t, e.isSupported() ? (e.tools.extend(e.defaults, n || {}), o(e.defaults), e.store = {elements: {}, containers: []}, e.sequences = {}, e.history = [], e.uid = 0, e.initialized = !1) : "undefined" != typeof console && null !== console && console.log("ScrollReveal is not supported in this browser."), e)
            }
            function o(t) {
                var n = t.container;
                return n && "string" == typeof n ? t.container = window.document.querySelector(n) : (n && !e.tools.isNode(n) && (console.log("ScrollReveal: Invalid container provided, using <html> instead."), t.container = null), null == n && (t.container = window.document.documentElement), t.container)
            }
            function r() {
                return++e.uid
            }
            function s(t, n) {
                t.config ? t.config = e.tools.extendClone(t.config, n) : t.config = e.tools.extendClone(e.defaults, n), "top" === t.config.origin || "bottom" === t.config.origin ? t.config.axis = "Y" : t.config.axis = "X", "top" !== t.config.origin && "left" !== t.config.origin || (t.config.distance = "-" + t.config.distance)
            }
            function a(e) {
                var t = window.getComputedStyle(e.domEl);
                e.styles || (e.styles = {transition: {}, transform: {}, computed: {}}, e.styles.inline = e.domEl.getAttribute("style") || "", e.styles.inline += "; visibility: visible; ", e.styles.computed.opacity = t.opacity, t.transition && "all 0s ease 0s" != t.transition ? e.styles.computed.transition = t.transition + ", " : e.styles.computed.transition = ""), e.styles.transition.instant = l(e, 0), e.styles.transition.delayed = l(e, e.config.delay), e.styles.transform.initial = " -webkit-transform:", e.styles.transform.target = " -webkit-transform:", c(e), e.styles.transform.initial += "transform:", e.styles.transform.target += "transform:", c(e)
            }
            function l(e, t) {
                var n = e.config;
                return"-webkit-transition: " + e.styles.computed.transition + "-webkit-transform " + n.duration / 1e3 + "s " + n.easing + " " + t / 1e3 + "s, opacity " + n.duration / 1e3 + "s " + n.easing + " " + t / 1e3 + "s; transition: " + e.styles.computed.transition + "transform " + n.duration / 1e3 + "s " + n.easing + " " + t / 1e3 + "s, opacity " + n.duration / 1e3 + "s " + n.easing + " " + t / 1e3 + "s; "
            }
            function c(e) {
                var t = e.config, n = e.styles.transform;
                parseInt(t.distance) && (n.initial += " translate" + t.axis + "(" + t.distance + ")", n.target += " translate" + t.axis + "(0)"), t.scale && (n.initial += " scale(" + t.scale + ")", n.target += " scale(1)"), t.rotate.x && (n.initial += " rotateX(" + t.rotate.x + "deg)", n.target += " rotateX(0)"), t.rotate.y && (n.initial += " rotateY(" + t.rotate.y + "deg)", n.target += " rotateY(0)"), t.rotate.z && (n.initial += " rotateZ(" + t.rotate.z + "deg)", n.target += " rotateZ(0)"), n.initial += "; opacity: " + t.opacity + ";", n.target += "; opacity: " + e.styles.computed.opacity + ";"
            }
            function f(t) {
                var n = t.config.container;
                n && -1 == e.store.containers.indexOf(n) && e.store.containers.push(t.config.container), e.store.elements[t.id] = t
            }
            function u(t, n, i) {
                var o = {selector: t, config: n, interval: i};
                e.history.push(o)
            }
            function d() {
                if (e.isSupported()) {
                    g();
                    for (var t = 0; t < e.store.containers.length; t++)
                        e.store.containers[t].addEventListener("scroll", y), e.store.containers[t].addEventListener("resize", y);
                    e.initialized || (window.addEventListener("scroll", y), window.addEventListener("resize", y), e.initialized = !0)
                }
                return e
            }
            function y() {
                n(g)
            }
            function m() {
                var t, n, i, o;
                e.tools.forOwn(e.sequences, function(r) {
                    o = e.sequences[r], t = !1;
                    for (var s = 0; s < o.elemIds.length; s++)
                        i = o.elemIds[s], n = e.store.elements[i], O(n) && !t && (t = !0);
                    o.active = t
                })
            }
            function g() {
                var t, n;
                m(), e.tools.forOwn(e.store.elements, function(i) {
                    n = e.store.elements[i], t = b(n), w(n) ? (t ? n.domEl.setAttribute("style", n.styles.inline + n.styles.transform.target + n.styles.transition.delayed) : n.domEl.setAttribute("style", n.styles.inline + n.styles.transform.target + n.styles.transition.instant), v("reveal", n, t), n.revealing = !0, n.seen = !0, n.sequence && p(n, t)) : h(n) && (n.domEl.setAttribute("style", n.styles.inline + n.styles.transform.initial + n.styles.transition.instant), v("reset", n), n.revealing = !1)
                })
            }
            function p(t, n) {
                var i = 0, o = 0, r = e.sequences[t.sequence.id];
                r.blocked = !0, n && "onload" == t.config.useDelay && (o = t.config.delay), t.sequence.timer && (i = Math.abs(t.sequence.timer.started - new Date), window.clearTimeout(t.sequence.timer)), t.sequence.timer = {started: new Date}, t.sequence.timer.clock = window.setTimeout(function() {
                    r.blocked = !1, t.sequence.timer = null, y()
                }, Math.abs(r.interval) + o - i)
            }
            function v(e, t, n) {
                var i = 0, o = 0, r = "after";
                switch (e) {
                    case"reveal":
                        o = t.config.duration, n && (o += t.config.delay), r += "Reveal";
                        break;
                    case"reset":
                        o = t.config.duration, r += "Reset"
                }
                t.timer && (i = Math.abs(t.timer.started - new Date), window.clearTimeout(t.timer.clock)), t.timer = {started: new Date}, t.timer.clock = window.setTimeout(function() {
                    t.config[r](t.domEl), t.timer = null
                }, o - i)
            }
            function w(t) {
                if (t.sequence) {
                    var n = e.sequences[t.sequence.id];
                    return n.active && !n.blocked && !t.revealing && !t.disabled
                }
                return O(t) && !t.revealing && !t.disabled
            }
            function b(t) {
                var n = t.config.useDelay;
                return"always" === n || "onload" === n && !e.initialized || "once" === n && !t.seen
            }
            function h(t) {
                if (t.sequence) {
                    var n = e.sequences[t.sequence.id];
                    return!n.active && t.config.reset && t.revealing && !t.disabled
                }
                return!O(t) && t.config.reset && t.revealing && !t.disabled
            }
            function x(e) {
                return{width: e.clientWidth, height: e.clientHeight}
            }
            function q(e) {
                if (e && e !== window.document.documentElement) {
                    var t = E(e);
                    return{x: e.scrollLeft + t.left, y: e.scrollTop + t.top}
                }
                return{x: window.pageXOffset, y: window.pageYOffset}
            }
            function E(e) {
                var t = 0, n = 0, i = e.offsetHeight, o = e.offsetWidth;
                do
                    isNaN(e.offsetTop) || (t += e.offsetTop), isNaN(e.offsetLeft) || (n += e.offsetLeft);
                while (e = e.offsetParent);
                return{top: t, left: n, height: i, width: o}
            }
            function O(e) {
                function t() {
                    var t = c + a * s, n = f + l * s, i = u - a * s, y = d - l * s, m = r.y + e.config.viewOffset.top, g = r.x + e.config.viewOffset.left, p = r.y - e.config.viewOffset.bottom + o.height, v = r.x - e.config.viewOffset.right + o.width;
                    return p > t && i > m && n > g && v > y
                }
                function n() {
                    return"fixed" === window.getComputedStyle(e.domEl).position
                }
                var i = E(e.domEl), o = x(e.config.container), r = q(e.config.container), s = e.config.viewFactor, a = i.height, l = i.width, c = i.top, f = i.left, u = c + a, d = f + l;
                return t() || n()
            }
            return i.prototype.defaults = {origin: "bottom", distance: "20px", duration: 500, delay: 0, rotate: {x: 0, y: 0, z: 0}, opacity: 0, scale: .9, easing: "cubic-bezier(0.6, 0.2, 0.1, 1)", container: null, mobile: !0, reset: !1, useDelay: "always", viewFactor: .2, viewOffset: {top: 0, right: 0, bottom: 0, left: 0}, afterReveal: function(e) {
            }, afterReset: function(e) {
            }}, i.prototype.isSupported = function() {
                var e = document.documentElement.style;
                return"WebkitTransition"in e && "WebkitTransform"in e || "transition"in e && "transform"in e
            }, i.prototype.reveal = function(t, n, i, l) {
                var c, y, m, g, p, v;
                if (c = n && n.container ? o(n) : e.defaults.container, y = e.tools.isNode(t) ? [t] : Array.prototype.slice.call(c.querySelectorAll(t)), !y.length)
                    return console.log('ScrollReveal: reveal on "' + t + '"" failed, no elements found.'), e;
                n && "number" == typeof n && (i = n, n = {}), i && "number" == typeof i && (v = r(), p = e.sequences[v] = {id: v, interval: i, elemIds: [], active: !1});
                for (var w = 0; w < y.length; w++)
                    g = y[w].getAttribute("data-sr-id"), g ? m = e.store.elements[g] : (m = {id: r(), domEl: y[w], seen: !1, revealing: !1}, m.domEl.setAttribute("data-sr-id", m.id)), p && (m.sequence = {id: p.id, index: p.elemIds.length}, p.elemIds.push(m.id)), s(m, n || {}), a(m), f(m), e.tools.isMobile() && !m.config.mobile || !e.isSupported() ? (m.domEl.setAttribute("style", m.styles.inline), m.disabled = !0) : m.revealing || m.domEl.setAttribute("style", m.styles.inline + m.styles.transform.initial);
                return!l && e.isSupported() && (u(t, n), e.initTimeout && window.clearTimeout(e.initTimeout), e.initTimeout = window.setTimeout(d, 0)), e
            }, i.prototype.sync = function() {
                if (e.history.length && e.isSupported()) {
                    for (var t = 0; t < e.history.length; t++) {
                        var n = e.history[t];
                        e.reveal(n.selector, n.config, n.interval, !0)
                    }
                    d()
                } else
                    console.log("ScrollReveal: sync failed, no reveals found.");
                return e
            }, i
        }(), t = function() {
            function e() {
            }
            return e.prototype.isObject = function(e) {
                return null !== e && "object" == typeof e && e.constructor == Object
            }, e.prototype.isNode = function(e) {
                return"object" == typeof Node ? e instanceof Node : e && "object" == typeof e && "number" == typeof e.nodeType && "string" == typeof e.nodeName
            }, e.prototype.forOwn = function(e, t) {
                if (!this.isObject(e))
                    throw new TypeError('Expected "object", but received "' + typeof e + '".');
                for (var n in e)
                    e.hasOwnProperty(n) && t(n)
            }, e.prototype.extend = function(e, t) {
                return this.forOwn(t, function(n) {
                    this.isObject(t[n]) ? (e[n] && this.isObject(e[n]) || (e[n] = {}), this.extend(e[n], t[n])) : e[n] = t[n]
                }.bind(this)), e
            }, e.prototype.extendClone = function(e, t) {
                return this.extend(this.extend({}, e), t)
            }, e.prototype.isMobile = function() {
                return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
            }, e
        }(), n = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame
    }.call(this), this.ScrollReveal
});
/*
 (function(){
 var config = {
 viewFactor : 0.15,
 duration   : 800,
 distance   : "0px",
 scale      : 0.8
 };
 window.sr = ScrollReveal( config );
 if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1)  {

 }else{
 if (sr.isSupported()) {
 document.documentElement.classList.add('sr');
 }
 }

 })();
 //- hljs.initHighlightingOnLoad();
 var hero = {
 origin   : "top",
 distance : "24px",
 duration : 1500,
 scale    : 1.05
 };
 var intro = {
 origin   : "bottom",
 distance : "64px",
 duration : 900,
 delay    : 1500,
 scale    : 1
 };
 var github = {
 origin   : "top",
 distance : "32px",
 duration : 600,
 delay    : 1800,
 scale    : 0
 };
 //sr.reveal( ".demo .block", { reset: true, viewOffset: { top: 64 } } );
 sr.reveal( ".hero", hero );
 //sr.reveal( ".intro", intro );
 //sr.reveal( ".hero .github", github );
 //sr.reveal( ".github", github );
 //sr.reveal( ".seq-1", 200 );
 function addCommasToNum( num ){
 return num.toString().replace( /\B(?=(\d{3})+(?!\d))/g, "," );
 }


 var crown = document.querySelector(".crown");
 var demo  = document.querySelector(".demo");
 window.addEventListener( "scroll", scrollBrain, false );
 var body = document.body,
 html = document.documentElement;
 var height = Math.max( body.scrollHeight, body.offsetHeight,
 html.clientHeight, html.scrollHeight, html.offsetHeight );
 function scrollBrain(){
 if ( window.pageYOffset >= demo.offsetTop + 64 ){
 return crown.classList.add("visible");
 }
 if ( crown.classList.contains("visible") ){
 return crown.classList.remove("visible");
 }
 if ( window.pageYOffset >= 0.85 * ( height - window.clientHeight ) ) {
 _gaq.push([ '_trackEvent', 'Behavior', 'Scroll', 'Viewed the entire page.']);
 }
 }*/
/*******************TREE VIEW**********************************/
/**************************************************************/
;
(function($) {
    $.extend($.fn, {
        swapClass: function(c1, c2) {
            var c1Elements = this.filter('.' + c1);
            this.filter('.' + c2).removeClass(c2).addClass(c1);
            c1Elements.removeClass(c1).addClass(c2);
            return this;
        },
        replaceClass: function(c1, c2) {
            return this.filter('.' + c1).removeClass(c1).addClass(c2).end();
        },
        hoverClass: function(className) {
            className = className || "hover";
            return this.hover(function() {
                $(this).addClass(className);
            }, function() {
                $(this).removeClass(className);
            });
        },
        heightToggle: function(animated, callback) {
            animated ?
                this.animate({height: "toggle"}, animated, callback) :
                this.each(function() {
                    jQuery(this)[ jQuery(this).is(":hidden") ? "show" : "hide" ]();
                    if (callback)
                        callback.apply(this, arguments);
                });
        },
        heightHide: function(animated, callback) {
            if (animated) {
                this.animate({height: "hide"}, animated, callback);
            } else {
                this.hide();
                if (callback)
                    this.each(callback);
            }
        },
        prepareBranches: function(settings) {
            if (!settings.prerendered) {
                // mark last tree items
                this.filter(":last-child:not(ul)").addClass(CLASSES.last);
                // collapse whole tree, or only those marked as closed, anyway except those marked as open
                this.filter((settings.collapsed ? "" : "." + CLASSES.closed) + ":not(." + CLASSES.open + ")").find(">ul").hide();
            }
            // return all items with sublists
            return this.filter(":has(>ul)");
        },
        applyClasses: function(settings, toggler) {
            this.filter(":has(>ul):not(:has(>a))").find(">span").click(function(event) {
                toggler.apply($(this).next());
            }).add($("a", this)).hoverClass();

            if (!settings.prerendered) {
                // handle closed ones first
                this.filter(":has(>ul:hidden)")
                    .addClass(CLASSES.expandable)
                    .replaceClass(CLASSES.last, CLASSES.lastExpandable);

                // handle open ones
                this.not(":has(>ul:hidden)")
                    .addClass(CLASSES.collapsable)
                    .replaceClass(CLASSES.last, CLASSES.lastCollapsable);

                // create hitarea
                this.prepend("<div class=\"" + CLASSES.hitarea + "\"/>").find("div." + CLASSES.hitarea).each(function() {
                    var classes = "";
                    $.each($(this).parent().attr("class").split(" "), function() {
                        classes += this + "-hitarea ";
                    });
                    $(this).addClass(classes);
                });
            }

            // apply event to hitarea
            this.find("div." + CLASSES.hitarea).click(toggler);
        },
        treeview: function(settings) {

            settings = $.extend({
                cookieId: "treeview"
            }, settings);

            if (settings.add) {
                return this.trigger("add", [settings.add]);
            }

            if (settings.toggle) {
                var callback = settings.toggle;
                settings.toggle = function() {
                    return callback.apply($(this).parent()[0], arguments);
                };
            }

            // factory for treecontroller
            function treeController(tree, control) {
                // factory for click handlers
                function handler(filter) {
                    return function() {
                        // reuse toggle event handler, applying the elements to toggle
                        // start searching for all hitareas
                        toggler.apply($("div." + CLASSES.hitarea, tree).filter(function() {
                            // for plain toggle, no filter is provided, otherwise we need to check the parent element
                            return filter ? $(this).parent("." + filter).length : true;
                        }));
                        return false;
                    };
                }
                // click on first element to collapse tree
                $("a:eq(0)", control).click(handler(CLASSES.collapsable));
                // click on second to expand tree
                $("a:eq(1)", control).click(handler(CLASSES.expandable));
                // click on third to toggle tree
                $("a:eq(2)", control).click(handler());
            }

            // handle toggle event
            function toggler() {
                $(this)
                    .parent()
                    // swap classes for hitarea
                    .find(">.hitarea")
                    .swapClass(CLASSES.collapsableHitarea, CLASSES.expandableHitarea)
                    .swapClass(CLASSES.lastCollapsableHitarea, CLASSES.lastExpandableHitarea)
                    .end()
                    // swap classes for parent li
                    .swapClass(CLASSES.collapsable, CLASSES.expandable)
                    .swapClass(CLASSES.lastCollapsable, CLASSES.lastExpandable)
                    // find child lists
                    .find(">ul")
                    // toggle them
                    .heightToggle(settings.animated, settings.toggle);
                if (settings.unique) {
                    $(this).parent()
                        .siblings()
                        // swap classes for hitarea
                        .find(">.hitarea")
                        .replaceClass(CLASSES.collapsableHitarea, CLASSES.expandableHitarea)
                        .replaceClass(CLASSES.lastCollapsableHitarea, CLASSES.lastExpandableHitarea)
                        .end()
                        .replaceClass(CLASSES.collapsable, CLASSES.expandable)
                        .replaceClass(CLASSES.lastCollapsable, CLASSES.lastExpandable)
                        .find(">ul")
                        .heightHide(settings.animated, settings.toggle);
                }
            }

            function serialize() {
                function binary(arg) {
                    return arg ? 1 : 0;
                }
                var data = [];
                branches.each(function(i, e) {
                    data[i] = $(e).is(":has(>ul:visible)") ? 1 : 0;
                });
                $.cookie(settings.cookieId, data.join(""));
            }

            function deserialize() {
                var stored = $.cookie(settings.cookieId);
                if (stored) {
                    var data = stored.split("");
                    branches.each(function(i, e) {
                        $(e).find(">ul")[ parseInt(data[i]) ? "show" : "hide" ]();
                    });
                }
            }

            // add treeview class to activate styles
            this.addClass("treeview");

            // prepare branches and find all tree items with child lists
            var branches = this.find("li").prepareBranches(settings);

            switch (settings.persist) {
                case "cookie":
                    var toggleCallback = settings.toggle;
                    settings.toggle = function() {
                        serialize();
                        if (toggleCallback) {
                            toggleCallback.apply(this, arguments);
                        }
                    };
                    deserialize();
                    break;
                case "location":
                    var current = this.find("a").filter(function() {
                        return this.href.toLowerCase() == location.href.toLowerCase();
                    });
                    if (current.length) {
                        current.addClass("selected").parents("ul, li").add(current.next()).show();
                    }
                    break;
            }

            branches.applyClasses(settings, toggler);

            // if control option is set, create the treecontroller and show it
            if (settings.control) {
                treeController(this, settings.control);
                $(settings.control).show();
            }

            return this.bind("add", function(event, branches) {
                $(branches).prev()
                    .removeClass(CLASSES.last)
                    .removeClass(CLASSES.lastCollapsable)
                    .removeClass(CLASSES.lastExpandable)
                    .find(">.hitarea")
                    .removeClass(CLASSES.lastCollapsableHitarea)
                    .removeClass(CLASSES.lastExpandableHitarea);
                $(branches).find("li").andSelf().prepareBranches(settings).applyClasses(settings, toggler);
            });
        }
    });

    // classes used by the plugin
    // need to be styled via external stylesheet, see first example
    var CLASSES = $.fn.treeview.classes = {
        open: "open",
        closed: "closed",
        expandable: "expandable",
        expandableHitarea: "expandable-hitarea",
        lastExpandableHitarea: "lastExpandable-hitarea",
        collapsable: "collapsable",
        collapsableHitarea: "collapsable-hitarea",
        lastCollapsableHitarea: "lastCollapsable-hitarea",
        lastCollapsable: "lastCollapsable",
        lastExpandable: "lastExpandable",
        last: "last",
        hitarea: "hitarea"
    };

    // provide backwards compability
    $.fn.Treeview = $.fn.treeview;

})(jQuery);
jQuery("#tree").treeview({
    collapsed: true,
    animated: "medium",
    control: "#sidetreecontrol",
    persist: "location"
});
/*******************************************************************/
/*****************WOW*************/
/*! WOW - v1.1.2 - 2015-04-07
 * Copyright (c) 2015 Matthieu Aussaguel; Licensed MIT */(function() {
    var a, b, c, d, e, f = function(a, b) {
        return function() {
            return a.apply(b, arguments)
        }
    }, g = [].indexOf || function(a) {
            for (var b = 0, c = this.length; c > b; b++)
                if (b in this && this[b] === a)
                    return b;
            return-1
        };
    b = function() {
        function a() {
        }
        return a.prototype.extend = function(a, b) {
            var c, d;
            for (c in b)
                d = b[c], null == a[c] && (a[c] = d);
            return a
        }, a.prototype.isMobile = function(a) {
            return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)
        }, a.prototype.createEvent = function(a, b, c, d) {
            var e;
            return null == b && (b = !1), null == c && (c = !1), null == d && (d = null), null != document.createEvent ? (e = document.createEvent("CustomEvent"), e.initCustomEvent(a, b, c, d)) : null != document.createEventObject ? (e = document.createEventObject(), e.eventType = a) : e.eventName = a, e
        }, a.prototype.emitEvent = function(a, b) {
            return null != a.dispatchEvent ? a.dispatchEvent(b) : b in(null != a) ? a[b]() : "on" + b in(null != a) ? a["on" + b]() : void 0
        }, a.prototype.addEvent = function(a, b, c) {
            return null != a.addEventListener ? a.addEventListener(b, c, !1) : null != a.attachEvent ? a.attachEvent("on" + b, c) : a[b] = c
        }, a.prototype.removeEvent = function(a, b, c) {
            return null != a.removeEventListener ? a.removeEventListener(b, c, !1) : null != a.detachEvent ? a.detachEvent("on" + b, c) : delete a[b]
        }, a.prototype.innerHeight = function() {
            return"innerHeight"in window ? window.innerHeight : document.documentElement.clientHeight
        }, a
    }(), c = this.WeakMap || this.MozWeakMap || (c = function() {
            function a() {
                this.keys = [], this.values = []
            }
            return a.prototype.get = function(a) {
                var b, c, d, e, f;
                for (f = this.keys, b = d = 0, e = f.length; e > d; b = ++d)
                    if (c = f[b], c === a)
                        return this.values[b]
            }, a.prototype.set = function(a, b) {
                var c, d, e, f, g;
                for (g = this.keys, c = e = 0, f = g.length; f > e; c = ++e)
                    if (d = g[c], d === a)
                        return void(this.values[c] = b);
                return this.keys.push(a), this.values.push(b)
            }, a
        }()), a = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (a = function() {
            function a() {
                "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
            }
            return a.notSupported = !0, a.prototype.observe = function() {
            }, a
        }()), d = this.getComputedStyle || function(a) {
            return this.getPropertyValue = function(b) {
                var c;
                return"float" === b && (b = "styleFloat"), e.test(b) && b.replace(e, function(a, b) {
                    return b.toUpperCase()
                }), (null != (c = a.currentStyle) ? c[b] : void 0) || null
            }, this
        }, e = /(\-([a-z]){1})/g, this.WOW = function() {
        function e(a) {
            null == a && (a = {}), this.scrollCallback = f(this.scrollCallback, this), this.scrollHandler = f(this.scrollHandler, this), this.resetAnimation = f(this.resetAnimation, this), this.start = f(this.start, this), this.scrolled = !0, this.config = this.util().extend(a, this.defaults), this.animationNameCache = new c, this.wowEvent = this.util().createEvent(this.config.boxClass)
        }
        return e.prototype.defaults = {boxClass: "wow", animateClass: "animated", offset: 0, mobile: !0, live: !0, callback: null}, e.prototype.init = function() {
            var a;
            return this.element = window.document.documentElement, "interactive" === (a = document.readyState) || "complete" === a ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = []
        }, e.prototype.start = function() {
            var b, c, d, e;
            if (this.stopped = !1, this.boxes = function() {
                    var a, c, d, e;
                    for (d = this.element.querySelectorAll("." + this.config.boxClass), e = [], a = 0, c = d.length; c > a; a++)
                        b = d[a], e.push(b);
                    return e
                }.call(this), this.all = function() {
                    var a, c, d, e;
                    for (d = this.boxes, e = [], a = 0, c = d.length; c > a; a++)
                        b = d[a], e.push(b);
                    return e
                }.call(this), this.boxes.length)
                if (this.disabled())
                    this.resetStyle();
                else
                    for (e = this.boxes, c = 0, d = e.length; d > c; c++)
                        b = e[c], this.applyStyle(b, !0);
            return this.disabled() || (this.util().addEvent(window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live ? new a(function(a) {
                return function(b) {
                    var c, d, e, f, g;
                    for (g = [], c = 0, d = b.length; d > c; c++)
                        f = b[c], g.push(function() {
                            var a, b, c, d;
                            for (c = f.addedNodes || [], d = [], a = 0, b = c.length; b > a; a++)
                                e = c[a], d.push(this.doSync(e));
                            return d
                        }.call(a));
                    return g
                }
            }(this)).observe(document.body, {childList: !0, subtree: !0}) : void 0
        }, e.prototype.stop = function() {
            return this.stopped = !0, this.util().removeEvent(window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval ? clearInterval(this.interval) : void 0
        }, e.prototype.sync = function() {
            return a.notSupported ? this.doSync(this.element) : void 0
        }, e.prototype.doSync = function(a) {
            var b, c, d, e, f;
            if (null == a && (a = this.element), 1 === a.nodeType) {
                for (a = a.parentNode || a, e = a.querySelectorAll("." + this.config.boxClass), f = [], c = 0, d = e.length; d > c; c++)
                    b = e[c], g.call(this.all, b) < 0 ? (this.boxes.push(b), this.all.push(b), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(b, !0), f.push(this.scrolled = !0)) : f.push(void 0);
                return f
            }
        }, e.prototype.show = function(a) {
            return this.applyStyle(a), a.className = a.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(a), this.util().emitEvent(a, this.wowEvent), this.util().addEvent(a, "animationend", this.resetAnimation), this.util().addEvent(a, "oanimationend", this.resetAnimation), this.util().addEvent(a, "webkitAnimationEnd", this.resetAnimation), this.util().addEvent(a, "MSAnimationEnd", this.resetAnimation), a
        }, e.prototype.applyStyle = function(a, b) {
            var c, d, e;
            return d = a.getAttribute("data-wow-duration"), c = a.getAttribute("data-wow-delay"), e = a.getAttribute("data-wow-iteration"), this.animate(function(f) {
                return function() {
                    return f.customStyle(a, b, d, c, e)
                }
            }(this))
        }, e.prototype.animate = function() {
            return"requestAnimationFrame"in window ? function(a) {
                return window.requestAnimationFrame(a)
            } : function(a) {
                return a()
            }
        }(), e.prototype.resetStyle = function() {
            var a, b, c, d, e;
            for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++)
                a = d[b], e.push(a.style.visibility = "visible");
            return e
        }, e.prototype.resetAnimation = function(a) {
            var b;
            return a.type.toLowerCase().indexOf("animationend") >= 0 ? (b = a.target || a.srcElement, b.className = b.className.replace(this.config.animateClass, "").trim()) : void 0
        }, e.prototype.customStyle = function(a, b, c, d, e) {
            return b && this.cacheAnimationName(a), a.style.visibility = b ? "hidden" : "visible", c && this.vendorSet(a.style, {animationDuration: c}), d && this.vendorSet(a.style, {animationDelay: d}), e && this.vendorSet(a.style, {animationIterationCount: e}), this.vendorSet(a.style, {animationName: b ? "none" : this.cachedAnimationName(a)}), a
        }, e.prototype.vendors = ["moz", "webkit"], e.prototype.vendorSet = function(a, b) {
            var c, d, e, f;
            d = [];
            for (c in b)
                e = b[c], a["" + c] = e, d.push(function() {
                    var b, d, g, h;
                    for (g = this.vendors, h = [], b = 0, d = g.length; d > b; b++)
                        f = g[b], h.push(a["" + f + c.charAt(0).toUpperCase() + c.substr(1)] = e);
                    return h
                }.call(this));
            return d
        }, e.prototype.vendorCSS = function(a, b) {
            var c, e, f, g, h, i;
            for (h = d(a), g = h.getPropertyCSSValue(b), f = this.vendors, c = 0, e = f.length; e > c; c++)
                i = f[c], g = g || h.getPropertyCSSValue("-" + i + "-" + b);
            return g
        }, e.prototype.animationName = function(a) {
            var b;
            try {
                b = this.vendorCSS(a, "animation-name").cssText
            } catch (c) {
                b = d(a).getPropertyValue("animation-name")
            }
            return"none" === b ? "" : b
        }, e.prototype.cacheAnimationName = function(a) {
            return this.animationNameCache.set(a, this.animationName(a))
        }, e.prototype.cachedAnimationName = function(a) {
            return this.animationNameCache.get(a)
        }, e.prototype.scrollHandler = function() {
            return this.scrolled = !0
        }, e.prototype.scrollCallback = function() {
            var a;
            return!this.scrolled || (this.scrolled = !1, this.boxes = function() {
                var b, c, d, e;
                for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++)
                    a = d[b], a && (this.isVisible(a) ? this.show(a) : e.push(a));
                return e
            }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop()
        }, e.prototype.offsetTop = function(a) {
            for (var b; void 0 === a.offsetTop; )
                a = a.parentNode;
            for (b = a.offsetTop; a = a.offsetParent; )
                b += a.offsetTop;
            return b
        }, e.prototype.isVisible = function(a) {
            var b, c, d, e, f;
            return c = a.getAttribute("data-wow-offset") || this.config.offset, f = window.pageYOffset, e = f + Math.min(this.element.clientHeight, this.util().innerHeight()) - c, d = this.offsetTop(a), b = d + a.clientHeight, e >= d && b >= f
        }, e.prototype.util = function() {
            return null != this._util ? this._util : this._util = new b
        }, e.prototype.disabled = function() {
            return!this.config.mobile && this.util().isMobile(navigator.userAgent)
        }, e
    }()
}).call(this);
new WOW().init();

/*********************LOADING ANIMATION***************/
/* $(function() {
 $(".cs-loader").fadeOut(2000, function() {
 $(".content-visible").fadeIn(1000);
 });
 });â€‹*/
/*
 $(window).load(function(){
 // PAGE IS FULLY LOADED
 // FADE OUT YOUR OVERLAYING DIV
 $('.cs-loader').fadeOut(200);
 $(".content-visible").fadeIn(800);
 });

 */



////////////////////////////////////////////  FANCYBOX SCRIPT  /////////////////////////////////
//////////////////////////////////////////// Respond.min.js Code ////////////////////////////////////////////


/*! Respond.js v1.0.1pre: min/max-width media query polyfill. (c) Scott Jehl. MIT/GPLv2 Lic. j.mp/respondjs  */
(function(e, h) {
    e.respond = {};
    respond.update = function() {
    };
    respond.mediaQueriesSupported = h;
    if (h) {
        return
    }
    var u = e.document, r = u.documentElement, i = [], k = [], p = [], o = {}, g = 30, f = u.getElementsByTagName("head")[0] || r, b = f.getElementsByTagName("link"), d = [], a = function() {
        var B = b, w = B.length, z = 0, y, x, A, v;
        for (; z < w; z++) {
            y = B[z], x = y.href, A = y.media, v = y.rel && y.rel.toLowerCase() === "stylesheet";
            if (!!x && v && !o[x]) {
                if (y.styleSheet && y.styleSheet.rawCssText) {
                    m(y.styleSheet.rawCssText, x, A);
                    o[x] = true
                } else {
                    if (!/^([a-zA-Z]+?:(\/\/)?)/.test(x) || x.replace(RegExp.$1, "").split("/")[0] === e.location.host) {
                        d.push({href: x, media: A})
                    }
                }
            }
        }
        t()
    }, t = function() {
        if (d.length) {
            var v = d.shift();
            n(v.href, function(w) {
                m(w, v.href, v.media);
                o[v.href] = true;
                t()
            })
        }
    }, m = function(G, v, x) {
        var E = G.match(/@media[^\{]+\{([^\{\}]+\{[^\}\{]+\})+/gi), H = E && E.length || 0, v = v.substring(0, v.lastIndexOf("/")), w = function(I) {
            return I.replace(/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g, "$1" + v + "$2$3")
        }, y = !H && x, B = 0, A, C, D, z, F;
        if (v.length) {
            v += "/"
        }
        if (y) {
            H = 1
        }
        for (; B < H; B++) {
            A = 0;
            if (y) {
                C = x;
                k.push(w(G))
            } else {
                C = E[B].match(/@media ([^\{]+)\{([\S\s]+?)$/) && RegExp.$1;
                k.push(RegExp.$2 && w(RegExp.$2))
            }
            z = C.split(",");
            F = z.length;
            for (; A < F; A++) {
                D = z[A];
                i.push({media: D.match(/(only\s+)?([a-zA-Z]+)(\sand)?/) && RegExp.$2, rules: k.length - 1, minw: D.match(/\(min\-width:[\s]*([\s]*[0-9]+)px[\s]*\)/) && parseFloat(RegExp.$1), maxw: D.match(/\(max\-width:[\s]*([\s]*[0-9]+)px[\s]*\)/) && parseFloat(RegExp.$1)})
            }
        }
        j()
    }, l, q, j = function(E) {
        var v = "clientWidth", x = r[v], D = u.compatMode === "CSS1Compat" && x || u.body[v] || x, z = {}, C = u.createDocumentFragment(), B = b[b.length - 1], w = (new Date()).getTime();
        if (E && l && w - l < g) {
            clearTimeout(q);
            q = setTimeout(j, g);
            return
        } else {
            l = w
        }
        for (var y in i) {
            var F = i[y];
            if (!F.minw && !F.maxw || (!F.minw || F.minw && D >= F.minw) && (!F.maxw || F.maxw && D <= F.maxw)) {
                if (!z[F.media]) {
                    z[F.media] = []
                }
                z[F.media].push(k[F.rules])
            }
        }
        for (var y in p) {
            if (p[y] && p[y].parentNode === f) {
                f.removeChild(p[y])
            }
        }
        for (var y in z) {
            var G = u.createElement("style"), A = z[y].join("\n");
            G.type = "text/css";
            G.media = y;
            if (G.styleSheet) {
                G.styleSheet.cssText = A
            } else {
                G.appendChild(u.createTextNode(A))
            }
            C.appendChild(G);
            p.push(G)
        }
        f.insertBefore(C, B.nextSibling)
    }, n = function(v, x) {
        var w = c();
        if (!w) {
            return
        }
        w.open("GET", v, true);
        w.onreadystatechange = function() {
            if (w.readyState != 4 || w.status != 200 && w.status != 304) {
                return
            }
            x(w.responseText)
        };
        if (w.readyState == 4) {
            return
        }
        w.send(null)
    }, c = (function() {
        var v = false;
        try {
            v = new XMLHttpRequest()
        } catch (w) {
            v = new ActiveXObject("Microsoft.XMLHTTP")
        }
        return function() {
            return v
        }
    })();
    a();
    respond.update = a;
    function s() {
        j(true)
    }
    if (e.addEventListener) {
        e.addEventListener("resize", s, false)
    } else {
        if (e.attachEvent) {
            e.attachEvent("onresize", s)
        }
    }
})(this, (function(f) {
    if (f.matchMedia) {
        return true
    }
    var e, i = document, c = i.documentElement, g = c.firstElementChild || c.firstChild, h = !i.body, d = i.body || i.createElement("body"), b = i.createElement("div"), a = "only all";
    b.id = "mq-test-1";
    b.style.cssText = "position:absolute;top:-99em";
    d.appendChild(b);
    b.innerHTML = '_<style media="' + a + '"> #mq-test-1 { width: 9px; }</style>';
    if (h) {
        c.insertBefore(d, g)
    }
    b.removeChild(b.firstChild);
    e = b.offsetWidth == 9;
    if (h) {
        c.removeChild(d)
    } else {
        d.removeChild(b)
    }
    return e
})(this));




//////////////////////////////////////////// Fancybox JQuery Pack Code ////////////////////////////////////////////


/*! fancyBox v2.1.5 fancyapps.com | fancyapps.com/fancybox/#license */
(function(r, G, f, v) {
    var J = f("html"), n = f(r), p = f(G), b = f.fancybox = function() {
        b.open.apply(this, arguments)
    }, I = navigator.userAgent.match(/msie/i), B = null, s = G.createTouch !== v, t = function(a) {
        return a && a.hasOwnProperty && a instanceof f
    }, q = function(a) {
        return a && "string" === f.type(a)
    }, E = function(a) {
        return q(a) && 0 < a.indexOf("%")
    }, l = function(a, d) {
        var e = parseInt(a, 10) || 0;
        d && E(a) && (e *= b.getViewport()[d] / 100);
        return Math.ceil(e)
    }, w = function(a, b) {
        return l(a, b) + "px"
    };
    f.extend(b, {version: "2.1.5", defaults: {padding: 15, margin: 20,
        width: 800, height: 600, minWidth: 100, minHeight: 100, maxWidth: 9999, maxHeight: 9999, pixelRatio: 1, autoSize: !0, autoHeight: !1, autoWidth: !1, autoResize: !0, autoCenter: !s, fitToView: !0, aspectRatio: !1, topRatio: 0.5, leftRatio: 0.5, scrolling: "auto", wrapCSS: "", arrows: !0, closeBtn: !0, closeClick: !1, nextClick: !1, mouseWheel: !0, autoPlay: !1, playSpeed: 3E3, preload: 3, modal: !1, loop: !0, ajax: {dataType: "html", headers: {"X-fancyBox": !0}}, iframe: {scrolling: "auto", preload: !0}, swf: {wmode: "transparent", allowfullscreen: "true", allowscriptaccess: "always"},
        keys: {next: {13: "left", 34: "up", 39: "left", 40: "up"}, prev: {8: "right", 33: "down", 37: "right", 38: "down"}, close: [27], play: [32], toggle: [70]}, direction: {next: "left", prev: "right"}, scrollOutside: !0, index: 0, type: null, href: null, content: null, title: null, tpl: {wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>', image: '<img class="fancybox-image" src="{href}" alt="" />', iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' +
        (I ? ' allowtransparency="true"' : "") + "></iframe>", error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>', closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>', next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>', prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'}, openEffect: "fade", openSpeed: 250, openEasing: "swing", openOpacity: !0,
        openMethod: "zoomIn", closeEffect: "fade", closeSpeed: 250, closeEasing: "swing", closeOpacity: !0, closeMethod: "zoomOut", nextEffect: "elastic", nextSpeed: 250, nextEasing: "swing", nextMethod: "changeIn", prevEffect: "elastic", prevSpeed: 250, prevEasing: "swing", prevMethod: "changeOut", helpers: {overlay: !0, title: !0}, onCancel: f.noop, beforeLoad: f.noop, afterLoad: f.noop, beforeShow: f.noop, afterShow: f.noop, beforeChange: f.noop, beforeClose: f.noop, afterClose: f.noop}, group: {}, opts: {}, previous: null, coming: null, current: null, isActive: !1,
        isOpen: !1, isOpened: !1, wrap: null, skin: null, outer: null, inner: null, player: {timer: null, isActive: !1}, ajaxLoad: null, imgPreload: null, transitions: {}, helpers: {}, open: function(a, d) {
            if (a && (f.isPlainObject(d) || (d = {}), !1 !== b.close(!0)))
                return f.isArray(a) || (a = t(a) ? f(a).get() : [a]), f.each(a, function(e, c) {
                    var k = {}, g, h, j, m, l;
                    "object" === f.type(c) && (c.nodeType && (c = f(c)), t(c) ? (k = {href: c.data("fancybox-href") || c.attr("href"), title: c.data("fancybox-title") || c.attr("title"), isDom: !0, element: c}, f.metadata && f.extend(!0, k,
                        c.metadata())) : k = c);
                    g = d.href || k.href || (q(c) ? c : null);
                    h = d.title !== v ? d.title : k.title || "";
                    m = (j = d.content || k.content) ? "html" : d.type || k.type;
                    !m && k.isDom && (m = c.data("fancybox-type"), m || (m = (m = c.prop("class").match(/fancybox\.(\w+)/)) ? m[1] : null));
                    q(g) && (m || (b.isImage(g) ? m = "image" : b.isSWF(g) ? m = "swf" : "#" === g.charAt(0) ? m = "inline" : q(c) && (m = "html", j = c)), "ajax" === m && (l = g.split(/\s+/, 2), g = l.shift(), l = l.shift()));
                    j || ("inline" === m ? g ? j = f(q(g) ? g.replace(/.*(?=#[^\s]+$)/, "") : g) : k.isDom && (j = c) : "html" === m ? j = g : !m && (!g &&
                    k.isDom) && (m = "inline", j = c));
                    f.extend(k, {href: g, type: m, content: j, title: h, selector: l});
                    a[e] = k
                }), b.opts = f.extend(!0, {}, b.defaults, d), d.keys !== v && (b.opts.keys = d.keys ? f.extend({}, b.defaults.keys, d.keys) : !1), b.group = a, b._start(b.opts.index)
        }, cancel: function() {
            var a = b.coming;
            a && !1 !== b.trigger("onCancel") && (b.hideLoading(), b.ajaxLoad && b.ajaxLoad.abort(), b.ajaxLoad = null, b.imgPreload && (b.imgPreload.onload = b.imgPreload.onerror = null), a.wrap && a.wrap.stop(!0, !0).trigger("onReset").remove(), b.coming = null, b.current ||
            b._afterZoomOut(a))
        }, close: function(a) {
            b.cancel();
            !1 !== b.trigger("beforeClose") && (b.unbindEvents(), b.isActive && (!b.isOpen || !0 === a ? (f(".fancybox-wrap").stop(!0).trigger("onReset").remove(), b._afterZoomOut()) : (b.isOpen = b.isOpened = !1, b.isClosing = !0, f(".fancybox-item, .fancybox-nav").remove(), b.wrap.stop(!0, !0).removeClass("fancybox-opened"), b.transitions[b.current.closeMethod]())))
        }, play: function(a) {
            var d = function() {
                clearTimeout(b.player.timer)
            }, e = function() {
                d();
                b.current && b.player.isActive && (b.player.timer =
                    setTimeout(b.next, b.current.playSpeed))
            }, c = function() {
                d();
                p.unbind(".player");
                b.player.isActive = !1;
                b.trigger("onPlayEnd")
            };
            if (!0 === a || !b.player.isActive && !1 !== a) {
                if (b.current && (b.current.loop || b.current.index < b.group.length - 1))
                    b.player.isActive = !0, p.bind({"onCancel.player beforeClose.player": c, "onUpdate.player": e, "beforeLoad.player": d}), e(), b.trigger("onPlayStart")
            } else
                c()
        }, next: function(a) {
            var d = b.current;
            d && (q(a) || (a = d.direction.next), b.jumpto(d.index + 1, a, "next"))
        }, prev: function(a) {
            var d = b.current;
            d && (q(a) || (a = d.direction.prev), b.jumpto(d.index - 1, a, "prev"))
        }, jumpto: function(a, d, e) {
            var c = b.current;
            c && (a = l(a), b.direction = d || c.direction[a >= c.index ? "next" : "prev"], b.router = e || "jumpto", c.loop && (0 > a && (a = c.group.length + a % c.group.length), a %= c.group.length), c.group[a] !== v && (b.cancel(), b._start(a)))
        }, reposition: function(a, d) {
            var e = b.current, c = e ? e.wrap : null, k;
            c && (k = b._getPosition(d), a && "scroll" === a.type ? (delete k.position, c.stop(!0, !0).animate(k, 200)) : (c.css(k), e.pos = f.extend({}, e.dim, k)))
        }, update: function(a) {
            var d =
                a && a.type, e = !d || "orientationchange" === d;
            e && (clearTimeout(B), B = null);
            b.isOpen && !B && (B = setTimeout(function() {
                var c = b.current;
                c && !b.isClosing && (b.wrap.removeClass("fancybox-tmp"), (e || "load" === d || "resize" === d && c.autoResize) && b._setDimension(), "scroll" === d && c.canShrink || b.reposition(a), b.trigger("onUpdate"), B = null)
            }, e && !s ? 0 : 300))
        }, toggle: function(a) {
            b.isOpen && (b.current.fitToView = "boolean" === f.type(a) ? a : !b.current.fitToView, s && (b.wrap.removeAttr("style").addClass("fancybox-tmp"), b.trigger("onUpdate")),
                b.update())
        }, hideLoading: function() {
            p.unbind(".loading");
            f("#fancybox-loading").remove()
        }, showLoading: function() {
            var a, d;
            b.hideLoading();
            a = f('<div id="fancybox-loading"><div></div></div>').click(b.cancel).appendTo("body");
            p.bind("keydown.loading", function(a) {
                if (27 === (a.which || a.keyCode))
                    a.preventDefault(), b.cancel()
            });
            b.defaults.fixed || (d = b.getViewport(), a.css({position: "absolute", top: 0.5 * d.h + d.y, left: 0.5 * d.w + d.x}))
        }, getViewport: function() {
            var a = b.current && b.current.locked || !1, d = {x: n.scrollLeft(),
                y: n.scrollTop()};
            a ? (d.w = a[0].clientWidth, d.h = a[0].clientHeight) : (d.w = s && r.innerWidth ? r.innerWidth : n.width(), d.h = s && r.innerHeight ? r.innerHeight : n.height());
            return d
        }, unbindEvents: function() {
            b.wrap && t(b.wrap) && b.wrap.unbind(".fb");
            p.unbind(".fb");
            n.unbind(".fb")
        }, bindEvents: function() {
            var a = b.current, d;
            a && (n.bind("orientationchange.fb" + (s ? "" : " resize.fb") + (a.autoCenter && !a.locked ? " scroll.fb" : ""), b.update), (d = a.keys) && p.bind("keydown.fb", function(e) {
                var c = e.which || e.keyCode, k = e.target || e.srcElement;
                if (27 === c && b.coming)
                    return!1;
                !e.ctrlKey && (!e.altKey && !e.shiftKey && !e.metaKey && (!k || !k.type && !f(k).is("[contenteditable]"))) && f.each(d, function(d, k) {
                    if (1 < a.group.length && k[c] !== v)
                        return b[d](k[c]), e.preventDefault(), !1;
                    if (-1 < f.inArray(c, k))
                        return b[d](), e.preventDefault(), !1
                })
            }), f.fn.mousewheel && a.mouseWheel && b.wrap.bind("mousewheel.fb", function(d, c, k, g) {
                for (var h = f(d.target || null), j = !1; h.length && !j && !h.is(".fancybox-skin") && !h.is(".fancybox-wrap"); )
                    j = h[0] && !(h[0].style.overflow && "hidden" === h[0].style.overflow) &&
                        (h[0].clientWidth && h[0].scrollWidth > h[0].clientWidth || h[0].clientHeight && h[0].scrollHeight > h[0].clientHeight), h = f(h).parent();
                if (0 !== c && !j && 1 < b.group.length && !a.canShrink) {
                    if (0 < g || 0 < k)
                        b.prev(0 < g ? "down" : "left");
                    else if (0 > g || 0 > k)
                        b.next(0 > g ? "up" : "right");
                    d.preventDefault()
                }
            }))
        }, trigger: function(a, d) {
            var e, c = d || b.coming || b.current;
            if (c) {
                f.isFunction(c[a]) && (e = c[a].apply(c, Array.prototype.slice.call(arguments, 1)));
                if (!1 === e)
                    return!1;
                c.helpers && f.each(c.helpers, function(d, e) {
                    if (e && b.helpers[d] && f.isFunction(b.helpers[d][a]))
                        b.helpers[d][a](f.extend(!0,
                            {}, b.helpers[d].defaults, e), c)
                });
                p.trigger(a)
            }
        }, isImage: function(a) {
            return q(a) && a.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)
        }, isSWF: function(a) {
            return q(a) && a.match(/\.(swf)((\?|#).*)?$/i)
        }, _start: function(a) {
            var d = {}, e, c;
            a = l(a);
            e = b.group[a] || null;
            if (!e)
                return!1;
            d = f.extend(!0, {}, b.opts, e);
            e = d.margin;
            c = d.padding;
            "number" === f.type(e) && (d.margin = [e, e, e, e]);
            "number" === f.type(c) && (d.padding = [c, c, c, c]);
            d.modal && f.extend(!0, d, {closeBtn: !1, closeClick: !1, nextClick: !1, arrows: !1,
                mouseWheel: !1, keys: null, helpers: {overlay: {closeClick: !1}}});
            d.autoSize && (d.autoWidth = d.autoHeight = !0);
            "auto" === d.width && (d.autoWidth = !0);
            "auto" === d.height && (d.autoHeight = !0);
            d.group = b.group;
            d.index = a;
            b.coming = d;
            if (!1 === b.trigger("beforeLoad"))
                b.coming = null;
            else {
                c = d.type;
                e = d.href;
                if (!c)
                    return b.coming = null, b.current && b.router && "jumpto" !== b.router ? (b.current.index = a, b[b.router](b.direction)) : !1;
                b.isActive = !0;
                if ("image" === c || "swf" === c)
                    d.autoHeight = d.autoWidth = !1, d.scrolling = "visible";
                "image" === c && (d.aspectRatio =
                    !0);
                "iframe" === c && s && (d.scrolling = "scroll");
                d.wrap = f(d.tpl.wrap).addClass("fancybox-" + (s ? "mobile" : "desktop") + " fancybox-type-" + c + " fancybox-tmp " + d.wrapCSS).appendTo(d.parent || "body");
                f.extend(d, {skin: f(".fancybox-skin", d.wrap), outer: f(".fancybox-outer", d.wrap), inner: f(".fancybox-inner", d.wrap)});
                f.each(["Top", "Right", "Bottom", "Left"], function(a, b) {
                    d.skin.css("padding" + b, w(d.padding[a]))
                });
                b.trigger("onReady");
                if ("inline" === c || "html" === c) {
                    if (!d.content || !d.content.length)
                        return b._error("content")
                } else if (!e)
                    return b._error("href");
                "image" === c ? b._loadImage() : "ajax" === c ? b._loadAjax() : "iframe" === c ? b._loadIframe() : b._afterLoad()
            }
        }, _error: function(a) {
            f.extend(b.coming, {type: "html", autoWidth: !0, autoHeight: !0, minWidth: 0, minHeight: 0, scrolling: "no", hasError: a, content: b.coming.tpl.error});
            b._afterLoad()
        }, _loadImage: function() {
            var a = b.imgPreload = new Image;
            a.onload = function() {
                this.onload = this.onerror = null;
                b.coming.width = this.width / b.opts.pixelRatio;
                b.coming.height = this.height / b.opts.pixelRatio;
                b._afterLoad()
            };
            a.onerror = function() {
                this.onload =
                    this.onerror = null;
                b._error("image")
            };
            a.src = b.coming.href;
            !0 !== a.complete && b.showLoading()
        }, _loadAjax: function() {
            var a = b.coming;
            b.showLoading();
            b.ajaxLoad = f.ajax(f.extend({}, a.ajax, {url: a.href, error: function(a, e) {
                b.coming && "abort" !== e ? b._error("ajax", a) : b.hideLoading()
            }, success: function(d, e) {
                "success" === e && (a.content = d, b._afterLoad())
            }}))
        }, _loadIframe: function() {
            var a = b.coming, d = f(a.tpl.iframe.replace(/\{rnd\}/g, (new Date).getTime())).attr("scrolling", s ? "auto" : a.iframe.scrolling).attr("src", a.href);
            f(a.wrap).bind("onReset", function() {
                try {
                    f(this).find("iframe").hide().attr("src", "//about:blank").end().empty()
                } catch (a) {
                }
            });
            a.iframe.preload && (b.showLoading(), d.one("load", function() {
                f(this).data("ready", 1);
                s || f(this).bind("load.fb", b.update);
                f(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();
                b._afterLoad()
            }));
            a.content = d.appendTo(a.inner);
            a.iframe.preload || b._afterLoad()
        }, _preloadImages: function() {
            var a = b.group, d = b.current, e = a.length, c = d.preload ? Math.min(d.preload,
                e - 1) : 0, f, g;
            for (g = 1; g <= c; g += 1)
                f = a[(d.index + g) % e], "image" === f.type && f.href && ((new Image).src = f.href)
        }, _afterLoad: function() {
            var a = b.coming, d = b.current, e, c, k, g, h;
            b.hideLoading();
            if (a && !1 !== b.isActive)
                if (!1 === b.trigger("afterLoad", a, d))
                    a.wrap.stop(!0).trigger("onReset").remove(), b.coming = null;
                else {
                    d && (b.trigger("beforeChange", d), d.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove());
                    b.unbindEvents();
                    e = a.content;
                    c = a.type;
                    k = a.scrolling;
                    f.extend(b, {wrap: a.wrap, skin: a.skin,
                        outer: a.outer, inner: a.inner, current: a, previous: d});
                    g = a.href;
                    switch (c) {
                        case "inline":
                        case "ajax":
                        case "html":
                            a.selector ? e = f("<div>").html(e).find(a.selector) : t(e) && (e.data("fancybox-placeholder") || e.data("fancybox-placeholder", f('<div class="fancybox-placeholder"></div>').insertAfter(e).hide()), e = e.show().detach(), a.wrap.bind("onReset", function() {
                                f(this).find(e).length && e.hide().replaceAll(e.data("fancybox-placeholder")).data("fancybox-placeholder", !1)
                            }));
                            break;
                        case "image":
                            e = a.tpl.image.replace("{href}",
                                g);
                            break;
                        case "swf":
                            e = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + g + '"></param>', h = "", f.each(a.swf, function(a, b) {
                                e += '<param name="' + a + '" value="' + b + '"></param>';
                                h += " " + a + '="' + b + '"'
                            }), e += '<embed src="' + g + '" type="application/x-shockwave-flash" width="100%" height="100%"' + h + "></embed></object>"
                    }
                    (!t(e) || !e.parent().is(a.inner)) && a.inner.append(e);
                    b.trigger("beforeShow");
                    a.inner.css("overflow", "yes" === k ? "scroll" :
                        "no" === k ? "hidden" : k);
                    b._setDimension();
                    b.reposition();
                    b.isOpen = !1;
                    b.coming = null;
                    b.bindEvents();
                    if (b.isOpened) {
                        if (d.prevMethod)
                            b.transitions[d.prevMethod]()
                    } else
                        f(".fancybox-wrap").not(a.wrap).stop(!0).trigger("onReset").remove();
                    b.transitions[b.isOpened ? a.nextMethod : a.openMethod]();
                    b._preloadImages()
                }
        }, _setDimension: function() {
            var a = b.getViewport(), d = 0, e = !1, c = !1, e = b.wrap, k = b.skin, g = b.inner, h = b.current, c = h.width, j = h.height, m = h.minWidth, u = h.minHeight, n = h.maxWidth, p = h.maxHeight, s = h.scrolling, q = h.scrollOutside ?
                h.scrollbarWidth : 0, x = h.margin, y = l(x[1] + x[3]), r = l(x[0] + x[2]), v, z, t, C, A, F, B, D, H;
            e.add(k).add(g).width("auto").height("auto").removeClass("fancybox-tmp");
            x = l(k.outerWidth(!0) - k.width());
            v = l(k.outerHeight(!0) - k.height());
            z = y + x;
            t = r + v;
            C = E(c) ? (a.w - z) * l(c) / 100 : c;
            A = E(j) ? (a.h - t) * l(j) / 100 : j;
            if ("iframe" === h.type) {
                if (H = h.content, h.autoHeight && 1 === H.data("ready"))
                    try {
                        H[0].contentWindow.document.location && (g.width(C).height(9999), F = H.contents().find("body"), q && F.css("overflow-x", "hidden"), A = F.outerHeight(!0))
                    } catch (G) {
                    }
            } else if (h.autoWidth ||
                h.autoHeight)
                g.addClass("fancybox-tmp"), h.autoWidth || g.width(C), h.autoHeight || g.height(A), h.autoWidth && (C = g.width()), h.autoHeight && (A = g.height()), g.removeClass("fancybox-tmp");
            c = l(C);
            j = l(A);
            D = C / A;
            m = l(E(m) ? l(m, "w") - z : m);
            n = l(E(n) ? l(n, "w") - z : n);
            u = l(E(u) ? l(u, "h") - t : u);
            p = l(E(p) ? l(p, "h") - t : p);
            F = n;
            B = p;
            h.fitToView && (n = Math.min(a.w - z, n), p = Math.min(a.h - t, p));
            z = a.w - y;
            r = a.h - r;
            h.aspectRatio ? (c > n && (c = n, j = l(c / D)), j > p && (j = p, c = l(j * D)), c < m && (c = m, j = l(c / D)), j < u && (j = u, c = l(j * D))) : (c = Math.max(m, Math.min(c, n)), h.autoHeight &&
            "iframe" !== h.type && (g.width(c), j = g.height()), j = Math.max(u, Math.min(j, p)));
            if (h.fitToView)
                if (g.width(c).height(j), e.width(c + x), a = e.width(), y = e.height(), h.aspectRatio)
                    for (; (a > z || y > r) && (c > m && j > u) && !(19 < d++); )
                        j = Math.max(u, Math.min(p, j - 10)), c = l(j * D), c < m && (c = m, j = l(c / D)), c > n && (c = n, j = l(c / D)), g.width(c).height(j), e.width(c + x), a = e.width(), y = e.height();
                else
                    c = Math.max(m, Math.min(c, c - (a - z))), j = Math.max(u, Math.min(j, j - (y - r)));
            q && ("auto" === s && j < A && c + x + q < z) && (c += q);
            g.width(c).height(j);
            e.width(c + x);
            a = e.width();
            y = e.height();
            e = (a > z || y > r) && c > m && j > u;
            c = h.aspectRatio ? c < F && j < B && c < C && j < A : (c < F || j < B) && (c < C || j < A);
            f.extend(h, {dim: {width: w(a), height: w(y)}, origWidth: C, origHeight: A, canShrink: e, canExpand: c, wPadding: x, hPadding: v, wrapSpace: y - k.outerHeight(!0), skinSpace: k.height() - j});
            !H && (h.autoHeight && j > u && j < p && !c) && g.height("auto")
        }, _getPosition: function(a) {
            var d = b.current, e = b.getViewport(), c = d.margin, f = b.wrap.width() + c[1] + c[3], g = b.wrap.height() + c[0] + c[2], c = {position: "absolute", top: c[0], left: c[3]};
            d.autoCenter && d.fixed &&
            !a && g <= e.h && f <= e.w ? c.position = "fixed" : d.locked || (c.top += e.y, c.left += e.x);
            c.top = w(Math.max(c.top, c.top + (e.h - g) * d.topRatio));
            c.left = w(Math.max(c.left, c.left + (e.w - f) * d.leftRatio));
            return c
        }, _afterZoomIn: function() {
            var a = b.current;
            a && (b.isOpen = b.isOpened = !0, b.wrap.css("overflow", "visible").addClass("fancybox-opened"), b.update(), (a.closeClick || a.nextClick && 1 < b.group.length) && b.inner.css("cursor", "pointer").bind("click.fb", function(d) {
                !f(d.target).is("a") && !f(d.target).parent().is("a") && (d.preventDefault(),
                    b[a.closeClick ? "close" : "next"]())
            }), a.closeBtn && f(a.tpl.closeBtn).appendTo(b.skin).bind("click.fb", function(a) {
                a.preventDefault();
                b.close()
            }), a.arrows && 1 < b.group.length && ((a.loop || 0 < a.index) && f(a.tpl.prev).appendTo(b.outer).bind("click.fb", b.prev), (a.loop || a.index < b.group.length - 1) && f(a.tpl.next).appendTo(b.outer).bind("click.fb", b.next)), b.trigger("afterShow"), !a.loop && a.index === a.group.length - 1 ? b.play(!1) : b.opts.autoPlay && !b.player.isActive && (b.opts.autoPlay = !1, b.play()))
        }, _afterZoomOut: function(a) {
            a =
                a || b.current;
            f(".fancybox-wrap").trigger("onReset").remove();
            f.extend(b, {group: {}, opts: {}, router: !1, current: null, isActive: !1, isOpened: !1, isOpen: !1, isClosing: !1, wrap: null, skin: null, outer: null, inner: null});
            b.trigger("afterClose", a)
        }});
    b.transitions = {getOrigPosition: function() {
        var a = b.current, d = a.element, e = a.orig, c = {}, f = 50, g = 50, h = a.hPadding, j = a.wPadding, m = b.getViewport();
        !e && (a.isDom && d.is(":visible")) && (e = d.find("img:first"), e.length || (e = d));
        t(e) ? (c = e.offset(), e.is("img") && (f = e.outerWidth(), g = e.outerHeight())) :
            (c.top = m.y + (m.h - g) * a.topRatio, c.left = m.x + (m.w - f) * a.leftRatio);
        if ("fixed" === b.wrap.css("position") || a.locked)
            c.top -= m.y, c.left -= m.x;
        return c = {top: w(c.top - h * a.topRatio), left: w(c.left - j * a.leftRatio), width: w(f + j), height: w(g + h)}
    }, step: function(a, d) {
        var e, c, f = d.prop;
        c = b.current;
        var g = c.wrapSpace, h = c.skinSpace;
        if ("width" === f || "height" === f)
            e = d.end === d.start ? 1 : (a - d.start) / (d.end - d.start), b.isClosing && (e = 1 - e), c = "width" === f ? c.wPadding : c.hPadding, c = a - c, b.skin[f](l("width" === f ? c : c - g * e)), b.inner[f](l("width" ===
            f ? c : c - g * e - h * e))
    }, zoomIn: function() {
        var a = b.current, d = a.pos, e = a.openEffect, c = "elastic" === e, k = f.extend({opacity: 1}, d);
        delete k.position;
        c ? (d = this.getOrigPosition(), a.openOpacity && (d.opacity = 0.1)) : "fade" === e && (d.opacity = 0.1);
        b.wrap.css(d).animate(k, {duration: "none" === e ? 0 : a.openSpeed, easing: a.openEasing, step: c ? this.step : null, complete: b._afterZoomIn})
    }, zoomOut: function() {
        var a = b.current, d = a.closeEffect, e = "elastic" === d, c = {opacity: 0.1};
        e && (c = this.getOrigPosition(), a.closeOpacity && (c.opacity = 0.1));
        b.wrap.animate(c,
            {duration: "none" === d ? 0 : a.closeSpeed, easing: a.closeEasing, step: e ? this.step : null, complete: b._afterZoomOut})
    }, changeIn: function() {
        var a = b.current, d = a.nextEffect, e = a.pos, c = {opacity: 1}, f = b.direction, g;
        e.opacity = 0.1;
        "elastic" === d && (g = "down" === f || "up" === f ? "top" : "left", "down" === f || "right" === f ? (e[g] = w(l(e[g]) - 200), c[g] = "+=200px") : (e[g] = w(l(e[g]) + 200), c[g] = "-=200px"));
        "none" === d ? b._afterZoomIn() : b.wrap.css(e).animate(c, {duration: a.nextSpeed, easing: a.nextEasing, complete: b._afterZoomIn})
    }, changeOut: function() {
        var a =
            b.previous, d = a.prevEffect, e = {opacity: 0.1}, c = b.direction;
        "elastic" === d && (e["down" === c || "up" === c ? "top" : "left"] = ("up" === c || "left" === c ? "-" : "+") + "=200px");
        a.wrap.animate(e, {duration: "none" === d ? 0 : a.prevSpeed, easing: a.prevEasing, complete: function() {
            f(this).trigger("onReset").remove()
        }})
    }};
    b.helpers.overlay = {defaults: {closeClick: !0, speedOut: 200, showEarly: !0, css: {}, locked: !s, fixed: !0}, overlay: null, fixed: !1, el: f("html"), create: function(a) {
        a = f.extend({}, this.defaults, a);
        this.overlay && this.close();
        this.overlay =
            f('<div class="fancybox-overlay"></div>').appendTo(b.coming ? b.coming.parent : a.parent);
        this.fixed = !1;
        a.fixed && b.defaults.fixed && (this.overlay.addClass("fancybox-overlay-fixed"), this.fixed = !0)
    }, open: function(a) {
        var d = this;
        a = f.extend({}, this.defaults, a);
        this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(a);
        this.fixed || (n.bind("resize.overlay", f.proxy(this.update, this)), this.update());
        a.closeClick && this.overlay.bind("click.overlay", function(a) {
            if (f(a.target).hasClass("fancybox-overlay"))
                return b.isActive ?
                    b.close() : d.close(), !1
        });
        this.overlay.css(a.css).show()
    }, close: function() {
        var a, b;
        n.unbind("resize.overlay");
        this.el.hasClass("fancybox-lock") && (f(".fancybox-margin").removeClass("fancybox-margin"), a = n.scrollTop(), b = n.scrollLeft(), this.el.removeClass("fancybox-lock"), n.scrollTop(a).scrollLeft(b));
        f(".fancybox-overlay").remove().hide();
        f.extend(this, {overlay: null, fixed: !1})
    }, update: function() {
        var a = "100%", b;
        this.overlay.width(a).height("100%");
        I ? (b = Math.max(G.documentElement.offsetWidth, G.body.offsetWidth),
        p.width() > b && (a = p.width())) : p.width() > n.width() && (a = p.width());
        this.overlay.width(a).height(p.height())
    }, onReady: function(a, b) {
        var e = this.overlay;
        f(".fancybox-overlay").stop(!0, !0);
        e || this.create(a);
        a.locked && (this.fixed && b.fixed) && (e || (this.margin = p.height() > n.height() ? f("html").css("margin-right").replace("px", "") : !1), b.locked = this.overlay.append(b.wrap), b.fixed = !1);
        !0 === a.showEarly && this.beforeShow.apply(this, arguments)
    }, beforeShow: function(a, b) {
        var e, c;
        b.locked && (!1 !== this.margin && (f("*").filter(function() {
            return"fixed" ===
                f(this).css("position") && !f(this).hasClass("fancybox-overlay") && !f(this).hasClass("fancybox-wrap")
        }).addClass("fancybox-margin"), this.el.addClass("fancybox-margin")), e = n.scrollTop(), c = n.scrollLeft(), this.el.addClass("fancybox-lock"), n.scrollTop(e).scrollLeft(c));
        this.open(a)
    }, onUpdate: function() {
        this.fixed || this.update()
    }, afterClose: function(a) {
        this.overlay && !b.coming && this.overlay.fadeOut(a.speedOut, f.proxy(this.close, this))
    }};
    b.helpers.title = {defaults: {type: "float", position: "bottom"}, beforeShow: function(a) {
        var d =
            b.current, e = d.title, c = a.type;
        f.isFunction(e) && (e = e.call(d.element, d));
        if (q(e) && "" !== f.trim(e)) {
            d = f('<div class="fancybox-title fancybox-title-' + c + '-wrap">' + e + "</div>");
            switch (c) {
                case "inside":
                    c = b.skin;
                    break;
                case "outside":
                    c = b.wrap;
                    break;
                case "over":
                    c = b.inner;
                    break;
                default:
                    c = b.skin, d.appendTo("body"), I && d.width(d.width()), d.wrapInner('<span class="child"></span>'), b.current.margin[2] += Math.abs(l(d.css("margin-bottom")))
            }
            d["top" === a.position ? "prependTo" : "appendTo"](c)
        }
    }};
    f.fn.fancybox = function(a) {
        var d,
            e = f(this), c = this.selector || "", k = function(g) {
                var h = f(this).blur(), j = d, k, l;
                !g.ctrlKey && (!g.altKey && !g.shiftKey && !g.metaKey) && !h.is(".fancybox-wrap") && (k = a.groupAttr || "data-fancybox-group", l = h.attr(k), l || (k = "rel", l = h.get(0)[k]), l && ("" !== l && "nofollow" !== l) && (h = c.length ? f(c) : e, h = h.filter("[" + k + '="' + l + '"]'), j = h.index(this)), a.index = j, !1 !== b.open(h, a) && g.preventDefault())
            };
        a = a || {};
        d = a.index || 0;
        !c || !1 === a.live ? e.unbind("click.fb-start").bind("click.fb-start", k) : p.undelegate(c, "click.fb-start").delegate(c +
            ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", k);
        this.filter("[data-fancybox-start=1]").trigger("click");
        return this
    };
    p.ready(function() {
        var a, d;
        f.scrollbarWidth === v && (f.scrollbarWidth = function() {
            var a = f('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"), b = a.children(), b = b.innerWidth() - b.height(99).innerWidth();
            a.remove();
            return b
        });
        if (f.support.fixedPosition === v) {
            a = f.support;
            d = f('<div style="position:fixed;top:20px;"></div>').appendTo("body");
            var e = 20 ===
                d[0].offsetTop || 15 === d[0].offsetTop;
            d.remove();
            a.fixedPosition = e
        }
        f.extend(b.defaults, {scrollbarWidth: f.scrollbarWidth(), fixed: f.support.fixedPosition, parent: f("body")});
        a = f(r).width();
        J.addClass("fancybox-lock-test");
        d = f(r).width();
        J.removeClass("fancybox-lock-test");
        f("<style type='text/css'>.fancybox-margin{margin-right:" + (d - a) + "px;}</style>").appendTo("head")
    })
})(window, document, jQuery);


$(document).ready(function() {

    $(".fancybox").fancybox({
        autoPlay: true, //  slideshow will start after opening the first gallery item
        playSpeed: 4000, // 3sec pause between changing next item

    });

    $("#iframe1")
        .fancybox({
            type: 'iframe',
            autoSize: false,
            width: '580',
            height: '330'
        });

    $("#iframe2")
        .fancybox({
            type: 'iframe',
            autoSize: false,
            width: '600',
            height: '320'
        });
});
/////////////////////////////////////////////////////////////////////////////////////////////////

//SweetAlert
(function(t){"use strict";function e(t,e,r){return t.addEventListener?t.addEventListener(e,r,!1):t.attachEvent?t.attachEvent("on"+e,r):void 0}function r(t,e){var r,n;for(r=0,n=t.length;n>r;r++)if(t[r]===e)return!0;return!1}function n(t,e){var r;t.createTextRange?(r=t.createTextRange(),r.move("character",e),r.select()):t.selectionStart&&(t.focus(),t.setSelectionRange(e,e))}function a(t,e){try{return t.type=e,!0}catch(r){return!1}}t.Placeholders={Utils:{addEventListener:e,inArray:r,moveCaret:n,changeType:a}}})(this),function(t){"use strict";function e(){}function r(){try{return document.activeElement}catch(t){}}function n(t,e){var r,n,a=!!e&&t.value!==e,u=t.value===t.getAttribute(V);return(a||u)&&"true"===t.getAttribute(D)?(t.removeAttribute(D),t.value=t.value.replace(t.getAttribute(V),""),t.className=t.className.replace(R,""),n=t.getAttribute(F),parseInt(n,10)>=0&&(t.setAttribute("maxLength",n),t.removeAttribute(F)),r=t.getAttribute(P),r&&(t.type=r),!0):!1}function a(t){var e,r,n=t.getAttribute(V);return""===t.value&&n?(t.setAttribute(D,"true"),t.value=n,t.className+=" "+I,r=t.getAttribute(F),r||(t.setAttribute(F,t.maxLength),t.removeAttribute("maxLength")),e=t.getAttribute(P),e?t.type="text":"password"===t.type&&M.changeType(t,"text")&&t.setAttribute(P,"password"),!0):!1}function u(t,e){var r,n,a,u,i,l,o;if(t&&t.getAttribute(V))e(t);else for(a=t?t.getElementsByTagName("input"):b,u=t?t.getElementsByTagName("textarea"):f,r=a?a.length:0,n=u?u.length:0,o=0,l=r+n;l>o;o++)i=r>o?a[o]:u[o-r],e(i)}function i(t){u(t,n)}function l(t){u(t,a)}function o(t){return function(){m&&t.value===t.getAttribute(V)&&"true"===t.getAttribute(D)?M.moveCaret(t,0):n(t)}}function c(t){return function(){a(t)}}function s(t){return function(e){return A=t.value,"true"===t.getAttribute(D)&&A===t.getAttribute(V)&&M.inArray(C,e.keyCode)?(e.preventDefault&&e.preventDefault(),!1):void 0}}function d(t){return function(){n(t,A),""===t.value&&(t.blur(),M.moveCaret(t,0))}}function g(t){return function(){t===r()&&t.value===t.getAttribute(V)&&"true"===t.getAttribute(D)&&M.moveCaret(t,0)}}function v(t){return function(){i(t)}}function p(t){t.form&&(T=t.form,"string"==typeof T&&(T=document.getElementById(T)),T.getAttribute(U)||(M.addEventListener(T,"submit",v(T)),T.setAttribute(U,"true"))),M.addEventListener(t,"focus",o(t)),M.addEventListener(t,"blur",c(t)),m&&(M.addEventListener(t,"keydown",s(t)),M.addEventListener(t,"keyup",d(t)),M.addEventListener(t,"click",g(t))),t.setAttribute(j,"true"),t.setAttribute(V,x),(m||t!==r())&&a(t)}var b,f,m,h,A,y,E,x,L,T,N,S,w,B=["text","search","url","tel","email","password","number","textarea"],C=[27,33,34,35,36,37,38,39,40,8,46],k="#ccc",I="placeholdersjs",R=RegExp("(?:^|\\s)"+I+"(?!\\S)"),V="data-placeholder-value",D="data-placeholder-active",P="data-placeholder-type",U="data-placeholder-submit",j="data-placeholder-bound",q="data-placeholder-focus",z="data-placeholder-live",F="data-placeholder-maxlength",G=document.createElement("input"),H=document.getElementsByTagName("head")[0],J=document.documentElement,K=t.Placeholders,M=K.Utils;if(K.nativeSupport=void 0!==G.placeholder,!K.nativeSupport){for(b=document.getElementsByTagName("input"),f=document.getElementsByTagName("textarea"),m="false"===J.getAttribute(q),h="false"!==J.getAttribute(z),y=document.createElement("style"),y.type="text/css",E=document.createTextNode("."+I+" { color:"+k+"; }"),y.styleSheet?y.styleSheet.cssText=E.nodeValue:y.appendChild(E),H.insertBefore(y,H.firstChild),w=0,S=b.length+f.length;S>w;w++)N=b.length>w?b[w]:f[w-b.length],x=N.attributes.placeholder,x&&(x=x.nodeValue,x&&M.inArray(B,N.type)&&p(N));L=setInterval(function(){for(w=0,S=b.length+f.length;S>w;w++)N=b.length>w?b[w]:f[w-b.length],x=N.attributes.placeholder,x?(x=x.nodeValue,x&&M.inArray(B,N.type)&&(N.getAttribute(j)||p(N),(x!==N.getAttribute(V)||"password"===N.type&&!N.getAttribute(P))&&("password"===N.type&&!N.getAttribute(P)&&M.changeType(N,"text")&&N.setAttribute(P,"password"),N.value===N.getAttribute(V)&&(N.value=x),N.setAttribute(V,x)))):N.getAttribute(D)&&(n(N),N.removeAttribute(V));h||clearInterval(L)},100)}M.addEventListener(t,"beforeunload",function(){K.disable()}),K.disable=K.nativeSupport?e:i,K.enable=K.nativeSupport?e:l}(this);
!function(e,t,n){"use strict";!function o(e,t,n){function a(s,l){if(!t[s]){if(!e[s]){var i="function"==typeof require&&require;if(!l&&i)return i(s,!0);if(r)return r(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var c=t[s]={exports:{}};e[s][0].call(c.exports,function(t){var n=e[s][1][t];return a(n?n:t)},c,c.exports,o,e,t,n)}return t[s].exports}for(var r="function"==typeof require&&require,s=0;s<n.length;s++)a(n[s]);return a}({1:[function(o,a,r){var s=function(e){return e&&e.__esModule?e:{"default":e}};Object.defineProperty(r,"__esModule",{value:!0});var l,i,u,c,d=o("./modules/handle-dom"),f=o("./modules/utils"),p=o("./modules/handle-swal-dom"),m=o("./modules/handle-click"),v=o("./modules/handle-key"),y=s(v),h=o("./modules/default-params"),b=s(h),g=o("./modules/set-params"),w=s(g);r["default"]=u=c=function(){function o(e){var t=a;return t[e]===n?b["default"][e]:t[e]}var a=arguments[0];if(d.addClass(t.body,"stop-scrolling"),p.resetInput(),a===n)return f.logStr("SweetAlert expects at least 1 attribute!"),!1;var r=f.extend({},b["default"]);switch(typeof a){case"string":r.title=a,r.text=arguments[1]||"",r.type=arguments[2]||"";break;case"object":if(a.title===n)return f.logStr('Missing "title" argument!'),!1;r.title=a.title;for(var s in b["default"])r[s]=o(s);r.confirmButtonText=r.showCancelButton?"Confirm":b["default"].confirmButtonText,r.confirmButtonText=o("confirmButtonText"),r.doneFunction=arguments[1]||null;break;default:return f.logStr('Unexpected type of argument! Expected "string" or "object", got '+typeof a),!1}w["default"](r),p.fixVerticalPosition(),p.openModal(arguments[1]);for(var u=p.getModal(),v=u.querySelectorAll("button"),h=["onclick","onmouseover","onmouseout","onmousedown","onmouseup","onfocus"],g=function(e){return m.handleButton(e,r,u)},C=0;C<v.length;C++)for(var S=0;S<h.length;S++){var x=h[S];v[C][x]=g}p.getOverlay().onclick=g,l=e.onkeydown;var k=function(e){return y["default"](e,r,u)};e.onkeydown=k,e.onfocus=function(){setTimeout(function(){i!==n&&(i.focus(),i=n)},0)},c.enableButtons()},u.setDefaults=c.setDefaults=function(e){if(!e)throw new Error("userParams is required");if("object"!=typeof e)throw new Error("userParams has to be a object");f.extend(b["default"],e)},u.close=c.close=function(){var o=p.getModal();d.fadeOut(p.getOverlay(),5),d.fadeOut(o,5),d.removeClass(o,"showSweetAlert"),d.addClass(o,"hideSweetAlert"),d.removeClass(o,"visible");var a=o.querySelector(".sa-icon.sa-success");d.removeClass(a,"animate"),d.removeClass(a.querySelector(".sa-tip"),"animateSuccessTip"),d.removeClass(a.querySelector(".sa-long"),"animateSuccessLong");var r=o.querySelector(".sa-icon.sa-error");d.removeClass(r,"animateErrorIcon"),d.removeClass(r.querySelector(".sa-x-mark"),"animateXMark");var s=o.querySelector(".sa-icon.sa-warning");return d.removeClass(s,"pulseWarning"),d.removeClass(s.querySelector(".sa-body"),"pulseWarningIns"),d.removeClass(s.querySelector(".sa-dot"),"pulseWarningIns"),setTimeout(function(){var e=o.getAttribute("data-custom-class");d.removeClass(o,e)},300),d.removeClass(t.body,"stop-scrolling"),e.onkeydown=l,e.previousActiveElement&&e.previousActiveElement.focus(),i=n,clearTimeout(o.timeout),!0},u.showInputError=c.showInputError=function(e){var t=p.getModal(),n=t.querySelector(".sa-input-error");d.addClass(n,"show");var o=t.querySelector(".sa-error-container");d.addClass(o,"show"),o.querySelector("p").innerHTML=e,setTimeout(function(){u.enableButtons()},1),t.querySelector("input").focus()},u.resetInputError=c.resetInputError=function(e){if(e&&13===e.keyCode)return!1;var t=p.getModal(),n=t.querySelector(".sa-input-error");d.removeClass(n,"show");var o=t.querySelector(".sa-error-container");d.removeClass(o,"show")},u.disableButtons=c.disableButtons=function(){var e=p.getModal(),t=e.querySelector("button.confirm"),n=e.querySelector("button.cancel");t.disabled=!0,n.disabled=!0},u.enableButtons=c.enableButtons=function(){var e=p.getModal(),t=e.querySelector("button.confirm"),n=e.querySelector("button.cancel");t.disabled=!1,n.disabled=!1},"undefined"!=typeof e?e.sweetAlert=e.swal=u:f.logStr("SweetAlert is a frontend module!"),a.exports=r["default"]},{"./modules/default-params":2,"./modules/handle-click":3,"./modules/handle-dom":4,"./modules/handle-key":5,"./modules/handle-swal-dom":6,"./modules/set-params":8,"./modules/utils":9}],2:[function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0});var o={title:"",text:"",type:null,allowOutsideClick:!1,showConfirmButton:!0,showCancelButton:!1,closeOnConfirm:!0,closeOnCancel:!0,confirmButtonText:"OK",confirmButtonColor:"#8CD4F5",cancelButtonText:"Cancel",imageUrl:null,imageSize:null,timer:null,customClass:"",html:!1,animation:!0,allowEscapeKey:!0,inputType:"text",inputPlaceholder:"",inputValue:"",showLoaderOnConfirm:!1};n["default"]=o,t.exports=n["default"]},{}],3:[function(t,n,o){Object.defineProperty(o,"__esModule",{value:!0});var a=t("./utils"),r=(t("./handle-swal-dom"),t("./handle-dom")),s=function(t,n,o){function s(e){m&&n.confirmButtonColor&&(p.style.backgroundColor=e)}var u,c,d,f=t||e.event,p=f.target||f.srcElement,m=-1!==p.className.indexOf("confirm"),v=-1!==p.className.indexOf("sweet-overlay"),y=r.hasClass(o,"visible"),h=n.doneFunction&&"true"===o.getAttribute("data-has-done-function");switch(m&&n.confirmButtonColor&&(u=n.confirmButtonColor,c=a.colorLuminance(u,-.04),d=a.colorLuminance(u,-.14)),f.type){case"mouseover":s(c);break;case"mouseout":s(u);break;case"mousedown":s(d);break;case"mouseup":s(c);break;case"focus":var b=o.querySelector("button.confirm"),g=o.querySelector("button.cancel");m?g.style.boxShadow="none":b.style.boxShadow="none";break;case"click":var w=o===p,C=r.isDescendant(o,p);if(!w&&!C&&y&&!n.allowOutsideClick)break;m&&h&&y?l(o,n):h&&y||v?i(o,n):r.isDescendant(o,p)&&"BUTTON"===p.tagName&&sweetAlert.close()}},l=function(e,t){var n=!0;r.hasClass(e,"show-input")&&(n=e.querySelector("input").value,n||(n="")),t.doneFunction(n),t.closeOnConfirm&&sweetAlert.close(),t.showLoaderOnConfirm&&sweetAlert.disableButtons()},i=function(e,t){var n=String(t.doneFunction).replace(/\s/g,""),o="function("===n.substring(0,9)&&")"!==n.substring(9,10);o&&t.doneFunction(!1),t.closeOnCancel&&sweetAlert.close()};o["default"]={handleButton:s,handleConfirm:l,handleCancel:i},n.exports=o["default"]},{"./handle-dom":4,"./handle-swal-dom":6,"./utils":9}],4:[function(n,o,a){Object.defineProperty(a,"__esModule",{value:!0});var r=function(e,t){return new RegExp(" "+t+" ").test(" "+e.className+" ")},s=function(e,t){r(e,t)||(e.className+=" "+t)},l=function(e,t){var n=" "+e.className.replace(/[\t\r\n]/g," ")+" ";if(r(e,t)){for(;n.indexOf(" "+t+" ")>=0;)n=n.replace(" "+t+" "," ");e.className=n.replace(/^\s+|\s+$/g,"")}},i=function(e){var n=t.createElement("div");return n.appendChild(t.createTextNode(e)),n.innerHTML},u=function(e){e.style.opacity="",e.style.display="block"},c=function(e){if(e&&!e.length)return u(e);for(var t=0;t<e.length;++t)u(e[t])},d=function(e){e.style.opacity="",e.style.display="none"},f=function(e){if(e&&!e.length)return d(e);for(var t=0;t<e.length;++t)d(e[t])},p=function(e,t){for(var n=t.parentNode;null!==n;){if(n===e)return!0;n=n.parentNode}return!1},m=function(e){e.style.left="-9999px",e.style.display="block";var t,n=e.clientHeight;return t="undefined"!=typeof getComputedStyle?parseInt(getComputedStyle(e).getPropertyValue("padding-top"),10):parseInt(e.currentStyle.padding),e.style.left="",e.style.display="none","-"+parseInt((n+t)/2)+"px"},v=function(e,t){if(+e.style.opacity<1){t=t||16,e.style.opacity=0,e.style.display="block";var n=+new Date,o=function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){e.style.opacity=+e.style.opacity+(new Date-n)/100,n=+new Date,+e.style.opacity<1&&setTimeout(o,t)});o()}e.style.display="block"},y=function(e,t){t=t||16,e.style.opacity=1;var n=+new Date,o=function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){e.style.opacity=+e.style.opacity-(new Date-n)/100,n=+new Date,+e.style.opacity>0?setTimeout(o,t):e.style.display="none"});o()},h=function(n){if("function"==typeof MouseEvent){var o=new MouseEvent("click",{view:e,bubbles:!1,cancelable:!0});n.dispatchEvent(o)}else if(t.createEvent){var a=t.createEvent("MouseEvents");a.initEvent("click",!1,!1),n.dispatchEvent(a)}else t.createEventObject?n.fireEvent("onclick"):"function"==typeof n.onclick&&n.onclick()},b=function(t){"function"==typeof t.stopPropagation?(t.stopPropagation(),t.preventDefault()):e.event&&e.event.hasOwnProperty("cancelBubble")&&(e.event.cancelBubble=!0)};a.hasClass=r,a.addClass=s,a.removeClass=l,a.escapeHtml=i,a._show=u,a.show=c,a._hide=d,a.hide=f,a.isDescendant=p,a.getTopMargin=m,a.fadeIn=v,a.fadeOut=y,a.fireClick=h,a.stopEventPropagation=b},{}],5:[function(t,o,a){Object.defineProperty(a,"__esModule",{value:!0});var r=t("./handle-dom"),s=t("./handle-swal-dom"),l=function(t,o,a){var l=t||e.event,i=l.keyCode||l.which,u=a.querySelector("button.confirm"),c=a.querySelector("button.cancel"),d=a.querySelectorAll("button[tabindex]");if(-1!==[9,13,32,27].indexOf(i)){for(var f=l.target||l.srcElement,p=-1,m=0;m<d.length;m++)if(f===d[m]){p=m;break}9===i?(f=-1===p?u:p===d.length-1?d[0]:d[p+1],r.stopEventPropagation(l),f.focus(),o.confirmButtonColor&&s.setFocusStyle(f,o.confirmButtonColor)):13===i?("INPUT"===f.tagName&&(f=u,u.focus()),f=-1===p?u:n):27===i&&o.allowEscapeKey===!0?(f=c,r.fireClick(f,l)):f=n}};a["default"]=l,o.exports=a["default"]},{"./handle-dom":4,"./handle-swal-dom":6}],6:[function(n,o,a){var r=function(e){return e&&e.__esModule?e:{"default":e}};Object.defineProperty(a,"__esModule",{value:!0});var s=n("./utils"),l=n("./handle-dom"),i=n("./default-params"),u=r(i),c=n("./injected-html"),d=r(c),f=".sweet-alert",p=".sweet-overlay",m=function(){var e=t.createElement("div");for(e.innerHTML=d["default"];e.firstChild;)t.body.appendChild(e.firstChild)},v=function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){var e=t.querySelector(f);return e||(m(),e=v()),e}),y=function(){var e=v();return e?e.querySelector("input"):void 0},h=function(){return t.querySelector(p)},b=function(e,t){var n=s.hexToRgb(t);e.style.boxShadow="0 0 2px rgba("+n+", 0.8), inset 0 0 0 1px rgba(0, 0, 0, 0.05)"},g=function(n){var o=v();l.fadeIn(h(),10),l.show(o),l.addClass(o,"showSweetAlert"),l.removeClass(o,"hideSweetAlert"),e.previousActiveElement=t.activeElement;var a=o.querySelector("button.confirm");a.focus(),setTimeout(function(){l.addClass(o,"visible")},500);var r=o.getAttribute("data-timer");if("null"!==r&&""!==r){var s=n;o.timeout=setTimeout(function(){var e=(s||null)&&"true"===o.getAttribute("data-has-done-function");e?s(null):sweetAlert.close()},r)}},w=function(){var e=v(),t=y();l.removeClass(e,"show-input"),t.value=u["default"].inputValue,t.setAttribute("type",u["default"].inputType),t.setAttribute("placeholder",u["default"].inputPlaceholder),C()},C=function(e){if(e&&13===e.keyCode)return!1;var t=v(),n=t.querySelector(".sa-input-error");l.removeClass(n,"show");var o=t.querySelector(".sa-error-container");l.removeClass(o,"show")},S=function(){var e=v();e.style.marginTop=l.getTopMargin(v())};a.sweetAlertInitialize=m,a.getModal=v,a.getOverlay=h,a.getInput=y,a.setFocusStyle=b,a.openModal=g,a.resetInput=w,a.resetInputError=C,a.fixVerticalPosition=S},{"./default-params":2,"./handle-dom":4,"./injected-html":7,"./utils":9}],7:[function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0});var o='<div class="sweet-overlay" tabIndex="-1"></div><div class="sweet-alert"><div class="sa-icon sa-error">\n      <span class="sa-x-mark">\n        <span class="sa-line sa-left"></span>\n        <span class="sa-line sa-right"></span>\n      </span>\n    </div><div class="sa-icon sa-warning">\n      <span class="sa-body"></span>\n      <span class="sa-dot"></span>\n    </div><div class="sa-icon sa-info"></div><div class="sa-icon sa-success">\n      <span class="sa-line sa-tip"></span>\n      <span class="sa-line sa-long"></span>\n\n      <div class="sa-placeholder"></div>\n      <div class="sa-fix"></div>\n    </div><div class="sa-icon sa-custom"></div><h2>Title</h2>\n    <p>Text</p>\n    <fieldset>\n      <input type="text" tabIndex="3" />\n      <div class="sa-input-error"></div>\n    </fieldset><div class="sa-error-container">\n      <div class="icon">!</div>\n      <p>Not valid!</p>\n    </div><div class="sa-button-container">\n      <button class="cancel" tabIndex="2">Cancel</button>\n      <div class="sa-confirm-button-container">\n        <button class="confirm" tabIndex="1">OK</button><div class="la-ball-fall">\n          <div></div>\n          <div></div>\n          <div></div>\n        </div>\n      </div>\n    </div></div>';n["default"]=o,t.exports=n["default"]},{}],8:[function(e,t,o){Object.defineProperty(o,"__esModule",{value:!0});var a=e("./utils"),r=e("./handle-swal-dom"),s=e("./handle-dom"),l=["error","warning","info","success","input","prompt"],i=function(e){var t=r.getModal(),o=t.querySelector("h2"),i=t.querySelector("p"),u=t.querySelector("button.cancel"),c=t.querySelector("button.confirm");if(o.innerHTML=e.html?e.title:s.escapeHtml(e.title).split("\n").join("<br>"),i.innerHTML=e.html?e.text:s.escapeHtml(e.text||"").split("\n").join("<br>"),e.text&&s.show(i),e.customClass)s.addClass(t,e.customClass),t.setAttribute("data-custom-class",e.customClass);else{var d=t.getAttribute("data-custom-class");s.removeClass(t,d),t.setAttribute("data-custom-class","")}if(s.hide(t.querySelectorAll(".sa-icon")),e.type&&!a.isIE8()){var f=function(){for(var o=!1,a=0;a<l.length;a++)if(e.type===l[a]){o=!0;break}if(!o)return logStr("Unknown alert type: "+e.type),{v:!1};var i=["success","error","warning","info"],u=n;-1!==i.indexOf(e.type)&&(u=t.querySelector(".sa-icon.sa-"+e.type),s.show(u));var c=r.getInput();switch(e.type){case"success":s.addClass(u,"animate"),s.addClass(u.querySelector(".sa-tip"),"animateSuccessTip"),s.addClass(u.querySelector(".sa-long"),"animateSuccessLong");break;case"error":s.addClass(u,"animateErrorIcon"),s.addClass(u.querySelector(".sa-x-mark"),"animateXMark");break;case"warning":s.addClass(u,"pulseWarning"),s.addClass(u.querySelector(".sa-body"),"pulseWarningIns"),s.addClass(u.querySelector(".sa-dot"),"pulseWarningIns");break;case"input":case"prompt":c.setAttribute("type",e.inputType),c.value=e.inputValue,c.setAttribute("placeholder",e.inputPlaceholder),s.addClass(t,"show-input"),setTimeout(function(){c.focus(),c.addEventListener("keyup",swal.resetInputError)},400)}}();if("object"==typeof f)return f.v}if(e.imageUrl){var p=t.querySelector(".sa-icon.sa-custom");p.style.backgroundImage="url("+e.imageUrl+")",s.show(p);var m=80,v=80;if(e.imageSize){var y=e.imageSize.toString().split("x"),h=y[0],b=y[1];h&&b?(m=h,v=b):logStr("Parameter imageSize expects value with format WIDTHxHEIGHT, got "+e.imageSize)}p.setAttribute("style",p.getAttribute("style")+"width:"+m+"px; height:"+v+"px")}t.setAttribute("data-has-cancel-button",e.showCancelButton),e.showCancelButton?u.style.display="inline-block":s.hide(u),t.setAttribute("data-has-confirm-button",e.showConfirmButton),e.showConfirmButton?c.style.display="inline-block":s.hide(c),e.cancelButtonText&&(u.innerHTML=s.escapeHtml(e.cancelButtonText)),e.confirmButtonText&&(c.innerHTML=s.escapeHtml(e.confirmButtonText)),e.confirmButtonColor&&(c.style.backgroundColor=e.confirmButtonColor,c.style.borderLeftColor=e.confirmLoadingButtonColor,c.style.borderRightColor=e.confirmLoadingButtonColor,r.setFocusStyle(c,e.confirmButtonColor)),t.setAttribute("data-allow-outside-click",e.allowOutsideClick);var g=e.doneFunction?!0:!1;t.setAttribute("data-has-done-function",g),e.animation?"string"==typeof e.animation?t.setAttribute("data-animation",e.animation):t.setAttribute("data-animation","pop"):t.setAttribute("data-animation","none"),t.setAttribute("data-timer",e.timer)};o["default"]=i,t.exports=o["default"]},{"./handle-dom":4,"./handle-swal-dom":6,"./utils":9}],9:[function(t,n,o){Object.defineProperty(o,"__esModule",{value:!0});var a=function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e},r=function(e){var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?parseInt(t[1],16)+", "+parseInt(t[2],16)+", "+parseInt(t[3],16):null},s=function(){return e.attachEvent&&!e.addEventListener},l=function(t){e.console&&e.console.log("SweetAlert: "+t)},i=function(e,t){e=String(e).replace(/[^0-9a-f]/gi,""),e.length<6&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),t=t||0;var n,o,a="#";for(o=0;3>o;o++)n=parseInt(e.substr(2*o,2),16),n=Math.round(Math.min(Math.max(0,n+n*t),255)).toString(16),a+=("00"+n).substr(n.length);return a};o.extend=a,o.hexToRgb=r,o.isIE8=s,o.logStr=l,o.colorLuminance=i},{}]},{},[1]),"function"==typeof define&&define.amd?define(function(){return sweetAlert}):"undefined"!=typeof module&&module.exports&&(module.exports=sweetAlert)}(window,document);



//Contact Page
/*! jQuery Validation Plugin - v1.11.1 - 3/22/2013\n* https://github.com/jzaefferer/jquery-validation
 * Copyright (c) 2013 JÃ¶rn Zaefferer; Licensed MIT */(function(t) {
    t.extend(t.fn, {validate: function(e) {
        if (!this.length)
            return e && e.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."), void 0;
        var i = t.data(this[0], "validator");
        return i ? i : (this.attr("novalidate", "novalidate"), i = new t.validator(e, this[0]), t.data(this[0], "validator", i), i.settings.onsubmit && (this.validateDelegate(":submit", "click", function(e) {
            i.settings.submitHandler && (i.submitButton = e.target), t(e.target).hasClass("cancel") && (i.cancelSubmit = !0), void 0 !== t(e.target).attr("formnovalidate") && (i.cancelSubmit = !0)
        }), this.submit(function(e) {
            function s() {
                var s;
                return i.settings.submitHandler ? (i.submitButton && (s = t("<input type='hidden'/>").attr("name", i.submitButton.name).val(t(i.submitButton).val()).appendTo(i.currentForm)), i.settings.submitHandler.call(i, i.currentForm, e), i.submitButton && s.remove(), !1) : !0
            }
            return i.settings.debug && e.preventDefault(), i.cancelSubmit ? (i.cancelSubmit = !1, s()) : i.form() ? i.pendingRequest ? (i.formSubmitted = !0, !1) : s() : (i.focusInvalid(), !1)
        })), i)
    }, valid: function() {
        if (t(this[0]).is("form"))
            return this.validate().form();
        var e = !0, i = t(this[0].form).validate();
        return this.each(function() {
            e = e && i.element(this)
        }), e
    }, removeAttrs: function(e) {
        var i = {}, s = this;
        return t.each(e.split(/\s/), function(t, e) {
            i[e] = s.attr(e), s.removeAttr(e)
        }), i
    }, rules: function(e, i) {
        var s = this[0];
        if (e) {
            var r = t.data(s.form, "validator").settings, n = r.rules, a = t.validator.staticRules(s);
            switch (e) {
                case"add":
                    t.extend(a, t.validator.normalizeRule(i)), delete a.messages, n[s.name] = a, i.messages && (r.messages[s.name] = t.extend(r.messages[s.name], i.messages));
                    break;
                case"remove":
                    if (!i)
                        return delete n[s.name], a;
                    var u = {};
                    return t.each(i.split(/\s/), function(t, e) {
                        u[e] = a[e], delete a[e]
                    }), u
            }
        }
        var o = t.validator.normalizeRules(t.extend({}, t.validator.classRules(s), t.validator.attributeRules(s), t.validator.dataRules(s), t.validator.staticRules(s)), s);
        if (o.required) {
            var l = o.required;
            delete o.required, o = t.extend({required: l}, o)
        }
        return o
    }}), t.extend(t.expr[":"], {blank: function(e) {
        return!t.trim("" + t(e).val())
    }, filled: function(e) {
        return!!t.trim("" + t(e).val())
    }, unchecked: function(e) {
        return!t(e).prop("checked")
    }}), t.validator = function(e, i) {
        this.settings = t.extend(!0, {}, t.validator.defaults, e), this.currentForm = i, this.init()
    }, t.validator.format = function(e, i) {
        return 1 === arguments.length ? function() {
            var i = t.makeArray(arguments);
            return i.unshift(e), t.validator.format.apply(this, i)
        } : (arguments.length > 2 && i.constructor !== Array && (i = t.makeArray(arguments).slice(1)), i.constructor !== Array && (i = [i]), t.each(i, function(t, i) {
            e = e.replace(RegExp("\\{" + t + "\\}", "g"), function() {
                return i
            })
        }), e)
    }, t.extend(t.validator, {defaults: {messages: {}, groups: {}, rules: {}, errorClass: "error", validClass: "valid", errorElement: "label", focusInvalid: !0, errorContainer: t([]), errorLabelContainer: t([]), onsubmit: !0, ignore: ":hidden", ignoreTitle: !1, onfocusin: function(t) {
        this.lastActive = t, this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, t, this.settings.errorClass, this.settings.validClass), this.addWrapper(this.errorsFor(t)).hide())
    }, onfocusout: function(t) {
        this.checkable(t) || !(t.name in this.submitted) && this.optional(t) || this.element(t)
    }, onkeyup: function(t, e) {
        (9 !== e.which || "" !== this.elementValue(t)) && (t.name in this.submitted || t === this.lastElement) && this.element(t)
    }, onclick: function(t) {
        t.name in this.submitted ? this.element(t) : t.parentNode.name in this.submitted && this.element(t.parentNode)
    }, highlight: function(e, i, s) {
        "radio" === e.type ? this.findByName(e.name).addClass(i).removeClass(s) : t(e).addClass(i).removeClass(s)
    }, unhighlight: function(e, i, s) {
        "radio" === e.type ? this.findByName(e.name).removeClass(i).addClass(s) : t(e).removeClass(i).addClass(s)
    }}, setDefaults: function(e) {
        t.extend(t.validator.defaults, e)
    }, messages: {required: "This field is required.", remote: "Please fix this field.", email: "Please enter a valid email address.", url: "Please enter a valid URL.", date: "Please enter a valid date.", dateISO: "Please enter a valid date (ISO).", number: "Please enter a valid number.", digits: "Please enter only digits.", creditcard: "Please enter a valid credit card number.", equalTo: "Please enter the same value again.", maxlength: t.validator.format("Please enter no more than {0} characters."), minlength: t.validator.format("Please enter at least {0} characters."), rangelength: t.validator.format("Please enter a value between {0} and {1} characters long."), range: t.validator.format("Please enter a value between {0} and {1}."), max: t.validator.format("Please enter a value less than or equal to {0}."), min: t.validator.format("Please enter a value greater than or equal to {0}.")}, autoCreateRanges: !1, prototype: {init: function() {
        function e(e) {
            var i = t.data(this[0].form, "validator"), s = "on" + e.type.replace(/^validate/, "");
            i.settings[s] && i.settings[s].call(i, this[0], e)
        }
        this.labelContainer = t(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || t(this.currentForm), this.containers = t(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
        var i = this.groups = {};
        t.each(this.settings.groups, function(e, s) {
            "string" == typeof s && (s = s.split(/\s/)), t.each(s, function(t, s) {
                i[s] = e
            })
        });
        var s = this.settings.rules;
        t.each(s, function(e, i) {
            s[e] = t.validator.normalizeRule(i)
        }), t(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ", "focusin focusout keyup", e).validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", e), this.settings.invalidHandler && t(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler)
    }, form: function() {
        return this.checkForm(), t.extend(this.submitted, this.errorMap), this.invalid = t.extend({}, this.errorMap), this.valid() || t(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
    }, checkForm: function() {
        this.prepareForm();
        for (var t = 0, e = this.currentElements = this.elements(); e[t]; t++)
            this.check(e[t]);
        return this.valid()
    }, element: function(e) {
        e = this.validationTargetFor(this.clean(e)), this.lastElement = e, this.prepareElement(e), this.currentElements = t(e);
        var i = this.check(e) !== !1;
        return i ? delete this.invalid[e.name] : this.invalid[e.name] = !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), i
    }, showErrors: function(e) {
        if (e) {
            t.extend(this.errorMap, e), this.errorList = [];
            for (var i in e)
                this.errorList.push({message: e[i], element: this.findByName(i)[0]});
            this.successList = t.grep(this.successList, function(t) {
                return!(t.name in e)
            })
        }
        this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
    }, resetForm: function() {
        t.fn.resetForm && t(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors(), this.elements().removeClass(this.settings.errorClass).removeData("previousValue")
    }, numberOfInvalids: function() {
        return this.objectLength(this.invalid)
    }, objectLength: function(t) {
        var e = 0;
        for (var i in t)
            e++;
        return e
    }, hideErrors: function() {
        this.addWrapper(this.toHide).hide()
    }, valid: function() {
        return 0 === this.size()
    }, size: function() {
        return this.errorList.length
    }, focusInvalid: function() {
        if (this.settings.focusInvalid)
            try {
                t(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
            } catch (e) {
            }
    }, findLastActive: function() {
        var e = this.lastActive;
        return e && 1 === t.grep(this.errorList, function(t) {
                return t.element.name === e.name
            }).length && e
    }, elements: function() {
        var e = this, i = {};
        return t(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function() {
            return!this.name && e.settings.debug && window.console && console.error("%o has no name assigned", this), this.name in i || !e.objectLength(t(this).rules()) ? !1 : (i[this.name] = !0, !0)
        })
    }, clean: function(e) {
        return t(e)[0]
    }, errors: function() {
        var e = this.settings.errorClass.replace(" ", ".");
        return t(this.settings.errorElement + "." + e, this.errorContext)
    }, reset: function() {
        this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = t([]), this.toHide = t([]), this.currentElements = t([])
    }, prepareForm: function() {
        this.reset(), this.toHide = this.errors().add(this.containers)
    }, prepareElement: function(t) {
        this.reset(), this.toHide = this.errorsFor(t)
    }, elementValue: function(e) {
        var i = t(e).attr("type"), s = t(e).val();
        return"radio" === i || "checkbox" === i ? t("input[name='" + t(e).attr("name") + "']:checked").val() : "string" == typeof s ? s.replace(/\r/g, "") : s
    }, check: function(e) {
        e = this.validationTargetFor(this.clean(e));
        var i, s = t(e).rules(), r = !1, n = this.elementValue(e);
        for (var a in s) {
            var u = {method: a, parameters: s[a]};
            try {
                if (i = t.validator.methods[a].call(this, n, e, u.parameters), "dependency-mismatch" === i) {
                    r = !0;
                    continue
                }
                if (r = !1, "pending" === i)
                    return this.toHide = this.toHide.not(this.errorsFor(e)), void 0;
                if (!i)
                    return this.formatAndAdd(e, u), !1
            } catch (o) {
                throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + e.id + ", check the '" + u.method + "' method.", o), o
            }
        }
        return r ? void 0 : (this.objectLength(s) && this.successList.push(e), !0)
    }, customDataMessage: function(e, i) {
        return t(e).data("msg-" + i.toLowerCase()) || e.attributes && t(e).attr("data-msg-" + i.toLowerCase())
    }, customMessage: function(t, e) {
        var i = this.settings.messages[t];
        return i && (i.constructor === String ? i : i[e])
    }, findDefined: function() {
        for (var t = 0; arguments.length > t; t++)
            if (void 0 !== arguments[t])
                return arguments[t];
        return void 0
    }, defaultMessage: function(e, i) {
        return this.findDefined(this.customMessage(e.name, i), this.customDataMessage(e, i), !this.settings.ignoreTitle && e.title || void 0, t.validator.messages[i], "<strong>Warning: No message defined for " + e.name + "</strong>")
    }, formatAndAdd: function(e, i) {
        var s = this.defaultMessage(e, i.method), r = /\$?\{(\d+)\}/g;
        "function" == typeof s ? s = s.call(this, i.parameters, e) : r.test(s) && (s = t.validator.format(s.replace(r, "{$1}"), i.parameters)), this.errorList.push({message: s, element: e}), this.errorMap[e.name] = s, this.submitted[e.name] = s
    }, addWrapper: function(t) {
        return this.settings.wrapper && (t = t.add(t.parent(this.settings.wrapper))), t
    }, defaultShowErrors: function() {
        var t, e;
        for (t = 0; this.errorList[t]; t++) {
            var i = this.errorList[t];
            this.settings.highlight && this.settings.highlight.call(this, i.element, this.settings.errorClass, this.settings.validClass), this.showLabel(i.element, i.message)
        }
        if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
            for (t = 0; this.successList[t]; t++)
                this.showLabel(this.successList[t]);
        if (this.settings.unhighlight)
            for (t = 0, e = this.validElements(); e[t]; t++)
                this.settings.unhighlight.call(this, e[t], this.settings.errorClass, this.settings.validClass);
        this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
    }, validElements: function() {
        return this.currentElements.not(this.invalidElements())
    }, invalidElements: function() {
        return t(this.errorList).map(function() {
            return this.element
        })
    }, showLabel: function(e, i) {
        var s = this.errorsFor(e);
        s.length ? (s.removeClass(this.settings.validClass).addClass(this.settings.errorClass), s.html(i)) : (s = t("<" + this.settings.errorElement + ">").attr("for", this.idOrName(e)).addClass(this.settings.errorClass).html(i || ""), this.settings.wrapper && (s = s.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.append(s).length || (this.settings.errorPlacement ? this.settings.errorPlacement(s, t(e)) : s.insertAfter(e))), !i && this.settings.success && (s.text(""), "string" == typeof this.settings.success ? s.addClass(this.settings.success) : this.settings.success(s, e)), this.toShow = this.toShow.add(s)
    }, errorsFor: function(e) {
        var i = this.idOrName(e);
        return this.errors().filter(function() {
            return t(this).attr("for") === i
        })
    }, idOrName: function(t) {
        return this.groups[t.name] || (this.checkable(t) ? t.name : t.id || t.name)
    }, validationTargetFor: function(t) {
        return this.checkable(t) && (t = this.findByName(t.name).not(this.settings.ignore)[0]), t
    }, checkable: function(t) {
        return/radio|checkbox/i.test(t.type)
    }, findByName: function(e) {
        return t(this.currentForm).find("[name='" + e + "']")
    }, getLength: function(e, i) {
        switch (i.nodeName.toLowerCase()) {
            case"select":
                return t("option:selected", i).length;
            case"input":
                if (this.checkable(i))
                    return this.findByName(i.name).filter(":checked").length
        }
        return e.length
    }, depend: function(t, e) {
        return this.dependTypes[typeof t] ? this.dependTypes[typeof t](t, e) : !0
    }, dependTypes: {"boolean": function(t) {
        return t
    }, string: function(e, i) {
        return!!t(e, i.form).length
    }, "function": function(t, e) {
        return t(e)
    }}, optional: function(e) {
        var i = this.elementValue(e);
        return!t.validator.methods.required.call(this, i, e) && "dependency-mismatch"
    }, startRequest: function(t) {
        this.pending[t.name] || (this.pendingRequest++, this.pending[t.name] = !0)
    }, stopRequest: function(e, i) {
        this.pendingRequest--, 0 > this.pendingRequest && (this.pendingRequest = 0), delete this.pending[e.name], i && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (t(this.currentForm).submit(), this.formSubmitted = !1) : !i && 0 === this.pendingRequest && this.formSubmitted && (t(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
    }, previousValue: function(e) {
        return t.data(e, "previousValue") || t.data(e, "previousValue", {old: null, valid: !0, message: this.defaultMessage(e, "remote")})
    }}, classRuleSettings: {required: {required: !0}, email: {email: !0}, url: {url: !0}, date: {date: !0}, dateISO: {dateISO: !0}, number: {number: !0}, digits: {digits: !0}, creditcard: {creditcard: !0}}, addClassRules: function(e, i) {
        e.constructor === String ? this.classRuleSettings[e] = i : t.extend(this.classRuleSettings, e)
    }, classRules: function(e) {
        var i = {}, s = t(e).attr("class");
        return s && t.each(s.split(" "), function() {
            this in t.validator.classRuleSettings && t.extend(i, t.validator.classRuleSettings[this])
        }), i
    }, attributeRules: function(e) {
        var i = {}, s = t(e), r = s[0].getAttribute("type");
        for (var n in t.validator.methods) {
            var a;
            "required" === n ? (a = s.get(0).getAttribute(n), "" === a && (a = !0), a = !!a) : a = s.attr(n), /min|max/.test(n) && (null === r || /number|range|text/.test(r)) && (a = Number(a)), a ? i[n] = a : r === n && "range" !== r && (i[n] = !0)
        }
        return i.maxlength && /-1|2147483647|524288/.test(i.maxlength) && delete i.maxlength, i
    }, dataRules: function(e) {
        var i, s, r = {}, n = t(e);
        for (i in t.validator.methods)
            s = n.data("rule-" + i.toLowerCase()), void 0 !== s && (r[i] = s);
        return r
    }, staticRules: function(e) {
        var i = {}, s = t.data(e.form, "validator");
        return s.settings.rules && (i = t.validator.normalizeRule(s.settings.rules[e.name]) || {}), i
    }, normalizeRules: function(e, i) {
        return t.each(e, function(s, r) {
            if (r === !1)
                return delete e[s], void 0;
            if (r.param || r.depends) {
                var n = !0;
                switch (typeof r.depends) {
                    case"string":
                        n = !!t(r.depends, i.form).length;
                        break;
                    case"function":
                        n = r.depends.call(i, i)
                }
                n ? e[s] = void 0 !== r.param ? r.param : !0 : delete e[s]
            }
        }), t.each(e, function(s, r) {
            e[s] = t.isFunction(r) ? r(i) : r
        }), t.each(["minlength", "maxlength"], function() {
            e[this] && (e[this] = Number(e[this]))
        }), t.each(["rangelength", "range"], function() {
            var i;
            e[this] && (t.isArray(e[this]) ? e[this] = [Number(e[this][0]), Number(e[this][1])] : "string" == typeof e[this] && (i = e[this].split(/[\s,]+/), e[this] = [Number(i[0]), Number(i[1])]))
        }), t.validator.autoCreateRanges && (e.min && e.max && (e.range = [e.min, e.max], delete e.min, delete e.max), e.minlength && e.maxlength && (e.rangelength = [e.minlength, e.maxlength], delete e.minlength, delete e.maxlength)), e
    }, normalizeRule: function(e) {
        if ("string" == typeof e) {
            var i = {};
            t.each(e.split(/\s/), function() {
                i[this] = !0
            }), e = i
        }
        return e
    }, addMethod: function(e, i, s) {
        t.validator.methods[e] = i, t.validator.messages[e] = void 0 !== s ? s : t.validator.messages[e], 3 > i.length && t.validator.addClassRules(e, t.validator.normalizeRule(e))
    }, methods: {required: function(e, i, s) {
        if (!this.depend(s, i))
            return"dependency-mismatch";
        if ("select" === i.nodeName.toLowerCase()) {
            var r = t(i).val();
            return r && r.length > 0
        }
        return this.checkable(i) ? this.getLength(e, i) > 0 : t.trim(e).length > 0
    }, email: function(t, e) {
        return this.optional(e) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(t)
    }, url: function(t, e) {
        return this.optional(e) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(t)
    }, date: function(t, e) {
        return this.optional(e) || !/Invalid|NaN/.test("" + new Date(t))
    }, dateISO: function(t, e) {
        return this.optional(e) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(t)
    }, number: function(t, e) {
        return this.optional(e) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t)
    }, digits: function(t, e) {
        return this.optional(e) || /^\d+$/.test(t)
    }, creditcard: function(t, e) {
        if (this.optional(e))
            return"dependency-mismatch";
        if (/[^0-9 \-]+/.test(t))
            return!1;
        var i = 0, s = 0, r = !1;
        t = t.replace(/\D/g, "");
        for (var n = t.length - 1; n >= 0; n--) {
            var a = t.charAt(n);
            s = parseInt(a, 10), r && (s *= 2) > 9 && (s -= 9), i += s, r = !r
        }
        return 0 === i % 10
    }, minlength: function(e, i, s) {
        var r = t.isArray(e) ? e.length : this.getLength(t.trim(e), i);
        return this.optional(i) || r >= s
    }, maxlength: function(e, i, s) {
        var r = t.isArray(e) ? e.length : this.getLength(t.trim(e), i);
        return this.optional(i) || s >= r
    }, rangelength: function(e, i, s) {
        var r = t.isArray(e) ? e.length : this.getLength(t.trim(e), i);
        return this.optional(i) || r >= s[0] && s[1] >= r
    }, min: function(t, e, i) {
        return this.optional(e) || t >= i
    }, max: function(t, e, i) {
        return this.optional(e) || i >= t
    }, range: function(t, e, i) {
        return this.optional(e) || t >= i[0] && i[1] >= t
    }, equalTo: function(e, i, s) {
        var r = t(s);
        return this.settings.onfocusout && r.unbind(".validate-equalTo").bind("blur.validate-equalTo", function() {
            t(i).valid()
        }), e === r.val()
    }, remote: function(e, i, s) {
        if (this.optional(i))
            return"dependency-mismatch";
        var r = this.previousValue(i);
        if (this.settings.messages[i.name] || (this.settings.messages[i.name] = {}), r.originalMessage = this.settings.messages[i.name].remote, this.settings.messages[i.name].remote = r.message, s = "string" == typeof s && {url: s} || s, r.old === e)
            return r.valid;
        r.old = e;
        var n = this;
        this.startRequest(i);
        var a = {};
        return a[i.name] = e, t.ajax(t.extend(!0, {url: s, mode: "abort", port: "validate" + i.name, dataType: "json", data: a, success: function(s) {
            n.settings.messages[i.name].remote = r.originalMessage;
            var a = s === !0 || "true" === s;
            if (a) {
                var u = n.formSubmitted;
                n.prepareElement(i), n.formSubmitted = u, n.successList.push(i), delete n.invalid[i.name], n.showErrors()
            } else {
                var o = {}, l = s || n.defaultMessage(i, "remote");
                o[i.name] = r.message = t.isFunction(l) ? l(e) : l, n.invalid[i.name] = !0, n.showErrors(o)
            }
            r.valid = a, n.stopRequest(i, a)
        }}, s)), "pending"
    }}}), t.format = t.validator.format
})(jQuery), function(t) {
    var e = {};
    if (t.ajaxPrefilter)
        t.ajaxPrefilter(function(t, i, s) {
            var r = t.port;
            "abort" === t.mode && (e[r] && e[r].abort(), e[r] = s)
        });
    else {
        var i = t.ajax;
        t.ajax = function(s) {
            var r = ("mode"in s ? s : t.ajaxSettings).mode, n = ("port"in s ? s : t.ajaxSettings).port;
            return"abort" === r ? (e[n] && e[n].abort(), e[n] = i.apply(this, arguments), e[n]) : i.apply(this, arguments)
        }
    }
}(jQuery), function(t) {
    t.extend(t.fn, {validateDelegate: function(e, i, s) {
        return this.bind(i, function(i) {
            var r = t(i.target);
            return r.is(e) ? s.apply(r, arguments) : void 0
        })
    }})
}(jQuery);

/* Placeholders.js v3.0.2 */
(function(t) {
    "use strict";
    function e(t, e, r) {
        return t.addEventListener ? t.addEventListener(e, r, !1) : t.attachEvent ? t.attachEvent("on" + e, r) : void 0
    }
    function r(t, e) {
        var r, n;
        for (r = 0, n = t.length; n > r; r++)
            if (t[r] === e)
                return!0;
        return!1
    }
    function n(t, e) {
        var r;
        t.createTextRange ? (r = t.createTextRange(), r.move("character", e), r.select()) : t.selectionStart && (t.focus(), t.setSelectionRange(e, e))
    }
    function a(t, e) {
        try {
            return t.type = e, !0
        } catch (r) {
            return!1
        }
    }
    t.Placeholders = {Utils: {addEventListener: e, inArray: r, moveCaret: n, changeType: a}}
})(this), function(t) {
    "use strict";
    function e() {
    }
    function r() {
        try {
            return document.activeElement
        } catch (t) {
        }
    }
    function n(t, e) {
        var r, n, a = !!e && t.value !== e, u = t.value === t.getAttribute(V);
        return(a || u) && "true" === t.getAttribute(D) ? (t.removeAttribute(D), t.value = t.value.replace(t.getAttribute(V), ""), t.className = t.className.replace(R, ""), n = t.getAttribute(F), parseInt(n, 10) >= 0 && (t.setAttribute("maxLength", n), t.removeAttribute(F)), r = t.getAttribute(P), r && (t.type = r), !0) : !1
    }
    function a(t) {
        var e, r, n = t.getAttribute(V);
        return"" === t.value && n ? (t.setAttribute(D, "true"), t.value = n, t.className += " " + I, r = t.getAttribute(F), r || (t.setAttribute(F, t.maxLength), t.removeAttribute("maxLength")), e = t.getAttribute(P), e ? t.type = "text" : "password" === t.type && M.changeType(t, "text") && t.setAttribute(P, "password"), !0) : !1
    }
    function u(t, e) {
        var r, n, a, u, i, l, o;
        if (t && t.getAttribute(V))
            e(t);
        else
            for (a = t?t.getElementsByTagName("input"):b, u = t?t.getElementsByTagName("textarea"):f, r = a?a.length:0, n = u?u.length:0, o = 0, l = r + n; l > o; o++)
                i = r > o ? a[o] : u[o - r], e(i)
    }
    function i(t) {
        u(t, n)
    }
    function l(t) {
        u(t, a)
    }
    function o(t) {
        return function() {
            m && t.value === t.getAttribute(V) && "true" === t.getAttribute(D) ? M.moveCaret(t, 0) : n(t)
        }
    }
    function c(t) {
        return function() {
            a(t)
        }
    }
    function s(t) {
        return function(e) {
            return A = t.value, "true" === t.getAttribute(D) && A === t.getAttribute(V) && M.inArray(C, e.keyCode) ? (e.preventDefault && e.preventDefault(), !1) : void 0
        }
    }
    function d(t) {
        return function() {
            n(t, A), "" === t.value && (t.blur(), M.moveCaret(t, 0))
        }
    }
    function g(t) {
        return function() {
            t === r() && t.value === t.getAttribute(V) && "true" === t.getAttribute(D) && M.moveCaret(t, 0)
        }
    }
    function v(t) {
        return function() {
            i(t)
        }
    }
    function p(t) {
        t.form && (T = t.form, "string" == typeof T && (T = document.getElementById(T)), T.getAttribute(U) || (M.addEventListener(T, "submit", v(T)), T.setAttribute(U, "true"))), M.addEventListener(t, "focus", o(t)), M.addEventListener(t, "blur", c(t)), m && (M.addEventListener(t, "keydown", s(t)), M.addEventListener(t, "keyup", d(t)), M.addEventListener(t, "click", g(t))), t.setAttribute(j, "true"), t.setAttribute(V, x), (m || t !== r()) && a(t)
    }
    var b, f, m, h, A, y, E, x, L, T, N, S, w, B = ["text", "search", "url", "tel", "email", "password", "number", "textarea"], C = [27, 33, 34, 35, 36, 37, 38, 39, 40, 8, 46], k = "#ccc", I = "placeholdersjs", R = RegExp("(?:^|\\s)" + I + "(?!\\S)"), V = "data-placeholder-value", D = "data-placeholder-active", P = "data-placeholder-type", U = "data-placeholder-submit", j = "data-placeholder-bound", q = "data-placeholder-focus", z = "data-placeholder-live", F = "data-placeholder-maxlength", G = document.createElement("input"), H = document.getElementsByTagName("head")[0], J = document.documentElement, K = t.Placeholders, M = K.Utils;
    if (K.nativeSupport = void 0 !== G.placeholder, !K.nativeSupport) {
        for (b = document.getElementsByTagName("input"), f = document.getElementsByTagName("textarea"), m = "false" === J.getAttribute(q), h = "false" !== J.getAttribute(z), y = document.createElement("style"), y.type = "text/css", E = document.createTextNode("." + I + " { color:" + k + "; }"), y.styleSheet?y.styleSheet.cssText = E.nodeValue:y.appendChild(E), H.insertBefore(y, H.firstChild), w = 0, S = b.length + f.length; S > w; w++)
            N = b.length > w ? b[w] : f[w - b.length], x = N.attributes.placeholder, x && (x = x.nodeValue, x && M.inArray(B, N.type) && p(N));
        L = setInterval(function() {
            for (w = 0, S = b.length + f.length; S > w; w++)
                N = b.length > w ? b[w] : f[w - b.length], x = N.attributes.placeholder, x ? (x = x.nodeValue, x && M.inArray(B, N.type) && (N.getAttribute(j) || p(N), (x !== N.getAttribute(V) || "password" === N.type && !N.getAttribute(P)) && ("password" === N.type && !N.getAttribute(P) && M.changeType(N, "text") && N.setAttribute(P, "password"), N.value === N.getAttribute(V) && (N.value = x), N.setAttribute(V, x)))) : N.getAttribute(D) && (n(N), N.removeAttribute(V));
            h || clearInterval(L)
        }, 100)
    }
    M.addEventListener(t, "beforeunload", function() {
        K.disable()
    }), K.disable = K.nativeSupport ? e : i, K.enable = K.nativeSupport ? e : l
}(this);

