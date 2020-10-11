import React from 'react';
import Contents from './About.jsx';

function NavBar() {
  return (
    <nav>
      <a href="/">Home</a>
      <a href="/#/about">About</a>
      <a href="/#/contact">Contact</a>
    </nav>
  )
}

export default function page () {
    return(
        <div>
            <NavBar />
            <Contents />
        </div>
    );
}