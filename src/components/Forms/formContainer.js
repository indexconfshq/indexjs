import React from 'react'
import { Box, Flex } from 'theme-ui'

import FormButton from './button'

const FormContainer = ({ children, handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <Box sx={{
              fontFamily: 'subHeading',
              fontSize: 22
            }}>
                {children}
            </Box>
            <Flex
                sx={{
                    justifyContent: ['center' ,'flex-end'],
                    px: 20,
                    pt: 15,
                    fontFamily: 'subHeading'
                }}
            >
                <FormButton {...{ text: 'Send Request', type: 'submit' }} />
            </Flex>
        </form>
    )
}

export default FormContainer
