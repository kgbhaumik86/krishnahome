import React, { Component } from 'react'
import MyResume from '../../Assets/KgbResume.pdf'

export default class Resume extends Component {
    render() {
        return (
            <section id="resume" class="resume">
                <div class="container">

                    <div class="section-title">
                        <h2>Resume - <a href={MyResume} download="Krishna_Resume.pdf"><i class="fa fa-download" aria-hidden="true"></i></a></h2>
                        <p>IT Professional with 9.7 Years of Experience in Software Development and Support</p>
                    </div>

                    <div class="row">
                        <div class="col-lg-6" data-aos="fade-up">
                            <h3 class="resume-title">Sumary</h3>
                            <div class="resume-item pb-0">
                                <h4>Krishna Gopal Bhaumik</h4>
                                <p><em>Innovative and deadline-driven SharePoint developer with 9+ years of experience designing and developing user-centered material from initial concept to final, polished deliverable.</em></p>
                                <ul>
                                    <li>Electronic City Phase 1, Bangalore- 560100</li>
                                    <li>(91) 9836952545</li>
                                    <li>bhaumikg1986@gmail.com</li>
                                </ul>
                            </div>

                            <h3 class="resume-title">Education</h3>
                            <div class="resume-item">
                                <h4>Bachelor of Technology</h4>
                                <h5>2006 - 2010</h5>
                                <p><em>Seacom Engineering College</em></p>
                                <p>I have completed my B.Tech in Computer Science Engineering with 76.3% marks.</p>
                            </div>
                            <h3 class="resume-title">Areas of Expertisation</h3>
                            <div class="resume-item">
                                <h4>SharePoint Migration</h4>                                
                                <p>I have two years of SharePoint Migration Experience. During this I have crossed so many hardles. As I am good in PowerShell coding and automation, I have automated all the repeatitive migration activities. I have sound knowledge in migration</p>
                            </div>
                            <div class="resume-item">
                                <h4>SharePoint PowerShell</h4>                                
                                <p>Got experience on work with PowerShell in SharePoint. Developed two frameworks using PowerShell which helped me in the automation of ShareGate Migration, User Communication, Banner Settings. </p>
                            </div>
                            <div class="resume-item">
                                <h4>Web Developments</h4>                                
                                <p>Beside SharePoint I am interested in Web development so I worked in HTML, CSS, JavaScript, JQuery, Bootstrap, React js, Node js etc.</p>
                            </div>
                        </div>
                        <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                            <h3 class="resume-title">Professional Experience</h3>
                            <div class="resume-item">
                                <h4>Senior Project Engineer</h4>
                                <h5>2019 - Present</h5>
                                <p><em>Wipro Technologies, Bangalore</em></p>
                                <ul>
                                    <li>Currently working in a SharePoint migration project of Sony Software India.</li>
                                    <li>Peform migration activity with ShareGate tools</li>
                                    <li>Wave plan and automate migration activities using PowerShell</li>
                                    <li>After migration is over validate the sites and deliver it to client.</li>
                                </ul>
                            </div>
                            <div class="resume-item">
                                <h4>Technology Analyst</h4>
                                <h5>2015 - 2019</h5>
                                <p><em>Infosys, Bhubaneswar</em></p>
                                <ul>
                                    <li>Worked extensively in the development and implementation of Microsoft SharePoint 2013/ 2010/ 2007 applications</li>
                                    <li>Perform impact analysis activities for multiple technical initiatives,collaborations and enhancements for smooth running of operations using most feasible approach which ensures meeting the highest standards of Client delivery.</li>
                                    <li>Validation and support in accordance with architecture requirements and participate in knowledge management activities with the objective of ensuring the highest level of service offerings to clients.</li>                                    
                                </ul>
                            </div>
                            <div class="resume-item">
                                <h4>Senior Software Developer</h4>
                                <h5>2010 - 2015</h5>
                                <p><em>TCG Digital, Kolkata</em></p>
                                <ul>
                                    <li>Worked extensively in SharePoint including custom and out of box development, PowerShell Scripting, Angular Js, MS Office InfoPath Forms, SSRS reports. Good knowledge in creating/managing sites and sites collection, site templates, Integration of other custom business applications and has sharp Knowledge on Content management system</li>
                                    <li>Improvised Critical Thinking and logical problem-solving skills.</li>
                                    <li>Experienced in client side working. Key strengths include communicating directly with client for requirements, analysis, design, implementation and support.</li>                                    
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        )
    }
}
