(this["webpackJsonpmy-expenses"]=this["webpackJsonpmy-expenses"]||[]).push([[0],{140:function(e,t,n){},141:function(e,t,n){},142:function(e,t,n){},144:function(e,t,n){},145:function(e,t,n){},146:function(e,t,n){},147:function(e,t,n){},449:function(e,t,n){},450:function(e,t,n){},451:function(e,t,n){},452:function(e,t,n){},453:function(e,t,n){"use strict";n.r(t);var a=n(21),c=n.n(a),s=n(18),l=n.n(s),i=(n(140),n(58)),r=n(17),u=(n(141),n(142),n(1)),j=function(e){var t="Card "+e.className;return Object(u.jsx)("div",{className:t,children:e.children})},o=(n(144),function(e){return Object(u.jsx)("div",{className:"expenses-filter",children:Object(u.jsxs)("div",{className:"expenses-filter__control",children:[Object(u.jsx)("label",{children:"Filter by year"}),Object(u.jsxs)("select",{onChange:function(t){e.onExpenseFilterSet(t.target.value)},value:e.selected,children:[Object(u.jsx)("option",{value:"2022",children:"2022"}),Object(u.jsx)("option",{value:"2021",children:"2021"}),Object(u.jsx)("option",{value:"2020",children:"2020"}),Object(u.jsx)("option",{value:"2019",children:"2019"})]})]})})}),d=n(16),b=(n(145),n(146),n(147),function(e){var t=e.date.toLocaleString("en-US",{month:"long"}),n=e.date.toLocaleString("en-US",{day:"2-digit"}),a=e.date.getFullYear();return Object(u.jsxs)(j,{className:"expense-date",children:[Object(u.jsx)("div",{className:"expense-date__month",children:t}),Object(u.jsx)("div",{className:"expense-date__year",children:a}),Object(u.jsx)("div",{className:"expense-date__day",children:n})]})}),x=function(e){return Object(u.jsx)("li",{children:Object(u.jsxs)(j,{className:"expense-item",children:[Object(u.jsx)(b,{date:e.date}),Object(u.jsx)("div",{className:"expense-item__description",children:Object(u.jsx)("h2",{children:e.title})}),Object(u.jsxs)("div",{className:"expense-item__price",children:["$",e.amount]})]})})},O=function(e){return 0===e.items.length?Object(u.jsx)("h3",{className:"expenses-list__fallback",children:"No Expenses Found For The Specified Period."}):Object(u.jsx)("ul",{className:"expenses-list",children:e.items.map((function(e){return Object(u.jsx)(x,{title:e.title,amount:e.amount,date:e.date},e.id)}))})},h=n(133),m=(n(88),n(449),function(e){var t="0%";return e.maxValue>0&&(t=Math.round(e.value/e.maxValue*100)+"%"),Object(u.jsxs)("div",{className:"chart-bar",children:[Object(u.jsx)("div",{className:"chart-bar__inner",children:Object(u.jsx)("div",{className:"chart-bar__fill",style:{height:t}})}),Object(u.jsx)("div",{className:"chart-bar__label",children:e.label})]})}),v=(n(450),function(e){var t=e.dataPoints.map((function(e){return e.value})),n=Math.max.apply(Math,Object(i.a)(t));return Object(u.jsx)("div",{className:"chart",children:e.dataPoints.map((function(e){return Object(u.jsx)(m,{value:e.value,maxValue:n,label:e.label},e.label)}))})}),p=function(e){var t,n=[{label:"Jan",value:0},{label:"Feb",value:0},{label:"Mar",value:0},{label:"Apr",value:0},{label:"May",value:0},{label:"Jun",value:0},{label:"Jul",value:0},{label:"Aug",value:0},{label:"Sep",value:0},{label:"Oct",value:0},{label:"Nov",value:0},{label:"Dec",value:0}],a=Object(h.a)(e.expenses);try{for(a.s();!(t=a.n()).done;){var c=t.value;n[c.date.getMonth()].value+=c.amount}}catch(s){a.e(s)}finally{a.f()}return 0===e.expenses.length?"":Object(u.jsx)(v,{dataPoints:n})},f=function(e){var t=Object(d.useState)("2021"),n=Object(r.a)(t,2),a=n[0],c=n[1],s=e.items.filter((function(e){return e.date.getFullYear().toString()===a}));return Object(u.jsx)("div",{children:Object(u.jsxs)(j,{className:"expenses",children:[Object(u.jsx)(o,{selected:a,onExpenseFilterSet:function(e){c(e)}}),Object(u.jsx)(p,{expenses:s}),Object(u.jsx)(O,{items:s})]})})},N=n(136),_=(n(451),n(452),function(e){var t=Object(d.useState)(""),n=Object(r.a)(t,2),a=n[0],c=n[1],s=Object(d.useState)(""),l=Object(r.a)(s,2),i=l[0],j=l[1],o=Object(d.useState)(""),b=Object(r.a)(o,2),x=b[0],O=b[1];return Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={title:a,amount:+i,date:new Date(x+"CST")};e.onNewExpenseSubmit(n),c(""),O(""),j("")},children:[Object(u.jsxs)("div",{className:"new-expense__controls",children:[Object(u.jsxs)("div",{className:"new-expense__control",children:[Object(u.jsx)("label",{children:"Title"}),Object(u.jsx)("input",{type:"text",required:!0,value:a,onChange:function(e){c(e.target.value)}})]}),Object(u.jsxs)("div",{className:"new-expense__control",children:[Object(u.jsx)("label",{children:"Amount"}),Object(u.jsx)("input",{type:"number",min:"0.00",step:"0.01",required:!0,value:i,onChange:function(e){j(e.target.value)}})]}),Object(u.jsxs)("div",{className:"new-expense__control",children:[Object(u.jsx)("label",{children:"Date"}),Object(u.jsx)("input",{type:"date",min:"01-01-2019",max:"12-31-2022",value:x,required:!0,onChange:function(e){O(e.target.value)}})]})]}),Object(u.jsxs)("div",{className:"new-expense__actions",children:[Object(u.jsx)("button",{onclick:function(){c(""),O(""),j(""),e.cancel()},children:"Cancel"}),Object(u.jsx)("button",{type:"submit",children:"Submit Expense"})]})]})}),g=function(e){var t=e.numberOfExpenses+1,n=Object(d.useState)(!1),a=Object(r.a)(n,2),c=a[0],s=a[1],l=Object(u.jsx)("button",{onClick:function(){s(!0)},children:"Create Expense"});return c&&(l=Object(u.jsx)(_,{onNewExpenseSubmit:function(n){var a=Object(N.a)({id:"e"+t},n);e.onAddExpense(a),s(!1)},cancel:function(){s(!1)}})),Object(u.jsx)(j,{className:"new-expense",children:l})},S=[{id:"e1",title:"Toilet Paper",amount:94.12,date:new Date(2020,7,14)},{id:"e2",title:"New TV",amount:799.49,date:new Date(2021,2,12)},{id:"e3",title:"Car Insurance",amount:294.67,date:new Date(2021,2,28)},{id:"e4",title:"New Desk (Wooden)",amount:450,date:new Date(2021,5,12)}],w=function(){var e=Object(d.useState)(S),t=Object(r.a)(e,2),n=t[0],a=t[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)(g,{onAddExpense:function(e){a((function(t){return[e].concat(Object(i.a)(t))}))},numberOfExpenses:n.length}),Object(u.jsx)(f,{items:n})]})};l.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(w,{})}),document.getElementById("root"))}},[[453,1,2]]]);
//# sourceMappingURL=main.ba5c126a.chunk.js.map