import React from 'react';
import { Box } from 'theme-ui'
import { graphql, useStaticQuery } from 'gatsby';
import get from 'lodash/get';
import Container from '../Container';
import Title from '../Title';
import Day from './Day';

const Speakers = () => {
  
  const queryResults = useStaticQuery(graphql`
    query Speakers {
      markdownRemark(frontmatter: { id: { eq: "speakers" } }) {
        frontmatter {
          title
          announcingSoon
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
              hour
              presentationDescription
            }
          }
        }
      }
    }
  `);

  const data = get(queryResults, 'markdownRemark.frontmatter');
  
  return (
    <Box
      id="speakers"
    >
      {data.alldays.map( (eachDay, index) => (
      <Box
          key={index}
          sx={{
            backgroundColor: eachDay.dayColor, 
            pb: [55, 55, 55, 105]
          }}
        >
          <Container>
            {index === 0 &&
              <Title title={data.title} paddingBottom='0px' textColor="yellow" />}
            <Box>
              <Day day={eachDay} announcingSoon={data.announcingSoon} />
            </Box>
          </Container>
        </Box>
      ))}
    </Box>
  )
};

export default Speakers;
