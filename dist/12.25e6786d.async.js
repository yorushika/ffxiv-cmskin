webpackJsonp([12],{576:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.FooterLite=t.PageComponent=void 0;var l=a(2),i=n(l),u=a(83),c=n(u),r=a(3),s=n(r),d=a(4),o=n(d),f=a(5),g=n(f),m=a(0),p=n(m),h=a(18),E=a(126),v=a(575),y=n(v),k=h.View.Split,S=h.View.Footer,b=function(){return[p.default.createElement(k,{key:"split"}),p.default.createElement(S,{key:"footer",className:y.default.foot},p.default.createElement(h.Back,null))]},C=function(e){function t(){var e,a,n,l;(0,s.default)(this,t);for(var u=arguments.length,r=Array(u),d=0;d<u;d++)r[d]=arguments[d];return a=n=(0,o.default)(this,(e=t.__proto__||(0,c.default)(t)).call.apply(e,[this].concat(r))),n.onDefault=function(){var e=(0,i.default)({timekey:n.state.timekey+1},(0,E.getSetting)(n.Setting,n.props.setting,!0));n.setState(e),h.Message.success(p.default.createElement(h.Lang,{id:"setting.message.reset"}))},n.onSave=function(){window.lang=n.state.lang,n.setState({timekey:n.state.timekey+1}),n.props.dispatch({type:"setting/update",payload:n.state}),h.Message.success(p.default.createElement(h.Lang,{id:"setting.message.apply"}))},n.Footer=[p.default.createElement(k,{key:"split"}),p.default.createElement(S,{key:"footer",className:y.default.foot,hasBtn:!0,rightContent:p.default.createElement("div",{className:y.default.btngroup},p.default.createElement(h.Button,{onClick:n.onDefault},p.default.createElement(h.Lang,{id:"setting.btn.reset"})),p.default.createElement(h.Button,{onClick:n.onSave},p.default.createElement(h.Lang,{id:"setting.btn.apply"})))},window.websocket?p.default.createElement(h.Back,null):null)],l=a,(0,o.default)(n,l)}return(0,g.default)(t,e),t}(m.Component);t.PageComponent=C,t.FooterLite=b},650:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(31),i=n(l),u=a(12),c=n(u),r=a(2),s=n(r),d=a(83),o=n(d),f=a(3),g=n(f),m=a(10),p=n(m),h=a(4),E=n(h),v=a(5),y=n(v),k=a(0),S=n(k),b=a(57),C=a(18),L=a(576),A=a(126),_=a(575),N=n(_),M=C.View.Content,w=C.View.Split,O=function(e){return{setting:e.setting}},T=function(e){function t(){var e,a,n,l;(0,g.default)(this,t);for(var i=arguments.length,u=Array(i),r=0;r<i;r++)u[r]=arguments[r];return a=n=(0,E.default)(this,(e=t.__proto__||(0,o.default)(t)).call.apply(e,[this].concat(u))),n.Setting=["lang","name","nameActive","img","imgActive","pureHps","graphHide","graphScale","graphTime","graphTimeActive","historyLength","uiScale","uiScaleActive","uiTrans","uiMini","uiAutoMini","uiAutoMiniActive"],n.state=(0,s.default)({timekey:0},(0,A.getSetting)(n.Setting,n.props.setting)),n.handleLangChange=function(e){n.setState({lang:e})},n.inputOnChange=function(e,t,a){var l=e.target.value;a&&(l=parseFloat(l)),l?n.setState((0,c.default)({},t,l)):C.Message.error(S.default.createElement(C.Lang,{id:"setting.message.error"}))},n.checkboxOnChange=function(e,t){var a=e.target.checked;n.setState((0,c.default)({},t,a))},l=a,(0,E.default)(n,l)}return(0,y.default)(t,e),(0,p.default)(t,[{key:"render",value:function(){var e=this,t=this.state,a=function(a,n,l){return S.default.createElement(C.Checkbox,{title:S.default.createElement(C.Lang,{id:"setting.basic."+a}),defaultChecked:t[a],onChange:function(t){return e.checkboxOnChange(t,a)}},n||l?S.default.createElement(C.Input,{defaultValue:t[n],placeholder:(0,C.LangStr)(l),onChange:function(t){return e.inputOnChange(t,n)}}):null)};return[S.default.createElement(M,{key:t.timekey,className:N.default.content},S.default.createElement("div",{className:N.default.body},S.default.createElement(w,{className:N.default.title,id:"setting.basic.split.lang"}),function(a){return S.default.createElement("div",{className:N.default.listLang},S.default.createElement("div",{className:N.default.listLangTitle},S.default.createElement(C.Lang,{id:"setting.basic."+a})),S.default.createElement(C.Select,{defaultValue:t.lang,mode:!1,options:["cn","en"],onChange:e.handleLangChange}))}("lang"),S.default.createElement(w,{className:N.default.title,id:"setting.basic.split.personal"}),a("nameActive","name","placeholder.you"),a("imgActive","img","placeholder.img"),S.default.createElement("br",null),S.default.createElement(w,{className:N.default.title,id:"setting.basic.split.statistics"}),a("graphTimeActive","graphTime"),a("graphHide"),a("graphScale"),a("pureHps"),S.default.createElement("br",null),S.default.createElement(w,{className:N.default.title,id:"setting.basic.split.gui"}),a("uiAutoMiniActive","uiAutoMini"),a("uiScaleActive","uiScale"),S.default.createElement(w,{className:N.default.title,id:"setting.basic.split.history"}),function(a){return S.default.createElement("div",{className:N.default.listItem},S.default.createElement("span",null,S.default.createElement("div",{className:N.default.listTitle},S.default.createElement(C.Lang,{id:"setting.basic."+a})),S.default.createElement("div",{className:N.default.listInput},S.default.createElement(C.Input,{defaultValue:t[a],onChange:function(t){return e.inputOnChange(t,a)}}))))}("historyLength")))].concat((0,i.default)(this.Footer))}}]),t}(L.PageComponent);t.default=(0,b.connect)(O)(T),e.exports=t.default}});