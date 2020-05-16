<template>
    <div class="mt-5">
        <div class="container">
            <div class="d-flex justify-content-center">
                <div class="col-8">
                    <img :src="article.urlToImage" alt="Card image cap" class="img-fluid" style="border-radius: 30px">
                    <p class="card-text"><small class="text-muted">{{ article.publishedAt }} - {{article.author}} - {{article.source.name}}</small></p>
                    <h3 class="card-title"><b>{{article.title}}</b></h3>
                    <p class="card-text">{{ article.content }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        article () { return this.$store.state.article}
    }
}

</script>
