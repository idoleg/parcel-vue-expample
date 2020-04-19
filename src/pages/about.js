import Vue from '../main';


new Vue({
    el: '#app',
    render(h) {
        return h('strong', {}, "It's about page")
    }
})