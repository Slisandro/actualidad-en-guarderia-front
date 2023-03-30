import Main from "../../../common/components/Main";
import TableComponent from '../components/Table';

export default function ContainerCourses () {
    const courses = [
        {
            id: "1",
            title: "Curso 1", 
            description: "Es un curso didáctico",
            dateStart: new Date().toISOString().split('T')[0],
            dateFinish: new Date().toISOString().split('T')[0],
            tutor: "El gordo mexicano"
        }
    ];

    return (
        <Main>
            <TableComponent rows={courses} />
        </Main>
    )
}