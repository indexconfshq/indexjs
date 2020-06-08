import React, { useState } from 'react';
import { Box, Button, Text, Flex } from 'theme-ui'
import get from 'lodash/get';
import { graphql, useStaticQuery } from 'gatsby';
import bigLaptop from '../images/big-laptop.png';
import Container from './Container';
import FormHeading from './Forms/formHeading';
import Modal from 'react-modal';

Modal.setAppElement('#___gatsby');

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

  const [isOpen, setOpened] = useState(false);

  const closeModal = () => {
    console.log("should change false");
    setOpened(false);
    console.log(isOpen);
  }
  const openModal = () => {
    console.log("should change to true");
    setOpened(true);
    console.log(isOpen);
  }

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
            textAlign: ['center', 'left']
          }}
        >
          <Button
              variant='secondary'
              onMouseDown={() => {setOpened(true); console.log("I want to speak click: ", isOpen)}}
          >
            {data.button1}
            <Modal
              isOpen={isOpen}
              onRequestClose={closeModal}
              shouldCloseOnOverlayClick={true}
              shouldCloseOnEsc={true}
              style={{
                content : { 
                  top : '50%',
                  left : '50%',
                  right : 'auto',
                  bottom : 'auto',
                  marginRight : '-50%',
                  transform : 'translate(-50%, -50%)',
                },
                overlay: {
                  display:'block',
                  zIndex: 1
                }
              }}
            >
              <h2>Hello</h2>
              <Button onMouseUp={() => {setOpened(false); console.log("inside modal click: ", isOpen)}}>close</Button>
              <div>I am a modal</div>
              <form>
                <input />
                <button>tab navigation</button>
                <button>stays</button>
                <button>inside</button>
                <button>the modal</button>
              </form>
            </Modal>
          </Button>
          <Button
            variant='tertiary'
            sx={{
              mt: [20, 20, null ,null],
              ml: [null, null, 20, 20],
              mr: [null, 20, null, null]
            }}
          >
            {data.button2}
          </Button>
        </Box>
      </Flex>
    </Container>
    </Box>
  )
};

export default BigDate;