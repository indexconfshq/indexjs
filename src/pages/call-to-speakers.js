import React, { useState, useReducer } from 'react'
import { AnimatePresence } from 'framer-motion'
import firebase from 'gatsby-plugin-firebase'

import { Grid, Box, Heading, Textarea, Flex } from 'theme-ui'

import logo from '../images/logo.svg'
import Layout from '../components/layout'
import SEO from '../components/SEO'
import FormButton from '../components/Forms/button'
import FormButtonLink from '../components/Forms/buttonLink'
import FormFieldLabel from '../components/Forms/label'
import FormField from '../components/Forms/field'
import FadeScaleIn from '../components/Animated/FadeScaleIn'
import SlideInOutFade from '../components/Animated/SlideInOutFade'

const INITIAL_STATE = {
    name: '',
    email: '',
    subject: '',
    more: '',
}

const SUBMISSION_STATES = {
    NOT_SUBMITTED: 'NOT_SUBMITTED',
    SUBMITTING: 'SUBMITTING',
    SUBMITTED_SUCCESS: 'SUBMITTED_SUCCESS',
    SUBMITTED_ERROR: 'SUBMITTED_ERROR',
}

const BoxHeading = ({ text }) => (
    <Heading
        as="h1"
        sx={{
            maxWidth: 350,
            fontSize: ['1.8em', '2em'],
            pb: 10,
        }}
    >
        {text}
    </Heading>
)

const FormSubmitted = () => (
    <Box>
        <Box sx={{ mt: '120px', p: [24, 36], bg: '#EFB300' }}>
            <BoxHeading
                {...{
                    text:
                        "Thank's for reaching out we will get back to you ASAP",
                }}
            />
        </Box>
        <Flex
            sx={{ justifyContent: 'flex-end', p: 40, fontFamily: 'system-ui' }}
        >
            <FormButtonLink {...{ to: '/', text: 'home' }} />
        </Flex>
    </Box>
)

const Form = ({ state, handleSubmit, onFieldChange }) => {
    return (
        <form onSubmit={handleSubmit}>
            <Box
                sx={{
                    mt: '120px',
                    p: [24, 36],
                    bg: '#EFB300',
                }}
            >
                <BoxHeading {...{ text: 'Tell us more' }} />
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
            </Box>
            <Flex
                sx={{
                    justifyContent: 'flex-end',
                    p: 40,
                    fontFamily: 'system-ui',
                }}
            >
                <FormButton {...{ text: 'send', type: 'submit' }} />
            </Flex>
        </form>
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

const Index = () => {
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
            console.log('state', state)
            setSubmissionState(SUBMISSION_STATES.SUBMITTED_SUCCESS)
        } catch (e) {
            console.log('error', e)
            setSubmissionState(SUBMISSION_STATES.SUBMITTED_ERROR)
        }
        console.log('form', state, submissionState)
    }

    return (
        <Layout>
            <SEO />
            <Grid columns={[1, 1, 2]}>
                <FadeScaleIn>
                    <Box sx={{ p: '0 56px 0 56px' }}>
                        <img src={logo} alt="logo" width="275px" />
                    </Box>
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
                            <FormSubmitted />
                        </SlideInOutFade>
                    )}
                </AnimatePresence>
            </Grid>
        </Layout>
    )
}

export default Index
