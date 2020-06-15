import React from 'react';
import { Box, Text, Link } from 'theme-ui';
import Img from 'gatsby-image'

const SponsorSection = ({ sectionTitle, sponsorSection, hasMargin = false }) => (
  <Box
    sx={{
      mt: hasMargin && '25px'
    }}
  >
    <Text sx={{
      fontFamily: 'subHeading',
      fontSize: '30px',
      lineHeight: '31px',
      letterSpacing: '0.1em',
      color: 'yellow',
    }}>
      {sectionTitle}
    </Text>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
    >
      {sponsorSection.map( sponsor => (
        <Box key={sponsor.name} sx={{ maxWidth: '250px', px: ['20px','20px','20px','20px','20px','50px'], mt: '30px'}}>
          <Link href={sponsor.link} target="_blank">
            <Img fixed={sponsor.logo.childImageSharp.fixed}  alt={sponsor.name} />
          </Link>
        </Box>
      ))}
    </Box>
  </Box>
);

export default SponsorSection;
