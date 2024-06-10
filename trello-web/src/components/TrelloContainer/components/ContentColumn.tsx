import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import ContentColumnList from "../../ContentColumnList";
import TrelloContentFooter from "./TrelloContentFooter";
import ContentColumnHeader from "./ContentColumnHeader";

function ContentColumn() {
  return (
    <Box className="trello-column__item" component="li" sx={{ maxHeight: "100%" }}>
      <Paper
        elevation={3}
        sx={{
          padding: "15px 0",
          width: 273,
          maxHeight: "100%",
          background: "#F1F2F4",
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
