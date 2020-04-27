import React from 'react'
import { Box, Flex } from 'theme-ui'

import FormButton from './button'

const FormContainer = ({ children, handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <Box
                sx={{
                    mt: '120px',
                    p: [24, 36],
                    bg: '#EFB300',
                }}
            >
                {children}
            </Box>
            <Flex
                sx={{
                    justifyContent: 'flex-end',
                    p: 40,
                    fontFamily: 'system-ui',
                }}
            >
                <FormButton {...{ text: 'send', type: 'submit' }} />
            </Flex>
        </form>
    )
}

export default FormContainer
