(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e,t,a){e.exports={BreadBottom:"BurgerIngredient__BreadBottom__HuxZP",BreadTop:"BurgerIngredient__BreadTop__10-cT",Seeds1:"BurgerIngredient__Seeds1__3xHtz",Seeds2:"BurgerIngredient__Seeds2__1cUso",Meat:"BurgerIngredient__Meat__13nAN",Cheese:"BurgerIngredient__Cheese__1FxeY",Salad:"BurgerIngredient__Salad__1iTJE",Bacon:"BurgerIngredient__Bacon__3vrAI"}},,,,,,function(e,t,a){e.exports={BuildControl:"BuildControl__BuildControl__1jYc3",Label:"BuildControl__Label__33Z-p",Less:"BuildControl__Less__377MJ",More:"BuildControl__More__28-hQ"}},,function(e,t,a){e.exports={BuildControls:"BuildControls__BuildControls__3_01f",OrderButton:"BuildControls__OrderButton__myBwT",enable:"BuildControls__enable__3jYIq"}},function(e,t,a){e.exports={Button:"Button__Button__QI7b2",Success:"Button__Success__2dHUt",Danger:"Button__Danger__2xnhN"}},,,function(e,t,a){e.exports={Content:"Layout__Content__LhJtv"}},function(e,t,a){e.exports={Logo:"Logo__Logo__19WaN"}},function(e,t,a){e.exports=a.p+"static/media/burger-logo.b8503d26.png"},function(e,t,a){e.exports={Toolbar:"Toolbar__Toolbar__2JJW-"}},function(e,t,a){e.exports={Burger:"Burger__Burger__3K4F-"}},function(e,t,a){e.exports={Modal:"Modal__Modal__32_-a"}},function(e,t,a){e.exports={Backdrop:"Backdrop__Backdrop__efy1y"}},,function(e,t,a){e.exports=a(28)},,,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(12),c=a.n(l),o=(a(27),a(2)),i=a(3),s=a(5),u=a(4),d=a(6),m=function(e){return e.children},_=a(13),p=a.n(_),h=a(14),b=a.n(h),g=a(15),E=a.n(g),f=function(e){return r.a.createElement("div",{className:b.a.Logo},r.a.createElement("img",{src:E.a,alt:"My Burger"}))},B=a(16),v=a.n(B),C=function(e){return r.a.createElement("header",{className:v.a.Toolbar},r.a.createElement("div",null,"Menu"),r.a.createElement(f,null),r.a.createElement("nav",null,"..."))},y=function(e){return r.a.createElement(m,null,r.a.createElement(C,null),r.a.createElement("main",{className:p.a.Content},e.children))},k=a(8),O=a(20),N=a(1),j=a.n(N),w=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=r.a.createElement("div",{className:j.a.BreadBottom});break;case"bread-top":e=r.a.createElement("div",{className:j.a.BreadTop},r.a.createElement("div",{className:j.a.Seeds1}),r.a.createElement("div",{className:j.a.Seeds2}));break;case"meat":e=r.a.createElement("div",{className:j.a.Meat});break;case"cheese":e=r.a.createElement("div",{className:j.a.Cheese});break;case"salad":e=r.a.createElement("div",{className:j.a.Salad});break;case"bacon":e=r.a.createElement("div",{className:j.a.Bacon});break;default:e=null}return e}}]),t}(n.Component),S=a(17),x=a.n(S),I=function(e){var t=Object.keys(e.ingredients).map(function(t){return Object(O.a)(Array(e.ingredients[t])).map(function(e,a){return r.a.createElement(w,{key:t+a,type:t})})}).reduce(function(e,t){return e.concat(t)},[]);return 0===t.length&&(t=r.a.createElement("p",null,"Please add ingredients")),console.log(t),r.a.createElement("div",{className:x.a.Burger},r.a.createElement(w,{type:"bread-top"}),t,r.a.createElement(w,{type:"bread-bottom"}))},T=a(9),M=a.n(T),H=a(7),L=a.n(H),P=function(e){return r.a.createElement("div",{className:L.a.BuildControl},r.a.createElement("div",{className:L.a.Label},e.label),r.a.createElement("button",{className:L.a.Less,onClick:e.removed,disabled:e.disabled},"Less"),r.a.createElement("button",{className:L.a.More,onClick:e.added},"More"))},A=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],J=function(e){return r.a.createElement("div",{className:M.a.BuildControls},r.a.createElement("p",null,"Current Price: ",r.a.createElement("strong",null,e.price.toFixed(2))),A.map(function(t){return r.a.createElement(P,{key:t.label,label:t.label,added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemoved(t.type)},disabled:e.disabled[t.type]})}),r.a.createElement("button",{className:M.a.OrderButton,disabled:!e.purchaseable,onClick:e.ordered},"ORDER NOW"))},Y=a(18),W=a.n(Y),D=a(19),F=a.n(D),R=function(e){return e.show?r.a.createElement("div",{className:F.a.Backdrop,onClick:e.clicked},"dsdsd"):null},U=function(e){return r.a.createElement(m,null,r.a.createElement(R,{show:e.show,clicked:e.clicked}),r.a.createElement("div",{className:W.a.Modal,style:{transform:e.show?"translateY(0)":"translateY(-100vh)",opacity:e.show?"1":"0"}},e.children))},z=a(10),Q=a.n(z),Z=function(e){return r.a.createElement("button",{className:[Q.a.Button,Q.a[e.btnType]].join(" "),onClick:e.clicked},e.children)},$=function(e){var t=Object.keys(e.ingredients).map(function(t){return r.a.createElement("li",{key:t},r.a.createElement("span",{style:{textTransform:"capitalize"}},t),":"," ",e.ingredients[t])});return r.a.createElement(m,null,r.a.createElement("h3",null,"Your Order"),r.a.createElement("p",null,"A delicious burger with the following ingredients:"),r.a.createElement("ul",null,t),r.a.createElement("p",null,r.a.createElement("strong",null,"Total Price: $",e.price.toFixed(2))),r.a.createElement("p",null,"Continue to checkout?"),r.a.createElement(Z,{btnType:"Danger",clicked:e.purchaseCancelled},"CANCEL"),r.a.createElement(Z,{btnType:"Success",clicked:e.purchaseContinue},"CONTINUE"))},q={salad:.5,cheese:.4,meat:1.3,bacon:.7},K=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={ingredients:{salad:0,bacon:0,cheese:0,meat:0},totalPrice:4,purchaseable:!1,purchasing:!1},a.addIngredientHandler=function(e){var t=a.state.ingredients[e]+1,n=Object(k.a)({},a.state.ingredients);n[e]=t;var r=q[e],l=a.state.totalPrice+r;a.setState({totalPrice:l,ingredients:n}),a.updatePurchaseState(n)},a.removeIngredientHanderl=function(e){var t=a.state.ingredients[e];if(!(t<=0)){var n=t-1,r=Object(k.a)({},a.state.ingredients);r[e]=n;var l=q[e],c=a.state.totalPrice-l;a.setState({totalPrice:c,ingredients:r}),a.updatePurchaseState(r)}},a.purchaseHandler=function(){a.setState({purchasing:!0})},a.purchaseCancelHandler=function(){a.setState({purchasing:!1})},a.purchaseContinueHandler=function(){alert("You continue!")},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"updatePurchaseState",value:function(e){var t=Object.keys(e).map(function(t){return e[t]}).reduce(function(e,t){return e+t},0);this.setState({purchaseable:t>0})}},{key:"render",value:function(){var e=Object(k.a)({},this.state.ingredients);for(var t in e)e[t]=e[t]<=0;return r.a.createElement(m,null,r.a.createElement(U,{show:this.state.purchasing,clicked:this.purchaseCancelHandler},r.a.createElement($,{ingredients:this.state.ingredients,purchaseCancelled:this.purchaseCancelHandler,purchaseContinue:this.purchaseContinueHandler,price:this.state.totalPrice})),r.a.createElement(I,{ingredients:this.state.ingredients}),r.a.createElement(J,{ingredientAdded:this.addIngredientHandler,ingredientRemoved:this.removeIngredientHanderl,disabled:e,price:this.state.totalPrice,purchaseable:this.state.purchaseable,ordered:this.purchaseHandler}))}}]),t}(n.Component),G=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(y,null,r.a.createElement(K,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[21,1,2]]]);
//# sourceMappingURL=main.5ca4425a.chunk.js.map