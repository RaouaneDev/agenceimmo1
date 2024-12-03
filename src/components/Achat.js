import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Achat() {
  const navigate = useNavigate();
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const properties = [
    {
      id: 1,
      title: 'Appartement Moderne',
      price: '250,000 €',
      location: 'Centre-ville',
      surface: '85m²',
      rooms: 3,
      type: 'Appartement',
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800',
      description: 'Magnifique appartement moderne situé en plein centre-ville. Proche de toutes commodités.',
      features: [
        'Cuisine équipée',
        'Balcon spacieux',
        'Place de parking',
        'Cave',
        'Double vitrage',
        'Ascenseur'
      ],
      energy: 'B',
      yearBuilt: '2018'
    },
    {
      id: 2,
      title: 'Pavillon Familial',
      price: '380,000 €',
      location: 'Quartier résidentiel',
      surface: '150m²',
      rooms: 5,
      type: 'Pavillon',
      image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800',
      description: 'Superbe pavillon familial dans un quartier calme et recherché. Idéal pour une famille.',
      features: [
        'Jardin de 500m²',
        'Garage double',
        'Cuisine américaine',
        'Suite parentale',
        'Sous-sol total',
        'Terrasse exposée sud'
      ],
      energy: 'A',
      yearBuilt: '2020'
    },
    {
      id: 3,
      title: 'Duplex avec Terrasse',
      price: '320,000 €',
      location: 'Proche commodités',
      surface: '110m²',
      rooms: 4,
      type: 'Appartement',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
      description: 'Magnifique duplex avec une grande terrasse offrant une vue dégagée sur la ville.',
      features: [
        'Terrasse de 30m²',
        'Double séjour',
        'Cuisine équipée',
        'Dressing',
        'Parking sécurisé',
        'Cave'
      ],
      energy: 'B',
      yearBuilt: '2019'
    }
  ];

  const handleShowDetails = (property) => {
    setSelectedProperty(property);
    setShowModal(true);
  };

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
      <h1 className="text-center mb-5" style={{ color: '#2C3E50' }}>Appartements & Pavillons</h1>
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
              <Card.Img 
                variant="top" 
                src={property.image} 
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <Card.Body>
                <Card.Title style={{ color: '#FF6B6B' }}>{property.title}</Card.Title>
                <Card.Text>
                  <strong>Type:</strong> {property.type}<br/>
                  <strong>Prix:</strong> {property.price}<br/>
                  <strong>Localisation:</strong> {property.location}<br/>
                  <strong>Surface:</strong> {property.surface}<br/>
                  <strong>Pièces:</strong> {property.rooms}
                </Card.Text>
                <Button 
                  variant="primary" 
                  className="w-100 mb-2"
                  style={{ 
                    backgroundColor: '#FF6B6B',
                    border: 'none',
                    transition: 'all 0.3s'
                  }}
                  onClick={() => handleShowDetails(property)}
                  onMouseOver={e => {
                    e.currentTarget.style.backgroundColor = '#4ECDC4';
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }}
                  onMouseOut={e => {
                    e.currentTarget.style.backgroundColor = '#FF6B6B';
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

      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
        {selectedProperty && (
          <>
            <Modal.Header closeButton style={{ backgroundColor: '#f8f9fa' }}>
              <Modal.Title style={{ color: '#2C3E50' }}>{selectedProperty.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Row>
                <Col md={6}>
                  <img 
                    src={selectedProperty.image} 
                    alt={selectedProperty.title}
                    style={{ width: '100%', borderRadius: '10px' }}
                  />
                </Col>
                <Col md={6}>
                  <h4 style={{ color: '#FF6B6B' }}>{selectedProperty.price}</h4>
                  <p className="text-muted">{selectedProperty.location}</p>
                  <p>{selectedProperty.description}</p>
                  <hr/>
                  <h5 style={{ color: '#2C3E50' }}>Caractéristiques</h5>
                  <ul>
                    {selectedProperty.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                  <hr/>
                  <p><strong>DPE:</strong> {selectedProperty.energy}</p>
                  <p><strong>Année de construction:</strong> {selectedProperty.yearBuilt}</p>
                </Col>
              </Row>
            </Modal.Body>
            <Modal.Footer style={{ backgroundColor: '#f8f9fa' }}>
              <div className="w-100">
                <Row className="mb-2">
                  <Col>
                    <Button 
                      className="w-100"
                      style={{ 
                        backgroundColor: '#2C3E50',
                        border: 'none',
                        transition: 'all 0.3s'
                      }}
                      onClick={() => setShowModal(false)}
                      onMouseOver={e => {
                        e.currentTarget.style.backgroundColor = '#34495E';
                        e.currentTarget.style.transform = 'scale(1.05)';
                      }}
                      onMouseOut={e => {
                        e.currentTarget.style.backgroundColor = '#2C3E50';
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                    >
                      Retour
                    </Button>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Button 
                      className="w-100"
                      style={{ 
                        backgroundColor: '#4ECDC4',
                        border: 'none',
                        transition: 'all 0.3s'
                      }}
                      as="a"
                      href="tel:+33612345678"
                      onMouseOver={e => {
                        e.currentTarget.style.backgroundColor = '#45B8B0';
                        e.currentTarget.style.transform = 'scale(1.05)';
                      }}
                      onMouseOut={e => {
                        e.currentTarget.style.backgroundColor = '#4ECDC4';
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                    >
                      <FontAwesomeIcon icon={faPhone} className="me-2" />
                      Appeler (+33 6 12 34 56 78)
                    </Button>
                  </Col>
                  <Col>
                    <Button 
                      className="w-100"
                      style={{ 
                        backgroundColor: '#FF6B6B',
                        border: 'none',
                        transition: 'all 0.3s'
                      }}
                      onClick={() => navigate('/contact')}
                    >
                      <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                      Contacter
                    </Button>
                  </Col>
                </Row>
              </div>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </Container>
  );
}

export default Achat;
