import React from 'react'
import { Button } from 'theme-ui'

const FormButton = ({ text, type = 'button' }) => (
  
  <Button
    variant='tertiary'
  >
    {text}
  </Button>
)

export default FormButton
