import React, { useState } from "react";
import { Link } from "react-router-dom";


import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse,
} from "mdb-react-ui-kit";


export default function Navbar() {
  const [showNavColor, setShowNavColor] = useState(false);

  return (
    <>
      <MDBNavbar expand="lg" navbar dark bgColor="primary">
        <MDBContainer>
          <MDBNavbarBrand href="#">AWESOME</MDBNavbarBrand>
          <MDBNavbarToggler
            type="button"
            data-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowNavColor(!showNavColor)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>
          <MDBCollapse show={showNavColor} navbar>
            <MDBNavbarNav className="me-auto mb-2 mb-lg-0 text-light">
              <MDBNavbarItem className="active">
                <MDBNavbarLink aria-current="page" href="#">
                  <Link to="/">Home</Link>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#">
                  <Link to="/Candidates">Candidates</Link>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#">
                  <Link to="/AboutUs">AboutUs</Link>
                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
     
    </>
  );
}
