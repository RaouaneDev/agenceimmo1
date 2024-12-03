import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

// Exemple de données de propriétés (à remplacer par des données réelles)
const sampleProperties = [
  {
    id: 1,
    title: 'Villa Moderne',
    price: '450,000 €',
    location: 'Paris',
    bedrooms: 4,
    bathrooms: 2,
    surface: '200m²',
    image: 'https://via.placeholder.com/300x200'
  },
  {
    id: 2,
    title: 'Appartement Centre-Ville',
    price: '280,000 €',
    location: 'Lyon',
    bedrooms: 2,
    bathrooms: 1,
    surface: '75m²',
    image: 'https://via.placeholder.com/300x200'
  },
  // Ajoutez plus de propriétés ici
];

function Properties() {
  return (
    <Container className="py-5">
      <h1 className="text-center mb-4">Nos Propriétés</h1>
      
      {/* Filtres */}
      <div className="filters mb-4">
        <Row>
          <Col md={3}>
            <select className="form-select">
              <option>Type de bien</option>
              <option>Maison</option>
              <option>Appartement</option>
              <option>Villa</option>
            </select>
          </Col>
          <Col md={3}>
            <select className="form-select">
              <option>Prix</option>
              <option>0 - 200,000 €</option>
              <option>200,000 - 500,000 €</option>
              <option>500,000+ €</option>
            </select>
          </Col>
          <Col md={3}>
            <select className="form-select">
              <option>Chambres</option>
              <option>1+</option>
              <option>2+</option>
              <option>3+</option>
              <option>4+</option>
            </select>
          </Col>
          <Col md={3}>
            <Button variant="primary" className="w-100">Filtrer</Button>
          </Col>
        </Row>
      </div>

      {/* Liste des propriétés */}
      <Row>
        {sampleProperties.map(property => (
          <Col md={4} key={property.id} className="mb-4">
            <Card>
              <Card.Img variant="top" src={property.image} />
              <Card.Body>
                <Card.Title>{property.title}</Card.Title>
                <Card.Text>
                  <strong>Prix:</strong> {property.price}<br />
                  <strong>Localisation:</strong> {property.location}<br />
                  <strong>Caractéristiques:</strong> {property.bedrooms} chambres, 
                  {property.bathrooms} sdb, {property.surface}
                </Card.Text>
                <Button variant="primary">Voir les détails</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Properties;
