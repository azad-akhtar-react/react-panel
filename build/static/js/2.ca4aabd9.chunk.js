(this.webpackJsonpCNAPP=this.webpackJsonpCNAPP||[]).push([[2],{317:function(e,t,n){"use strict";n.r(t);var c=n(6),r=n(12),a=n(7),o=n(1),s=n(44),i=n(38),l=n(21),d=n(157),j=n(47),b=n.n(j),u=n(128),h=n(158),m=n(123),O=n(314),f=n(49),p=n(118),g="http://localhost:8080",x=function(e){var t=e.token;return p.a.get("".concat(g,"/clouds"),{headers:{Authorization:"Bearer ".concat(t),Accept:"application/json"}})},v=function(e,t){var n=e.token;return p.a.post("".concat(g,"/clouds"),t,{headers:{Authorization:"Bearer ".concat(n),Accept:"application/json"}})},w=n(10),N=function(){var e=Object(s.b)(),t=Object(m.a)(),n=Object(o.useState)(!1),j=Object(a.a)(n,2),p=j[0],g=j[1],x=Object(o.useState)(!1),N=Object(a.a)(x,2),S=N[0],k=N[1],y=Object(o.useState)(!1),z=Object(a.a)(y,2),C=z[0],T=z[1],W=Object(o.useState)(!0),F=Object(a.a)(W,2),A=F[0],P=F[1],M=d.a().shape({widgetOne:d.b().required("Please enter widget name"),widgetTwo:d.b().required("Please enter widget name")}),I=Object(u.e)({mode:"onChange",resolver:Object(h.a)(M)},{defaultValues:{widgetOne:"",widgetTwo:""}}),B=I.reset,V=I.control,q=I.handleSubmit,D=I.formState.errors,E=function(){T(!0),k(!S)},J=function(){var n=Object(r.a)(Object(c.a)().mark((function n(r,a){var o,s;return Object(c.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return g(!0),o={name:null===r||void 0===r?void 0:r.widgetOne},n.next=4,v({token:t},o).catch((function(e){g(!1),b.a.success(e.response.data.message)}));case 4:return s=n.sent,console.log("result",s),s?(g(!1),B({widgetOne:"",widgetTwo:""}),b.a.success("Widget added successfully"),e(Object(f.d)(!0)),P(!1),k(!S)):g(!1),n.abrupt("return",!1);case 8:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}();return Object(w.jsx)("div",{children:Object(w.jsxs)("div",{children:[Object(w.jsxs)(i.b,{color:"dark",onClick:E,className:"addWidgetButton",children:[Object(w.jsx)(O.a,{size:15})," Add Widget"]}),Object(w.jsxs)(i.v,{scrollable:C,backdrop:A,direction:"end",className:"addFormHeader",isOpen:S,toggle:E,children:[Object(w.jsx)(i.x,{className:"addForm",toggle:E,children:"Add Widget"}),Object(w.jsx)(i.w,{children:Object(w.jsx)(w.Fragment,{children:Object(w.jsxs)(i.m,{onSubmit:q((function(e){Object.values(e).every((function(e){return e.length>0}))?J(e):console.log("error")})),children:[Object(w.jsxs)(i.y,{children:[Object(w.jsx)(i.g,{md:"12",sm:"12",className:"",children:Object(w.jsxs)("div",{className:"mb-1",children:[Object(w.jsx)(i.r,{className:"form-label",for:"name",children:"Widget Two Name"}),Object(w.jsx)(u.a,{id:"name",name:"widgetOne",defaultValue:"",control:V,render:function(e){var t=e.field;return Object(w.jsx)(i.o,Object(l.a)(Object(l.a)({autoComplete:"off",className:"myCapitalized"},t),{},{placeholder:"Widget Name",invalid:D.widgetOne&&!0}))}}),D.widgetOne&&Object(w.jsx)(i.n,{children:D.widgetOne.message})]})}),Object(w.jsx)(i.g,{md:"12",sm:"12",className:"",children:Object(w.jsxs)("div",{className:"mb-1",children:[Object(w.jsx)(i.r,{className:"form-label",for:"name",children:"Widget Two Name"}),Object(w.jsx)(u.a,{id:"name",name:"widgetTwo",defaultValue:"",control:V,render:function(e){var t=e.field;return Object(w.jsx)(i.o,Object(l.a)(Object(l.a)({autoComplete:"off",className:"myCapitalized"},t),{},{placeholder:"Widget Name",invalid:D.widgetTwo&&!0}))}}),D.widgetTwo&&Object(w.jsx)(i.n,{children:D.widgetTwo.message})]})})]}),Object(w.jsx)(i.y,{children:Object(w.jsxs)(i.g,{xs:12,className:"text-right pt-50",children:[Object(w.jsx)(i.b,{color:"secondary",className:"me-1",toggle:E,children:"Cancel"}),Object(w.jsx)(i.b,{type:"submit",color:"primary",children:p?Object(w.jsx)(i.z,{color:"light",size:"sm"}):"Confirm"})]})})]})})})]})]})})},S=n(183),k=n.n(S),y=function(){var e={legend:{show:!0,position:"right"},labels:["Passed (7253)","Warning (681)","Not Available (36)","Failed (1689)"],colors:["#008000","#d3d3d3","#ffe700","#d00505fc"],dataLabels:{enabled:!1,formatter:function(e){return"".concat(parseInt(e))}},plotOptions:{pie:{donut:{labels:{show:!0,name:{fontSize:"0.5rem",fontFamily:"Montserrat"},value:{fontSize:"0.7rem",fontWeight:"bold",fontFamily:"Montserrat",formatter:function(e){return"".concat(parseInt(e))}},total:{show:!0,fontSize:"0.8rem",position:"top",label:"Total",formatter:function(e){var t,n=null===e||void 0===e||null===(t=e.config)||void 0===t?void 0:t.series.reduce((function(e,t){return e+t}));return"".concat(parseInt(n))}}}}}},responsive:[{breakpoint:992,options:{chart:{height:380},legend:{position:"bottom"}}},{breakpoint:576,options:{chart:{height:320},plotOptions:{pie:{donut:{labels:{show:!0,name:{fontSize:"1rem"},value:{fontSize:"1rem"},total:{fontSize:"1.5rem"}}}}}}}]};return Object(w.jsx)(w.Fragment,{children:Object(w.jsx)("div",{children:Object(w.jsx)(k.a,{options:e,series:[7253,36,681,1689],type:"donut",height:230})})})},z=function(){var e={legend:{show:!0,position:"right"},labels:["Connected","Not Connected"],colors:["#e5f1f7","#0080ff"],dataLabels:{enabled:!1,formatter:function(e){return"".concat(parseInt(e),"%")}},plotOptions:{pie:{donut:{labels:{fontWeight:"bold",show:!0,name:{fontSize:"0.7rem",fontWeight:"bold",fontFamily:"Montserrat"},value:{fontSize:"1rem",fontWeight:"bold",fontFamily:"Montserrat",formatter:function(e){return"".concat(parseInt(e))}},total:{show:!0,fontSize:"0.8rem",formatter:function(e){var t,n=null===e||void 0===e||null===(t=e.config)||void 0===t?void 0:t.series.reduce((function(e,t){return e+t}));return"".concat(parseInt(n))},label:"Total"}}}}},responsive:[{breakpoint:992,options:{chart:{height:380},legend:{position:"bottom"}}},{breakpoint:576,options:{chart:{height:320},plotOptions:{pie:{donut:{labels:{show:!0,name:{fontSize:"1.5rem"},value:{fontSize:"1rem"},total:{fontSize:"1.5rem"}}}}}}}]};return Object(w.jsx)(w.Fragment,{children:Object(w.jsx)(k.a,{options:e,series:[2,2],type:"donut",height:230})})};t.default=function(){var e=Object(s.b)(),t=Object(m.a)(),n=Object(o.useState)(!1),l=Object(a.a)(n,2),d=(l[0],l[1]),j=(Object(s.c)(f.b),function(){var n=Object(r.a)(Object(c.a)().mark((function n(){var r,a,o;return Object(c.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,x({token:t});case 2:(r=n.sent)?(d(!1),e(Object(f.c)(null===r||void 0===r?void 0:r.data))):(d(!1),"jwt malformed"===(null===r||void 0===r||null===(a=r.data)||void 0===a||null===(o=a.data)||void 0===o?void 0:o.errorMessage)&&(toast.success("Token has been expired"),navigate("/login")));case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}());return Object(o.useEffect)((function(){d(!1),j();var e=setTimeout((function(){return 3e3}));return function(){clearTimeout(e)}}),[]),Object(w.jsx)(w.Fragment,{children:Object(w.jsxs)(i.i,{children:[Object(w.jsxs)(i.y,{className:"mb-2",children:[Object(w.jsx)(i.g,{md:"6",children:Object(w.jsx)("h3",{children:"CSPM Executive Dashboard"})}),Object(w.jsx)(i.g,{md:"6",children:Object(w.jsx)("div",{className:"float-end",children:Object(w.jsx)(N,{})})})]}),Object(w.jsxs)(i.y,{children:[Object(w.jsx)(i.g,{xl:"4",md:"6",sm:"",children:Object(w.jsxs)(i.c,{children:[Object(w.jsx)(i.e,{className:"p-1",children:Object(w.jsx)(i.f,{children:Object(w.jsx)("strong",{children:Object(w.jsx)("h6",{className:"dark mb-0",children:"Cloud Accounts"})})})}),Object(w.jsx)(i.d,{children:Object(w.jsx)(z,{})})]})}),Object(w.jsx)(i.g,{xl:"4",md:"6",sm:"",children:Object(w.jsxs)(i.c,{children:[Object(w.jsx)(i.e,{className:"p-1",children:Object(w.jsx)(i.f,{children:Object(w.jsx)("strong",{children:Object(w.jsx)("h6",{className:"dark mb-0",children:"Cloud Risk Management"})})})}),Object(w.jsx)(i.d,{children:Object(w.jsx)(y,{})})]})}),Object(w.jsx)(i.g,{xl:"4",md:"6",sm:"",children:Object(w.jsxs)(i.c,{children:[Object(w.jsx)(i.e,{children:Object(w.jsx)(i.f,{children:"Kick start your admin panel \ud83d\ude80"})}),Object(w.jsx)(i.d,{children:Object(w.jsx)("h6",{children:"Welcome to Dashboard"})})]})})]})]})})}}}]);
//# sourceMappingURL=2.ca4aabd9.chunk.js.map