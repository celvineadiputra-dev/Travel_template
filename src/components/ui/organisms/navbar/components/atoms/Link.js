import React from 'react'

const Link = ({active = false, menu}) => {
    return (
        <span className={`nav-link mx-4 ${active ? 'active' : ''}`}>
            {menu}
        </span>
    )
}

export default Link
