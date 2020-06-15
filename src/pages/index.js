import React from 'react'
// import { Link } from 'gatsby';
// import { motion } from 'framer-motion'
// import { Grid, Box, Heading, Button, Text } from 'theme-ui'

// import logo from '../images/logo.svg'
// import xgeeksLogo from '../images/xgeeks-logo.svg'
import Layout from '../components/layout'
import SEO from '../components/SEO'
import BigDate from '../components/BigDate'
import KnowUs from '../components/KnowUs';
import Speakers from '../components/Speakers/Speakers';
import Location from '../components/Location';
import Footer from '../components/Footer/Footer';

const Index = () => {
    return (
        <Layout>
            <SEO />
            <BigDate />
            <KnowUs />
            <Speakers />
            <Location />
            <Footer /> 
            {/* <Grid columns={[1, 1, 2]}>
                <motion.div
                    initial={{ opacity: 0.2, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, type: 'tween' }}
                >
                    <Box sx={{ p: '0 56px 0 56px' }}>
                        <img src={logo} alt="logo" width="275px" />
                    </Box>
                </motion.div>
                <motion.div
                    initial={{ x: 200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, type: 'tween' }}
                >
                    <Box
                        sx={{
                            mt: '120px',
                            p: [24, 36],
                            bg: '#EFB300',
                            height: '155px',
                        }}
                    >
                        <Heading
                            as="h1"
                            sx={{ maxWidth: 350, fontSize: ['1.8em', '2em'] }}
                        >
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
                        <Link to="/call-to-speakers">
                            <Button sx={{ fontSize: '1.3em', width: '100%' }}>
                                I want to speak
                            </Button>
                        </Link>
                        <Link to="/keep-me-informed">
                            <Button sx={{ fontSize: '1.3em', width: '100%' }}>
                                Keep me informed
                            </Button>
                        </Link>
                    </Grid>
                </motion.div>
            </Grid>
            <motion.div
                initial={{ y: 500 }}
                animate={{ y: 0 }}
                transition={{
                    delay: 0.6,
                    duration: 0.6,
                    type: "spring",
                    stiffness: 180,
                    damping: 15
                }}
            >
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
            </motion.div>
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
            </Box> */}
        </Layout>
    )
}

export default Index
