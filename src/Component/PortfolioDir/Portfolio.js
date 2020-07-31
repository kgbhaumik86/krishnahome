import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import PortfolioInfo from './PortfolioInfo'
import PortModalInfo from './PortModalInfo'
import {Container, Row, Col} from 'react-bootstrap'

export default class Portfolio extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isModalVisible: false,
            filteredModal: {}
        }
    }
    handleShow = (index) => {
        console.log(index.projId)
        const portInfo = PortModalInfo.filter( i => i.projId === index.projId ) 
        console.log(portInfo[0])
        this.setState({
            isModalVisible: true,
            filteredModal: portInfo[0]
        })
    }
    handleClose = () => {
        this.setState({
            isModalVisible: false
        })
    }
    render() {        
        return (

            <section id="portfolio" class="portfolio section-bg">
                <div class="container">

                    <div class="section-title">
                        <h2>Portfolio</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>

                    <div class="row" data-aos="fade-up">
                        <div class="col-lg-12 d-flex justify-content-center">
                            <ul id="portfolio-flters">
                                <li data-filter="*" class="filter-active">All</li>                                
                                <li data-filter=".filter-Migration">SharePoint Migration</li>
                                <li data-filter=".filter-SharePoint2010">SharePoint 2010</li>
                                <li data-filter=".filter-SharePoint2013">SharePoint 2013</li>
                                <li data-filter=".filter-SharePointOnline">SharePoint Online</li>
                                <li data-filter=".filter-Web">Web</li>
                            </ul>
                        </div>
                    </div>

                    <div class="row portfolio-container" data-aos="fade-up" data-aos-delay="100">
                        {
                            PortfolioInfo.map((index) =>
                                <div class={index.filterClass} style={{ 'padding-top': '3%' }}>
                                    <a className="portfolio-link" data-toggle="modal" onClick={this.handleShow.bind(this,index)}>
                                        <div className="portfolio-hover">
                                            <div className="portfolio-hover-content"><i className="fa fa-plus fa-3x"></i></div>
                                        </div>
                                        <img className="img-fluid" src={process.env.PUBLIC_URL + index.imgUrl} />
                                    </a>
                                    <div className="portfolio-caption">
                                        <div className="portfolio-caption-heading" >{index.title}</div>
                                        <div className="portfolio-caption-subheading text-muted" >{index.duration}</div>
                                    </div>
                                </div>
                            )
                        }

                    </div>
                </div>
                <Modal show={this.state.isModalVisible} onHide={this.handleClose}
                    scrollable='true'
                    dialogClassName="modal-90w"
                    aria-labelledby="example-custom-modal-styling-title"
                    size='xl'>
                    <Modal.Header closeButton>
                        <div>
                            <Modal.Title>{this.state.filteredModal.title}</Modal.Title>
                            <p className="item-intro text-muted">Client : {this.state.filteredModal.client} - ({this.state.filteredModal.duration})</p>
                        </div>
                    </Modal.Header>
                    <Modal.Body>
                        <Container>
                            <Row>
                                <Col sm={2}><b>Project Details:</b></Col>
                                <Col sm={10}>{this.state.filteredModal.desc}</Col>
                            </Row>
                            <Row style={{"padding-top": "2em"}}>
                                <Col sm={2}><b>Technology Used:</b></Col>
                                <Col sm={10}>{this.state.filteredModal.technology}</Col>
                            </Row>
                            <Row style={{"padding-top": "2em"}}>
                                <Col sm={2}><b>Deliverables:</b></Col>
                                <Col sm={10}>{this.state.filteredModal.deliverables}</Col>
                            </Row>
                            <Row style={{"padding-top": "2em"}}>
                                <Col sm={2}><b>Roles:</b></Col>
                                <Col sm={10}>{this.state.filteredModal.roles}</Col>
                            </Row>
                            <Row style={{"padding-top": "2em"}}>
                                <Col sm={2}><b>Responsibility:</b></Col>
                                <Col sm={10}>{this.state.filteredModal.responsibility}</Col>
                            </Row>
                        </Container>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                </Button>
                    </Modal.Footer>
                </Modal>
            </section>


        )
    }
}
