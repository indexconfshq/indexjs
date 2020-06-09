import React from 'react';
import { Box, Text, Link } from 'theme-ui';

const Footer = ({ topic, topicURL  }) => (

  <Box>
    {topic &&
      <Box mt="9px">
        <Text 
          sx={{
            color: 'pink',
            fontFamily: 'subHeading',
            fontSize: '20px',
            lineHeight: '21px'
          }}
        >
          {topic}
        </Text>
        <Text
          sx={{
            fontFamily: 'text',
            fontSize: '13px',
            lineHeight: '26px',
          }}
        >
          <Link href={topicURL} target="_blank" sx={{ textDecoration: 'none', color: 'rgba(19, 27, 58, 0.7)'}}>
            KNOW MORE
          </Link>
        </Text>
      </Box>}
  </Box>
);

export default Footer;