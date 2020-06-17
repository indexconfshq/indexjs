import React from 'react';
import { Box, Text } from 'theme-ui'
import { graphql, useStaticQuery } from 'gatsby';
import get from 'lodash/get';
import Container from './Container';
import Title from './Title';
import PersonCard from './PersonCard/PersonCard';
import ReactMarkdown from 'react-markdown';
import MarkdownRenderer from './MarkdownRenderer';


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
      id="know-us"
      sx={{
        backgroundColor: 'lightestGray', 
        pb: 92
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
              lineHeight: 'body',
              textAlign: 'center',
              color: 'paragraph'
            }}
          >
          <ReactMarkdown
            source={text}
            renderers={MarkdownRenderer}
          />
          </Text>
        </Box>
      </Container>
    </Box>
  )
};

export default KnowUs;
