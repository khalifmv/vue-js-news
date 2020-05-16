<template>
    <div>
        <app-header></app-header>
        <app-korona></app-korona>
        <router-view></router-view>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import Header from './components/Header.vue'
    import Korona from './components/Korona.vue'
    import Footer from './components/Footer.vue'
    export default {
        components: {
            'app-header' : Header,
            'app-korona' : Korona,
            'app-footer' : Footer
        }
    }
</script>
