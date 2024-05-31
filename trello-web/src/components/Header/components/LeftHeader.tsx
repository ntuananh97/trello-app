import { Box, Button } from '@mui/material'
import AppsIcon from '@mui/icons-material/Apps';
import Workspaces from '../../Menus/Workspaces';
import Recent from '../../Menus/Recent';
import Starred from '../../Menus/Starred';
import Templates from '../../Menus/Templates';


function LeftHeader() {
  return (
    <Box sx={{
        display: 'flex',
        alignItems: 'center',
        gap: theme => theme.trello.gapHeader
    }}>
        <AppsIcon color='primary' />
        <a className='header__logo'>
          <div className='header__logo-image' />
        </a>
        <Workspaces />
        <Recent />
        <Starred />
        <Templates />
        <Button variant="outlined">Create</Button>
    </Box>
  )
}

export default LeftHeader