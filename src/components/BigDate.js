import React from 'react';
import { Box, Text, Flex } from 'theme-ui'
import get from 'lodash/get';
import { graphql, useStaticQuery } from 'gatsby';
import bigLaptop from '../images/big-laptop.png';
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
        }
      }
    }
  `);

  const data = get(queryResults, 'markdownRemark.frontmatter');

  return(
    
    <Box
      sx={{
        width: '100% !important',
        backgroundSize: 'cover',
        backgroundRepeat: 'none',
        backgroundImage: 
        `linear-gradient(90deg, #131B3A 0%, rgba(196, 196, 196, 0) 100%), url(${bigLaptop})`
      }}
    >
    <Container>
      <Flex
          sx={{
              py: [100, 150],
              alignItems: 'center',
              justifyContent: ['center', 'flex-start'],
              backgroundRepeat: 'no-repeat',
              maxWidth: 630,
              flexWrap: 'wrap'
          }}
      >
        <Box
          sx={{
            textShadow: '2px 4px 4px #00B8CC',
            fontFamily: 'heading',
            fontSize: [100, 150, 190], 
            lineHeight: ['bigDate.small', 'bigDate.medium', 'bigDate.large'],
            textAlign: ['center', 'left']
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
            fontSize: [29, 40], 
            lineHeight: ['31px', '42px'],
            mt: [40, 20],
            textAlign: ['center', 'left']
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
            mt: '40px',
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
    </Box>
  )
};

export default BigDate;