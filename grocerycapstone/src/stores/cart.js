import { defineStore } from "pinia";
import { reactive } from 'vue'

export const useCartStore = defineStore('cart', () => {
    const state = reactive({
        cart: []
    })

    function addToCart(item) {
        state.cart.push(item)
    }

    return { state, addToCart}
})