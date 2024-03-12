import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import LogoFull from '../assets/icons/Logo_full.png';
import { Link, useNavigate } from 'react-router-dom';

function NavigationBar() {
  const navigate = useNavigate();
  const handleOnDonarClick = () => {
    navigate("/campanias")
  }

  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container className="justify-content-between">
          <Navbar.Brand href="#home">
            <Link to='/'>
              <img
                alt=""
                src={LogoFull}
                width="150"
                className="d-inline-block align-top"
              />{' '}
            </Link>
          </Navbar.Brand>
          <Nav className="ml-auto" activeKey="/home">
            <Nav.Item className="p-md-2">
              <Nav.Link href="/">
                ¿Quiénes Somos?
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="p-md-2">
              <Nav.Link href='/impacto'>
                Impacto
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="p-md-2">
              <Nav.Link href="/transparencia">
                Transparencia
              </Nav.Link>
            </Nav.Item>
            {/*<Nav.Item className="p-md-2">
              <Nav.Link href="/testimonios">
                Testimonios
              </Nav.Link>
            </Nav.Item> */}
            <Nav.Item className="p-md-2">
              <Button variant="primary" onClick={handleOnDonarClick}>
                Quiero donar
              </Button>
            </Nav.Item>
            {/* <Nav.Item className="p-md-2">
              <Nav.Link href='/campanias'>
                Campañias
              </Nav.Link>
            </Nav.Item> */}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;
