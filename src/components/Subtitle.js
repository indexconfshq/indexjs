import React from 'react';
import { Box, Text } from 'theme-ui'

const Subtitle = ({ subtitle, textColor = 'text' }) => (

  <Box>
    <Text
      sx={{
        pb: 45,
        fontFamily: 'subHeading',
        fontSize: '40px',
        lineHeight: '42px',
        textAlign: 'center',
        color: textColor
      }}
    >
      {subtitle}
    </Text>
  </Box>

);

export default Subtitle;
