import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import Tooltip from "@mui/material/Tooltip";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import IconButton from '@mui/material/IconButton';
import SearchInput from "../../SearchInput";
import ColorMode from "../../ColorMode";
import Account from "../../Menus/Account";

function RightHeader() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: (theme) => theme.trello.gapHeader,
      }}
      className="header__right"
    >
      <SearchInput />
      <ColorMode />
      <Tooltip title="Notification">
        <Badge badgeContent={0} color="primary">
          <IconButton>
            <NotificationsNoneIcon color="primary" sx={{ cursor: "pointer" }} />
          </IconButton>
        </Badge>
      </Tooltip>
      <Tooltip title="Helper">
        <IconButton>
          <HelpOutlineIcon color="primary" sx={{ cursor: "pointer" }} />
        </IconButton>
      </Tooltip>
      <Account />
    </Box>
  );
}

export default RightHeader;
