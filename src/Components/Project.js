import React from 'react';
import './Project.css';
import { Button } from '@material-ui/core';

function Project() {
    return (
        <div className='project'>
            <div className='project__title'>
                <h3>PROJECT</h3>
                <hr />
            </div>
            <div className='project__container'>
                <div className='project__container__content'>
                    <div className='project__container__content__info'>
                        <h4>Airbnb clone</h4>
                        <p>React.js</p>
                    </div>
                    <div className='project__container__content__thumbnail'>
                        <Button href='https://airbnb-clone-project-d02c8.web.app/' target='_blank' rel='noopener noreferrer'>
                            <img src={`${process.env.PUBLIC_URL}/images/airbnb.png`} alt='airbnb' />
                        </Button>
                    </div>
                </div>

                <div className='project__container__content'>
                    <div className='project__container__content__info'>
                        <h4>WhatsApp chat</h4>
                        <p>MERN, pusher + google auth</p>
                    </div>
                    <div className='project__container__content__thumbnail'>
                        <Button href='https://whatsapp-mern-18ba6.web.app/' target='_blank' rel='noopener noreferrer'>
                            <img src={`${process.env.PUBLIC_URL}/images/whatsapp-mern.png`} alt='whatsapp' />
                        </Button>
                    </div>
                </div>

                <div className='project__container__content'>
                    <div className='project__container__content__info'>
                        <h4>Youtube clone</h4>
                        <p>MERN + Multer</p>
                    </div>
                    <div className='project__container__content__thumbnail'>
                        <Button href='https://github.com/kayemiyajima/Mern-stack-Youtube-clone' target='_blank' rel='noopener noreferrer'>
                            <img src={`${process.env.PUBLIC_URL}/images/youtube.png`} alt='youtube'/>
                        </Button>
                    </div>
                </div>

                <div className='project__container__content'>
                    <div className='project__container__content__info'>
                        <h4>Photo Upload App</h4>
                        <p>MERN</p>
                    </div>
                    <div className='project__container__content__thumbnail'>
                        <Button href='https://mern-photo-upload-app.netlify.app/' target='_blank' rel='noopener noreferrer'>
                            <img src={`${process.env.PUBLIC_URL}/images/memories.png`} alt='memories'/>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project
