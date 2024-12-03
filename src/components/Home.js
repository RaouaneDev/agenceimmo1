import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Hero Section */}
      <div className="hero-section py-5" style={{ background: 'linear-gradient(135deg, #FF6B6B, #4ECDC4)' }}>
        <Container className="py-5">
          <h1 style={{ color: 'white', fontSize: '3.5rem', textShadow: '2px 2px 4px rgba(0,0,0,0.2)' }}>
            Bienvenue chez votre Agence Immobilière
          </h1>
          <p className="lead" style={{ color: 'white', fontSize: '1.5rem' }}>
            Trouvez la propriété de vos rêves
          </p>
        </Container>
      </div>

      {/* Services Section */}
      <Container className="py-5">
        <h2 className="text-center mb-4" style={{ color: '#2C3E50' }}>Nos Services</h2>
        <Row>
          <Col md={4}>
            <Card 
              className="mb-4" 
              style={{ 
                borderTop: '4px solid #FF6B6B', 
                transition: 'transform 0.3s', 
                cursor: 'pointer' 
              }}
              onClick={() => navigate('/achat')}
              onMouseOver={e => e.currentTarget.style.transform = 'translateY(-10px)'}
              onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <Card.Body>
                <Card.Title style={{ color: '#FF6B6B' }}>Appartements & Pavillons</Card.Title>
                <Card.Text>
                  Trouvez la maison de vos rêves parmi notre sélection de propriétés.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card 
              className="mb-4" 
              style={{ 
                borderTop: '4px solid #4ECDC4', 
                transition: 'transform 0.3s', 
                cursor: 'pointer' 
              }}
              onClick={() => navigate('/vente')}
              onMouseOver={e => e.currentTarget.style.transform = 'translateY(-10px)'}
              onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <Card.Body>
                <Card.Title style={{ color: '#4ECDC4' }}>Terrains</Card.Title>
                <Card.Text>
                  Vendez votre bien immobilier avec notre expertise du marché.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card 
              className="mb-4" 
              style={{ 
                borderTop: '4px solid #FFE66D', 
                transition: 'transform 0.3s', 
                cursor: 'pointer' 
              }}
              onClick={() => navigate('/location')}
              onMouseOver={e => e.currentTarget.style.transform = 'translateY(-10px)'}
              onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <Card.Body>
                <Card.Title style={{ color: '#FFE66D' }}>Location</Card.Title>
                <Card.Text>
                  Découvrez nos offres de location adaptées à vos besoins.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Featured Properties Section */}
      <div className="bg-light py-5">
        <Container>
          <h2 className="text-center mb-4" style={{ color: '#2C3E50' }}>Propriétés en Vedette</h2>
          <Row>
            {/* Add featured properties here */}
          </Row>
          <div className="text-center mt-4">
            <Button 
              variant="primary" 
              href="/properties"
              style={{ 
                backgroundColor: '#FF6B6B', 
                border: 'none', 
                padding: '10px 30px',
                transition: 'all 0.3s'
              }}
              onMouseOver={e => {
                e.currentTarget.style.backgroundColor = '#4ECDC4';
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseOut={e => {
                e.currentTarget.style.backgroundColor = '#FF6B6B';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              Voir toutes les propriétés
            </Button>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Home;
