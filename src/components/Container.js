import React from 'react';
import { Box } from 'theme-ui'

const Container = ({children, sx, ...rest}) => (
  <Box
    sx={{ 
      px: [35, 35, 35, 35, 35, 70],
      width: ['100%', '100%', 540, 720, 1000, 1337],
      mx:'auto',
      ...sx
    }}
  >
    {children}
  </Box>
);

export default Container;