const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                {id: 2234, color: 'green'},
                {id: 2235, color: 'blue'},
            ],
            sizes: [
                {id: 157, description: 'Small'},
                {id: 158, description: 'Medium'},
                {id: 159, description: 'Large'},
            ]
        }
    }
})
