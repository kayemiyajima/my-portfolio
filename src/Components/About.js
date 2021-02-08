import React from 'react';
import './About.css';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";
import Pdf from '../img/KeiMiyajima.pdf';

function About() {
    return (
        <div className='about'>
            <Grid container spacing={1}>
                <Hidden xsDown> 
                <Grid item sm={3}>
                    <div className='about__photo'>
                        <img src={`${process.env.PUBLIC_URL}/images/Kei.jpg`} alt='me'/>
                    </div>
                </Grid>
                </Hidden>
                <Grid item xs={12} sm={9}>
                    <div className='about__text'>
                        <div className='about__text__aboutMe'>
                            <h3>ABOUT ME</h3>
                            <hr />
                            <p>I'm a Japanese Self-taught ReactJS Developer.<br />
                            Currently I'm focusing on learning MERN stack development and responsive design, seeking opportunities to work in the professional environment.<br />
                            <br />
                            I may not have a professional experience in this field yet, but I am eager to take any challenging opportunities to gain experience.<br />
                            Please refer to some projects I've done below.<br />
                            Appreciate any advice and offer.
                            </p>
                        </div>
                        <div className='about__text__contact'>
                            <div className='about__text__contact__info'>
                                <h3>CONTACT INFO</h3>
                                <hr />
                                <p>Kei Miyajima</p>
                                <div className='about__text__contact__info__container'>
                                    <div className='about__text__contact__info__container__address'>
                                        <div className='info'>
                                            <FontAwesomeIcon icon={faEnvelope} className='info__icon'/>
                                            <p>kaye.miyajima@gmail.com</p>
                                        </div>
                                        <div className='info'>
                                            <a href='https://api.whatsapp.com/send?phone=34640835895'>
                                                <FontAwesomeIcon icon={faWhatsapp} className='info__icon'/>
                                                <p> +34 640 83 58 95</p>
                                            </a>
                                        </div>
                                    </div>

                                    <div className='download'>
                                        <a href={Pdf} target='_blank' rel='noreferrer'>
                                            <FontAwesomeIcon icon={faFileDownload} className='download__icon'/>
                                            <p>Download Resume</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default About
