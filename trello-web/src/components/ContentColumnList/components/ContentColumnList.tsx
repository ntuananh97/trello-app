import List from "@mui/material/List";
import ContentColumnItem from "./ContentColumnItem";
import { useGetColumnDetailById } from "../../../hooks/useTrelloContent";

interface ContentColumnListProps {
  columnId: string
}

const ContentColumnList: React.FC<ContentColumnListProps> = ({columnId}) => {
  const columnData = useGetColumnDetailById(columnId);
  const { cardOrderIds } = columnData

  return (
    <List className="card-list">
      {cardOrderIds.map((cardId) => (<ContentColumnItem key={cardId} cardId={cardId} />))}
    
    </List>
  );
}

export default ContentColumnList;
