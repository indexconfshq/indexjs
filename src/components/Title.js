import React from 'react';
import { Box, Text } from 'theme-ui'

const Title = ({ title, paddingBottom = '60px' }) => (

  <Box>
    <Text
      sx={{
        pt: '50px',
        pb: [60,60,60,paddingBottom],
        fontFamily: 'heading',
        fontSize: [53, 100],
        textAlign: 'center',
        color: 'blue'
      }}
    >
      {title}
    </Text>
  </Box>

);

export default Title;
