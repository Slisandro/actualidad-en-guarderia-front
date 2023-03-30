import React from 'react';
import Main from "../../../common/components/Main";
import TableComponent from '../components/Table';

export default function ContainerBills () {
    const bills = [
        {
            id: "1",
            user: {
                id: "1",
                firstName: "Nombre", 
                lastName: "Apellido",
                CURP: "123456",
                email: "test@gmail.com",
                position: "1"
            },
            course: {
                id: "1",
                title: "Curso 1", 
                description: "Es un curso didáctico",
                dateStart: new Date().toISOString().split('T')[0],
                dateFinish: new Date().toISOString().split('T')[0],
                tutor: "El gordo mexicano"
            },
            dateCreated: new Date().toISOString().split('T')[0]
        }
    ]

    return (
        <Main>
            <TableComponent rows={bills} />
        </Main>
    )
}