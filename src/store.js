import{ createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            name : 'kim',
            fullName : 'CHOI YIROP',
        }
    },
    mutations: {
        이름변경(state){
            state.name = 'choi'
        }
    }
})

export default store;