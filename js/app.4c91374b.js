(function(t){function e(e){for(var n,a,i=e[0],c=e[1],u=e[2],d=0,p=[];d<i.length;d++)a=i[d],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&p.push(r[a][0]),r[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(p.length)p.shift()();return o.push.apply(o,u||[]),s()}function s(){for(var t,e=0;e<o.length;e++){for(var s=o[e],n=!0,i=1;i<s.length;i++){var c=s[i];0!==r[c]&&(n=!1)}n&&(o.splice(e--,1),t=a(a.s=s[0]))}return t}var n={},r={app:0},o=[];function a(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.m=t,a.c=n,a.d=function(t,e,s){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(s,n,function(e){return t[e]}.bind(null,n));return s},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/youTube-spa/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=c;o.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"0004":function(t,e,s){"use strict";s("622f")},"0da7":function(t,e,s){},"0e21":function(t,e,s){},4107:function(t,e,s){"use strict";s("922e")},"4cbf":function(t,e,s){"use strict";s("0da7")},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("7a23"),r={class:"wrapper"};function o(t,e,s,o,a,i){var c=Object(n["L"])("nav-bar"),u=Object(n["L"])("router-view");return Object(n["E"])(),Object(n["i"])(n["a"],null,[Object(n["l"])(c,{show:t.$store.state.exitModal,"onUpdate:show":e[0]||(e[0]=function(e){return t.$store.state.exitModal=e})},null,8,["show"]),Object(n["j"])("div",r,[Object(n["l"])(u)])],64)}var a=s("9b19"),i=s.n(a),c=function(t){return Object(n["H"])("data-v-a169a7d8"),t=t(),Object(n["F"])(),t},u={class:"nav-bar-wrapper"},l={key:0,class:"nav-bar-container nav-bar"},d={class:"nav-bar-left"},p={class:"nav-bar-logo"},h={class:"nav-bar-link"},b=Object(n["k"])("Поиск"),f={class:"nav-bar-link"},v=Object(n["k"])("Избранное"),O=c((function(){return Object(n["j"])("div",{class:"nav-bar-right"},null,-1)}));function j(t,e,s,r,o,a){var c=Object(n["L"])("q-img"),j=Object(n["L"])("router-link");return Object(n["E"])(),Object(n["i"])("div",u,[a.noNav?Object(n["h"])("",!0):(Object(n["E"])(),Object(n["i"])("div",l,[Object(n["j"])("div",d,[Object(n["j"])("div",p,[Object(n["l"])(c,{src:i.a})]),Object(n["j"])("div",h,[Object(n["l"])(j,{class:Object(n["v"])(["nav-router-link",{searchPages:a.isSearch}]),to:"/"},{default:Object(n["Q"])((function(){return[b]})),_:1},8,["class"])]),Object(n["j"])("div",f,[Object(n["l"])(j,{class:"nav-router-link",to:"/favorites"},{default:Object(n["Q"])((function(){return[v]})),_:1})])]),O]))])}s("ac1f"),s("841c");var m={props:{show:{type:Boolean,default:!1}},computed:{noNav:function(){return this.$route.meta.noNav},isSearch:function(){return this.$route.meta.search}}},g=(s("4107"),s("6b0d")),y=s.n(g),$=s("068f"),S=s("93dc"),w=s.n(S);const q=y()(m,[["render",j],["__scopeId","data-v-a169a7d8"]]);var x=q;w()(m,"components",{QImg:$["a"]});var k={components:{navBar:x},beforeCreate:function(){this.$q.loading.show()},beforeMount:function(){this.$store.state.favorites=this.$store.getters.favorites},mounted:function(){this.$q.loading.hide()},created:function(){if(sessionStorage.redirect){var t=sessionStorage.redirect;delete sessionStorage.redirect,this.$router.push(t)}}};s("74d0");const C=y()(k,[["render",o]]);var R=C,L=s("6c02"),Q={class:"home-page-wrapper"};function M(t,e,s,r,o,a){var i=Object(n["L"])("search-bar");return Object(n["E"])(),Object(n["i"])("div",Q,[Object(n["l"])(i,{searchQuery:t.$store.state.searchOptions.request,"onUpdate:searchQuery":e[0]||(e[0]=function(e){return t.$store.state.searchOptions.request=e}),onSearch:e[1]||(e[1]=function(e){return t.searchRoute(t.$store.state.searchOptions)})},null,8,["searchQuery"])])}function _(t,e,s,r,o,a){var i=Object(n["L"])("q-icon"),c=Object(n["L"])("q-input"),u=Object(n["L"])("q-btn");return Object(n["E"])(),Object(n["i"])("form",{onSubmit:e[2]||(e[2]=Object(n["S"])((function(e){return t.$emit("search")}),["prevent"])),class:"search-bar-wrapper"},[Object(n["l"])(c,{class:"search-input",modelValue:s.searchQuery,"onUpdate:modelValue":[e[1]||(e[1]=function(t){return s.searchQuery=t}),a.updateSaerch],label:"Поиск",outlined:""},{append:Object(n["Q"])((function(){return[a.isSearchDone?(Object(n["E"])(),Object(n["g"])(i,{key:0,onClick:e[0]||(e[0]=function(e){return t.openModal(t.bool)}),name:"favorite_border"})):Object(n["h"])("",!0)]})),_:1},8,["modelValue","onUpdate:modelValue"]),Object(n["l"])(u,{class:"search-btn",label:"поиск",color:"primary",type:"submit",disabled:a.isInputClear},null,8,["disabled"])],32)}var I={props:{show:{type:Boolean,default:!1},options:{type:Object,required:!1}},methods:{openModal:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=arguments.length>1?arguments[1]:void 0;this.$emit("update:show",t),this.$emit("update:options",e)},closeModal:function(){this.$emit("update:show",!1),this.$emit("donotsave")}}},E={mixins:[I],props:{searchQuery:{type:String,default:""}},computed:{isInputClear:function(){return this.searchQuery.length<=0},isSearchDone:function(){return this.$route.meta.searchDone}},methods:{updateSaerch:function(t){this.$emit("update:searchQuery",t)}}},U=(s("0004"),s("27f9")),V=s("0016"),N=s("9c40");const B=y()(E,[["render",_],["__scopeId","data-v-10729c83"]]);var F=B;w()(E,"components",{QInput:U["a"],QIcon:V["a"],QBtn:N["a"]});var T={components:{searchBar:F},methods:{searchRoute:function(t){var e=this;this.$q.loading.show({delay:200}),this.youtubeSearch(t,this.apiKey2).then((function(){e.$router.push("/search/".concat(t.request)),e.$q.loading.hide()}))},searchRouteByChosen:function(t){this.searchRoute(t)}}},J={mixins:[T]};s("965e");const D=y()(J,[["render",M],["__scopeId","data-v-1f6cac50"]]);var K=D,P={class:"search-result-page"};function G(t,e,s,r,o,a){var i=this,c=Object(n["L"])("search-bar"),u=Object(n["L"])("resul-list"),l=Object(n["L"])("favorites-modal");return Object(n["E"])(),Object(n["i"])(n["a"],null,[Object(n["j"])("div",P,[Object(n["l"])(c,{searchQuery:this.$store.state.searchOptions.request,"onUpdate:searchQuery":e[0]||(e[0]=function(t){return i.$store.state.searchOptions.request=t}),show:t.$store.state.showModal,"onUpdate:show":e[1]||(e[1]=function(e){return t.$store.state.showModal=e}),onSearch:e[2]||(e[2]=function(e){return t.searchRoute(t.$store.state.searchOptions)})},null,8,["searchQuery","show"]),Object(n["l"])(u,{searchQuery:t.$route.params.path,"onUpdate:searchQuery":e[3]||(e[3]=function(e){return t.$route.params.path=e}),searchResults:t.$store.state.searchResults,"onUpdate:searchResults":e[4]||(e[4]=function(e){return t.$store.state.searchResults=e})},null,8,["searchQuery","searchResults"])]),Object(n["l"])(l,{show:t.$store.state.showModal,"onUpdate:show":e[5]||(e[5]=function(e){return t.$store.state.showModal=e}),options:t.$store.state.searchOptions,"onUpdate:options":e[6]||(e[6]=function(e){return t.$store.state.searchOptions=e}),onSave:e[7]||(e[7]=function(e){return a.saveFavorites(t.$store.state.searchOptions)})},null,8,["show","options"])],64)}s("c740"),s("a4d3"),s("e01a");var A={class:"result-list-wrapper result-list"},H={class:"result-list-top"},W={class:"text-subtitle"},z=Object(n["k"])('Видео по запросу "'),X=Object(n["k"])('" '),Y={class:"result-list-change-btns"},Z={class:"result-preview"},tt={class:"result-text"},et={class:"text-subtitle result-title"},st={class:"text-subtitle result-chanel-title"},nt={key:0,class:"text-subtitle result-description"},rt={class:"text-subtitle result-description"};function ot(t,e,s,r,o,a){var i=Object(n["L"])("q-btn"),c=Object(n["L"])("q-img");return Object(n["E"])(),Object(n["i"])("div",A,[Object(n["j"])("div",H,[Object(n["j"])("div",W,[z,Object(n["j"])("b",null,Object(n["N"])(s.searchQuery),1),X]),Object(n["j"])("div",Y,[(Object(n["E"])(!0),Object(n["i"])(n["a"],null,Object(n["K"])(o.listDisplayBts,(function(t){return Object(n["E"])(),Object(n["g"])(i,{flat:"",key:t,icon:t.icon,class:Object(n["v"])({chose:t.isChosen}),onClick:function(e){return a.changeListDisplay(t.value)}},null,8,["icon","class","onClick"])})),128))])]),Object(n["j"])("div",{class:Object(n["v"])(["result-list-body",{grid:o.isGrid,column:o.isColumn}])},[(Object(n["E"])(!0),Object(n["i"])(n["a"],null,Object(n["K"])(s.searchResults,(function(t){return Object(n["E"])(),Object(n["i"])("div",{class:"result-block result",key:t},[Object(n["j"])("div",Z,[Object(n["l"])(c,{src:t.snippet.thumbnails.medium.url},null,8,["src"])]),Object(n["j"])("div",tt,[Object(n["j"])("div",et,Object(n["N"])(t.snippet.title),1),Object(n["j"])("div",st,Object(n["N"])(t.snippet.channelTitle),1),t.snippet.description?(Object(n["E"])(),Object(n["i"])("div",nt,Object(n["N"])(t.snippet.description),1)):Object(n["h"])("",!0),Object(n["j"])("div",rt," Просмотры "+Object(n["N"])(a.numberWithSpaces(t.statistics.viewCount)),1)])])})),128))],2)])}s("5319"),s("d3b7"),s("25f0");var at={data:function(){return{listDisplayBts:[{value:"column",icon:"list"},{value:"grid",icon:"grid_view"}],isGrid:!0,isColumn:!1}},props:{searchResults:{type:Array,default:[]},searchQuery:{type:String,default:""}},methods:{changeListDisplay:function(t){this.setToStorage("chosenListType",t),"grid"===t?(this.isGrid=!0,this.isColumn=!1):"column"===t&&(this.isGrid=!1,this.isColumn=!0)},rememberListType:function(){var t=this.getFromStorage("chosenListType",t);t&&this.changeListDisplay(t)},numberWithSpaces:function(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")},detectMobile:function(){this.$q.platform.is.mobile&&(this.isGrid=!1,this.isColumn=!0)}},beforeMount:function(){this.rememberListType(),this.detectMobile()}};s("7c64");const it=y()(at,[["render",ot],["__scopeId","data-v-74eee37f"]]);var ct=it;w()(at,"components",{QBtn:N["a"],QImg:$["a"]});var ut=function(t){return Object(n["H"])("data-v-d141a8ec"),t=t(),Object(n["F"])(),t},lt={class:"favorites-modal-container"},dt=ut((function(){return Object(n["j"])("div",{class:"text-h6"},"Сохранить запрос",-1)})),pt={class:"favorites-modal-inputs modal-inputs"},ht=ut((function(){return Object(n["j"])("div",{class:"text-subtitle"},"Максимальное количество",-1)})),bt={class:"favorites-modal-btns btns"};function ft(t,e,s,r,o,a){var i=Object(n["L"])("q-input"),c=Object(n["L"])("q-select"),u=Object(n["L"])("q-slider"),l=Object(n["L"])("q-btn");return Object(n["E"])(),Object(n["i"])("div",{class:Object(n["v"])(["favorites-modal-wrapper",{show:t.show}])},[Object(n["j"])("div",lt,[dt,Object(n["j"])("div",pt,[s.isReadOnly?(Object(n["E"])(),Object(n["g"])(i,{key:0,outlined:"",modelValue:s.options.request,"onUpdate:modelValue":e[0]||(e[0]=function(t){return s.options.request=t}),class:"modal-inputs-item",readonly:"",label:"Запрос"},null,8,["modelValue"])):Object(n["h"])("",!0),s.isReadOnly?Object(n["h"])("",!0):(Object(n["E"])(),Object(n["g"])(i,{key:1,outlined:"",modelValue:s.options.request,"onUpdate:modelValue":e[1]||(e[1]=function(t){return s.options.request=t}),class:"modal-inputs-item",label:"Запрос"},null,8,["modelValue"])),Object(n["l"])(i,{outlined:"",modelValue:s.options.title,"onUpdate:modelValue":e[2]||(e[2]=function(t){return s.options.title=t}),class:"modal-inputs-item",label:"*Название"},null,8,["modelValue"]),Object(n["l"])(c,{outlined:"",modelValue:s.options.chosenSortOpt,"onUpdate:modelValue":e[3]||(e[3]=function(t){return s.options.chosenSortOpt=t}),options:s.options.sortOpt,class:"modal-inputs-item",label:"Сортировать по"},null,8,["modelValue","options"]),ht,Object(n["l"])(u,{modelValue:s.options.maxResult,"onUpdate:modelValue":e[4]||(e[4]=function(t){return s.options.maxResult=t}),class:"modal-inputs-item",min:1,max:50,label:"","switch-label-side":""},null,8,["modelValue"])]),Object(n["j"])("div",bt,[Object(n["l"])(l,{class:"btns-item",outline:"",color:"primary",label:"не сохранять",onClick:t.closeModal},null,8,["onClick"]),Object(n["l"])(l,{class:"btns-item",color:"primary",label:"сохранить",onClick:e[5]||(e[5]=function(e){return t.$emit("save")}),disabled:a.isTitleFilled},null,8,["disabled"])])])],2)}var vt=s("25a0"),Ot={required:function(t){return t.$dirty&&t.required.$invalid},minLength:function(t){return t.$dirty&&t.minLength.$invalid}},jt={required:function(){return"*Поле обязательное для заполнения."},minLength:function(t){return"*Поле должно содержать минимум ".concat(t.minLength.$params.min," символа")}},mt={data:function(){return{v$:Object(vt["a"])(),rules:Ot,messages:jt}}},gt={mixins:[mt,I],props:{options:{type:Object,default:{}},isReadOnly:{type:Boolean,default:!0,requared:!1}},computed:{isTitleFilled:function(){return this.options.title.length<=0}}},yt=(s("a17f"),s("ddd8")),$t=s("c1d0");const St=y()(gt,[["render",ft],["__scopeId","data-v-d141a8ec"]]);var wt=St;w()(gt,"components",{QInput:U["a"],QSelect:yt["a"],QSlider:$t["a"],QBtn:N["a"]});var qt={components:{resulList:ct,favoritesModal:wt},mixins:[T],methods:{saveFavorites:function(t){var e={request:t.request,title:t.title,maxResult:t.maxResult,chosenSortOpt:t.chosenSortOpt,sortOpt:[t.chosenSortOpt]},s=this.$store.state.favorites.findIndex((function(e){return e.title===t.title}));s>=0?this.q$.notify({message:"Запрос с таким названием уже существует",color:"orange"}):(this.$store.state.favorites.push(e),this.$store.state.showModal=!1,this.setToStorage("favorites",this.$store.state.favorites),this.q$.notify({message:"Запрос сохранен",color:"green"}))}},beforeMount:function(){this.$store.state.searchOptions.request=this.$route.params.path,this.$store.searchResults||this.youtubeSearch(this.$store.state.searchOptions,this.apiKey1)}};s("4cbf");const xt=y()(qt,[["render",G],["__scopeId","data-v-48dce1b8"]]);var kt=xt,Ct=function(t){return Object(n["H"])("data-v-adc89ccc"),t=t(),Object(n["F"])(),t},Rt={class:"favorites-page-wrapper"},Lt=Ct((function(){return Object(n["j"])("div",{class:"text-h4"},"Избранное",-1)}));function Qt(t,e,s,r,o,a){var i=this,c=Object(n["L"])("favoritesList"),u=Object(n["L"])("favorites-modal");return Object(n["E"])(),Object(n["i"])(n["a"],null,[Object(n["j"])("div",Rt,[Lt,Object(n["l"])(c,{favorites:this.$store.state.favorites,"onUpdate:favorites":e[0]||(e[0]=function(t){return i.$store.state.favorites=t}),show:t.$store.state.showModal,"onUpdate:show":e[1]||(e[1]=function(e){return t.$store.state.showModal=e}),options:o.changebleOptions,"onUpdate:options":e[2]||(e[2]=function(t){return o.changebleOptions=t}),onSearchChosen:t.searchRouteByChosen,onRemove:e[3]||(e[3]=function(t){return a.removeFavorite(o.unChangedOptions)})},null,8,["favorites","show","options","onSearchChosen"])]),Object(n["l"])(u,{show:t.$store.state.showModal,"onUpdate:show":e[4]||(e[4]=function(e){return t.$store.state.showModal=e}),options:o.changebleOptions,"onUpdate:options":e[5]||(e[5]=function(t){return o.changebleOptions=t}),isReadOnly:!1,onSave:e[6]||(e[6]=function(t){return a.redactFavorites(o.changebleOptions,o.unChangedOptions)}),onDonotsave:e[7]||(e[7]=function(t){return a.dontSave(o.unChangedOptions)})},null,8,["show","options"])],64)}s("e9c4"),s("fb6a"),s("a434");var Mt={class:"favorites-list-wrapper"},_t=["onClick"],It={class:"test-subtitle"},Et={class:"favorite-btns"};function Ut(t,e,s,r,o,a){var i=Object(n["L"])("q-btn");return Object(n["E"])(),Object(n["i"])("div",Mt,[(Object(n["E"])(!0),Object(n["i"])(n["a"],null,Object(n["K"])(s.favorites,(function(e){return Object(n["E"])(),Object(n["i"])("div",{class:"favorites-list-item",key:e},[Object(n["j"])("div",{class:"favorites-list-click-cathcer",onClick:function(t){return a.request(e)}},null,8,_t),Object(n["j"])("div",It,Object(n["N"])(e.title),1),Object(n["j"])("div",Et,[Object(n["l"])(i,{flat:"",label:"Изменить",color:"primary",onClick:function(s){return t.openModal(t.bool,e)}},null,8,["onClick"]),Object(n["l"])(i,{flat:"",label:"Удалить",color:"negative",onClick:function(t){return a.remove(e)}},null,8,["onClick"])])])})),128))])}var Vt={mixins:[I],props:{favorites:{type:Array,default:[]}},methods:{request:function(t){this.$emit("searchChosen",t)},remove:function(t){this.$emit("remove",t)}}};s("ee30");const Nt=y()(Vt,[["render",Ut],["__scopeId","data-v-54d6bfef"]]);var Bt=Nt;w()(Vt,"components",{QBtn:N["a"]});var Ft={components:{favoritesModal:wt,favoritesList:Bt},mixins:[T],data:function(){return{changebleOptions:this.$store.state.searchOptions,unChangedOptions:JSON.stringify(this.$store.state.favorites.slice(0))}},methods:{redactFavorites:function(t,e){var s=JSON.parse(e),n=s.findIndex((function(e){return e.title===t.title})),r=s[n];console.log(r),console.log(t),this.isEqual(r,t)?this.q$.notify({message:"Вы ничего не меняли",color:"orange"}):(this.$store.state.showModal=!1,this.setToStorage("favorites",this.$store.state.favorites),this.unChangedOptions=JSON.stringify(this.$store.state.favorites.slice(0)),this.q$.notify({message:"Изменения сохранены",color:"green"}))},dontSave:function(t){this.$store.state.favorites=JSON.parse(t)},removeFavorite:function(t){var e=this.$store.state.favorites.findIndex((function(e){return e.title===t.title}));this.$store.state.favorites.splice(e,1),this.unChangedOptions=JSON.stringify(this.$store.state.favorites),this.patchUser(this.$store.state.favorites)},isEqual:function(t,e){var s=JSON.stringify(t),n=JSON.stringify(e);return s===n}}};s("c0fe");const Tt=y()(Ft,[["render",Qt],["__scopeId","data-v-adc89ccc"]]);var Jt=Tt,Dt=[{path:"/",component:K,meta:{search:!0}},{path:"/search/:path",component:kt,meta:{search:!0,searchDone:!0}},{path:"/favorites",component:Jt}],Kt=Object(L["a"])({history:Object(L["b"])("/youTube-spa/"),routes:Dt}),Pt=Kt,Gt=s("5502"),At=Object(Gt["a"])({state:{searchResults:[],favorites:[],searchOptions:{request:"",title:"",maxResult:12,chosenSortOpt:{label:"Без сортировки",value:"searchSortUnspecified"},sortOpt:[{label:"Дате",value:"date"},{label:"Рейтингу",value:"rating"},{label:"Просмтрам",value:"viewCount"},{label:"Названию",value:"title"},{label:"Количеству видео",value:"videoCount"}]},showModal:!1,searchQuerry:""},getters:{favorites:function(){return localStorage.getItem("favorites")?JSON.parse(localStorage.getItem("favorites")):[]}}}),Ht=s("1da1"),Wt=(s("159b"),s("96cf"),s("bc3a")),zt=s.n(Wt),Xt=s("b3fe"),Yt={data:function(){return{apiUrl:"https://www.googleapis.com/youtube/v3",apiKey1:"AIzaSyBWlj8NYVMXRmu8K-VVVrsxmwbfBf1Yrak",apiKey2:"AIzaSyCz3FXHsEIcBmW4rl4nf1BNO6Z3rUm_E_c",q$:Object(Xt["a"])()}},methods:{youtubeSearch:function(t,e){var s=this;return Object(Ht["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,zt.a.get(s.apiUrl+"/search",{params:{key:e,part:"snippet",type:"video",order:t.chosenSortOpt.value,q:t.request,maxResults:t.maxResult}});case 3:return r=n.sent,n.next=6,[];case 6:return s.$store.state.searchResults=n.sent,n.next=9,s.getVideoStatics(r.data.items,e);case 9:n.next=22;break;case 11:return n.prev=11,n.t0=n["catch"](0),n.prev=13,n.next=16,s.youtubeSearch(query,t,s.apiKey2);case 16:n.next=22;break;case 18:n.prev=18,n.t1=n["catch"](13),s.$store.state.searchResults=s.getFromStorage("items",s.$store.state.searchResults),s.q$.notify({message:"Ошибка при загрузке видео ".concat(n.t1),color:"red"});case 22:case"end":return n.stop()}}),n,null,[[0,11],[13,18]])})))()},getVideoStatics:function(t,e){var s=this;return Object(Ht["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.forEach((function(t){zt.a.get(s.apiUrl+"/videos",{params:{part:"statistics",id:t.id.videoId,key:e}}).then((function(e){e.data.items.forEach((function(e){t.statistics=e.statistics,s.$store.state.searchResults.push(t)}))}))}));case 2:case"end":return n.stop()}}),n)})))()},setToStorage:function(t,e){localStorage.setItem(t,JSON.stringify(e))},getFromStorage:function(t,e){return localStorage.getItem(t)?JSON.parse(localStorage.getItem(t)):e},removeFromStorage:function(t){localStorage.removeItem(t)}}},Zt=s("b05d"),te=(s("0e21"),s("14c0")),ee=(s("e54f"),s("2a19")),se=s("f508"),ne={config:{},plugins:{Notify:ee["a"],Loading:se["a"]},lang:te["a"]},re=Object(n["f"])(R);re.mixin(Yt),re.use(At).use(Pt).use(Zt["a"],ne).mount("#app")},"622f":function(t,e,s){},"74d0":function(t,e,s){"use strict";s("81d58")},"7a32":function(t,e,s){},"7c64":function(t,e,s){"use strict";s("adbc")},"81d58":function(t,e,s){},"922e":function(t,e,s){},"965e":function(t,e,s){"use strict";s("f41a")},"9b19":function(t,e,s){t.exports=s.p+"img/logo.6980b57d.svg"},a17f:function(t,e,s){"use strict";s("7a32")},adbc:function(t,e,s){},c0fe:function(t,e,s){"use strict";s("eae5")},eae5:function(t,e,s){},ec69:function(t,e,s){},ee30:function(t,e,s){"use strict";s("ec69")},f41a:function(t,e,s){}});
//# sourceMappingURL=app.4c91374b.js.map