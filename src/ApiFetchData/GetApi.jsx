
import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap';

function GetApi() {
        
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((error) => console.log(error));
    })


        return (
            <>
            <h2>User Data FROM Api:</h2>
            <Table variant='dark' striped border hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>City</th>
                        <th>website</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.username}</td>
                                <td>{item.email}</td>
                                <td>{item.address.city}</td>
                                <td>{item.website}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
            </>
        )
}


export default GetApi;
