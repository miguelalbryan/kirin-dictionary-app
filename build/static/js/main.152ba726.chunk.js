(this["webpackJsonpkirin-dictionary-app"]=this["webpackJsonpkirin-dictionary-app"]||[]).push([[0],{11:function(e,a,t){e.exports=t(19)},16:function(e,a,t){},17:function(e,a,t){},19:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(8),l=t.n(c),s=(t(16),t(1)),i=t(2),o=t(4),m=t(3),d=t(5),u=(t(17),t(6)),b=t.n(u),p=t(9),f=t(10),h=r.a.createContext();function E(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function v(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?E(Object(t),!0).forEach((function(a){Object(p.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):E(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var O=function(e){function a(){var e;return Object(s.a)(this,a),(e=Object(o.a)(this,Object(m.a)(a).call(this))).state={wordBank:[]},e}return Object(d.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=Object(f.a)(b.a.mark((function e(){var a,t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/words");case 2:return a=e.sent,e.next=5,a.json();case 5:t=e.sent,n=this.state,this.setState(v({},n,{wordBank:t}));case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(h.Provider,{value:this.state.wordBank},this.props.children)}}]),a}(n.Component),N=function(e){function a(e){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).call(this,e))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("ul",{className:"navbar-nav bg-gradient-primary sidebar sidebar-dark accordion",id:"accordionSidebar"},r.a.createElement("a",{className:"sidebar-brand d-flex align-items-center justify-content-center",href:"index.html"},r.a.createElement("div",{className:"sidebar-brand-text mx-3"}," KIRIN ")),r.a.createElement("hr",{className:"sidebar-divider"}),r.a.createElement("div",{className:"sidebar-heading"},"Japanese"),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link collapsed",href:"#","data-toggle":"collapse","data-target":"#collapseTwo","aria-expanded":"true","aria-controls":"collapseTwo"},r.a.createElement("i",{className:"fas fa-fw fa-cog"}),r.a.createElement("span",null,"Word Bank")),r.a.createElement("div",{id:"collapseTwo",className:"collapse","aria-labelledby":"headingTwo","data-parent":"#accordionSidebar"},r.a.createElement("div",{className:"bg-white py-2 collapse-inner rounded"},r.a.createElement("h6",{className:"collapse-header"},"Category:"),r.a.createElement("a",{className:"collapse-item",href:""},"All")," ",r.a.createElement("a",{className:"collapse-item",href:""},"Verbs")))),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"tables.html"},r.a.createElement("i",{className:"fas fa-fw fa-table"}),r.a.createElement("span",null,"Phrases"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"tables.html"},r.a.createElement("i",{className:"fas fa-fw fa-table"}),r.a.createElement("span",null,"Word of the Day"))),r.a.createElement("hr",{className:"sidebar-divider"})))}}]),a}(n.Component),w=function(e){function a(e){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).call(this,e))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow"},r.a.createElement("button",{id:"sidebarToggleTop",className:"btn btn-link d-md-none rounded-circle mr-3"},r.a.createElement("i",{className:"fa fa-bars"})),r.a.createElement("form",{className:"d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search"},r.a.createElement("div",{className:"input-group"},r.a.createElement("input",{type:"text",className:"form-control bg-light border-0 small",placeholder:"Search for...","aria-label":"Search","aria-describedby":"basic-addon2"}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{className:"btn btn-primary",type:"button"},r.a.createElement("i",{className:"fas fa-search fa-sm"}))))),r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item dropdown no-arrow d-sm-none"},r.a.createElement("a",{className:"nav-link dropdown-toggle",href:"#",id:"searchDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},r.a.createElement("i",{className:"fas fa-search fa-fw"})),r.a.createElement("div",{className:"dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in","aria-labelledby":"searchDropdown"},r.a.createElement("form",{className:"form-inline mr-auto w-100 navbar-search"},r.a.createElement("div",{className:"input-group"},r.a.createElement("input",{type:"text",className:"form-control bg-light border-0 small",placeholder:"Search for...","aria-label":"Search","aria-describedby":"basic-addon2"}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{className:"btn btn-primary",type:"button"},r.a.createElement("i",{className:"fas fa-search fa-sm"}))))))),r.a.createElement("div",{className:"topbar-divider d-none d-sm-block"}))))}}]),a}(n.Component),j=(n.Component,function(e){function a(e){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).call(this,e))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"d-sm-flex align-items-center justify-content-between mb-4"},r.a.createElement("h1",{className:"h3 mb-0 text-gray-800"},"Search results and etcetera")),r.a.createElement("div",{className:"row"},r.a.createElement(h.Consumer,null,(function(e){return console.log()})))))}}]),a}(n.Component)),g=function(e){function a(e){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).call(this,e))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"content-wrapper",className:"d-flex flex-column"},r.a.createElement("div",{id:"content"},r.a.createElement(w,null),r.a.createElement(j,null)))}}]),a}(n.Component),y=(r.a.createContext("light"),function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).call(this))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(O,null,r.a.createElement("div",{className:"App"},r.a.createElement("div",{id:"wrapper"},r.a.createElement(N,null),r.a.createElement(g,null))))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[11,1,2]]]);
//# sourceMappingURL=main.152ba726.chunk.js.map