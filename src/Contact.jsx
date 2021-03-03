import React from 'react';

export default class Contact extends React.Component {
    render() {
        return(
            <div id="contactContainer">
                <div className="titleContent">
                    <div className="welcomeMsgFlexDiv">
                        <div>
                            <h1 className="headTitle">Contact</h1>
                        </div>
                    </div>
                    <div id="contactDiv">
                        <div>
                            <div className="contactInner">
                                <h5>Email:</h5><h5><a href="mailto:12siricoa94@gmail.com">12siricoa94@gmail.com</a></h5>
                            </div>
                            <div className="contactInner">
                                <h5>LinkedIn:</h5><h5><a href="https://www.linkedin.com/in/andrew-sirico-45819a167/">Linkedin</a></h5>
                            </div>
                            <div className="contactInner">
                                <h5>Github:</h5><h5><a href="https://github.com/siricoa94">Github</a></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}