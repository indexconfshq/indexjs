import React from 'react';
import Img from 'gatsby-image';
import { Box } from 'theme-ui';

const Photo = ({ photo, name }) => (

  <Box
    sx={{
      display: 'flex',
      justifyContent: 'flex-end',
    }}
  >
    <Box sx={{
      border: '10px solid #FFFFFF',
      borderRadius: '10px 0px 10px 92px',
      background: 'white',
      width: 174,
      height: 174,
      position: 'absolute',
      top: -45,
      zIndex: 1,
      right: 25,
      overflow: 'hidden',
      boxShadow: '0px -16px 43px -16px rgba(0,0,0,0.75)'
    }}>
      <Img fixed={photo.childImageSharp.fixed} alt={name} style={{ marginLeft: 'auto', marginRight: 'auto'}} />
    </Box>
  </Box>
);

export default Photo;