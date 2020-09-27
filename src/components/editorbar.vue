<template>
    <button class="button primary editor" @click="saveEdits()">Ok</button>
</template>
<script>
export default {
    name: 'editorbar',
    methods: {
        saveEdits() {
            this.$parent.$parent.$emit('closeeditor', {
                test: 'asdhfkjsadf',
            })
        },
    },
}
</script>
<style lang="sass" scoped>

</style>