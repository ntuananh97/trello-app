import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import MoreActionColumn from "../../Menus/MoreActionColumn";

interface ContentColumnHeaderProps {
  title: string
}

const ContentColumnHeader: React.FC<ContentColumnHeaderProps> = ({title}) => {
  
  return (
    <Box className="trello-column__item__header" sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 15px'}}>
        <Typography variant="h3" sx={{fontSize: 14, fontWeight: 600}}>{title}</Typography>
        <MoreActionColumn />
    </Box>
  )
}

export default ContentColumnHeader