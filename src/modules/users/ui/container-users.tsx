import React from 'react';
import Main from "../../../common/components/Main";
import TableComponent from '../components/Table';

export default function ContainerUsers () {
    const users = [
        {
            id: "1",
            firstName: "Nombre", 
            lastName: "Apellido",
            CURP: "123456",
            email: "test@gmail.com",
            position: "1"
        }
    ]
    return (
        <Main>
            <TableComponent rows={users} />
        </Main>
    )
}