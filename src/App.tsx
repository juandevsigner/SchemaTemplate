import "./App.css";
import CardSchema from "./components/cardSchema/index";
import { ImageSchema } from "./components/imageSchema";

function App() {
  return (
    <div className="App">
      <ImageSchema />
      <CardSchema />
    </div>
  );
}

export default App;
