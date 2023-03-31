import React from 'react';
import { Box } from '@mui/material';
import AppBar from './common/components/AppBar';
import { Route, Routes } from 'react-router-dom'
import Dashboard from './common/ui/dashboard';
import ContainerUsers from './modules/users/ui/container-users';
import ContainerCourses from './modules/courses/ui/container-courses';
import ContainerBills from './modules/bills/ui/container-bills';
import ContainerDataLoader from './modules/data-loader/ui/container-data-loader';

function App() {
  return (
    <Box sx={{ width: "100%", minHeight: "95vh", height: "max-content" }}>
      <AppBar />
      <Routes>
        <Route 
          path="/users"
          Component={() => <ContainerUsers />}
        />
        <Route 
          path="/bills"
          Component={() => <ContainerBills />}
        />
        <Route 
          path="/courses"
          Component={() => <ContainerCourses />}
        />
        <Route 
          path="/data-loader"
          Component={() => <ContainerDataLoader />}
        />
        <Route 
          path="/"
          Component={() => <Dashboard />}
        />
      </Routes>
    </Box>
  );
}

export default App;
