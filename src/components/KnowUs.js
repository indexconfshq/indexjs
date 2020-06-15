import React from 'react';
import { Box, Text } from 'theme-ui'
import { graphql, useStaticQuery } from 'gatsby';
import get from 'lodash/get';
import Container from './Container';
import Title from './Title';
import PersonCard from './PersonCard/PersonCard';

const KnowUs = () => {
  
  const queryResults = useStaticQuery(graphql`
    query KnowUs {
      markdownRemark(frontmatter: { id: { eq: "know-us" } }) {
        frontmatter {
          title
          ltr
          persons {
            name
            photo {
              childImageSharp {
								fixed(width: 154, quality: 100) {
									...GatsbyImageSharpFixed_withWebp
								}
							}
            }
            role
            github
            twitter
          }
          text
        }
      }
    }
  `);

  const data = get(queryResults, 'markdownRemark.frontmatter');
  
  return (
    <Box 
      id="know-us"
      sx={{
        backgroundColor: 'lightestGray', 
        mb: 92
      }}
    >
      <Container>
        <Title title={data.title} paddingBottom='95px' />
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', alignItems: 'center' }}>
          {data.persons.map( (person, index) => (
            <PersonCard key={person.name + index} person={person} gradientLTR={data.ltr} index={index} />
          ))}
        </Box>
        <Box sx={{ mt: 66, maxWidth: 846, mx: 'auto' }}>
          <Text 
            sx={{
              fontFamily: 'text',
              fontSize: '20px',
              lineHeight: '25px',
              textAlign: 'center',
              color: 'paragraph'
            }}
          >
            {data.text}
          </Text>
        </Box>
      </Container>
    </Box>
  )
};

export default KnowUs;
