import React, { Component } from 'react';
import ContactForm from './Contact_form';
export default class ContactUs extends Component {
  render() {

    return (
      <section id="contact">
          <div className="row section-head" style={{ padding: "0px", textAlign: "center", justifyContent: "center"}}>
            <div className="twelve columns">
              <p className="lead" style={{ padding: "0px", textAlign: "center"}}>
              Feel free to contact me for any work or suggestions below
              </p>
              <ContactForm></ContactForm>
            </div>
          </div>

        </section>
        );
  }
}