import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Location() {
  const navigate = useNavigate();
  const properties = [
    {
      id: 1,
      title: 'Studio Moderne',
      price: '800 €/mois',
      location: 'Paris',
      surface: '30m²',
      type: 'Studio',
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800'
    },
    {
      id: 2,
      title: 'Appartement T3',
      price: '1200 €/mois',
      location: 'Lyon',
      surface: '65m²',
      type: 'Appartement',
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800'
    },
    {
      id: 3,
      title: 'Maison avec Jardin',
      price: '1800 €/mois',
      location: 'Toulouse',
      surface: '120m²',
      type: 'Maison',
      image: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800'
    }
  ];

  return (
    <Container className="py-5">
      <Button 
        onClick={() => navigate('/')}
        style={{ 
          backgroundColor: '#4ECDC4',
          border: 'none',
          marginBottom: '20px',
          padding: '10px 20px',
          transition: 'all 0.3s'
        }}
        onMouseOver={e => {
          e.currentTarget.style.backgroundColor = '#FF6B6B';
          e.currentTarget.style.transform = 'scale(1.05)';
        }}
        onMouseOut={e => {
          e.currentTarget.style.backgroundColor = '#4ECDC4';
          e.currentTarget.style.transform = 'scale(1)';
        }}
      >
        ← Retour à l'accueil
      </Button>
      <h1 className="text-center mb-5" style={{ color: '#2C3E50' }}>Locations Disponibles</h1>
      <Row>
        {properties.map(property => (
          <Col md={4} key={property.id} className="mb-4">
            <Card style={{ 
              borderRadius: '15px',
              overflow: 'hidden',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s'
            }}
            onMouseOver={e => e.currentTarget.style.transform = 'translateY(-10px)'}
            onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}>
              <div className="position-relative">
                <Card.Img 
                  variant="top" 
                  src={property.image} 
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <span 
                  className="position-absolute top-0 end-0 m-2 badge"
                  style={{ 
                    backgroundColor: '#FFE66D',
                    color: '#2C3E50',
                    padding: '8px 12px'
                  }}
                >
                  {property.price}
                </span>
              </div>
              <Card.Body>
                <Card.Title style={{ color: '#FFE66D' }}>{property.title}</Card.Title>
                <Card.Text>
                  <strong>Type:</strong> {property.type}<br/>
                  <strong>Localisation:</strong> {property.location}<br/>
                  <strong>Surface:</strong> {property.surface}
                </Card.Text>
                <Button 
                  variant="primary" 
                  className="w-100"
                  style={{ 
                    backgroundColor: '#FFE66D',
                    border: 'none',
                    color: '#2C3E50',
                    transition: 'all 0.3s'
                  }}
                  onMouseOver={e => {
                    e.currentTarget.style.backgroundColor = '#4ECDC4';
                    e.currentTarget.style.color = 'white';
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }}
                  onMouseOut={e => {
                    e.currentTarget.style.backgroundColor = '#FFE66D';
                    e.currentTarget.style.color = '#2C3E50';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  Voir les détails
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Location;
