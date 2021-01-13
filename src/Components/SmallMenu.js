import React, { useState } from 'react';
import './SmallMenu.css';
import { Link } from 'react-scroll';
import { Button, Menu, MenuItem } from '@material-ui/core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";


function SmallMenu() {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (e) => {
      setAnchorEl(e.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
        <div className='smallMenu'>
            <Button aria-controls="smallMenu" aria-haspopup="true" onClick={handleClick}>
                <FontAwesomeIcon icon={faBars} className='smallMenu__icon'/>
            </Button>
            <Menu
                id="smallMenu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem
                    style={{height: '18px', width: '150px', backgroundColor: '#383838'}}>
                <div className='smallMenu__menuItem'>
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
                </MenuItem>
                <MenuItem style={{height: '18px', width: '150px', backgroundColor: '#383838'}}>
                <div className='smallMenu__menuItem'>
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
                </MenuItem>
                <MenuItem style={{height: '18px', width: '150px', backgroundColor: '#383838'}}>
                <div className='smallMenu__menuItem'>
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
                </MenuItem>
                <MenuItem style={{height: '18px', width: '150px', backgroundColor: '#383838'}}>
                <div className='smallMenu__menuItem'>
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
                </MenuItem>
                <MenuItem style={{height: '18px', width: '150px', backgroundColor: '#383838'}}>
                <div className='smallMenu__menuItem'>
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
                </MenuItem>
            </Menu>
        </div>
    )
}

export default SmallMenu
