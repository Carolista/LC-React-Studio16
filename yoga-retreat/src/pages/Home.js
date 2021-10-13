import React from 'react';
import HomeNav from '../components/HomeNav.js';
import Masthead from '../components/Masthead.js';
import '../App.css';

const Home = (props) => {
    return (
        <>
            <video className="bg-video" playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop"><source src="assets/mp4/yoga-montage-1.mp4" type="video/mp4" /></video>
            <div className="home-content overlay">
                <Masthead width="220px" />
                <HomeNav />
            </div>
        </>
    );
};

export default Home;

/*
    Video compilation by yours truly in iMovie
    Free video clips from Pexels.com
    Videographer credits:
        1 - Olia Danilevich
        2 & 5 - Taryn Elliott 
        3 - Roman Odintsov
        4 - Kampus Production
*/
