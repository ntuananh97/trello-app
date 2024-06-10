import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import ContentColumnList from "../../ContentColumnList";
import TrelloContentFooter from "./TrelloContentFooter";
import ContentColumnHeader from "./ContentColumnHeader";
import { IColumnData } from "../../../models/trello-content-type";



interface ContentColumnProps {
  data: IColumnData
}

const ContentColumn: React.FC<ContentColumnProps> = ({data}) => {
  console.log("data:", data)
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
        <ContentColumnHeader />
        <ContentColumnList />
        <TrelloContentFooter />
      </Paper>
    </Box>
  );
}

export default ContentColumn;
