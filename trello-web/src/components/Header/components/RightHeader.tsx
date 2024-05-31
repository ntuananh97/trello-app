import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import Tooltip from "@mui/material/Tooltip";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
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
    >
      <SearchInput />
      <ColorMode />
      <Tooltip title="Notification">
        <Badge badgeContent={0} color="primary">
          <NotificationsNoneIcon color="primary" sx={{ cursor: "pointer" }} />
        </Badge>
      </Tooltip>
      <Tooltip title="Helper">
        <HelpOutlineIcon color="primary" sx={{ cursor: "pointer" }} />
      </Tooltip>
      <Account />
    </Box>
  );
}

export default RightHeader;
