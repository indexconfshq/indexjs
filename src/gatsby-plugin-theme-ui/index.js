export default {
    breakpoints: ['360px', '576px', '768px', '992px', '1200px', '1400px'],
    colors: {
        text: '#fff',
        background: '#ffffff',
        backgroundSecondary: '#07102b',
        primary: '#f8cd00', //yellow
        secondary: '#e91b58',
        blue: '#131B3A',
        pink: '#D23B68',
        lightestGray: '#FAFAFA',
        lightestGray2: '#F5F5F5',
        paragraph: '#000'
    },
    buttons: {
        primary: {
          height: '54px',
          background: 'linear-gradient(30.03deg, #D23B68 18.45%, #F0D440 104.3%)',
          borderRadius: '27px',
          cursor: 'pointer',
        },
        secondary: {
          width: '197px',
          height: '54px',
          background: '#00B8CC',
          borderRadius: '117px',
          cursor: 'pointer',
          '&:hover': {
            background: '#008291',
          },
          transition: 'background 0.200s ease'
        },
        tertiary: {
          width: '197px',
          height: '54px',
          background: '#D23B68',
          borderRadius: '117px',
          cursor: 'pointer',
          color: 'white',
          fontFamily: 'subHeading',
          fontSize: 20, 
          lineHeight: '21px',
          '&:hover': {
            background: '#a32e51',
          },
          transition: 'background 0.200s ease'
        },
        quaternary: {
          fontFamily: 'text',
          fontSize: '13px',
          lineHeight: '26px',
          letterSpacing: '0.05em',
          color: 'rgba(19, 27, 58, 0.7)',
          border: 0,
          p: 0,
          background: 0,
          cursor: 'pointer',
          '&:hover': {
            color: '#D23B68'
          }
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
        body: '30px',
        cardRole: '23px',
        heading: 1.125,
        bigDate: {
          large: '157px',
          medium: '121px',
          small: '83px'
        },
    },
    fontSizes: [12, 14, 16, 20, 24, 30, 32, 40, 48, 64, 72, 100, 150, 230],
}
