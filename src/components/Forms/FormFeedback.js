import React from 'react'
import { Box } from 'theme-ui'

import FormHeading from './formHeading'
import FormSubHeading from './FormSubHeading'

const FormFeedback = ({ message, message2 }) => (

    <Box>
      <Box sx={{ width: '100%', height: '100%' }}>
        <FormHeading {...{ text: message }} />
        <FormSubHeading {...{ text: message2 }} />
      </Box>
    </Box>
)

export default FormFeedback
