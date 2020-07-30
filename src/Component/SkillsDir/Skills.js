import React, { Component } from 'react'
import { Line } from 'rc-progress';

export default class Skills extends Component {
    render() {
        return (
            <section id="skills" class="skills section-bg">
                <div class="container">

                    <div class="section-title">
                        <h2>Skills</h2>
                        <p>Below are my relevant skills</p>
                    </div>

                    <div class="row skills-content">

                        <div class="col-lg-6" data-aos="fade-up">
                            <span class="skill" style={{"color" : "#ff2300"}}>SharePoint</span>
                            <div class="progress">
                                <span class="skill">SharePoint 2010<i class="val">80%</i></span>
                                <Line strokeWidth="4" percent="80" strokeColor='#87d068' />
                            </div>
                            <div class="progress">
                                <span class="skill">SharePoint 2013 - SharePoint Online<i class="val">80%</i></span>
                                <Line strokeWidth="4" percent="80" strokeColor='#87d068' />
                            </div>
                            <div class="progress">
                                <span class="skill">PowerShell <i class="val">80%</i></span>
                                <Line strokeWidth="4" percent="80" strokeColor='#87d068' />
                            </div>
                            <div class="progress">
                                <span class="skill">InfoPath Form <i class="val">90%</i></span>
                                <Line strokeWidth="4" percent="90" strokeColor='#87d068' />
                            </div>
                            <span class="skill" style={{"color" : "#ff2300"}}>Web Development</span>
                            <div class="progress">
                                <span class="skill">React <i class="val">70%</i></span>
                                <Line strokeWidth="4" percent="70" strokeColor='#3FC7FA' />
                            </div>
                            <div class="progress">
                                <span class="skill">HTML <i class="val">90%</i></span>
                                <Line strokeWidth="4" percent="90" strokeColor='#3FC7FA' />
                            </div>
                            <div class="progress">
                                <span class="skill">CSS <i class="val">90%</i></span>
                                <Line strokeWidth="4" percent="90" strokeColor='#3FC7FA' />
                            </div>
                            <div class="progress">
                                <span class="skill">BootStrap <i class="val">80%</i></span>
                                <Line strokeWidth="4" percent="90" strokeColor='#3FC7FA' />
                            </div>
                            <div class="progress">
                                <span class="skill">JavaScript <i class="val">75%</i></span>
                                <Line percent="75" strokeWidth="4" strokeColor="#3FC7FA" />
                            </div>
                        </div>
                        <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                        <span class="skill" style={{"color" : "#ff2300"}}>Development Tools </span>
                            <div class="progress">
                                <span class="skill">ShareGate Migration <i class="val">90%</i></span>
                                <Line strokeWidth="4" percent="90" strokeColor='rgb(11 230 230)' />
                            </div>
                            <div class="progress">
                                <span class="skill">Visual Studio <i class="val">90%</i></span>
                                <Line strokeWidth="4" percent="90" strokeColor='rgb(11 230 230)' />
                            </div>
                            <div class="progress">
                                <span class="skill">Visual Studio code<i class="val">80%</i></span>
                                <Line strokeWidth="4" percent="90" strokeColor='rgb(11 230 230)' />
                            </div>
                            <div class="progress">
                                <span class="skill">SharePoint Designer<i class="val">90%</i></span>
                                <Line strokeWidth="4" percent="90" strokeColor='rgb(11 230 230)' />
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        )
    }
}
