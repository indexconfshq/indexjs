import React from 'react'
import { navigate } from 'gatsby'
import { Grid, Box, Heading, Button, Text } from 'theme-ui'

import logo from '../images/logo.svg'
import xgeeksLogo from '../images/xgeeks-logo.svg'
import Layout from '../components/layout'
import SEO from '../components/SEO'

const Index = () => {
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
                            height: '155px',
                        }}
                    >
                        <Heading as="h1" sx={{ maxWidth: 350, fontSize: ['1.8em', '2em'] }}>
                            The first JS dedicated conference in Portugal
                        </Heading>
                    </Box>
                    <Grid
                        columns={[1, 2, 2, 3]}
                        sx={{
                            py: 20,
                            pr: 20,
                            pl: [20, 0],
                            fontFamily: 'system-ui',
                        }}
                    >
                        <Button onClick={() => navigate('/speakersForm')} sx={{ fontSize: '1.3em' }}>I want to speak</Button>
                        <Button sx={{ fontSize: '1.3em' }}>Keep me informed</Button>
                    </Grid>
                </Box>
            </Grid>
            <Box
                sx={{
                    p: 35,
                    fontFamily: 'Menlo',
                    fontSize: [96, 124],
                }}
            >
                <Text>16/17</Text>
                <Text>Out</Text>
            </Box>
            <Box
                sx={{
                    p: 38,
                    fontFamily: 'Menlo',
                }}
            >
                <Text sx={{ color: '#F0D440', textTransform: 'uppercase' }}>
                    Gold sponsor
                </Text>
                <Box sx={{ py: '8px' }}>
                    <img src={xgeeksLogo} height={20} alt="xgeeks logo" />
                </Box>
            </Box>
        </Layout>
    )
}

export default Index
