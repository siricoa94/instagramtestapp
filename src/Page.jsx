import React from 'react';
import Contents from './Contents.jsx';
import { ParallaxProvider } from 'react-scroll-parallax';
import NavBar from './Nav.jsx';

export default function page () {
    return(
        <ParallaxProvider>
            <NavBar />
            <Contents />
        </ParallaxProvider>
    );
}