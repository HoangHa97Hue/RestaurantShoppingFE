import { Box, Fab, Stack } from '@mui/material'
import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { KeyboardArrowUp } from '@mui/icons-material'
import Rightbar from '../components/Rightbar'
import Props from '../interfaces/Props'
import Feed from '../components/Feed'
interface IHome{
    setMode: any;
    mode: any
}
//react query + context API
//user ID 5f2b6804-4c9d-4820-9f7b-8b20ed8a3734
//Graph API
//Sua ten collumn ma ko bi downtime
//insert 1 trieu record >> performance
function Home(props: IHome) {
  return (
    <Box
        sx={{ backgroundColor: "background.default", height: '100vh' }}
        color={"text.primary"}
      >
        <Navbar />
        <Stack direction="row" sx={{height:'100%'}} spacing={2} justifyContent="space-between">
          <Sidebar setMode={props.setMode} mode={props.mode} />
          <Feed />
          <Rightbar {...props}>
            <Fab size="small" aria-label="scroll back to top">
              <KeyboardArrowUp />
            </Fab>
          </Rightbar>
        </Stack>
      </Box>
  )
}

export default Home