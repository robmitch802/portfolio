import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap'

export default class About extends Component {
    render(){
        return(
            <div>
                <Container>
                    <Row>
                    <h2>About / Home page</h2>
                    </Row>
                    <Row>
                    <p >
                    <img src="../../img/rob_headshot.jpg" width={150} className="mx-auto d-block img-fluid" alt="rob headshot" />
                    </p>
                    <div className="body-text-20">
                    <p>I'm a native Vermonter, a journalist, a former professional athelte and a software developer / data scientist in training.
                    I've made a career of keeping cool in stressful situations, and coming up with simple solutions for complex problems.
                    I find ways to get things done, with a smile. Write, run, code.</p>
                    </div>
                    </Row>
                </Container>
            </div>
        )
    }
}

