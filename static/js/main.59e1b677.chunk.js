(this.webpackJsonp117_firebase=this.webpackJsonp117_firebase||[]).push([[0],{125:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(11),i=a.n(r),l=(a(58),a(2)),c=a(3),s=a(6),d=a(5),u=(a(59),a(37),a(17));a(66);u.initializeApp({apiKey:"AIzaSyC_dtrIhjzmviMkAEGb4J3575eBmCLVH-Y",authDomain:"notereactjs-64536.firebaseapp.com",databaseURL:"https://notereactjs-64536.firebaseio.com",projectId:"notereactjs-64536",storageBucket:"notereactjs-64536.appspot.com",messagingSenderId:"62026741961",appId:"1:62026741961:web:af8db3e538cafc3860b518",measurementId:"G-J6YNCE05WE"});var m=u.database().ref("dataForNote/"),p=a(4),f=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).handleAdd=function(t){t.preventDefault(),e.props.isEditForm&&e.props.changEditStatus(),e.props.changAddStatus()},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark mb-4",style:{backgroundColor:"black"}},o.a.createElement("a",{className:"navbar-brand",href:"o"},"React-Redux-Firebase"),o.a.createElement("button",{className:"navbar-toggler d-lg-none",type:"button","data-toggle":"collapse","data-target":"#collapsibleNavId","aria-controls":"collapsibleNavId","aria-expanded":"false","aria-label":"Toggle navigation"}),o.a.createElement("div",{className:"collapse navbar-collapse  justify-content-end",id:"collapsibleNavId"},o.a.createElement("ul",{className:"navbar-nav  mt-2 mt-lg-0 float-right"},o.a.createElement("li",{className:"nav-item active"},o.a.createElement("a",{className:"nav-link",href:"#"},"Home ",o.a.createElement("span",{className:"sr-only"},"(current)"))),o.a.createElement("li",{className:"nav-item"},o.a.createElement("a",{className:"nav-link",href:"#",onClick:function(t){return e.handleAdd(t)}},"Th\xeam ghi ch\xfa"))))))}}]),a}(n.Component),h=Object(p.b)((function(e,t){return{isEditForm:e.isEdit,isAddForm:e.isAdd}}),(function(e,t){return{changEditStatus:function(){e({type:"CHANGE_EDIT"})},changAddStatus:function(){e({type:"CHANGE_ADD_STATUS"})}}}))(f),b=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).editItem=function(){e.props.changeEdit(),e.props.isAddForm&&e.props.changAddStatus(),console.log(e.props.getEditData(e.props.note))},e.deleteData=function(){console.log(e.props.note),e.props.getDeleteData(e.props.note.id),e.props.alertOn("X\xf3a th\xe0nh c\xf4ng: "+e.props.note.noteTitle,"info")},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-header",role:"tab",id:"note1"},o.a.createElement("h5",{className:"mb-0"},o.a.createElement("a",{"data-toggle":"collapse","data-parent":"#noteList",href:"#number"+this.props.i,"aria-expanded":"true","aria-controls":"noteConten1"},this.props.noteTitle),o.a.createElement("button",{class:"btn btn-outline-info float-right ml-2",onClick:function(){return e.editItem()}},"S\u1eeda ",o.a.createElement("span",{class:"badge badge-primary"})),o.a.createElement("button",{class:"btn btn-outline-info float-right",onClick:function(){return e.deleteData()}},"X\xf3a ",o.a.createElement("span",{class:"badge badge-primary"})))),o.a.createElement("div",{id:"number"+this.props.i,className:"collapse in",role:"tabpanel","aria-labelledby":"note1"},o.a.createElement("div",{className:"card-body"},this.props.noteContent)))}}]),a}(n.Component),E=Object(p.b)((function(e,t){return{isEditForm:e.isEdit,isAddForm:e.isAdd}}),(function(e,t){return{changeEdit:function(){e({type:"CHANGE_EDIT"})},changAddStatus:function(){e({type:"CHANGE_ADD_STATUS"})},getEditData:function(t){e({type:"GET_EDIT_DATA",editObject:t})},getDeleteData:function(t){e({type:"DELETE",deleteId:t})},alertOn:function(t,a){e({type:"ALERT_ON",alertContent:t,alertStyle:a})},alertOff:function(){e({type:"ALERT_OFF"})}}}))(b),g=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).getData=function(){if(n.state.dataFirebase)return n.state.dataFirebase.map((function(e,t){return o.a.createElement(E,{key:t,i:t,noteTitle:e.noteTitle,noteContent:e.noteContent,note:e})}));console.log(n.state.dataFirebase)},n.state={dataFirebase:[]},n}return Object(c.a)(a,[{key:"UNSAFE_componentWillMount",value:function(){var e=this;m.on("value",(function(t){var a=[];t.forEach((function(e){var t=e.key,n=e.val().noteTitle,o=e.val().notecontent;a.push({id:t,noteTitle:n,noteContent:o})})),e.setState({dataFirebase:a})}))}},{key:"render",value:function(){return o.a.createElement("div",{class:"col"},o.a.createElement("div",{id:"noteList",role:"tablist","aria-multiselectable":"true"},this.getData()))}}]),a}(n.Component),v=a(12),y=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).isChange=function(e){var t=e.target.name,a=e.target.value;console.log(t),console.log(a),n.setState(Object(v.a)({},t,a))},n.addData=function(e,t){if(n.state.id){console.log("dang sua du lieu");var a={};a.id=n.state.id,a.noteTitle=n.state.noteTitle,a.noteContent=n.state.noteContent,n.props.editDataStore(a),n.props.changEditStatus(),n.props.alertOn("s\u1eeda th\xe0nh c\xf4ng","success")}},n.state={noteTitle:"",noteContent:"",id:""},n}return Object(c.a)(a,[{key:"UNSAFE_componentWillMount",value:function(){this.props.infoItem&&this.setState({noteTitle:this.props.infoItem.noteTitle,noteContent:this.props.infoItem.noteContent,id:this.props.infoItem.id})}},{key:"render",value:function(){var e=this;return console.log("edittt "+JSON.stringify(this.props.infoItem)),o.a.createElement("div",{className:"col-4"},o.a.createElement("h3",null,"S\u1eeda Note"),o.a.createElement("form",null,o.a.createElement("div",{className:"form-group"},o.a.createElement("input",{defaultValue:this.props.infoItem.noteTitle,onChange:function(t){return e.isChange(t)},type:"text",className:"form-control",name:"noteTitle",id:"noteTitle","aria-describedby":"helpIdNoteTitle",placeholder:"Ti\xeau \u0111\u1ec1 note"})),o.a.createElement("h5",null,"N\u1ed9i dung Note"),o.a.createElement("div",{className:"form-group"},o.a.createElement("textarea",{defaultValue:this.props.infoItem.noteContent,onChange:function(t){return e.isChange(t)},type:"text",className:"form-control",name:"noteContent",id:"noteTitle","aria-describedby":"helpIdNoteTitle",placeholder:"N\u1ed9i dung note"})),o.a.createElement("button",{type:"reset",onClick:function(){return e.addData(e.state.noteTitle,e.state.noteContent)},className:"btn btn-primary btn-block"},"L\u01b0u")))}}]),a}(n.Component),O=Object(p.b)((function(e,t){return{testThoi:e.testConnect,infoItem:e.editItem,addStatus:e.isAdd}}),(function(e,t){return{addDataStore:function(t){e({type:"ADD_DATA",getItem:t})},editDataStore:function(t){e({type:"EDIT",getItem:t})},changEditStatus:function(){e({type:"CHANGE_EDIT"})},alertOn:function(t,a){e({type:"ALERT_ON",alertContent:t,alertStyle:a})},alertOff:function(){e({type:"ALERT_OFF"})}}}))(y),T=a(35),A=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).handleDismiss=function(){e.props.alertOff()},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return!1===this.props.alertShow?null:o.a.createElement(T.b,null,o.a.createElement(T.a,{type:this.props.alertStyle,onDismiss:function(){return e.handleDismiss()},timeout:1e3},this.props.alertContent))}}]),a}(n.Component),N=Object(p.b)((function(e,t){return{alertShow:e.alertShow,alertContent:e.alertContent,alertStyle:e.alertStyle}}),(function(e,t){return{alertOff:function(){e({type:"ALERT_OFF"})}}}))(A),C=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).isChange=function(e){var t=e.target.name,a=e.target.value;console.log(t),console.log(a),n.setState(Object(v.a)({},t,a))},n.addData=function(e,t){var a={};a.noteTitle=e,a.notecontent=t,n.props.addDataStore(a),n.props.alertOn("Th\xeam th\xe0nh c\xf4ng","success")},n.state={noteTitle:"",noteContent:"",id:""},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"col-4"},o.a.createElement("h3",null,"Th\xeam Note"),o.a.createElement("form",null,o.a.createElement("div",{className:"form-group"},o.a.createElement("input",{onChange:function(t){return e.isChange(t)},type:"text",className:"form-control",name:"noteTitle",id:"noteTitle","aria-describedby":"helpIdNoteTitle",placeholder:"Ti\xeau \u0111\u1ec1 note"}),o.a.createElement("small",{id:"helpIdNoteTitle",className:"form-text text-muted"},"\u0110i\u1ec1n ti\xeau \u0111\u1ec1 v\xe0o \u0111\xe2y")),o.a.createElement("h5",null,"N\u1ed9i dung Note"),o.a.createElement("div",{className:"form-group"},o.a.createElement("textarea",{onChange:function(t){return e.isChange(t)},type:"text",className:"form-control",name:"noteContent",id:"noteTitle","aria-describedby":"helpIdNoteTitle",placeholder:"N\u1ed9i dung note"}),o.a.createElement("small",{id:"helpIdNoteTitle",className:"form-text text-muted"},"\u0110i\u1ec1n n\u1ed9i dung v\xe0o \u0111\xe2y")),o.a.createElement("button",{type:"reset",onClick:function(){return e.addData(e.state.noteTitle,e.state.noteContent)},className:"btn btn-primary btn-block"},"Th\xeam")))}}]),a}(n.Component),j=Object(p.b)((function(e,t){return{infoItem:e.editItem,addStatus:e.isAdd}}),(function(e,t){return{addDataStore:function(t){e({type:"ADD_DATA",getItem:t})},alertOn:function(t,a){e({type:"ALERT_ON",alertContent:t,alertStyle:a})},alertOff:function(){e({type:"ALERT_OFF"})}}}))(C),D=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).addData=function(e){m.push(e)},n.removeData=function(){u.database().ref("/").child("note1").remove(),console.log("xoa")},n.showEditForm=function(){if(n.props.isEditForm)return o.a.createElement(O,null)},n.showAddForm=function(){if(n.props.isAddForm)return o.a.createElement(j,null)},n.state={},n}return Object(c.a)(a,[{key:"render",value:function(){return console.log(m.once("value").then((function(e){console.log(e.val())}))),o.a.createElement("div",{className:"App"},o.a.createElement(h,null),o.a.createElement(N,null),o.a.createElement("div",{class:"container"},o.a.createElement("div",{class:"row"},o.a.createElement(g,null),this.showEditForm(),this.showAddForm())))}}]),a}(o.a.Component),I=Object(p.b)((function(e,t){return{isEditForm:e.isEdit,isAddForm:e.isAdd}}))(D);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var S=a(7),F=a(32),_={testConnect:"test thoai",isEdit:!1,editItem:{},isAdd:!1,alertShow:!1,alertContent:"",alertStyle:""},k=F.createStore((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_DATA":return m.push(t.getItem),console.log("them du lieu "+t.getItem+" thanh cong"),e;case"CHANGE_EDIT":return Object(S.a)(Object(S.a)({},e),{},{isEdit:!e.isEdit});case"CHANGE_ADD_STATUS":return Object(S.a)(Object(S.a)({},e),{},{isAdd:!e.isAdd});case"GET_EDIT_DATA":return Object(S.a)(Object(S.a)({},e),{},{editItem:t.editObject});case"EDIT":return m.child(t.getItem.id).update({noteTitle:t.getItem.noteTitle,notecontent:t.getItem.noteContent}),console.log("update "+JSON.stringify(t.getItem)+" thanh cong"),Object(S.a)(Object(S.a)({},e),{},{editItem:{}});case"DELETE":m.child(t.deleteId).remove(),console.log("da xoa phan tu co id "+t.deleteId),console.log("ehichioasdf");break;case"ALERT_ON":return Object(S.a)(Object(S.a)({},e),{},{alertShow:!0,alertContent:t.alertContent,alertStyle:t.alertStyle});case"ALERT_OFF":return Object(S.a)(Object(S.a)({},e),{},{alertShow:!1});default:return e}}));k.subscribe((function(){console.log(JSON.stringify(k.getState()))}));var w=k;i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(p.a,{store:w},o.a.createElement(I,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},53:function(e,t,a){e.exports=a(125)},58:function(e,t,a){},59:function(e,t,a){}},[[53,1,2]]]);
//# sourceMappingURL=main.59e1b677.chunk.js.map