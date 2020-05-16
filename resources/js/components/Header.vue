<template>
    <header class="main-header">
        <nav class="navbar">
            <div class="container" v-if="!$store.state.article.title">
                <h5>Berita masakini</h5>
            </div>
            <div v-else class="container">
                <a href="" @click="goBack()" class="navbar-brand">
                    <span class="ion-android-arrow-back back-btn">Back</span>
                </a>
            </div>
        </nav>
    </header>
</template>
<script>
export default {
    methods: {
        goBack () {
            this.$store.commit('setArticle', {})
            this.$router.replace({'path': '/'})
        }
    },
}
</script>
