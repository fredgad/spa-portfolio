import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex) 
 
const store = new Vuex.Store({
        state: {
            
        },
        mutations: { 
            setArray: (state) => { 

            },  
        }, 
        actions: {
            step: (ctx) => {
                let target = event.target;
                    
            },
        },
        getters: {
            get(state) {
                return state
            }
        }
});

export default store