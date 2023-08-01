import React, { useContext } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import MyContext from "../contexts/MyContext";

function Navigation() {
  const isActiveLink = ({ isActive }) => {
    const styleActive = "text-decoration-none me-3";
    return isActive
      ? `text-white fw-bold ${styleActive}`
      : `text-white ${styleActive}`;
  };

  const { carrito } = useContext(MyContext);
  const totalPedido = carrito.reduce((total, pizza) => total + pizza.price * pizza.cantidad, 0);

  return (
    <Navbar expand="lg" bg="danger">
      <Container>
        <Navbar.Brand>
          <NavLink to="/" className="text-white text-decoration-none">
            🍕Pizzanime
          </NavLink>
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <NavLink to="/" className={isActiveLink}>
              Home
            </NavLink>
            <NavLink to="/carrito" className={isActiveLink}>
              🛒 ${totalPedido}
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
