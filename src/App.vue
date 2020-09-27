<template>
    <main class="app-container">

        <topnav></topnav>

        <router-view v-if="$route.path !== '/'"></router-view>

        <template v-else>
            <div class="grid-container">

                <div class="html">
                    <h2 class="section-header">Preview</h2>
                    <section v-html="html"></section>
                </div>

                <div class="inputs">
                    <h2 class="section-header">Configuration</h2>
                    <div class="all-controls layout-row">
                        <div class="item-container layout-col" v-for="(item, index) in inputnames" :key="index">
                            <label :for="item.name">{{ item.name }}</label>
                            <input v-if="item.type === 'text'" v-model="item.val" type="text" :name="item.name" />
                            <textarea rows="8" v-else v-model="item.val" type="text" :name="item.name" />
                        </div>
                    </div>
                </div>
            </div>


            <div class="actual-html" ></div>

            <div class="instructions layout-col">

                <h2 class="section-header">Final HTML</h2>

                <div class="restrict"><code><pre>{{ html }}</pre></code></div>
            </div>
        </template>


    </main>
</template>

<script>

import { build } from './utils/html'
import { config } from './utils/inputconfig'

import topnav from './components/topnav'

export default {
    name: 'App',
    components: {
        topnav,
    },
    data() {
        return {
            html: '',
            inputnames: config,
        }
    },
    created() {

        this.html = build(this.buildPayLoad)
    },
    mounted () {
        window.addEventListener('contentedit', (e) => {


            this.inputnames.forEach((element, index) => {


                if (element.keyName === e.detail.keyName) {
                    this.inputnames[index].val = e.detail.newValue
                }
                
            })

        }, false)
    },
    computed: {
        buildPayLoad () {
            let final = {}
            this.inputnames.forEach(element => {
                final[element.keyName] = element.val
            })
            return final
        },
    },
    watch: {
        inputnames: {
            handler: function() {
                this.html = build(this.buildPayLoad)
            },
            deep: true,
        },
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
    grid-template-areas: "inputs inputs html" "inputs inputs html"
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
    width: 45%
    margin: 10px
.all-controls
    flex-wrap: wrap
.img-cont
    margin: 0 auto
    width: 30%
.instructions
    border-top: 1px solid $light-gray
    padding: 20px
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
