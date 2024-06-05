import Container from "@mui/material/Container";
import Divider from '@mui/material/Divider';
import Header from "./components/Header";
import Board from "./components/Board";
import TrelloContainer from "./components/TrelloContainer";

function App() {
  return <Container maxWidth={false} disableGutters sx={{height: '100vh'}}>
    <Header />
    <Divider />
    <main>
      <Board />
      <Divider />
      <TrelloContainer />
    </main>
  </Container>;
}

export default App;
