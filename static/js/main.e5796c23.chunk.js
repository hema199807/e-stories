(this["webpackJsonpedyoda-stories"]=this["webpackJsonpedyoda-stories"]||[]).push([[0],{20:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var c=a(2),s=a.n(c),n=a(15),i=a.n(n),o=(a(20),a(6),a(0)),l=function(){return Object(o.jsx)("div",{children:Object(o.jsx)("header",{className:"top-bar",children:Object(o.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("a",{className:"navbar-brand logo",href:"#",children:"EDYODA"}),Object(o.jsx)("span",{className:"logo-stories-text",children:"Stories"})]}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNavDropdown",children:Object(o.jsxs)("ul",{className:"navbar-nav",children:[Object(o.jsxs)("li",{className:"nav-item dropdown",children:[Object(o.jsxs)("div",{className:"dropdown-text",children:["Explore Categories",Object(o.jsx)("span",{className:"dropdown-text-icon",children:Object(o.jsx)("i",{className:"fas fa-chevron-down"})})]}),Object(o.jsxs)("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdownMenuLink",children:[Object(o.jsx)("a",{className:"dropdown-item",href:"#",children:"Action"}),Object(o.jsx)("a",{className:"dropdown-item",href:"#",children:"Another action"}),Object(o.jsx)("a",{className:"dropdown-item",href:"#",children:"Something else here"})]})]}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("div",{className:"nav-link top-bar-msg",children:"EdYoda is free learning and knowledge sharing platform for techies"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("div",{className:"nav-link",children:Object(o.jsx)("button",{className:"top-bar-btn",children:"Go To Main Website"})})})]})})]})})})},r=a(4),d=a(3),j=a.n(d),b=function(e){var t=e.blogsData;return Object(o.jsx)("div",{children:Object(o.jsx)("section",{id:"blog-section",children:t.map((function(e){return Object(o.jsxs)("div",{className:"card",style:{width:"17.5rem"},children:[Object(o.jsx)("img",{src:e.small_image,className:"card-img-top",alt:"edyodaStories"}),Object(o.jsxs)("div",{className:"card-body",children:[Object(o.jsx)("h5",{className:"card-title blog-title",children:e.title}),Object(o.jsxs)("h6",{className:"card-subtitle mb-2 blog-author",children:[e.authorname," |",Object(o.jsxs)("span",{className:"blog-date",children:[" ",e.posted_on.split("T")[0]]})]}),Object(o.jsx)("p",{className:"card-text blog-content",children:e.description})]})]},e.id)}))})})},h=function(){var e=Object(c.useState)("categories filter-select"),t=Object(r.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(""),i=Object(r.a)(n,2),l=i[0],d=i[1],h=Object(c.useState)([]),m=Object(r.a)(h,2),g=m[0],O=m[1],u=Object(c.useState)([]),x=Object(r.a)(u,2),p=x[0],v=x[1];return Object(c.useEffect)((function(){j()({method:"GET",url:"https://api.edyoda.com/v1/blog/postcategories/",header:{"Access-Control-Allow-Origin":"*"}}).then((function(e){O(e.data)})).catch((function(e){console.log(e)})),j()({method:"GET",url:"https://api.edyoda.com/v1/blog/",header:{"Access-Control-Allow-Origin":"*"}}).then((function(e){v(e.data)})).catch((function(e){console.log(e)}))}),[]),Object(o.jsxs)("div",{children:[Object(o.jsxs)("section",{className:"Category-section",children:[Object(o.jsx)("h1",{className:"Category-section-heading",children:"Latest Posts"}),Object(o.jsxs)("p",{className:"filter-text",children:[" ",Object(o.jsx)("i",{className:"fas fa-filter filter-icon"}),"Filter by Category"]}),Object(o.jsxs)("div",{className:"categories-list",children:[Object(o.jsx)("div",{className:a,onClick:function(){d(""),s("categories filter-select"),j()({method:"GET",url:"https://api.edyoda.com/v1/blog/",header:{"Access-Control-Allow-Origin":"*"}}).then((function(e){v(e.data)})).catch((function(e){console.log(e)}))},id:"all",children:"All"}),g.map((function(e){return Object(o.jsx)("div",{onClick:function(){return function(e){s("categories"),g.map((function(t){t.id===e.id&&d(t.id)})),j()({method:"GET",url:"https://api.edyoda.com/v1/blog/"+e.slug+"/",header:{"Access-Control-Allow-Origin":"*"}}).then((function(e){v(e.data.posts)})).catch((function(e){console.log(e)}))}(e)},className:l===e.id?"categories filter-select":"categories",children:e.title},e.id)}))]})]}),Object(o.jsx)(b,{blogsData:p})]})};var m=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)(l,{}),Object(o.jsx)(h,{})]})},g=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,41)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;a(e),c(e),s(e),n(e),i(e)}))};i.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(m,{})}),document.getElementById("root")),g()},6:function(e,t,a){}},[[40,1,2]]]);
//# sourceMappingURL=main.e5796c23.chunk.js.map