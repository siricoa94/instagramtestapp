import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import {projectData} from './projectData.js';
import ProjectItem from './ProjectItem.jsx';

export default class ProjectList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {projectList: projectData, reactData: [], legacyData: [], propsData: [], showLegacy: false, showReact: false, style: {display: ''}}
        this.projectDataFunction = this.projectDataFunction.bind(this);
        this.legacyBtn = this.legacyBtn.bind(this);
        this.reactBtn = this.reactBtn.bind(this);
        this.setFalse = this.setFalse.bind(this);
        this.scrollBtn = this.scrollBtn.bind(this);
        this.myDivToFocusLegacy = React.createRef();
        this.myDivToFocusReact = React.createRef();
    }
    scrollBtn (props) {
        console.log(props);
        if(this.myDivToFocusLegacy.current){
            this.myDivToFocusLegacy.current.scrollIntoView({ 
               behavior: "smooth", 
               block: "start"
            });
        }
        if(this.myDivToFocusReact.current){
            this.myDivToFocusReact.current.scrollIntoView({ 
               behavior: "smooth", 
               block: "start"
            });
        }
    }
    legacyBtn() {
        if(this.state.showReact === true) {
            this.setState({
                showLegacy: true,
                showReact: false,
                style: {display: 'none'}
            });
        } else {
            this.setState({
                showLegacy: true,
                style: {display: 'none'}
            });
        }
    }
    reactBtn() {
        if(this.state.showLegacy === true) {
            this.setState({
                showLegacy: false,
                showReact: true,
                style: {display: 'none'}
            });
        } else {
            this.setState({
                showReact: true,
                style: {display: 'none'}
            });
        }
    }
    setFalse() {
        this.setState({
            showLegacy: false,
            showReact: false,
            style: {display: ''}
        });
    }
    componentDidMount() {
        this.projectDataFunction();
    }
    projectDataFunction () {
        let tempReactArray = [];
        let tempLegArray = [];
        for(let i = 0; i < this.state.projectList.length; i++) {
            let project = this.state.projectList[i];
            if(project.projectType === "REACT") {
                let tempBuildArrayReact = [];
                for(let i = 0; i < project.build.length; i++) {
                    let buildData = <li key={project.id + project.build[i]} value={project.build[i]}>{project.build[i]}</li>;
                    tempBuildArrayReact.push(buildData)
                }
                let newReactData = <div  key={i} value={project.id}><h2>{project.title}</h2><div id={project.imgRef +"Div"}></div><p>{project.description}</p><ul>{tempBuildArrayReact}</ul><p>{project.link}</p><p>{project.pngRef}</p></div>;
                tempReactArray.push(newReactData);

            } else if (project.projectType === "LEGACY") {
                let tempBuildArrayLegacy = [];
                for(let i = 0; i < project.build.length; i++) {
                    let buildData = <li key={project.id + project.build[i]} value={project.build[i]}>{project.build[i]}</li>;
                    tempBuildArrayLegacy.push(buildData)
                }
                let newlegacyData = <div  key={i} value={project.id}><h2>{project.title}</h2><div id={project.imgRef +"Div"}></div><div>{project.description}</div><div>{tempBuildArrayLegacy}</div><p>{project.link}</p><p>{project.pngRef}</p></div>;
                tempLegArray.push(newlegacyData);
            } else {
                console.log("error");
            }
        }
        let newPropsArray = {reactData: tempReactArray, legacyData: tempLegArray};
        console.log(newPropsArray);
        this.setState({
            reactData: tempReactArray,
            legacyData: tempLegArray,
        });
    }
    render() {
        return(
        <div>
            <div className='projectFlexOuter'>
                <div style={{textAlign: 'center', display: 'flex',justifyContent: 'center'}}><h1 className='headTitle'>Projects</h1></div>
                <div className='projectFlexInner'>
                    <div id="projectFlexLogoMain">
                        {
                            this.state.showLegacy ? null :
                            <div>
                                <h1 style={this.state.style}>Legacy Applications</h1>
                                <div onClick={this.legacyBtn} style={this.state.style} className="logoContainer"><div className="legacyLogo"></div></div>
                            </div>
                        } 
                        {
                            this.state.showReact ? null :
                            <div>
                                <h1 style={this.state.style}>React Applications</h1>
                                <div onClick={this.reactBtn} style={this.state.style} className="logoContainer"><div className="reactLogo"></div></div>
                            </div>
                        }
                        { 
                            this.state.showLegacy ?
                            <div>
                                <h1>Legacy Applications</h1>
                                <div style={{display: 'flex', justifyContent: 'center'}}>
                                    <div onClick={this.setFalse} className="logoContainer"><div className="legacyLogo"></div></div>
                                </div>
                                <h3 className="projectBrief">These are some of the earliest projects I have worked on mostly consisting of just HTML, JavaScript, and CSS. Some of these projects are ran on a Node.js/Express server on Heroku, while others are linked through GitHub. Although I am proud of all the projects listed here, Rico Depot is by far my shinning achievement and I hope you take the time to navigate your way through it.</h3>
                                <button onClick={this.scrollBtn} className="clickMeButton">Click Me!</button>
                            </div> : null
                        }
                        { 
                            this.state.showReact ?
                            <div>
                                <h1>React Applications</h1>
                                <div style={{display: 'flex', justifyContent: 'center'}}>
                                    <div onClick={this.setFalse} className="logoContainer"><div className="reactLogo"></div></div>
                                </div>
                                <h3 className="projectBrief">These are the latest applications I have been working on, built with React.Js. The foundations which make up the architecture of my applications are Webpack, Babel and a Node.Js/Express Server. I use Heroku to host them and have been getting more familiar with launching EC2 instances with AWS so stay tuned!</h3>
                                <button onClick={this.scrollBtn} className="clickMeButton">Click Me!</button>
                            </div> : null
                        }
                    </div> 
                </div>
                <div style={this.state.style}><h3>Click on either Image above to see more!</h3></div>
                <div className='projectFlexInner'>
                    <div className="projectMapOuter">
                        
                            { 
                                this.state.showLegacy ?
                                <div>
                                    <div className="projectMapDiv" ref={this.myDivToFocusLegacy}>
                                        <div>
                                            {this.state.legacyData.map((data, index) => {
                                                return <ProjectItem key={index} value={data.id}>{[data]}</ProjectItem>
                                            })}
                                        </div>
                                    </div>
                                </div> : null
                            }
                            { 
                                this.state.showReact ?
                                <div>
                                    <div className="projectMapDiv" ref={this.myDivToFocusReact}>
                                        <div>
                                            {this.state.reactData.map((data, index) => {
                                                return <ProjectItem key={index} value={data.id}>{[data]}</ProjectItem>
                                            })}
                                        </div>
                                    </div>
                                </div> : null
                            }
                    </div>
                </div>
            </div>
        </div>
        )
    }
}