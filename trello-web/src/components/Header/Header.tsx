import Box from '@mui/material/Box'
import ColorMode from '../ColorMode'

function Header() {
  return (
    <Box sx={{
      height: theme => theme.trello.headerBarHeight
    }}>
      <ColorMode />
    </Box>
  )
}

export default Header