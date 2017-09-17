import React, { Component } from 'react'
import '../../var.css'
import './style.css'
import { Shop, Emoji, Job } from '../icons'

const impressumData = [
  {

  }
]

export default class About extends Component {
  render() {
    return (
      <div className="about">
        <Shop width='90px' color='var(--light-red)' />
        <div className='about-story'>
          <h1>Café VonLuck Story</h1>
          <p>
            Welcome to Café VonLuck.
            A family company since 2002.
            Our first Store was established and named after the Von-Luck-Straße
            in Berlin Nikolassee in 2002. Since then we did our best to be a fair
            working place and a quiet place for good Food. <br/>

             Café VonLuck is a sole proprietorship
             owned by Michael & Claudia Mindak.
           </p>
        </div>

        <div className='about-jobs'>
          <Job width='120px' color='var(--light-grey)'/>
          <h1>Looking for a job?</h1>
          <p>We are constantly looking for new full-time, part-time and minijob employees. <br/> German is required.</p>
          <a href='mailto:jobs@von-luck.de?Subject=I%20am%20looking%20for%20a%20Job' target='_top'>
            <div className='about-jobs-mail'>
              Write us an email to jobs@von-luck.de .
            </div>
          </a>
        </div>

        <div className='about-impressum'>
          <h1>Impressum</h1>
          <p>
            Michael & Claudia Mindak<br/>
            Café VonLuck (sole proprietorship)<br/>
            cafe@von-luck.de<br/>
            Von-Luck-Straße 27<br/>
            14129 Berlin Nikolassee in Germany
          </p>
          <p>&copy; Sep 2017</p>
        </div>

        <span className="about-credits">
          <Emoji emoji='code' width='20px'/>
          <span>with</span>
          <Emoji color='red' width='20px'/>
          <span>by</span>
          <span className='about-credits-aricma'>AricmA.</span>
        </span>
      </div>
    );
  }
}
