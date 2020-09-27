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
                            <a :href="values.logoHref" target='_blank'>
                            <img :src="values.logoSrc" width="62.9%" border='0' alt='logo'/>
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
                                
                                <editablewrapper keyName="heroHeadingText">
                                
                                    <h1
                                        style="margin: 0; font-size: 32px; font-weight: 700; letter-spacing: -1px; line-height: 48px;"
                                    >{{values.heroHeadingText}}</h1>

                                </editablewrapper>
                                
                                <!-- <h1 style="margin: 0; font-size: 32px; font-weight: 700; letter-spacing: -1px; line-height: 48px;" @click="heroHeadingText = true" v-if="!heroHeadingText">{{values.heroHeadingText}}</h1>
                                <editablesinglerow v-else :model="values.heroHeadingText" keyname="heroHeadingText"></editablesinglerow> -->
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
                                <editablewrapper keyName="emailBodyText">
                                    <p style="margin: 0;">{{values.emailBodyText}}</p>
                                </editablewrapper>
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
                                                        <editablewrapper keyName="ctaButtonText">
                                                            <a :href="values.ctaButtonHref" target="_blank" style="display: inline-block; padding: 16px 36px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; color: #ffffff; text-decoration: none; border-radius: 6px;">{{values.ctaButtonText}}</a>
                                                        </editablewrapper>
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
                                <p style="margin: 0;">{{ values.finalContentText }}</p>
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
                                <p style="margin: 0;"><a>{{ values.afterBodyText }}</a></p>
                            </td>
                        </tr>
                        <!-- end permission -->

                        <!-- start unsubscribe -->
                        <tr>
                            <td align="center" bgcolor="white" style="padding: 12px 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 20px; color: #666;">
                                <p style="margin: 0;">To stop receiving these emails, you can <a :href="values.unsubHref" target="_blank">unsubscribe</a> at any time.</p>
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
import { build, TemplateConfig } from '../utils/html'
// import editablesinglerow from '../components/editablesinglerow'
import editablewrapper from '../components/editablewrapper'
export default {
    name: 'htmlpreview',
    components: {
        // editablesinglerow,
        editablewrapper,
    },
    data() {
        return {
            values: {
                preheader: 'Preheader is shown as a preview in some email clients, seen by users before opening a message.',
                logoHref: '',
                logoSrc: '/favicon.ico',
                heroHeadingText: 'Enter A Heading...',
                emailBodyText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
                ctaButtonHref: '',
                ctaButtonText: 'Click me!',
                finalContentText: 'I could be something small, most emails use something like; you are recieving this email because....',
                afterBodyText: 'Some more words to display after the button.',
                unsubHref: '',
            },
        }
    },
    created() {

    },
    mounted () {

        this.$on('closeeditor', () => { this.heroHeadingText = false })
        this.$on('modelchange', (event) => { 
            this.values[event.keyname] = event.value
        })
        this.$on('newvalueprovided', (e) => {
            this.values[e.keyName] = e.val
        })

    },
    methods: {

    },
    computed: {

    },
    watch: {
        values: {
            handler: function() {
                this.$nextTick(() => {
                    this.$parent.$emit('makenewbuild', this.values)
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
