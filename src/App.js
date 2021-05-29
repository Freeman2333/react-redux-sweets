import Nav from "./components/Nav";
import { BrowserRouter } from "react-router-dom";
import Carousels from "./components/Carousels";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Carousels />
    </BrowserRouter>
  );
}

export default App;
