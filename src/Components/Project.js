import React from 'react';
import './Project.css';
import Grid from '@material-ui/core/Grid';

function Project() {
    return (
        <div className='project'>
            <div className='project__title'>
                <h3>PROJECT</h3>
                <hr />
            </div>
            <div className='project__container'>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <div className='project__container__info'>
                            <h4>WhatsApp clone MERN</h4>
                            <p>MERN stack + pusher.<br />
                            Tried to imitate a WhatsApp design for the frontend, with a chat function for the realtime database practice.<br />
                            The frontend is created with <strong>React.js</strong>, the backend is buit with <strong>Node.js</strong>, <strong>MongoDB</strong>, <strong>Mongoose</strong>, <strong>Express.js</strong>, and <strong>pusher</strong> for the realtime database functionality.<br />
                            Also the google authentication system is implemented to understand its function.<br />
                            </p>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <div className='project__container__thumbnail'>
                            <a href='https://whatsapp-mern-18ba6.web.app/'>
                                <img src={`${process.env.PUBLIC_URL}/images/whatsapp-mern.png`} alt='whatsapp' />
                            </a>
                        </div>
                    </Grid>
                    <hr />

                    <Grid item xs={12} sm={6}>
                        <div className='project__container__info' target='_blank' rel='noopener noreferrer'>
                            <h4>Youtube clone MERN</h4>
                            <p>MERN stack <br />
                            It has register, login, logout and like video functios and also able to upload videos so far.<br />
                            The frontend with <strong>React.js</strong> and Material-UI, the backend with <strong>Node.js</strong>, <strong>MongoDB</strong>, <strong>Mongoose</strong>, <strong>Express.js</strong>.<br />
                            For the uploading video system, Multer and ffmpeg are used.<br />
                            </p>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <div className='project__container__thumbnail'>
                            <a href='https://github.com/kayemiyajima/Mern-stack-Youtube-clone' target='_blank' rel='noopener noreferrer'>
                                <img src={`${process.env.PUBLIC_URL}/images/youtube.png`} alt='whatsapp'/>
                            </a>
                        </div>
                    </Grid>
                    <hr />

                    <Grid item xs={12} sm={6}>
                        <div className='project__container__info'>
                            <h4>Photo Upload App</h4>
                            <p>MERN stack <br />
                            The first simple MERN stack project.
                            It simply uploads photos, with like, deleat, and edit features.
                            </p>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <div className='project__container__thumbnail'>
                            <a href='https://mern-photo-upload-app.netlify.app/' target='_blank' rel='noopener noreferrer'>
                                <img src={`${process.env.PUBLIC_URL}/images/memories.png`} alt='memories'/>
                            </a>
                        </div>
                    </Grid>
                    <hr />
                </Grid>
            </div>
        </div>
    )
}

export default Project
