import React, { useState, useReducer } from 'react';
import { Box, Button, Textarea } from 'theme-ui'
import FormHeading from '../Forms/formHeading';
import FormContainer from '../Forms/formContainer';
import closeSvg from '../../images/close.svg';
import Modal from 'react-modal';
import FormField from '../Forms/FormField';
import FormFieldLabel from '../Forms/FormFieldLabel';
import FormFeedback from '../Forms/FormFeedback'
import { SUBMISSION_STATES } from '../Forms/constants'
import firebase from 'gatsby-plugin-firebase'

Modal.setAppElement('#___gatsby');

const INITIAL_STATE = {
  name: '',
  email: '',
  subject: '',
  more: '',
}

const Form = ({ state, handleSubmit, onFieldChange }) => (

  <FormContainer handleSubmit={handleSubmit}>
    <FormHeading text="I want to speak" />
    <Box sx={{ mt: '25px' }}>
      <FormField
        required
        label="* How can we call you?"
        placeholder="name"
        value={state.name}
        onChange={onFieldChange('name')}
      />
      <FormField
        required
        label="* Where can we reach you"
        placeholder="email"
        value={state.email}
        onChange={onFieldChange('email')}
      />
      <Box>
        <FormFieldLabel {...{ label: 'Anything else?' }} />
        <Textarea
          placeholder="Tell us more"
          onChange={onFieldChange('more')}
          value={state.more}
          rows={3}
          sx={{ 
            fontFamily: 'text',
            fontSize: '18px',
            color: 'paragraph'
          }} 
        />
      </Box>
    </Box>
  </FormContainer>
);

const reducer = (state, { type, payload }) => {
  switch (type) {
      case 'name':
      case 'email':
      case 'subject':
      case 'more':
          return { ...state, [type]: payload }
      default:
          return state
  }
}

const Speaker = ({ buttonText }) => {

  /* Modal */
  const [isOpen, setOpenedSpeaker] = useState(false);
  
  const closeModalSpeaker = () => {
    setOpenedSpeaker(false);
  }
  /* End Modal */


  /* Form */
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)
  const [submissionState, setSubmissionState] = useState(
      SUBMISSION_STATES.NOT_SUBMITTED
  )

  const onFieldChange = (field) => ({ target }) => {
      dispatch({ type: field, payload: target.value })
  }

  const handleSubmit = async (event) => {
      event.preventDefault()
      setSubmissionState(SUBMISSION_STATES.SUBMITTING)

      try {
          if (process.env.NODE_ENV === 'production') {
              const db = firebase.firestore()
              await db.collection('contacts').add(state)
          }
          setSubmissionState(SUBMISSION_STATES.SUBMITTED_SUCCESS)
      } catch (e) {
          setSubmissionState(SUBMISSION_STATES.SUBMITTED_ERROR)
      }
  }
  /* End Form */

  return (
    <Box>
      <Button
          variant='secondary'
          onMouseDown={() => {setOpenedSpeaker(true)}}
      >
        {buttonText}
      </Button>
      <Modal
        isOpen={isOpen}
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
            maxHeight: ['86vh','86vh','86vh','86vh','100%'], 
            height: '100%',
            overflowY: ['scroll','scroll','auto','auto','hidden'],
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
          
          {submissionState !==
              SUBMISSION_STATES.SUBMITTED_SUCCESS && (
                <Form
                  {...{
                    state,
                    handleSubmit,
                    onFieldChange,
                  }}
                />
            )}
            {submissionState ===
              SUBMISSION_STATES.SUBMITTED_SUCCESS && (
                <FormFeedback
                  message="Thank's for reaching out."
                  message2="We will get back to you ASAP"
                />
            )}
        </Box>
      </Modal>
    </Box>
  )
};

export default Speaker;
