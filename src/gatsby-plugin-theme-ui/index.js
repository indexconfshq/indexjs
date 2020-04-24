export default {
    colors: {
        text: '#fff',
        background: '#07102b',
        primary: '#f8cd00',
        secondary: '#e91b58',
    },
    buttons: {
        primary: {
            color: 'text',
            bg: 'transparent',
            border: 'solid 2px #FFFFFF',
            borderRadius: '24px',
            fontSize: '1.3em',
            cursor: 'pointer',

            '&:hover': {
                background:
                    'linear-gradient(125deg, rgba(248,205,0,1) 0%, rgba(233,27,88,1) 100%)',
                color: 'background',
            },
        },
    },
    links: {
        social: {
            color: 'inherit',
            textDecoration: 'none',
        },
    },
    fonts: {
        body: 'system-ui, sans-serif',
        heading: 'system-ui, sans-serif',
        monospace: 'Menlo, monospace',
    },
    fontWeights: {
        body: 400,
        heading: 700,
        bold: 700,
    },
    lineHeights: {
        body: 1.5,
        heading: 1.125,
    },
    fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
}
