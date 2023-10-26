import {useState, useEffect} from "react";
import {Navbar, Container, Nav} from "react-bootstrap";
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png';
import {Banner} from './Banner';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/icons8-github.svg';
import navIcon3 from '../assets/img/icons8-email-100.png';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState ('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(()=>{
        const onScroll = () => {
            if (window.scrollY >50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll)

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value)
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
            <Navbar.Brand href="/">
                <img src={logo} alt="logo"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"> 
                <span className="navbar-toggle-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="/" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('home')}>Home</Nav.Link>
                <Nav.Link href="/about-me" className={activeLink === 'about-me' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('about-me')}>About Me</Nav.Link>
                <Nav.Link href="/projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('projects')}>Projects</Nav.Link>
                <Nav.Link href="/resume" className={activeLink === 'resume' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('resume')}>Resume</Nav.Link>
                <Nav.Link href="/contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('contact')}>Contact Me</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )};
