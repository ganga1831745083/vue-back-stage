<template>
<!-- 通过props传递给子组件数据 -->
<!-- 绑定子组件自定义事件@sendP -->
  <p>
    
    <!-- use the router-link component for navigation. -->
    <!-- specify the link by passing the `to` prop. -->
    <!-- `<router-link>` will render an `<a>` tag with the correct `href` attribute -->
  </p>
  <!-- route outlet -->
  <!-- component matched by the route will render here -->
  <router-view name='ShopTop'></router-view>
  <!-- 遇到相同名字的会引用否者不渲染 -->
  <router-view></router-view>
  <router-view name='ShopTop'></router-view>
</template>

<script>
import Heade from './components/Toue.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'
import Users from './components/Users.vue'
import {ref,reactive,toRefs,computed,watchEffect} from 'vue'
export default {
  name: 'App',
  components: {
    Heade,
    Main,
    Footer,
    Users
  },
  setup(){
    const sum = ref(0);//相应数据
    const user = reactive({
      'age':1122,
      'username':'awj',
      reverseType:computed(()=>{
          return user.username.split('').reverse().join('')
        })
      }) //响应对象
    function sumAdd(){
      sum.value++
    }
    watchEffect(user.username,(newValue,preValue)=>{
      console.log(user.username);
      console.log(user.username改变时触发);
    })
    return {sum,sumAdd,user,...toRefs(user)}
  },
  data() {
    return {
      whh:'哇哈哈'
    }
  },
  methods:{
    getC(value){
      console.log(value);
    },
    cs(){
        
    }
  }
}
</script>
