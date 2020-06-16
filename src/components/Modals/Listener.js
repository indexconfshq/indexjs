import React, { useState } from 'react';
import { Box, Button, Textarea } from 'theme-ui'
import FormHeading from '../Forms/FormHeading';
import FormContainer from '../Forms/FormContainer';
import closeSvg from '../../images/close.svg';
import Modal from 'react-modal';
import FormField from '../Forms/FormField';
import FormFieldLabel from '../Forms/FormFieldLabel';
import FormFeedback from '../Forms/FormFeedback'

Modal.setAppElement('#___gatsby');

const Listener = ({ buttonText = 'Enroll', insideModal = false }) => {

  const [isOpenListener, setOpenedListener] = useState(false);
  
  const closeModalListener = () => {
    setOpenedListener(false);
  }

  return (  
    <Box>
        <Box sx={{ textAlign: insideModal ? ['right','right','right','left'] : '' }}>
        <Button
          variant='tertiary'
          onMouseDown={() => {setOpenedListener(true)}}
          sx={{
            mt: insideModal ? 20 : [15, 15, 0, 0, 0 ,0],
            ml: insideModal ? 0 : [0, 0, 0, 20, 20, 20],
            mr: insideModal ? 0 : [0, 0, 20, 0, 0, 0],
          }}
        >
          {buttonText}
        </Button>
      </Box>
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
        <Box 
          sx={{ 
            width: ['100%','100%','100%', '550px', '550px', '846px'], 
            height: ['86vh','86vh','86vh','100%'], 
            overflow:'scroll',
            background: 'white', 
            p:'15px',
          }}
        >
          <Box
            sx={{
              float: 'right',
              cursor: 'pointer'
            }} 
            onMouseUp={() => {setOpenedListener(false)}}
          >            
            <img src={closeSvg} alt="X"/>
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
    </Box>
  )
};

export default Listener;
