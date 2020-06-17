import React from 'react';
import { Box, Text } from 'theme-ui'

const Subtitle = ({ subtitle, textColor = 'text', alignment = 'center', paddingBottom = 45 }) => (

  <Box>
    <Text
      sx={{
        pb: paddingBottom,
        fontFamily: 'subHeading',
        fontSize: '40px',
        lineHeight: '42px',
        textAlign: alignment,
        color: textColor
      }}
    >
      {subtitle}
    </Text>
  </Box>

);

export default Subtitle;
