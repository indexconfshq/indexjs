import React from 'react'
import { graphql, useStaticQuery } from 'gatsby';
import { Grid, Box, Heading, Button, Flex } from 'theme-ui'
import get from 'lodash/get';

import logo from '../images/logo.svg'
import Layout from '../components/layout'
import SEO from '../components/SEO'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const NotFound = () => {

  const queryResults = useStaticQuery(graphql`
    query FourOFourSeo {
      markdownRemark(frontmatter: { id: { eq: "seo-md" } }) {
        frontmatter {
          image: featured {
            childImageSharp {
              resize(width: 200) {
                src
                height
                width
              }
            }
          }
        }
      }
    }`,
  );

  const metaimage = get(queryResults, 'markdownRemark.frontmatter') 
  const image = metaimage.featured
    ? metaimage.featured.childImageSharp.resize
    : null

    return (
        <Layout>
            <SEO image={image} />
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
                            404 - Nothing here
                        </Heading>
                    </Box>
                    <Flex
                        sx={{
                            justifyContent: 'flex-end',
                            p: 40,
                            fontFamily: 'system-ui',
                        }}
                    >
                        <AniLink fade to="/" duration={1}>
                            <Button
                                sx={{ fontSize: '1.3em', width: 200 }}
                            >
                                Home
                            </Button>
                        </AniLink>
                    </Flex>
                </Box>
            </Grid>
        </Layout>
    )
}

export default NotFound
