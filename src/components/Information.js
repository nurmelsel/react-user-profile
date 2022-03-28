import React from 'react'
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import { useSelector } from 'react-redux';
import { useParams } from 'react-router'

export default function Detail() {
    let param = useParams()
    console.log(param)

    const users = useSelector(state => state.users)

    console.log(users)

    const user = users.filter(item => item.id == param.id)

    const { name, email, phone, website, address } = user[0]

    return (
        <div>
            <h1>Detail</h1>
            <MDBTable className="table">
                <MDBTableHead>
                    <tr>
                        <th scope="col">TİTLE</th>
                        <th scope="col">CONTENT</th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    <tr>
                        <th scope="row">Name:</th>
                        <td>{name}</td>
                    </tr>
                    <tr>
                        <th scope="row">Phone:</th>
                        <td>{phone}</td>
                    </tr>
                    <tr>
                        <th scope="row">Email:</th>
                        <td>{email} </td>
                    </tr>
                    <tr>
                        <th scope="row">Web Site:</th>
                        <td>{website}</td>
                    </tr>
                    <tr>
                        <th scope="row">Adress</th>
                        <td>{address.street} {address.city}</td>
                    </tr>

                </MDBTableBody>
            </MDBTable> 

        </div>
    )
}