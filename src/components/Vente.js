import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Vente() {
  const navigate = useNavigate();
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const properties = [
    {
      id: 1,
      title: 'Terrain Constructible',
      price: '180,000 €',
      location: 'Zone Résidentielle',
      surface: '800m²',
      type: 'Terrain plat',
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800',
      description: 'Magnifique terrain plat constructible dans un quartier résidentiel calme. Idéal pour projet de construction.',
      features: [
        'Terrain viabilisé',
        'Façade de 20m',
        'Exposition Sud',
        'Zone pavillonnaire',
        'Proche écoles',
        'Transport en commun'
      ],
      soil: 'Stable',
      zoning: 'Zone UC'
    },
    {
      id: 2,
      title: 'Terrain avec Vue',
      price: '250,000 €',
      location: 'Colline',
      surface: '1200m²',
      type: 'Terrain en pente douce',
      image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800',
      description: 'Superbe terrain avec vue panoramique. Pente douce idéale pour une construction sur plusieurs niveaux.',
      features: [
        'Vue dégagée',
        'Orientation Sud-Ouest',
        'Partiellement viabilisé',
        'Environnement boisé',
        'Accès facile',
        'Quartier prisé'
      ],
      soil: 'Rocheux',
      zoning: 'Zone UB'
    },
    {
      id: 3,
      title: 'Terrain Viabilisé',
      price: '150,000 €',
      location: 'Proche centre',
      surface: '600m²',
      type: 'Terrain prêt à construire',
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800',
      description: 'Terrain entièrement viabilisé proche du centre-ville. Toutes commodités à proximité.',
      features: [
        'Entièrement viabilisé',
        'Plat',
        'Façade de 15m',
        'Proche commerces',
        'École à pied',
        'Bus à 100m'
      ],
      soil: 'Argileux',
      zoning: 'Zone UA'
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
      <h1 className="text-center mb-5" style={{ color: '#2C3E50' }}>Terrains Disponibles</h1>
      
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
                <Card.Title style={{ color: '#4ECDC4' }}>{property.title}</Card.Title>
                <Card.Text>
                  <strong>Type:</strong> {property.type}<br/>
                  <strong>Prix:</strong> {property.price}<br/>
                  <strong>Localisation:</strong> {property.location}<br/>
                  <strong>Surface:</strong> {property.surface}
                </Card.Text>
                <Button 
                  variant="primary" 
                  className="w-100 mb-2"
                  style={{ 
                    backgroundColor: '#4ECDC4',
                    border: 'none',
                    transition: 'all 0.3s'
                  }}
                  onClick={() => handleShowDetails(property)}
                  onMouseOver={e => {
                    e.currentTarget.style.backgroundColor = '#FF6B6B';
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }}
                  onMouseOut={e => {
                    e.currentTarget.style.backgroundColor = '#4ECDC4';
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
                  <h4 style={{ color: '#4ECDC4' }}>{selectedProperty.price}</h4>
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
                  <p><strong>Type de sol:</strong> {selectedProperty.soil}</p>
                  <p><strong>Zonage:</strong> {selectedProperty.zoning}</p>
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

export default Vente;
