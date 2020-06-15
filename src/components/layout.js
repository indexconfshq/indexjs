/** @jsx jsx */
import { jsx } from 'theme-ui'

import Footer from '../components/Footer/Footer';
import './layout.css'
// import Header from './old-header'
import Header from './Header/Header'

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
            <Footer /> 
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
