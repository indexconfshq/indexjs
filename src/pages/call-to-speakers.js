import React, { useState, useReducer } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'gatsby';
import firebase from 'gatsby-plugin-firebase'

import {
    Grid,
    Box,
    Heading,
    Button,
    Label,
    Input,
    Textarea,
    Flex,
} from 'theme-ui'

import logo from '../images/logo.svg'
import Layout from '../components/layout'
import SEO from '../components/SEO'

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

const FormSubmitted = () => (
    <Box>
        <Box
            sx={{
                mt: '120px',
                p: [24, 36],
                bg: '#EFB300',
            }}
        >
            <Heading
                as="h1"
                sx={{
                    maxWidth: 350,
                    fontSize: ['1.8em', '2em'],
                    pb: 10,
                }}
            >
                Thank's for reaching out we will get back to you ASAP
            </Heading>
        </Box>
        <Flex
            sx={{
                justifyContent: 'flex-end',
                p: 40,
                fontFamily: 'system-ui',
            }}
        >
            <Link to="/">
                <Button
                    sx={{
                        fontSize: '1.3em',
                        width: 200,
                    }}
                >
                    Home
                </Button>
            </Link>
        </Flex>
    </Box>
)

const Form = ({ state, handleSubmit, onFieldChange }) => (
    <form onSubmit={handleSubmit}>
        <Box
            sx={{
                mt: '120px',
                p: [24, 36],
                bg: '#EFB300',
            }}
        >
            <Heading
                as="h1"
                sx={{
                    maxWidth: 350,
                    fontSize: ['1.8em', '2em'],
                    pb: 10,
                }}
            >
                Tell us more
            </Heading>
            <Box
                sx={{
                    color: 'background',
                    fontFamily: 'system-ui, sans-serif',
                }}
            >
                <Box>
                    <Label pt="10px" pb="5px">
                        * How can we call you
                    </Label>
                    <Input
                        required
                        onChange={onFieldChange('name')}
                        value={state.name}
                        placeholder="name"
                    />
                </Box>
                <Box>
                    <Label pt="10px" pb="5px">
                        * Where can we reach you
                    </Label>
                    <Input
                        required
                        onChange={onFieldChange('email')}
                        value={state.email}
                        type="email"
                        placeholder="email"
                    />
                </Box>
                <Box>
                    <Label pt="10px" pb="5px">
                        * What's your talk subject
                    </Label>
                    <Input
                        required
                        onChange={onFieldChange('subject')}
                        value={state.subject}
                        placeholder="ex: css in JS the future"
                    />
                </Box>
                <Box>
                    <Label pt="10px" pb="5px">
                        Anything else?
                    </Label>
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
            <Button
                type="submit"
                sx={{
                    fontSize: '1.3em',
                    width: 200,
                }}
            >
                Send
            </Button>
        </Flex>
    </form>
)

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
                <motion.div
                    initial={{ opacity: 0.2, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{  opacity: 0.2, scale: 0.7 }}
                    transition={{ duration: 0.6, type: 'tween' }}
                >
                    <Box sx={{ p: '0 56px 0 56px' }}>
                        <img src={logo} alt="logo" width="275px" />
                    </Box>
                </motion.div>
                <AnimatePresence initial={true}>
                    {submissionState !==
                        SUBMISSION_STATES.SUBMITTED_SUCCESS && (
                        <motion.div
                            key={1}
                            initial={{ x: 200, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: 200, opacity: 0 }}
                            transition={{ duration: 0.6, type: 'tween' }}
                        >
                            <Form
                                {...{
                                    state,
                                    handleSubmit,
                                    onFieldChange,
                                }}
                            />
                        </motion.div>
                    )}
                    {submissionState ===
                        SUBMISSION_STATES.SUBMITTED_SUCCESS && (
                        <motion.div
                            key={2}
                            initial={{ x: 200, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: 200, opacity: 0 }}
                            transition={{ duration: 1.2, type: 'tween', }}
                        >
                            <FormSubmitted />
                        </motion.div>
                    )}
                </AnimatePresence>
            </Grid>
        </Layout>
    )
}

export default Index
