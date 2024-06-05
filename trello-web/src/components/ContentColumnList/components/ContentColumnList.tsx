import List from "@mui/material/List";
import ContentColumnItem from "./ContentColumnItem";

function ContentColumnList() {
  return (
    <List>
      {[...Array(10)].map(item => (<ContentColumnItem />))}
    
    </List>
  );
}

export default ContentColumnList;
