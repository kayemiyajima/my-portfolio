import React from 'react';
import './Home.css';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";
import { Hidden } from '@material-ui/core';

export default function Home() {
    return (
        <div className='home'>
            <div className='home__banner'>
                <h1>I'm KEI MIYAJIMA</h1>
                <div className='home__title__comment'>
                    <p>
                        I'm a Barcelona based <span className='home__title__comment__span'>Self-Tought ReactJS Developer</span>.
                        <br />
                        Trying to improve my skills day by day.
                    </p>
                </div>
            </div>
            <div className='home__social'>
                <a href='https://www.facebook.com/kaye.miyajima'target='_blank' rel='noopener noreferrer'>
                    <FontAwesomeIcon icon={faFacebook} className='home__social__icon'/>
                </a>
                <a href='https://github.com/kayemiyajima/' target='_blank' rel='noopener noreferrer'>
                    <FontAwesomeIcon icon={faGithub} className='home__social__icon' />
                </a>
            </div>

            <Hidden xsDown>
            <div className='home__scroll'>
                <Link
                    activeClass='true'
                    to='about'
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}>
                        <FontAwesomeIcon icon={faChevronCircleDown} className='home__scroll__icon'/>
                </Link>
            </div>
            </Hidden>

        </div>
    )
}
