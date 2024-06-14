import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import IconButton from '@mui/material/IconButton';
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from '@mui/icons-material/Close';
import { useId, useLayoutEffect, useState } from "react";
import TextArea from "../../TextArea";

function AddContentColumn() {
  const [isCreatingNewColumn, setIsCreatingNewColumn] =
    useState<boolean>(false);
  const [cardTitle, setCardTitle] = useState<string>("");

  const uniqueTextareaId = useId();

  useLayoutEffect(() => {
    if (!isCreatingNewColumn) return;

    const textareaElement = document.getElementById(uniqueTextareaId);
    textareaElement?.focus()
  }, [isCreatingNewColumn, uniqueTextareaId])

  const handleClickAddIcon = () => {
    setIsCreatingNewColumn(true);
    setCardTitle('')
  };

  const removeCreatingState = () => {
    setIsCreatingNewColumn(false);
  };

  const handleCreateNewColumn = () => {
    if (!cardTitle.trim()) return;
    console.log('cardTitle', cardTitle);
    
  };

  return (
    <Box className="trello-column__item">
      {isCreatingNewColumn ? (
        <Paper
          elevation={3}
          sx={{
            padding: "15px",
            maxHeight: "100%",
          }}
          className="trello-column__item__container"
        >
          <TextArea
            placeholder="Type card's title..."
            value={cardTitle}
            onChange={(e) => setCardTitle(e.target.value)}
            id={uniqueTextareaId}
          />
          <Box sx={{ marginTop: "10px" }}>
            <Button sx={{ marginRight: "10px" }} variant="contained"
              onClick={handleCreateNewColumn}
            >
              Add new column
            </Button>
            <IconButton onClick={removeCreatingState}>
              <CloseIcon />
            </IconButton>
          </Box>
        </Paper>
      ) : (
        <Button
          sx={{
            justifyContent: "flex-start",
            background: "#ffffff3d",
            width: "100%",
            color: "#fff",
            paddingLeft: "15px",
            paddingRight: "15px",
          }}
          startIcon={<AddIcon />}
          onClick={handleClickAddIcon}
        >
          Add new column
        </Button>
      )}
    </Box>
  );
}

export default AddContentColumn;
