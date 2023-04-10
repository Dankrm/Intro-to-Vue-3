const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 1, color: 'green' },
                { id: 2, color: 'blue' }
            ],
            sizes: [
                { id: 1, name: 'Grande' },
                { id: 2, name: 'Médio' },
                { id: 3, name: 'Pequeno' }
            ]
        }
    }
})
