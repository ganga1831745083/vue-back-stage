<template>
    <h1>username:{{username}}</h1>
    <h1>age:{{age}}</h1>
    <h1>description:{{description}}</h1>
</template>

<script>
import {ref,inject,provide,onBeforeMount,onMounted,onUnmounted} from 'vue'
export default {
    setup(props,content) {
        console.log(props);
        console.log(content);
        const description = ref(props.username+props.age)
        return {description}
    },
    props:['username','age']
}
</script>
