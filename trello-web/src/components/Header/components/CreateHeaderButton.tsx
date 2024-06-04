import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";

function CreateHeaderButton() {
  return (
    <>
      <Button
        sx={{
          display: { xs: "none", xl: "block" },
        }}
        variant="outlined"
        aria-label="create"
      >
        Create
      </Button>
      <IconButton
        aria-label="create"
        sx={{
          display: { xs: "flex", xl: "none" },
          width: 32,
          height: 32,
          borderRadius: '3px',
          background: '#2E4F6B',
          color: '#fff',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <AddIcon />
      </IconButton>
    </>
  );
}

export default CreateHeaderButton;
