import React, { Component } from 'react'
import Iframe from 'react-iframe'
import ContactForm from './ContactForm'

export default class Contact extends Component {    
    render() {
        return (
            <section id="contact" class="contact">
                <div class="container">

                    <div class="section-title">
                        <h2>Contact</h2>
                        <p>Below is my contact details.</p>
                    </div>

                    <div class="row" data-aos="fade-in">

                        <div class="col-lg-5 d-flex align-items-stretch">
                            <div class="info">
                                <div class="address">
                                    <i class="icofont-google-map"></i>
                                    <h4>Location:</h4>
                                    <p>Electronic City Phase 1, Bangalore - 560100</p>
                                </div>

                                <div class="email">
                                    <i class="icofont-envelope"></i>
                                    <h4>Email:</h4>
                                    <p>bhaumikg1986@gmail.com</p>
                                </div>

                                <div class="phone">
                                    <i class="icofont-phone"></i>
                                    <h4>Call:</h4>
                                    <p>+91 9836952545</p>
                                </div>
                                <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.3298071408462!2d77.6555568143031!3d12.821951921614726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6c771f9ef4f7%3A0xa19fa8eee2a3d365!2sSmondoville!5e0!3m2!1sen!2sbg!4v1595943750949!5m2!1sen!2sbg"
                                    frameborder="0"
                                    style="border:0"
                                    width="100%"
                                    height="200px"
                                    id="myId"
                                    className="myClassname"
                                    display="initial"
                                    position="relative" />
                            </div>

                        </div>

                        <div class="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                            <ContactForm></ContactForm>                            
                        </div>

                    </div>

                </div>
            </section>
        )
    }
}
