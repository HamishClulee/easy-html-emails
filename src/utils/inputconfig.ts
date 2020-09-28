enum ItemType {
    TXTAREA = 'textarea',
    TXT = 'text',
    COLOR = 'color',
    FONT = 'font'
}

interface Inputs {
    name: String,
    val: String,
    type: ItemType,
    isUrl: Boolean,
    title: String,
    shouldShow: Boolean,
}

interface Config {
    preheader: Inputs,
    logoHref: Inputs,
    logoSrc: Inputs,
    heroHeadingText: Inputs,
    emailBodyText: Inputs,
    ctaButtonHref: Inputs,
    ctaButtonText: Inputs,
    finalContentText: Inputs,
    afterBodyText: Inputs,
    unsubHref: Inputs,
}

export const config: Config = {
    logoHref: {
        name: 'Redirect When User Clicks Logo',
        val: '',
        type: ItemType.TXT,
        isUrl: true,
        title: 'Where to redirect the user if they click the logo.',
        shouldShow: true,
    },
    logoSrc: {
        name: 'Your Logo URL.',
        val: '/favicon.ico',
        type: ItemType.TXT,
        isUrl: true,
        title: 'A valid URL for your logo.',
        shouldShow: true,
    },
    ctaButtonHref: {
        name: 'Button Links To',
        val: '',
        isUrl: true,
        type: ItemType.TXT,
        title: 'Where the user is redirected to when they click the button',
        shouldShow: true,
    },
    ctaButtonText: {
        name: 'Button Text',
        val: 'Click me!',
        type: ItemType.TXT,
        isUrl: false,
        title: 'The text displayed on the emails button.',
        shouldShow: true,
    },
    unsubHref:    {
        name: 'Unsubscribe Link',
        val: '',
        isUrl: true,
        type: ItemType.TXT,
        title: 'Where to redirect the user if they click the unsubscribe link.',
        shouldShow: true,
    },
    heroHeadingText: {
        name: 'Main Heading Text',
        val: 'Enter A Heading...',
        type: ItemType.TXTAREA,
        isUrl: false,
        title: 'The main heading for the email',
        shouldShow: true,
    },
    emailBodyText: {
        name: 'Email Body Text',
        val: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        type: ItemType.TXTAREA,
        isUrl: false,
        title: 'The main text displayed in the email body.',
        shouldShow: true,
    },
    preheader: {
        name: 'Preheader',
        val: 'Preheader is shown as a preview in some email clients, seen by users before opening a message.',
        type: ItemType.TXTAREA,
        isUrl: false,
        title: 'Preheader is shown as a preview in some email clients, seen by users before opening a message.',
        shouldShow: true,
    },
    finalContentText: {
        name: 'Final Text in Email',
        val: 'Some more words to display after the button.',
        type: ItemType.TXTAREA,
        isUrl: false,
        title: 'Final text block in the email body.',
        shouldShow: true,
    },
    afterBodyText: {
        name: 'Final Body Text',
        val: 'I could be something small, most emails use something like; you are recieving this email because....',
        type: ItemType.TXTAREA,
        isUrl: false,
        title: 'Small text after the email body.',
        shouldShow: true,
    },
}