<template>
    <div>
        <router-link to="/">首页</router-link>
        <p>Main</p>
    </div>
</template>
<script>
export default {
    name:'Main',
    data() {
        return {
            
        }
    },
    methods: {
        goPage(){
            this.$router.push("/")
        }
    },
}
</script>