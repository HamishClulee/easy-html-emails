<template>
    <div class="layout-row editor-bar-container" :style="{ top: `${posY}px`, left: `${posX}px` }">
        <button class="button primary editor" @click="saveEdits()">Ok</button>
        <button class="button primary editor" @click="saveEdits()">Ok</button>
    </div>
</template>
<script>
export default {
    name: 'editorbar',
    props: {
        posX: {
            type: Number,
            required: true,
        },
        posY: {
            type: Number,
            required: true,
        },
    },
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
.editor-bar-container
    position: absolute
</style>