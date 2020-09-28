<template>
    <div class="layout-row editor-bar-container">
        <div class="under-container layout-row" :style="{ top: '2px' }">
            <chrome-picker
                @input="setTextColour"
                id="color-picker-parent-target"
                class="color-picker"
                v-model="colors" 
            ></chrome-picker>
            <button class="button primary editor" @click="closeEditor()">Ok</button>
        </div>
    </div>
</template>
<script>
import { Chrome } from 'vue-color'
import { EventBus, SET_ACTIVE_KEY, NEW_COLOR } from '../EventBus'
export default {
    name: 'editorbar',
    components: {
        'chrome-picker': Chrome,
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
            colors: {
                hex: '#194d33',
                hsl: { h: 150, s: 0.5, l: 0.2, a: 1 },
                hsv: { h: 150, s: 0.66, v: 0.30, a: 1 },
                rgba: { r: 25, g: 77, b: 51, a: 1 },
                a: 1,
            },
        }
    },
    methods: {
        closeEditor() {
            EventBus.$emit(SET_ACTIVE_KEY, '')
        },
        setTextColour() {
            if (this.keyName === this.activeKeyName) {
                EventBus.$emit(NEW_COLOR, {
                    keyName: this.keyName,
                    color: this.colors.hex,
                })
            }
        },
    },
}
</script>
<style lang="sass" scoped>
.editor-bar-container
    z-index: 120

</style>