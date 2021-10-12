import React from 'react';
import HomeNav from '../components/HomeNav.js';
import '../App.css';
import Masthead from '../components/Masthead.js';

const Home = (props) => {
    return (
        <>
            <video className="bg-video" playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop"><source src="assets/mp4/yoga-montage-1.mp4" type="video/mp4" /></video>
            {/* TODO: Don't forget to credit videographers */}
            <div className="home-content overlay">
                <Masthead width="220px" />
                <HomeNav />
            </div>
        </>
    );
};

export default Home;
