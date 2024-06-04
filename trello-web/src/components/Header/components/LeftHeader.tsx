import { Box } from '@mui/material'
import AppsIcon from '@mui/icons-material/Apps';
import CreateHeaderButton from './CreateHeaderButton';
import HeaderMenus from './HeaderMenus';


function LeftHeader() {
  return (
    <Box sx={{
        display: 'flex',
        alignItems: 'center',
        gap: theme => theme.trello.gapHeader
    }}
      className="header__left"
    >
        <AppsIcon color='primary' />
        <a className='header__logo'>
          <div className='header__logo-image' />
        </a>
        <HeaderMenus />
        <CreateHeaderButton />
    </Box>
  )
}

export default LeftHeader