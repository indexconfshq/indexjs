import React from 'react';
import Img from 'gatsby-image';
import { Box } from 'theme-ui';

const Photo = ({ photo, name, insideModal }) => (

  <Box
    sx={{
      display: 'flex',
      justifyContent: insideModal ? 'flex-start' :'flex-end',
    }}
  >
    <Box sx={{
      border: insideModal ? 0 : '10px solid #FFFFFF',
      borderRadius: insideModal ? 0 : '10px 0px 10px 92px',
      background: 'white',
      width: insideModal ? '125px' : '154px',
      height: insideModal ? '125px' : '154px',
      position: insideModal ? 'relative' : 'absolute',
      top: insideModal ? 0 : -45,
      zIndex: 1,
      right: insideModal ? 0 : 25,
      overflow: 'hidden',
      boxShadow: insideModal ? 0 : '0px -16px 43px -16px rgba(0,0,0,0.75)'
    }}>
      <Img 
        fixed={photo.childImageSharp.fixed} 
        alt={name} 
        style={{ 
          marginLeft: 'auto', 
          marginRight: 'auto',
          width: insideModal ? '125px' : '154px',
          height:insideModal ? '125px' : '154px',
        }} 
      />
    </Box>
  </Box>
);

export default Photo;