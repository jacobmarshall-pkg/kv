!function(){"use strict";function n(){return t||(t=new Promise(function(n,e){var t=indexedDB.open(r,1);t.onerror=function(){e(t.error)},t.onupgradeneeded=function(){t.result.createObjectStore(o)},t.onsuccess=function(){n(t.result)}})),t}function e(e,t){return n().then(function(n){return new Promise(function(r,u){var c=n.transaction(o,e);c.oncomplete=function(){r()},c.onerror=function(){u(c.error)},t(c.objectStore(o))})})}var t,r="kv",o="kv",u="readonly",c="readwrite",i={get:function(n){var t;return e(u,function(e){t=e.get(n)}).then(function(){return t.result})},set:function(n,t){return e(c,function(e){e.put(t,n)})},remove:function(n){return e(c,function(e){e.delete(n)})},clear:function(){return e(c,function(n){n.clear()})},keys:function(){var n=[];return e(u,function(e){(e.openKeyCursor||e.openCursor).call(e).onsuccess=function(){this.result&&(n.push(this.result.key),this.result.continue())}}).then(function(){return n})}};"undefined"!=typeof module&&module.exports?module.exports=i:"function"==typeof define&&define.amd?define("kv",[],function(){return i}):self.kv=i}();