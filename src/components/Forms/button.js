import React from 'react'
import { Button } from 'theme-ui'

const FormButton = ({ text, type = 'button' }) => (
    <Button type={type} sx={{ width: 200 }}>
        {text}
    </Button>
)

export default FormButton
