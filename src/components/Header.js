import React from 'react';
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';



function Header() {

    return (
    <div>
      <Navbar>
        <NavbarBrand href="/register">User Registration</NavbarBrand>
        <NavbarToggler />
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/features">
                Features
              </NavLink>
            </NavItem>
          </Nav>
      
      </Navbar>
    </div>
  );
}

export default Header;