import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import BoltIcon from '@mui/icons-material/Bolt';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import PublicIcon from '@mui/icons-material/Public';
import BoardMore from "../../Menus/BoardMore";

function BoardActions() {
  return (
    <Box sx={{
      display: "flex",
      alignItems: "center",
      gap: '15px'
    }}>
      <Button startIcon={<AppRegistrationIcon />} sx={{display: {xs: 'none', sm: 'flex'}}}>
        Mern Stack
      </Button>
      <Button startIcon={<PublicIcon />} sx={{display: {xs: 'none', md: 'flex'}}}>
        Public/Private Workspaces
      </Button>
      <Button startIcon={<AddToDriveIcon />} sx={{display: {xs: 'none', lg: 'flex'}}}>
        Add to Google Drive
      </Button>
      <Button startIcon={<BoltIcon />} sx={{display: {xs: 'none', lg: 'flex'}}}>
        Automation
      </Button>
      <Button startIcon={<FilterAltIcon />} sx={{display: {xs: 'none', lg: 'flex'}}}>
        Filter
      </Button>

      <BoardMore sx={{display: {xs: 'flex', lg: 'none'}}} />
    </Box>
  );
}

export default BoardActions;
