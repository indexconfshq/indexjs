import React from 'react';
import { Box, Text } from 'theme-ui'
import { AnchorLink } from "gatsby-plugin-anchor-links";

const HeaderLink = ({ title, link = '/#', isMobile = false}) => (
  <Box
    sx={{
      mr:'5px',
      p: isMobile ? 0 : '25px',
      py: isMobile ? '20px' : 0,
      textDecoration: 'none'
    }}
  > 
    <AnchorLink to={link} title={title}>
      <Text
        sx={{
          fontFamily: 'subHeading',
          fontSize: isMobile ? '30px' : '20px',
          lineHeight: isMobile ? '31px' : '21px',
          color: 'blue'
        }}
      >
        {title}
      </Text>
    </AnchorLink>
  </Box>
);

export default HeaderLink;
