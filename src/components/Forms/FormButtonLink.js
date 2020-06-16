import { Link } from 'gatsby'
import FormButton from './FormButton'
import React from 'react'

const FormButtonLink = ({ to, text }) => (
    <Link {...{ to }}>
        <FormButton {...{ text }} />
    </Link>
)

export default FormButtonLink
