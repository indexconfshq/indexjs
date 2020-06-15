import React, {useState} from 'react';
import { Box, Text, Button} from 'theme-ui';
import Modal from 'react-modal';
import closeSvg from '../../images/close.svg';
import Img from 'gatsby-image';


Modal.setAppElement('#___gatsby');

const Places = ({ places, knowTheCity }) => {


  const [isOpen, setOpened] = useState(false);

  const closeModal = () => {
    setOpened(false);
  }

  return (
    <Box>
      <Button 
        onMouseDown={() => {setOpened(true)}}
        variant='primary'
        sx={{
          width: '100%',
          fontFamily: 'subHeading',
          fontSize: '20px',
          lineHeight: '21px',
        }}
      >
        {knowTheCity}
      </Button>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
        style={{
          content : { 
            background:'none',
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
            width: ['100%','100%','100%', '100%', '100%', '100%', '100%'], 
            height: ['86vh','86vh','86vh', '100vh'], 
            overflowY:'scroll',
            background: '#f8cd00', 
            mx:'auto',
            py:[15, 15, 15, 40]
          }}
        >
          <Box
            sx={{
              float: 'right',
              cursor: 'pointer',
              px:[15, 15, 15, 80],
            }} 
            onMouseUp={() => {setOpened(false)}}
          >
            <img src={closeSvg} alt="X"/>
          </Box>
          <Box>
            <Text
              sx={{
                pt: 0,
                pb: 0,
                fontFamily: 'heading',
                fontSize: 51,
                textAlign: 'left',
                color: 'blue',
                px:[15, 15, 15, 80],
              }}
            >
              {knowTheCity}
            </Text>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'flex-start',
                backgroundColor: 'white',
              }}
            >
              {places.map( (place, index) => (
                <Box
                  sx={{
                    width: '100%',
                    mt: index === 0 && '-1px' ,
                    mb: index === 2 && '-1px' ,
                    clipPath:  ['none','none','none','none','none',index === 0 ? 'polygon(0 0, 100% 0, 100% 27%, 80% 100%, 0 100%)' : index === 2 ? 'polygon(20% 0, 100% 0, 100% 100%, 0 100%, 0 80%)' : 'none'],
                    backgroundColor: index === 1 ? 'white' : 'primary'
                  }}
                >
                  <Box 
                    key="place.name"
                    sx={{
                      backgroundColor: index % 2 !== 0 ? 'lightestGray' : 'none',
                      ml: [0, 0, 0, 15, 15, 60 + (index * 120)],
                      mr: [0, 0, 0, 15],
                      pl: [15, 15, 15, 15, 15, 80],
                      pr:[15, 15, 15, 15, 15, 80],
                      py:[15, 15, 15, 50],
                      display: 'flex',
                      flexWrap: 'wrap',
                      width: ['100%','100%','100%','100%','100%','75%'],
                    }}
                  >
                    <Box sx={{width:197, mx:['auto','auto','auto',0], height: '100%', textAlign: ['center','center','center','left']}}>
                      <Img style={{ width: 197, height: 130 }} fixed={place.image.childImageSharp.fixed} />
                    </Box>
                    <Box
                      sx={{
                        pl: 20,
                        pr: 20,
                        mt: [20, 20, 20, 0],
                        hyphens: 'auto',
                        width: ['100%','100%','100%','60%','70%','70%'],
                        mx:['auto','auto','auto',0], 
                        textAlign: ['center','center','center','left'],
                      }}
                    >
                      <Text
                        sx={{
                          fontFamily: 'subHeading',
                          fontSize: '40px',
                          lineHeight: '34px',
                          color: 'pink'
                        }}
                      >
                        {place.name}
                      </Text>
                      <Text
                        sx={{
                          fontFamily: 'subHeading',
                          fontSize: '30px',
                          lineHeight: '31px',
                          color: 'blue',
                          mt: '10px',
                        }}
                      >
                        {place.year}
                      </Text>

                      <Text
                        sx={{
                          maxWidth: '777px',
                          fontFamily: 'text',
                          fontSize: '20px',
                          lineHeight: '25px',
                          color: 'paragraph',
                          mt: '32px',
                          textAlign: ['justify','justify','justify','left']
                        }}
                      >
                        &emsp;{place.description}
                      </Text>
                    </Box>
                  </Box>
                </Box>
                
              ))}
            </Box>
          </Box>
        </Box>
      </Modal>
    </Box>
  )
}

export default Places;