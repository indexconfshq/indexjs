import React from 'react'
import { Grid, Box, Heading, Flex, Button } from 'theme-ui'

import logo from '../images/logo.svg'
import Layout from '../components/layout'

const Index = () => {
    return (
        <Layout>
            <Grid columns={2}>
                <Box sx={{ p: 56 }}>
                    <img src={logo} alt="logo" width="275px" />
                </Box>
                <Box>
                    <Box
                        sx={{
                            mt: '225px',
                            p: 36,
                            bg: '#EFB300',
                            height: '155px',
                        }}
                    >
                        <Heading as="h1" sx={{ pr: '30%' }}>
                            The first JS dedicated conference in Portugal
                        </Heading>
                    </Box>
                    <Flex
                        sx={{
                            pt: 20,
                        }}
                    >
                        <Button mr={3}>I want to speak</Button>
                        <Button>Keep me inform</Button>
                    </Flex>
                </Box>
            </Grid>
            <Box>
                <p>16/17</p>
                <p>Out</p>
            </Box>
            <Box>
                <p>Gold sponsor</p>
                <p>xgeeks</p>
            </Box>
        </Layout>
    )
}

export default Index
