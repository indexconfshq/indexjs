import React, { useReducer } from 'react'
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

const reducer = (state, { type, payload }) => {
    switch (type) {
        case 'name':
            return {...state, [type]: payload}
        default:
            return state
    }
}

const Index = () => {
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE)

    const onFieldChange = (field) => ({ target }) => {
        dispatch({ type: field, payload: target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('form', state)
    }

    return (
        <Layout>
            <SEO />
            <Grid columns={[1, 1, 2]}>
                <Box sx={{ p: '0 56px 0 56px' }}>
                    <img src={logo} alt="logo" width="275px" />
                </Box>
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
                                <Input required type="email" placeholder="email" />
                            </Box>
                            <Box>
                                <Label pt="10px" pb="5px">
                                    * What's your talk subject
                                </Label>
                                <Input required placeholder="ex: css in JS the future" />
                            </Box>
                            <Box>
                                <Label pt="10px" pb="5px">
                                    Anything else?
                                </Label>
                                <Textarea rows={3} />
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
                        <Button type="submit" sx={{ fontSize: '1.3em', width: 200 }}>
                            Send
                        </Button>
                    </Flex>
                </form>
            </Grid>
        </Layout>
    )
}

export default Index
