import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faLandmark, faHome } from '@fortawesome/free-solid-svg-icons';

function Home() {
  const navigate = useNavigate();

  const services = [
    {
      title: "Appartements & Pavillons",
      description: "Découvrez notre sélection d'appartements modernes et de pavillons familiaux. Des biens d'exception pour tous les styles de vie.",
      icon: faBuilding,
      path: '/achat',
      color: '#FF6B6B',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800'
    },
    {
      title: "Terrains",
      description: "Terrains constructibles dans les meilleurs emplacements. Réalisez votre rêve de construction sur-mesure.",
      icon: faLandmark,
      path: '/vente',
      color: '#4ECDC4',
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800'
    },
    {
      title: "Location",
      description: "Large choix de locations : appartements, maisons, lofts. Trouvez le bien idéal pour votre prochain chez-vous.",
      icon: faHome,
      path: '/location',
      color: '#FFE66D',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div style={{
        background: 'linear-gradient(135deg, #2C3E50 0%, #4ECDC4 100%)',
        padding: '120px 0',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url(https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1500)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.2
        }}></div>
        
        <Container style={{ position: 'relative' }}>
          <Row className="align-items-center">
            <Col md={8} className="text-center text-md-start">
              <h1 style={{
                color: 'white',
                fontSize: '3.5rem',
                fontWeight: 'bold',
                marginBottom: '1.5rem',
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
              }}>
                Trouvez votre bien idéal
              </h1>
              <p style={{
                color: 'white',
                fontSize: '1.4rem',
                marginBottom: '2rem',
                opacity: 0.9,
                textShadow: '1px 1px 2px rgba(0,0,0,0.2)'
              }}>
                Des propriétés d'exception sélectionnées pour vous
              </p>
              <div className="d-flex gap-3 justify-content-center justify-content-md-start">
                <button 
                  onClick={() => navigate('/achat')}
                  style={{
                    background: '#FF6B6B',
                    color: 'white',
                    border: 'none',
                    padding: '12px 30px',
                    borderRadius: '50px',
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 15px rgba(255,107,107,0.3)'
                  }}
                  onMouseOver={e => {
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(255,107,107,0.4)';
                  }}
                  onMouseOut={e => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(255,107,107,0.3)';
                  }}
                >
                  Découvrir nos biens
                </button>
                <button 
                  onClick={() => navigate('/contact')}
                  style={{
                    background: 'transparent',
                    color: 'white',
                    border: '2px solid white',
                    padding: '12px 30px',
                    borderRadius: '50px',
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                  onMouseOut={e => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  Nous contacter
                </button>
              </div>
            </Col>
          </Row>
        </Container>

        {/* Formes décoratives */}
        <div style={{
          position: 'absolute',
          bottom: '-50px',
          right: '-50px',
          width: '200px',
          height: '200px',
          background: '#FFE66D',
          borderRadius: '50%',
          opacity: 0.1
        }}></div>
        <div style={{
          position: 'absolute',
          top: '-30px',
          left: '-30px',
          width: '150px',
          height: '150px',
          background: '#FF6B6B',
          borderRadius: '50%',
          opacity: 0.1
        }}></div>
      </div>

      {/* Services Section */}
      <Container fluid className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <Container>
          <h2 className="text-center mb-5" style={{ 
            color: '#2C3E50',
            fontSize: '2.5rem',
            fontWeight: 'bold',
            position: 'relative',
            paddingBottom: '15px'
          }}>
            Nos Services
            <div style={{
              content: '""',
              position: 'absolute',
              bottom: '0',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '80px',
              height: '4px',
              background: '#4ECDC4'
            }}></div>
          </h2>
          
          <Row className="g-4">
            {services.map((service, index) => (
              <Col key={index} lg={4} md={6} className="mb-4">
                <Card 
                  className="h-100 border-0 service-card"
                  style={{ 
                    borderRadius: '20px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                    transition: 'all 0.3s ease'
                  }}
                  onClick={() => navigate(service.path)}
                >
                  <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                    <Card.Img 
                      variant="top" 
                      src={service.image}
                      style={{ 
                        height: '100%',
                        width: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.5s ease'
                      }}
                    />
                    <div style={{
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      right: '0',
                      bottom: '0',
                      background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)'
                    }}></div>
                    <FontAwesomeIcon 
                      icon={service.icon} 
                      style={{
                        position: 'absolute',
                        top: '20px',
                        right: '20px',
                        fontSize: '2rem',
                        color: 'white',
                        filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
                      }}
                    />
                  </div>
                  
                  <Card.Body style={{ padding: '2rem' }}>
                    <Card.Title 
                      style={{ 
                        color: service.color,
                        fontSize: '1.5rem',
                        fontWeight: 'bold',
                        marginBottom: '1rem'
                      }}
                    >
                      {service.title}
                    </Card.Title>
                    <Card.Text style={{ 
                      color: '#666',
                      fontSize: '1.1rem',
                      lineHeight: '1.6'
                    }}>
                      {service.description}
                    </Card.Text>
                    <div className="mt-3 text-end">
                      <span 
                        style={{ 
                          color: service.color,
                          fontWeight: 'bold',
                          fontSize: '0.9rem',
                          textTransform: 'uppercase',
                          letterSpacing: '1px'
                        }}
                      >
                        En savoir plus →
                      </span>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>

        <style>
          {`
            .service-card:hover {
              transform: translateY(-10px);
              box-shadow: 0 15px 40px rgba(0,0,0,0.2);
            }
            .service-card:hover img {
              transform: scale(1.1);
            }
          `}
        </style>
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
