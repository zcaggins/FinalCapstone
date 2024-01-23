<template>
    <div class="box">
        <img :src="item.image" />
        <h3>{{item.name}}</h3>
        <span>{{item.price}}</span>
        <br>
        <button class="btn" @click="addToCart">Add to cart</button>
    </div>
</template>

<script setup>
import { useCartStore } from '@/stores/cart';

const props = defineProps(['item']);
console.log(props.item)

const cartStore = useCartStore()

function addToCart() {
    cartStore.state.cart.push(props.item)
}
</script>

<style scoped>
</style>