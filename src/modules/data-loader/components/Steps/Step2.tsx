import { 
    Grid, 
    TextField,
    FormControl,
    Button
} from '@mui/material';
import Add from '@mui/icons-material/Add';

export default function Step2 (props: { 
    onChange: (p: string, v: string|number) => any; 
    state: { nameClient: string; SHCP: string; } 
}) {
    return (
        <Grid container paddingX={25} marginY={5} gap={0} display="flex" justifyContent="flex-start" minHeight={250} flexDirection={"column"}>
            <Grid container height={"max-content"} marginBottom={4}>
                <Grid item xs={6}>
                    <FormControl sx={{ width: "95%" }}>
                        <TextField 
                            sx={{ width: "100%" }}
                            id="input-course-start"
                            name="nameClient"
                            type="string"
                            label="Nombre del cliente"
                            value={props.state.nameClient}
                            onChange={e => props.onChange("nameClient", e.target.value)}
                        >
                        </TextField>
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <FormControl sx={{ width: "95%" }}>
                        <TextField 
                            sx={{ width: "100%" }}
                            id="input-course-start"
                            name="SHCP"
                            type="string"
                            label="Registro Federal de Contribuyentes con homoclave (SHCP)"
                            value={props.state.SHCP}
                            onChange={e => props.onChange("SHCP", e.target.value)}
                        >
                        </TextField>
                    </FormControl>
                </Grid>
            </Grid>
            <Grid container>
                <FormControl 
                    sx={{ 
                        width: "100%", 
                        height: "max-content" 
                    }}
                >
                    <Button 
                        variant="contained" 
                        component="label" 
                        color="primary" 
                        sx={{ 
                            display: "flex", 
                            alignItems: "center", 
                            justifyContent: "center", 
                            gap: 1,
                            height: 45
                        }}
                    >
                        {" "}
                        <Add /> Subir archivo
                        <input 
                            type="file" 
                            hidden 
                            accept=".xlsx, .xls, .csv" 
                        />
                    </Button>
                </FormControl> 
            </Grid>
        </Grid>
    )
}