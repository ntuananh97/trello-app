import Box from '@mui/material/Box'
import LeftHeader from './LeftHeader'
import RightHeader from './RightHeader'

function Header() {
  return (
    <header className='header'>
      <Box
        sx={{
          height: (theme) => theme.trello.headerBarHeight,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        className="header__container"
      >
        <LeftHeader />
        <RightHeader />
      </Box>
    </header>
  );
}

export default Header