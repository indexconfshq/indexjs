import React, { useState, useEffect } from 'react';
import { Box, Text } from 'theme-ui'
import { graphql, useStaticQuery } from 'gatsby';
import get from 'lodash/get';
import Container from './Container';
import BackgroundImage from 'gatsby-background-image'
import Title from './Title';
import Subtitle from './Subtitle';
import Places from './Modals/Places';
import ReactMarkdown from 'react-markdown';
import MarkdownRenderer from './MarkdownRenderer';

const Location = () => {

  const [isMobile, setMobile] = useState(false);
  function checkMobile(x) {
    setMobile(x.matches);
  }

  useEffect(() => {
    const x = window.matchMedia('(max-width: 991px)');
    checkMobile(x); // Call listener function at run time
    x.addListener(checkMobile); // Attach listener function on state changes
    return () => {
      x.removeListener(checkMobile);
    };
  }, []);
  
  const queryResults = useStaticQuery(graphql`
    query Location {
      markdownRemark(frontmatter: { id: { eq: "location" } }) {
        frontmatter {
          title
          subtitle
          knowTheCity
          bgimg {
            childImageSharp {
              fluid(maxWidth: 1440, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          places {
            image {
              childImageSharp {
                fixed(width: 197, quality: 100) {
                  ...GatsbyImageSharpFixed_withWebp
                }
              }
            }
            name
            year
            descriptionP1
            descriptionP2
            descriptionP3
            descriptionP4
          }
        }
				internal {
					content
				}
      }
    }
  `);

  const data = get(queryResults, 'markdownRemark.frontmatter');
  const text = get(queryResults, 'markdownRemark.internal.content');
  
  return (
    <Box
      id="location"
      sx={{
        display: 'flex',
        justifyContent: ['center','center','center','flex-end'],
      }}
    >
      <BackgroundImage
        Tag="section"
        fluid={data.bgimg.childImageSharp.fluid}
        style={{
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',        
          backgroundPosition: isMobile ? '75% 100%' : '50% 55%',
          width: '100%',
        }}
      >
        <Container>
        <Box
          sx={{
            my: ['25px','25px','25px','90px'],
            ml: 'auto',
            position: 'relative',
            width: ['100%','100%','100%','715px','835px'],
            height: 'auto'
          }}
        >
            <Box
              sx={{
                pb: '90px',
                backgroundColor: 'lightestGray',
                clipPath: ['none','none','polygon(0 0, 100% 0, 100% 100%, 9% 100%, 0 91%)'],
              }}
            >
              <Box>
                <Box
                  sx={{
                    px: ['0px','0px','35px','100px'],
                    mx: 'auto',
                    display: 'flex',
                    justifyContent: ['center','center','flex-start']
                  }}
                >
                  <Title title={data.title} paddingTop='43px' paddingBottom='46px' textColor='pink' alignment='left' />
                </Box>
                <Box
                  sx={{
                    px: ['35px','35px','35px','100px'],
                    mx: 'auto'
                  }}
                >
                  <Subtitle subtitle={data.subtitle} alignment='left' textColor='blue' paddingBottom='35px' />
                  <Text
                    sx={{
                      fontFamily: 'text',
                      fontSize: '20px',
                      lineHeight: 'body',
                      color: 'paragraph'
                    }}
                  >
                    <ReactMarkdown
                      source={text}
                      renderers={MarkdownRenderer}
                    />
                  </Text>
                </Box>
              </Box>

            </Box>
            <Box
              sx={{
                position: 'relative',
                width: ['250px', '250px', '250px', '413px'],
                mx: 'auto',
                right: 0,
                left: 0,
                bottom: '30px',
              }}
            >
              <Places places={data.places} knowTheCity={data.knowTheCity} />
            </Box>
        </Box>
        </Container>
      </BackgroundImage>
    </Box>
  )
};

export default Location;
