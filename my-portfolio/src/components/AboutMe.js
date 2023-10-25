import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import {Skills} from './Skills'
import {Hobbies} from './Hobbies+Int'
import me from '../assets/img/myPic.jpg'
import whoAmI from '../assets/font/whoAmI.png'
import technicalSkills from '../assets/font/technicalskills.png'
import bing from '../assets/bing-pic.png'
import flatiron from '../assets/flatiron.png'
import CSS from '../AboutMe.css'

export const AboutMe = () => {
    return (
        <div className="bg">
            <div className="content-container">
                <img className="my-pic" src={me} alt="My Picture" />
                <div className="text-container">
                <img className="who-am-I" src={whoAmI}/>
                <div className="about-text">
                    <p className="p">A passionate software engineer eager to begin her journey into the tech industry. I have recently graduated from Flatiron’s School Full-Stack Software Engineering bootcamp where I learned basic computer science and programming languages concepts. I am excited to join cross-functional teams to collaborate on projects to meet business needs.</p>
                </div>
                </div>
            </div>
            <div className="technical-skills">
                <img className="technical-skills-image" src = {technicalSkills}/> 
            </div>
            <Skills/>
            <div className="education-experience">
                <div className="education">
                <h2 className="edu-header">Education</h2>
                    <div className= "edu-content">
                    <div className='flatiron'>
                        <img className="flat-img"src={flatiron}/>
                        <p className="edu-text">Full-Stack Software Engineering Bootcamp</p>
                    </div>
                    <div className='flatiron'>
                        <img className="bing-img"src={bing}/>
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
    )
}