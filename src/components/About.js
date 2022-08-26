import React, { Component } from "react";
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img
              className="profile-pic"
              src="../images/IMG_20190303_125115091.jpg"
              alt=""
            />
           
            <p style={{ textAlign: "center", marginTop: "25px"}}>Talk to me in:</p>
            <ul style={{ display: "flex", justifyContent: "center"}}>
  {
    resumeData.languages && resumeData.languages.map((item) => {
      return(
        <li style={{ margin: "5px"}}>
          <img src={item.lang_img} alt={item.langname} className="lang_img"/>
        </li>
      )
    })
  }

</ul>
          </div>

          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>{resumeData.aboutme}</p>
            <p>{resumeData.worker}</p>
            <p>{resumeData.hobbies}</p>
          </div>
<div className="languages">



</div>
        </div>
      </section>
    );
  }
}
