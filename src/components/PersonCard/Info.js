import React from 'react';
import { Box, Text } from 'theme-ui';
import Socials from './Socials';

const Info = ({ person, insideModal }) => (
  
  <Box
    sx={{
      color: 'blue',
      maxWidth: '500px',
      mt: insideModal ? ['10px','10px','10px','10px',0] : 0,
      ml: insideModal ? [0,0,10,0,0,'10px'] : 0
    }}
  >
    <Text
      sx={{
        fontFamily: 'subHeading',
        fontSize: insideModal ? ['25px', '25px', '25px', 30] : 30,
        lineHeight: insideModal ? ['26px', '26px', '26px', '31px'] : '31px',
        mb: insideModal ? 10 : 17
      }}
    >
      {person.name}
    </Text>

    <Text
      sx={{
        fontFamily: 'text',
        fontSite: insideModal ? ['15px', '15px', '15px', 20] : 20,
        lineHeight: insideModal ? ['21px', '21px', '21px', 'cardRole'] : 'cardRole',
      }}
    >
      {person.role}
    </Text>
    <Socials github={person.github} twitter={person.twitter} />
  </Box>
);

export default Info;