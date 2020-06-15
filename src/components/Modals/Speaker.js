import React, { useState } from 'react';
import { Box, Button, Textarea } from 'theme-ui'
import FormHeading from '../Forms/formHeading';
import FormContainer from '../Forms/formContainer';
import closeSvg from '../../images/close.svg';
import Modal from 'react-modal';
import FormField from '../Forms/field';
import FormFieldLabel from '../Forms/label';

Modal.setAppElement('#___gatsby');

const Speaker = ({ buttonText }) => {

  const [isOpenSpeaker, setOpenedSpeaker] = useState(false);
  
  const closeModalSpeaker = () => {
    setOpenedSpeaker(false);
  }
  return (
    <Box>
      <Button
          variant='secondary'
          onMouseDown={() => {setOpenedSpeaker(true)}}
      >
        {buttonText}
      </Button>
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
        <Box 
          sx={{ 
            width: ['100%','100%','100%', '550px', '550px', '846px'],
            height: ['86vh','86vh','86vh','100%'], 
            overflow:'scroll',
            background: 'white', 
            p:'15px' 
          }}
        >
          <Box
            sx={{
              float: 'right',
              cursor: 'pointer'
            }} 
            onMouseUp={() => {setOpenedSpeaker(false)}}
          >
            <img src={closeSvg} alt="X"/>
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
    </Box>
  )
};

export default Speaker;
