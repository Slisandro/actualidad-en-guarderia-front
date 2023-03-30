import { Button, Stack, Grid } from "@mui/material";

export default function Footer (props: { changeStep: any; disabledAdd: boolean; disabledRest: boolean; }) {
    return (
        <Stack sx={{ width: '100%' }} marginBottom={2}>
            <Grid item width={"70%"} marginX={"auto"} display="flex" alignItems="center" justifyContent="space-between">
                <Grid item>
                    <Button onClick={() => props.changeStep("rest")} disabled={props.disabledRest} variant="contained" color="primary">Volver</Button>
                </Grid>
                <Grid item>
                    <Button onClick={() => props.changeStep("add")} disabled={props.disabledAdd} variant="contained" color="success">Continuar</Button>
                </Grid>
            </Grid>
        </Stack>
    )
}