import Box from '@mui/material/Box'

function Trello() {
  return (
    <Box sx={{
      height: theme => `calc(100vh - ${theme.trello.headerBarHeight} - ${theme.trello.boardBarHeight})`,
    }}>
      Trello Content
    </Box>
  )
}

export default Trello