(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{WWcg:function(t,e,o){"use strict";o.r(e),o.d(e,"NewModule",(function(){return h}));var r=o("ofXK"),n=o("tyNb"),i=o("CxCf"),s=o("Yo9x"),u=o("3Pt+");function a(){return t=>t.value?{isPastDate:new Date(t.value)<=new Date}:null}var b=o("fXoL"),m=o("l7P3");function c(t,e){1&t&&(b.Kb(0,"button",15),b.ec(1,"Add purchase"),b.Jb())}const d=function(t){return{error:t}},l=[{path:"",component:(()=>{class t{constructor(t){this.store=t,this.canAddPurchase=!1,this.isFormSubmitted=!1,this.dateField=new u.b,this.ammountField=new u.b,this.codeField=new u.b}get formNewControls(){return this.form.controls}ngOnInit(){this.store.select(i.a).subscribe(t=>this.canAddPurchase=t),this.buildFormValidators(),this.buildFormEvents(),this.form=this.buildForm()}ngAfterViewInit(){}toggleCanPurchase(){this.store.dispatch(s.e())}buildForm(){return new u.d({date:this.dateField,ammount:this.ammountField,code:this.codeField})}buildFormEvents(){this.ammountField.valueChanges.subscribe(t=>{console.log("value ammount:",t)})}buildFormValidators(){this.ammountField.setValidators([u.j.required,u.j.minLength(.1)]),this.dateField.setValidators([u.j.required,a]),this.codeField.setValidators(u.j.required)}submitNewPurchase(){console.log("submited"),this.isFormSubmitted=!0,this.form.invalid||console.log("form values can be submitted")}}return t.\u0275fac=function(e){return new(e||t)(b.Hb(m.h))},t.\u0275cmp=b.Bb({type:t,selectors:[["app-new-purchase"]],decls:21,vars:5,consts:[[1,"container"],[1,"btn","btn-secondary",3,"click"],["class","btn btn-primary",4,"ngIf"],[3,"formGroup","submit"],["formNew",""],[1,"form-row"],[1,"form-group","col-md-4",3,"ngClass"],["for","ammount"],["type","number","id","inputAmmount","formControlName","ammount",1,"form-control"],[1,"form-group","col-md-4"],["for","inputCode"],["type","number","id","inputCode","formControlName","code",1,"form-control"],["for","inputDate"],["type","date","id","inputDate","formControlName","date",1,"form-control"],["type","submit",1,"btn","btn-primary"],[1,"btn","btn-primary"]],template:function(t,e){1&t&&(b.Kb(0,"div",0),b.Kb(1,"button",1),b.Qb("click",(function(){return e.toggleCanPurchase()})),b.ec(2," Toggle"),b.Jb(),b.cc(3,c,2,0,"button",2),b.Kb(4,"form",3,4),b.Qb("submit",(function(){return e.submitNewPurchase()})),b.Kb(6,"div",5),b.Kb(7,"div",6),b.Kb(8,"label",7),b.ec(9,"Ammount"),b.Jb(),b.Ib(10,"input",8),b.Jb(),b.Kb(11,"div",9),b.Kb(12,"label",10),b.ec(13,"Code"),b.Jb(),b.Ib(14,"input",11),b.Jb(),b.Kb(15,"div",9),b.Kb(16,"label",12),b.ec(17,"Date"),b.Jb(),b.Ib(18,"input",13),b.Jb(),b.Jb(),b.Kb(19,"button",14),b.ec(20,"Save"),b.Jb(),b.Jb(),b.Jb()),2&t&&(b.xb(3),b.Ub("ngIf",e.canAddPurchase),b.xb(1),b.Ub("formGroup",e.form),b.xb(3),b.Ub("ngClass",b.Wb(3,d,(e.isFormSubmitted||e.formNewControls.ammount.touched)&&e.formNewControls.ammount.errors)))},directives:[r.l,u.k,u.g,u.e,r.j,u.h,u.a,u.f,u.c],styles:[""]}),t})()}];let f=(()=>{class t{}return t.\u0275mod=b.Fb({type:t}),t.\u0275inj=b.Eb({factory:function(e){return new(e||t)},imports:[[n.c.forChild(l)],n.c]}),t})(),h=(()=>{class t{}return t.\u0275mod=b.Fb({type:t}),t.\u0275inj=b.Eb({factory:function(e){return new(e||t)},imports:[[r.c,u.i,f]]}),t})()}}]);