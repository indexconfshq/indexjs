export default {
    colors: {
        text: '#fff',
        background: '#ffffff',
        backgroundSecondary: '#07102b',
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
        secondary: {
          width: '197px',
          height: '54px',
          background: '#00B8CC',
          borderRadius: '117px',
        },
        tertiary: {
          width: '197px',
          height: '54px',
          background: '#D23B68',
          borderRadius: '117px',
        }
    },
    links: {
        social: {
            color: 'inherit',
            textDecoration: 'none',
        },
    },
    fonts: {
        heading: "chronicnormal, sans-serif",
        subHeading: "objectivebold, sans-serif",
        text: "objectiveregular, sans-serif",
    },
    fontWeights: {
        body: 400,
        heading: 700,
        bold: 700,
    },
    lineHeights: {
        body: 1.5,
        heading: 1.125,
        bigDate: {
          large: '157px',
          medium: '124px',
          small: '83px'
        },
    },
    fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72, 100, 150, 230],
}
