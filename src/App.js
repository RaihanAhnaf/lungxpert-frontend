import "./App.css";
import RoutesApp from "./routes/RoutesApp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <RoutesApp />
      <ToastContainer />
    </div>
  );
}

export default App;
