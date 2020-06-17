import React from 'react';
import { Box, Link, Image } from 'theme-ui';
import githubLogo from '../../images/github.svg';
import twitterLogo from '../../images/twitter.svg';

const Socials = ({ github, twitter }) => (

  <Box mt="18px">
    <Link href={github} target="_blank" rel="noreferrer noopener">
      <Image src={githubLogo} />
    </Link>
    <Link href={twitter} target="_blank" rel="noreferrer noopener">
      <Image src={twitterLogo} ml="16px" />
    </Link>
  </Box>
);

export default Socials;
