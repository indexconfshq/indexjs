import React from 'react'
import { Flex } from 'theme-ui'

import SocialIcon from './socialIcon'
import { motion } from 'framer-motion'

const Header = () => {
    return (
        <header>
            <motion.div
                initial={{ opacity: 0.2 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, type: 'tween' }}
            >
                <Flex
                    sx={{
                        position: 'fixed',
                        p: 56,
                        alignItems: 'center',
                        justifyContent: 'flex-end'
                    }}
                >
                    <SocialIcon variant="instagram" />
                    <SocialIcon variant="twitter" />
                    <SocialIcon variant="facebook" />
                </Flex>
            </motion.div>
        </header>
    )
}

export default Header
