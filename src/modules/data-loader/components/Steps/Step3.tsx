
import { 
    Grid, 
    InputLabel, 
    MenuItem, 
    Select, 
    TextField,
    FormControl,
    Button,
    Typography
} from '@mui/material';
import Add from '@mui/icons-material/Add';

export default function Step3 (props: { 
    state: { 
        course: {
            name: string;
        };
        nameClient: string; 
        dateStart: string;
        dateFinish: string;
        SHCP: string; 
        fileName: string;
    } 
}) {
    return (
        <Grid container paddingX={25} marginY={5} minHeight={250}>
            <Grid item xs={4}>
                <FormControl sx={{ width: "95%" }}>
                    <TextField 
                        sx={{ width: "100%" }}
                        id="input-course"
                        name="course"
                        type="string"
                        label="Curso"
                        value={props.state.course.name}
                        disabled
                    />
                </FormControl>
            </Grid>
            <Grid item xs={4} textAlign="center">
                <FormControl sx={{ width: "95%" }}>
                    <TextField 
                        sx={{ width: "100%" }}
                        id="input-course-start"
                        name="dateStart"
                        type="datetime-local"
                        label="Fecha de Inicio"
                        value={props.state.dateStart}
                        disabled
                    />
                </FormControl>
            </Grid>
            <Grid item xs={4} textAlign="end">
                <FormControl sx={{ width: "95%" }}>
                    <TextField 
                        sx={{ width: "100%" }}
                        id="input-course-finish"
                        name="dateFinish"
                        type="datetime-local"
                        label="Fecha de Finalización"
                        value={props.state.dateFinish}
                        disabled
                    />
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <FormControl sx={{ width: "95%" }}>
                    <TextField 
                        sx={{ width: "100%" }}
                        id="input-client-name"
                        name="nameClient"
                        type="string"
                        label="Nombre del cliente"
                        value={props.state.nameClient}
                        disabled
                    />
                </FormControl>
            </Grid>
            <Grid item xs={6} display="flex" justifyContent="flex-end">
                <FormControl sx={{ width: "95%" }}>
                    <TextField 
                        sx={{ width: "100%" }}
                        name="SHCP"
                        type="string"
                        label="Registro Federal de Contribuyentes con homoclave (SHCP)"
                        value={props.state.SHCP}
                        disabled
                    />
                </FormControl>
            </Grid>
            <Grid item xs={12}>
                <FormControl sx={{ width: "100%" }}>
                    <TextField 
                        sx={{ width: "100%" }}
                        name="SHCP"
                        type="string"
                        label="Archivos"
                        value={props.state.fileName}
                        disabled
                    />
                </FormControl>
            </Grid>
        </Grid>
    )
}