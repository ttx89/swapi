import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function People({data}) {
  return (
    <>
    <h2>People</h2>
    <Row xs={1} md={4} className="g-4">
      {data.map((people, i) => (
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>{people.name}</Card.Title>
              <Card.Text>
                <strong>Height</strong>
                <p>{people.height}</p>
                <strong>Mass</strong>
                <p>{people.mass}</p>
                <strong>Hair Color</strong>
                <p>{people.hair_color}</p>
                <strong>Skin Color</strong>
                <p>{people.skin_color}</p>
                <strong>Birth Year</strong>
                <p>{people.birth_year}</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </>
  );
}

export default People;
