import React from 'react';
import { Box, Text } from 'theme-ui'

const Title = ({ title, paddingTop = '50px',paddingBottom = '60px', textColor = 'blue' }) => (

  <Box>
    <Text
      sx={{
        pt: [50, 50, 50, paddingTop],
        pb: [0, 0, 0, paddingBottom],
        fontFamily: 'heading',
        fontSize: [53, 53, 53, 100, 100, 100],
        textAlign: 'center',
        color: textColor
      }}
    >
      {title}
    </Text>
  </Box>

);

export default Title;
