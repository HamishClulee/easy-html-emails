<template>
    <div class="editable-row-container">
        <editorbar></editorbar>
        <input type="text" v-model="localval"/>
    </div>
</template>

<script>
import editorbar from './editorbar'
export default {
    name: 'editorsinglerow',
    components: {
        editorbar,
    },
    props: {
        model: {
            type: String,
            required: true,
        },
        keyname: {
            type: String,
            required: true,
        },
    },
    data () {
        return {
            localval: null,
        }
    },
    created () {
        this.localval = this.model
    },
    watch: {
        localval: function () {
            this.$parent.$emit('modelchange', {
                keyname: this.keyname,
                value: this.localval,
            })
        },
    },

}
</script>

<style lang="sass" scoped>

</style>