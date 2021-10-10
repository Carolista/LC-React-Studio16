import React from 'react';
import Header from '../components/Header.js'
import Nav from '../components/Nav.js';
import '../App.css';

const Home = (props) => {
    return (
        <>
            {/* FIXME: can't push until video is either reduced in size or moved seperately */}
            <video className="bg-video" playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop"><source src="assets/mp4/yoga-montage-1.mp4" type="video/mp4" /></video>
            {/* Don't forget to credit videographers */}
            <div className="home-content">
                <Header />
                <Nav />
            </div>
        </>
    );
};

export default Home;
