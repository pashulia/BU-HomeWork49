<template>
    <button @click="$router.push('/')">Главная страница</button>
    <input v-model="blockNumberOrHash" placeholder="номер блока или хэш" type="text">
    <button @click="$router.push(`/block/${this.blockNumberOrHash}`)">Открыть</button>
</template>

<script>
export default {
    name: "navbar",
    data() {
        return{
            blockNumberOrHash: ""
        }
    }
}
</script>

<style>

</style>
