(function(e){function t(t){for(var n,r,i=t[0],s=t[1],l=t[2],u=0,d=[];u<i.length;u++)r=i[u],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&d.push(c[r][0]),c[r]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);b&&b(t);while(d.length)d.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,i=1;i<a.length;i++){var s=a[i];0!==c[s]&&(n=!1)}n&&(o.splice(t--,1),e=r(r.s=a[0]))}return e}var n={},c={app:0},o=[];function r(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=n,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var b=s;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"114a":function(e,t,a){},3068:function(e,t,a){},"3d7d":function(e,t,a){"use strict";a("114a")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("7a23");function c(e,t,a,c,o,r){var i=Object(n["p"])("table-lite");return Object(n["j"])(),Object(n["d"])(i,{"has-checkbox":!0,"is-loading":e.table.isLoading,"is-re-search":e.table.isReSearch,columns:e.table.columns,rows:e.table.rows,total:e.table.totalRecordCount,sortable:e.table.sortable,messages:e.table.messages,"onDo-search":e.doSearch,"onIs-finished":e.tableLoadingFinish,"onReturn-checked-rows":e.updateCheckedRows},null,8,["is-loading","is-re-search","columns","rows","total","sortable","messages","onDo-search","onIs-finished","onReturn-checked-rows"])}a("4160"),a("b0c0"),a("159b");var o=Object(n["v"])("data-v-ce6f6068");Object(n["l"])("data-v-ce6f6068");var r={class:"card"},i={key:0,class:"card-header"},s={class:"card-body"},l=Object(n["f"])("p",{class:"card-title"},null,-1),b={id:"dataTables-example_wrapper",class:"dataTables_wrapper dt-bootstrap4 no-footer"},u=Object(n["f"])("div",{class:"row"},null,-1),d={class:"row"},f={class:"col-sm-12"},p={class:"table table-hover table-bordered table-responsive-sm",id:"dataTables-example",width:"100%"},g=Object(n["f"])("div",{class:"row"},null,-1),j={key:0,class:"loading-mask"},O=Object(n["f"])("div",{class:"loading-content"},[Object(n["f"])("span",{style:{color:"white"}},"Loading...")],-1),h={class:"thead-dark"},v={key:0,class:"checkbox-th"},m={key:1},k={key:0},y={key:1},w={key:0,class:"row"},x={class:"col-sm-12 col-md-4"},S={role:"status","aria-live":"polite"},C={class:"col-sm-12 col-md-4"},P=Object(n["f"])("option",{value:"10"},"10",-1),L=Object(n["f"])("option",{value:"25"},"25",-1),z=Object(n["f"])("option",{value:"50"},"50",-1),_={class:"col-sm-12 col-md-4"},q={class:"dataTables_paginate paging_simple_numbers",id:"dataTables-example_paginate"},A={class:"pagination"},R=Object(n["f"])("span",{"aria-hidden":"true"},"«",-1),T=Object(n["f"])("span",{class:"sr-only"},"First",-1),E=Object(n["f"])("span",{"aria-hidden":"true"},"<",-1),N=Object(n["f"])("span",{class:"sr-only"},"Prev",-1),I=Object(n["f"])("span",{"aria-hidden":"true"},">",-1),M=Object(n["f"])("span",{class:"sr-only"},"Next",-1),D=Object(n["f"])("span",{"aria-hidden":"true"},"»",-1),B=Object(n["f"])("span",{class:"sr-only"},"Last",-1),F={key:1,class:"row"},U={class:"col-sm-12 text-center"};Object(n["k"])();var V=o((function(e,t,a,c,o,V){return Object(n["j"])(),Object(n["d"])("div",r,[e.title?(Object(n["j"])(),Object(n["d"])("div",i,Object(n["q"])(e.title),1)):Object(n["e"])("",!0),Object(n["f"])("div",s,[l,Object(n["f"])("div",b,[u,Object(n["f"])("div",d,[Object(n["f"])("div",f,[Object(n["f"])("table",p,[g,e.isLoading?(Object(n["j"])(),Object(n["d"])("div",j,[O])):Object(n["e"])("",!0),Object(n["f"])("thead",h,[Object(n["f"])("tr",null,[e.hasCheckbox?(Object(n["j"])(),Object(n["d"])("th",v,[Object(n["f"])("div",null,[Object(n["u"])(Object(n["f"])("input",{type:"checkbox","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.setting.isCheckAll=t})},null,512),[[n["r"],e.setting.isCheckAll]])])])):Object(n["e"])("",!0),(Object(n["j"])(!0),Object(n["d"])(n["a"],null,Object(n["o"])(e.columns,(function(t,a){return Object(n["j"])(),Object(n["d"])("th",{key:a,style:{width:t.width?t.width:"auto"}},[Object(n["f"])("div",{class:{sortable:t.sortable,both:t.sortable,asc:e.sortable.order==t.field&&"asc"==e.sortable.sort,desc:e.sortable.order==t.field&&"desc"==e.sortable.sort},onClick:function(a){return!!t.sortable&&e.doSort(t.field)}},Object(n["q"])(t.label),11,["onClick"])],4)})),128))])]),e.rows.length>0?(Object(n["j"])(),Object(n["d"])("tbody",m,[(Object(n["j"])(!0),Object(n["d"])(n["a"],null,Object(n["o"])(e.rows,(function(a,c){return Object(n["j"])(),Object(n["d"])("tr",{key:c},[e.hasCheckbox?(Object(n["j"])(),Object(n["d"])("td",k,[Object(n["f"])("div",null,[Object(n["f"])("input",{type:"checkbox",ref:function(t){e.rowCheckbox[c]=t},value:a[e.setting.keyColumn],onClick:t[2]||(t[2]=function(){return e.checked.apply(e,arguments)})},null,8,["value"])])])):Object(n["e"])("",!0),(Object(n["j"])(!0),Object(n["d"])(n["a"],null,Object(n["o"])(e.columns,(function(e,t){return Object(n["j"])(),Object(n["d"])("td",{key:t},[e.display?(Object(n["j"])(),Object(n["d"])("div",{key:0,innerHTML:e.display(a)},null,8,["innerHTML"])):(Object(n["j"])(),Object(n["d"])("span",y,Object(n["q"])(a[e.field]),1))])})),128))])})),128))])):Object(n["e"])("",!0)])])]),e.rows.length>0?(Object(n["j"])(),Object(n["d"])("div",w,[Object(n["f"])("div",x,[Object(n["f"])("div",S,Object(n["q"])(e.messages.pagingInfo.format(e.setting.offset,e.setting.limit,e.total)),1)]),Object(n["f"])("div",C,[Object(n["f"])("span",null,Object(n["q"])(e.messages.pageSizeChangeLabel),1),Object(n["u"])(Object(n["f"])("select",{"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.setting.pageSize=t})},[P,L,z],512),[[n["s"],e.setting.pageSize]]),Object(n["f"])("span",null,Object(n["q"])(e.messages.gotoPageLabel),1),Object(n["u"])(Object(n["f"])("select",{"onUpdate:modelValue":t[4]||(t[4]=function(t){return e.setting.page=t})},[(Object(n["j"])(!0),Object(n["d"])(n["a"],null,Object(n["o"])(e.setting.maxPage,(function(e){return Object(n["j"])(),Object(n["d"])("option",{key:e},Object(n["q"])(e),1)})),128))],512),[[n["s"],e.setting.page]])]),Object(n["f"])("div",_,[Object(n["f"])("div",q,[Object(n["f"])("ul",A,[Object(n["f"])("li",{class:["page-item",{disabled:e.setting.page<=1}]},[Object(n["f"])("a",{class:"page-link",href:"javascript:void(0)","aria-label":"Previous",onClick:t[5]||(t[5]=function(t){return e.setting.page=1})},[R,T])],2),Object(n["f"])("li",{class:["page-item",{disabled:e.setting.page<=1}]},[Object(n["f"])("a",{class:"page-link",href:"javascript:void(0)","aria-label":"Previous",onClick:t[6]||(t[6]=function(){return e.prevPage.apply(e,arguments)})},[E,N])],2),(Object(n["j"])(!0),Object(n["d"])(n["a"],null,Object(n["o"])(e.setting.pagging,(function(t){return Object(n["j"])(),Object(n["d"])("li",{class:["page-item",{disabled:e.setting.page==t}],key:t},[Object(n["f"])("a",{class:"page-link",href:"javascript:void(0)",onClick:function(a){return e.movePage(t)}},Object(n["q"])(t),9,["onClick"])],2)})),128)),Object(n["f"])("li",{class:["page-item",{disabled:e.setting.page>=e.setting.maxPage}]},[Object(n["f"])("a",{class:"page-link",href:"javascript:void(0)","aria-label":"Next",onClick:t[7]||(t[7]=function(){return e.nextPage.apply(e,arguments)})},[I,M])],2),Object(n["f"])("li",{class:["page-item",{disabled:e.setting.page>=e.setting.maxPage}]},[Object(n["f"])("a",{class:"page-link",href:"javascript:void(0)","aria-label":"Next",onClick:t[8]||(t[8]=function(t){return e.setting.page=e.setting.maxPage})},[D,B])],2)])])])])):(Object(n["j"])(),Object(n["d"])("div",F,[Object(n["f"])("div",U,Object(n["q"])(e.messages.noDataAvailable),1)]))])])])}));a("a9e3"),a("ac1f"),a("5319");String.prototype.format=function(){var e=arguments;return this.replace(/{([0-9]*)}/g,(function(t,a){return"undefined"!=typeof e[a]?e[a]:t}))};var G=Object(n["g"])({name:"my-table",props:{isLoading:{type:Boolean,require:!0},isReSearch:{type:Boolean,require:!0},hasCheckbox:{type:Boolean,default:!1},title:{type:String,default:""},columns:{type:Array,default:function(){return[]}},rows:{type:Array,default:function(){return[]}},pageSize:{type:Number,default:10},total:{type:Number,default:100},page:{type:Number,default:1},sortable:{type:Object,default:function(){return{order:"id",sort:"asc"}}},messages:{type:Object,default:function(){return{pagingInfo:"Showing {0}-{1} of {2}",pageSizeChangeLabel:"Row count:",gotoPageLabel:"Go to page:",noDataAvailable:"No data"}}}},setup:function(e,t){var a=t.emit,c=Object(n["m"])({isCheckAll:!1,keyColumn:Object(n["b"])((function(){var t="";return e.columns.forEach((function(e){e.isKey&&(t=e.field)})),t})),page:e.page,pageSize:e.pageSize,maxPage:Object(n["b"])((function(){if(e.total<=0)return 0;var t=Math.floor(e.total/c.pageSize),a=e.total%c.pageSize;return a>0&&t++,t})),offset:Object(n["b"])((function(){return(c.page-1)*c.pageSize+1})),limit:Object(n["b"])((function(){var t=c.page*c.pageSize;return e.total>=t?t:e.total})),pagging:Object(n["b"])((function(){var e=c.page-2<=0?1:c.page-2;c.maxPage-c.page<=2&&(e=c.maxPage-4),e=e<=0?1:e;for(var t=[],a=e;a<=c.maxPage;a++)t.length<5&&t.push(a);return t}))}),o=Object(n["n"])([]);e.hasCheckbox&&(Object(n["i"])((function(){o.value=[]})),Object(n["t"])((function(){return c.isCheckAll}),(function(e){var t=[];o.value.forEach((function(a){a&&(a.checked=e,1==a.checked&&t.push(a.value))})),a("return-checked-rows",t)})));var r=function(){var e=[];o.value.forEach((function(t){t&&1==t.checked&&e.push(t.value)})),a("return-checked-rows",e)},i=function(){o.value.forEach((function(e){e&&1==e.checked&&(e.checked=!1)})),a("return-checked-rows",[])},s=function(t){var n="asc";t==e.sortable.order&&"asc"==e.sortable.sort&&(n="desc");var o=(c.page-1)*c.pageSize,r=c.pageSize;a("do-search",o,r,t,n),c.isCheckAll?c.isCheckAll=!1:e.hasCheckbox&&i()},l=function(t,n){c.isCheckAll=!1;var o=e.sortable.order,r=e.sortable.sort,i=(t-1)*c.pageSize,s=c.pageSize;(!e.isReSearch||t>1||t==n)&&a("do-search",i,s,o,r)};Object(n["t"])((function(){return c.page}),l);var b=function(){1===c.page?l(c.page,c.page):(c.page=1,c.isCheckAll=!1)};Object(n["t"])((function(){return c.pageSize}),b);var u=function(){if(1==c.page)return!1;c.page--},d=function(e){c.page=e},f=function(){if(c.page>=c.maxPage)return!1;c.page++};return Object(n["t"])((function(){return e.rows}),(function(){e.isReSearch&&(c.page=1),Object(n["h"])((function(){var e=document.getElementsByClassName("is-rows-el");a("is-finished",e)}))})),e.hasCheckbox?{setting:c,rowCheckbox:o,checked:r,doSort:s,prevPage:u,movePage:d,nextPage:f}:{setting:c,doSort:s,prevPage:u,movePage:d,nextPage:f}}});a("3d7d");G.render=V,G.__scopeId="data-v-ce6f6068";var H=G,J=function(e,t){e+=1;for(var a=[],n=e;n<=t;n++)a.push({id:n,name:"TEST"+n,email:"test"+n+"@example.com"});return a},K=function(e,t){for(var a=[],n=t;n>e;n--)a.push({id:n,name:"TEST"+n,email:"test"+n+"@example.com"});return a},Q=Object(n["g"])({name:"App",components:{TableLite:H},setup:function(){var e=Object(n["m"])({isLoading:!1,isReSearch:!1,columns:[{label:"ID",field:"id",width:"3%",sortable:!0,isKey:!0},{label:"Name",field:"name",width:"10%",sortable:!0,display:function(e){return'<a href="#" data-id="'+e.user_id+'" class="name-btn">'+e.name+"</button>"}},{label:"Email",field:"email",width:"15%",sortable:!0},{label:"",field:"quick",width:"10%",display:function(e){return'<button type="button" data-id="'+e.user_id+'" class="quick-btn">Button</button>'}}],rows:J(0,10),totalRecordCount:20,sortable:{order:"id",sort:"asc"},messages:{pagingInfo:"Showing {0}-{1} of {2}",pageSizeChangeLabel:"Row count:",gotoPageLabel:"Go to page:",noDataAvailable:"No data"}}),t=function(t,a,n,c){e.isLoading=!0,setTimeout((function(){e.isReSearch=void 0==t,(t>=10||a>=20)&&(a=20),e.rows="asc"==c?J(t,a):K(t,a),e.totalRecordCount=20,e.sortable.order=n,e.sortable.sort=c}),600)},a=function(t){e.isLoading=!1,Array.prototype.forEach.call(t,(function(e){e.classList.contains("name-btn")&&e.addEventListener("click",(function(){console.log(this.dataset.id+" name-btn click!!")})),e.classList.contains("quick-btn")&&e.addEventListener("click",(function(){console.log(this.dataset.id+" quick-btn click!!")}))}))},c=function(e){console.log(e)};return{table:e,doSearch:t,tableLoadingFinish:a,updateCheckedRows:c}}});a("64be");Q.render=c;var W=Q;Object(n["c"])(W).mount("#app")},"64be":function(e,t,a){"use strict";a("3068")}});
//# sourceMappingURL=app.e7c24aa1.js.map