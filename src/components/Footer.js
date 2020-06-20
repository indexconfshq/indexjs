import React from 'react'
import { Box, Text, Image } from 'theme-ui';
import Container from './Container';
import { graphql, useStaticQuery } from 'gatsby';
import get from 'lodash/get';
import logo from '../images/logo.svg'

const Footer = () => {

  const queryResults = useStaticQuery(graphql`
    query SiteConfigFooter {
      site {
        siteMetadata {
          title
          locationCity
          locationCountry
        }
      }
    }
  `);

  const siteMetadata = get(queryResults, 'site.siteMetadata');

  return (
    <Box
      sx={{
        py: '70px',
        backgroundColor: 'blue',
        borderTop: '1px solid white'
      }}
    >
      <Container>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            flexWrap: 'wrap',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              flexWrap: 'wrap',
              py: '15px'
            }}
          >
            <Box
              sx={{
                maxWidth: '100px',
                width: '100%',
                pb: '15px',
                mb: '-1px'
              }}
            >
              <Image src={logo} />
            </Box>
            <Box
              sx={{
                width: '60vw',
              }}
            >
              <Text
                sx={{
                  fontFamily: 'text',
                  fontSize: '12px',
                  lineHeight: 'body',
                  textAlign: 'center',
                  color: 'white'
                }}
              >
                &copy; {siteMetadata.title}, {siteMetadata.locationCity} {siteMetadata.locationCountry} {new Date().getFullYear()}
              </Text>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
};

export default Footer;
