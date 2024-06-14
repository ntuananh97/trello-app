import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import ContentColumnList from "../../ContentColumnList";
import TrelloContentFooter from "./TrelloContentFooter";
import ContentColumnHeader from "./ContentColumnHeader";
import { useGetColumnDetailById } from '../../../hooks/useTrelloContent';



interface ContentColumnProps {
  columnId: string
}

const ContentColumn: React.FC<ContentColumnProps> = ({columnId}) => {
  const columnData = useGetColumnDetailById(columnId);

  console.log("columnId:", columnData)
  return (
    <Box className="trello-column__item" component="li" sx={{ maxHeight: "100%" }}>
      <Paper
        elevation={3}
        sx={{
          padding: "15px 0",
          maxHeight: "100%",
        }}
        className="trello-column__item__container"
      >
        <ContentColumnHeader title={columnData.title}  />
        <ContentColumnList columnId={columnId} />
        <TrelloContentFooter />
      </Paper>
    </Box>
  );
}

export default ContentColumn;
