<template>
    <div class="editable-container">

        <okbutton
            :activeKeyName="activeKeyName"
            :keyName="keyName"
            class="ok-bar-container"
            :elemHeight="0"
            v-if="activeKeyName === keyName"
        ></okbutton>

        <editablewrapper :activeKeyName="activeKeyName" :keyName="keyName" :class="activeKeyName === keyName ? 'makeoutline' : 'inactive'">
            <slot></slot>
        </editablewrapper>

        <editorbar
            :config="config"
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
        config: {
            required: false,
            type: Object,
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
    padding: 10px
    outline: 2px solid $light-gray
    outline-style: auto
.editor-bar-container
    position: absolute
    right: -2px
    left: 0
.ok-bar-container
    height: 0
    position: absolute
    left: 0
</style>