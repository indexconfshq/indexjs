import React from 'react';
import { Box, Image, Text, Link } from 'theme-ui';
import githubLogo from '../../images/github.svg'
import twitterLogo from '../../images/twitter.svg'
import Footer from './Footer';

const Body = ({ gradientLTR, name, role, github, twitter, topic = null, topicURL = null}) => (
  <Box
    sx={{
      position: 'relative',
      background: gradientLTR ? 'linear-gradient(77.25deg, #D23B68 18.45%, #F0D440 104.3%)' : 'linear-gradient(-77.25deg, #D23B68 18.45%, #F0D440 104.3%)',
      height: 387,
      width: 305,
      p: '10px',
      borderRadius: '4px',
      clipPath: 'polygon(100% 0%, 100% 78%, 81% 100%, 0 100%, 0 0)'
    }}
  >
    <Box 
      sx={{ 
        background: 'white',
        clipPath: 'polygon(100% 0%, 100% 78%, 81% 100%, 0 100%, 0 0)',
        px: 15,
        py: 1,
        height: '100%',
      }}
    >
      <Box
        sx={{
          display:'flex',
          justifyContent: 'flex-start',
          alignItems: 'flex-start', 
          alignContent: 'flex-end',
          mt: '125px',
        }}
      >
        <Box>
          <Text
            sx={{
              fontFamily: 'subHeading',
              fontSize: 30,
              lineHeight: '31px',
              color: 'blue',
              mb: 17
            }}
          >
            {name}
          </Text>

          <Text
            sx={{
              fontFamily: 'text',
              fontSize: 20,
              lineHeight: '26px',
              color: 'blue'
            }}
          >
            {role}
          </Text>
          <Box mt="18px">
            <Link href={github} target="_blank" rel="noreferrer noopener">
              <Image src={githubLogo} />
            </Link>
            
            <Link href={twitter} target="_blank" rel="noreferrer noopener">
              <Image src={twitterLogo} ml="16px" />
            </Link>
          </Box>
        </Box>
      </Box>
      <Footer topic={topic} topicURL={topicURL} />
    </Box>
  </Box>
);

export default Body;
