import React, { Component } from 'react';
import './../Portfolio.css'



export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1 style={{color: "#191919", fontWeight: "600"}}>This portfolio was created by me.</h1>
          <h1 style={{color: "#191919", fontWeight: "600"}}>But you can check some of my others works too.</h1>
          <h1 style={{color: "#F0603F", fontWeight: "600", marginBottom: "10px"}}>(outdated)</h1>
          <div style={{width: "100%", display: "flex", justifyContent: "center", marginBottom: "30px" }}>
          <img src='../images/in progress.png' alt={'inprogress'} className="skill_img"/>
          </div>
          
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                <div className="columns portfolio-item" >
                  <h2 style={{fontSize: "large", textAlign: "center"}}>{item.name}</h2>
                    <a
    href={item.url}
    style={{ textDecoration: "none" }}
    target="parent"
  >
  <div
    class="carreaux_presentation_light" 
  > <h2 style={{fontSize: "large"}}>{item.name}</h2>
  <p style={{fontSize: "small"}}>{item.type}</p>
    <div class="shadow_swhow_mini" style={{ backgroundImage: `url('/images/portfolio/${item.image}')`, backgroundSize: "cover"}}>
      <div class="deroul_titre">{item.description}</div>
      <div class="deroul_soustitre">Click to visit the deployed site</div>
    </div>
  </div>
  </a>
                </div>
              )
            })
          }
          </div>
        </div>
      </div>
  </section>
        );
  }
}