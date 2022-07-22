import React from "react";
import "./homepage.styles.scss"

const HomePage = () => {
    return(
    <div className="homepage">
        <div className="directory-menu">
            <div className="menu-item">
                <div className="content">
                    <h4 className="title">HATS</h4>
                    <span className="subtitle">SHOP NOW</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h4 className="title">JACKETS</h4>
                    <span className="subtitle">SHOP NOW</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h4 className="title">SNEAKERS</h4>
                    <span className="subtitle">SHOP NOW</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h4 className="title">MEN</h4>
                    <span className="subtitle">SHOP NOW</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h4 className="title">WOMEN</h4>
                    <span className="subtitle">SHOP NOW</span>
                </div>
            </div>
        </div>
    </div>
    )
}

export default HomePage; 