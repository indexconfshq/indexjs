import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import get from 'lodash/get';
import { Box, Link, Text } from 'theme-ui'
import Img from 'gatsby-image';
import Title from '../Title'
import Subtitle from '../Subtitle'
import Container from '../Container';
import SponsorSection from './SponsorSection';

const Footer = () => {

  const queryResults = useStaticQuery(graphql`
    query Footer {
      markdownRemark(frontmatter: { id: { eq: "footer" } }) {
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
      sx={{
        backgroundColor: 'blue',
        pb: '25px'
      }}
    >
      <Container>
        <Title title={data.title} textColor='yellow' paddingTop='17px' paddingBottom='27px' />
        <Subtitle subtitle={data.subtitle} paddingBottom='75px' />

        <SponsorSection sectionTitle="GOLDEN" sponsorSection={data.goldenSponsors} />
        <SponsorSection sectionTitle="OTHER" sponsorSection={data.otherSponsors} hasMargin={true} />
        
      </Container>
    </Box>
  )
};

export default Footer;