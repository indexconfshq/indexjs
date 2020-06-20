import React from 'react';
import { Box, Text } from 'theme-ui';
import Socials from './Socials';

const Info = ({ person, insideModal }) => (
  
  <Box
    sx={{
      color: 'blue',
      maxWidth: '500px',
      mt: insideModal ? ['10px','10px','10px','10px',0] : 0,
      ml: insideModal ? [0,0,10,10,10,10] : 0,
    }}
  >
    <Text
      sx={{
        fontFamily: 'subHeading',
        fontSize: insideModal ? ['25px', '25px', '25px', 30] : 30,
        lineHeight: insideModal ? ['26px', '26px', '26px', '31px'] : '31px',
        mb: insideModal ? 10 : 17,
        maxWidth: !insideModal && '225px',
        maxHeight: !insideModal && '31px',
        textOverflow: !insideModal && 'ellipsis',
        overflow: !insideModal && 'hidden',
        whiteSpace: !insideModal && 'nowrap',
      }}
      title={person.name}
    >
      {person.name}
    </Text>
    <Text
      sx={{
        position: 'relative',
        maxHeight: insideModal ? ['50px','75px','75px','100px'] : '100px',
        height: 'auto',
        overflowY: insideModal ? 'auto' : 'auto',
        backgroundColor: 'lightestGray',
        p: '4px',
        hyphens: 'auto',
        fontFamily: 'text',
        fontSize: insideModal ? ['15px', '15px', '15px', 20] : 18,
        lineHeight: insideModal ? ['20px', '20px', '20px', 'cardRole'] : 'cardRole',
      }}
    >
      {person.role}
    </Text>
    <Socials github={person.github} twitter={person.twitter} />
  </Box>
);

export default Info;