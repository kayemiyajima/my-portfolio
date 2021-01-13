import React from 'react';
import './Skill.css';
import Grid from '@material-ui/core/Grid';

function Skill() {
    return (
        <div className='skill'>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={3}>
                    <div className='skill__title'>
                        <h3>SKILLS</h3>
                        <hr />
                    </div>
                </Grid>
                <Grid item xs={12} sm={9}>
                    <div className='skill__bars'>
                        <div className='skill__bars__title'>
                            <img src={`${process.env.PUBLIC_URL}/images/icons8-react-native-240.png`} alt='react'/>  
                            <p>REACT JS</p>
                        </div>
                        <div class="skill__bars__bar">
                            <div class="skill__react"><span>%</span></div>
                        </div>
                        
                        <div className='skill__bars__title'>
                            <img src={`${process.env.PUBLIC_URL}/images/icons8-javascript-240.png`} alt='js'/>
                            <p>JAVASCRIPT</p>
                        </div>
                        <div class="skill__bars__bar">
                            <div class="skill__javascript"><span>%</span></div>
                        </div>

                        <div className='skill__bars__title'>
                            <img src={`${process.env.PUBLIC_URL}/images/icons8-css3-240.png`} alt='css'/>
                            <p>CSS</p>
                        </div>
                        <div class="skill__bars__bar">
                            <div class="skill__css"><span>%</span></div>
                        </div>

                        <div className='skill__bars__title'>
                            <img src={`${process.env.PUBLIC_URL}/images/icons8-html-5-240.png`} alt='html'/>
                            <p>HTML</p>
                        </div>
                        <div class="skill__bars__bar">
                            <div class="skill__html"><span>%</span></div>
                        </div>

                        <div className='skill__bars__title'>
                            <img src={`${process.env.PUBLIC_URL}/images/icons8-mongodb-50.png`} alt='mongodb'/>
                            <p>MONGO DB</p>
                        </div>
                        <div class="skill__bars__bar">
                            <div class="skill__mongodb"><span>%</span></div>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Skill
