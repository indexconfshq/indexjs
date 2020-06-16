import { Box, Input } from 'theme-ui'
import React from 'react'

import FormFieldLabel from './FormFieldLabel'

const FormField = ({ required, label, placeholder, value, onChange }) => (
    <Box>
        <FormFieldLabel {...{ label }} />
        <Input {...{ required, value, placeholder, onChange }} />
    </Box>
)

export default FormField