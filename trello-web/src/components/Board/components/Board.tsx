import Box from "@mui/material/Box";
import BoardActions from "./BoardActions";
import BoardMembers from "./BoardMembers";

function Board() {
  return (
    <Box
      sx={{
        height: (theme) => theme.trello.boardBarHeight,
        padding: "0 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <BoardActions />
      <BoardMembers />
    </Box>
  );
}

export default Board;
