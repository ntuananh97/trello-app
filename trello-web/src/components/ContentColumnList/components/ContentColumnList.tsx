import List from "@mui/material/List";
import ContentColumnItem from "./ContentColumnItem";

function ContentColumnList() {
  return (
    <List className="card-list">
      {[...Array(10)].map((_, index) => (<ContentColumnItem key={index} />))}
    
    </List>
  );
}

export default ContentColumnList;
