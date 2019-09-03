import Vue from 'vue';
import Vuex from 'vuex';
import { totalmem } from 'os';
//使用vuex
Vue.use(Vuex);

//创建Vuex实例
const store = new Vuex.Store({
    state: {
        counters:[]
    },
    mutations: {
        add(state) {
            state.count += 1;
        },
        reduce(state) {
            state.count -= 1;
        },
        updateCounters(state,data){
            let counterNum = state.counters;
            counterNum[data.index-1] = data.value;
            state.counts=[];
            for(let i = 0;i < counterNum.length;i++){
                state.counts.push(counterNum[i]);
            }
        },
        updateNum(state,num){
            while (state.counters.length < num) {
                state.counters.push(state.counters.length + 1)
            }
            while (state.counters.length > num) {
                state.counters.pop()
            }
        }
        
    },
    getters: {
        getCounters: state => (index) => {
            return state.counters[index - 1];
        },
        getSum:state=>{
            let sum = 0;
            for(let i = 0; i< state.counters.length;i++){
                sum+=state.counters[i];
            }
            return sum;
        }
    }
})

//导出store
export default store;


