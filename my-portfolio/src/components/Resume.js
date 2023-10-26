import React from 'react';
import resume from '../assets/resume.pdf'
import my_resume from '../assets/my-resume.png'
import download from '../assets/download.png'
import CSS from '../Resume.css'

export const Resume = () => {
    return(
        <div className="text-bg">
            
            <div className="resume-container">
            <div className = "head-button">
            <h2 className="resume-header">My Resume </h2>
            <a href={resume} download="Saba-Shahbaz_Resume">
            <img className='download' src={download} />
            <button className='download-button'>Download Resume</button>
            </a>

            </div>

            <div className="resume-img-container">
                <img className="resume-img" src={my_resume} alt="Resume"/>
            </div>

            </div>

        </div>
    )
}