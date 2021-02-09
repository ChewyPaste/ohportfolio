import React from 'react'

import IconGithub from './GitHub'
import IconLinkedin from './Linkedin'

const Icon = ({ name, color }) => {
    switch (name.toLowerCase()) {
        case 'github':
            return <IconGithub color={color} />
        case 'linkedin':
            return <IconLinkedin color={color} />
        default:
            return null
    }
}

export default Icon
