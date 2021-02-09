import React from 'react'
import { Link } from 'gatsby'
import { motion } from 'framer-motion'
import { navLinks, siteShortTitle } from '../config'

const Header = () => {
    const { menu } = navLinks
    const headerVariants = {
        hidden: {
            opacity: 0,
            y: -10,
        },
        display: {
            opacity: 1,
            y: 0,
        },
    }

    return (
        // <header className="flex items-center justify-between py-6 px-12 border-t-4 border-indigo-400">
        <motion.header
            className="flex items-center justify-between py-2 px-1 sm:py-6 sm:px-12 border-t-4 border-indigo-400"
            variants={headerVariants}
            initial="hidden"
            animate="display"
        >
            <Link to="/" aria-label="home">
                <h1 className="text-3xl font-bold">
                    {siteShortTitle}
                    <span className="text-indigo-400">.</span>
                </h1>
            </Link>
            <nav className="flex items-center">
                {menu.map(({ name, url }, key) => {
                    return (
                        <Link
                            key={key}
                            to={url}
                            className="text-lg font-bold px-3 rounded hover:bg-indigo-200"
                        >
                            {name}
                        </Link>
                    )
                })}
            </nav>
        </motion.header>
        // </header>
    )
}

export default Header
