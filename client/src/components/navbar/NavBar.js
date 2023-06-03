import React, {useState} from 'react'
import './NavBar.css';
import { Link } from 'react-router-dom';
import {ChevronContract, ChevronBarExpand} from 'react-bootstrap-icons';


function NavBar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to="/" className='navbar-home'>Title/Logo</Link>
                    <Link to="/#" className='navbar-link'>NavBar item</Link>
                    <Link to="/#" className='navbar-link'>NavBar item</Link>
                    <Link to="/#" className='navbar-link'>NavBar item</Link>

                    <div className='menu-icon-mobile' onClick={handleClick}>
                        {click ? <ChevronContract/> : <ChevronBarExpand/>}
                    </div>

                </div>
            </nav>
        </>
    )
}

export default NavBar