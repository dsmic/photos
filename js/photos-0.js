(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{257:function(n,t,e){"use strict";var i=e(61),o=e.n(i);function a(n,t,e,i,o,a,r){try{var s=n[a](r),c=s.value}catch(n){return void e(n)}s.done?t(c):Promise.resolve(c).then(i,o)}t.a=function(n){var t=o.a.CancelToken.source();return{request:function(){var e,i=(e=regeneratorRuntime.mark((function e(i,o){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n(i,Object.assign({cancelToken:t.token},o)));case 1:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(i,o){var r=e.apply(n,t);function s(n){a(r,i,o,s,c,"next",n)}function c(n){a(r,i,o,s,c,"throw",n)}s(void 0)}))});return function(n,t){return i.apply(this,arguments)}}(),cancel:t.cancel}}},302:function(n,t,e){"use strict";function i(n,t,e,i,o,a,r){try{var s=n[a](r),c=s.value}catch(n){return void e(n)}s.done?t(c):Promise.resolve(c).then(i,o)}var o={name:"EmptyContent",props:{illustrationName:{type:String,default:""}},data:function(){return{illustration:""}},computed:{haveIllustration:function(){return""!==this.illustrationName},isLoaded:function(){return!this.haveIllustration||""!==this.illustration},isReady:function(){return!this.haveIllustration||this.haveIllustration&&this.isLoaded}},watch:{illustrationName:function(){this.getIllustration()}},beforeMount:function(){this.getIllustration()},methods:{getIllustration:function(){var n,t=this;return(n=regeneratorRuntime.mark((function n(){var i;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.illustration="",""===t.illustrationName){n.next=12;break}return n.prev=2,n.next=5,e(537)("./".concat(t.illustrationName,".svg"));case 5:i=n.sent,t.illustration=i.default,n.next=12;break;case 9:n.prev=9,n.t0=n.catch(2),console.error("Could not get the error illustration",n.t0);case 12:case"end":return n.stop()}}),n,null,[[2,9]])})),function(){var t=this,e=arguments;return new Promise((function(o,a){var r=n.apply(t,e);function s(n){i(r,o,a,s,c,"next",n)}function c(n){i(r,o,a,s,c,"throw",n)}s(void 0)}))})()}}},a=(e(538),e(43)),r=Object(a.a)(o,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return n.isReady?e("div",{staticClass:"emptycontent"},[n.haveIllustration?e("div",{staticClass:"illustration",domProps:{innerHTML:n._s(n.illustration)}}):e("div",{staticClass:"icon-error"}),n._v(" "),e("h2",[n._t("default")],2),n._v(" "),e("p",{directives:[{name:"show",rawName:"v-show",value:n.$slots.desc,expression:"$slots.desc"}]},[n._t("desc")],2)]):n._e()}),[],!1,null,null,null);t.a=r.exports},303:function(n,e,i){"use strict";var o=i(13),a=i(24);function r(n,t,e,i,o,a,r){try{var s=n[a](r),c=s.value}catch(n){return void e(n)}s.done?t(c):Promise.resolve(c).then(i,o)}function s(n){return function(){var t=this,e=arguments;return new Promise((function(i,o){var a=n.apply(t,e);function s(n){r(a,i,o,s,c,"next",n)}function c(n){r(a,i,o,s,c,"throw",n)}s(void 0)}))}}var c={name:"File",mixins:[i(150).a],inheritAttrs:!1,props:{item:{type:Object,required:!0}},data:function(){return{loaded:!1,error:!1}},computed:{davPath:function(){return Object(o.generateRemoteUrl)("dav/files/".concat(Object(a.getCurrentUser)().uid))+this.item.injected.filename},ariaUuid:function(){return"image-".concat(this.item.injected.fileid)},ariaLabel:function(){return t("photos",'Open the full size "{name}" image',{name:this.item.injected.basename})},isImage:function(){return this.item.injected.mime.startsWith("image")},src:function(){return Object(o.generateUrl)("/core/preview?fileId=".concat(this.item.injected.fileid,"&x=",256,"&y=",256,"&a=").concat(!this.croppedLayout,"&v=").concat(this.item.injected.etag))}},beforeDestroy:function(){this.$refs.src=""},methods:{openViewer:function(){var n=this;OCA.Viewer.open({path:this.item.injected.filename,list:this.item.injected.list,loadMore:this.item.injected.loadMore?s(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.item.injected.loadMore(!0);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))):function(){return[]},canLoop:this.item.injected.canLoop})},onLoad:function(){this.loaded=!0},onError:function(){this.error=!0}}},d=(i(542),i(43)),l=Object(d.a)(c,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("a",{staticClass:"file",class:{"file--cropped":n.croppedLayout},attrs:{href:n.davPath,"aria-label":n.ariaLabel},on:{click:function(t){return t.preventDefault(),n.openViewer(t)}}},[n.item.injected.mime.includes("video")&&n.item.injected.hasPreview?e("div",{staticClass:"icon-video-white"}):n._e(),n._v(" "),e("transition-group",{staticClass:"transition-group",attrs:{name:"fade"}},[n.error?n._e():e("img",{key:n.item.injected.basename+"-img",ref:"img",attrs:{src:n.src,alt:n.item.injected.basename,"aria-describedby":n.ariaUuid},on:{load:n.onLoad,error:n.onError}}),n._v(" "),!n.loaded||n.error?e("svg",{key:n.item.injected.basename+"-svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"url(#placeholder__gradient)"}},[n.isImage?e("use",{attrs:{"xlink:href":"#placeholder--img"}}):e("use",{attrs:{"xlink:href":"#placeholder--video"}})]):n._e()]),n._v(" "),e("p",{staticClass:"hidden-visually",attrs:{id:n.ariaUuid}},[n._v(n._s(n.item.injected.basename))]),n._v(" "),e("div",{staticClass:"cover",attrs:{role:"none"}})],1)}),[],!1,null,"6d0d8c3b",null);e.a=l.exports},304:function(n,e,i){"use strict";var o=i(544),a=i.n(o),r=i(545),s={name:"Navigation",components:{ActionButton:i.n(r).a,Actions:a.a},inheritAttrs:!1,props:{basename:{type:String,required:!0},filename:{type:String,required:!0},showActions:{type:Boolean,default:!1},rootTitle:{type:String,default:t("photos","Photos")}},computed:{isRoot:function(){return"/"===this.filename},name:function(){return this.isRoot?this.rootTitle:this.basename},parentPath:function(){var n=this.filename.split("/");n.pop();var t=n.join("/");return this.isRoot||""===t.trim()?"/":n.join("/")},parentName:function(){return this.parentPath&&this.parentPath.split("/").pop()},backToText:function(){return"/"===this.parentPath?t("photos","Back to {folder}",{folder:this.rootTitle}):t("photos","Back to {folder}",{folder:this.parentName})},to:function(){var n=/^\/?(.*)/i.exec(this.parentPath)[1],t=Object.assign({},this.$route,{params:{path:n}}),e=t.name,i=t.params;return""===n?{name:e}:decodeURIComponent(this.$router.resolve({name:e,params:i}).resolved.path)}},methods:{folderUp:function(){this.$router.push(this.to)},showSidebar:function(){OCA.Files.Sidebar.open(this.filename)}}},c=(i(546),i(43)),d=Object(c.a)(s,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"photos-navigation",class:{"photos-navigation--root":n.isRoot},attrs:{role:"toolbar"}},[n.isRoot?n._e():e("Actions",{staticClass:"photos-navigation__back"},[e("ActionButton",{attrs:{icon:"icon-confirm"},on:{click:n.folderUp}},[n._v("\n\t\t\t"+n._s(n.backToText)+"\n\t\t")])],1),n._v(" "),e("h2",{staticClass:"photos-navigation__title"},[n._v("\n\t\t"+n._s(n.name)+"\n\t")]),n._v(" "),!n.isRoot&&n.showActions?e("Actions",{staticClass:"photos-navigation__share"},[e("ActionButton",{attrs:{icon:"icon-shared"},on:{click:n.showSidebar}},[n._v("\n\t\t\t"+n._s(n.t("photos","Share this folder"))+"\n\t\t")])],1):n._e()],1)}),[],!1,null,"4c3113d6",null);e.a=d.exports},306:function(n,t,e){"use strict";var i=e(2),o=e(311),a=new i.default({data:function(){return{gridConfig:o.sizes.max}},watch:{gridConfig:function(n){this.$emit("changed",n)}},created:function(){window.addEventListener("resize",this.handleWindowResize),this.handleWindowResize()},beforeDestroy:function(){window.removeEventListener("resize",this.handleWindowResize)},methods:{handleWindowResize:function(){var n=Object.keys(o.sizes).find((function(n){return n>document.documentElement.clientWidth}));this.gridConfig=o.sizes[n]}}});t.a={data:function(){return{gridConfig:{}}},created:function(){var n=this;a.$on("changed",(function(t){n.gridConfig=t})),console.debug("[".concat("photos","]"),"Grid config",Object.assign({},a.gridConfig)),this.gridConfig=a.gridConfig},beforeDestroy:function(){a.$off("changed",this.gridConfig)}}},307:function(n,t,e){var i=e(159),o=e(539);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var a={insert:"head",singleton:!1};i(o,a);n.exports=o.locals||{}},309:function(n,t,e){var i=e(159),o=e(543);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var a={insert:"head",singleton:!1};i(o,a);n.exports=o.locals||{}},310:function(n,t,e){var i=e(159),o=e(547);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var a={insert:"head",singleton:!1};i(o,a);n.exports=o.locals||{}},311:function(n,t){n.exports={sizes:{400:{marginTop:66,marginW:8,count:3,gap:8},700:{marginTop:66,marginW:8,count:4,gap:8},1024:{marginTop:66,marginW:44,count:5,gap:8},1280:{marginTop:66,marginW:44,count:4,gap:8},1440:{marginTop:88,marginW:66,count:5,gap:8},1600:{marginTop:88,marginW:66,count:6,gap:8},2048:{marginTop:88,marginW:66,count:7,gap:8},2560:{marginTop:88,marginW:88,count:8,gap:8},3440:{marginTop:88,marginW:88,count:9,gap:8},max:{marginTop:88,marginW:88,count:10,gap:8}}}},537:function(n,t,e){var i={"./empty.svg":[696,8],"./folder.svg":[697,9],"./images.svg":[698,10]};function o(n){if(!e.o(i,n))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=i[n],o=t[0];return e.e(t[1]).then((function(){return e(o)}))}o.keys=function(){return Object.keys(i)},o.id=537,n.exports=o},538:function(n,t,e){"use strict";e(307)},539:function(n,t,e){"use strict";e.r(t);var i=e(90),o=e.n(i)()(!0);o.push([n.i,".emptycontent{grid-column:1/-1;margin-top:20vh}.illustration{min-width:200px;max-width:15%;width:300px;margin:auto;margin-bottom:20px;position:relative}.illustration svg{width:100%;height:100%;max-height:40vh}.illustration [fill*='6c63ff']{fill:var(--color-primary-element)}\n","",{version:3,sources:["webpack://src/components/EmptyContent.vue"],names:[],mappings:"AAkHA,cAEC,gBAAiB,CACjB,eAAgB,CAChB,cAGA,eAAgB,CAChB,aAAc,CACd,WAAY,CACZ,WAAY,CACZ,kBAAmB,CACnB,iBAAkB,CANnB,kBASE,UAAW,CACX,WAAY,CACZ,eAAgB,CAXlB,+BAgBE,iCAAkC",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.emptycontent {\n\t// span all the available columns\n\tgrid-column: 1/-1;\n\tmargin-top: 20vh;\n}\n\n.illustration {\n\tmin-width: 200px;\n\tmax-width: 15%;\n\twidth: 300px;\n\tmargin: auto;\n\tmargin-bottom: 20px;\n\tposition: relative;\n\n\tsvg {\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tmax-height: 40vh;\n\t}\n\n\t// change colour of illustration\n\t[fill*='6c63ff'] {\n\t\tfill: var(--color-primary-element);\n\t}\n}\n"],sourceRoot:""}]),t.default=o},542:function(n,t,e){"use strict";e(309)},543:function(n,t,e){"use strict";e.r(t);var i=e(90),o=e.n(i)()(!0);o.push([n.i,".file[data-v-6d0d8c3b],.folder[data-v-6d0d8c3b]{position:relative;display:flex;align-items:center;justify-content:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:var(--border-radius);overflow:hidden}.file .cover[data-v-6d0d8c3b],.folder .cover[data-v-6d0d8c3b]{z-index:2;width:100%;padding-bottom:100%;transition:opacity var(--animation-quick) ease-in-out;opacity:0;background-color:var(--color-main-text)}.file.active .cover[data-v-6d0d8c3b],.file:active .cover[data-v-6d0d8c3b],.file:hover .cover[data-v-6d0d8c3b],.file:focus .cover[data-v-6d0d8c3b],.folder.active .cover[data-v-6d0d8c3b],.folder:active .cover[data-v-6d0d8c3b],.folder:hover .cover[data-v-6d0d8c3b],.folder:focus .cover[data-v-6d0d8c3b]{opacity:.3}.file--clear.active .cover[data-v-6d0d8c3b],.file--clear:active .cover[data-v-6d0d8c3b],.file--clear:hover .cover[data-v-6d0d8c3b],.file--clear:focus .cover[data-v-6d0d8c3b],.folder--clear.active .cover[data-v-6d0d8c3b],.folder--clear:active .cover[data-v-6d0d8c3b],.folder--clear:hover .cover[data-v-6d0d8c3b],.folder--clear:focus .cover[data-v-6d0d8c3b]{opacity:.1}.fade-enter-active[data-v-6d0d8c3b],.fade-leave-active[data-v-6d0d8c3b]{transition:opacity var(--animation-quick) ease-in-out}.fade-enter[data-v-6d0d8c3b],.fade-leave-to[data-v-6d0d8c3b]{opacity:0}.transition-group[data-v-6d0d8c3b]{display:contents}.icon-video-white[data-v-6d0d8c3b]{position:absolute;top:10px;right:10px;z-index:5}img[data-v-6d0d8c3b]{position:absolute;width:100%;height:100%;z-index:10;color:transparent;-o-object-fit:contain;object-fit:contain}.file--cropped img[data-v-6d0d8c3b]{-o-object-fit:cover;object-fit:cover}svg[data-v-6d0d8c3b]{position:absolute;width:70%;height:70%}\n","",{version:3,sources:["webpack://src/mixins/FileFolder.scss","webpack://src/components/File.vue"],names:[],mappings:"AAsBA,gDAEC,iBAAkB,CAClB,YAAa,CACb,kBAAmB,CACnB,sBAAuB,CACvB,wBAAiB,CAAjB,qBAAiB,CAAjB,oBAAiB,CAAjB,gBAAiB,CACjB,kCAAmC,CACnC,eAAgB,CARjB,8DAWE,SAAU,CAMV,UAAW,CACX,mBAAoB,CACpB,qDAAsD,CACtD,SAAU,CACV,uCAAwC,CArB1C,4SA6BG,UAAW,CACX,oWAQA,UAAW,CACX,wEAKF,qDAAsD,CACtD,6DAGA,SAAU,CC8DX,mCACC,gBAAiB,CACjB,mCAGA,iBAAkB,CAClB,QAAS,CACT,UAAW,CACX,SAAU,CACV,qBAGA,iBAAkB,CAClB,UAAW,CACX,WAAY,CACZ,UAAW,CAEX,iBAAkB,CAElB,qBAAY,CAAZ,kBAAmB,CAEnB,oCACC,mBAAY,CAAZ,gBAAiB,CACjB,qBAID,iBAAkB,CAClB,SAAU,CACV,UAAW",sourcesContent:["/**\n * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @author John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @license GNU AGPL version 3 or any later version\n *\n * This program is free software: you can redistribute it and/or modify\n * it under the terms of the GNU Affero General Public License as\n * published by the Free Software Foundation, either version 3 of the\n * License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the\n * GNU Affero General Public License for more details.\n *\n * You should have received a copy of the GNU Affero General Public License\n * along with this program. If not, see <http://www.gnu.org/licenses/>.\n *\n */\n\n.file,\n.folder {\n\tposition: relative;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tuser-select: none;\n\tborder-radius: var(--border-radius);\n\toverflow: hidden;\n\n\t.cover {\n\t\tz-index: 2;\n\t\t// We want nice squares despite anything that is in it.\n\t\t// The .cover is what makes the exact square size of the grid.\n\t\t// We use padding-bottom because padding with percentage\n\t\t// always refers to the width. And we only want to fit\n\t\t// the css grid's width.\n\t\twidth: 100%;\n\t\tpadding-bottom: 100%;\n\t\ttransition: opacity var(--animation-quick) ease-in-out;\n\t\topacity: 0;\n\t\tbackground-color: var(--color-main-text);\n\t}\n\n\t&.active,\n\t&:active,\n\t&:hover,\n\t&:focus {\n\t\t.cover {\n\t\t\topacity: .3;\n\t\t}\n\t}\n\n\t&--clear.active,\n\t&--clear:active,\n\t&--clear:hover,\n\t&--clear:focus {\n\t\t.cover {\n\t\t\topacity: .1;\n\t\t}\n\t}\n}\n\n.fade-enter-active, .fade-leave-active {\n\ttransition: opacity var(--animation-quick) ease-in-out;\n}\n\n.fade-enter, .fade-leave-to {\n\topacity: 0;\n}\n","\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@import '../mixins/FileFolder.scss';\n\n.transition-group {\n\tdisplay: contents;\n}\n\n.icon-video-white {\n\tposition: absolute;\n\ttop: 10px;\n\tright: 10px;\n\tz-index: 5;\n}\n\nimg {\n\tposition: absolute;\n\twidth: 100%;\n\theight: 100%;\n\tz-index: 10;\n\n\tcolor: transparent; // should be diplayed on error\n\n\tobject-fit: contain;\n\n\t.file--cropped & {\n\t\tobject-fit: cover;\n\t}\n}\n\nsvg {\n\tposition: absolute;\n\twidth: 70%;\n\theight: 70%;\n}\n"],sourceRoot:""}]),t.default=o},546:function(n,t,e){"use strict";e(310)},547:function(n,t,e){"use strict";e.r(t);var i=e(90),o=e.n(i)()(!0);o.push([n.i,".icon-confirm[data-v-4c3113d6]{transform:rotate(180deg)}.photos-navigation[data-v-4c3113d6]{display:flex;position:block;height:44px;padding:0 40px;align-items:center;max-width:100%}.photos-navigation__title[data-v-4c3113d6]{margin:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.photos-navigation__share[data-v-4c3113d6]{margin-left:10px}.photos-navigation__back[data-v-4c3113d6],.photos-navigation__share[data-v-4c3113d6]{flex-grow:0;flex-shrink:0}@media (min-width: 0px) and (max-width: 400px){.photos-navigation[data-v-4c3113d6]{top:14.66667px}.photos-navigation--root .photos-navigation__title[data-v-4c3113d6]{padding-left:-36px}}@media (min-width: 400px) and (max-width: 700px){.photos-navigation[data-v-4c3113d6]{top:14.66667px}.photos-navigation--root .photos-navigation__title[data-v-4c3113d6]{padding-left:-36px}}@media (min-width: 700px) and (max-width: 1024px){.photos-navigation[data-v-4c3113d6]{top:14.66667px}.photos-navigation__back[data-v-4c3113d6]{margin:0 0px}.photos-navigation--root .photos-navigation__title[data-v-4c3113d6]{padding-left:0px}}@media (min-width: 1024px) and (max-width: 1280px){.photos-navigation[data-v-4c3113d6]{top:14.66667px}.photos-navigation__back[data-v-4c3113d6]{margin:0 0px}.photos-navigation--root .photos-navigation__title[data-v-4c3113d6]{padding-left:0px}}@media (min-width: 1280px) and (max-width: 1440px){.photos-navigation[data-v-4c3113d6]{top:29.33333px}.photos-navigation__back[data-v-4c3113d6]{margin:0 11px}.photos-navigation--root .photos-navigation__title[data-v-4c3113d6]{padding-left:22px}}@media (min-width: 1440px) and (max-width: 1600px){.photos-navigation[data-v-4c3113d6]{top:29.33333px}.photos-navigation__back[data-v-4c3113d6]{margin:0 11px}.photos-navigation--root .photos-navigation__title[data-v-4c3113d6]{padding-left:22px}}@media (min-width: 1600px) and (max-width: 2048px){.photos-navigation[data-v-4c3113d6]{top:29.33333px}.photos-navigation__back[data-v-4c3113d6]{margin:0 11px}.photos-navigation--root .photos-navigation__title[data-v-4c3113d6]{padding-left:22px}}@media (min-width: 2048px) and (max-width: 2560px){.photos-navigation[data-v-4c3113d6]{top:29.33333px}.photos-navigation__back[data-v-4c3113d6]{margin:0 22px}.photos-navigation--root .photos-navigation__title[data-v-4c3113d6]{padding-left:44px}}@media (min-width: 2560px) and (max-width: 3440px){.photos-navigation[data-v-4c3113d6]{top:29.33333px}.photos-navigation__back[data-v-4c3113d6]{margin:0 22px}.photos-navigation--root .photos-navigation__title[data-v-4c3113d6]{padding-left:44px}}@media (min-width: 3440px){.photos-navigation[data-v-4c3113d6]{top:29.33333px}.photos-navigation__back[data-v-4c3113d6]{margin:0 22px}.photos-navigation--root .photos-navigation__title[data-v-4c3113d6]{padding-left:44px}}\n","",{version:3,sources:["webpack://src/components/Navigation.vue"],names:[],mappings:"AAiJA,+BACC,wBAAyB,CACzB,oCAGA,YAAa,CACb,cAAe,CACf,WAAY,CACZ,cAAe,CACf,kBAAmB,CACnB,cAAe,CACf,2CACC,QAAS,CACT,kBAAmB,CACnB,eAAgB,CAChB,sBAAuB,CACvB,2CAEA,gBAAiB,CACjB,qFAGA,WAAY,CACZ,aAAc,CACd,+CAmBA,oCAEC,cAAgC,CAOhC,oEACC,kBAAc,CACd,CAZH,iDACC,oCAEC,cAAgC,CAOhC,oEACC,kBAAc,CACd,CAZH,kDACC,oCAEC,cAAgC,CAG/B,0CACC,YAAiC,CACjC,oEAGD,gBAAc,CACd,CAZH,mDACC,oCAEC,cAAgC,CAG/B,0CACC,YAAiC,CACjC,oEAGD,gBAAc,CACd,CAZH,mDACC,oCAEC,cAAgC,CAG/B,0CACC,aAAiC,CACjC,oEAGD,iBAAc,CACd,CAZH,mDACC,oCAEC,cAAgC,CAG/B,0CACC,aAAiC,CACjC,oEAGD,iBAAc,CACd,CAZH,mDACC,oCAEC,cAAgC,CAG/B,0CACC,aAAiC,CACjC,oEAGD,iBAAc,CACd,CAZH,mDACC,oCAEC,cAAgC,CAG/B,0CACC,aAAiC,CACjC,oEAGD,iBAAc,CACd,CAZH,mDACC,oCAEC,cAAgC,CAG/B,0CACC,aAAiC,CACjC,oEAGD,iBAAc,CACd,CAZH,2BACC,oCAEC,cAAgC,CAG/B,0CACC,aAAiC,CACjC,oEAGD,iBAAc,CACd",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.icon-confirm {\n\ttransform: rotate(180deg)\n}\n\n.photos-navigation {\n\tdisplay: flex;\n\tposition: block;\n\theight: 44px;\n\tpadding: 0 40px;\n\talign-items: center;\n\tmax-width: 100%;\n\t&__title {\n\t\tmargin: 0;\n\t\twhite-space: nowrap;\n\t\toverflow: hidden;\n\t\ttext-overflow: ellipsis;\n\t}\n\t&__share {\n\t\tmargin-left: 10px;\n\t}\n\t&__back,\n\t&__share {\n\t\tflex-grow: 0;\n\t\tflex-shrink: 0;\n\t}\n}\n\n// generate variants based on grid sizes\n// TODO: use mixins/GridSizes as soon as node-sass supports it\n// needs node-sass 5.0 (with libsass 3.6)\n// https://github.com/sass/node-sass/pull/2312\n$previous: 0;\n@each $size, $config in get('sizes') {\n\t$marginTop: map-get($config, 'marginTop');\n\t$marginW: map-get($config, 'marginW');\n\n\t// if this is the last entry, only use min-width\n\t$rule: '(min-width: #{$previous}px) and (max-width: #{$size}px)';\n\t@if $size == 'max' {\n\t\t$rule: '(min-width: #{$previous}px)';\n\t}\n\n\t@media #{$rule} {\n\t\t.photos-navigation {\n\t\t\t// we space this with 2/3 margin top, 1/3 margin bottom\n\t\t\ttop: ($marginTop - 44px) * 2 / 3;\n\t\t\t// padding-left: $marginW;\n\t\t\t@if $marginW >= 44px {\n\t\t\t\t&__back {\n\t\t\t\t\tmargin: 0 (($marginW - 44px) / 2);\n\t\t\t\t}\n\t\t\t}\n\t\t\t&--root &__title {\n\t\t\t\tpadding-left: #{$marginW - 44}px;\n\t\t\t}\n\t\t}\n\t}\n\t$previous: $size;\n}\n"],sourceRoot:""}]),t.default=o}}]);
//# sourceMappingURL=photos-0.js.map?v=e1985ce45799716221b9