import { Container, Row, Col } from 'react-bootstrap'
import { useState } from 'react'

const Lights = () => {
    const [color, setColor] = useState("")

    return (
        <Container className="trafficBody">
            <Row>
                <Col>
                    <div onClick={() => setColor("red")} className= {`red light ${color === "red" ? "selected" : ""}`} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <div onClick={() => setColor("yellow")} className= {`yellow light ${color === "yellow" ? "selected" : ""}`} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <div onClick={() => setColor("green")} className= {`green light ${color === "green" ? "selected" : ""}`} />
                </Col>
            </Row>
        </Container>
    )
}

export default Lights;