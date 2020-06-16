import React, { useState, useReducer } from 'react'
import { Link } from 'gatsby'
import { AnimatePresence } from 'framer-motion'
import firebase from 'gatsby-plugin-firebase'

import { Grid, Box, Textarea } from 'theme-ui'

import logo from '../images/logo.svg'
import Layout from '../components/layout'
import SEO from '../components/SEO'
import FormFieldLabel from '../components/Forms/FormFieldLabel'
import FormField from '../components/Forms/FormField'
import FadeScaleIn from '../components/Animated/FadeScaleIn'
import SlideInOutFade from '../components/Animated/SlideInOutFade'
import FormFeedback from '../components/Forms/FormFeedback'
import FormHeading from '../components/Forms/formHeading';
import FormContainer from '../components/Forms/formContainer'
import { SUBMISSION_STATES } from '../components/Forms/constants'

const INITIAL_STATE = {
    name: '',
    email: '',
    subject: '',
    more: '',
}

const Form = ({ state, handleSubmit, onFieldChange }) => {
    return (
        <FormContainer handleSubmit={handleSubmit}>
            <FormHeading {...{ text: 'Tell us more' }} />
            <Box
                sx={{
                    color: 'background',
                    fontFamily: 'system-ui, sans-serif',
                }}
            >
                <FormField
                    required
                    label="* Where can we reach you"
                    placeholder="name"
                    value={state.name}
                    onChange={onFieldChange('name')}
                />
                <FormField
                    required
                    label="* How can we call you?"
                    placeholder="email"
                    value={state.email}
                    onChange={onFieldChange('email')}
                />
                <FormField
                    required
                    label="* What's your talk subject"
                    placeholder="ex: css in JS the future"
                    value={state.subject}
                    onChange={onFieldChange('subject')}
                />
                <Box>
                    <FormFieldLabel {...{ label: 'Anything else?' }} />
                    <Textarea
                        placeholder="Tell us more"
                        onChange={onFieldChange('more')}
                        value={state.more}
                        rows={3}
                    />
                </Box>
            </Box>
        </FormContainer>
    )
}

const reducer = (state, { type, payload }) => {
    switch (type) {
        case 'name':
        case 'email':
        case 'subject':
        case 'more':
            return { ...state, [type]: payload }
        default:
            return state
    }
}

const CallToSpeakers = () => {
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE)
    const [submissionState, setSubmissionState] = useState(
        SUBMISSION_STATES.NOT_SUBMITTED
    )

    const onFieldChange = (field) => ({ target }) => {
        dispatch({ type: field, payload: target.value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        setSubmissionState(SUBMISSION_STATES.SUBMITTING)

        try {
            if (process.env.NODE_ENV === 'production') {
                const db = firebase.firestore()
                await db.collection('contacts').add(state)
            }
            setSubmissionState(SUBMISSION_STATES.SUBMITTED_SUCCESS)
        } catch (e) {
            setSubmissionState(SUBMISSION_STATES.SUBMITTED_ERROR)
        }
    }

    return (
        <Layout>
            <SEO />
            <Grid columns={[1, 1, 2]}>
                <FadeScaleIn>
                    <Link {...{ to: '/' }}>
                        <Box sx={{ p: '0 56px 0 56px' }}>
                            <img src={logo} alt="logo" width="275px" />
                        </Box>
                    </Link>
                </FadeScaleIn>
                <AnimatePresence initial={true}>
                    {submissionState !==
                        SUBMISSION_STATES.SUBMITTED_SUCCESS && (
                        <SlideInOutFade>
                            <Form
                                {...{
                                    state,
                                    handleSubmit,
                                    onFieldChange,
                                }}
                            />
                        </SlideInOutFade>
                    )}
                    {submissionState ===
                        SUBMISSION_STATES.SUBMITTED_SUCCESS && (
                        <SlideInOutFade id={2} duration={1.2}>
                            <FormFeedback
                                message="Thank's for reaching out we will get back to you ASAP"
                                buttonText="home"
                                buttonRoute="/"
                            />
                        </SlideInOutFade>
                    )}
                </AnimatePresence>
            </Grid>
        </Layout>
    )
}

export default CallToSpeakers
