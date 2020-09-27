<template>
    <main class="page-container">

        <div class="grid-container">

            <div class="html">

                <h2 class="section-header">Preview</h2>

                <htmlpreview></htmlpreview>

            </div>

            <div class="inputs">
                <h2 class="section-header">Options</h2>
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
import { build } from '../utils/html'
import { config } from '../utils/inputconfig'
import htmlpreview from '../components/htmlpreview.vue'

export default {
    name: 'Beta',
    components: {
        htmlpreview,
    },
    data() {
        return {
            html: '',
        }
    },
    mounted () {
        this.$on('makenewbuild', (values) => {
            this.html = build(values)
        })
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
    grid-template-areas: "inputs html html" "inputs html html"
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
</style>
