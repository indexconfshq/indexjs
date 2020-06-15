import React from 'react';
import { Box, Text } from 'theme-ui'

const Title = ({ title, paddingTop = '50px',paddingBottom = '60px', textColor = 'blue', alignment = 'center' }) => (

  <Box>
    <Text
      sx={{
        pt: [50, 50, 50, paddingTop],
        pb: [0, 0, 0, paddingBottom],
        fontFamily: 'heading',
        fontSize: [51, 51, 51, 100, 100, 100],
        textAlign: alignment,
        color: textColor
      }}
    >
      {title}
    </Text>
  </Box>

);

export default Title;
