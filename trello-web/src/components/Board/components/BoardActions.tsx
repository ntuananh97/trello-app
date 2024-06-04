import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import BoltIcon from '@mui/icons-material/Bolt';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import PublicIcon from '@mui/icons-material/Public';

function BoardActions() {
  return (
    <Box>
      <Button startIcon={<AppRegistrationIcon />}>
        Mern Stack
      </Button>
      <Button startIcon={<PublicIcon />}>
        Public/Private Workspaces
      </Button>
      <Button startIcon={<AddToDriveIcon />}>
        Add to Google Drive
      </Button>
      <Button startIcon={<BoltIcon />}>
        Automation
      </Button>
      <Button startIcon={<FilterAltIcon />}>
        Filter
      </Button>
    </Box>
  );
}

export default BoardActions;
