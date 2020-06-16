import React, { useEffect, useState } from 'react';
import { Box, Image } from 'theme-ui';
import Logo from '../../images/logo.svg'
import { motion } from 'framer-motion'
import Container from '../Container';
import RightSideDesktop from './RightSideDesktop';
import { AnchorLink } from "gatsby-plugin-anchor-links";
import RightSideMobile from './RightSideMobile';

const Header = () => {

  const [isMobile, setMobile] = useState(false);
  function checkMobile(x) {
    setMobile(x.matches);
  }

  useEffect(() => {
    const x = window.matchMedia('(max-width: 991px)');
    checkMobile(x); // Call listener function at run time
    x.addListener(checkMobile); // Attach listener function on state changes
    return () => {
      x.removeListener(checkMobile);
    };
  }, []);

  return (
    <Box>
      <motion.div
          initial={{ opacity: 0.2 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, type: 'tween' }}
      >
        <Box
          sx={{
            width: '100%',
            position: 'fixed',
            zIndex: 2,
            display: 'flex',
            justifyContent: 'flex-start',
            mt: [0,0,0,25],
            height: ['60px','60px','60px','100px'],
            
          }}
        > 
          <Container
            sx={{
              px: [0, 0, 0]
            }}
          >
            <Box
              sx={{
                position: 'relative',
                width: '100%'
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  maxWidth: ['50%','60%','60%','218px'],
                  width: '100%',
                  height: ['60px','60px','60px','100px'],
                  backgroundColor: 'blue',
                  clipPath: ['none','polygon(0 0, 65% 0, 100% 100%, 0% 100%)'],
                  display: 'flex',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  zIndex: 2,
                }}
              >
                <Box
                  sx={{
                    mx:['auto', 0]
                  }}
                >
                  <AnchorLink to="/#home">
                    <Image src={Logo} sx={{ width: ['45px','45px','45px', '70px'], height: ['45px','45px','45px','70px'], mx:['auto', 32] }} />
                  </AnchorLink>
                </Box>
              </Box>
              <Box>
                {isMobile ? <RightSideMobile /> : <RightSideDesktop />}
              </Box>
            </Box>
          </Container>
        </Box>
      </motion.div>
    </Box>
  )
}

export default Header;
