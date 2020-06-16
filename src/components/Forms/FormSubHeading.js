import React from 'react'
import { Heading, Flex } from 'theme-ui'

const FormSubHeading = ({ text }) => {
  return (
    <Flex
      sx={{
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Heading
        as="h2"
        sx={{
          fontFamily: 'subHeading',
          color: 'blue',
          fontSize: ['20px','20px','20px','30px'],
          lineHeight: '31px',
          mt: 30
        }}
      >
        {text}
      </Heading>
    </Flex>
  )
}

export default FormSubHeading
