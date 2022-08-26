import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import AlertForm from "./AlertForm";
import Success from "./SuccessAlert";
import * as Yup from 'yup';
import EmailSender from './EmailSender'
import './../App.css'


const ContactForm = () => {

  const [alert, setAlert] = useState(false)
  const [confirmation, setConfirmation] = useState(false)

  const phoneYup = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/


  const validationSchema = Yup.object({
    name: Yup.string()
    .min(2, 'Too short!')
    .max(50, 'Too long!')
    .required('Required'),

    phone: Yup.string().matches(phoneYup, 'Is not a valid number'),

    email: Yup.string()
    .email('Is not a valid e-mail')
    .required('Required'),
    
    message: Yup.string()
    .required('Required')
    .min(2, 'The message is too short, let me know a litle bit more please!'),


})

  return (
    <>
      <Formik initialValues= {{
        name:'',
        email:'',
        phone: '',
        message:''
      }}
        

        validationSchema={validationSchema}

        onSubmit={async (values, { setSubmitting, resetForm }) => {
          
          try {
            resetForm();
            console.log(JSON.stringify(values, null, 2));
            setSubmitting(false);
            EmailSender(values);
            setConfirmation(true)
            setTimeout(() =>{
              setConfirmation(false)
            }, 5000)
          } catch (error) {
              setAlert(true);
              console.log(error)
            }
            setTimeout(() =>{
              setAlert(false)
            }, 5000)
        }
    
        }
      
      >
       
        {({
          values,
          errors,
          touched,
          isSubmitting,
        }) => (

          <Form className="form">
               <Field 
               className = "form_input"
               name="name"
               type="name"
               placeholder="Your name here"
                /> 
              {errors.name && touched.name ? (
             <AlertForm error={errors.name}/>
             ) : null}

              <Field 
               className = "form_input"
               name="phone"
               type="text"
               placeholder="Your phone here (optional)"
                /> 
              {errors.phone && touched.phone ? (
             <AlertForm error={errors.phone}/>
             ) : null}

               <Field 
               className = "form_input"
               name="email"
               type="email"
               placeholder="Your email here"
                /> 
              {errors.email && touched.email ? (
             <AlertForm error={errors.email}/>
             ) : null}

               <Field 
               className = "textarea"
               name="message"
               as="textarea"
               placeholder="Tell me, how can i help you?"
                /> 
              {errors.message && touched.message ? (
             <AlertForm error={errors.message}/>
             ) : null}

          <button type="submit" disabled={isSubmitting} className="submit">
             Send
          </button>

          <div>
                {alert && <AlertForm error={"Sending failed"}/>}
                {confirmation && <Success prop={"Sending succesful"}/>}
          </div>

         </Form>
       )}
     </Formik>
   </>
 )};
      
export default ContactForm;