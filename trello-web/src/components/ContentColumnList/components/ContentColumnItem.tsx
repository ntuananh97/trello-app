import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import clsx from "clsx";
import { useGetCardDetailById } from "../../../hooks/useTrelloContent";

interface ContentColumnItemProps {
  cardId: string
}

const ContentColumnItem: React.FC<ContentColumnItemProps> = ({cardId}) => {

  const {title, cover} = useGetCardDetailById(cardId);
  const hasImage = !!cover

  return (
    <ListItem
      disablePadding
      className="card-item"
      sx={{
        position: "relative",
        background: "#fff",
      }}
    >
      <ListItemButton
        sx={{
          display: "block",
          padding: 0,
        }}
      >
        {hasImage && (
          <Box className="card-item__image">
            <img
              src={cover}
              alt={title}
            />
          </Box>
        )}

        <Box sx={{ padding: "8px 12px 4px" }}>
          <Typography>{title}</Typography>

          <IconButton
            size="small"
            className={clsx("card-item__action", { "has-image": hasImage })}
          >
            <ModeEditIcon sx={{ width: 18, height: 18 }} />
          </IconButton>
        </Box>
      </ListItemButton>
    </ListItem>
  );
}

export default ContentColumnItem;
