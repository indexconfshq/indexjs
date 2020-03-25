module.exports = {
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
        'gatsby-plugin-theme-ui',
    ],
}
