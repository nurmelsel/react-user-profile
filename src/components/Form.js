import React from "react";
import { MDBInput, MDBCheckbox, MDBBtn } from "mdb-react-ui-kit";

export default function Form() {
  return (
    <form className="w-responsive text-center mx-auto p-3 mt-2">
      <MDBInput id="form4Example1" wrapperClass="mb-4" label="Name" />
      <MDBInput
        type="email"
        id="form4Example2"
        wrapperClass="mb-4"
        label="Email address"
      />
      <MDBInput
        wrapperClass="mb-4"
        textarea="true"
        id="form4Example3"
        rows={4}
        label="Message"
      />

      <MDBCheckbox
        wrapperClass="d-flex justify-content-center mb-4"
        id="form4Example4"
        label="Send me a copy of this message"
        defaultChecked
      />

      <MDBBtn type="submit" className="mb-4" block>
        Sign in
      </MDBBtn>
    </form>
  );
}
