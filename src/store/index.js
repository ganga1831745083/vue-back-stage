import { createStore } from 'vuex'
import user from './user'
export default createStore({
    //设置变量
    state: {
        count: 0,
        dzLisy: []
    },
    //计算
    getters: {
        tatal: function (state) {
            return state * 100
        }
    },
    //修改状态方法 触发 this.$store.commit()
    mutations: {
        setCount: function (state) {
            state.count++
        },
        setDzlist: function (state, arr) {
            state.dzList = arr
        }
    },
    //异步修改  触发 this.$store.dispatch('***')
    actions: {
        getDz: function (context) {
            let api = "/user/userinfo"
            axios.get(api).then((res) => {
                context.commit('setDzlist', res)
            })
        }
    },
    //模块导入
    modules: {
        user
    }
})