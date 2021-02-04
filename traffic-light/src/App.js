import { Container, Row, Col } from 'react-bootstrap'
import Lights from './components/lights.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

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
