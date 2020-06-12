import React from 'react';
import { Box } from 'theme-ui';
import Footer from './Footer';
import Info from './Info';

const Body = ({ gradientLTR, person, presentationDay }) => (
  <Box
    sx={{
      position: 'relative',
      background: gradientLTR ? 'linear-gradient(77.25deg, #D23B68 18.45%, #F0D440 104.3%)' : 'linear-gradient(-77.25deg, #D23B68 18.45%, #F0D440 104.3%)',
      height: 387,
      width: ['100%',305,305,305],
      p: '10px',
      borderRadius: '4px',
      clipPath: 'polygon(100% 0%, 100% 78%, 81% 100%, 0 100%, 0 0)'
    }}
  >
    <Box 
      sx={{ 
        background: 'white',
        clipPath: 'polygon(100% 0%, 100% 78%, 81% 100%, 0 100%, 0 0)',
        px: 15,
        py: 1,
        height: '100%',
      }}
    >
      <Box
        sx={{
          display:'flex',
          justifyContent: 'flex-start',
          alignItems: 'flex-start', 
          alignContent: 'flex-end',
          mt: '125px',
        }}
      >
        <Info person={person} />
      </Box>
      <Footer person={person} presentationDay={presentationDay} />
    </Box>
  </Box>
);

export default Body;
