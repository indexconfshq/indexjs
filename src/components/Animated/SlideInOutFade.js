import React from 'react'
import { motion } from 'framer-motion'

// Depends on AnimatePresence wrapper in some cases

const SlideInOutFade = ({ children, id = 1, duration = 0.6 }) => {
    return (
        <motion.div
            key={id}
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 200, opacity: 0 }}
            transition={{ duration, type: 'tween' }}
        >
            {children}
        </motion.div>
    )
}

export default SlideInOutFade
