<template>
    <div>Номер блока: {{ block.number }}</div>
    <div>Хэш блока: {{ block.hash }}</div>
    <div>Газа использовано: {{ block.gasUsed }}</div>
    <div>Стоимость: {{ block.baseFeePerGas }}</div>
    <div>Список транзакций: {{ block.transactions }}</div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: "block-item",
    data() {
        return {
            block: {}
        }
    },
    props: {
        blockNumberOrHash: {
            type: String,
            required: true
        }
    },
    methods: {
        ...mapActions({
            getBlock: "getBlock"
        })
    },
    async mounted() {
        this.block = await this.getBlock(this.blockNumberOrHash);
    },
    watch: {
        async blockNumberOrHash() {
            this.block = await this.getBlock(this.blockNumberOrHash);
        }
    }
}
</script>

<style>

</style>
