import React, { Component } from 'react'
import AboutInfo from './AboutInfo'

export default class About extends Component {
    render() {        
        return (
                <section id="about" class="about">
                    <div class="container">

                        <div class="section-title">
                        <h2>About</h2>
                        <p>{AboutInfo.About}</p>
                        </div>

                        <div class="row">
                        <div class="col-lg-4" data-aos="fade-right">
                            <img src={process.env.PUBLIC_URL + "/assets/img/Kgb-Profile.jpg"} class="img-fluid" alt=""/>
                        </div>
                        <div class="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                            <h3>SharePoint &amp; Web Developer.</h3>
                            <p class="font-italic">{AboutInfo.AboutSub}</p>
                            <div class="row">
                            <div class="col-lg-6">
                                <ul>
                                <li><i class="icofont-rounded-right"></i> <strong>Birthday:</strong> {AboutInfo.MyInfo.BirthDay}</li>
                                <li><i class="icofont-rounded-right"></i> <strong>Email:</strong> {AboutInfo.MyInfo.Email}</li>
                                <li><i class="icofont-rounded-right"></i> <strong>Phone:</strong> {AboutInfo.MyInfo.Phone}</li>
                                <li><i class="icofont-rounded-right"></i> <strong>City:</strong> {AboutInfo.MyInfo.City}</li>
                                </ul>
                            </div>
                            <div class="col-lg-6">
                                <ul>
                                    <li><i class="icofont-rounded-right"></i> <strong>Highest Education:</strong> {AboutInfo.MyInfo.HighestEduction}</li>
                                    <li><i class="icofont-rounded-right"></i> <strong>Current Company:</strong> {AboutInfo.MyInfo.Company}</li>
                                    <li><i class="icofont-rounded-right"></i> <strong>Position:</strong> {AboutInfo.MyInfo.Position}</li>
                                    <li><i class="icofont-rounded-right"></i> <strong>Total Experience:</strong> {AboutInfo.MyInfo.Experience}</li>                            
                                </ul>
                            </div>
                            </div>
                            <p>
                            {AboutInfo.AboutSub2}
                            </p>
                        </div>
                        </div>
                    </div>
                </section>            
        )
    }
}
