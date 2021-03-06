import React from 'react';
import { Parallax } from 'react-scroll-parallax';

export default class Home extends React.Component {
    constructor (props) {
        super(props);
        this.state = { clicked: false, windowWidth: window.innerWidth };
        this.welcomeBtn = this.welcomeBtn.bind(this);
        this.myDivToFocus = React.createRef();        
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
        if(this.myDivToFocus.current){
            this.myDivToFocus.current.scrollIntoView({ 
               behavior: "smooth", 
               block: "end"
            });
        }
    }

    render () {
        return(
            <div>
                <div id="welcomeMessageDiv">
                    <div className="welcomeMsgFlexDiv" id="welcomeMsgInner">
                        <div>
                            <h1 className="headTitle">Welcome</h1>
                            <div id="welcomeImgDisp"></div>
                            <button onClick={this.welcomeBtn} className="learnBtn">Learn More</button>
                        </div>
                    </div>
                </div>
                <Parallax y={[-20, 20]}>
                    <div  id="pageContainer" ref={this.myDivToFocus}>
                        <div className="flexContainer">
                            <div className="titleContent">
                                <div className="homeContainer">
                                    <h2 id="nameHome">Andrew Sirico</h2>
                                    <Parallax y={[5, -5]}><div id="aboutWelcomeParent"><div id="aboutWelcomeImage"></div></div></Parallax>
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