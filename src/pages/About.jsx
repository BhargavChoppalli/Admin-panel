import React from 'react'
import Sidenav from '../components/Sidenav'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';



const About = () => {
  return (
    <Box sx={{ display: 'flex' }}>
       <Sidenav/>
       <h1 style={{ marginTop: '60px', marginLeft: '16px' }}>About</h1>
     
    </Box>
  )
}

export default About
