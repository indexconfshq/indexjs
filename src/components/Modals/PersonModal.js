import React, { useState } from 'react';
import { Box, Button } from 'theme-ui'
import closeSvg from '../../images/close.svg';
import Modal from 'react-modal';
import Info from '../PersonCard/Info';
import Photo from '../PersonCard/Photo';
import SpeakerInfo from '../PersonCard/SpeakerInfo';

Modal.setAppElement('#___gatsby');

const PersonModal = ({ person, presentationDay }) => {
  
  const [isOpen, setOpened] = useState(false);

  const closeModal = () => {
    setOpened(false);
  }

  return (
    <Box>
      <Button 
        onMouseDown={() => {setOpened(true)}}
        variant='quaternary'
      >
        KNOW MORE
      </Button>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
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
            display: 'block',
            zIndex: isOpen ? 1 : 0,
            opacity: isOpen ? 1 : 0,
            backgroundColor: 'rgba(19, 27, 58, 0.6)',
            backdropFilter: 'blur(20px)',
            transition: 'opacity 0.200s ease, z-index 0.200s ease, backdrop-filter 0.200s ease',
          }
        }}
      >
        <Box 
          sx={{ 
            width: ['100%','100%','100%', '550px', '550px', '846px'], 
            maxHeight: ['86vh','86vh','86vh','86vh','98vh'], 
            height: '100%',
            overflowY: ['scroll','scroll','auto'],
            background: 'white', 
            px:[15, 15, 15, 30],
            py:[15, 15, 15, 40]
          }}
        >
          <Box
            sx={{
              float: 'right',
              cursor: 'pointer'
            }} 
            onMouseUp={() => {setOpened(false)}}
          >
            <img src={closeSvg} alt="X"/>
          </Box>
          <Box>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
              }}
            >
              <Photo photo={person.photo} name={person.name} insideModal={true}  />
              <Info person={person} insideModal={true}/>
            </Box>
            <Box
              sx={{
                mt: [15, 15, 15, 15, 60]
              }}
            >
              <SpeakerInfo person={person} presentationDay={presentationDay} />
            </Box>
          </Box>
        </Box>
      </Modal>
    </Box>
  )
};

export default PersonModal;
