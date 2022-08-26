import React, { Component } from 'react';
import ContactForm from './Contact_form';
export default class ContactUs extends Component {
  render() {

    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Feel free to contact me for any work or suggestions below
              </p>
              <ContactForm></ContactForm>
            </div>
          </div>

        </section>
        );
  }
}