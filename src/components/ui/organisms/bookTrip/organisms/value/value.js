import React from 'react'
import "./value.scss"
const value = ({icon, title, children}) => {
    return (
        <div className="d-flex align-items-center my-3">
            <div>
                <img src={icon} alt={title}/>
            </div>
            <div className="right-section">
                <div className="title">{title}</div>
                <div className="desc">{children}</div>
            </div>
        </div>
    )
}

export default value
