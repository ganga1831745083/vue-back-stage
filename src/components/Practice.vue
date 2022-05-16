<template>
    <ul>
        <li class="for">{{$store.state.count}}</li>
    </ul>
    <button @click="changeEvent">tianjia</button>
</template>
<script>
import axios from 'axios'
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
export default {
    name:'Practice',
    setup() {
        // let api="/api/web201605/js/herolist.json"
        let api="/user/userinfo"
        // fetch(api).then(res=>res.json()).then(result=>{
        //     console.log(result.result);
        // })
        axios.get(api).then((res)=>{
            console.log(res.data);
        })
        
    },
    methods:{
        changeEvent:function(){
            this.$store.commit('setCount')
        },
        ...mapMutations(['setCount'])
    },
    computed:{
        ...mapState({
            prodict:(state)=>state.count
        }) //导入数据
    }
}
</script>