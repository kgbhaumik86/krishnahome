import React, { Component } from 'react'
import Iframe from 'react-iframe'
import * as emailjs from 'emailjs-com'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure()
export default class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            subject: '',
            message: '',            
            errors: {
                name: '',
                email: '',
                subject: '',
                message: '',
            }
        }
    }
    
    handleInputChange(event){
        event.preventDefault();
        const target = event.target
        const name = target.name
        const value = target.value
        this.setState({[name]: value})
    }
    validateEmail(){
        const valErrors = this.state.errors
        let formIsValid = true

        if(!this.state.name || this.state.name.length < 3 ){
            valErrors.name = "Minimum 3 symbols"
            formIsValid = false
        }
        if(!this.state.subject || this.state.subject.length < 3 ){
            valErrors.subject = "Minimum 3 symbols"
            formIsValid = false
        }
        if(!this.state.message || this.state.message.length < 3 ){
            valErrors.message = "Minimum 3 symbols"
            formIsValid = false
        }
        if(!this.state.email || this.state.email.length < 3 ){
            valErrors.email = "Minimum 3 symbols"
            formIsValid = false
        }
        let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if (!pattern.test(this.state.email)){
            valErrors.email = 'This is not a valid Email'
            formIsValid = false
        }
        console.log(valErrors)
        
        this.setState({            
            errors : valErrors
        })        
        return formIsValid
    }

    handleSubmit(event) {
        event.preventDefault();
        // toast.success("Message sent successfully")
        // toast.error("Mail send failed")
        // console.log(this.state);
        if( !(this.validateEmail())){
            console.log(this.state.errors)
            return
        }
        
        const { name, email, message, subject,  } = this.state
        let templateParams = {
            name: name,
            email: email,
            subject: subject,
            message: message,
        }
        emailjs.send(
            "gmail",
            "kgbtemplate",
            templateParams,
            "user_7hYDl53lIR8WZMqWEugDj"
        ).then((response) => {            
            toast.success("Message sent successfully")
            console.log('Succuss',response.status,response.text)
            this.resetForm()
        },
        (err) => {
            toast.error("Mail send failed : " + err.text)
            console.log(err)
        })
    }
    resetForm() {
        this.setState({ name: "", email: "", subject: "", message: "", errors : { name: "", email: "", subject: "", message: ""} })
    }
    render() {
        return (
            <form id="contact-form" action="forms/contact.php" method="post" role="form" class="php-email-form">
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="name">Your Name</label>
                    <input type="text" name="name" class="form-control" id="name" data-rule="minlen:4" 
                        data-msg="Please enter at least 4 chars" 
                        value={this.state.name} 
                        onChange={this.handleInputChange.bind(this)} 
                        required = 'required'/>
                    <span className="help-block" style={{ color: '#e22d04' }}>{this.state.errors.name}</span>
                </div>
                <div class="form-group col-md-6">
                    <label for="name">Your Email</label>
                    <input type="email" class="form-control" name="email" id="email" data-rule="email" 
                        data-msg="Please enter a valid email" 
                        value={this.state.email} 
                        onChange={this.handleInputChange.bind(this)} 
                        required = 'required'
                        />
                    <span className="help-block" style={{ color: '#e22d04' }}>{this.state.errors.email}</span>
                </div>
            </div>
            <div class="form-group">
                <label for="name">Subject</label>
                <input type="text" class="form-control" name="subject" id="subject" 
                    data-rule="minlen:4" 
                    data-msg="Please enter at least 8 chars of subject" 
                    value={this.state.subject} 
                    onChange={this.handleInputChange.bind(this)} 
                    required = 'required'
                    />
                <span className="help-block" style={{ color: '#e22d04' }}>{this.state.errors.subject}</span>
            </div>
            <div class="form-group">
                <label for="name">Message</label>
                <textarea class="form-control" name="message" rows="10" data-rule="required" 
                    data-msg="Please write something for us" 
                    value={this.state.message} 
                    onChange={this.handleInputChange.bind(this)} 
                    required = 'required'
                    ></textarea>
                <span className="help-block" style={{ color: '#e22d04' }}>{this.state.errors.message}</span>
            </div>
            <div class="mb-3">
                <div class="loading">Loading</div>
                <div class="error-message"></div>
                <div class="sent-message">Your message has been sent. Thank you!</div>
            </div>
            <div class="text-center"><button type="submit" onClick={this.handleSubmit.bind(this)}>Send Message</button></div>
        </form>
        )
    }
}
