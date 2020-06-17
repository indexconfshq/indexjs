import React from 'react';
import { Box, Text } from 'theme-ui';
import PersonModal from '../Modals/PersonModal';

const Footer = ({ person, presentationDay }) => (

  <Box 
    sx={{
      position: 'absolute',
      bottom: 10
    }}
  >
    {person.topic &&
      <Box mt="9px">
        <Text 
          sx={{
            color: 'pink',
            fontFamily: 'subHeading',
            fontSize: ['18px','18px','18px','20px'],
            lineHeight: '21px'
          }}
        >
          {person.topic}
        </Text>
        <Text
          sx={{
            fontFamily: 'text',
            fontSize: '13px',
            lineHeight: 'body',
          }}
        >
          <PersonModal person={person} presentationDay={presentationDay} />
        </Text>
      </Box>}
  </Box>
);

export default Footer;