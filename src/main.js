import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(ElementUI)
import { registerMicroApps, start } from 'qiankun'

const apps = [
  {
    name: 'vueApp',
    entry: '//localhost:10002', // 默认会加载这个html 解析里面的js 动态的执行 (子应用必须支持跨域) fetch
    container: '#vue',
    activeRule: '/vue',
    props: {
      a: 11,
    }
  },
  {
    name: 'reactApp',
    entry: '//localhost:20000',
    container: '#react',
    activeRule: '/react',
  }
]
registerMicroApps(apps) // 注册应用
start({
  prefetch: false, // 取消预加载
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
