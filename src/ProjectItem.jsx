import React from 'react';
import { Parallax } from 'react-scroll-parallax';

export default class ProjectItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {props: props}
    }
    render() {
        console.log(this.state.props.children[0].props.children[0]);
        const dataTitle = this.state.props.children[0].props.children[0];
        const dataImage = this.state.props.children[0].props.children[1];
        const dataDescription = this.state.props.children[0].props.children[2];
        const dataBuild = this.state.props.children[0].props.children[3];
        const dataLink = this.state.props.children[0].props.children[4];
        const pngRef = this.state.props.children[0].props.children[5].props.children;
        console.log(pngRef);
        const dataLinkJSON = dataLink.props.children;
        return(
            <Parallax y={[50,-80]}>
            <div className="projectItemMain">
                <div className="projectItemOuterCont" style={{backgroundImage: 'url(/css/'+pngRef+')'}}>
                    <div>
                        <div  className="projectItemInnerCont">
                            <div className="projTitle">
                                {dataTitle}
                            </div>
                            <div className="gridContainerProject">
                                    <div>
                                        <div  className="projImg">
                                            <h2 className="projH">Image</h2>
                                            <div className="projHInner">{dataImage}</div>
                                        </div>
                                        <div className="projDesc">
                                            <h2 className="projH">Description</h2>
                                            <div style={{padding: '15px', textAlign: "justify", backgroundColor: "rgb(37,37,37)",borderBottomLeftRadius: ".3cm",borderBottomRightRadius:".3cm"}}>{dataDescription}</div>
                                        </div>
                                    </div>
                                    <div style={{display: "flex",justifyContent:"center"}}>
                                        <div>
                                            <div className="projBuild">
                                                <h2 className="projH">Build</h2>
                                                <div style={{padding: "15px",textAlign: "center", listStyleType: "none", marginBottom: "5px", backgroundColor: "rgb(37,37,37)",borderBottomLeftRadius: ".3cm",borderBottomRightRadius:".3cm"}}>{dataBuild}</div>
                                            </div>
                                            <div className="projLink">
                                                <h2 className="projH">Link</h2>
                                                <div  className="projHInner">
                                                    <a href={dataLinkJSON} className="linkToApp">To Application!</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </Parallax>
        )
    }
}