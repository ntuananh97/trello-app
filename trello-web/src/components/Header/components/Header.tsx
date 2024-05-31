import Box from '@mui/material/Box'
import LeftHeader from './LeftHeader'
import RightHeader from './RightHeader'

function Header() {
  return (
    <Box sx={{
      height: theme => theme.trello.headerBarHeight,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 15px'
    }}>
      <LeftHeader />
      <RightHeader />
    </Box>
  )
}

export default Header