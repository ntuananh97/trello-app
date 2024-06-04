import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";

function BoardMembers() {
  return (
    <Box sx={{display: 'flex', alignItems: 'center'}}> 
      <Button variant="outlined" startIcon={<PersonAddIcon />}>
        Invite
      </Button>

      <AvatarGroup max={4}>
        <Avatar sx={{ width: 32, height: 32 }} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <Avatar sx={{ width: 32, height: 32 }} alt="Travis Howard" src="/static/images/avatar/2.jpg" />
      </AvatarGroup>
    </Box>
  );
}

export default BoardMembers;
