import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const IS_IMAGE = false;

function ContentColumnItem() {
  return (
    <ListItem disablePadding className="card-item"
      sx={{
        padding: "10px 15px",
        position: "relative",
      }}
    >
      <ListItemButton
        sx={{
          display: "block",
          padding: 0
        }}
      >
        {IS_IMAGE && (
          <Box className="card-item__image">
            <img
              src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=500&h=400&fit=crop&auto=format"
              alt="card image"
            />
          </Box>
        )}

        <Typography>Here is the card's title</Typography>

        <IconButton
          size="small"
          className="card-item__action"
          sx={{top: IS_IMAGE ? 3 : -3}}
        >
          <ModeEditIcon sx={{ width: 18, height: 18 }} />
        </IconButton>
      </ListItemButton>
    </ListItem>
  );
}

export default ContentColumnItem;
