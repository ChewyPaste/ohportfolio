import React from 'react'
import PropTypes from 'prop-types'
import { MDXProvider } from '@mdx-js/react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Layout = ({ children }) => {
    return (
        <MDXProvider
            components={{
                p: (props) => <p {...props} className="mt-4" />,
            }}
        >
            <div
                className="min-h-full grid"
                style={{
                    gridTemplateRows: 'auto 1fr auto',
                }}
            >
                <Header className="flex items-center justify-between py-2 px-1 sm:py-6 sm:px-12 border-t-4 border-teal-400" />
                <main>{children}</main>
                <Footer />
            </div>
        </MDXProvider>
    )
}

Layout.propTypes = {
    children: PropTypes.any,
}

export default Layout
