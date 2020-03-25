import React from 'react'
import { Flex } from 'theme-ui'

import SocialIcon from './socialIcon'

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
                <SocialIcon variant="instagram" />
                <SocialIcon variant="twitter" />
                <SocialIcon variant="facebook" />
            </Flex>
        </header>
    )
}

export default Header
