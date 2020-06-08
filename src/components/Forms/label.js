import { Label } from 'theme-ui'
import React from 'react'

const FormFieldLabel = ({ label }) => (
    <Label pt="15px" pb="10px" sx={{ color: 'blue' }}>
        {label}
    </Label>
)

export default FormFieldLabel
