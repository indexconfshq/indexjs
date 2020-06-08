import React from 'react'
import { Heading } from 'theme-ui'

const FormHeading = ({ text }) => {
    return (
        <Heading
            as="h1"
            sx={{
              fontFamily: 'subHeading',
              color: 'pink',
              fontSize: 40
            }}
        >
            {text}
        </Heading>
    )
}

export default FormHeading
