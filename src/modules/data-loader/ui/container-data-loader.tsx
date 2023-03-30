import React from 'react';
import Main from "../../../common/components/Main";
import Form from '../components/Form';
import moment from 'moment'

export default function ContainerDataLoader () {
    const [state, setState] = React.useState({
        nameClient: "",
        SHCP: "",
        course: 1,
        courseName: undefined,
        dateStart: moment(new Date()).format('YYYY-MM-DDTHH:mm'),
        dateFinish: moment(new Date()).format('YYYY-MM-DDTHH:mm'),
        fileName: "archivo-1.xlsx"
    });

    const onChange = (p: string, v: string | number) => {
        setState({
            ...state,
            [p]: v
        })
    }

    return (
        <Main>
            <Form state={state} onChange={onChange} />
        </Main>
    )
}