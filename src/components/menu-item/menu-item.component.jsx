import React from 'react'

import "./menu-item.styles.scss"

const MenuItem = ({title, size, imageUrl }) => {
  return (
    <div className={`${size} menu-item`}>
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