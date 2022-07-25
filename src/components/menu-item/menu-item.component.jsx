import React from 'react'
import { useNavigate } from 'react-router-dom'

import "./menu-item.styles.scss"

const MenuItem = ({title, size, imageUrl, linkUrl }) => {

    const Navigate = useNavigate();
  return (
    <div className={`${size} menu-item`} onClick={() =>  Navigate(`/${linkUrl}`)} >
        <div className="backgroundImage" style={{
        backgroundImage:`url(${imageUrl})`
        }}></div>
        <div className="content">
            <h4 className="title">{title.toUpperCase()}</h4>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
  )
}

export default MenuItem