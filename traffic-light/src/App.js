import './App.css';
import { Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Lights from './components/lights.js'

const App = () => {
    return (
    <Container>
        <Row>
        <Col className="trafficTop" />
        </Row>
        <Row>
            <Container className="trafficBody">
                <Lights color="red" />
                <Lights color="yellow" />
                <Lights color="green" />
            </Container>
        
        </Row>
    </Container>
    )
}

export default App;
