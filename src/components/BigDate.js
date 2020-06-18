import React from 'react';
import { Box, Text, Flex } from 'theme-ui'
import get from 'lodash/get';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image'
import Container from './Container';
import Speaker from './Modals/Speaker';
import Listener from './Modals/Listener';

const BigDate = () => {

  const queryResults = useStaticQuery(graphql`
    query BigDate {
      markdownRemark(frontmatter: { id: { eq: "big-date" } }) {
        frontmatter {
          days
          month
          description
          button1
          button2
          bgimg {
            childImageSharp {
              fluid(maxWidth: 1440, quality: 80) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `);

  const data = get(queryResults, 'markdownRemark.frontmatter');

  const backgroundWithGradient = [
    data.bgimg.childImageSharp.fluid,
    `linear-gradient(90deg, rgba(19,27,58,1) 0%, rgba(0,0,0,0.55) 100%)`,
  ].reverse();

  return(
    
    <Box id="home">
      <BackgroundImage
        Tag="section"
        fluid={backgroundWithGradient}
        style={{
          backgroundSize: 'cover',
          backgroundRepeat: 'none',        
          width: '100%',
          minHeight: '100vh'
        }}
      >
        <Container>
          <Flex
            sx={{
              py: [90, 90, 90, 150],
              alignItems: 'center',
              justifyContent: ['center','center','center','flex-start'],
              backgroundRepeat: 'no-repeat',
              maxWidth: 630,
              flexWrap: 'wrap'
            }}
          >
            <Box
              sx={{
                textShadow: '2px 4px 4px #00B8CC',
                fontFamily: 'heading',
                fontSize: [120, 120, 120, 190], 
                lineHeight: ['bigDate.medium', 'bigDate.medium', 'bigDate.medium', 'bigDate.large'],
                textAlign: ['center','center','center', 'left']
              }}
            >
              <Text>
                {data.days}
              </Text>
              <Text>
                {data.month}
              </Text>
            </Box>
            <Box
              sx={{
                fontFamily: 'subHeading',
                color: 'primary',
                fontSize: ['29px','29px','29px',40], 
                lineHeight: ['31px','31px','31px','42px'],
                mt: [25, 25, 25, 20],
                textAlign: ['center', 'center', 'center', 'left'],
                textShadow: '0px 0px 20px #000',
              }}
            >
              <Text>
                {data.description}
              </Text>
            </Box>
            <Box
              sx={{
                fontFamily: 'subHeading',
                color: 'primary',
                fontSize: 20, 
                lineHeight: '21px',
                mt: ['25px','25px','25px','40px'],
                textAlign: ['center', 'left'],
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center'
              }}
            >
              <Speaker buttonText={data.button1} />
              <Listener buttonText={data.button2} />
            </Box>
          </Flex>
        </Container>
      </BackgroundImage>
    </Box>
  )
};

export default BigDate;