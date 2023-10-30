<script setup>
    import { ref } from 'vue'
    import imgUrl from '/src/chickn.png'

    const count = ref(0)

    const awesome = ref(false)

</script>

<template>
    <button @click="awesome = !awesome">Toggle Chicken Visiblity</button>

    <h1 v-if="awesome"><img :src="imgUrl" /></h1>
    <h1 v-else></h1>
</template>