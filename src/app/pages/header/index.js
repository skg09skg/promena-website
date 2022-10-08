import React, { useState } from 'react';
import logo from '../../../assets/images/logo.png';
import './index.scss';
import { HashLink } from 'react-router-hash-link';
import { useHistory } from 'react-router';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';


const Header = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false)
    const history = useHistory();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleClickScroll = () => {
        history.push('/')
        window.scrollTo(0, 0);
    };

    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById('navbar').style.top = '0';
        } else {
            document.getElementById('navbar').style.top = '-90px';
        }
        prevScrollpos = currentScrollPos;
    }


    return (
        <div>
            <div className='header fixed-top fixed-header' id='navbar'>
                <nav className='navigation'>
                    <a className='header-name'>
                        <img src={logo} alt='' />
                    </a>
                    <button onClick={() => {
                        setIsNavExpanded(!isNavExpanded);
                    }}
                        className='hamburger'>
                        <svg xmlns='http://www.w3.org/2000/svg'
                            className='h-5 w-5' viewBox='0 0 20 20' fill='white'>
                            <path fillRule='evenodd'
                                d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z'
                                clipRule='evenodd' />
                        </svg>
                    </button>
                    <div className={
                        isNavExpanded ? 'header-menu expanded' : 'header-menu'
                    }>
                        <ul>
                            <li><HashLink smooth to='#home' onClick={handleClickScroll} style={{ cursor: 'pointer' }} className='nav-link'>
                                Home
                            </HashLink> </li>
                            <li><HashLink smooth to='#about-us' onClick={handleClickScroll} style={{ cursor: 'pointer' }} className='nav-link'>
                                About
                            </HashLink> </li>
                            <li> <HashLink smooth to='#services' onClick={handleClickScroll} style={{ cursor: 'pointer' }} className='nav-link nav-link-services'>
                                Services
                                <ul className='nav__submenu'>
                                    <li className='nav__submenu-item '>
                                        <a>Our Company</a>
                                    </li>
                                    <li className='nav__submenu-item '>
                                        <a>Our Team</a>
                                    </li>
                                    <li className='nav__submenu-item '>
                                        <a>Our Portfolio</a>
                                    </li>
                                </ul>
                                {/*<Button
                                    id='basic-button'
                                    aria-controls={open ? 'basic-menu' : undefined}
                                    aria-haspopup='true'
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick}
                                >
                                    Services
                                </Button>
                                <Menu
                                    id='basic-menu'
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    MenuListProps={{
                                        'aria-labelledby': 'basic-button',
                                    }}
                                >
                                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                                    <MenuItem onClick={handleClose}>My account</MenuItem>
                                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                                </Menu>*/}
                            </HashLink> </li>
                            <li><HashLink smooth to='#careers' onClick={handleClickScroll} style={{ cursor: 'pointer' }} className='nav-link'>
                                Careers
                            </HashLink> </li>
                            <li><HashLink smooth to='#training' onClick={handleClickScroll} style={{ cursor: 'pointer' }} className='nav-link'>
                                Training
                            </HashLink> </li>
                            <li><HashLink smooth to='#contact-us' onClick={handleClickScroll} style={{ cursor: 'pointer' }} className='nav-link'>
                                Contact Us
                            </HashLink> </li>
                            <button className='header-button'>Get Quote</button>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Header;