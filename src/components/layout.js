/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'

import './layout.css'

const Layout = ({ children }) => {
    return (
        <div
            sx={{
                display: 'flex',
                flexDirection: 'column',
                // set this to `minHeight: '100vh'` for full viewport height
                minHeight: 256,
            }}
        >
            <header
                sx={{
                    width: '100%',
                }}
            >
                Header
            </header>
            <main
                sx={{
                    width: '100%',
                    flex: '1 1 auto',
                }}
            >
                { children }
            </main>
            <footer
                sx={{
                    width: '100%',
                }}
            >
                Footer
            </footer>
        </div>
    )
}

export default Layout
