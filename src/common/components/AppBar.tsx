import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';

import useRoutesTypes from '../hooks/routes-types-hook';
import { Route } from '../models/route-model';

export default function AppBarComponent() {
	const menuItems: Route[] = useRoutesTypes();

	return (
	    <AppBar 
			position="static" 
			sx={{ 
				background: "#D8D8D8", 
				display: "flex", 
				gap: 1, 
				paddingY: 1, 
				borderRadius: 2
			}}
		>
	    	<Box sx={{ textAlign: "center", marginTop: 1 }}>
	    		<Link
		            to="/"
		            style={{
		              margin: 1,
		              fontSize: '1.8rem',
		              fontWeight: 700,
		              fontFamily: "Roboto",
		              textAlign: "center",
			          letterSpacing: "2px",
		              textDecoration: 'none',
					  color: "#2C3333"
		            }}
		        >
	            	Actualidad en Guarderías
	          	</Link>
	    	</Box>
	    	<Divider sx={{ marginX: 10, marginY: .5, marginBottom: 0 }} />
	    	<Box 
	    		sx={{ 
	    			marginX: 15, 
	    			display: "flex", 
	    			flexDirection: "row", 
	    			justifyContent: "space-between" 
	    		}} 
	    	>
			    {menuItems.map(page => (
			      	<MenuItem key={page.path}>
			            <Link 
		            		to={page.path}
			            	style={{ 
			            		fontFamily: "Roboto", 
			            		fontWeight: 500,
			            		letterSpacing: "1px",
			            		textDecoration: "none",
								color: "#2C3333"
			            	}}
			            >
			            	{page.label}
			            </Link>
			        </MenuItem>)
			    )}
	    	</Box>
	    </AppBar>
	);
}