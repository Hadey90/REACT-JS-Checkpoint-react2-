import React from "react";
import { Navbar, Container, Nav, Card } from "react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../src/";

function App() {
  return (
    <>
      <div className="App">
        <Navbar bg="success" expand="lg">
          <Container>
            <Navbar.Brand href="#home">React Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                {/* Add more Nav.Link components as needed */}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <h1>React Bootstrap Example</h1>

        <Container>
          <Card>
            <Card.Body>
              <Card.Title>Card 1</Card.Title>
              <Card.Text>This is the content of Card 1.</Card.Text>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <Card.Title>Card 2</Card.Title>
              <Card.Text>This is the content of Card 2.</Card.Text>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <Card.Title>Card 3</Card.Title>
              <Card.Text>This is the content of Card 3.</Card.Text>
            </Card.Body>
          </Card>
        </Container>
      </div>
    </>
  );
}

export default App;
