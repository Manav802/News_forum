(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{19:function(e,a,t){e.exports=t(31)},30:function(e,a,t){},31:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(16),l=t.n(r),s=t(7);var i=function(e){var a=e.data;return c.a.createElement("div",{className:"horizontalcards card mb-3 "},c.a.createElement("div",{className:"row no-gutters"},c.a.createElement("div",{className:"col-md-4 "},c.a.createElement("img",{className:"card-img  ",width:"100%",height:"100%",src:null!==a.urlToImage?a.urlToImage:"https://ak4.picdn.net/shutterstock/videos/14402014/thumb/1.jpg"})),c.a.createElement("div",{className:"col-md-8"},c.a.createElement("div",{className:"card-body "},c.a.createElement("h4",{className:"card-title"},a.title+". . ."),c.a.createElement("p",{className:"card-text content-color"},null!==a.content?a.content+". . .":"Click below to read about it."),c.a.createElement("p",{className:" text-right "},c.a.createElement("a",{className:"linkstyle",href:a.url},"Read more..."))))))};var o=function(){var e=new Request("http://newsapi.org/v2/top-headlines?country=in&apiKey=5ba33b83af9d4febab7e05a05f983793"),a=Object(n.useState)({}),t=Object(s.a)(a,2),r=t[0],l=t[1];Object(n.useEffect)((function(){fetch(e).then((function(e){return e.json()})).then((function(e){return l(e)})).catch((function(e){return console.log(e)}))}),[]);var o=r.articles;return console.log(o),c.a.createElement("div",null,o?o.map((function(e){return c.a.createElement(i,{data:e,key:e.url})})):"loading")};var m=function(){return c.a.createElement("div",{className:"  recents-container"},c.a.createElement("div",{className:"recents-heading largetext-font "},c.a.createElement("h2",null," Today's Highlights ")),c.a.createElement("div",{className:"scrollbar"},c.a.createElement("div",{className:"news-section"},c.a.createElement(o,null))))};var u=function(e){var a=e.data;return c.a.createElement("div",{className:"col-sm-4 "},c.a.createElement("div",{className:"interestseccard card "},c.a.createElement("div",{className:"sqrcards"},c.a.createElement("img",{className:"card-img-top",width:"200px",height:"200px",src:null!==a.urlToImage?a.urlToImage:"https://ak4.picdn.net/shutterstock/videos/14402014/thumb/1.jpg"}),c.a.createElement("div",{className:"card-header"},c.a.createElement("h6",{className:" text-color-light"},a.title.slice(0,100)+". . .")),c.a.createElement("div",{className:"card-body "},c.a.createElement("p",{className:"cardtext content-color"},null!==a.content?a.content.slice(0,100)+". . .":"Click below to read about it."),c.a.createElement("p",{className:" text-right "},c.a.createElement("a",{className:"linkstyle",href:a.url},"Read more..."))))))};var d=function(){var e=new Request("https://newsapi.org/v2/everything?q=bitcoin&apiKey=5ba33b83af9d4febab7e05a05f983793"),a=Object(n.useState)({}),t=Object(s.a)(a,2),r=t[0],l=t[1];Object(n.useEffect)((function(){fetch(e).then((function(e){return e.json()})).then((function(e){return l(e)})).catch((function(e){return console.log(e)}))}),[]);var i=r.articles;return console.log(i),c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"page"},c.a.createElement("div",{className:"row row-cols-1 row-cols-sm-1 row-cols-md-2 g-2"},i?i.map((function(e){return c.a.createElement(u,{data:e,key:e.url})})):"loading")))};var E=function(){return c.a.createElement("div",{className:"interests-section"},c.a.createElement(d,null))},h=t(8),f=t(33);var v=function(){var e=Object(n.useState)(!1),a=Object(s.a)(e,2),t=a[0],r=a[1],l=function(){r(!t)},i={hidden:{x:-10,opacity:0},visible:{x:0,opacity:1}};return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",null,c.a.createElement(f.a,{className:"floating-menu btn-outline-light",onClick:l})),t&&c.a.createElement(c.a.Fragment,null,c.a.createElement(h.a.div,{id:"mySidenav",className:"sidenav py-5",initial:"hidden",animate:"visible",variants:{hidden:{width:0},visible:{width:"35vw",transition:{when:"beforeChildren",staggerChildren:.3,delayChildren:.4,type:"tween"}}}},c.a.createElement(h.a.h2,{className:"closebtn",onClick:l},"\xd7"),c.a.createElement(h.a.h3,{variants:i},c.a.createElement("a",{href:"/worldNews"}," WORLD NEWS  ")),c.a.createElement(h.a.h3,{variants:i},c.a.createElement("a",{href:"/business"},"BUSINESS")),c.a.createElement(h.a.h3,{variants:i},c.a.createElement("a",{href:"/technology"},"TECHNOLOGY")),c.a.createElement(h.a.h3,{variants:i},c.a.createElement("a",{href:"/sports"},"SPORTS"))),c.a.createElement(h.a.div,{variants:{hidden:{width:0},visible:{width:"100vw",transition:{type:"tween"}}},initial:"hidden",animate:"visible",className:"overlay",onClick:l})))};var p=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"container-fluid"},c.a.createElement(v,null),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-sm-9"},c.a.createElement(E,null)),c.a.createElement("div",{className:"col-sm-3"},c.a.createElement(m,null)))))};var g=function(e){var a=e.data;return c.a.createElement("div",{className:"col "},c.a.createElement("div",{className:"business card "},c.a.createElement("div",{className:"sqrcards"},c.a.createElement("img",{className:"card-img-top",width:"200px",height:"200px",src:null!==a.urlToImage?a.urlToImage:"https://ak4.picdn.net/shutterstock/videos/14402014/thumb/1.jpg"}),c.a.createElement("div",{className:"card-header"},c.a.createElement("h4",{className:"card-title text-color-light"},a.title+". . .")),c.a.createElement("div",{className:"card-body "},c.a.createElement("p",{className:"cardtext content-color"},null!==a.content?a.content+". . .":"Click below to read about it."),c.a.createElement("p",{className:" text-right "},c.a.createElement("a",{className:"linkstyle",href:a.url},"Read more..."))))))};function b(){var e=new Request("http://newsapi.org/v2/everything?q=business&apiKey=5ba33b83af9d4febab7e05a05f983793"),a=Object(n.useState)({}),t=Object(s.a)(a,2),r=t[0],l=t[1];Object(n.useEffect)((function(){fetch(e).then((function(e){return e.json()})).then((function(e){return l(e)})).catch((function(e){return console.log(e)}))}),[]);var i=r.articles;return console.log(i),c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"page"},c.a.createElement("div",{className:"row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4"},i?i.map((function(e){return c.a.createElement(g,{data:e,key:e.url})})):"loading")))}function N(){var e=new Request("http://newsapi.org/v2/everything?q=sports&apiKey=5ba33b83af9d4febab7e05a05f983793"),a=Object(n.useState)({}),t=Object(s.a)(a,2),r=t[0],l=t[1];Object(n.useEffect)((function(){fetch(e).then((function(e){return e.json()})).then((function(e){return l(e)})).catch((function(e){return console.log(e)}))}),[]);var i=r.articles;return console.log(i),c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"page"},c.a.createElement("div",{className:"row row-cols-md-4 "},i?i.map((function(e){return c.a.createElement(g,{data:e,key:e.url})})):"loading")))}function w(){var e=new Request("http://newsapi.org/v2/everything?domains=techcrunch.com&q=technology&apiKey=5ba33b83af9d4febab7e05a05f983793"),a=Object(n.useState)({}),t=Object(s.a)(a,2),r=t[0],l=t[1];Object(n.useEffect)((function(){fetch(e).then((function(e){return e.json()})).then((function(e){return l(e)})).catch((function(e){return console.log(e)}))}),[]);var i=r.articles;return console.log(i),c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"page"},c.a.createElement("div",{className:"row row-cols-md-4 "},i?i.map((function(e){return c.a.createElement(g,{data:e,key:e.url})})):"loading")))}function y(){var e=new Request("http://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=5ba33b83af9d4febab7e05a05f983793"),a=Object(n.useState)({}),t=Object(s.a)(a,2),r=t[0],l=t[1];Object(n.useEffect)((function(){fetch(e).then((function(e){return e.json()})).then((function(e){return l(e)})).catch((function(e){return console.log(e)}))}),[]);var i=r.articles;return console.log(i),c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"page"},c.a.createElement("div",{className:"row row-cols-md-4 "},i?i.map((function(e){return c.a.createElement(g,{data:e,key:e.url})})):"loading")))}var j=t(1);var k=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(j.c,null,c.a.createElement(j.a,{exact:!0,path:"/",component:p}),c.a.createElement(j.a,{path:"/business",component:b}),c.a.createElement(j.a,{path:"/sports",component:N}),c.a.createElement(j.a,{path:"/worldNews",component:y}),c.a.createElement(j.a,{path:"/technology",component:w})))},x=(t(29),t(30),t(34));var O=function(){return c.a.createElement("div",{className:"sticky-top header text-color-light"},c.a.createElement("div",{className:"d-flex user-header align-items-center"},c.a.createElement("div",{className:"container-fluid d-flex justify-content-between align-items-center"})),c.a.createElement("div",{className:"navigation d-flex align-items-center p-2"},c.a.createElement("div",{className:"container-fluid d-flex justify-content-between align-items-center"},c.a.createElement("div",{className:"header-name"},c.a.createElement("h2",null,"KHABAREIN")),c.a.createElement("div",{className:"d-flex"},c.a.createElement("div",{className:"search_bar"},c.a.createElement(x.a,{size:32}),c.a.createElement("input",null)),c.a.createElement("div",{className:"d-flex justify-content-evenly menu"},c.a.createElement("a",{className:"linkstyle",href:"/"},"Home"))))))};var S=function(){return c.a.createElement("div",{className:"fixed-bottom"},"App lore")},q=t(11);l.a.render(c.a.createElement(q.a,null,c.a.createElement(c.a.StrictMode,null,c.a.createElement(O,null),c.a.createElement(k,null),c.a.createElement(S,null))),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.60530d30.chunk.js.map