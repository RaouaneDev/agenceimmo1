import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

function NavigationBar() {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    setExpanded(false);  // Ferme le menu
    navigate(path);
  };

  return (
    <Navbar 
      expand="lg" 
      fixed="top" 
      bg="white" 
      expanded={expanded}
      style={{ boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}
    >
      <Container>
        <Navbar.Brand 
          onClick={() => handleNavigation('/')} 
          style={{ 
            cursor: 'pointer',
            color: '#2C3E50',
            fontWeight: 'bold',
            fontSize: '1.5rem'
          }}
        >
          Agence Immobilière
        </Navbar.Brand>
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          onClick={() => setExpanded(!expanded)}
          style={{
            border: '1px solid #FFE66D',
            padding: '0.5rem',
            backgroundColor: '#4ECDC4'
          }}
        >
          <span 
            className="navbar-toggler-icon" 
            style={{
              backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(255, 255, 255, 1)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e")`
            }}
          />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link 
              onClick={() => handleNavigation('/')}
              style={{ 
                color: '#2C3E50',
                transition: 'color 0.3s'
              }}
              onMouseOver={e => e.target.style.color = '#4ECDC4'}
              onMouseOut={e => e.target.style.color = '#2C3E50'}
            >
              Accueil
            </Nav.Link>
            <Nav.Link 
              onClick={() => handleNavigation('/properties')}
              style={{ 
                color: '#2C3E50',
                transition: 'color 0.3s'
              }}
              onMouseOver={e => e.target.style.color = '#4ECDC4'}
              onMouseOut={e => e.target.style.color = '#2C3E50'}
            >
              Propriétés
            </Nav.Link>
            <Nav.Link 
              onClick={() => handleNavigation('/contact')}
              style={{ 
                color: '#FF6B6B',
                fontWeight: 'bold',
                transition: 'color 0.3s'
              }}
              onMouseOver={e => e.target.style.color = '#4ECDC4'}
              onMouseOut={e => e.target.style.color = '#FF6B6B'}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
