import React from 'react'
import { Link } from 'react-router-dom'
import LoginControl from './LoginControl'

const Header = () => {
    const name = {
        color: "white",
        textDecoration: "none"
    }
    const align = {
        textAlign: "left",
        margin: "0px 100px", 
    }

    const listItemStyle = {
        margin: "30px 30px"

    }

    return (
        <div className="header-container">
            <div className="header-wrap">
            <ul style={align}>
                <li style={listItemStyle}>
                <Link to="/Home" style={name}>  <img
                        style={{ width: "154px", height: "20px" }}
                        src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
                        alt="로고"
                    /></Link>
                </li>
                <li style={listItemStyle}>
                    <Link to="/Movies" style={name}>Movies</Link>
                </li>
                <li style={listItemStyle}>
                    <Link to="/TV" style={name}>TV</Link>
                </li>
                <li style={listItemStyle}>
                    <Link to="/Celebirity" style={name}>Celebirity</Link>
                </li>
                <li style={listItemStyle}>
                    <LoginControl/>
                </li>
            </ul>
            </div>
        </div>
    )
}

export default Header;