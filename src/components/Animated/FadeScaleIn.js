import React from 'react'
import { motion } from 'framer-motion'

const FadeScaleIn = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0.2, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0.2, scale: 0.7 }}
            transition={{ duration: 0.6, type: 'tween' }}
        >
            {children}
        </motion.div>
    )
}

export default FadeScaleIn
