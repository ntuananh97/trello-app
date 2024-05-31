import Box from '@mui/material/Box'


function Board() {
  return (
    <Box sx={{
      height: theme => theme.trello.boardBarHeight
    }}>
      Board
    </Box>
  )
}

export default Board