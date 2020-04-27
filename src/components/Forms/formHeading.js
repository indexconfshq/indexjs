import React from 'react'
import { Heading } from 'theme-ui'

const FormHeading = ({ text }) => {
    return (
        <Heading
            as="h1"
            sx={{
                maxWidth: 350,
                fontSize: ['1.8em', '2em'],
                pb: 10,
            }}
        >
            {text}
        </Heading>
    )
}

export default FormHeading
