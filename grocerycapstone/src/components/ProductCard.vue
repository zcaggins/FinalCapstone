<template>

    <div>
        <h1>Hello!</h1>
    </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent, onMounted } from 'vue';
import { useCartStore } from '../stores/cart'
import {storeToRefs} from 'pinia'


interface Product {
    imageSrc: string;
    imageAlt: string;
    href: string;
    name: string;
    color: string;
    currency: string;
    price: string;
    id: number;
}

const props = defineProps<{
    product: Product;
}>();

const cartStore = useCartStore()
const {cart} = storeToRefs(cartStore)
onMounted(()=>{
    cartStore.loadCartInstance()
})

function addToCart(){
cartStore.addToCart({id: props.product.id, qty: 1})
console.log("cart", cart.value)
}

</script>