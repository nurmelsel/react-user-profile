import React, { Component } from "react";
import {
  MDBJumbotron,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCardBody,
  MDBCardText,
  MDBCardTitle,
} from "mdbreact";

export default class AboutUs extends Component {
  render() {
    return (
      <MDBContainer className="mt-5 text-center">
        <MDBRow>
          <MDBCol>
            <MDBJumbotron>
              <MDBCardBody>
                <MDBCardTitle className="h2">WHO WE ARE</MDBCardTitle>
                <p className="blue-text my-4 font-weight-bold">
                  WE ARE A COLLACTIVE GROUP OF DEVELOPERS
                </p>
                <MDBCardText>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
                  aliquid dolorem ea distinctio exercitationem delectus qui,
                  quas eum architecto, amet quasi accusantium, fugit consequatur
                  ducimus obcaecati numquam molestias hic itaque accusantium
                  doloremque laudantium, totam rem aperiam.Lorem ipsum dolor sit
                  amet, consectetur adipisicing elit. Fuga aliquid dolorem ea
                  distinctio exercitationem delectus qui, quas eum architecto,
                  amet quasi accusantium, fugit consequatur ducimus obcaecati
                  numquam molestias hic itaque accusantium doloremque
                  laudantium, totam rem aperiam.Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Fuga aliquid dolorem ea
                  distinctio exercitationem delectus qui, quas eum architecto,
                  amet quasi accusantium, fugit consequatur ducimus obcaecati
                  numquam molestias hic itaque accusantium doloremque
                  laudantium, totam rem aperiam.
                </MDBCardText>
                <hr className="my-4" />
              </MDBCardBody>
            </MDBJumbotron>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}
