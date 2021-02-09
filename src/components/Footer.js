import React from 'react'
import { Link } from 'gatsby'
import Icon from './icons/index'
import { socialMedia, siteShortTitle } from '../config/index'

const Footer = () => {
    return (
        <footer className="flex items-center justify-between  bg-indigo-400 py-6 px-12">
            <Link to="/" aria-label="home">
                <h1 className="text-3xl font-bold text-white">
                    {siteShortTitle}
                </h1>
            </Link>
            <div className="flex space-x-8">
                {socialMedia.map(({ name, url }, key) => {
                    return (
                        <a
                            className=" ml-8 w-8 h-6"
                            href={url}
                            key={key}
                            alt={`${name} icon`}
                        >
                            <Icon name={name} color="white" />
                        </a>
                    )
                })}
            </div>
        </footer>
    )
}

export default Footer
