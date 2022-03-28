import React, { Component } from "react";
import Corusel from "./Corusel";
import Form from "./Form";


export default class Home extends Component {
  render() {
    return (
      <div>
        <Corusel />
        <Form />
      </div>
    );
  }
}
