import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Starships({data}) {
  return (
    <>
    <h2>Starships</h2>
    <Row xs={1} md={4} className="g-4">
      {data.map((starships, i) => (
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>{starships.name}</Card.Title>
              <Card.Text>
                <strong>Model</strong>
                <p>{starships.model}</p>
                <strong>Manufacturer</strong>
                <p>{starships.manufacturer}</p>
                <strong>cost in credits</strong>
                <p>{starships.cost_in_credits}</p>
                <strong>Length</strong>
                <p>{starships.length}</p>
                <strong>crew</strong>
                <p>{starships.crew}</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </>
  );
}

export default Starships;
