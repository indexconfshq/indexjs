export default {
    colors: {
        text: '#fff',
        background: '#ffffff',
        backgroundSecondary: '#07102b',
        primary: '#f8cd00', //yellow
        secondary: '#e91b58',
        blue: '#131B3A',
        pink: '#D23B68',
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
          cursor: 'pointer',
        },
        tertiary: {
          width: '197px',
          height: '54px',
          background: '#D23B68',
          borderRadius: '117px',
          cursor: 'pointer',
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
    fontSizes: [12, 14, 16, 20, 24, 30, 32, 40, 48, 64, 72, 100, 150, 230],
}
