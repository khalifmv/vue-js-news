/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import Vue from 'vue'
import router from './router.js'
import App from './App.vue'
import axios from 'axios'
import store from './store/index.js'


// Vue.component('example-component', require('./components/ExampleComponent.vue').default);


const vue = new Vue({
    el: '#kha',
    router,
    store,
    components: {
        App
    },
    
});


// export default{
//     data (){
//         return {
//             allPost: [],
//             posts: [],
//         }
//     },
//     mounted(){
//         axios('https://newsapi.org/v2/top-headlines?country=id&category=health&apiKey=149ed1b9de7b447fa65c98ca9304c520',{
//          crossDomain: true
//         }).then( ({ data }) => {
//             this.allPost = data.articles
//             data.articles.map((item, key) => {
//                 if (item.description !== null && this.posts.length < 9) {
//                     this.posts.push(item)
//                 }
//             })
//         })
//     }
// }
