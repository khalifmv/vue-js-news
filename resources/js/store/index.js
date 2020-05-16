window.Vue = require('vue');

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const createStore = () => {
    return new Vuex.Store({
        state: {
            article: {}
        },
        mutations: {
            setArticle (state, data) {
                state.article = data
            }
        }
    })
}

export default createStore