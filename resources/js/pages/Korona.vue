<template>
    
</template>

<script>
export default {
    mounted() {
        axios
        .get('https://api.kawalcorona.com/indonesia/provinsi')
        .then(response => (this.info = response))
    }
}
</script>
