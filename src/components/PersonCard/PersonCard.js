import React from 'react';
import { Box } from 'theme-ui';
import Photo from './Photo';
import Body from './Body';

const PersonCard = ({ person, gradientLTR = true, index }) => (
  <Box
    sx={{
      position: 'relative',
      mt:[70,70,70, (index * 45)/1.2] ,
    }}
  >
    <Photo photo={person.photo} name={person.name} />
    <Body 
      name={person.name} 
      role={person.role} 
      github={person.github} 
      twitter={person.twitter} 
      topic={person.topic}
      topicURL={person.topicURL}
      gradientLTR={gradientLTR}
    />
  </Box>
)

export default PersonCard;
