import React from 'react'
import Sidenav from '../components/Sidenav'
import Box from '@mui/material/Box';




const Settings = () => {
  return (
    <Box sx={{ display: 'flex' }}>
       <Sidenav/>
       <h1 style={{ marginTop: '60px', marginLeft: '16px' }}>Settings</h1>

    </Box>
  )
}

export default Settings
