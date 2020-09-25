<template>
    <main class="app-container">

        <!-- start body -->
        <table border="0" cellpadding="0" cellspacing="0" width="100%">

        <!-- start logo -->
            <tr>
                <td align="center" bgcolor="white">

                    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 300px;">
                        <tr>
                        <td align="center" valign="top" style="padding: 36px 24px;">
                            <a :href="config.logoHref" target='_blank'>
                            <img :src="config.logoSrc" width="62.9%" border='0' alt='logo'/>
                            </a>
                        </td>
                        </tr>
                    </table>

                </td>
            </tr>
            <!-- end logo -->

            <!-- start hero -->
            <tr>
                <td align="center" bgcolor="white">

                    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
                        <tr>
                            <td align="left" bgcolor="#ffffff" style="padding: 36px 24px 0; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; border-top: 3px solid #009688;">
                                <h1 style="margin: 0; font-size: 32px; font-weight: 700; letter-spacing: -1px; line-height: 48px;">{{config.heroHeadingText}}</h1>
                            </td>
                        </tr>
                    </table>

                </td>
            </tr>
            <!-- end hero -->

            <!-- start copy block -->
            <tr>
                <td align="center" bgcolor="white">

                    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">

                        <!-- start copy -->
                        <tr>
                            <td align="left" bgcolor="#ffffff" style="padding: 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 24px;">
                                <p style="margin: 0;">{{config.emailBodyText}}</p>
                            </td>
                        </tr>
                        <!-- end copy -->

                        <!-- start button -->
                        <tr>
                            <td align="left" bgcolor="#ffffff">
                                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                    <tr>
                                        <td align="center" bgcolor="#ffffff" style="padding: 12px;">
                                            <table border="0" cellpadding="0" cellspacing="0">
                                                <tr>
                                                    <td align="center" bgcolor="#1976D2" style="border-radius: 6px;">
                                                        <a :href="config.ctaButtonHref" target="_blank" style="display: inline-block; padding: 16px 36px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; color: #ffffff; text-decoration: none; border-radius: 6px;">{{config.ctaButtonText}}</a>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <!-- end button -->

                        <!-- start copy -->
                        <tr>
                            <td align="left" bgcolor="#ffffff" style="padding: 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 24px; border-bottom: 3px solid #009688;">
                                <p style="margin: 0;">{{ config.finalContentText }}</p>
                            </td>
                        </tr>
                        <!-- end copy -->

                    </table>

                </td>
            </tr>
            <!-- end copy block -->

            <!-- start footer -->
            <tr>
                <td align="center" bgcolor="white" style="padding: 24px;">

                    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">

                        <!-- start permission -->
                        <tr>
                            <td align="center" bgcolor="white" style="padding: 12px 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 20px; color: #666;">
                                <p style="margin: 0;"><a>{{ config.afterBodyText }}</a></p>
                            </td>
                        </tr>
                        <!-- end permission -->

                        <!-- start unsubscribe -->
                        <tr>
                            <td align="center" bgcolor="white" style="padding: 12px 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 20px; color: #666;">
                                <p style="margin: 0;">To stop receiving these emails, you can <a :href="config.unsubHref" target="_blank">unsubscribe</a> at any time.</p>
                            </td>
                        </tr>
                        <!-- end unsubscribe -->

                    </table>

                </td>
            </tr>
            <!-- end footer -->

        </table>
        <!-- end body -->
    </main>
</template>

<script>

import { build } from '../utils/html'
import { config } from '../utils/inputconfig'

export default {
    name: 'htmlpreview',
    props: {
        config: {
            type: Object,
            required: true,
        },
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

            debugger

            this.inputnames.forEach((element, index) => {

                debugger

                if (element.keyName === e.detail.keyName) {
                    debugger
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
