/*! For license information please see main.b1ae59ca.chunk.js.LICENSE.txt */
(this["webpackJsonpall-ears-front"]=this["webpackJsonpall-ears-front"]||[]).push([[0],{110:function(e,t,a){},118:function(e,t,a){},119:function(e,t,a){},120:function(e,t,a){},121:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(1),c=a.n(r),s=a(20),o=a.n(s),l=a(15),i=a(32),d=a(11),b=a(6),j=a(13),u=a.n(j),O=a(22),p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return{loading:!1,data:e,error:null}},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return{loading:!0,data:e,error:null}},h=function(e){return{loading:!1,data:e,error:null}},x=function(e){return{loading:!1,data:null,error:e}},f=function(e,t){var a="".concat(e,"_SUCCESS"),n="".concat(e,"_ERROR");return function(r){return function(){var c=Object(O.a)(u.a.mark((function c(s){var o;return u.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return s({type:e,param:r}),c.prev=1,c.next=4,t(r);case 4:o=c.sent,s({type:a,payload:o}),c.next=11;break;case 8:c.prev=8,c.t0=c.catch(1),s({type:n,payload:c.t0,error:!0});case 11:case"end":return c.stop()}}),c,null,[[1,8]])})));return function(e){return c.apply(this,arguments)}}()}},v=function(e){return e},g=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n="".concat(e,"_SUCCESS"),r="".concat(e,"_ERROR");return function(c,s){switch(s.type){case e:return Object(b.a)(Object(b.a)({},c),{},Object(d.a)({},t,m(a?c[t].data:null)));case n:return Object(b.a)(Object(b.a)({},c),{},Object(d.a)({},t,h(s.payload)));case r:return Object(b.a)(Object(b.a)({},c),{},Object(d.a)({},t,x(s.error)));default:return c}}},y=a(26),C=a.n(y),S=function(){var e=Object(O.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={headers:{"Content-Type":"application/json"}},e.next=3,C.a.get("http://localhost:8080/allEars/board",t);case 3:return a=e.sent,e.abrupt("return",a.data.rows);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=function(){var e=Object(O.a)(u.a.mark((function e(t){var a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{"Content-Type":"application/json"}},e.next=3,C.a.get("http://localhost:8080/allEars/board/".concat(t),a);case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(O.a)(u.a.mark((function e(t){var a,n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),(a=new FormData).append("boardTitle",t.boardTitle),a.append("boardCn",t.boardCn),a.append("file",t.file),n={headers:{"Content-Type":"multipart/form-data"}},e.next=8,C.a.post("http://localhost:8080/allEars/board",a,n);case 8:return r=e.sent,e.abrupt("return",r.data);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(O.a)(u.a.mark((function e(t){var a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{"Content-Type":"multipart/form-data"}},e.next=3,C.a.delete("http://localhost:8080/allEars/board/".concat(t),a);case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=a(131),R="board/GET_BOARD_LIST",B="board/GET_BOARD_LIST_SUCCESS",_="board/GET_BOARD_LIST_ERROR",k="board/GET_BOARD_DTL",D="board/GET_BOARD_DTL_SUCCESS",I="board/GET_BOARD_DTL_ERROR",A="board/INSERT_BOARD",L="board/INSERT_BOARD_SUCCESS",q="board/INSERT_BOARD_ERROR",F="board/DELETE_BOARD",P="board/DELETE_BOARD_SUCCESS",U="board/DELETE_BOARD_ERROR",G="board/TEST",z=f(R,S),J=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:v,n="".concat(e,"_SUCCESS"),r="".concat(e,"_ERROR");return function(c){return function(){var s=Object(O.a)(u.a.mark((function s(o){var l,i;return u.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return l=a(c),o({type:e,meta:l}),s.prev=2,s.next=5,t(c);case 5:i=s.sent,o({type:n,payload:i,meta:l}),s.next=12;break;case 9:s.prev=9,s.t0=s.catch(2),o({type:r,error:!0,payload:s.t0,meta:l});case 12:case"end":return s.stop()}}),s,null,[[2,9]])})));return function(e){return s.apply(this,arguments)}}()}}(k,T),V=f(A,E),H=f(F,N),M=Object(w.a)(G,(function(e,t){return{text:e,text2:t,id:3}})),W={boards:p(),board:{},result:p()};var Y="board_json/GET_BOARD_LIST",K="board_json/GET_BOARD_DTL",Q="board_json/INSERT_BOARD",X="board_json/DELETE_BOARD",Z=Object(w.a)(Y),$=(Object(w.a)(K,(function(e){return e})),Object(w.a)(Q,(function(e){return e}))),ee=Object(w.a)(X,(function(e){return e})),te={boards:[{boardSeq:1,boardTitle:"Hello",boardCn:"This is React Project",boardPhotoSbst:null},{boardSeq:2,boardTitle:"BYE",boardCn:"Sample Project",boardPhotoSbst:null}],board:{}},ae=3;var ne=a(60),re={key:"root",storage:a.n(ne).a,whitelist:["boardReducer","boardReducer_json"]},ce=Object(l.combineReducers)({boardReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R:case B:case _:return g(R,"boards",!0)(e,t);case k:case D:case I:return g(k,"board",!0)(e,t);case A:case q:case L:return g(A,"result",!0)(e,t);case F:case U:case P:return g(F,"result",!0)(e,t);case G:return console.log(t.payload),e;default:return e}},boardReducer_json:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Y:return Object(b.a)({},e);case K:return Object(b.a)(Object(b.a)({},e),{},{board:e.boards.filter((function(e){return e.boardSeq==t.payload}))});case Q:return Object(b.a)(Object(b.a)({},e),{},{boards:e.boards.concat({boardSeq:ae++,boardTitle:t.payload.boardTitle,boardCn:t.payload.boardCn,boardPhotoSbst:t.payload.boardPhotoSbst})});case X:return console.log(t),Object(b.a)(Object(b.a)({},e),{},{boards:e.boards.filter((function(e){return e.boardSeq!==t.payload}))});default:return e}}}),se=Object(i.a)(re,ce),oe=a(9),le=a(61),ie=a.n(le),de=a(62),be=a(63),je=a(64),ue=a.n(je),Oe=a(130),pe=a(18),me=a(65),he=a(66),xe=a(74),fe=a(73),ve=a(67),ge=a(68),ye=(a(110),a(8)),Ce=a(123),Se=a(124),Te=a(125),Ee=a(122),Ne=a(132);a(5);var we=c.a.memo((function(e){var t=e.board,a=e.deleteBoard,c=Object(oe.c)((function(e){return e.boardReducer})).board.data,s=Object(r.useCallback)((function(e){a(e)})),o=Object(oe.b)(),l=Object(r.useState)(!1),i=Object(ye.a)(l,2),d=i[0],b=i[1],j=function(){b(!d),o(J(t.boardSeq))};return Object(n.jsx)(Ce.a,{lg:"4",children:Object(n.jsx)(Se.a,{className:"card-lift--hover shadow border-0 mb-5",onClick:function(){return j()},children:Object(n.jsxs)(Te.a,{className:"py-5",children:[Object(n.jsx)("div",{className:"icon icon-shape icon-shape-primary rounded-circle mb-4",children:Object(n.jsx)("i",{className:"ni ni-check-bold"})}),Object(n.jsx)("h6",{className:"text-primary text-uppercase",children:t.boardTitle}),Object(n.jsx)("p",{className:"description mt-3",children:t.boardCn}),Object(n.jsx)(Ee.a,{type:"button",color:"danger",href:"#pablo",onClick:function(e){e.preventDefault(),s(t.boardSeq)},children:"DELETE"}),Object(n.jsxs)(Ne.a,{className:"modal-dialog-centered",isOpen:d,toggle:function(){return j()},children:[c?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{className:"modal-header",children:[Object(n.jsx)("h6",{className:"modal-title",id:"modal-title-default",children:c.boardTitle}),Object(n.jsx)("button",{"aria-label":"Close",className:"close","data-dismiss":"modal",type:"button",onClick:function(){return j()},children:Object(n.jsx)("span",{"aria-hidden":!0,children:"\xd7"})})]}),Object(n.jsxs)("div",{className:"modal-body",children:[Object(n.jsx)("p",{children:c.boardCn}),Object(n.jsx)("p",{children:null!=c.boardPhotoSbst?Object(n.jsx)("img",{style:{width:"300px"},src:"data:image/jpeg; base64, "+c.boardPhotoSbst}):null})]})]}):null,Object(n.jsx)("div",{className:"modal-footer",children:Object(n.jsx)(Ee.a,{className:"ml-auto",color:"link","data-dismiss":"modal",type:"button",onClick:function(){return j()},children:"Close"})})]})]})})},t.boardSeq)}));function Re(e){var t=e.boards,a=e.deleteBoard;return Object(n.jsx)(n.Fragment,{children:t.map((function(e){return Object(n.jsx)(we,{board:e,deleteBoard:a},e.boardSeq)}))})}var Be=c.a.memo(Re);function _e(e){var t=e.board,a=e.onChange,r=e.onSubmit,c=t.boardTitle,s=t.boardCn;return Object(n.jsx)("div",{children:Object(n.jsxs)("form",{onSubmit:function(e){e.preventDefault(),r()},children:[Object(n.jsx)("input",{name:"boardTitle",value:c,onChange:a}),Object(n.jsx)("input",{name:"boardCn",value:s,onChange:a}),Object(n.jsx)("button",{children:"\ub4f1\ub85d"})]})})}var ke=c.a.memo(_e);function De(e){var t=Object(r.useState)(e),a=Object(ye.a)(t,2),n=a[0],c=a[1];return[n,Object(r.useCallback)((function(e){var t=e.target,a=t.name,n=t.value;c((function(e){return Object(b.a)(Object(b.a)({},e),{},Object(d.a)({},a,n))}))}),[]),Object(r.useCallback)((function(){return c(e)}),[e])]}function Ie(){var e=Object(oe.c)((function(e){return e.boardReducer})),t=e.boards,a=e.result,c=Object(oe.b)(),s=De({boardTitle:"",boardCn:""}),o=Object(ye.a)(s,3),l=o[0],i=l.boardTitle,d=l.boardCn,b=o[1],j=o[2],u=Object(r.useCallback)((function(){c(V({boardTitle:i,boardCn:d})),alert("\ub4f1\ub85d\uc644\ub8cc"),j()}),[{boardTitle:i,boardCn:d}]),O=Object(r.useCallback)((function(e){c(H(e))}),[]);return Object(r.useEffect)((function(){c(z())}),[a]),t.loading?Object(n.jsx)("div",{children:"\ub85c\ub529\uc911..."}):t.error?Object(n.jsx)("div",{children:"\uc5d0\ub7ec \ubc1c\uc0dd!"}):t.data?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(ke,{board:{boardTitle:i,boardCn:d},onChange:b,onSubmit:u}),Object(n.jsx)(Be,{boards:t.data,deleteBoard:O}),Object(n.jsx)("button",{onClick:function(){return c(M("test","test2"))},children:"\ud14c\uc2a4\ud2b8"})]}):null}var Ae=c.a.memo(Ie);var Le=function(e){var t=e.board,a=t.boardTitle,r=t.boardCn,c=t.boardPhotoSbst;return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:a}),Object(n.jsx)("p",{children:r}),null!=c?Object(n.jsx)("img",{style:{width:"300px"},src:"data:image/jpeg; base64, "+c}):null]})};var qe=function(e){var t=e.match.params.boardSeq,a=Object(oe.c)((function(e){return e.boardReducer.board[t]}))||{loading:!1,data:null,error:null},c=a.data,s=a.loading,o=a.error,l=Object(oe.b)();return Object(r.useEffect)((function(){c||l(J(t))}),[t,l,c]),s&&!c?Object(n.jsx)("div",{children:"\ub85c\ub529\uc911..."}):o?Object(n.jsx)("div",{children:"\uc5d0\ub7ec \ubc1c\uc0dd!"}):c?Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(Le,{board:c})}):null};function Fe(){var e=Object(r.useState)({boardTitle:"",boardCn:""}),t=Object(ye.a)(e,2),a=t[0],c=t[1],s=Object(r.useCallback)((function(e){c(Object(b.a)(Object(b.a)({},a),{},Object(d.a)({},e.target.name,e.target.value)))}),[a]),o=Object(oe.b)(),l=Object(r.useCallback)((function(){o(V(a)),alert("\ub4f1\ub85d\uc644\ub8cc"),c({boardTitle:"",boardCn:""})}),[a]);return Object(n.jsx)(ke,{board:a,onChange:s,onSubmit:l})}var Pe=c.a.memo(Fe),Ue=a(126),Ge=a(127),ze=a(133),Je=a(128),Ve=a(129),He=a(24),Me=a.n(He),We=a(30),Ye=a.n(We),Ke=a(31),Qe=a.n(Ke);function Xe(){var e=Object(oe.c)((function(e){return e.boardReducer})),t=e.boards,a=e.result,c=De({boardTitle:"",boardCn:"",file:null}),s=Object(ye.a)(c,3),o=s[0],l=o.boardTitle,i=o.boardCn,d=o.file,b=s[1],j=s[2],u=Object(r.useState)(!1),O=Object(ye.a)(u,2),p=O[0],m=O[1],h=Object(r.useState)(!1),x=Object(ye.a)(h,2),f=x[0],v=x[1],g=Object(r.useState)(!1),y=Object(ye.a)(g,2),C=y[0],S=y[1],T=Object(oe.b)(),E=Object(r.useRef)(0);Object(r.useEffect)((function(){document.documentElement.scrollTop=0,document.scrollingElement.scrollTop=0,E.current.scrollIntoView(),T(z())}),[a]),Object(r.useEffect)((function(){setTimeout((function(){p?m(!1):f?v(!1):C&&S(!1)}),3e3)}),[p,f,C]);var N=Object(r.useCallback)((function(){if(""!=l&&""!=i){var e=document.getElementsByName("file")[0].files[0];T(V({boardTitle:l,boardCn:i,file:e})),m(!0),j(),document.getElementById("exampleCustomFileBrowser").value="",document.getElementsByClassName("custom-file-label")[0].innerText="Choose file"}else v(!0)}),[{boardTitle:l,boardCn:i,file:d}]),w=Object(r.useCallback)((function(e){T(H(e)),S(!0)}),[]);return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("main",{ref:E,children:[Object(n.jsxs)("div",{className:"position-relative",children:[Object(n.jsxs)("section",{className:"section section-lg section-shaped pb-250",children:[Object(n.jsxs)("div",{className:"shape shape-style-1 shape-default",children:[Object(n.jsx)("span",{}),Object(n.jsx)("span",{}),Object(n.jsx)("span",{}),Object(n.jsx)("span",{}),Object(n.jsx)("span",{}),Object(n.jsx)("span",{})]}),Object(n.jsx)(Ue.a,{className:"py-lg-md d-flex",children:Object(n.jsx)("div",{className:"col px-0",children:Object(n.jsx)(Ge.a,{children:Object(n.jsxs)(Ce.a,{lg:"6",children:[Object(n.jsxs)("h1",{className:"display-3 text-white",children:["Board",Object(n.jsx)("span",{children:"insert board"})]}),Object(n.jsxs)(Ye.a,{children:[Object(n.jsx)(Me.a,{type:"text",placeholder:"Title",style:{marginBottom:"10px"},name:"boardTitle",value:l,onChange:b}),Object(n.jsx)(Me.a,{type:"textarea",placeholder:"Content ...",rows:"3",name:"boardCn",value:i,onChange:b,style:{marginBottom:"10px"}}),Object(n.jsx)(ze.a,{type:"file",id:"exampleCustomFileBrowser",name:"file"}),Object(n.jsx)(Qe.a,{type:"button",color:"secondary",size:"m",style:{marginTop:"10px"},onClick:N,children:"submit"})]})]})})})}),Object(n.jsx)("div",{className:"separator separator-bottom separator-skew",children:Object(n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none",version:"1.1",viewBox:"0 0 2560 100",x:"0",y:"0",children:Object(n.jsx)("polygon",{className:"fill-white",points:"2560 0 2560 100 0 100"})})})]}),Object(n.jsxs)(Je.a,{color:"success",isOpen:p,fade:!0,style:{position:"fixed",width:"100%",top:"0px",zIndex:100},children:[Object(n.jsx)("span",{className:"alert-inner--icon",children:Object(n.jsx)("i",{className:"ni ni-like-2"})}),Object(n.jsxs)("span",{className:"alert-inner--text ml-1",children:[Object(n.jsx)("strong",{children:"SUCCESS!"})," \uac8c\uc2dc\ubb3c\uc774 \ub4f1\ub85d\ub418\uc5c8\uc2b5\ub2c8\ub2e4."]})]}),Object(n.jsxs)(Je.a,{color:"danger",isOpen:f,fade:!0,style:{position:"fixed",width:"100%",top:"0px",zIndex:100},children:[Object(n.jsx)("span",{className:"alert-inner--icon",children:Object(n.jsx)("i",{className:"ni ni-support-16"})}),Object(n.jsxs)("span",{className:"alert-inner--text ml-1",children:[Object(n.jsx)("strong",{children:"DANGER!"})," \ub0b4\uc6a9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694!"]})]}),Object(n.jsxs)(Je.a,{color:"warning",isOpen:C,fade:!0,style:{position:"fixed",width:"100%",top:"0px",zIndex:100},children:[Object(n.jsx)("span",{className:"alert-inner--icon",children:Object(n.jsx)("i",{className:"ni ni-bell-55"})}),Object(n.jsxs)("span",{className:"alert-inner--text ml-1",children:[Object(n.jsx)("strong",{children:"SUCCESS!"})," \uac8c\uc2dc\ubb3c\uc774 \uc0ad\uc81c\ub418\uc5c8\uc2b5\ub2c8\ub2e4!"]})]})]}),t.loading||t.error||!t.data?Object(n.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"-80px"},children:Object(n.jsx)(Ve.a,{type:"grow",color:"light",style:{width:"8rem",height:"8rem"}})}):Object(n.jsx)("section",{className:"section section-lg pt-lg-0 mt--200",children:Object(n.jsx)(Ue.a,{children:Object(n.jsx)(Ge.a,{className:"justify-content-center",children:Object(n.jsx)(Ce.a,{lg:"12",children:Object(n.jsx)(Ge.a,{className:"row-grid",children:Object(n.jsx)(Be,{boards:t.data,deleteBoard:w})})})})})})]})})}var Ze=c.a.memo(Xe),$e=c.a.memo((function(e){var t=e.board,a=e.deleteBoard,c=Object(r.useCallback)((function(e){a(e)})),s=Object(r.useState)(!1),o=Object(ye.a)(s,2),l=o[0],i=o[1],d=function(){i(!l)};return Object(n.jsx)(Ce.a,{lg:"4",children:Object(n.jsx)(Se.a,{className:"card-lift--hover shadow border-0 mb-5",onClick:function(){return d()},children:Object(n.jsxs)(Te.a,{className:"py-5",children:[Object(n.jsx)("div",{className:"icon icon-shape icon-shape-primary rounded-circle mb-4",children:Object(n.jsx)("i",{className:"ni ni-check-bold"})}),Object(n.jsx)("h6",{className:"text-primary text-uppercase",children:t.boardTitle}),Object(n.jsx)("p",{className:"description mt-3",children:t.boardCn}),Object(n.jsx)(Ee.a,{type:"button",color:"danger",href:"#pablo",onClick:function(e){e.preventDefault(),c(t.boardSeq)},children:"DELETE"}),Object(n.jsxs)(Ne.a,{className:"modal-dialog-centered",isOpen:l,toggle:function(){return d()},children:[Object(n.jsxs)("div",{className:"modal-header",children:[Object(n.jsx)("h6",{className:"modal-title",id:"modal-title-default",children:t.boardTitle}),Object(n.jsx)("button",{"aria-label":"Close",className:"close","data-dismiss":"modal",type:"button",onClick:function(){return d()},children:Object(n.jsx)("span",{"aria-hidden":!0,children:"\xd7"})})]}),Object(n.jsxs)("div",{className:"modal-body",children:[Object(n.jsx)("p",{children:t.boardCn}),Object(n.jsx)("p",{children:null!=t.boardPhotoSbst?Object(n.jsx)("img",{id:"image",style:{width:"300px"},src:function(e){var t=new FileReader;t.readAsDataURL(e),t.onload=function(){null!=document.getElementById("image")&&(document.getElementById("image").src=t.result)}}(t.boardPhotoSbst)}):null})]}),Object(n.jsx)("div",{className:"modal-footer",children:Object(n.jsx)(Ee.a,{className:"ml-auto",color:"link","data-dismiss":"modal",type:"button",onClick:function(){return d()},children:"Close"})})]})]})})},t.boardSeq)}));function et(e){var t=e.boards,a=e.deleteBoard;return Object(n.jsx)(n.Fragment,{children:t.map((function(e){return Object(n.jsx)($e,{board:e,deleteBoard:a},e.boardSeq)}))})}var tt=c.a.memo(et);function at(){var e=Object(oe.b)(),t=Object(r.useRef)(0),a=Object(oe.c)((function(e){return e.boardReducer_json})).boards,c=De({boardTitle:"",boardCn:"",boardPhotoSbst:null}),s=Object(ye.a)(c,3),o=s[0],l=o.boardTitle,i=o.boardCn,d=(o.boardPhotoSbst,s[1]),b=s[2];Object(r.useEffect)((function(){document.documentElement.scrollTop=0,document.scrollingElement.scrollTop=0,t.current.scrollIntoView(),e(Z())}),[]);var j=Object(r.useState)(!1),u=Object(ye.a)(j,2),O=u[0],p=u[1],m=Object(r.useState)(!1),h=Object(ye.a)(m,2),x=h[0],f=h[1],v=Object(r.useState)(!1),g=Object(ye.a)(v,2),y=g[0],C=g[1];Object(r.useEffect)((function(){setTimeout((function(){O?p(!1):x?f(!1):y&&C(!1)}),3e3)}),[O,x,y]);var S=Object(r.useCallback)((function(){if(""!=l&&""!=i){var t=document.getElementsByName("file")[0].files[0];e($({boardTitle:l,boardCn:i,boardPhotoSbst:t})),p(!0),b(),document.getElementById("exampleCustomFileBrowser").value="",document.getElementsByClassName("custom-file-label")[0].innerText="Choose file"}else f(!0)}),[{boardTitle:l,boardCn:i}]),T=Object(r.useCallback)((function(t){e(ee(t)),C(!0)}),[]);return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("main",{ref:t,children:[Object(n.jsxs)("div",{className:"position-relative",children:[Object(n.jsxs)("section",{className:"section section-lg section-shaped pb-250",children:[Object(n.jsxs)("div",{className:"shape shape-style-1 shape-default",children:[Object(n.jsx)("span",{}),Object(n.jsx)("span",{}),Object(n.jsx)("span",{}),Object(n.jsx)("span",{}),Object(n.jsx)("span",{}),Object(n.jsx)("span",{})]}),Object(n.jsx)(Ue.a,{className:"py-lg-md d-flex",children:Object(n.jsx)("div",{className:"col px-0",children:Object(n.jsx)(Ge.a,{children:Object(n.jsxs)(Ce.a,{lg:"6",children:[Object(n.jsxs)("h1",{className:"display-3 text-white",children:["Board",Object(n.jsx)("span",{children:"insert board"})]}),Object(n.jsxs)(Ye.a,{children:[Object(n.jsx)(Me.a,{type:"text",placeholder:"Title",style:{marginBottom:"10px"},name:"boardTitle",value:l,onChange:d}),Object(n.jsx)(Me.a,{type:"textarea",placeholder:"Content ...",rows:"3",name:"boardCn",value:i,onChange:d,style:{marginBottom:"10px"}}),Object(n.jsx)(ze.a,{type:"file",id:"exampleCustomFileBrowser",name:"file"}),Object(n.jsx)(Qe.a,{type:"button",color:"secondary",size:"m",style:{marginTop:"10px"},onClick:S,children:"submit"})]})]})})})}),Object(n.jsx)("div",{className:"separator separator-bottom separator-skew",children:Object(n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none",version:"1.1",viewBox:"0 0 2560 100",x:"0",y:"0",children:Object(n.jsx)("polygon",{className:"fill-white",points:"2560 0 2560 100 0 100"})})})]}),Object(n.jsxs)(Je.a,{color:"success",isOpen:O,fade:!0,style:{position:"fixed",width:"100%",top:"0px",zIndex:100},children:[Object(n.jsx)("span",{className:"alert-inner--icon",children:Object(n.jsx)("i",{className:"ni ni-like-2"})}),Object(n.jsxs)("span",{className:"alert-inner--text ml-1",children:[Object(n.jsx)("strong",{children:"SUCCESS!"})," \uac8c\uc2dc\ubb3c\uc774 \ub4f1\ub85d\ub418\uc5c8\uc2b5\ub2c8\ub2e4."]})]}),Object(n.jsxs)(Je.a,{color:"danger",isOpen:x,fade:!0,style:{position:"fixed",width:"100%",top:"0px",zIndex:100},children:[Object(n.jsx)("span",{className:"alert-inner--icon",children:Object(n.jsx)("i",{className:"ni ni-support-16"})}),Object(n.jsxs)("span",{className:"alert-inner--text ml-1",children:[Object(n.jsx)("strong",{children:"DANGER!"})," \ub0b4\uc6a9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694!"]})]}),Object(n.jsxs)(Je.a,{color:"warning",isOpen:y,fade:!0,style:{position:"fixed",width:"100%",top:"0px",zIndex:100},children:[Object(n.jsx)("span",{className:"alert-inner--icon",children:Object(n.jsx)("i",{className:"ni ni-bell-55"})}),Object(n.jsxs)("span",{className:"alert-inner--text ml-1",children:[Object(n.jsx)("strong",{children:"SUCCESS!"})," \uac8c\uc2dc\ubb3c\uc774 \uc0ad\uc81c\ub418\uc5c8\uc2b5\ub2c8\ub2e4!"]})]})]}),void 0==a?Object(n.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"-80px"},children:Object(n.jsx)(Ve.a,{type:"grow",color:"light",style:{width:"8rem",height:"8rem"}})}):Object(n.jsx)("section",{className:"section section-lg pt-lg-0 mt--200",children:Object(n.jsx)(Ue.a,{children:Object(n.jsx)(Ge.a,{className:"justify-content-center",children:Object(n.jsx)(Ce.a,{lg:"12",children:Object(n.jsx)(Ge.a,{className:"row-grid",children:Object(n.jsx)(tt,{boards:a,deleteBoard:T})})})})})})]})})}var nt=[{path:"/all-ears-front",component:c.a.memo(at),exact:!0},{path:"/",component:Ze,exact:!0},{path:"/board/detail/:boardSeq",component:qe,exact:!0},{path:"/board/insert",component:Pe,exact:!0},{path:"/list",component:Ae,exact:!0}],rt=function(e){return Object(n.jsx)(Oe.a,{path:e.path,render:function(t){return Object(n.jsx)(e.component,Object(b.a)(Object(b.a)({},t),{},{exact:e.exact,routes:e.routes}))}})};function ct(){var e=Object(ve.a)(["\n  body {\n    background: #e9ecef;\n  }\n"]);return ct=function(){return e},e}Object(ge.a)(ct());var st=function(e){Object(xe.a)(a,e);var t=Object(fe.a)(a);function a(){return Object(me.a)(this,a),t.apply(this,arguments)}return Object(he.a)(a,[{key:"render",value:function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("div",{children:Object(n.jsx)(Oe.c,{children:nt.map((function(e,t){return Object(n.jsx)(rt,Object(b.a)({},e),t)}))})})})}}]),a}(r.Component),ot=a(72),lt=(a(118),a(119),a(120),Object(pe.a)()),it=[ue.a,be.a.withExtraArgument({history:lt}),ie.a],dt=Object(l.createStore)(se,Object(de.composeWithDevTools)(l.applyMiddleware.apply(void 0,it))),bt=Object(i.b)(dt);o.a.render(Object(n.jsx)(Oe.b,{history:lt,basename:"/all-ears-front",children:Object(n.jsx)(oe.a,{store:dt,children:Object(n.jsx)(ot.a,{persistor:bt,children:Object(n.jsx)(st,{})})})}),document.getElementById("root"))}},[[121,1,2]]]);
//# sourceMappingURL=main.b1ae59ca.chunk.js.map