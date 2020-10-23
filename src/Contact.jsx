import React from 'react';

export default class Contact extends React.Component {
    render() {
        return(
            <div className="pageContainer" id="contactContainer">
                <div className="picturecontainer">

                </div>
                <div className="flexContainer">
                    <div className="titleContent">
                        <h1 className="headTitle">Contact</h1>
                        <div id="contactDiv">
                            <h5>Email: <a href="mailto:12siricoa94@gmail.com">12siricoa94@gmail.com</a></h5>
                            <h5>LinkedIn: <a href="https://www.linkedin.com/in/andrew-sirico-45819a167/">Linkedin</a></h5>
                            <h5>Github: <a href="https://github.com/siricoa94">Github</a></h5>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}