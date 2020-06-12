import React from 'react'
import { Heading } from 'theme-ui'

const FormHeading = ({ text }) => {
    return (
        <Heading
            as="h1"
            sx={{
              fontFamily: 'subHeading',
              color: 'pink',
              fontSize: ['29px','29px','29px','40px'],
              lineHeight: '41px',
            }}
        >
            {text}
        </Heading>
    )
}

export default FormHeading
