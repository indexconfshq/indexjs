import React, { useState } from 'react';
import { Box, Button, Text, Flex, Textarea } from 'theme-ui'
import get from 'lodash/get';
import { graphql, useStaticQuery } from 'gatsby';
import bigLaptop from '../images/big-laptop.png';
import closeSvg from '../images/close.svg';
import Container from './Container';
import FormHeading from './Forms/formHeading';
import FormContainer from './Forms/formContainer';
import Modal from 'react-modal';
import FormField from './Forms/field';
import FormFieldLabel from './Forms/label';

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

  const [isOpenSpeaker, setOpenedSpeaker] = useState(false);
  const [isOpenListener, setOpenedListener] = useState(false);

  const closeModalSpeaker = () => {
    setOpenedSpeaker(false);
  }
  const closeModalListener = () => {
    setOpenedListener(false);
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
              onMouseDown={() => {setOpenedSpeaker(true)}}
          >
            {data.button1}
            <Modal
              isOpen={isOpenSpeaker}
              onRequestClose={closeModalSpeaker}
              shouldCloseOnOverlayClick={true}
              shouldCloseOnEsc={true}
              style={{
                content : { 
                  background:'linear-gradient(315deg, #D23B68 18.45%, #F0D440 104.3%)',
                  padding: '5px',
                  top : '50%',
                  left : '50%',
                  right : 'auto',
                  bottom : 'auto',
                  marginRight : '-50%',
                  transform : 'translate(-50%, -50%)',
                  border: 0,
                },
                overlay: {
                  display:'block',
                  zIndex: 1,
                  backgroundColor: 'rgba(19, 27, 58, 0.6)',
                  backdropFilter: 'blur(20px)',
                }
              }}
            >
              <Box sx={{ width: ['100%', '550px' ,'846px'], height: '100%', background: 'white', p:'15px' }}>
                <Box
                  sx={{
                    float: 'right',
                    cursor: 'pointer'
                  }} 
                  onMouseUp={() => {setOpenedSpeaker(false)}}
                >
                  <img src={closeSvg}/>
                </Box>
                <FormContainer>
                  <FormHeading text="I want to speak" />
                  <Box sx={{ mt: '25px' }}>
                    <FormField
                          required
                          label="* How can we call you?"
                          placeholder="name"
                          value={null}
                      />
                      
                    <FormField
                        required
                        label="* Where can we reach you"
                        placeholder="email"
                        value={null}
                    />
                  <FormFieldLabel {...{ label: 'Anything else?' }} />
                      <Textarea
                          placeholder="Tell us more"
                          value={null}
                          rows={3}
                          color='black'
                      />
                  </Box>
                </FormContainer>
              </Box>
            </Modal>
          </Button>
          <Button
            variant='tertiary'
            onMouseDown={() => {setOpenedListener(true)}}
            sx={{
              mt: [20, 20, null ,null],
              ml: [null, null, 20, 20],
              mr: [null, 20, null, null]
            }}
          >
            {data.button2}
            <Modal
              isOpen={isOpenListener}
              onRequestClose={closeModalListener}
              shouldCloseOnOverlayClick={true}
              shouldCloseOnEsc={true}
              style={{
                content : { 
                  background:'linear-gradient(315deg, #D23B68 18.45%, #F0D440 104.3%)',
                  padding: '5px',
                  top : '50%',
                  left : '50%',
                  right : 'auto',
                  bottom : 'auto',
                  marginRight : '-50%',
                  transform : 'translate(-50%, -50%)',
                  border: 0,
                },
                overlay: {
                  display:'block',
                  zIndex: 1,
                  backgroundColor: 'rgba(19, 27, 58, 0.6)',
                  backdropFilter: 'blur(20px)',
                }
              }}
            >
              <Box sx={{ width: ['100%', '550px' ,'846px'], height: '100%', background: 'white', p:'15px' }}>
                <Box
                  sx={{
                    float: 'right',
                    cursor: 'pointer'
                  }} 
                  onMouseUp={() => {setOpenedListener(false)}}
                >
                  <img src={closeSvg}/>
                </Box>
                <FormContainer>
                  <FormHeading text="I want to enroll" />
                  <Box sx={{ mt: '25px' }}>
                    <FormField
                          required
                          label="* How can we call you?"
                          placeholder="name"
                          value={null}
                      />
                      
                    <FormField
                        required
                        label="* Where can we reach you"
                        placeholder="email"
                        value={null}
                    />
                  <FormFieldLabel {...{ label: 'Anything else?' }} />
                      <Textarea
                          placeholder="Tell us more"
                          value={null}
                          rows={3}
                          color='black'
                      />
                  </Box>
                </FormContainer>
              </Box>
            </Modal>
          </Button>
        </Box>
      </Flex>
    </Container>
    </Box>
  )
};

export default BigDate;