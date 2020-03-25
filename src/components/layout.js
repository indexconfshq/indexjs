/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'

import './layout.css'
import Header from './header'

const Layout = ({ children }) => {
    return (
        <div
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
            }}
        >
            <Header />
            <main
                sx={{
                    width: '100%',
                    flex: '1 1 auto',
                }}
            >
                {children}
            </main>
            {/*<footer*/}
            {/*    sx={{*/}
            {/*        width: '100%',*/}
            {/*    }}*/}
            {/*>*/}
            {/*    @indexconf*/}
            {/*</footer>*/}
        </div>
    )
}

export default Layout
