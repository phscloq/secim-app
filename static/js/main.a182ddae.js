(()=>{"use strict";var t={4037:(t,e,n)=>{n.r(e),n.d(e,{default:()=>z});var a=n(885),r=n(7641),o=n(9006),l=n(626),i=n(4561),s=n(6505),u=n(5861),d=n(5198),c=n(2012),f=n(4396),y=n(8434),h=function(t){var e=t.style,n=t.candidateName,a=t.candidateCount,r=t.handleIncrement,o=t.handleDecrease;return(0,y.jsxs)(l.default,{style:e,children:[(0,y.jsx)(d.default,{style:g.candidateName,children:n}),(0,y.jsx)(d.default,{style:g.countText,children:a}),(0,y.jsxs)(l.default,{style:g.buttonsContainer,children:[(0,y.jsx)(c.default,{style:g.button,onPress:r,children:(0,y.jsx)(d.default,{style:g.buttonText,children:"+"})}),(0,y.jsx)(c.default,{style:[g.button,g.minusBtn],onPress:o,children:(0,y.jsx)(d.default,{style:g.buttonText,children:"-"})})]})]})};function p(){var t=(0,r.useState)(0),e=(0,a.default)(t,2),n=e[0],o=e[1],i=(0,r.useState)(0),s=(0,a.default)(i,2),p=s[0],b=s[1],x=(0,r.useState)(0),m=(0,a.default)(x,2),v=m[0],j=m[1],C=(0,r.useState)(0),B=(0,a.default)(C,2),T=B[0],S=B[1],k=function(){var t=(0,u.default)((function*(t,e){var a=t+1;e(a);try{t==n?yield f.default.setItem("@MyApp:candidate1Count",a.toString()):t==p?yield f.default.setItem("@MyApp:candidate2Count",a.toString()):t==v&&(yield f.default.setItem("@MyApp:candidate3Count",a.toString())),console.log("Data saved successfully.")}catch(r){console.log("Error saving data:",r)}}));return function(e,n){return t.apply(this,arguments)}}(),P=function(){var t=(0,u.default)((function*(t,e){if(0!==t){var a=t-1;e(a);try{t==n?yield f.default.setItem("@MyApp:candidate1Count",a.toString()):t==p?yield f.default.setItem("@MyApp:candidate2Count",a.toString()):t==v&&(yield f.default.setItem("@MyApp:candidate3Count",a.toString())),console.log("Data saved successfully.")}catch(r){console.log("Error saving data:",r)}}}));return function(e,n){return t.apply(this,arguments)}}();return(0,r.useEffect)((function(){var t=function(){var t=(0,u.default)((function*(){try{var t=yield f.default.getItem("@MyApp:candidate1Count"),e=yield f.default.getItem("@MyApp:candidate2Count"),n=yield f.default.getItem("@MyApp:candidate3Count"),a=yield f.default.getItem("@MyApp:lastBallotsCount");o(parseInt(t||"0")),b(parseInt(e||"0")),j(parseInt(n||"0")),S(parseInt(a||"0"))}catch(r){console.log("Error retrieving data:",r)}}));return function(){return t.apply(this,arguments)}}();t()}),[]),(0,y.jsxs)(l.default,{style:g.container,children:[(0,y.jsx)(l.default,{style:g.ballotNumContainer,children:(0,y.jsxs)(d.default,{style:g.ballotC,children:["Sand\u0131ktan \xe7\u0131kan pusula say\u0131s\u0131: ",T]})}),(0,y.jsxs)(l.default,{style:g.showTotal,children:[(0,y.jsx)(d.default,{style:g.totalText,children:"Ge\xe7erli oy say\u0131s\u0131"}),(0,y.jsx)(d.default,{style:g.total,children:n+p})]}),(0,y.jsxs)(l.default,{style:g.candidatesContainer,children:[(0,y.jsx)(h,{style:[g.recep,g.candidateSection],candidateName:"Tayyip",candidateCount:n,handleIncrement:function(){return k(n,o)},handleDecrease:function(){return P(n,o)}}),(0,y.jsx)(l.default,{style:g.divider}),(0,y.jsx)(h,{style:[g.kemal,g.candidateSection],candidateName:"K\u0131l\u0131\xe7daro\u011flu",candidateCount:p,handleIncrement:function(){return k(p,b)},handleDecrease:function(){return P(p,b)}})]}),(0,y.jsx)(l.default,{style:g.dividerMid}),(0,y.jsxs)(l.default,{style:g.invalidSection,children:[(0,y.jsx)(d.default,{style:g.candidateName,children:"Ge\xe7ersiz:"}),(0,y.jsx)(d.default,{style:g.countText,children:v}),(0,y.jsxs)(l.default,{style:g.invalidBtnsContainer,children:[(0,y.jsx)(c.default,{style:[g.button,g.colmnBtn1,g.plusBtn],onPress:function(){return k(v,j)},children:(0,y.jsx)(d.default,{style:g.buttonText,children:"+"})}),(0,y.jsx)(c.default,{style:[g.button,g.colmnBtn2],onPress:function(){return P(v,j)},children:(0,y.jsx)(d.default,{style:g.buttonText,children:"-"})})]})]})]})}var g=i.default.create({container:{flex:1,alignItems:"center",justifyContent:"center"},candidatesContainer:{flexDirection:"row",justifyContent:"space-between"},candidateSection:{alignItems:"center",margin:10},buttonsContainer:{flexDirection:"row",marginTop:15},countText:{marginLeft:10,marginRight:10,fontSize:80,paddingHorizontal:5,backgroundColor:"lightgray"},button:{backgroundColor:"#0d5f07",paddingLeft:15,paddingRight:15,paddingTop:8,paddingBottom:8,borderRadius:5},buttonText:{color:"#fff",fontSize:36},minusBtn:{marginLeft:10},invalidSection:{alignItems:"center",marginTop:20,flexDirection:"row"},invalidBtnsContainer:{flexDirection:"column"},colmnBtn2:{marginTop:15},candidateName:{fontWeight:"bold",fontSize:26},divider:{height:"100%",width:3,backgroundColor:"black"},recep:{width:"50%"},kemal:{width:"50%"},dividerMid:{height:2,width:300,backgroundColor:"black",marginTop:20},total:{fontSize:40,textDecorationLine:"underline",color:"#0d5f07",fontWeight:"bold"},showTotal:{flexDirection:"column",alignItems:"center"},totalText:{fontSize:24},ballotNumContainer:{position:"absolute",top:30},ballotC:{fontSize:24,textDecorationLine:"underline"}}),b=n(4942),x=n(3163);function m(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function v(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?m(Object(n),!0).forEach((function(e){(0,b.default)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function j(t){var e=t.morningBallotsCount,n=t.setMorningBallotsCount,o=t.morningEnvelopesCount,i=t.setMorningEnvelopesCount,s=t.baskanName,h=t.setBaskanName,p=t.onSave,g=(0,r.useState)(0),m=(0,a.default)(g,2),j=m[0],B=m[1],T=(0,r.useState)({mZarf:!1,mPusula:!1,baskan:!1}),S=(0,a.default)(T,2),k=S[0],P=S[1],I=function(){var t=(0,u.default)((function*(t,e){var n=t+1;B(n);try{yield f.default.setItem("@MyApp:voterNums",n.toString()),console.log("Data saved successfully.")}catch(a){console.log("Error saving data:",a)}}));return function(e,n){return t.apply(this,arguments)}}(),O=function(){var t=(0,u.default)((function*(t,e){if(0!==t){var n=t-1;B(n);try{yield f.default.setItem("@MyApp:voterNums",n.toString()),console.log("Data saved successfully.")}catch(a){console.log("Error saving data:",a)}}}));return function(e,n){return t.apply(this,arguments)}}(),w=function(){var t=(0,u.default)((function*(t){"mPusula"==t?n(e):"mZarf"==t?i(o):"baskan"==t&&h(s),P((function(e){return v(v({},e),{},(0,b.default)({},t,!1))}));try{"mPusula"==t?yield f.default.setItem("@MyApp:morningBallotsCount",e):"mZarf"==t?yield f.default.setItem("@MyApp:morningEnvelopesCount",o):"baskan"==t&&(yield f.default.setItem("@MyApp:baskanName",s)),console.log("Data saved successfully.")}catch(a){console.log("Error saving data:",a)}p()}));return function(e){return t.apply(this,arguments)}}(),E=function(t){P((function(e){return v(v({},e),{},(0,b.default)({},t,!1))}))},M=function(t){P((function(e){return v(v({},e),{},(0,b.default)({},t,!0))}))};return(0,r.useEffect)((function(){var t=function(){var t=(0,u.default)((function*(){try{var t=yield f.default.getItem("@MyApp:morningBallotsCount"),e=yield f.default.getItem("@MyApp:morningEnvelopesCount"),a=yield f.default.getItem("@MyApp:baskanName"),r=yield f.default.getItem("@MyApp:voterNums");n(t||""),i(e||""),h(a||""),B(parseInt(r||"0"))}catch(o){console.log("Error retrieving data:",o)}}));return function(){return t.apply(this,arguments)}}();t()}),[]),(0,y.jsxs)(l.default,{style:C.container,children:[(0,y.jsxs)(l.default,{style:C.topContainer,children:[(0,y.jsx)(l.default,{style:C.warnTextContainer,children:(0,y.jsx)(d.default,{style:C.sectionText,children:"07:00-08:00 G\u0130R\u0130LECEK B\u0130LG\u0130LER"})}),(0,y.jsxs)(l.default,{style:C.inputContainer,children:[(0,y.jsx)(d.default,{style:C.label,children:"Sand\u0131k Ba\u015fkan\u0131"}),(0,y.jsx)(x.default,{editable:k.baskan,value:s,onChangeText:h,style:C.input})]}),(0,y.jsxs)(l.default,{style:C.inputBtnContainer,children:[(0,y.jsx)(c.default,{style:k.baskan?C.hideBtn:C.saveButton,onPress:function(){return M("baskan")},children:(0,y.jsx)(d.default,{style:C.saveButtonText,children:"Veri Gir"})}),(0,y.jsx)(c.default,{style:k.baskan?C.saveButton:C.hideBtn,onPress:function(){return w("baskan")},children:(0,y.jsx)(d.default,{style:C.saveButtonText,children:"Kaydet"})}),(0,y.jsx)(c.default,{style:k.baskan?C.saveButton:C.hideBtn,onPress:function(){return E("baskan")},children:(0,y.jsx)(d.default,{style:C.saveButtonText,children:"\u0130ptal"})})]}),(0,y.jsxs)(l.default,{style:C.inputContainerParent,children:[(0,y.jsxs)(l.default,{style:C.inputContainer,children:[(0,y.jsx)(d.default,{style:C.label,children:"Sabah Pusula Say\u0131s\u0131"}),(0,y.jsx)(x.default,{style:C.input,value:e,onChangeText:n,keyboardType:"numeric",editable:k.mPusula})]}),(0,y.jsxs)(l.default,{style:C.inputBtnContainer,children:[(0,y.jsx)(c.default,{style:k.mPusula?C.hideBtn:C.saveButton,onPress:function(){return M("mPusula")},children:(0,y.jsx)(d.default,{style:C.saveButtonText,children:"Veri Gir"})}),(0,y.jsx)(c.default,{style:k.mPusula?C.saveButton:C.hideBtn,onPress:function(){return w("mPusula")},children:(0,y.jsx)(d.default,{style:C.saveButtonText,children:"Kaydet"})}),(0,y.jsx)(c.default,{style:k.mPusula?C.saveButton:C.hideBtn,onPress:function(){return E("mPusula")},children:(0,y.jsx)(d.default,{style:C.saveButtonText,children:"\u0130ptal"})})]})]}),(0,y.jsxs)(l.default,{style:C.inputContainer,children:[(0,y.jsx)(d.default,{style:C.label,children:"Sabah Zarf Say\u0131s\u0131"}),(0,y.jsx)(x.default,{style:C.input,value:o,onChangeText:i,keyboardType:"numeric",editable:k.mZarf})]}),(0,y.jsxs)(l.default,{style:C.inputBtnContainer,children:[(0,y.jsx)(c.default,{style:k.mZarf?C.hideBtn:C.saveButton,onPress:function(){return M("mZarf")},children:(0,y.jsx)(d.default,{style:C.saveButtonText,children:"Veri Gir"})}),(0,y.jsx)(c.default,{style:k.mZarf?C.saveButton:C.hideBtn,onPress:function(){return w("mZarf")},children:(0,y.jsx)(d.default,{style:C.saveButtonText,children:"Kaydet"})}),(0,y.jsx)(c.default,{style:k.mZarf?C.saveButton:C.hideBtn,onPress:function(){return E("mZarf")},children:(0,y.jsx)(d.default,{style:C.saveButtonText,children:"\u0130ptal"})})]}),(0,y.jsx)(l.default,{style:C.dividerTop})]}),(0,y.jsxs)(l.default,{style:C.midContainer,children:[(0,y.jsx)(d.default,{style:C.label,children:"Se\xe7men:"}),(0,y.jsx)(d.default,{style:C.countText,children:j}),(0,y.jsxs)(l.default,{style:C.buttonsContainer,children:[(0,y.jsx)(c.default,{style:C.button,onPress:function(){return I(j,B)},children:(0,y.jsx)(d.default,{style:C.buttonText,children:"+"})}),(0,y.jsx)(c.default,{style:[C.button,C.minusBtn],onPress:function(){return O(j,B)},children:(0,y.jsx)(d.default,{style:C.buttonText,children:"-"})})]})]}),(0,y.jsx)(l.default,{style:C.dividerMid})]})}var C=i.default.create({container:{flex:1,padding:20},topContainer:{flex:6},midContainer:{flex:4,alignItems:"center",justifyContent:"center",flexDirection:"row",backgroundColor:"lightgray"},inputContainer:{marginBottom:10,marginTop:8},inputContainerParent:{flexDirection:"column"},label:{fontSize:16,fontWeight:"bold"},input:{borderWidth:1,borderColor:"gray",borderRadius:5,padding:8,fontSize:21},countText:{fontSize:80,fontWeight:"bold",marginLeft:20,marginRight:20},buttonsContainer:{flexDirection:"column"},button:{backgroundColor:"#0d5f07",paddingHorizontal:30,paddingVertical:16,borderRadius:5,marginHorizontal:5},buttonText:{color:"#d2fbd0",fontSize:24},minusBtn:{marginTop:20},saveButton:{backgroundColor:"#0d5f07",marginHorizontal:3,padding:4,borderRadius:5},saveButtonText:{color:"#d2fbd0",fontSize:18},dividerTop:{},inputBtnContainer:{flexDirection:"row"},hideBtn:{display:"none"},sectionText:{color:"red",fontWeight:"bold"},warnTextContainer:{marginBottom:8},warn:{borderColor:"red"}});function B(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function T(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?B(Object(n),!0).forEach((function(e){(0,b.default)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):B(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function S(t){var e=t.lastBallotsCount,n=t.setLastBallotsCount,o=t.lastEnvelopesCount,i=t.setLastEnvelopesCount,s=t.morningBallotsCount,h=t.morningEnvelopesCount,p=t.setNightCountsValid,g=t.nightCountsValid,m=t.onSave,v=(0,r.useState)({nZarf:!1,nPusula:!1}),j=(0,a.default)(v,2),C=j[0],B=j[1];(0,r.useEffect)((function(){var t=function(){var t=(0,u.default)((function*(){try{var t=yield f.default.getItem("@MyApp:lastBallotsCount"),e=yield f.default.getItem("@MyApp:lastEnvelopesCount");n(t||""),i(e||"")}catch(a){console.log("Error retrieving data:",a)}}));return function(){return t.apply(this,arguments)}}();t()}),[]);var S=function(){var t=(0,u.default)((function*(t){"nPusula"==t?n(e):"nZarf"==t&&i(o),B((function(e){return T(T({},e),{},(0,b.default)({},t,!1))}));try{yield f.default.setItem("@MyApp:lastBallotsCount",e),yield f.default.setItem("@MyApp:lastEnvelopesCount",o),console.log("Data saved successfully.");var a=parseInt(s),r=parseInt(h),l=parseInt(e),u=parseInt(o);p(a===l&&r===u)}catch(d){console.log("Error saving data:",d)}m()}));return function(e){return t.apply(this,arguments)}}(),P=function(t){B((function(e){return T(T({},e),{},(0,b.default)({},t,!1))}))},I=function(t){B((function(e){return T(T({},e),{},(0,b.default)({},t,!0))}))};return(0,y.jsx)(l.default,{style:k.container,children:(0,y.jsxs)(l.default,{style:k.bottomContainer,children:[(0,y.jsx)(l.default,{style:k.warnTextContainer,children:(0,y.jsx)(d.default,{style:k.sectionText,children:"17:00 \u0130T\u0130BAR\u0130YLE G\u0130R\u0130LECEK B\u0130LG\u0130LER"})}),(0,y.jsxs)(l.default,{style:k.inputContainer,children:[(0,y.jsx)(d.default,{style:k.label,children:"Ak\u015fam Pusula Say\u0131s\u0131"}),(0,y.jsx)(x.default,{style:[k.input,g?null:k.inputError],value:e,onChangeText:n,keyboardType:"numeric",editable:C.nPusula})]}),(0,y.jsxs)(l.default,{style:k.inputBtnContainer,children:[(0,y.jsx)(c.default,{style:C.nPusula?k.hideBtn:k.saveButton,onPress:function(){return I("nPusula")},children:(0,y.jsx)(d.default,{style:k.saveButtonText,children:"Veri Gir"})}),(0,y.jsx)(c.default,{style:C.nPusula?k.saveButton:k.hideBtn,onPress:function(){return S("nPusula")},children:(0,y.jsx)(d.default,{style:k.saveButtonText,children:"Kaydet"})}),(0,y.jsx)(c.default,{style:C.nPusula?k.saveButton:k.hideBtn,onPress:function(){return P("nPusula")},children:(0,y.jsx)(d.default,{style:k.saveButtonText,children:"\u0130ptal"})})]}),(0,y.jsxs)(l.default,{style:k.inputContainer,children:[(0,y.jsx)(d.default,{style:k.label,children:"Ak\u015fam Zarf Say\u0131s\u0131"}),(0,y.jsx)(x.default,{style:[k.input,g?null:k.inputError],value:o,onChangeText:i,keyboardType:"numeric",editable:C.nZarf})]}),(0,y.jsxs)(l.default,{style:k.inputBtnContainer,children:[(0,y.jsx)(c.default,{style:C.nZarf?k.hideBtn:k.saveButton,onPress:function(){return I("nZarf")},children:(0,y.jsx)(d.default,{style:k.saveButtonText,children:"Veri Gir"})}),(0,y.jsx)(c.default,{style:C.nZarf?k.saveButton:k.hideBtn,onPress:function(){return S("nZarf")},children:(0,y.jsx)(d.default,{style:k.saveButtonText,children:"Kaydet"})}),(0,y.jsx)(c.default,{style:C.nZarf?k.saveButton:k.hideBtn,onPress:function(){return P("nZarf")},children:(0,y.jsx)(d.default,{style:k.saveButtonText,children:"\u0130ptal"})})]}),(0,y.jsxs)(l.default,{style:k.remindContainer,children:[(0,y.jsx)(d.default,{style:k.remindText,children:"\xc7evreleri k\u0131rm\u0131z\u0131ya d\xf6nd\xfcyse sabah say\u0131lan pusula veya zarf say\u0131lar\u0131 ile sand\u0131ktan \xe7\u0131kanlar aras\u0131nda tutars\u0131zl\u0131k oldu\u011funu g\xf6steriyor."}),(0,y.jsx)(d.default,{style:[k.remindText,k.boldText],children:"L\xfctfen kontrol edin"})]})]})})}var k=i.default.create({container:{flex:1,padding:20},topContainer:{flex:4},midContainer:{flex:2,alignItems:"center",justifyContent:"center",flexDirection:"row"},bottomContainer:{flex:4,marginTop:20},inputContainer:{marginBottom:10,marginTop:8},inputContainerParent:{flexDirection:"column"},label:{fontSize:16,fontWeight:"bold"},input:{borderWidth:1,borderColor:"gray",borderRadius:5,padding:8,fontSize:21},countText:{fontSize:40,fontWeight:"bold",marginLeft:20,marginRight:20},buttonsContainer:{flexDirection:"row"},button:{backgroundColor:"#f54b42",paddingHorizontal:15,paddingVertical:8,borderRadius:5,marginHorizontal:5},buttonText:{color:"#fff",fontSize:24},minusBtn:{backgroundColor:"#ccc"},saveButton:{backgroundColor:"#0d5f07",marginHorizontal:3,padding:4,borderRadius:5},saveButtonText:{color:"#d2fbd0",fontSize:18},dividerTop:{height:2,width:300,backgroundColor:"black",marginTop:105},dividerMid:{height:2,width:300,backgroundColor:"black"},inputBtnContainer:{flexDirection:"row"},hideBtn:{display:"none"},sectionText:{color:"red",fontWeight:"bold"},warnTextContainer:{marginBottom:8},inputError:{borderColor:"red",borderWidth:3},remindContainer:{marginVertical:20},remindText:{fontSize:18},boldText:{fontWeight:"bold"}});const P=function(t){var e=t.activeScreen,n=t.handleTabChange;return(0,y.jsxs)(l.default,{style:I.tabContainer,children:[(0,y.jsx)(c.default,{style:[I.tabButton,"morning"===e&&I.activeTabButton],onPress:function(){return n("morning")},children:(0,y.jsx)(d.default,{style:[I.tabButtonText,"morning"===e&&I.activeTabButtonText],children:"G\xfcnd\xfcz"})}),(0,y.jsx)(c.default,{style:[I.tabButton,"night"===e&&I.activeTabButton],onPress:function(){return n("night")},children:(0,y.jsx)(d.default,{style:[I.tabButtonText,"night"===e&&I.activeTabButtonText],children:"Ak\u015fam"})})]})};var I=i.default.create({tabContainer:{flexDirection:"row",justifyContent:"center",alignItems:"center",backgroundColor:"#d2fbd0"},tabButton:{flex:1,paddingVertical:10,alignItems:"center"},activeTabButton:{backgroundColor:"white"},tabButtonText:{fontSize:18,color:"black"},activeTabButtonText:{fontWeight:"bold",color:"black",textDecorationLine:"underline"}});const O=function(){var t=(0,r.useState)("morning"),e=(0,a.default)(t,2),n=e[0],o=e[1],l=(0,r.useState)(""),i=(0,a.default)(l,2),s=i[0],u=i[1],d=(0,r.useState)(""),c=(0,a.default)(d,2),f=c[0],h=c[1],p=(0,r.useState)(""),g=(0,a.default)(p,2),b=g[0],x=g[1],m=(0,r.useState)(""),v=(0,a.default)(m,2),C=v[0],B=v[1],T=(0,r.useState)(""),k=(0,a.default)(T,2),I=k[0],O=k[1],w=(0,r.useState)(!0),E=(0,a.default)(w,2),M=(E[0],E[1],(0,r.useState)(!0)),D=(0,a.default)(M,2),z=D[0],A=D[1];return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(P,{activeScreen:n,handleTabChange:function(t){o(t)}}),"morning"===n?(0,y.jsx)(j,{morningBallotsCount:s,setMorningBallotsCount:u,morningEnvelopesCount:f,setMorningEnvelopesCount:h,baskanName:I,setBaskanName:O,onSave:function(){}}):(0,y.jsx)(S,{lastBallotsCount:b,setLastBallotsCount:x,lastEnvelopesCount:C,setLastEnvelopesCount:B,morningBallotsCount:s,morningEnvelopesCount:f,nightCountsValid:z,setNightCountsValid:A,onSave:function(){parseInt(s)===parseInt(b)?console.log("Morning and Night Ballots Counts are equal"):console.log("Morning and Night Ballots Counts are not equal"),parseInt(f)===parseInt(C)?console.log("Morning and Night Envelopes Counts are equal"):console.log("Morning and Night Envelopes Counts are not equal")}})]})};var w=(0,s.default)(),E=function(){return(0,y.jsx)(l.default,{style:D.container,children:(0,y.jsx)(p,{})})};const M=function(){return(0,y.jsxs)(w.Navigator,{screenOptions:{headerStyle:{backgroundColor:"#d2fbd0"},tabBarStyle:{backgroundColor:"#d2fbd0",borderTopWidth:0},tabBarLabelStyle:{fontSize:20,fontWeight:"bold",color:"#0d5f07"},tabBarInactiveTintColor:"black",tabBarIndicatorStyle:{backgroundColor:"#d2fbd0",height:2}},children:[(0,y.jsx)(w.Screen,{name:"Home",component:E,options:{title:"Oy Say\u0131m Ekran\u0131",tabBarLabel:"Oy Say\u0131m\u0131",tabBarIcon:function(t){var e=t.focused;return(0,y.jsx)(l.default,{style:[D.tabBarIcon,e?D.tabBarIconActive:null]})}}}),(0,y.jsx)(w.Screen,{name:"G\xfcnd\xfcz Say\u0131mlar\u0131",component:O,options:{title:"SANDIK VER\u0130LER\u0130",tabBarLabel:"Sand\u0131k Verileri",tabBarIcon:function(t){var e=t.focused;return(0,y.jsx)(l.default,{style:[D.tabBarIcon,e?D.tabBarIconActive:null]})}}})]})};var D=i.default.create({container:{flex:1,backgroundColor:"white",alignItems:"center",justifyContent:"center"},tabBarIcon:{width:150,height:5,backgroundColor:"white"},tabBarIconActive:{backgroundColor:"#0d5f07"}});function z(){var t=(0,r.useState)(0),e=(0,a.default)(t,2);e[0],e[1];return(0,y.jsx)(o.default,{children:(0,y.jsx)(M,{})})}}},e={};function n(a){var r=e[a];if(void 0!==r)return r.exports;var o=e[a]={exports:{}};return t[a].call(o.exports,o,o.exports,n),o.exports}n.m=t,(()=>{var t=[];n.O=(e,a,r,o)=>{if(!a){var l=1/0;for(d=0;d<t.length;d++){for(var[a,r,o]=t[d],i=!0,s=0;s<a.length;s++)(!1&o||l>=o)&&Object.keys(n.O).every((t=>n.O[t](a[s])))?a.splice(s--,1):(i=!1,o<l&&(l=o));if(i){t.splice(d--,1);var u=r();void 0!==u&&(e=u)}}return e}o=o||0;for(var d=t.length;d>0&&t[d-1][2]>o;d--)t[d]=t[d-1];t[d]=[a,r,o]}})(),n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})},n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{var t={179:0};n.O.j=e=>0===t[e];var e=(e,a)=>{var r,o,[l,i,s]=a,u=0;if(l.some((e=>0!==t[e]))){for(r in i)n.o(i,r)&&(n.m[r]=i[r]);if(s)var d=s(n)}for(e&&e(a);u<l.length;u++)o=l[u],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(d)},a=self.webpackChunkweb=self.webpackChunkweb||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))})();var a=n.O(void 0,[806],(()=>n(864)));a=n.O(a)})();
//# sourceMappingURL=main.a182ddae.js.map