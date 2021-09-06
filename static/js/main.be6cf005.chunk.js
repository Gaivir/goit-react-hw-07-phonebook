(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{29:function(t,n,e){t.exports={list:"ContactList_list__1i1DD",button:"ContactList_button__1Tttu"}},70:function(t,n,e){"use strict";e.r(n);var c=e(0),r=e.n(c),a=e(10),o=e.n(a),u=e(11),i=e(12),s=e(15),b=e(13),j=e(6),l=e(29),d=e.n(l),f=e(8),h=e.n(f),O=e(2),m=Object(O.b)("contacts/fetchContactRequest"),p=Object(O.b)("contacts/fetchContactSuccess"),v=Object(O.b)("contacts/fetchContactError"),C=Object(O.b)("contacts/addContactRequest"),x=Object(O.b)("contacts/addContactSuccess"),g=Object(O.b)("contacts/addContactError"),y=Object(O.b)("contacts/deleteContactRequest"),I=Object(O.b)("contacts/deleteContactSuccess"),S=Object(O.b)("contacts/deleteContactError"),k=Object(O.b)("contacts/changeFilter");h.a.defaults.baseURL="http://localhost:4040";var w,D,L=function(){return function(t){t(m()),h.a.get("/contacts").then((function(n){var e=n.data;return t(p(e))})).catch((function(n){return t(v(n))}))}},F=function(t,n){return function(e){var c={name:t,number:n};e(C()),h.a.post("/contacts",c).then((function(t){var n=t.data;return e(x(n))})).catch((function(t){return e(g(t))}))}},R=function(t){return function(n){n(y()),h.a.delete("/contacts/".concat(t)).then((function(){return n(I(t))})).catch((function(t){return n(S(t))}))}},_=e(1),q=function(t,n){var e=n.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(e)}))},E=Object(j.b)((function(t){var n=t.contacts,e=n.items,c=n.filter;return{contacts:q(e,c)}}),(function(t){return{onDeleteContact:function(n){return t(R(n))}}}))((function(t){var n=t.contacts,e=t.onDeleteContact;return n.map((function(t){var n=t.id,c=t.name,r=t.number;return Object(_.jsx)("ul",{children:Object(_.jsxs)("li",{className:d.a.list,children:[c,": ",r,Object(_.jsx)("button",{onClick:function(){return e(n)},children:"Delete"})]},n)})}))})),N=e(3),A=e(19),T=e.n(A),J=function(t){Object(s.a)(e,t);var n=Object(b.a)(e);function e(){var t;Object(u.a)(this,e);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(t=n.call.apply(n,[this].concat(r))).state={name:"",number:""},t.nameInputId=T.a.generate(),t.numberInputId=T.a.generate(),t.handleNameChange=function(n){var e=n.currentTarget,c=e.name,r=e.value;t.setState(Object(N.a)({},c,r))},t.handleSubmit=function(n){var e=t.state,c=e.name,r=e.number;n.preventDefault(),t.props.onSubmit(c,r),t.formReset()},t.formReset=function(){t.setState({name:"",number:""})},t}return Object(i.a)(e,[{key:"render",value:function(){return Object(_.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(_.jsxs)("label",{htmlFor:this.nameInputId,children:["name",Object(_.jsx)("input",{type:"text",name:"name",value:this.state.name,onChange:this.handleNameChange,id:this.nameInputId})]}),Object(_.jsxs)("label",{htmlFor:this.numberInputId,children:["number",Object(_.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442 \u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:this.state.number,onChange:this.handleNameChange,id:this.numberInputId})]}),Object(_.jsx)("button",{type:"submit",children:"Add contacts"})]})}}]),e}(c.Component),M=Object(j.b)(null,(function(t){return{onSubmit:function(n,e){return t(F(n,e))}}}))(J),z=Object(j.b)((function(t){return{value:t.contacts.filter}}),(function(t){return{changFilter:function(n){return t(k(n.target.value))}}}))((function(t){var n=t.value,e=t.changFilter;return Object(_.jsxs)("label",{children:["Find contacts by name",Object(_.jsx)("input",{type:"text",value:n,onChange:e})]})})),B=function(t){Object(s.a)(e,t);var n=Object(b.a)(e);function e(){return Object(u.a)(this,e),n.apply(this,arguments)}return Object(i.a)(e,[{key:"componentDidMount",value:function(){this.props.fetchContacts()}},{key:"render",value:function(){return Object(_.jsxs)("div",{children:[Object(_.jsx)("h1",{children:"Phonebook"}),Object(_.jsx)(M,{}),Object(_.jsx)("h2",{children:"Contacts"}),Object(_.jsx)(z,{}),Object(_.jsx)(E,{}),this.props.isLoadingContacts&&Object(_.jsx)("h1",{children:"\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043c..."})]})}}]),e}(c.Component),P=Object(j.b)((function(t){return{isLoadingContacts:t.todos.loading}}),(function(t){return{fetchContacts:function(){return t(L())}}}))(B),U=e(14),G=e(30),H=e.n(G),K=e(7),Q=e(4),V=Object(O.c)([],(w={},Object(N.a)(w,p,(function(t,n){return n.payload})),Object(N.a)(w,x,(function(t,n){var e=n.payload;return[].concat(Object(U.a)(t),[e])})),Object(N.a)(w,I,(function(t,n){var e=n.payload;return t.filter((function(t){return t.id!==e}))})),w)),W=Object(O.c)(!1,(D={},Object(N.a)(D,m,(function(){return!0})),Object(N.a)(D,p,(function(){return!1})),Object(N.a)(D,v,(function(){return!1})),Object(N.a)(D,C,(function(){return!0})),Object(N.a)(D,x,(function(){return!1})),Object(N.a)(D,g,(function(){return!1})),Object(N.a)(D,y,(function(){return!0})),Object(N.a)(D,I,(function(){return!1})),Object(N.a)(D,S,(function(){return!1})),D)),X=Object(O.c)("",Object(N.a)({},k,(function(t,n){return n.payload}))),Y=Object(O.c)(null,{}),Z=Object(Q.b)({items:V,filter:X,loading:W,error:Y}),$=[].concat(Object(U.a)(Object(O.d)({serializableCheck:{ignoredActions:[K.a,K.f,K.b,K.c,K.d,K.e]}})),[H.a]),tt=Object(O.a)({reducer:{contacts:Z},middleware:$,devTools:!1});o.a.render(Object(_.jsx)(r.a.StrictMode,{children:Object(_.jsx)(j.a,{store:tt,children:Object(_.jsx)(P,{})})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.be6cf005.chunk.js.map