(this.webpackJsonpdaybuild=this.webpackJsonpdaybuild||[]).push([[0],{13:function(e,t,n){},16:function(e,t,n){e.exports=n(28)},21:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(2),c=n.n(r),i=(n(21),n(3)),l=n(4),u=n(7),s=n(6),d=(n(13),n(5)),p=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){var o;return Object(i.a)(this,n),o=t.call(this,e),console.log("constructor"),o}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",null,this.props.age),a.a.createElement("button",{onClick:function(){return e.props.onAgeUp(2)}},"Increment"),a.a.createElement("button",{onClick:this.props.onAgeDown},"Decrement"),this.props.loading&&"Loading....")}}]),n}(a.a.Component),g=Object(d.b)((function(e){return console.log("state ",e),{age:e.age,loading:e.loading}}),(function(e){return{onAgeUp:function(t){return e((n=t,function(e){e({type:"LOADING"}),setTimeout((function(){e(function(e){return{type:"AGE_UP",value:e}}(n))}),4e3)}));var n},onAgeDown:function(){return e({type:"AGE_DOWN",value:1})}}}))(p),h=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(i.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={data:{completed:!1,id:0,title:"",userId:0}},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/todos/1").then((function(e){return e.json()})).then((function(t){return e.setState({data:t})}))}},{key:"render",value:function(){return console.log(this.state.data),a.a.createElement("div",null,a.a.createElement(g,null))}}]),n}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var f=n(8),m={age:21,loading:!1},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0,n=Object(f.a)({},e);return"AGE_UP"===t.type?Object(f.a)(Object(f.a)({},e),{},{age:e.age+t.value,loading:!1}):("AGE_DOWN"===t.type&&n.age--,"LOADING"===t.type&&(n.loading=!0),n)},b=n(1),O=n(15),j=Object(b.c)(v,Object(b.a)(O.a));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(d.a,{store:j},a.a.createElement(h,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.e00295a2.chunk.js.map