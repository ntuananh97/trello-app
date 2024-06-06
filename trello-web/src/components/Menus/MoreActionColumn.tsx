import Box, { BoxProps } from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";

interface ComponentProps {}

type MoreActionColumnProps = Partial<BoxProps> & ComponentProps;

const MoreActionColumn: React.FC<MoreActionColumnProps> = ({ ...boxProps }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box {...boxProps}>
      <IconButton
        aria-label="More"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MoreHorizIcon />
      </IconButton>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            minWidth: 200,
          }}
        >
          <ListItemText>Add card</ListItemText>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default MoreActionColumn;
