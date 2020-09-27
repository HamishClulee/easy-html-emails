<template>
    <div>
        <editorbar v-if="isActive" :posX="posX" :posY="posY"></editorbar>
        <div class="editable-wrapper-container layout-col" :id="`edit-wrapper-${random}`" @click="isActive = true">
            <template><slot></slot></template>
        </div>
    </div>
</template>
<script>
import editorbar from './editorbar'
export default {
    name: 'editablewrapper',
    components: {
        editorbar,
    },
    props: {
        keyName: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            isActive: false,
            random: Math.floor((Math.random() * 99999999) + 1),
            editableElemWrapper: null,
            psuedoChild: null,
            localValue: null,
            posX: null,
            posY: null,
        }
    },
    mounted() {

        const rect = this.$el.getBoundingClientRect()
        this.posY = rect.top + 93
        this.posX = rect.left - 11

        console.log(rect)

        this.editableElemWrapper = document.getElementById(`edit-wrapper-${this.random}`)
        this.editableElemWrapper.appendChild(this.$slots.default[0].elm)
        this.psuedoChild = this.editableElemWrapper.childNodes[0]
        this.psuedoChild.setAttribute('contenteditable', true)

        // Options for the observer (which mutations to observe)
        const config = { characterData: true, attributes: false, childList: false, subtree: true }

        // Create an observer instance linked to the callback function
        const observer = new MutationObserver(this.onContentChange)

        // Start observing the target node for configured mutations
        observer.observe(this.psuedoChild, config)

        this.psuedoChild.addEventListener('blur', this.psuedoChildBlurred, false)
    },
    methods: {
        onContentChange(mutationsList) {
            this.localValue = mutationsList[0].target.textContent
        },
        psuedoChildBlurred() {

            this.isActive = false
            if (this.localValue !== null) {
                this.$parent.$emit('newvalueprovided', {
                    keyName: this.keyName,
                    val: this.localValue,
                })
            }
        },
    },
    beforeDestroy() {
        // this.observer.disconnect()
    },
}
</script>
<style lang="sass" scoped>

</style>