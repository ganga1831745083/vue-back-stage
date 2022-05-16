<template>
    <Toue />
        <router-view></router-view>
    <Footer/>
</template>
<script>
import Toue from './Toue.vue'
import Footer from './Footer.vue'
export default {
    name:'Main',
    data() {
        return {
            
        }
    },
    components:{
        Toue,
        Footer
    },
    methods: {
        
    },
}
</script>