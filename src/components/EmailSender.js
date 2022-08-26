import * as emailjs from "@emailjs/browser";
import apiKeys from './../config/apikeys'


const EmailSender = async (props) => {

    emailjs.send('service_0yplzep', 'template_my_portfolio', props, apiKeys.USER_ID);
    
}


export default EmailSender;