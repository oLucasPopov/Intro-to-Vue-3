const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
        updateCart(id){
            this.cart.push(id)
        },
        removeFromCart(id){
            const arrayIndex = this.cart.indexOf(id)
            if(arrayIndex > -1) this.cart.splice(arrayIndex, 1)
        },
    }
})
