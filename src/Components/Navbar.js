import React from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';
import { Hidden } from '@material-ui/core';
import SmallMenu from './SmallMenu';

function Navbar() {
    return (
        <nav className='navbar' id='navbar'>
            <div className='navbar__container'>
                <Hidden smUp>
                    <SmallMenu />
                </Hidden>
                <Hidden only='xs'>
                    <div className='navbar__container__item'>
                        <Link
                            activeClass='active'
                            to='home'
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}>
                            <p>HOME</p>
                        </Link>
                    </div>
                    <div className='navbar__container__item'>
                        <Link
                            activeClass='active'
                            to='about'
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}>
                                <p>ABOUT</p>
                        </Link>
                    </div>
                    <div className='navbar__container__item'>
                        <Link
                            activeClass='active'
                            to='skill'
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}>
                                <p>SKILL</p>
                        </Link>
                    </div>
                    <div className='navbar__container__item'>
                        <Link
                            activeClass='active'
                            to='project'
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}>
                                <p>PROJECT</p>
                        </Link>
                    </div>
                    <div className='navbar__container__item'>
                        <Link
                            activeClass='active'
                            to='contact'
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}>
                                <p>CONTACT</p>
                        </Link>
                    </div>
                </Hidden>
            </div>
        </nav>
    )
}

export default Navbar
