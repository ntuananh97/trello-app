import Box, {BoxProps} from "@mui/material/Box";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";
import { MORE_BOARD_MENU } from "../../constants/board";

type DisplayStyleType = (typeof MORE_BOARD_MENU)[number]['key'];

interface ComponentProps  {
}

type BoardMoreProps = Partial<BoxProps> & ComponentProps

const BoardMore: React.FC<BoardMoreProps> = ({...boxProps}) => {
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
      case 'workspace':
        return {
          display: {xs: 'flex', md: 'none'} 
        }
      case 'mern':
        return {
          display: {xs: 'flex', sm: 'none'} 
        }
    
      default:
        return {}
    }
  }

  return (
    <Box {...boxProps}>
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
        {MORE_BOARD_MENU.map((menu) => {
          const displayStyle = renderDisplayStyle(menu.key)

          return (
            <MenuItem
              sx={{
                display: 'flex',
                alignItems: "center",
                justifyContent: "space-between",
                minWidth: 200,
                ...displayStyle,
              }}
              key={menu.key}
            >
              <ListItemText>{menu.name}</ListItemText>
              <ChevronRightIcon fontSize="small" />
            </MenuItem>
          )
        })}
      </Menu>
    </Box>
  );
}

export default BoardMore;
