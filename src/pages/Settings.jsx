import React from 'react'
import Sidenav from '../components/Sidenav'
import Appbar from '../components/Appbar'
import Box from '@mui/material/Box';




const Settings = () => {
  return (
    <>
    <Appbar/>
 <Box sx={{ display: 'flex' }}>
    <Sidenav/>
    <h1 style={{ marginTop: '90px', marginLeft: '16px' }}>Settings</h1>
  
   </Box>
  
 </>
  )
}

export default Settings
