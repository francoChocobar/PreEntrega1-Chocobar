import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import { Titulo } from "./components/titulo/Titulo";
import { ItemList } from "./components/ItemList/ItemList";

function App() {
  let Saludar = "Hola este es mi emprendimiento de venta de hebras de te";

  return (
    <div className="App">
      <Navbar />
      <Titulo />
      <ItemList Saludar={Saludar} />
    </div>
  );
}

export default App;
