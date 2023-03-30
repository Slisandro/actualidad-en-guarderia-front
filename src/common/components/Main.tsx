import React, { ReactNode } from 'react';
import { Box } from '@mui/material';
import { JsxElement } from 'typescript';

export default function Main ({
    children
}: { children: ReactNode }) {
    const BACKGROUND_CONTAINER = "#D8D8D8";
    return (
        <Box 
            sx={{ 
            paddingY: 1,
            paddingX: 4,
            minHeight: 400,
            height:"max-content", 
            color: "white",
            borderRadius: 2,
            marginY: 1,
            marginTop: 3,
            backgroundColor: BACKGROUND_CONTAINER,
            boxShadow: "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)"
            }}
        >
            {children}
        </Box>
    )
}