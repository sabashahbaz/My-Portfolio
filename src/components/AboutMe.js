import React from 'react';
import {Skills} from './Skills'
import {Hobbies} from './Hobbies+Int'
import me from '../assets/img/myPic.jpg'
import whoAmI from '../assets/font/whoAmI.png'
import technicalSkills from '../assets/font/technicalskills.png'
import bing from '../assets/bing-pic.png'
import flatiron from '../assets/flatiron.png'
import CSS from '../CSS/AboutMe.css'

export const AboutMe = () => {
    return (
        <div className="bg">
            <div className="content-container">
                <img className="my-pic" src={me} alt="My Picture" />
                <div className="text-container">
                <img className="who-am-I" src={whoAmI} alt="who-am-i-text" />
                <div className="about-text">
                    <p className="p">Hello, my name is Saba Shahbaz and I am very excited for you to check out my portfolio. I am a passionate software engineer who is excited to be a part of a collaborative team to work on designing and developing projects in order to meet business needs. I  have a strong foundation in building projects with JavaScript and Python, and can’t to show you my skills. Please feel free to explore my portfolio and get to know more about me !</p>
                </div>
                </div>
            </div>
            <div className="technical-skills">
                <img className="technical-skills-image" src = {technicalSkills} alt="technical-skills-text"/> 
            </div>
            <Skills/>
            <div className="education-experience">
                <div className="education">
                <h2 className="edu-header">Education</h2>
                    <div className= "edu-content">
                    <div className='flatiron'>
                        <img className="flat-img"src={flatiron} alt="flatiron logo"/>
                        <p className="edu-text">Full-Stack Software Engineering Bootcamp</p>
                    </div>
                    <div className='flatiron'>
                        <img className="bing-img"src={bing} alt="binghamton logo"/>
                        <div className="bing-edu-text">
                        <p>Binghamton University, SUNY</p>
                        <p className="degree-txt">Bachelor of Science in Biological Sciences</p>
                        </div>
                    </div>

                    </div>
                </div>
                <div className="work">
                <h2 className="work-header">Work Experience</h2>
                <div className="work-content">
                    <div className="statmd-header">
                        <h3>Medical Scribe | StatMD Urgent Care</h3>
                        <h3>8/2021 - 4/2023</h3>
                    </div>
                    <div className="text-work">
                        <ul>Performed COVID-19 testing during the COVID-19 pandemic</ul>
                        <ul>Adhered to safety protocols</ul>
                        <ul>Collaborated closely with physicians to optimize efficient patient care delivery</ul>
                        <ul>Accurately docuemented patient information in EMR</ul>
                    </div>
                </div>
                </div>
            </div>
            <Hobbies />
    </div> 
)};