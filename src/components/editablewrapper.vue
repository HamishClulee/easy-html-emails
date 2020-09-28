<template>
    <div class="editable-wrapper-container layout-col" :id="`edit-wrapper-${random}`">
        <template v-show="keyName === activeKeyName"><slot></slot></template>
    </div>
</template>

<script>
import { EventBus, SET_ACTIVE_KEY, NEW_VALUE_PROVIDED, NEW_COLOR } from '../EventBus.ts'
export default {
    name: 'editablewrapper',
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
            random: Math.floor((Math.random() * 99999999) + 1),
            editableElemWrapper: null,
            psuedoChild: null,
            localValue: null,
        }
    },
    mounted() {

        this.editableElemWrapper = document.getElementById(`edit-wrapper-${this.random}`)

        this.psuedoChild = this.$slots.default[0].elm

        this.psuedoChild.setAttribute('contenteditable', true)
        this.psuedoChild.style.zIndex = '100'

        EventBus.$on(NEW_COLOR, details => {

            if (details.keyName === this.keyName) {

                this.psuedoChild.style.color = details.color 
            }
        })

        // Options for the observer (which mutations to observe)
        const config = { characterData: true, attributes: false, childList: false, subtree: true }

        // Create an observer instance linked to the callback function
        this.observer = new MutationObserver(this.onContentChange)

        // Start observing the target node for configured mutations
        this.observer.observe(this.psuedoChild, config)

        this.psuedoChild.addEventListener('blur', this.psuedoChildBlurred, false)
        this.psuedoChild.addEventListener('click', this.setActive, false)
        // this.editableElemWrapper.addEventListener('click', this.setActive, false)
    },
    methods: {
        onContentChange(mutationsList) {
            this.localValue = mutationsList[0].target.textContent
        },
        psuedoChildBlurred(e) {

            if (this.localValue !== null) {
                EventBus.$emit(NEW_VALUE_PROVIDED, {
                    keyName: this.keyName,
                    val: this.localValue,
                })
            }
        },
        setActive(e) {
            if (this.keyName !== this.activeKeyName) {
                EventBus.$emit(SET_ACTIVE_KEY, this.keyName)
            }
        },
    },
    beforeDestroy() {
        this.observer.disconnect()
    },
}
</script>
<style lang="sass" scoped>

</style>