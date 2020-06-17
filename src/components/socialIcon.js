import React from 'react'
import { Box, Link } from 'theme-ui'
import { FaInstagram, FaTwitter, FaFacebookF } from 'react-icons/fa';

const ICONS = {
  instagram: {
      icon: <FaInstagram />,
      overColor: '#c32aa3',
      link: 'https://www.instagram.com/indexjsconf',
  },
  twitter: {
      icon: <FaTwitter />,
      overColor: '#1da1f2',
      link: 'https://twitter.com/indexjsconf',
  },
  facebook: {
      icon: <FaFacebookF />,
      overColor: '#1877f2',
      link: 'https://www.facebook.com/indexjsconf',
  },
  instagramMobile: {
      icon: <FaInstagram />,
      overColor: '#c32aa3',
      link: 'https://www.instagram.com/indexjsconf',
  },
  twitterMobile: {
      icon: <FaTwitter />,
      overColor: '#1da1f2',
      link: 'https://twitter.com/indexjsconf',
  },
  facebookMobile: {
      icon: <FaFacebookF />,
      overColor: '#1877f2',
      link: 'https://www.facebook.com/indexjsconf',
  }
}

const SocialIcon = ({ variant, isMobile = false }) => {
    const {icon, link, overColor} = ICONS[variant];
    return (
        <Box
            sx={{
                p: !isMobile && '6px',
                pr: isMobile && '30px',
                pt: isMobile && '20px',
                cursor: 'pointer',
                color: 'blue',
                '&:hover': {
                    color: overColor,
                },
            }}
        >
            <Link variant="social" href={link} target="_blank" sx={{fontSize: isMobile ? '30px' : 'inherit'}}>{icon}</Link>
        </Box>
    )
}

export default SocialIcon
