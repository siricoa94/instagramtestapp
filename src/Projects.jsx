import React from 'react';

export default function Project () {
    return(
        <div className="pageContainer">
            <div className="picturecontainer">

            </div>
            <div className="flexContainer">
                <div className="titleContent">
                    <h1 className="headTitle">Projects</h1>
                    <div className="projectContainer">
                        <h2>Dragonball Hangman</h2>
                        <h5>Below is a game I created called Dragonball hangman! This is one of my earlier projects, and although quite simple, it encapsulates the classic hangman experience. Even the most seasoned Dragonball fan will find difficulty in guessing the correct name, but no worries as you can always keep playing just by pressing another key!</h5>
                        <h5>Build</h5>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                        </ul>
                        <h5>Link</h5>
                        <a href="https://siricoa94.github.io/WordGuessTwo/">Dragonball Hangman</a>
                    </div>
                    <div className="projectContainer">
                        <h2>Hominid Trivia Game</h2>
                        <h5>Hominid Trivia Game is a mobile friendly application that tests your knowledge on the origins of the human species. Although simple in scope, this application is easy on the eyes as well as entertaining.</h5>
                        <h5>Build</h5>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                        </ul>
                        <h5>Link</h5>
                        <a href="https://siricoa94.github.io/HominidTriviaGame/">Hominid Trivia Game</a>
                    </div>
                    <div className="projectContainer">
                        <h2>Burgers!</h2>
                        <h5>This is an app designed for the user to create a burger. They can enter a name, and also set the state of the burger to either Fresh or Devoured! After the burger is made, the user can devour the burger, or make it fresh, and watch it switch sides.</h5>
                        <h5>Build</h5>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>Node.js/Express</li>
                            <li>Express-handlebars</li>
                            <li>MySQL</li>
                            <li>Sequelize</li>
                        </ul>
                        <h5>Link</h5>
                        <a href="https://ancient-springs-99908.herokuapp.com/">Burgers!</a>
                    </div>
                    <div className="projectContainer">
                        <h2>Fun with Forums</h2>
                        <h5>This application is designed for a user to log in and create a post for users to see, edit, and delete. Users are allowed to create a post which displays their name, post title, and content of post. Users credentials are saved to Firebase console as well as MySql forums table. When a user creates a post, it joins the username from the forums table with the post title and post content in the card container.</h5>
                        <h5>Build</h5>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>Node.js/Express</li>
                            <li>Firebase</li>
                            <li>MySQL</li>
                        </ul>
                        <h5>Link</h5>
                        <a href="https://funwithforums.herokuapp.com/">Fun with Forums</a>
                    </div>
                    <div className="projectContainer">
                        <h2>Found Sound</h2>
                        <h5>Found Sound is the perfrect application for anyone who would like to sample some music by an artist. Simply type into the search bar an artist, song, or album name and Found Sound will return you a list of samples based off the search phrase that was provided. Having a simple, yet elegant design, sound found is easy to navigate and use for any user.</h5>
                        <h5>Build</h5>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript/Jquery</li>
                            <li>Node.js/Express</li>
                        </ul>
                        <h5>Link</h5>
                        <a href="https://foundsound.herokuapp.com/">Found Sound</a>
                    </div>
                    <div className="projectContainer">
                        <h2>Rico Depot</h2>
                        <h5>Rico Depot is a marketplace/game application that works as follows. Upon signing up a user is given 10,000 credits and is allowed to purchase products listed on the products page. When a user buys a product, their purchase history will be appened to their homepage. Users can also view how their spending habits score up against other users on the leaderboard page</h5>
                        <h5>Build</h5>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript/Jquery</li>
                            <li>Node.js/Express</li>
                            <li>MySQL</li>
                            <li>Firebase</li>
                        </ul>
                        <h5>Link</h5>
                        <a href="https://ricodepot.herokuapp.com/">Rico Depot</a>
                    </div>
                </div>
            </div>
        </div>
    )
}