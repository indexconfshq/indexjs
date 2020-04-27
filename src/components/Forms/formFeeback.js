import React from 'react'
import { Box, Flex } from 'theme-ui'

import FormButtonLink from './buttonLink'
import FormHeading from './formHeading'

const FormFeedback = ({ message, buttonText, buttonRoute }) => {
    return (
        <Box>
            <Box sx={{ mt: '120px', p: [24, 36], bg: '#EFB300' }}>
                <FormHeading {...{ text: message }} />
            </Box>
            <Flex
                sx={{
                    justifyContent: 'flex-end',
                    p: 40,
                    fontFamily: 'system-ui',
                }}
            >
                <FormButtonLink {...{ to: buttonRoute, text: buttonText }} />
            </Flex>
        </Box>
    )
}

export default FormFeedback
