import React from 'react';
import ProjectList from './ProjectsList.jsx';

export default function Project () {
    return(
        <div>
            <div className="flexContainer">
                <div className="titleContent">
                    <div className="welcomeMsgFlexDiv">
                        <div>
                            <h1 className="headTitle">Projects</h1>
                        </div>
                    </div>
                    <div  id="flexProjectContainer">
                        <div id="reactProjectDiv" className="innerProjectGrid">
                            <div className="projectContainer">
                                <div className="projectInnerCont">
                                    <h2>React Quiz</h2>
                                    <div className='projectImgDiv'>
                                        <div id='reactQuizImgDiv'></div>
                                    </div>
                                    <h5>This application is built on React.Js and is intended to test your knowledge on it as well! Once you open the app, you will be presented with a button. Upon pressing the button, you will have activated the quiz. Each question allows ten seconds to answer so think fast and have fun!</h5>
                                    <h5>Build</h5>
                                    <ul>
                                        <li>React.JS</li>
                                        <li>CSS</li>
                                        <li>Node.js/Express</li>
                                        <li>Webpack</li>
                                        <li>Babel</li>
                                    </ul>
                                    <h5>Link</h5>
                                    <a href="https://andrewsreactquiz.herokuapp.com/">Andrew's Silly React Quiz!</a>
                                </div>
                            </div>
                            <div className="projectContainer">
                                <div className="projectInnerCont">
                                    <h2>SCW</h2>
                                    <div className='projectImgDiv'>
                                        <div id='scwImgDiv'></div>
                                    </div>
                                    <h5>This application is built on React.Js and spoonacular's API. You can use this application to search for new Cuisine recipies or Wine recommendations. For the Cuisine search you may include an intolerances perameter which will exclude certain meals from your search based on dietary restrictions.</h5>
                                    <h5>Build</h5>
                                    <ul>
                                        <li>React.JS</li>
                                        <li>CSS</li>
                                        <li>Node.js/Express</li>
                                        <li>Webpack</li>
                                        <li>Babel</li>
                                        <li>Spoonacular API</li>
                                    </ul>
                                    <h5>Link</h5>
                                    <a href="https://search-cuisine-siricoa94.herokuapp.com/home">SCW!</a>
                                </div>
                            </div>
                        </div>
                        <div id="legacyApplicationsDiv" className="innerProjectGrid">
                            <div className="projectContainer">
                                <div className="projectInnerCont">
                                    <h2>Dragonball Hangman</h2>
                                    <div className='projectImgDiv'>
                                        <div id='dbHangmanImgDiv'></div>
                                    </div>
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
                            </div>
                            <div className="projectContainer">
                                <div className="projectInnerCont">
                                    <h2>Hominid Trivia Game</h2>
                                    <div className='projectImgDiv'>
                                        <div id='hominidImgDiv'></div>
                                    </div>
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
                            </div>
                            <div className="projectContainer">
                                <div className="projectInnerCont">
                                    <h2>Burgers!</h2>
                                    <div className='projectImgDiv'>
                                        <div id='burgersImgDiv'></div>
                                    </div>
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
                            </div>
                            <div className="projectContainer">
                                <div className="projectInnerCont">
                                    <h2>Found Sound</h2>
                                    <div className='projectImgDiv'>
                                        <div id='foundSoundImgDiv'></div>
                                    </div>
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
                            </div>
                            <div className="projectContainer">
                                <div className="projectInnerCont">
                                    <h2>Rico Depot</h2>
                                    <div className='projectImgDiv'>
                                        <div id='ricoDepotImgDiv'></div>
                                    </div>
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
                </div>
            </div>
        </div>
    )
}