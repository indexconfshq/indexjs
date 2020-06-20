import React, { useState } from 'react'
import SocialIcon from '../socialIcon'
import Modal from 'react-modal';
import HeaderLink from './HeaderLink';
import Logo from '../../images/logo.svg'
import closeSvg from '../../images/close.svg';
import { Box, Image } from 'theme-ui';
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { FaBars } from 'react-icons/fa';

Modal.setAppElement('#___gatsby');

const RightSideMobile = ({ isMobile = false }) => {

  const [isOpen, setOpened] = useState(false);

  const closeModal = () => {
    setOpened(false);
  }

  return (
    <Box
      sx={{ 
        boxShadow: '0px 5px 31px -2px rgba(0,0,0,0.75)',
        position: 'absolute',
        width: ['50%','100%'],
        right: ['0', 'auto'],
        height: ['60px','60px','60px','100px'],
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
      }}
    >
      <Box 
        onClick={() => {setOpened(true)}}
        sx={{
          mx: ['auto', '32px'],
          p: ['15px','15px','15px','25px'],
          backgroundColor: 'blue',
          borderRadius: '50%',
          display: 'flex',
        }}
      >
        <FaBars />
      </Box>
      <Modal
        isOpen={isMobile}
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
        style={{
          content : { 
            background: 'linear-gradient(315deg, #D23B68 18.45%, #F0D440 104.3%)',
            padding: '5px',
            top : '50%',
            left : '50%',
            right : 'auto',
            bottom : 'auto',
            marginRight : '-50%',
            transform : 'translate(-50%, -50%)',
            border: 0,
            width: '100%',
            transition: 'background 0.200s ease,padding 0.200s ease,top 0.200s ease,left 0.200s ease,right 0.200s ease,bottom 0.200s ease,margin-right 0.200s ease,transform 0.200s ease,border 0.200s ease,width 0.200s ease'
          },
          overlay: {
            display: 'block',
            zIndex: isOpen ? 1 : 0,
            opacity: isOpen ? 1 : 0,
            backgroundColor: 'rgba(19, 27, 58, 0.6)',
            transition: 'opacity 0.200s ease, z-index 0.200s ease',
          }
        }}
      >
        <Box
          sx={{
            width: '100%',
            right: ['0', 'auto'],
            height: '100vh',

          }}
        >
          <Box
            sx={{
              px: 30,
              py: 80,
            }}
          >
            <Box
              sx={{
                float: 'right',
                cursor: 'pointer',
                outline: 'none',
                '-webkit-tap-highlight-color': 'transparent',
              }} 
              onClick={() => {setOpened(false)}}
            >
              <Image src={closeSvg} alt="X"/>
            </Box>
            <Box 
              onClick={() => {setOpened(false)}}
            >
              <AnchorLink to="/#home">
                <Image src={Logo} sx={{ width: '70px', height: '70px' }} />
              </AnchorLink>
            </Box>
            <Box onClick={() => {setOpened(false)}} sx={{ mt: '30px' }}>
              <HeaderLink title="Know Us" link="/#know-us" isMobile={isOpen} />
              <HeaderLink title="Speakers" link="/#speakers" isMobile={isOpen} />
              <HeaderLink title="Location" link="/#location" isMobile={isOpen} />
              <HeaderLink title="Sponsors" link="/#sponsors" isMobile={isOpen} />
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'nowrap',
                justifyContent: 'flex-start',
                alignItems: 'center'
              }}
            >
              <SocialIcon variant="instagramMobile" isMobile={isOpen} />
              <SocialIcon variant="twitterMobile" isMobile={isOpen} />
              <SocialIcon variant="facebookMobile" isMobile={isOpen} />
            </Box>
          </Box>
        </Box>
      </Modal>
    </Box>
  )
}

export default RightSideMobile;
