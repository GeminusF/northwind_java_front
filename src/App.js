import "./App.css";
import Dashboard from "./layouts/Dashboard.jsx";
import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";
import Navi from "./layouts/Navi";
// containir component div
// reactin http requestler ucun oz kitabxanasidi yoxdu ona gore axiosdan istifade
// semantic ui 16 parcaya bolur

function App() {
  return (
    <div className="App">
      <Navi></Navi>
      <Container className = "main">
        <Dashboard></Dashboard>
      </Container>
    </div>
  );
}

export default App;

//
