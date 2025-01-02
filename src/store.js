import{ createStore } from 'vuex'
import axios from 'axios'
const store = createStore({
    state() {
        return {
            name : 'kim',
            fullName : 'CHOI YIROP',
            age : 20,
            likes : [15,20,25],
            likeYn : [false, false, false],
            more : {},
        }
    },
    mutations: {
        setMore(state, data){
            state.more = data
        },
        이름변경(state){
            state.name = 'choi'
        },
        나이증가(state){
            state.age++
        },
        좋아요(state){
            if(state.likeYn){
                state.likes--;
            }else{
                state.likes++;
            }    
            state.likeYn = !state.likeYn;
        },
        
    },
    actions:{
        getData(){
            axios.get('https://codingapple1.github.io/vue/more0.json')
            .then((a)=>{
                // console.log(a.data);
                this.commit('setMore',a.data)
            })
        },
    },
})

export default store;