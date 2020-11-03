import React from 'react';
import { Box, Text } from 'theme-ui'
import { graphql, useStaticQuery } from 'gatsby';
import get from 'lodash/get';

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
      <Box
        px={10}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          minHeight: [700, 700, 500, 500],
          backgroundColor: 'primary',
          fontFamily: 'text',
          color: 'blue',
          textAlign: ['center','center','center', 'left'],
        }}>
        <Text
          sx={{
            fontFamily: 'subHeading',
            fontSize: [35, 40, 60, 60, 80, 100],
          }}
          pb={55}
        >⚠️ Announcement ⚠️</Text>
        <Text pb={20} sx={{ textAlign: 'center', fontSize: 20 }}>We are sorry to announce that this conference has been postponed.</Text>
        <Text pb={20} sx={{ textAlign: 'center', fontSize: 20 }}>These are troubled times and we were forced to cancel the conference this year due to the current worldwide pandemic situation.</Text>
        <Text pb={20} sx={{ textAlign: 'center', fontSize: 20 }}>We hope that next year we are in conditions to host such an event, and we will continue to work to bring you the best JS conference we can.</Text>
        <Text pb={20} sx={{ textAlign: 'center', fontSize: 20 }}>We'll keep posting updates on our social media regarding the whole situation and a possible future date for the conference.</Text>
        <Text sx={{ textAlign: 'center', fontSize: 20 }}>We are sorry for any kind of inconvenience caused 🙏</Text>
      </Box>
      {data.alldays.map( (eachDay, index) => {
        return null;
        // <Box
        //     key={index}
        //     sx={{
        //       backgroundColor: eachDay.dayColor,
        //       pb: [55, 55, 55, 105]
        //     }}
        // >
        //   <Container>
        //     {index === 0 &&
        //     <Title title={data.title} paddingBottom='0px' textColor="yellow"/>}
        //     <Box>
        //       <Day day={eachDay} announcingSoon={data.announcingSoon}/>
        //     </Box>
        //   </Container>
        // </Box>
      })}
    </Box>
  )
};

export default Speakers;
