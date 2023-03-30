import React from 'react';
import { Card, CardContent, CardHeader, Grid, List, ListItem, Typography } from '@mui/material';
import Main from '../components/Main';

export default function Dashboard ( ) {
    const styleColorText = "rgb(44, 51, 51)";
    const BACKGROUND_CONTAINER = "#F1DEC9";

    return (
        <Main>
            <Grid container display={"flex"} justifyContent={"space-between"}>
                <Grid item xs={3} paddingX={2} paddingY={1}>
                    <Card 
                        elevation={1} 
                        sx={{ 
                            boxShadow: `0px 2px 1px -1px ${BACKGROUND_CONTAINER}, 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)`, 
                            backgroundColor: `${BACKGROUND_CONTAINER}`,
                            ".MuiCardContent-root:last-child": { 
                                paddingBottom: 1.5 
                            }
                        }}
                    >
                        <CardHeader title="Usuarios" sx={{ paddingBottom: 0, color: styleColorText }} style={{ fontFamily: "Roboto", fontWeight: 600 }} />
                        <CardContent sx={{ paddingTop: .5 }} >
                            <List>
                                <ListItem style={{ fontFamily: "Roboto", fontWeight: 400 }} sx={{ color: styleColorText }}>Listado</ListItem>
                                <ListItem style={{ fontFamily: "Roboto", fontWeight: 400 }} sx={{ color: styleColorText }}>Búsqueda</ListItem>
                            </List>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={3} paddingX={2} paddingY={1}>
                    <Card 
                        elevation={1} 
                        sx={{
                            boxShadow: `0px 2px 1px -1px ${BACKGROUND_CONTAINER}, 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)`, 
                            backgroundColor: `${BACKGROUND_CONTAINER}`,
                            ".MuiCardContent-root:last-child": { 
                                paddingBottom: 1.5 
                            }
                        }}>
                        <CardHeader title="Comprobantes" sx={{ paddingBottom: 0, color: styleColorText }}  style={{ fontFamily: "Roboto", fontWeight: 600 }}/>
                        <CardContent sx={{ paddingTop: .5 }} >
                            <List>
                                <ListItem style={{ fontFamily: "Roboto", fontWeight: 400 }} sx={{ color: styleColorText, fontWeight: 500 }}>Listado</ListItem>
                                <ListItem style={{ fontFamily: "Roboto", fontWeight: 400 }} sx={{ color: styleColorText }}>Búsqueda</ListItem>
                            </List>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={3} paddingX={2} paddingY={1}>
                    <Card 
                        elevation={1} 
                        sx={{
                            boxShadow: `0px 2px 1px -1px ${BACKGROUND_CONTAINER}, 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)`, 
                            backgroundColor: `${BACKGROUND_CONTAINER}`,
                            ".MuiCardContent-root:last-child": { 
                                paddingBottom: 1.5 
                            }
                        }}
                    >
                        <CardHeader title="Categorías" sx={{ paddingBottom: 0, color: styleColorText }} style={{ fontFamily: "Roboto", fontWeight: 600 }} />
                        <CardContent sx={{ paddingTop: .5 }} >
                            <List>
                                <ListItem style={{ fontFamily: "Roboto", fontWeight: 400 }} sx={{ color: styleColorText }}>Listado</ListItem>
                                <ListItem style={{ fontFamily: "Roboto", fontWeight: 400 }} sx={{ color: styleColorText }}>Crear</ListItem>
                                <ListItem style={{ fontFamily: "Roboto", fontWeight: 400 }} sx={{ color: styleColorText }}>Búsqueda</ListItem>
                            </List>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={3} paddingX={2} paddingY={1}>
                    <Card 
                        elevation={1} 
                        sx={{
                            boxShadow: `0px 2px 1px -1px ${BACKGROUND_CONTAINER}, 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)`, 
                            backgroundColor: `${BACKGROUND_CONTAINER}`,
                            ".MuiCardContent-root:last-child": { 
                                paddingBottom: 1.5 
                            }
                        }}
                    >
                        <CardHeader title="Carga de datos" sx={{ paddingBottom: 0, color: styleColorText }} style={{ fontFamily: "Roboto", fontWeight: 600 }} />
                        <CardContent sx={{ paddingTop: .5 }} >
                            <List>
                                <ListItem style={{ fontFamily: "Roboto", fontWeight: 400 }} sx={{ color: styleColorText }}>Cargar información (documento excel) </ListItem>
                            </List>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Main>
    )
}