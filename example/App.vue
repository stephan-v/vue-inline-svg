<template>
    <div id="app">
        <h1>{{ msg }}</h1>

        <svg-inline name="goal"></svg-inline>
    </div>
</template>

<script>
    import SvgInline from './SvgInline.vue'

    export default {
        name: 'app',

        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },

        components: {
            SvgInline
        }
    }
</script>
