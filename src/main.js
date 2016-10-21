/*import Vue from 'vue'
import App from './App'*/
var Vue=require("vue");
var App=require("./App");
var VueRouter=require("vue-router");
var one=require("./one");
var two=require("./two");

Vue.use(VueRouter);
var router=new VueRouter();
console.log(router);

router.map({
	"/one111":{
		component:one
	},"/two111":{
		component:two
	}
})
router.start(App,"#apps");
/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})
