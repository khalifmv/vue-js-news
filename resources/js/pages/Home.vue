<template>
    <div class="container health">
        <div class="mt-5">
            <div class="container">
                <div class="card-columns">
                    <div class="card" v-for="item in posts" v-bind:key="item.key" @click="openDetail(item)">
                        <div class="card-title">
                            <img :src="item.urlToImage" alt="Card image cap" class="card-img-top">
                        </div>
                        <div class="card-body">
                            <p class="card-text"><small class="text-muted">{{ item.authorc}} - {{ item.source.name }}</small></p>
                            <h5>{{ item.title }}</h5>
                        </div>
                        <div class="card-footer">
                            <p class="card-text">{{ item.publishedAt }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Tambah Button Muat Lebih Banyak -->
        <button class="btn btn-primary btn-more" @click="loadMore">Muat Lebih Banyak</button>
    </div>
</template>

<script>
    import axios from 'axios'

    export default{
    data (){
        return {
            allPost: [],
            posts: [],
            current: 9
        }
    },
    mounted(){
        axios('https://newsapi.org/v2/top-headlines?country=id&category=health&apiKey=149ed1b9de7b447fa65c98ca9304c520',{
         crossDomain: true
        }).then( ({ data }) => {
            this.allPost = data.articles
            data.articles.map((item, key) => {
                if (item.description !== null && this.posts.length < 9) {
                    this.posts.push(item)
                }
            })
        })
    },
    methods : {
        loadMore () {
            this.post = []
            this.current += 9
            this.allPost.map((item, key) => item.description !== null && this.posts.length < this.current ? this.posts.push(item) : '')
        },
        openDetail (data) {
            this.$store.commit('setArticle', data)
            this.$router.replace({'path': '/detail'})
        }
    }
}
</script>
