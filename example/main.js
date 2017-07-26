import Vue from 'vue';
import App from './App.vue';
import Svg from './../src/Svg';

new Vue({
    el: '#vue',

    render: h => h(App),

    data() {
        return {
            icons: new Svg()
        };
    }
});
