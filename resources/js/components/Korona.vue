<template>
    <div class="container">
        <!-- <div class="col-md-3">
            <div class="card">
                <div class="card-title">
                    <h1>Positif</h1>
                </div>
                <div class="card-body">
                    <h2>data</h2>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card">
                <div class="card-title">
                    <h1>Sembuh</h1>
                </div>
                <div class="card-body">
                    <h2>data</h2>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card">
                <div class="card-title">
                    <h1>Meninggal</h1>
                </div>
                <div class="card-body">
                    <h2>{{meninggal}}</h2>
                </div>
            </div>
        </div> -->
    </div>
</template>
<script>
import axios from 'axios'

export default {
    data (){
        return {
            meninggal: []
        }
    },
    mounted(){
    axios
      .get('https://api.kawalcorona.com/indonesia')
      .then(response => (this.meninggal = response))
  }
}
</script>
