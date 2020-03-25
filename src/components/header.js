import React from 'react'
import { FaInstagram, FaTwitter, FaFacebookF } from 'react-icons/fa';
import { Flex, Box } from 'theme-ui'

const Header = () => {
    return (
        <header>
            <Flex
                sx={{
                    p: 56,
                    alignItems: 'center',
                    justifyContent: 'flex-end'
                }}

            >
                <Box sx={{ p: '6px', opacity: '0.7', cursor: 'pointer' }}><FaInstagram /></Box>
                <Box sx={{ p: '6px', opacity: '0.7', cursor: 'pointer' }}><FaTwitter /></Box>
                <Box sx={{ p: '6px', opacity: '0.7', cursor: 'pointer' }}><FaFacebookF /></Box>
            </Flex>
        </header>
    )
}

export default Header
