import React from 'react'
import { Grid, Box, Heading, Flex, Button, Text } from 'theme-ui'

import logo from '../images/logo.svg'
import xgeeksLogo from '../images/xgeeks-logo.svg'
import Layout from '../components/layout'

const Index = () => {
    return (
        <Layout>
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
                        columns={[1, 2]}
                        sx={{
                            py: 20,
                            pr: 20,
                            pl: [20, 0],
                            fontFamily: 'system-ui',
                        }}
                    >
                        <Button>I want to speak</Button>
                        <Button>Keep me inform</Button>
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
