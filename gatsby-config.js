require('dotenv').config()

module.exports = {
    siteMetadata: {
        title: 'indexJS',
        description: 'The first JS dedicated conference in Portugal',
        url: 'https://www.doe.com', // No trailing slash allowed!
        image: '/images/logo.svg', // Path to your image you placed in the 'static' folder
        twitterUsername: '@twitter',
    },
    plugins: [
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `indexjs`,
                short_name: `indexjs`,
                start_url: `/`,
                background_color: `#07102b`,
                theme_color: `#f8cd00`,
                display: `standalone`,
                icon: `src/images/logo.svg`,
            },
        },
        {
            resolve: 'gatsby-plugin-firebase',
            options: {
                credentials: {
                    apiKey: process.env.FIREBASE_API_KEY,
                    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
                    databaseURL: process.env.FIREBASE_DATABASE_URL,
                    projectId: process.env.FIREBASE_PROJECT_ID,
                    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
                    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
                    appId: process.env.FIREBASE_APP_ID,
                },
            },
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
            },
        },
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-theme-ui',
        'gatsby-plugin-transition-link',
    ],
}
