import React from 'react';
import { Box, Text } from 'theme-ui';

export const AnnouncingSoon = ({ dayColor, textColor }) => (
  <Box
    sx={{
      width: '100%',
      pt: 52,
      backgroundColor: dayColor,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      pb: 30,
      height: '30vh'
    }}
  >
    <Text
      as="h3"
      sx={{
        textAlign: 'center',
        fontFamily: 'heading',
        fontSize: ['31px','31px','31px','45px'],
        lineHeight: ['33px','33px','33px','47px'],
        color: textColor,
        transform: 'rotate(-10deg)'
      }}
    >
      Announcing Soon
    </Text>
  </Box>
);

export default AnnouncingSoon;