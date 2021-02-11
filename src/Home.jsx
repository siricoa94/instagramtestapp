import React from 'react';
import { Parallax } from 'react-scroll-parallax';

export default class Home extends React.Component {
    constructor (props) {
        super(props);
        this.state = { clicked: false, windowWidth: window.innerWidth };
        this.welcomeBtn = this.welcomeBtn.bind(this);
    }

    componentDidMount() {
        window.onbeforeunload = function () {
            window.scrollTo(0, 0);
        }
        console.log(this.state.windowWidth);
        const windowCheck = window.innerWidth;
        this.setState({
            windowWidth: windowCheck
        });
    }

    welcomeBtn() {
        console.log(this.state.windowWidth);
        var windowWidthString = this.state.windowWidth;
        switch(true) {
            case (windowWidthString >= 300 && windowWidthString <= 499): 
                window.scrollTo({top: 1200, behavior: 'smooth'});
            break;
            case (windowWidthString >= 500 && windowWidthString <= 699): 
                window.scrollTo({top: 1200, behavior: 'smooth'});
            break;
            case (windowWidthString >= 700 && windowWidthString <= 899): 
                window.scrollTo({top: 1120, behavior: 'smooth'});
            break;
            case (windowWidthString >= 900 && windowWidthString <= 1099): 
                window.scrollTo({top: 1100, behavior: 'smooth'});
            break;
            case (windowWidthString >= 1100 && windowWidthString <= 2400): 
                window.scrollTo({top: 1155, behavior: 'smooth'});
            break;
        }
    }

    render () {
        return(
            <div>
                <div id="welcomeMessageDiv">
                    <div className="welcomeMsgFlexDiv" id="welcomeMsgInner">
                        <div>
                            <h1 className="headTitle">Welcome</h1>
                            <button onClick={this.welcomeBtn} id="homeLearnBtn">Learn More</button>
                        </div>
                    </div>
                </div>
                <Parallax y={[-20, 20]}>
                    <div  id="pageContainer">
                        <div className="flexContainer">
                            <div className="titleContent">
                                <div className="projectContainer" id="homeProjectContainer">
                                    <h2>Andrew Sirico</h2>
                                    <Parallax x={[100, -62.5]}><div id="aboutWelcomeParent"><div id="aboutWelcomeImage"></div></div></Parallax>
                                    <div id="homeh5div">
                                        <h5>Hi my name is Andrew! Welcome to my portfolio built on ReactJS, Node.js/Express, Webpack, and Babel. This portfolio is here to feature some of my latest projects, some of which utilize the ReactJS frontend framework. I currently work installing HVAC systems into homes and as a freelance web developer, but whenever I have the free time to spend, it  is devoted to developing content and debbuging issues in my code.</h5>
                                        <h5>I am passionate about my work and take pride in the finished product. My work ethic is to always ensure quality product and be positive no matter the task or the challenges involved. Although I like it quiet when I am working, I enjoy being part of something with other people and sharing the feelings of accomplishment after a job well done.</h5>
                                        <h5>What I find to be my interest in web development is learning. Web Development has been my way to continue education past my formal college education. If you have taken a look at the infrastructure of this page you will have noticed that I set up my configuration manually and choose not to use "create-react-app" or any other assisting tool for setup. My mentality is not to be the one dependant on the tools that others craft, but to be the one who forges them.</h5>
                                        <h5>This passion is not only present in my work here, but also in the other hobbies that occupy my life. I enjoy playing guitar, reading books, writing poetry, drawing, and photography. I also enjoy camping, hiking, skating, and above all things, snowboarding.</h5>
                                        <h5>I hope that this page best describes the person that I am, and I welcome you to navigate to my projects page to see some of the latest applicaions I have developed as well as my contacts page if you would like to reach out to me, thank you.</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Parallax>
                <div id="moreInfoDivHome">
                    <div>
                        
                    </div>
                </div>
            </div>
        )
    }
}