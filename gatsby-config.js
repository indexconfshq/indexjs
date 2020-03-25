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
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-theme-ui',
        'gatsby-plugin-transition-link',
    ],
}
