import "./App.css";
import Header from "./components/Header/Header";
import ItemContainer from "./components/ItemContainer/ItemContainer";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <ItemContainer />
    </Router>
  );
}

export default App;
