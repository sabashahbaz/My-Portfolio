import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import twilight from '../assets/twilgiht.png'
import witches from '../assets/witches.png'
import yours from '../assets/yourstruely.png'
import gg from '../assets/ggmurder.png'
import midnight from '../assets/midnight.png'
import harryPotter from '../assets/harry-potter.png'
import breakingTheHabit from '../assets/breakingthehabit.png'
import office from '../assets/office.png'
import gossipg from '../assets/gossip.png'
import seinfeld from '../assets/seinfeld.png'
import family from '../assets/family.png'
import nhie from '../assets/neverhaveiever.png'
import murder from '../assets/murder.png'
import hobbies from '../assets/font/hobbies.png'

export const Hobbies = () => {

    const bookItems = [
        <div><img src={twilight} alt="Twilight" /></div>,
        <div><img src={breakingTheHabit} alt="Breaking the Habit of Being Yourself" /></div>,
        <div><img src={witches} alt="The Very Secret Society of Witches" /></div>,
        <div><img src={yours} alt="Yours Truly" /></div>,
        <div><img src={gg} alt="Good Girl's Guide to Murder" /></div>,
        <div><img src={midnight} alt="Midnight Sun" /></div>,
        <div><img src={harryPotter}  alt="Harry Potter and the Order of Pheonix" /></div>,
    ];
    
    const showItems = [
        <div><img style={{ height: '400px' }} src={office} alt="The Office" /></div>,
        <div><img src={seinfeld} alt="Seinfeld" /></div>,
        <div><img src={murder} alt="Hoe to get Away With Murder" /></div>,
        <div><img src={nhie} alt="Never Have I Ever" /></div>,
        <img style={{ height: '400px' }} src={family} alt="Family Guy" />,
        <div><img style={{ height: '400px' }} src={gossipg} alt="Gossip Girl" /></div>
    ]
    
        const responsive = {
            desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            },
            tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            },
            mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            },
        };
    return (
        <div>
            <div className="hobbies-img-container">
            <img className = "hobbies-title" src={hobbies} alt="Hobbies Text" />
            </div>
            <div className="books-show-header">
                <h2>favorite reads</h2>
                <h2>shows I love</h2>
            </div>
            
            <div className = "carousel-container">
                <Carousel responsive={responsive} infinite={true} className = "carousel">{bookItems}</Carousel>
                <div className="hobbies-text">
                    <p> book worm </p>
                    <p> cooking new recipes</p>
                    <p>going on walks</p>
                    <p>live music </p>
                    <p>traveling the world</p>
                </div>
                <Carousel responsive={responsive} infinite={true} className = "carousel">{showItems}</Carousel>
            </div>
        </div>
    )
}