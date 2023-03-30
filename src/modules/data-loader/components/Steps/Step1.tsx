
import { 
    Grid, 
    InputLabel, 
    MenuItem, 
    Select, 
    TextField,
    FormControl 
} from '@mui/material';

const items = [
    {
        name: "Curso 1",
        value: 1
    },
    {
        name: "Curso 2",
        value: 2
    },
    {
        name: "Curso 3",
        value: 3
    }
]

export default function Step1 (props: { 
    onChange: (p: string, v: string|number) => any; 
    state: { course: number; dateStart: string; dateFinish: string; } 
}) {
    return (
        <Grid container paddingX={25} marginY={5} gap={2} display="flex" justifyContent="space-around" minHeight={250}>
            <FormControl sx={{ width: "100%" }}>
                <InputLabel id="select-course">Curso</InputLabel>
                <Select 
                    sx={{ width: "100%" }}
                    id="select-course"
                    name="course"
                    label="Curso"
                    value={props.state.course}
                    onChange={e => props.onChange("course", Number(e.target.value))}
                >
                    {
                        items.map((o: { name: string; value: number }) => 
                            <MenuItem key={o.value} value={Number(o.value)}>{o.name}</MenuItem>
                        )
                    }
                </Select>
            </FormControl>
            <FormControl sx={{ width: "100%" }}>
                <TextField 
                    sx={{ width: "100%" }}
                    id="input-course-start"
                    name="dateStart"
                    type="datetime-local"
                    label="Fecha de Inicio"
                    value={props.state.dateStart}
                    onChange={e => console.log("dateStart : ",e.target.value)}
                />
            </FormControl>
            <FormControl sx={{ width: "100%" }}>
                <TextField 
                    sx={{ width: "100%" }}
                    id="input-course-finish"
                    name="dateFinish"
                    type="datetime-local"
                    label="Fecha de Finalización"
                    value={props.state.dateFinish}
                    onChange={e => console.log("dateFinish : ",e.target.value)}
                />
            </FormControl>
      </Grid>
    )
}