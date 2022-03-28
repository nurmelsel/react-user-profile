import React from "react";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import {Link, Route, Routes } from "react-router-dom";
import Information from "./Information";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../action";

export default function Table() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const state = useSelector((state) => state);
  

  const { users } = state;

  users.sort((a, b) => a.name.localeCompare(b.name));

  const [inputVal, setInputVal] = useState("");

  const filterUsers = users.filter((item) =>
    item.name.toLowerCase().includes(inputVal.toLowerCase())
  );

  return (
    <>
      <div>
        <p></p>
        <p></p>
      </div>

      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon">
            <i className="fa fa-user prefix"></i>
          </span>
        </div>
        <input
          onChange={(e) => setInputVal(e.target.value)}
          type="text"
          className="form-control"
          placeholder="Filter Name"
          aria-label="Username"
          aria-describedby="basic-addon"
        />
       
      </div>
      <div>
        <h3 className="blue-text">CANDİDATES</h3>
      </div>

      <MDBTable>
        <MDBTableHead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">NAME</th>
            <th scope="col">TEL</th>
            <th scope="col">DETAILS</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {filterUsers.map((item, i) => (
            <tr key={i} className="table-primary">
              <th scope="row">{i + 1}</th>
              <td>{item.name}</td>
              <td>{item.phone}</td>
              <td>
                <td>
                  <Link to={"Information/" + item.id} className="btn btn-primary">
                    Details
                  </Link>
                </td>
              </td>
            </tr>
          ))}
        </MDBTableBody>
      </MDBTable>
      <Routes>
     <Route path="Information/:id" element={<Information />} />
      </Routes>
  
    </>
  );
}
