import { Link } from 'gatsby'
import FormButton from './button'
import React from 'react'

const FormButtonLink = ({ to, text }) => (
    <Link {...{ to }}>
        <FormButton {...{ text }} />
    </Link>
)

export default FormButtonLink
