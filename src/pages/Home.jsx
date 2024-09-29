import React from 'react'
import Sidenav from '../components/Sidenav'
import Appbar from '../components/Appbar'
import Box from '@mui/material/Box';




const Home = () => {
  return (
    <>
       <Appbar/>
    <Box sx={{ display: 'flex' }}>
       <Sidenav/>
       <h1 style={{ marginTop: '20px', marginLeft: '16px' }}>Home</h1>
     
      </Box>
     
    </>
  
  )
}

export default Home
