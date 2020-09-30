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
                                <a target='_blank'>
                                    <img :src="config['logoSrc'].val" width="62.9%" border='0' alt='logo'/>
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
                                
                                <editable :config="config" :activeKeyName="activeKeyName" keyName="heroHeadingText">
                                    <h1
                                        :style="{ margin: '0', color: config['heroHeadingText'].color, fontSize: `${config['heroHeadingText'].fontSize}px`, fontWeight: '700', letterSpacing: '-1px', lineHeight: '48px'}"
                                    >{{config['heroHeadingText'].val}}</h1>
                                </editable>
                                
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
                            <td align="left" bgcolor="#ffffff" style="padding: 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; line-height: 24px;">
                                
                                <editable :config="config" :activeKeyName="activeKeyName" keyName="emailBodyText">
                                    <p style="margin: 0;" :style="{ fontSize: `${config['emailBodyText'].fontSize}px` }">{{config['emailBodyText'].val}}</p>
                                </editable>
                                
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
                                                        <editable :config="config" :activeKeyName="activeKeyName" keyName="ctaButtonText">
                                                            <a target="_blank" :style="{ fontSize: `${config['ctaButtonText'].fontSize}px` }" style="display: inline-block; padding: 16px 36px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; color: #ffffff; text-decoration: none; border-radius: 6px;">{{config['ctaButtonText'].val}}</a>
                                                        </editable>
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
                            <td align="left" bgcolor="#ffffff" style="padding: 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; line-height: 24px; border-bottom: 3px solid #009688;">
                                <editable :config="config" :activeKeyName="activeKeyName" keyName="finalContentText">
                                    <p style="margin: 0;" :style="{ fontSize: `${config['finalContentText'].fontSize}px` }">{{ config['finalContentText'].val }}</p>
                                </editable>
                                
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
                            <td align="center" bgcolor="white" style="padding: 12px 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; line-height: 20px; color: #666;">
                                <p style="margin: 0;">
                                    <editable :config="config" :activeKeyName="activeKeyName" keyName="afterBodyText">
                                        <a :style="{ fontSize: `${config['afterBodyText'].fontSize}px` }">{{ config['afterBodyText'].val }}</a>
                                    </editable>
                                </p>
                            </td>
                        </tr>
                        <!-- end permission -->

                        <!-- start unsubscribe -->
                        <tr>
                            <td align="center" bgcolor="white" style="padding: 12px 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 20px; color: #666;">
                                <p style="margin: 0;">To stop receiving these emails, you can <a :href="config['unsubHref'].val" target="_blank">unsubscribe</a> at any time.</p>
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
// {
//         name: 'Redirect When User Clicks Logo',
//         keyName: 'logoHref',
//         val: '',
//         type: ItemType.TXT,
//         isUrl: true,
//         title: 'Where to redirect the user if they click the logo.',
//         shouldShow: true,
        
//     },
//     {
//         name: 'Your Logo URL.',
//         keyName: 'logoSrc',
//         val: '/favicon.ico',
//         type: ItemType.TXT,
//         isUrl: true,
//         title: 'A valid URL for your logo.',
//         shouldShow: true,
//     },
//     {
//         name: 'Button Links To',
//         keyName: 'ctaButtonHref',
//         val: '',
//         isUrl: true,
//         type: ItemType.TXT,
//         title: 'Where the user is redirected to when they click the button',
//         shouldShow: true,
//     },
//     {
//         name: 'Button Text',
//         keyName: 'ctaButtonText',
//         val: 'Click me!',
//         type: ItemType.TXT,
//         isUrl: false,
//         title: 'The text displayed on the emails button.',
//         shouldShow: true,
//     },
//     {
//         name: 'Unsubscribe Link',
//         keyName: 'unsubHref',
//         val: '',
//         isUrl: true,
//         type: ItemType.TXT,
//         title: 'Where to redirect the user if they click the unsubscribe link.',
//         shouldShow: true,
//     },
//     {
//         name: 'Main Heading Text',
//         keyName: 'heroHeadingText',
//         val: 'Enter A Heading...',
//         type: ItemType.TXTAREA,
//         isUrl: false,
//         title: 'The main heading for the email',
//         shouldShow: true,
//     },
//     {
//         name: 'Email Body Text',
//         keyName: 'emailBodyText',
// ',
//         type: ItemType.TXTAREA,
//         isUrl: false,
//         title: 'The main text displayed in the email body.',
//         shouldShow: true,
//     },
//     {
//         name: 'Preheader',
//         keyName: 'preheader',
//         val: 'Preheader is shown as a preview in some email clients, seen by users before opening a message.',
//         type: ItemType.TXTAREA,
//         isUrl: false,
//         title: 'Preheader is shown as a preview in some email clients, seen by users before opening a message.',
//         shouldShow: true,
//     },
//     {
//         name: 'Final Text in Email',
//         keyName: 'finalContentText',
//         val: 'Some more words to display after the button.',
//         type: ItemType.TXTAREA,
//         isUrl: false,
//         title: 'Final text block in the email body.',
//         shouldShow: true,
//     },
//     {
//         name: 'Final Body Text',
//         keyName: 'afterBodyText',
//         val: 'I could be something small, most emails use something like; you are recieving this email because....',
//         type: ItemType.TXTAREA,
//         isUrl: false,
//         title: 'Small text after the email body.',
//         shouldShow: true,
//     },
import { build, TemplateConfig } from '../utils/html_beta.ts'
import { config } from '../utils/inputconfig.ts'
import editable from './editable'
import { EventBus, CLOSE_EDITOR_BAR, NEW_VALUE_PROVIDED, NEW_COLOR, MAKE_NEW_BUILD } from '../EventBus.ts'
export default {
    name: 'htmlpreview',
    components: {
        editable,
    },
    props: {
        activeKeyName: {
            required: true,
            type: String,
        },
    },
    data() {
        return {
            config: config,
        }
    },
    created() {
        this.config = config
    },
    mounted () {

        EventBus.$on(CLOSE_EDITOR_BAR, () => { this.heroHeadingText = false })

        EventBus.$on(NEW_VALUE_PROVIDED, (event) => {
            this.config[event.keyName].val = event.val
        })

        EventBus.$on(NEW_COLOR, (event) => {
            this.config[event.keyName].color = event.color
        })

    },
    methods: {

    },
    computed: {

    },
    watch: {
        config: {
            handler: function() {
                this.$nextTick(() => {
                    EventBus.$emit(MAKE_NEW_BUILD, this.config)
                })
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
