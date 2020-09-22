<template>
    <main class="app-container">


        <div class="grid-container">

            <div class="html" v-html="html"></div>

            <div class="inputs">
                <div class="all-controls layout-row layout-center-all">
                    <div class="item-container layout-center-all layout-col" v-for="(item, index) in inputnames" :key="index">
                        <label :for="item.name">{{ item.name }}</label>
                        <input v-if="item.type === 'text'" v-model="item.val" type="text" :name="item.name" />
                        <textarea v-else v-model="item.val" type="text" :name="item.name" />
                    </div>
                </div>
            </div>
        </div>


        <div class="actual-html" ></div>

        <div class="instructions layout-col layout-center-all">

            <div class="page-container restrict"><code><pre>{{ html }}</pre></code></div>
        </div>
    </main>
</template>

<script>
import { build } from './templates/default.ts'
export default {
    name: 'App',
    data() {
        return {
            html: '',
            inputnames: [
                {
                    name: 'preheader',
                    val: '',
                    type: 'textarea',
                },
                {
                    name: 'logoHref',
                    val: '',
                    type: 'text',
                    isUrl: true,
                },
                {
                    name: 'logoSrc',
                    val: '',
                    type: 'text',
                    isUrl: true,
                },
                {
                    name: 'heroHeadingText',
                    val: '',
                    allowsHtml: true,
                    type: 'textarea',
                },
                {
                    name: 'emailBodyText',
                    val: '',
                    allowsHtml: true,
                    type: 'textarea',
                },
                {
                    name: 'ctaButtonHref',
                    val: '',
                    isUrl: true,
                    type: 'text',
                },
                {
                    name: 'ctaButtonText',
                    val: '',
                    allowsHtml: true,
                    type: 'text',
                },
                {
                    name: 'finalContentText',
                    val: '',
                    allowsHtml: true,
                    type: 'textarea',
                },
                {
                    name: 'afterBodyText',
                    val: '',
                    allowsHtml: true,
                    type: 'textarea',
                },
                {
                    name: 'unsubHref',
                    val: '',
                    isUrl: true,
                    type: 'text',
                },
            ],
        }
    },
    created() {
        this.html = build(this.buildPayLoad)
        debugger
    },
    computed: {
        buildPayLoad () {
            let final = {}
            this.inputnames.forEach(element => {
                final[element.name] = element.val
            })
            return final
        },
    },
    watch: {
        inputnames: {
            handler: function() {
                debugger
                this.html = build(this.buildPayLoad)
            },
            deep: true,
        },
    },
}
</script>

<style lang="sass" scoped>
.grid-container
  display: grid
  grid-template-columns: 1fr 1fr 1fr
  grid-template-rows: 1fr 1fr
  gap: 1px 1px
  grid-template-areas: "inputs inputs html" "inputs inputs html"
.html
    grid-area: html
.inputs
    grid-area: inputs
.restrict
    border: 3px solid #adadad
    border-radius: 5px
    overflow-y: scroll
    padding: 20px
    background: #efefef
    width: 90% !important
    margin: 20px
input, textarea
    width: 100%
    padding: 12px 20px
    margin: 8px 0
    display: inline-block
    border: 1px solid #ccc
    border-radius: 4px
    box-sizing: border-box
label
    color: $secondary
textarea
    width: 100%
.item-container
    width: 700px
    margin: 10px
.all-controls
    flex-wrap: wrap
.img-cont
    margin: 0 auto
    width: 30%
.instructions
    border-top: 3px solid $tertiary
h1
    color: $primary
</style>
