import React, { useState } from 'react';
import './Contact.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { animateScroll} from 'react-scroll';
import { faChevronCircleUp } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { Hidden, Grid } from '@material-ui/core';
import * as emailjs from 'emailjs-com';


function Contact() {

    const [dataToSubmit, setDataToSubmit] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const sendEmail = (e) => {
        e.preventDefault();

        const templateParams = {
          from_name: dataToSubmit.name,
          from_email: dataToSubmit.email,
          to_name: 'Kei Miyajima',
          subject: dataToSubmit.subject,
          message: dataToSubmit.message,
        };

        emailjs.send(
          'service_wn2d3fw',
          'template_ml70r1f',
           templateParams,
          'user_UKMMabACznoXNCAaiDRbn'
        )
        .then(res => {
            console.log('Email successfully sent!')
          })
        .catch(err => console.log('Oh well, you failed. Here some thoughts on the error that occured:', err));
        
        resetForm();
      };
    
      const resetForm = () => {
        setDataToSubmit({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      }

    const scrollToTop = () => {
        animateScroll.scrollToTop(); 
    };
    
    return (
        <div className='contact'>
                <Grid container spacing={1} className='contact__container'>
                    <Grid item xs={12} sm={3}>
                        <div className='contact__title'>
                            <h3>CONTACT</h3>
                            <hr />
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={9}>
                        <div className='contact__form'>
                            <div className='contact__form__subtitle'>
                                <FontAwesomeIcon icon={faEnvelope} className='contact__form__icon'/>
                                <h4>GET IN TOUCH</h4>
                            </div>
                            <form onSubmit={sendEmail}>
                                <div className='contact__form__item'>
                                    <input 
                                        type='text'
                                        name='name'
                                        placeholder='Name'
                                        required
                                        value={dataToSubmit.name}
                                        onChange={(e) => setDataToSubmit({...dataToSubmit, name: e.target.value})}/>
                                </div>
                                <div className='contact__form__item'>
                                    <input 
                                        type='email'
                                        name='email'
                                        placeholder='Email'
                                        required
                                        value={dataToSubmit.email}
                                        onChange={(e) => setDataToSubmit({...dataToSubmit, email: e.target.value})} />
                                </div>
                                <div className='contact__form__item'>
                                    <input
                                        type='text'
                                        name='subject'
                                        placeholder='Subject'
                                        value={dataToSubmit.subject}
                                        onChange={(e) => setDataToSubmit({...dataToSubmit, subject: e.target.value})}/>
                                </div>
                                <div className='contact__form__item'>
                                <textarea 
                                        type='text'
                                        name='message'
                                        rows='4'
                                        placeholder='Your Message...'
                                        required
                                        value={dataToSubmit.message}
                                        onChange={(e) => setDataToSubmit({...dataToSubmit, message: e.target.value})}/>
                                </div>
                                <div className="contact__form__btn">
                                     <button 
                                        type='submit'
                                        onClick={sendEmail}>
                                            SEND
                                    </button>
						 	    </div>
                            </form>
                        </div>
                    </Grid> 
                </Grid>
            <Hidden xsDown>
            <div className='contact__scroll'>
                <FontAwesomeIcon icon={faChevronCircleUp} onClick={scrollToTop}className='contact__scroll__icon'/>
            </div>
            </Hidden>
            <div className='credit'>
                <p>&copy; All credit goes to Tim Baker - Copyright 2017 Tim Baker</p>
            </div>
        </div>
    )
}

export default Contact
