import {useState, useEffect} from "react";
import {Container, Row, Col} from "react-bootstrap"
import {ArrowRightCircle} from "react-bootstrap-icons";
import headerImg from "../assets/img/me-banner.png"
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/icons8-github.svg';
import navIcon3 from '../assets/img/icons8-email-100.png';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Software Engineer","Product Designer", "Web Developer", "UI/UX Designer"]
    const [text, setText] = useState('')
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const period = 300;

    useEffect(()=> {
        let ticker = setInterval(()=> {
            tick();
        }, 250)

        return () => {clearInterval(ticker)}
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta /2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true)
            setDelta(period)
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
        <section className="banner" id="home">
    <Container>
        <Row className="align-items-center">
            <Col xs={12} md={6} xl={6} className="welcome-page-text">
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`I'm a `}<span className="wrap">{text}</span></h1>
            </Col>
            <Col xs={12} md={6} xl={6}>
                <img src={headerImg} alt="Header Img" style={{ maxWidth: '70%' }} />
            </Col>
        </Row>
    </Container>
</section>
    )
}