import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import MoreActionColumn from "../../Menus/MoreActionColumn";

function ContentColumnHeader() {
  return (
    <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 15px'}}>
        <Typography variant="h3" sx={{fontSize: 14, fontWeight: 600}}>Column Title</Typography>
        <MoreActionColumn />
    </Box>
  )
}

export default ContentColumnHeader