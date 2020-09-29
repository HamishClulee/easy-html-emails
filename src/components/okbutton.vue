<template>
    <div class="layout-row editor-bar-container">
        <div class="layout-row editor-bar">
            <button class="button primary editor" @click="closeEditor()">Ok</button>

        </div>
    </div>
</template>
<script>
import { EventBus, SET_ACTIVE_KEY } from '../EventBus'
export default {
    name: 'okbutton',
    components: {

    },
    props: {
        keyName: {
            type: String,
            required: true,
        },
        activeKeyName: {
            type: String,
            required: true,
        },
    },
    data() {
        return {

        }
    },
    methods: {
        closeEditor() {
            EventBus.$emit(SET_ACTIVE_KEY, '')
        },
    },
}
</script>
<style lang="sass" scoped>
.editor-bar-container
    z-index: 120
    position: absolute
.editor-bar
    position: relative
    bottom: 50px
</style>