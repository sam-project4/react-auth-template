(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){e.exports=a(25)},18:function(e,t,a){},19:function(e,t,a){},25:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),o=a.n(c),l=(a(18),a(1)),s=a(2),i=a(4),m=a(3),u=a(5),d=function(e){var t=e.user,a=e.changeActivePage,n=e.onSignout;return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement("img",{className:"width_logo",src:"https://f.top4top.net/p_1188oyaa71.png"})),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},r.a.createElement("ul",{className:"navbar-nav"},function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:"nav-item",onClick:function(){return e("home")}},r.a.createElement("div",{className:"nav-link"},"Home")))}(a),t?function(e,t){return r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:"nav-item",onClick:function(){return e("change-password")}},r.a.createElement("div",{className:"nav-link"},"Change Password")),r.a.createElement("li",{className:"nav-item",onClick:function(){return e("post")}},r.a.createElement("div",{className:"nav-link"},"Add post")),r.a.createElement("li",{className:"nav-item",onClick:function(){return t()}},r.a.createElement("div",{className:"nav-link"},"Sign Out")))}(a,n):function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:"nav-item",onClick:function(){return e("sign-in")}},r.a.createElement("div",{className:"nav-link"},"Sign In")),r.a.createElement("li",{className:"nav-item",onClick:function(){return e("sign-up")}},r.a.createElement("div",{className:"nav-link"},"Sign Up")))}(a))))};a(19);function h(e){localStorage.setItem("user",JSON.stringify(e))}var p=function(e){document.cookie=e+"=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"};function g(){var e=localStorage.getItem("user");return"undefined"===e?null:JSON.parse(e)}var f=a(6),b="https://sheltered-ridge-83464.herokuapp.com",v="http://localhost:3001",E="localhost"===window.location.hostname?v:b,N=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={formData:{email:null,password:null},err:null},a.handleLoginRequest=function(e){var t="".concat(E,"/sign-in");console.log(t),fetch(t,{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(e)}).then(function(e){return e.json()}).then(function(e){e.status>200?a.setState({err:e.message}):(a.setState({err:null}),h(e),a.props.onSignin())}).catch(function(e){return console.log(e)})},a.handleSubmit=function(e){e.preventDefault(),a.handleLoginRequest(a.state.formData)},a.handleChange=function(e){var t=e.currentTarget,n=Object(f.a)({},a.state.formData);n[t.name]=t.value,a.setState({formData:n})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Login-component"},r.a.createElement("div",{className:"pt-5 mt-5"},r.a.createElement("div",{class:"mainbox col-md-5 col-md-offset-3 col-sm-8 col-sm-offset-2 text-center margin"},r.a.createElement("div",{class:"box"},r.a.createElement("h1",null,"PLEASE SIGININ"),r.a.createElement("br",null),r.a.createElement("br",null),this.state.err?r.a.createElement("div",{className:"alert alert-danger"}," ",this.state.err," "):"",r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{name:"email",className:"form-control",placeholder:"Email address",onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("input",{name:"password",className:"form-control",type:"password",placeholder:"Password",onChange:this.handleChange})),r.a.createElement("br",null),r.a.createElement("button",{type:"submit",className:"btn btn-primary col-md-12"},"Login")),r.a.createElement("br",null)))))}}]),t}(n.Component),y=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={formData:{email:null,password:null,password_confirmation:null},err:null},a.handleLoginRequest=function(e){var t="".concat(E,"/sign-up");fetch(t,{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({credentials:e})}).then(function(e){return e.json()}).then(function(e){e.status>299?a.setState({err:e.message}):(h(e),a.props.onSignin())}).catch(function(e){return console.log(e)})},a.handleSubmit=function(e){e.preventDefault(),a.handleLoginRequest(a.state.formData)},a.handleChange=function(e){var t=e.currentTarget,n=Object(f.a)({},a.state.formData);n[t.name]=t.value,a.setState({formData:n})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Login-component"},r.a.createElement("div",{className:"pt-5 mt-5"},r.a.createElement("div",{class:"mainbox col-md-5 col-md-offset-3 col-sm-8 col-sm-offset-2 text-center margin"},r.a.createElement("div",{class:"box"},r.a.createElement("h1",null,"PLEASE SIGNUP"),this.state.err?r.a.createElement("div",{className:"alert alert-warning"}," ",this.state.err," "):"",r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("br",null),"  ",r.a.createElement("br",null),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{name:"email",className:"form-control",placeholder:"Email address",onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("input",{name:"password",className:"form-control",type:"password",placeholder:"Password",onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("input",{name:"password_confirmation",className:"form-control",type:"password",placeholder:"Password confirmation",onChange:this.handleChange})),r.a.createElement("br",null),r.a.createElement("button",{type:"submit",className:"btn btn-primary col-md-12"},"Sign Up"))))))}}]),t}(n.Component),S=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={formData:{old:null,new:null},err:null},a.handleLoginRequest=function(e){var t="".concat(E,"/change-password");console.log({email:g().email,passwords:e}),console.log(t),fetch(t,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:g().email,passwords:e})}).then(function(e){return e.json()}).then(function(e){a.props.changeActivePage("home")}).catch(function(e){return console.log(e)})},a.handleSubmit=function(e){e.preventDefault(),a.handleLoginRequest(a.state.formData)},a.handleChange=function(e){var t=e.currentTarget,n=Object(f.a)({},a.state.formData);n[t.name]=t.value,a.setState({formData:n})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"pt-5 mt-5"},r.a.createElement("div",{class:"mainbox col-md-5 col-md-offset-3 col-sm-8 col-sm-offset-2 text-center margin"},r.a.createElement("div",{class:"box"},r.a.createElement("h1",null,"Change Password"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("br",null),r.a.createElement("input",{name:"old",className:"form-control",type:"password",placeholder:"old Password",onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("input",{name:"new",type:"password",className:"form-control",placeholder:"new Password",onChange:this.handleChange})),r.a.createElement("br",null),r.a.createElement("button",{type:"submit",className:"btn btn-primary col-md-12"},"Submit")))))}}]),t}(n.Component),C={width:"19rem",height:"28rem"},w={border:"2px blue solid",height:"50px"},j={background:"#e8e8e8"},P={height:"60%"},O=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={products:[],allProducts:[],formData:{productName:null}},a.handleChange=function(e){var t=e.currentTarget,n=Object(f.a)({},a.state.formData);n[t.name]=t.value;var r=a.state.allProducts.filter(function(e){return e.name.includes(t.value)});a.setState({formData:n,products:r})},a.handelProductRequest=function(){var e="".concat(E,"/api/products");console.log(e),fetch(e,{method:"GET",headers:{"Content-type":"application/json"}}).then(function(e){return e.json()}).then(function(e){e.status>299?a.setState({err:e.message}):a.setState({products:e.products,allProducts:e.products})}).catch(function(e){return console.log(e)})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.handelProductRequest()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{style:j},r.a.createElement("div",{className:"bg_home"},r.a.createElement("input",{style:w,name:"productName",className:"form-control test",placeholder:" \ud83d\udd0d  Search by item name",onChange:this.handleChange})),r.a.createElement("div",{class:"row pt-2 m-5 test2"},this.state.products.map(function(t,a){return r.a.createElement("div",{class:"col-sm p-2 animated slideInUp"},r.a.createElement("div",{class:"card mt-3",style:C,onClick:function(){return e.props.changeActiveProduct(t)}},r.a.createElement("img",{style:P,src:t.image,class:"card-img-top",alt:"..."}),r.a.createElement("div",{class:"card-body"},r.a.createElement("p",{key:a+" name"}," ",r.a.createElement("b",null," ",t.name," ")),r.a.createElement("p",{key:a+" description"}," Start bid: ",t.close_bid," SR"),t.Biddings[0]?r.a.createElement("p",{key:a+" Biddings"}," Highest bidding: ",r.a.createElement("span",{className:"highest_bid_span"},t.Biddings[0].bid_number," SR")," "):"Start bidding now")))})))}}]),t}(n.Component),D=function(){return r.a.createElement("div",null,"Profile")},k=a(7),A=a(12),_=a.n(A),x=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={products:[],formData:{bid:100},counter:null},a.handleProductRequest=function(e){console.log("product\n\n\n",e);var t="".concat(E,"/api/products/").concat(a.props.product.id);fetch(t,{mode:"cors",credentials:"include",method:"DELETE",headers:{"Content-type":"application/json"},body:JSON.stringify({product:e})}).then(function(e){return e.json()}).then(function(e){e.status>299&&a.setState({err:e.message}),a.props.changeActivePage("home")}).catch(function(e){return console.log(e)})},a.handleBidRequest=function(e){var t=E+"/api/products/"+a.props.product.id+"/bid";fetch(t,{mode:"cors",credentials:"include",method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({bid:a.state.formData.bid})}).then(function(e){return e.json()}).then(function(e){e.status>299&&a.setState({err:e.message}),_.a.fire({position:"center",type:"success",title:"You added bid successfully",showConfirmButton:!1,timer:2e3}),console.log(e)}).catch(function(e){return console.log(e)})},a.handleChange=function(e){var t=e.currentTarget,n=Object(f.a)({},a.state.formData);n[t.name]=t.value,a.setState({formData:n})},a.countDownDate=function(){var e=new Date(a.props.product.createdAt);return e.setDate(e.getDate()+1)},a.counterInterval=setInterval(function(){var e=(new Date).getTime(),t=a.countDownDate()-e,n=Math.floor(t/864e5)+"d "+Math.floor(t%864e5/36e5)+"h "+Math.floor(t%36e5/6e4)+"m "+Math.floor(t%6e4/1e3)+"s ";a.setState({counter:n}),t<0&&(clearInterval(a.counterInterval),n=null,a.setState({counter:n}))},1e3),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,t="".concat(E,"/api/product/").concat(this.props.product.id);console.log(t),fetch(t,{mode:"cors",credentials:"include",method:"GET",headers:{"Content-type":"application/json"}}).then(function(e){return e.json()}).then(function(t){t.status>299?e.setState({err:t.message}):(console.log(t.product),e.setState({products:t.product}))}).catch(function(e){return console.log(e)})}},{key:"componentWillUnmount",value:function(){clearInterval(this.counterInterval)}},{key:"render",value:function(){var e=this;return console.log(this.props.product),r.a.createElement("div",Object(k.a)({className:"one111"},"className","pt-5 mt-5"),r.a.createElement("div",{className:"btns-one-product"},null!==g()&&g().id===this.props.product.owner_id?r.a.createElement(r.a.Fragment,null," ",r.a.createElement("button",{class:"btn btn-secondary",onClick:function(){return e.props.changeActivePage("put",e.props.product.id)}},"Edit")," ","\u2002",r.a.createElement("button",{class:"btn btn-warning",onClick:function(){e.handleProductRequest()}},"Delete")," "):""),r.a.createElement("img",{className:"image-one-product",src:this.state.products.image}),r.a.createElement("div",{class:"clearfix"},r.a.createElement("div",{className:"box1"},r.a.createElement("h1",{className:"name-one-product"},this.state.products.name),r.a.createElement("h3",{className:"HSB-one-product"},"Start Bid : ")," \u2002",r.a.createElement("p",{className:"P-one-product"},this.state.products.close_bid," SR"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"btn-bid-one-product"},g()&&g().id!==this.props.product.owner_id?this.state.counter?r.a.createElement(r.a.Fragment,null," ",r.a.createElement("p",{className:"counter-one-product"},this.state.counter)," ",r.a.createElement("p",{className:"until"},"Until The Ends"),r.a.createElement("br",null),r.a.createElement("h6",{className:"bidNow-one-product"},"Bid : ")," \u2002",r.a.createElement("input",{className:"input-bid-one-product",type:"number",name:"bid",onChange:this.handleChange,value:this.state.formData.bid})," ","\u2002",r.a.createElement("button",{onClick:function(){e.handleBidRequest()},class:"btn btn-primary"},"BID")," "):r.a.createElement("div",null,r.a.createElement("img",{className:"img-info",src:"https://vignette.wikia.nocookie.net/bestbrute/images/a/a1/Info_icon_blue_3d.svg/revision/latest?cb=20090524024510"}),r.a.createElement("p",{class:"text-info"},"You Missed The Bid")," "):r.a.createElement("div",null,r.a.createElement("img",{className:"img-info",src:"https://vignette.wikia.nocookie.net/bestbrute/images/a/a1/Info_icon_blue_3d.svg/revision/latest?cb=20090524024510"}),r.a.createElement("p",{class:"text-info"}," You Can not Bid ")))," ",r.a.createElement("br",null),this.props.product.Biddings[0]?r.a.createElement("h6",null," Highest Bid: ",this.props.product.Biddings[0].bid_number):""),r.a.createElement("div",{className:"box1"},r.a.createElement("p",{className:"desc-one-product"},this.state.products.description))))}}]),t}(n.Component),T={background:"purple",color:"white"},I=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={formData:{name:"",description:"",image:"",owner_id:g().id,close_bid:""}},a.handleProductRequest=function(e){var t="".concat(E,"/api/products");fetch(t,{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({product:e})}).then(function(e){return e.json()}).then(function(e){e.status>299&&a.setState({err:e.message}),a.props.changeActivePage("home")}).catch(function(e){return console.log(e)})},a.handleSubmit=function(e){e.preventDefault(),console.log(a.state.formData),a.handleProductRequest(a.state.formData)},a.handleChange=function(e){var t=e.currentTarget,n=Object(f.a)({},a.state.formData);n[t.name]=t.value,a.setState({formData:n})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"pt-5 mt-5"},r.a.createElement("div",{className:"border_addPost"},r.a.createElement("h1",{className:"bg_title"},"Add your item"),r.a.createElement("br",null),r.a.createElement("div",{className:"padding_AddPost"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Name: "),r.a.createElement("input",{name:"name",placeholder:" type item name",className:"form-control margin-top",onChange:this.handleChange}),r.a.createElement("label",null,"description:"),r.a.createElement("input",{name:"description",placeholder:" type item description",className:"form-control margin-top",onChange:this.handleChange}),r.a.createElement("label",null,"image:"),r.a.createElement("input",{name:"image",placeholder:"type url example : https:image.com/old_pen",className:"form-control margin-top",onChange:this.handleChange}),r.a.createElement("label",null,"start bid:"),r.a.createElement("input",{name:"close_bid",className:"form-control",placeholder:" example : 100 ",onChange:this.handleChange,type:"number"})),r.a.createElement("br",null),r.a.createElement("button",{type:"submit",className:"btn btn-outline-primary col-md-12",style:T},r.a.createElement("span",{className:"text.AddPost"},"submit"))))))}}]),t}(n.Component),B={background:"purple",color:"white"},R=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={formData:{name:"",description:"",image:"",owner_id:g().id,close_bid:""}},a.handleProductRequest=function(e){var t="".concat(E,"/api/product/").concat(a.props.id);fetch(t,{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify({product:e})}).then(function(e){return e.json()}).then(function(e){e.status>299&&a.setState({err:e.message}),a.props.changeActivePage("home")}).catch(function(e){return console.log(e)})},a.handleSubmit=function(e){e.preventDefault(),console.log(a.state.formData),a.handleProductRequest(a.state.formData)},a.handleChange=function(e){var t=e.currentTarget,n=Object(f.a)({},a.state.formData);n[t.name]=t.value,a.setState({formData:n})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"pt-5 mt-5"},r.a.createElement("div",{className:"border_addPost"},r.a.createElement("h1",{className:"bg_title"},"Update your item"),r.a.createElement("br",null),r.a.createElement("div",{className:"padding_AddPost"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Name "),r.a.createElement("input",{name:"name",className:"form-control margin-top",placeholder:" type item name",onChange:this.handleChange}),r.a.createElement("label",null,"description"),r.a.createElement("input",{name:"description",className:"form-control margin-top",placeholder:" type item description",onChange:this.handleChange}),r.a.createElement("label",null,"image"),r.a.createElement("input",{name:"image",className:"form-control margin-top",placeholder:"type url example : https:image.com/old_pen",onChange:this.handleChange}),r.a.createElement("label",null,"close_bid"),r.a.createElement("input",{name:"close_bid",className:"form-control margin-top",onChange:this.handleChange,placeholder:" example : 100 ",type:"number"})),r.a.createElement("br",null),r.a.createElement("button",{type:"submit",className:"btn btn-primary col-12",style:B},"submit")))))}}]),t}(n.Component),q=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={user:null,activePage:"home",activeProduct:null,productId:void 0},a.changeActiveProduct=function(e){console.log("changing active product",e),a.setState({activeProduct:e}),a.changeActivePage("one_product")},a.changeActivePage=function(e,t){a.setState({activePage:e,productId:t})},a.onSignin=function(){a.setState({user:g()}),a.changeActivePage("home")},a.onSignout=function(){console.log("sigin out"),a.setState({user:null}),document.cookie="jwt= ; expires = Thu, 01 Jan 1970 00:00:00 GMT",p("jwt"),localStorage.removeItem("user")},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=g();e&&this.setState({user:e})}},{key:"render",value:function(){var e,t=this.state,a=t.user,n=t.activePage,c="";return"sign-in"!==n&&"sign-up"!==n&&"change-password"!==n||(c="loginBG"),e="home"===n?"":"container","post"!==n&&"put"!==n||(c="AddPostBG"),r.a.createElement("div",{className:c},r.a.createElement(d,{user:a,changeActivePage:this.changeActivePage,onSignout:this.onSignout}),r.a.createElement("div",{className:e},"home"===n?r.a.createElement(O,{changeActiveProduct:this.changeActiveProduct,changeActivePage:this.changeActivePage}):"","sign-in"===n?r.a.createElement(N,{onSignin:this.onSignin}):"","sign-up"===n?r.a.createElement(y,{onSignin:this.onSignin}):"","change-password"===n?r.a.createElement(S,{changeActivePage:this.changeActivePage}):"","profile"===n?r.a.createElement(D,null):"","one_product"===n?r.a.createElement(x,{product:this.state.activeProduct,changeActivePage:this.changeActivePage}):"","post"===n?r.a.createElement(I,{changeActivePage:this.changeActivePage}):"","put"===n?r.a.createElement(R,{id:this.state.productId,changeActivePage:this.changeActivePage}):""))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(20),a(10),a(21),a(22),a(24);o.a.render(r.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[13,1,2]]]);
//# sourceMappingURL=main.ddd89ba6.chunk.js.map