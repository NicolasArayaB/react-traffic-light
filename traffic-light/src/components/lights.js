import { Row, Col } from 'react-bootstrap'

const Lights = (props) => {
    const [color, setColor] = useState(true);
    const [selected, setSelected] = useState(false)
    const className = (color ? `${props.color}` : "" ) + " light" + (selected ? " selected" : "");

    return <Row>
            <Col>
                <div onClick={() => setSelected(selected ? false : true)} className={className} />
            </Col>
        </Row>
}

export default Lights;