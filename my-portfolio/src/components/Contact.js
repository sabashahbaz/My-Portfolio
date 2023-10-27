import React, { useRef, useState } from 'react';
import MsgModal from './MsgModal';
import emailjs from '@emailjs/browser';
import linkedin from '../assets/img/linkedinlogo.png'
import github from '../assets/img/githublogo.png'
import gmail from '../assets/img/gmaillogo.png'
import CSS from '../CSS/Contact.css';

    export const Contact = () => {
    const form = useRef();
    const [show, setShow] = useState(false);

    const serviceKey = process.env.REACT_APP_PUBLIC_KEY;
    const templateKey = process.env.REACT_APP_TEMPLATE_KEY;
    const id = process.env.REACT_APP_ID;

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(serviceKey, templateKey, form.current, id)
        .then((result) => {
            console.log(result.text);
            setShow(true)
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <div className="contact-bg">
            <div className="form-container">
            <h2 className="header-msg">Send a message</h2>
                <form className="form"ref={form} onSubmit={sendEmail}>
                    <label>Name</label>
                    <input type="text" name="user_name" />

                    <label>Email</label>
                    <input type="email" name="user_email" />

                    <label>Message</label>
                    <textarea name="message" />
                    <input type="submit" value="Send" />
                    </form>
            </div>
            <div className= "connect-container">
            <h2 className="connect-msg">Connect with me!</h2>
            <div className="logos-container">
                <div className="logos">
                <div className="logo">
                    <a href="https://www.linkedin.com/in/saba-shahbaz/" target="_blank">
                        <img className="logo-img" src={linkedin} alt="linkedin"/>
                        <p>Linkedin</p>
                    </a>
                </div>
                <div className="logo">
                    <a href="https://github.com/sabashahbaz"  target="_blank">
                        <img className="logo-img" src={github} alt="github"/>
                        <p>Github</p>
                    </a>
                </div>
                <div className="logo">
                    <a href="mailto:sabashahbaz001@gmail.com">
                    <img className="logo-img" src={gmail} alt="email"/>
                    <p>Email me!</p>
                    </a>
                </div>
                </div>
            </div>
            </div>
            <MsgModal show={show} onHide={() => setShow(false)} /> 
        </div>
    );
};