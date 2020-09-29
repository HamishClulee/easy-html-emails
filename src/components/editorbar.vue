<template>
    <div class="layout-row editor-bar-container">
        <div class="under-container layout-row">

            <chrome-picker
                @input="setTextColour"
                id="color-picker-parent-target"
                class="color-picker"
                v-model="colors" 
            ></chrome-picker>

            <div class="controls-container">

                <div>
                    <h5>Select Font</h5>
                    <multiselect 
                        class="font-size"
                        v-model="test"
                        :options="testers"
                    ></multiselect>
                </div>

                <div class="font-size-container">
                    <h5>Font Size</h5>
                    <input type="range" min="12" max="46" v-model="fontSize" />
                </div>

            </div>
        </div>
    </div>
</template>
<script>
import 'vue-multiselect/dist/vue-multiselect.min.css'
import { Chrome } from 'vue-color'
import multiselect from 'vue-multiselect'
import { EventBus, NEW_COLOR, NEW_FONT_SIZE } from '../EventBus'
export default {
    name: 'editorbar',
    components: {
        'chrome-picker': Chrome,
        multiselect,
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
            fontSize: 12,
            test: '',
            testers: [
                'Open Sans Pro', 'Playfair Direct', 'Roboto', 'Monserat',
            ],
        }
    },
    methods: {
        setTextColour() {
            if (this.keyName === this.activeKeyName) {
                EventBus.$emit(NEW_COLOR, {
                    keyName: this.keyName,
                    color: this.colors.hex,
                })
            }
        },
        setFontSize() {

        },
    },
    watch: {
        fontSize: function() {
            if (this.keyName === this.activeKeyName) {
                EventBus.$emit(NEW_FONT_SIZE, {
                    keyName: this.keyName,
                    fontSize: this.fontSize,
                })
            }
        },
    },
}
</script>
<style lang="sass" scoped>
h5
    font-family: $body-font
    font-size: 1.2em
    margin-top: 10px
.editor-bar-container
    background: white
    width: 552px
    z-index: 120
    box-shadow: 0 0 2px rgba(0,0,0,.3), 0 4px 8px rgba(0,0,0,.3)
    border: 1px solid $light-gray
.controls-container
    width: 301px
    border-left: 1px solid $light-gray
    input
        width: 100%
    padding: 10px
.color-picker
    box-shadow: none !important
</style>