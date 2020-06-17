import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import get from 'lodash/get';
import { Box } from 'theme-ui'
import Title from '../Title'
import Subtitle from '../Subtitle'
import Container from '../Container';
import SponsorSection from './SponsorSection';

const Sponsors = () => {

  const queryResults = useStaticQuery(graphql`
    query Sponsors {
      markdownRemark(frontmatter: { id: { eq: "sponsors" } }) {
        frontmatter {
          title
          subtitle
          goldenSponsors {
            name
            link
            logo {
              childImageSharp {
								fixed(width: 137, quality: 100) {
									...GatsbyImageSharpFixed_withWebp
								}
							}
            }
          }
          showOtherSponsors
          otherSponsors {
            name
            link
            logo {
              childImageSharp {
								fixed(width: 137, quality: 100) {
									...GatsbyImageSharpFixed_withWebp
								}
							}
            }
          }
        }
      }
    }
  `);

  const data = get(queryResults, 'markdownRemark.frontmatter');

  return (
    <Box
      id="sponsors"
      sx={{
        backgroundColor: 'blue',
        pb: '50px',
        mb: '-1px'
      }}
    >
      <Container>
        <Title title={data.title} textColor='yellow' paddingTop='50px' paddingBottom='27px' />
        <Subtitle subtitle={data.subtitle} paddingBottom='75px' />

        <SponsorSection sectionTitle="GOLDEN" sponsorSection={data.goldenSponsors} />
        {data.showOtherSponsors &&
          <SponsorSection sectionTitle="OTHER" sponsorSection={data.otherSponsors} hasMargin={true} />
        }
        
      </Container>
    </Box>
  )
};

export default Sponsors;