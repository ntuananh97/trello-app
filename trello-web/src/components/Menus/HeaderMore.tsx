import Box, {BoxProps} from "@mui/material/Box";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";
import { MORE_HEADER_MENU } from "../../constants/header";

type DisplayStyleType = (typeof MORE_HEADER_MENU)[number];

interface ComponentProps  {
}

type HeaderMoreProps = Partial<BoxProps> & ComponentProps

const HeaderMore: React.FC<HeaderMoreProps> = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const renderDisplayStyle = (type: DisplayStyleType) => {
    switch (type) {
      case 'Starred':
      case 'Recent':
        return {
          display: {xs: 'flex', lg: 'none'} 
        }
      case 'Workspaces':
        return {
          display: {xs: 'flex', md: 'none'} 
        }
    
      default:
        return {}
    }
  }

  return (
    <Box>
      <Button
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        More
      </Button>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {MORE_HEADER_MENU.map((menu) => {
          const displayStyle = renderDisplayStyle(menu)

          return (
            <MenuItem
              sx={{
                display: 'flex',
                alignItems: "center",
                justifyContent: "space-between",
                minWidth: 200,
                ...displayStyle,
              }}
              key={menu}
            >
              <ListItemText>{menu}</ListItemText>
              <ChevronRightIcon fontSize="small" />
            </MenuItem>
          )
        })}
      </Menu>
    </Box>
  );
}

export default HeaderMore;
