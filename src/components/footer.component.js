import React, { Component } from 'react';
import { ListGroup, Row, Container } from 'react-bootstrap';

export default class Footer extends Component {
    render() {
        return(
            <Container >
            <br/>
            <hr />
            <Row>
                <ListGroup horizontal={'md'}>
                    <ListGroup.Item className="border-0"><a href="">twitter</a></ListGroup.Item>
                    <ListGroup.Item className="border-0"><a href="">instagram</a></ListGroup.Item>
                    <ListGroup.Item className="border-0"><a href="">linkedin</a></ListGroup.Item>
                    <ListGroup.Item className="border-0"><a href="">github</a></ListGroup.Item>
                </ListGroup>
            </Row>
            <Row>
                <ListGroup horizontal={'md'} className="" >
                    <ListGroup.Item className="border-0">rutland, vt 05701</ListGroup.Item>
                    <ListGroup.Item className="border-0"><a href="tel:8024651064">802.465.1064</a></ListGroup.Item>
                    <ListGroup.Item className="border-0">roromitch [at] gmail.com</ListGroup.Item>
                </ListGroup>
            </Row>
            </Container>
        )
    }
}