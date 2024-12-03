import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, vous pourrez ajouter la logique d'envoi du formulaire
    console.log('Formulaire soumis:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <h1 className="text-center mb-4">Contactez-nous</h1>
          
          <Row className="mb-5">
            <Col md={4} className="text-center mb-4">
              <div className="contact-info">
                <i className="fas fa-phone mb-2"></i>
                <h5>Téléphone</h5>
                <p>+33 1 23 45 67 89</p>
              </div>
            </Col>
            <Col md={4} className="text-center mb-4">
              <div className="contact-info">
                <i className="fas fa-envelope mb-2"></i>
                <h5>Email</h5>
                <p>contact@agence-immobiliere.fr</p>
              </div>
            </Col>
            <Col md={4} className="text-center mb-4">
              <div className="contact-info">
                <i className="fas fa-map-marker-alt mb-2"></i>
                <h5>Adresse</h5>
                <p>123 Rue de l'Immobilier<br />75000 Paris</p>
              </div>
            </Col>
          </Row>

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Nom complet</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Téléphone</Form.Label>
              <Form.Control
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Envoyer le message
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
