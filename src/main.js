// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import routes from './routes'
import  axios from 'axios'

//全局配置
axios.defaults.baseURL= 'https://vueblog-7b388.firebaseio.com'
/*axios.defaults.headers.common['Authorization'] = 'Token'
axios.defaults.headers.post['Content-Type'] = 'application/urlencode'
axios.defaults.headers.get['Accepts'] = 'application/json'*/

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(VueRouter)


/*写在main.js中的指令或者过滤器都是全局的，每一个组件都可以使用*/
//自定义指令
Vue.directive('rainbow',{
  bind(el,binding,vnode){
    el.style.color = "#"+Math.random().toString(16).slice(2,8);
  }
})
Vue.directive('theme',{
  bind(el,binding,vnode){
    if(binding.value == 'wide'){
      el.style.maxWidth = '100%';
    }else if(binding.value == 'narrow'){
      el.style.maxWidth = '50%';
    }

    if(binding.arg == 'column'){
      el.style.background ="#6677cc";
      el.style.padding ="20px";
    }
  }
})

//自定义过滤器
Vue.filter("to-uppercase",function(value){
  return value.toUpperCase();
})

Vue.filter("snippet",function(value){
  return value.slice(0,100)+"...";
})

const router = new VueRouter({
  routes:routes,
  mode:"history"
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router:router
})
