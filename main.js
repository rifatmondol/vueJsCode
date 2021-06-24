const vueApp = Vue.createApp({
    data() {
        return {
            course: "VueJs",
            classes: 0,
            courseShow: true,
            counter: 0
        }
    },

    methods: {
        changeTitle() {
            this.course = "Laravel"
        },
        show() {
            this.courseShow = !this.courseShow
        }
    },

    mounted() {
        setInterval(() => {
            this.counter++
        }, 1000)
    }

})

vueApp.mount("#app")