<template>
    <main class="page-container">

        <div class="grid-container">

            <div class="html">

                <h2 class="section-header">Preview</h2>

                <htmlpreview :activeKeyName="activeKeyName"></htmlpreview>

            </div>

            <div class="inputs">
                <h2 class="section-header">Options</h2>

                <div class="all-controls layout-col">
                    <div class="item-container" v-for="(item, index) in config" :key="index">
                        <template v-if="!item.isVisual">
                            <label :for="item.name" :title="item.title">{{ item.name }}</label>
                            <input v-if="item.type === 'text'" v-model="item.val" type="text" :name="item.name" />
                            <textarea rows="8" v-else v-model="item.val" type="text" :name="item.name" />
                        </template>

                    </div>
                </div>
            </div>
        </div>


        <div class="actual-html"></div>

        <div class="instructions layout-col">

            <h2 class="section-header">Final HTML</h2>

            <div class="restrict"><code><pre>{{ html }}</pre></code></div>
        </div>


    </main>
</template>

<script>
import { build } from '../utils/html_beta'
import { config } from '../utils/inputconfig'
import htmlpreview from '../components/htmlpreview.vue'
import { EventBus, SET_ACTIVE_KEY, MAKE_NEW_BUILD, NEW_COLOR } from '../EventBus.ts'
export default {
    name: 'Beta',
    components: {
        htmlpreview,
    },
    data() {
        return {
            html: '',
            activeKeyName: '',
        }
    },
    created () {
        this.config = config
    },
    mounted () {

        EventBus.$on(MAKE_NEW_BUILD, (values) => {
            this.html = build(values)
        })

        EventBus.$on(SET_ACTIVE_KEY, (keyName = '') => { this.activeKeyName = keyName })
    },
}
</script>

<style lang="sass" scoped>
.grid-container
    margin-top: 75px
    display: grid
    grid-template-columns: 1fr 1fr 1fr
    grid-template-rows: 1fr 1fr
    gap: 1px 1px
    grid-template-areas: "html html inputs" "html html inputs"
.html
    grid-area: html
    padding: 20px
.inputs
    padding: 20px
    grid-area: inputs
    border-right: 1px solid $light-gray
.restrict
    border-radius: 5px
    overflow-y: scroll
    padding: 20px
    background: #efefef
    width: 90% !important

h1
    color: $primary
.main-header
    margin-top: 70px
.section-header
    margin-top: 0
    color: $secondary
    border-bottom: 1px solid $light-gray
    padding-bottom: 10px
    font-size: 1.8em

input, textarea
    width: 100%
    padding: 12px 20px
    margin: 8px 0
    display: inline-block
    border: 1px solid #ccc
    border-radius: 4px
    box-sizing: border-box
label
    color: $primary
    font-family: $body-font
textarea
    width: 100%
.item-container
    width: 100%
    margin: 10px
.all-controls
    flex-wrap: wrap
.img-cont
    margin: 0 auto
    width: 30%
.instructions
    border-top: 1px solid $light-gray
    padding: 20px
</style>
