import React from 'react'
import SocialIcon from '../socialIcon'
import HeaderLink from './HeaderLink';
import { Box } from 'theme-ui';

const RightSideDesktop = ({ shrinkHeader, isMobile }) => (
  <Box
    sx={{
      boxShadow: '0px 5px 31px -2px rgba(0,0,0,0.75)',
      position: 'absolute',
      width: '100%',
      height: shrinkHeader && !isMobile ? '50px' : '100px',
      transition: 'height 0.200s ease-in-out',
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      pr: 32,
    }}
  >
    <HeaderLink title="Know Us" link="/#know-us" />
    <HeaderLink title="Speakers" link="/#speakers" />
    <HeaderLink title="Location" link="/#location" />
    <HeaderLink title="Sponsors" link="/#sponsors" />
    <SocialIcon variant="instagram" />
    <SocialIcon variant="twitter" />
    <SocialIcon variant="facebook" />
  </Box>
)

export default RightSideDesktop;
