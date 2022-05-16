const user = {
    state: () => ({
        username: 'awj',
        age: 30
    }),
    getters: {
        descrption: function (state, getters, rootState) {
            return state.username + '的年龄是' + state.age + '岁'
        }
    },
    mutations: {
        setUsername: function (state) {
            state.username = 'awj2'
        },
        setAge: function (state) {
            state.age = 40
        }
    },
    actions: {
        asyncSetage: function (context) {
            setTimeout(() => {
                context.commit('setAge')
            }, 300)
        }
    },
}
export default user