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
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                <div className="columns portfolio-item">
                    <a
    href={item.url}
    style={{ textDecoration: "none" }}
    target="parent"
  >
  <div
    class="carreaux_presentation_light"
  > <h2 style={{fontSize: "large"}}>{item.name}</h2>
  <p style={{fontSize: "small"}}>{item.type}</p>
    <div class="shadow_swhow_mini">
      <div class="deroul_titre">{item.description}</div>
      <div class="deroul_soustitre">Click to see the repository</div>
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