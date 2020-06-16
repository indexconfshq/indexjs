import React from 'react';
import { Box } from 'theme-ui';
import Photo from './Photo';
import Body from './Body';

const PersonCard = ({ person, gradientLTR = true, index = 1, presentationDay }) => (
  <Box
    sx={{
      position: 'relative',
      mt:[70,70,70, (index * 45)/1.5],
      '&:hover': {
        transform: [null, null, null, null, 'scale(1.1)'],
      }, 
      transition: 'transform 0.200s ease'
    }}
  >
    <Photo photo={person.photo} name={person.name} />
    <Body 
      person={person}
      gradientLTR={gradientLTR}
      presentationDay={presentationDay}
    />
  </Box>
)

export default PersonCard;
