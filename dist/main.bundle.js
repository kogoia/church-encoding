!function(n){var r={};function t(e){if(r[e])return r[e].exports;var u=r[e]={i:e,l:!1,exports:{}};return n[e].call(u.exports,u,u.exports,t),u.l=!0,u.exports}t.m=n,t.c=r,t.d=function(n,r,e){t.o(n,r)||Object.defineProperty(n,r,{configurable:!1,enumerable:!0,get:e})},t.r=function(n){Object.defineProperty(n,"__esModule",{value:!0})},t.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(r,"a",r),r},t.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},t.p="",t(t.s=1)}([function(n,r,t){"use strict";n.exports={Zero:function(n){return function(n){return n}},One:function(n){return function(r){return n(r)}},Two:function(n){return function(r){return n(n(r))}},Three:function(n){return function(r){return n(n(n(r)))}},Four:function(n){return function(r){return n(n(n(n(r))))}},Five:function(n){return function(r){return n(n(n(n(n(r)))))}},Six:function(n){return function(r){return n(n(n(n(n(n(r))))))}},Seven:function(n){return function(r){return n(n(n(n(n(n(n(r)))))))}},Eight:function(n){return function(r){return n(n(n(n(n(n(n(n(r))))))))}},Nine:function(n){return function(r){return n(n(n(n(n(n(n(n(n(r)))))))))}},decodeNumber:function(n){return n(function(n){return n+1})(0)}}},function(n,r,t){"use strict";var e,u=(e=t(0))&&e.__esModule?e:{default:e};console.log(u.default.Zero)}]);