import React, { useEffect, useState } from 'react';
import './Nav.css';



function Nav() {

    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 240) {
                handleShow(true);
            } else handleShow(false);
        });
        return() => {
            window.removeEventListener("scroll");
        };
    }, []);


    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img className="nav_logo"
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
            alt="netflix logo"
            />
            <img className="nav_avatar"
            src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
            alt="netflix avatar"
            />
        </div>
    )
}

export default Nav
