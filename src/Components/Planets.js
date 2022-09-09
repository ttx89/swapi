import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Planets({data}) {
  return (
    <>
    <h2>Planets</h2>
    <Row xs={1} md={4} className="g-4">
      {data.map((planets, i) => (
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>{planets.name}</Card.Title>
              <Card.Text>
                <strong>Rotation Period</strong>
                <p>{planets.rotation_period}</p>
                <strong>Orbital Period</strong>
                <p>{planets.orbital_period}</p>
                <strong>Diameter</strong>
                <p>{planets.diameter}</p>
                <strong>Climate</strong>
                <p>{planets.climate}</p>
                <strong>Gravity</strong>
                <p>{planets.gravity}</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </>
  );
}

export default Planets;
