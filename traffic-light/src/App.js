import './App.css';
import { Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';

const Lights = (props) => {
    const [color, setColor] = useState(true);
    const [selected, setSelected] = useState(false)
    const className = (color ? `${props.color}` : "" ) + " light" + (selected ? "selected" : "");
    


    return <Row>
            <Col>
                <div onClick={() => this.setState(selected ? false : true)} className={className} />
            </Col>
        </Row>
}

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
