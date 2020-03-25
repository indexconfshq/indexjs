import React from 'react'
import { Grid, Box, Heading, Button, Label, Input, Textarea, Flex } from 'theme-ui'

import logo from '../images/logo.svg'
import Layout from '../components/layout'
import SEO from '../components/SEO'

const KeepMeInformed = () => {
    return (
        <Layout>
            <SEO />
            <Grid columns={[1, 1, 2]}>
                <Box sx={{ p: '0 56px 0 56px' }}>
                    <img src={logo} alt="logo" width="275px" />
                </Box>
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
                                maxWidth: 450,
                                fontSize: ['1.8em', '2em'],
                                pb: 10,
                            }}
                        >
                            We will keep you posted
                        </Heading>
                        <Box sx={{ color: 'background', fontFamily: 'system-ui, sans-serif'}}>
                            <Box>
                                <Label pt="10px" pb="5px">How can we call you</Label>
                                <Input placeholder="name" />
                            </Box>
                            <Box>
                                <Label pt="10px" pb="5px">Where can we reach you</Label>
                                <Input placeholder="email" />
                            </Box>
                            <Box>
                                <Label pt="10px" pb="5px">Anything else?</Label>
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
                        <Button sx={{ fontSize: '1.3em', width: 200 }}>Send</Button>
                    </Flex>
                </Box>
            </Grid>
        </Layout>
    )
}

export default KeepMeInformed
