<template>
    <div class="editable-container">

        <editablewrapper :activeKeyName="activeKeyName" keyName="heroHeadingText" :class="activeKeyName === keyName ? 'makeoutline' : 'inactive'">
            <slot></slot>
        </editablewrapper>

        <editorbar
            class="editor-bar-container"
            :elemHeight="0"
            v-if="activeKeyName === keyName"
        ></editorbar>
    </div>

</template>
<script>
import editablewrapper from '../components/editablewrapper'
import editorbar from './editorbar'
export default {
    name: 'editable',
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
    components: {
        editablewrapper, editorbar,
    },
}
</script>
<style lang="sass" scoped>
.makeoutline
    outline: 2px solid black
    outline-style: auto
.editable-container
.editor-bar-container
    position: absolute
</style>