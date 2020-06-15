import React from 'react';
import { Box, Text } from 'theme-ui'
import { graphql, useStaticQuery } from 'gatsby';
import get from 'lodash/get';
import Container from './Container';
import stadiumBackground from '../images/stadium_background.png';
import Title from './Title';
import Subtitle from './Subtitle';
import Places from './Modals/Places';

const Location = () => {
  
  const queryResults = useStaticQuery(graphql`
    query Location {
      markdownRemark(frontmatter: { id: { eq: "location" } }) {
        frontmatter {
          title
          subtitle
          text
          knowTheCity
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
            description
          }
        }
      }
    }
  `);

  const data = get(queryResults, 'markdownRemark.frontmatter');
  
  return (
    <Box
      sx={{
        backgroundImage: `url(${stadiumBackground})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: ['75% 100%','75% 100%','75% 100%','75% 100%','50% 50%'],
        display: 'flex',
        justifyContent: ['center','center','center','flex-end']
      }}
    >
      <Container>
      <Box
        sx={{
          my: ['25px','25px','25px','90px'],
          ml: 'auto',
          position: 'relative',
          width: ['100%','100%','100%','715px','835px'],
          height: ['auto','auto','auto','565px'],
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
                  px: ['0px','35px','35px','100px'],
                  mx: 'auto'
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
                    lineHeight: '25px',
                    color: 'paragraph'
                  }}
                >
                  {data.text}
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
    </Box>
  )
};

export default Location;
