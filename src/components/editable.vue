<template>
    <div class="editable-container">

        <okbutton
            :activeKeyName="activeKeyName"
            :keyName="keyName"
            class="editor-bar-container"
            :elemHeight="0"
            v-if="activeKeyName === keyName"
        ></okbutton>

        <editablewrapper :activeKeyName="activeKeyName" :keyName="keyName" :class="activeKeyName === keyName ? 'makeoutline' : 'inactive'">
            <slot></slot>
        </editablewrapper>

        <editorbar
            :activeKeyName="activeKeyName"
            :keyName="keyName"
            class="editor-bar-container"
            :elemHeight="0"
            v-if="activeKeyName === keyName"
        ></editorbar>
    </div>

</template>
<script>
import editablewrapper from '../components/editablewrapper'
import editorbar from './editorbar'
import okbutton from './okbutton'
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
        editablewrapper, editorbar, okbutton,
    },
}
</script>
<style lang="sass" scoped>
.editable-container
    position: relative
.makeoutline
    outline: 2px solid black
    outline-style: auto
.editor-bar-container
    position: absolute
    right: 0
</style>