(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e,t,a){e.exports={BreadBottom:"BurgerIngredient__BreadBottom__HuxZP",BreadTop:"BurgerIngredient__BreadTop__10-cT",Seeds1:"BurgerIngredient__Seeds1__3xHtz",Seeds2:"BurgerIngredient__Seeds2__1cUso",Meat:"BurgerIngredient__Meat__13nAN",Cheese:"BurgerIngredient__Cheese__1FxeY",Salad:"BurgerIngredient__Salad__1iTJE",Bacon:"BurgerIngredient__Bacon__3vrAI"}},,,,,,function(e,t,a){e.exports={BuildControl:"BuildControl__BuildControl__1jYc3",Label:"BuildControl__Label__33Z-p",Less:"BuildControl__Less__377MJ",More:"BuildControl__More__28-hQ"}},,function(e,t,a){e.exports={NavigationItem:"NavigationItem__NavigationItem__23bcu",active:"NavigationItem__active__2zJdO"}},function(e,t,a){e.exports={BuildControls:"BuildControls__BuildControls__3_01f",OrderButton:"BuildControls__OrderButton__myBwT",enable:"BuildControls__enable__3jYIq"}},function(e,t,a){e.exports={Button:"Button__Button__QI7b2",Success:"Button__Success__2dHUt",Danger:"Button__Danger__2xnhN"}},,,function(e,t,a){e.exports={Content:"Layout__Content__LhJtv"}},function(e,t,a){e.exports={Logo:"Logo__Logo__19WaN"}},function(e,t,a){e.exports=a.p+"static/media/burger-logo.b8503d26.png"},function(e,t,a){e.exports={Toolbar:"Toolbar__Toolbar__2JJW-"}},function(e,t,a){e.exports={NavigationItems:"NavigationItems__NavigationItems___yd_d"}},function(e,t,a){e.exports={SideDrawer:"SideDrawer__SideDrawer__21TuB",Open:"SideDrawer__Open__1pVYR",Close:"SideDrawer__Close__3Yv1l"}},function(e,t,a){e.exports={Burger:"Burger__Burger__3K4F-"}},function(e,t,a){e.exports={Modal:"Modal__Modal__32_-a"}},function(e,t,a){e.exports={Backdrop:"Backdrop__Backdrop__efy1y"}},,function(e,t,a){e.exports=a(31)},,,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(13),c=a.n(l),i=(a(30),a(2)),o=a(3),s=a(5),u=a(4),d=a(6),m=function(e){return e.children},_=a(14),p=a.n(_),h=a(15),g=a.n(h),b=a(16),E=a.n(b),f=function(e){return r.a.createElement("div",{className:g.a.Logo},r.a.createElement("img",{src:E.a,alt:"My Burger"}))},v=a(17),B=a.n(v),C=a(9),k=a.n(C),N=function(e){return r.a.createElement("li",{className:k.a.NavigationItem},r.a.createElement("a",{href:e.link,className:e.active?k.a.active:null},e.children))},y=a(18),O=a.n(y),w=function(){return r.a.createElement("ul",{className:O.a.NavigationItems},r.a.createElement(N,{link:"/",active:!0},"Burger Builder"),r.a.createElement(N,{link:"/"},"Checkout"))},S=function(e){return r.a.createElement("header",{className:B.a.Toolbar},r.a.createElement("div",null,"Menu"),r.a.createElement(f,null),r.a.createElement(w,null))},I=a(19),j=a.n(I),x=function(e){return r.a.createElement("div",{className:j.a.SideDrawer},r.a.createElement(f,null,r.a.createElement("nav",null,r.a.createElement(w,null))))},T=function(e){return r.a.createElement(m,null,r.a.createElement(S,null),r.a.createElement(x,null),r.a.createElement("main",{className:p.a.Content},e.children))},M=a(8),H=a(23),L=a(1),P=a.n(L),D=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=r.a.createElement("div",{className:P.a.BreadBottom});break;case"bread-top":e=r.a.createElement("div",{className:P.a.BreadTop},r.a.createElement("div",{className:P.a.Seeds1}),r.a.createElement("div",{className:P.a.Seeds2}));break;case"meat":e=r.a.createElement("div",{className:P.a.Meat});break;case"cheese":e=r.a.createElement("div",{className:P.a.Cheese});break;case"salad":e=r.a.createElement("div",{className:P.a.Salad});break;case"bacon":e=r.a.createElement("div",{className:P.a.Bacon});break;default:e=null}return e}}]),t}(n.Component),Y=a(20),A=a.n(Y),J=function(e){var t=Object.keys(e.ingredients).map(function(t){return Object(H.a)(Array(e.ingredients[t])).map(function(e,a){return r.a.createElement(D,{key:t+a,type:t})})}).reduce(function(e,t){return e.concat(t)},[]);return 0===t.length&&(t=r.a.createElement("p",null,"Please add ingredients")),console.log(t),r.a.createElement("div",{className:A.a.Burger},r.a.createElement(D,{type:"bread-top"}),t,r.a.createElement(D,{type:"bread-bottom"}))},R=a(10),W=a.n(R),F=a(7),z=a.n(F),U=function(e){return r.a.createElement("div",{className:z.a.BuildControl},r.a.createElement("div",{className:z.a.Label},e.label),r.a.createElement("button",{className:z.a.Less,onClick:e.removed,disabled:e.disabled},"Less"),r.a.createElement("button",{className:z.a.More,onClick:e.added},"More"))},Q=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],Z=function(e){return r.a.createElement("div",{className:W.a.BuildControls},r.a.createElement("p",null,"Current Price: ",r.a.createElement("strong",null,e.price.toFixed(2))),Q.map(function(t){return r.a.createElement(U,{key:t.label,label:t.label,added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemoved(t.type)},disabled:e.disabled[t.type]})}),r.a.createElement("button",{className:W.a.OrderButton,disabled:!e.purchaseable,onClick:e.ordered},"ORDER NOW"))},$=a(21),q=a.n($),K=a(22),V=a.n(K),G=function(e){return e.show?r.a.createElement("div",{className:V.a.Backdrop,onClick:e.clicked},"dsdsd"):null},X=function(e){return r.a.createElement(m,null,r.a.createElement(G,{show:e.show,clicked:e.clicked}),r.a.createElement("div",{className:q.a.Modal,style:{transform:e.show?"translateY(0)":"translateY(-100vh)",opacity:e.show?"1":"0"}},e.children))},ee=a(11),te=a.n(ee),ae=function(e){return r.a.createElement("button",{className:[te.a.Button,te.a[e.btnType]].join(" "),onClick:e.clicked},e.children)},ne=function(e){var t=Object.keys(e.ingredients).map(function(t){return r.a.createElement("li",{key:t},r.a.createElement("span",{style:{textTransform:"capitalize"}},t),":"," ",e.ingredients[t])});return r.a.createElement(m,null,r.a.createElement("h3",null,"Your Order"),r.a.createElement("p",null,"A delicious burger with the following ingredients:"),r.a.createElement("ul",null,t),r.a.createElement("p",null,r.a.createElement("strong",null,"Total Price: $",e.price.toFixed(2))),r.a.createElement("p",null,"Continue to checkout?"),r.a.createElement(ae,{btnType:"Danger",clicked:e.purchaseCancelled},"CANCEL"),r.a.createElement(ae,{btnType:"Success",clicked:e.purchaseContinue},"CONTINUE"))},re={salad:.5,cheese:.4,meat:1.3,bacon:.7},le=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={ingredients:{salad:0,bacon:0,cheese:0,meat:0},totalPrice:4,purchaseable:!1,purchasing:!1},a.addIngredientHandler=function(e){var t=a.state.ingredients[e]+1,n=Object(M.a)({},a.state.ingredients);n[e]=t;var r=re[e],l=a.state.totalPrice+r;a.setState({totalPrice:l,ingredients:n}),a.updatePurchaseState(n)},a.removeIngredientHanderl=function(e){var t=a.state.ingredients[e];if(!(t<=0)){var n=t-1,r=Object(M.a)({},a.state.ingredients);r[e]=n;var l=re[e],c=a.state.totalPrice-l;a.setState({totalPrice:c,ingredients:r}),a.updatePurchaseState(r)}},a.purchaseHandler=function(){a.setState({purchasing:!0})},a.purchaseCancelHandler=function(){a.setState({purchasing:!1})},a.purchaseContinueHandler=function(){alert("You continue!")},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"updatePurchaseState",value:function(e){var t=Object.keys(e).map(function(t){return e[t]}).reduce(function(e,t){return e+t},0);this.setState({purchaseable:t>0})}},{key:"render",value:function(){var e=Object(M.a)({},this.state.ingredients);for(var t in e)e[t]=e[t]<=0;return r.a.createElement(m,null,r.a.createElement(X,{show:this.state.purchasing,clicked:this.purchaseCancelHandler},r.a.createElement(ne,{ingredients:this.state.ingredients,purchaseCancelled:this.purchaseCancelHandler,purchaseContinue:this.purchaseContinueHandler,price:this.state.totalPrice})),r.a.createElement(J,{ingredients:this.state.ingredients}),r.a.createElement(Z,{ingredientAdded:this.addIngredientHandler,ingredientRemoved:this.removeIngredientHanderl,disabled:e,price:this.state.totalPrice,purchaseable:this.state.purchaseable,ordered:this.purchaseHandler}))}}]),t}(n.Component),ce=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(T,null,r.a.createElement(le,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(ce,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[24,1,2]]]);
//# sourceMappingURL=main.83a6458d.chunk.js.map