(function(e){function t(t){for(var a,i,r=t[0],c=t[1],l=t[2],g=0,d=[];g<r.length;g++)i=r[g],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&d.push(n[i][0]),n[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(t);while(d.length)d.shift()();return o.push.apply(o,l||[]),s()}function s(){for(var e,t=0;t<o.length;t++){for(var s=o[t],a=!0,r=1;r<s.length;r++){var c=s[r];0!==n[c]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=s[0]))}return e}var a={},n={app:0},o=[];function i(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=e,i.c=a,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(s,a,function(t){return e[t]}.bind(null,a));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var l=0;l<r.length;l++)t(r[l]);var u=c;o.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},1362:function(e,t,s){e.exports=s.p+"img/empty-state.e9ff8a50.svg"},"43c9":function(e,t,s){},"56d7":function(e,t,s){"use strict";s.r(t);s("cadf"),s("551c"),s("f751"),s("097d");var a=s("2b0e"),n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},o=[],i=s("9ada"),r=s("59ca"),c=s.n(r);s("741f");function l(){if(c.a.messaging.isSupported()){var e={apiKey:"AIzaSyCnHo7J8e4ZT-Tw3vjAIIUWUVQFtg0gFN8",authDomain:"vue-firebase-tutorial-7ee46.firebaseapp.com",databaseURL:"https://vue-firebase-tutorial-7ee46.firebaseio.com",projectId:"vue-firebase-tutorial-7ee46",storageBucket:"vue-firebase-tutorial-7ee46.appspot.com",messagingSenderId:"24087531277",appId:"1:24087531277:web:b4ace0b15ec05794cdea44"};c.a.initializeApp(e);var t=c.a.messaging();t.requestPermission().then((function(){return console.log("Permission granted"),t.getToken()})).then((function(e){var t="group",s=Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_COMMETCHAT_GUID,a=Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_COMMETCHAT_APP_ID,n=a+"_"+t+"_"+s,o="https://ext-push-notifications.cometchat.com/fcmtokens/".concat(e,"/topics/").concat(n);fetch(o,{method:"POST",headers:new Headers({"Content-Type":"application/json"}),body:JSON.stringify({appId:a})}).then((function(e){(e.status<200||e.status>=400)&&console.log("Error subscribing to topic: "+e.status+" - "+e.text())})).catch((function(e){console.error(e)}))})).catch((function(e){"messaging/permission-blocked"===e.code?console.log("Please Unblock Notification Request Manually"):console.log("Error Occurred",e)})),t.onMessage((function(e){var t=JSON.parse(e.data.message);if(console.log("Receiving foreground message",JSON.parse(e.data.message)),t.data.entities.sender.entity.uid!==firebaseUid){var s="CometChat Pro Notification",a={body:e.data.alert,icon:t.data.entities.sender.entity.avatar},n=new Notification(s,a);n.onclick=function(e){n.close(),console.log(e)}}}))}}s("43c9");var u={created:function(){this.initializeApp(),l()},methods:{initializeApp:function(){Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_COMMETCHAT_APP_ID;i["CometChat"].init("145802ef0b357dd").then((function(){console.log("Initialization completed successfully")}),(function(e){console.log("Initialization failed with error:",e)}))}}},g=u,d=s("2877"),p=Object(d["a"])(g,n,o,!1,null,null,null),m=p.exports,f=s("8c4f"),h=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"booker"},[s("div",{staticClass:"chat"},[s("div",{staticClass:"container"},[e._m(0),s("div",{staticClass:"chat-page"},[s("div",{staticClass:"msg-inbox"},[s("div",{staticClass:"chats",attrs:{id:"chats"}},[s("div",{staticClass:"msg-page",attrs:{id:"msg-page"}},[e.loadingMessages?s("div",{staticClass:"loading-messages-container"},[s("spinner",{attrs:{size:100}}),s("span",{staticClass:"loading-text"},[e._v("\n                          Loading Messages\n                        ")])],1):e.groupMessages.length?s("div",[s("div",e._l(e.groupMessages,(function(t,a){return s("div",{key:a+"-"+t.id},[t.sender.uid!=e.uid?s("div",{staticClass:"received-chats"},[s("div",{staticClass:"received-chats-img"},[s("img",{staticClass:"avatar",attrs:{src:t.sender.avatar,alt:""}})]),s("div",{staticClass:"received-msg"},[s("div",{staticClass:"received-msg-inbox"},[s("p",[s("span",[e._v(e._s(t.sender.uid))]),s("br"),e._v(e._s(t.data.text))])])])]):s("div",{staticClass:"outgoing-chats"},[s("div",{staticClass:"outgoing-chats-msg"},[s("p",[e._v(e._s(t.data.text))])]),s("div",{staticClass:"outgoing-chats-img"},[s("img",{staticClass:"avatar",attrs:{src:t.sender.avatar,alt:""}})])])])})),0)]):s("div",{staticClass:"text-center img-fluid empty-chat"},[e._m(1),e._m(2)])])])]),s("div",{staticClass:"msg-bottom"},[s("form",{staticClass:"message-form",on:{submit:function(t){return t.preventDefault(),e.sendGroupMessage(t)}}},[s("div",{staticClass:"input-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.chatMessage,expression:"chatMessage"}],staticClass:"form-control message-input",attrs:{type:"text",placeholder:"Type something",required:""},domProps:{value:e.chatMessage},on:{input:function(t){t.target.composing||(e.chatMessage=t.target.value)}}}),e.sendingMessage?s("spinner",{staticClass:"sending-message-spinner",attrs:{size:30}}):e._e()],1)])])])])])])},v=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"msg-header"},[s("div",{staticClass:"active"},[s("h5",[e._v("Chat")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"empty-chat-holder"},[a("img",{staticClass:"img-res",attrs:{src:s("1362"),alt:"empty chat image"}})])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("h2",[e._v(" No new message? ")]),s("h6",{staticClass:"empty-chat-sub-title"},[e._v("\n                    Send your first message below.\n                  ")])])}],C=(s("7f7f"),s("75fc")),_=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"spinner"},[s("svg",{attrs:{width:e.size,height:e.size,viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg",stroke:"#003"}},[s("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[s("g",{attrs:{transform:"translate(1 1)","stroke-width":"2"}},[s("circle",{attrs:{"stroke-opacity":".5",cx:"18",cy:"18",r:"18"}}),s("path",{attrs:{d:"M36 18c0-9.94-8.06-18-18-18"}},[s("animateTransform",{attrs:{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"1s",repeatCount:"indefinite"}})],1)])])])])},b=[],M=(s("c5f6"),{props:{size:{type:Number,default:60}}}),y=M,w=(s("e5a3"),Object(d["a"])(y,_,b,!1,null,"6639a9af",null)),E=w.exports,O={name:"home",components:{Spinner:E},data:function(){return{username:"",avatar:"",uid:"",sendingMessage:!1,chatMessage:"",loggingOut:!1,groupMessages:[],loadingMessages:!1}},mounted:function(){var e=this;this.loadingMessages=!0;var t="UNIQUE_LISTENER_ID",s=(new i["CometChat"].MessagesRequestBuilder).setLimit(100).build();s.fetchPrevious().then((function(t){console.log("Message list fetched:",t),console.log("this.groupMessages",e.groupMessages),e.groupMessages=[].concat(Object(C["a"])(e.groupMessages),Object(C["a"])(t)),e.loadingMessages=!1,e.$nextTick((function(){e.scrollToBottom()}))}),(function(e){console.log("Message fetching failed with error:",e)})),i["CometChat"].addMessageListener(t,new i["CometChat"].MessageListener({onTextMessageReceived:function(t){console.log("Text message received successfully",t),console.log(e.groupMessages),e.groupMessages=[].concat(Object(C["a"])(e.groupMessages),[t]),e.loadingMessages=!1,e.$nextTick((function(){e.scrollToBottom()}))}}))},created:function(){this.getLoggedInUser()},methods:{getLoggedInUser:function(){var e=this;i["CometChat"].getLoggedinUser().then((function(t){e.username=t.name,e.avatar=t.avatar,e.uid=t.uid,updateLoggedInUser(e.uid)}),(function(t){e.$router.push({name:"homepage"}),console.log(t)}))},sendGroupMessage:function(){var e=this;this.sendingMessage=!0;var t=Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_COMMETCHAT_GUID,s=this.chatMessage,a=i["CometChat"].MESSAGE_TYPE.TEXT,n=i["CometChat"].RECEIVER_TYPE.GROUP,o=this,r=new i["CometChat"].TextMessage(t,s,a,n);i["CometChat"].sendMessage(r).then((function(t){console.log("Message sent successfully:",t),e.chatMessage="",e.sendingMessage=!1,e.groupMessages=[].concat(Object(C["a"])(o.groupMessages),[t]),e.$nextTick((function(){e.scrollToBottom()}))}),(function(e){console.log("Message sending failed with error:",e)}))},scrollToBottom:function(){var e=document.getElementById("msg-page");e.scrollTo(0,e.scrollHeight+30)}}},T=O,x=Object(d["a"])(T,h,v,!1,null,null,null),P=x.exports,S=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"login-page"},[s("div",{staticClass:"login"},[s("div",{staticClass:"login-container"},[s("div",{staticClass:"login-form-column"},[s("form",{on:{submit:function(t){return t.preventDefault(),e.authLoginUser(t)}}},[s("h3",[e._v("Hello!")]),e._m(0),s("div",{staticClass:"form-wrapper"},[s("label",[e._v("Username")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],staticClass:"form-control",attrs:{type:"text",name:"username",id:"username",placeholder:"Enter your username",required:""},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}})]),s("button",{attrs:{type:"submit"}},[e._v("LOG IN   "),e.showSpinner?s("span",{staticClass:"fa fa-spin fa-spinner"}):e._e()])])])])])])},U=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[e._v('Welcome to our little Vue demo powered by CometChat. Login with the username "superhero1" or "superhero2" and test the chat out.\n            To create your own user, see '),s("a",{attrs:{href:"https://prodocs.cometchat.com/reference#createuser"}},[e._v("our documentation")])])}],j={data:function(){return{username:"",showSpinner:!1}},methods:{authLoginUser:function(){var e=this,t="4496f9e24b997753bf9ba97249163786b586a661";this.showSpinner=!0,console.log(t),console.log(this.username),i["CometChat"].login(this.username,t).then((function(){e.showSpinner=!1,e.$router.push({name:"chat"})}),(function(t){e.showSpinner=!1,alert("Whops. Something went wrong. This commonly happens when you enter a username that doesn't exist. Check the console for more information"),console.log("Login failed with error:",t.code)}))}}},N=j,I=Object(d["a"])(N,S,U,!1,null,null,null),A=I.exports;a["a"].use(f["a"]);var L=new f["a"]({mode:"history",base:"/",routes:[{path:"/",name:"homepage",redirect:"login"},{path:"/login",name:"login",component:A},{path:"/chat",name:"chat",component:P}]});a["a"].config.productionTip=!1,new a["a"]({router:L,render:function(e){return e(m)}}).$mount("#app")},"68a8":function(e,t,s){},e5a3:function(e,t,s){"use strict";var a=s("68a8"),n=s.n(a);n.a}});
//# sourceMappingURL=app.359ff15d.js.map