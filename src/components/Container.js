import React from 'react';
import { Box } from 'theme-ui'

const Container = ({children, sx, ...rest}) => (
  <Box
    sx={{ 
      px: '70px',
      width: ['100%', 540, 720, 1337],
      mx:'auto',
      ...sx
    }}
  >
    {children}
  </Box>
);

export default Container;