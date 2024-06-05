import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import ContentColumnList from "../../ContentColumnList";
import TrelloContentFooter from "./TrelloContentFooter";

function ContentColumn() {
  return (
    <Box component="li">
      <Paper elevation={3} sx={{padding: '15px 10px', width: 273}}>
        <Typography variant="h3" sx={{fontSize: 14, fontWeight: 600}}>Column Title</Typography>
        <ContentColumnList />
        <TrelloContentFooter />
      </Paper>
    </Box>
  );
}

export default ContentColumn;
