import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-white py-4 mt-auto">
      <Container>
        <Row>
          <Col md={4} className="mb-3">
            <h5>Agence Immobilière</h5>
            <p>Votre partenaire de confiance pour tous vos projets immobiliers.</p>
          </Col>
          <Col md={4} className="mb-3">
            <h5>Contact</h5>
            <p>
              123 Rue de l'Immobilier<br />
              75000 Paris<br />
              Tél: +33 1 23 45 67 89<br />
              Email: contact@agence-immobiliere.fr
            </p>
          </Col>
          <Col md={4} className="mb-3">
            <h5>Horaires d'ouverture</h5>
            <p>
              Lundi - Vendredi: 9h00 - 18h00<br />
              Samedi: 9h00 - 12h00<br />
              Dimanche: Fermé
            </p>
          </Col>
        </Row>
        <hr />
        <div className="text-center">
          <p className="mb-0">&copy; {new Date().getFullYear()} Agence Immobilière. Tous droits réservés.</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
