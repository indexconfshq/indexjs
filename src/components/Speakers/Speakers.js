import React from 'react';
import { Box, Text } from 'theme-ui'
import { graphql, useStaticQuery } from 'gatsby';
import get from 'lodash/get';
import Container from '../Container';
import Title from '../Title';
import PersonCard from '../PersonCard/PersonCard';
import Subtitle from '../Subtitle';
import Day from './Day';

const Speakers = () => {
  
  const queryResults = useStaticQuery(graphql`
    query Speakers {
      markdownRemark(frontmatter: { id: { eq: "speakers" } }) {
        frontmatter {
          title
          alldays {
            day
            dayColor
            dayTitleColor
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
              topic
              topicURL
            }
          }
        }
      }
    }
  `);

  const data = get(queryResults, 'markdownRemark.frontmatter');
  
  return (
    <Box>
      {data.alldays.map( (day, index) => (<Box 
          sx={{
            backgroundColor: day.dayColor, 
            pb: [55, 55, 55, 105]
          }}
        >
          <Container>
            {index === 0 &&
              <Title title={data.title} paddingBottom='0px' textColor="yellow" />}
            <Box>
              <Day day={day} />
            </Box>
          </Container>
        </Box>
      ))}
    </Box>
  )
};

export default Speakers;
