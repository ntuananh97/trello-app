import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import ContentColumnList from "../../ContentColumnList";
import TrelloContentFooter from "./TrelloContentFooter";
import ContentColumnHeader from "./ContentColumnHeader";
import { useGetColumnDetailById } from '../../../hooks/useTrelloContent';
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface ContentColumnProps {
  columnId: string
}

const ContentColumn: React.FC<ContentColumnProps> = ({columnId}) => {
  const columnData = useGetColumnDetailById(columnId);

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({id: columnId});

  const dndKitColumnStyles = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <Box
      className="trello-column__item"
      component="li"
      sx={{ maxHeight: "100%" }}
      ref={setNodeRef}
      style={dndKitColumnStyles}
      {...attributes}
      {...listeners}
    >
      <Paper
        elevation={3}
        sx={{
          padding: "15px 0",
          maxHeight: "100%",
        }}
        className="trello-column__item__container"
      >
        <ContentColumnHeader title={columnData.title} />
        <ContentColumnList columnId={columnId} />
        <TrelloContentFooter />
      </Paper>
    </Box>
  );
}

export default ContentColumn;
