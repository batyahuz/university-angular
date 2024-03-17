import{$ as L,A as S,B as d,D as m,F as y,G as I,I as v,L as T,N as b,P as Z,Q as ee,S as te,X as E,Z as P,_ as re,a as U,aa as p,ba as q,ca as R,da as j,ea as h,fa as D,h as N,i as z,ia as G,k as J,ka as V,l as K,m as Q,n as W,o as X,pa as ne,q as n,qa as ie,r as F,s as c,t as i,u as o,v as s,w as g,x as f,y as _,z as Y}from"./chunk-BOMFQHQL.js";var x=(()=>{let r=class r{setSessionStorage(l,a,u){sessionStorage.setItem("userToken","Bearer "+l),sessionStorage.setItem("userName",a),u?sessionStorage.setItem("role","lecturer"):sessionStorage.setItem("role","user")}login(l,a){return new Promise((u,C)=>{this._http.post(this._serviceName+`login?islecturer=${a}`,l).subscribe({next:w=>{this.setSessionStorage(w.token,l.userName,a),u(w)},error:w=>{C(w)}})})}signin(l){return new Promise((a,u)=>{this._http.post(this._serviceName+"signin",l).subscribe({next:C=>{this.setSessionStorage(C.token,l.name,!1),a(C)},error:C=>{u(C)}})})}signout(){sessionStorage.removeItem("userToken"),sessionStorage.removeItem("userName"),this._dataService.updateDataInLocalStorage()}constructor(l){this._http=l,this._serviceName="/university/"}};r.\u0275fac=function(a){return new(a||r)(X(ee))},r.\u0275prov=Q({token:r,factory:r.\u0275fac,providedIn:"root"});let e=r;return e})();var k=class{};var H=U(re());function de(e,r){e&1&&(o(0,"div",19),m(1," This field is required"),s())}function pe(e,r){e&1&&(o(0,"div",19),m(1," This field must contains at least 2 chars"),s())}function fe(e,r){if(e&1&&(f(0),c(1,de,2,0,"div",18)(2,pe,2,0,"div",18),_()),e&2){let t=d(2);n(),i("ngIf",t.userForm.controls.userName.errors.required),n(),i("ngIf",t.userForm.controls.userName.errors.minlength)}}function _e(e,r){e&1&&(o(0,"div",19),m(1," This field is required"),s())}function ge(e,r){e&1&&(o(0,"div",19),m(1," This field must contains at least 2 chars"),s())}function ve(e,r){if(e&1&&(f(0),c(1,_e,2,0,"div",18)(2,ge,2,0,"div",18),_()),e&2){let t=d(2);n(),i("ngIf",t.userForm.controls.password.errors.required),n(),i("ngIf",t.userForm.controls.password.errors.minlength)}}function he(e,r){e&1&&(o(0,"div",19),m(1," This field is required"),s())}function Ce(e,r){if(e&1&&(f(0),c(1,he,2,0,"div",18),_()),e&2){let t=d(3);n(),i("ngIf",t.userForm.controls.courseName.errors.required)}}var O=e=>({"is-invalid":e});function xe(e,r){if(e&1&&(o(0,"div",8),g(1,"input",20),o(2,"label",21),m(3,"coure name:"),s(),c(4,Ce,2,1,"ng-container",11),s()),e&2){let t=d(2);n(),i("ngClass",v(2,O,(t.userForm.controls.courseName==null?null:t.userForm.controls.courseName.touched)&&t.userForm.controls.courseName.errors)),n(3),i("ngIf",(t.userForm.controls.courseName==null?null:t.userForm.controls.courseName.touched)&&t.userForm.controls.courseName.errors)}}function Fe(e,r){if(e&1){let t=Y();f(0,4),o(1,"div",5)(2,"div",8),g(3,"input",9),o(4,"label",10),m(5),s(),c(6,fe,3,2,"ng-container",11),s(),o(7,"div",8),g(8,"input",12),o(9,"label",13),m(10),s(),c(11,ve,3,2,"ng-container",11),s(),c(12,xe,5,4,"div",14),o(13,"div",15)(14,"button",16),m(15,"login"),s()()(),o(16,"a",17),S("click",function(){J(t);let a=d();return K(a.setIsLecturer())}),m(17),s(),_()}if(e&2){let t=d();n(3),i("ngClass",v(9,O,(t.userForm.controls.userName==null?null:t.userForm.controls.userName.touched)&&t.userForm.controls.userName.errors)),n(2),y("",t.isLecturer?"lecturer":"user"," name:"),n(),i("ngIf",(t.userForm.controls.userName==null?null:t.userForm.controls.userName.touched)&&t.userForm.controls.userName.errors),n(2),i("ngClass",v(11,O,(t.userForm.controls.password==null?null:t.userForm.controls.password.touched)&&t.userForm.controls.password.errors)),n(2),y("",t.isLecturer?"lecturer":"user"," password:"),n(),i("ngIf",(t.userForm.controls.password==null?null:t.userForm.controls.password.touched)&&t.userForm.controls.password.errors),n(),i("ngIf",t.isLecturer),n(2),i("disabled",!t.userForm.valid),n(3),y(" ",t.isLecturer?"you are a student? enter here":"you a lecturer? enter from here","")}}var se=(()=>{let r=class r{setIsLecturer(){this.isLecturer?this.userForm.removeControl("courseName"):this.userForm.addControl("courseName",new h(this.courseName,[p.required])),this.isLecturer=!this.isLecturer}onSubmit(){this.userForm.invalid||this._userService.login(this.userForm.value,this.isLecturer).then(()=>{this._router.navigate(["/course/all"])}).catch(l=>{l.error.error==="user"?H.default.fire({icon:"error",title:"user name is not valid",showConfirmButton:!0,showDenyButton:!0,text:`Are you a ${this.isLecturer?"student":"lecturer"}?`,confirmButtonText:`I'm a ${this.isLecturer?"student":"lecturer"}`,denyButtonText:"I want to register"}).then(a=>{a.isConfirmed?this.isLecturer=!this.isLecturer:this._router.navigate(["/user/register"],{state:{name:this.userForm.controls.userName.value}})}):H.default.fire({icon:"error",title:"Oops...",text:"password is not valid"})})}constructor(l,a){this._userService=l,this._router=a,this.user=new k,this.userForm=new j({userName:new h(this.user.name,[p.required,p.minLength(2)]),password:new h(this.user.password,[p.required,p.minLength(2)])}),this.isLecturer=!1,this.courseName=""}};r.\u0275fac=function(a){return new(a||r)(F(x),F(E))},r.\u0275cmp=N({type:r,selectors:[["app-login"]],features:[I([x])],decls:9,vars:3,consts:[[3,"formGroup","ngSubmit"],[1,"container","mt-5"],[1,"row","justify-content-center"],[1,"col-md-6"],[1,"card"],[1,"card-body"],[1,"card-title","text-center","turquoise"],["class","card",4,"ngIf"],[1,"form-group","form-floating","mb-3"],["type","text","id","userName","formControlName","userName","name","userName",1,"form-control",3,"ngClass"],["for","userName"],[4,"ngIf"],["type","text","id","password","formControlName","password","name","password",1,"form-control",3,"ngClass"],["for","password"],["class","form-group form-floating mb-3",4,"ngIf"],[1,"d-grid","gap-2"],["type","submit",1,"btn","btn-success",3,"disabled"],[1,"card-link",3,"click"],["class","alert alert-danger",4,"ngIf"],[1,"alert","alert-danger"],["type","text","id","courseName","formControlName","courseName","name","courseName",1,"form-control",3,"ngClass"],["for","courseName"]],template:function(a,u){a&1&&(o(0,"form",0),S("ngSubmit",function(){return u.onSubmit()}),o(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"h5",6),m(7),s(),c(8,Fe,18,13,"ng-container",7),s()()()()()()),a&2&&(i("formGroup",u.userForm),n(7),y(" ",u.isLecturer?"Lecturer":"User"," Login "),n(),i("ngIf",u.user))},dependencies:[T,b,D,L,q,R,G,V]});let e=r;return e})();var M=class{};var $=U(re());function Se(e,r){e&1&&(o(0,"div",20),m(1," This field is required"),s())}function ye(e,r){e&1&&(o(0,"div",20),m(1," This field must contains at least 2 chars"),s())}function we(e,r){if(e&1&&(f(0),c(1,Se,2,0,"div",19)(2,ye,2,0,"div",19),_()),e&2){let t=d(2);n(),i("ngIf",t.userForm.controls.name.errors.required),n(),i("ngIf",t.userForm.controls.name.errors.minlength)}}function Ne(e,r){e&1&&(o(0,"div",20),m(1," This field is required"),s())}function Ie(e,r){if(e&1&&(f(0),c(1,Ne,2,0,"div",19),_()),e&2){let t=d(2);n(),i("ngIf",t.userForm.controls.address.errors.required)}}function Te(e,r){e&1&&(o(0,"div",20),m(1," This field is required"),s())}function be(e,r){e&1&&(o(0,"div",20),m(1," This field must be a template of email"),s())}function Ee(e,r){if(e&1&&(f(0),c(1,Te,2,0,"div",19)(2,be,2,0,"div",19),_()),e&2){let t=d(2);n(),i("ngIf",t.userForm.controls.email.errors.required),n(),i("ngIf",t.userForm.controls.email.errors.email)}}function Le(e,r){e&1&&(o(0,"div",20),m(1," This field is required"),s())}function qe(e,r){e&1&&(o(0,"div",20),m(1," This field must contains at least 2 chars"),s())}function Re(e,r){if(e&1&&(f(0),c(1,Le,2,0,"div",19)(2,qe,2,0,"div",19),_()),e&2){let t=d(2);n(),i("ngIf",t.userForm.controls.password.errors.required),n(),i("ngIf",t.userForm.controls.password.errors.minlength)}}var B=e=>({"is-invalid":e});function je(e,r){if(e&1&&(f(0,4),o(1,"div",5)(2,"div",8),g(3,"input",9),o(4,"label",10),m(5,"user name:"),s(),c(6,we,3,2,"ng-container",11),s(),o(7,"div",8),g(8,"input",12),o(9,"label",13),m(10,"user address:"),s(),c(11,Ie,2,1,"ng-container",11),s(),o(12,"div",8),g(13,"input",14),o(14,"label",10),m(15,"user email:"),s(),c(16,Ee,3,2,"ng-container",11),s(),o(17,"div",8),g(18,"input",15),o(19,"label",16),m(20,"user password:"),s(),c(21,Re,3,2,"ng-container",11),s(),o(22,"div",17)(23,"button",18),m(24,"login"),s()()(),_()),e&2){let t=d();n(3),i("ngClass",v(9,B,t.userForm.controls.name.touched&&t.userForm.controls.name.errors)),n(3),i("ngIf",t.userForm.controls.name.touched&&t.userForm.controls.name.errors),n(2),i("ngClass",v(11,B,t.userForm.controls.address.touched&&t.userForm.controls.address.errors)),n(3),i("ngIf",t.userForm.controls.address.touched&&t.userForm.controls.address.errors),n(2),i("ngClass",v(13,B,t.userForm.controls.email.touched&&t.userForm.controls.email.errors)),n(3),i("ngIf",t.userForm.controls.email.touched&&t.userForm.controls.email.errors),n(2),i("ngClass",v(15,B,t.userForm.controls.password.touched&&t.userForm.controls.password.errors)),n(3),i("ngIf",t.userForm.controls.password.touched&&t.userForm.controls.password.errors),n(2),i("disabled",!t.userForm.valid)}}var ae=(()=>{let r=class r{onSubmit(){this.userForm.invalid||this._userService.signin(this.userForm.value).then(()=>{this._router.navigate(["/course/all"]),$.default.fire({position:"top-end",icon:"success",title:"Perfect",text:"Course has been saved successfuly :)",showConfirmButton:!1,timer:2e3})}).catch(l=>{$.default.fire({icon:"error",title:"Oops...",text:l.error.error})})}constructor(l,a){this._userService=l,this._router=a,this.user=new M,this.userForm=new j({name:new h(this.user.password,[p.required,p.minLength(2)]),address:new h(this.user.password,[p.required]),email:new h(this.user.email,[p.required]),password:new h(this.user.password,[p.required,p.minLength(2)])})}ngOnInit(){this.userForm.controls.name.setValue(history.state.name)}};r.\u0275fac=function(a){return new(a||r)(F(x),F(E))},r.\u0275cmp=N({type:r,selectors:[["app-register"]],features:[I([x])],decls:9,vars:2,consts:[[3,"formGroup","ngSubmit"],[1,"container","mt-5"],[1,"row","justify-content-center"],[1,"col-md-6"],[1,"card"],[1,"card-body"],[1,"card-title","text-center","turquoise"],["class","card",4,"ngIf"],[1,"form-group","form-floating","mb-3"],["type","text","id","name","formControlName","name","name","name",1,"form-control",3,"ngClass"],["for","name"],[4,"ngIf"],["type","text","id","address","formControlName","address","name","address",1,"form-control",3,"ngClass"],["for","address"],["type","email","id","email","formControlName","email","name","email",1,"form-control",3,"ngClass"],["type","text","id","password","formControlName","password","name","password",1,"form-control",3,"ngClass"],["for","password"],[1,"d-grid","gap-2"],["type","submit",1,"btn","btn-success",3,"disabled"],["class","alert alert-danger",4,"ngIf"],[1,"alert","alert-danger"]],template:function(a,u){a&1&&(o(0,"form",0),S("ngSubmit",function(){return u.onSubmit()}),o(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"h5",6),m(7,"Register - Hello new user"),s(),c(8,je,25,17,"ng-container",7),s()()()()()()),a&2&&(i("formGroup",u.userForm),n(8),i("ngIf",u.user))},dependencies:[T,b,D,L,q,R,G,V]});let e=r;return e})();var me=[{path:"login",component:se},{path:"register",component:ae}];var tt=(()=>{let r=class r{};r.\u0275fac=function(a){return new(a||r)},r.\u0275mod=z({type:r}),r.\u0275inj=W({providers:[r],imports:[te,Z,ne,ie,P.forChild(me),P]});let e=r;return e})();export{tt as a};