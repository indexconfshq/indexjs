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
    }
}

const SocialIcon = ({ variant }) => {
    const {icon, link, overColor} = ICONS[variant];
    return (
        <Box
            sx={{
                p: '6px',
                opacity: '0.7',
                cursor: 'pointer',

                '&:hover': {
                    color: overColor,
                },
            }}
        >
            <Link variant="social" href={link}>{icon}</Link>
        </Box>
    )
}

export default SocialIcon
