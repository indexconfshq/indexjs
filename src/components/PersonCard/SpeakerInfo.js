import React from 'react';
import { Box, Text } from 'theme-ui';
import Listener from '../Modals/Listener';

const SpeakerInfo = ({ person, presentationDay }) => (

  <Box>
    <Text
      sx={{
        fontFamily: 'subHeading',
        color: 'pink',
        fontSize: ['24px','24px','40px','40px'],
        lineHeight: ['28px','28px','40px','41px'],
        textTransform: 'uppercase'
      }}
    >
      {person.topic}
    </Text>
    <Text
      sx={{
        fontFamily: 'subHeading',
        fontSize: ['20px','20px','20px', '20px','30px'],
        lineHeight: ['21px','21px','21px', '21px', '31px'],
        color: 'blue',
        mt: ['7px','7px','7px', '7px', 15]
      }}
    >
      Day {presentationDay} - {person.hour}
    </Text>
    <Text
      sx={{
        backgroundColor: 'lightestGray2',
        fontFamily: 'text',
        fontSize: '20px',
        lineHeight: 'body',
        color: 'paragraph',
        mt: 32,
        p:'10px',
        height: [130, 130, 250, 130, 148],
        overflowY: ['scroll','scroll','auto'],
      }}
    >
      &emsp;{person.presentationDescription}
    </Text>
    <Box>
      <Listener insideModal={true} />
    </Box>
  </Box>
);

export default SpeakerInfo;
