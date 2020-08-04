import React, { Component } from 'react'
import Typed from 'react-typed';

export default class Hero extends Component {
    render() {
        return (
            <div>
                <section id="hero" class="d-flex flex-column justify-content-center align-items-center">
                <div class="hero-container" data-aos="fade-in">
                    <h1>Krishna Gopal Bhaumik</h1>
                    <p>
                         {/* <span class="typed" data-typed-items="Designer, Designer, Freelancer, Photographer"></span> */}                        
                        <span class="typed">                        
                        <Typed                            
                            strings={["I'm SharePoint Developer", "I'm PowerShell Expert", "I'm Web Developer","I'm Flutist"]}
                            typeSpeed={100}
                            backSpeed={50}
                            backDelay={1}
                            loop
                            smartBackspace
                            />
                        </span>                        
                    </p>
                    </div>
                 <br/>
                </section>
            </div>
        )
    }
}
