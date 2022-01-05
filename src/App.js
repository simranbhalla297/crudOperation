import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Create from "./components/Create";
// import Read from "./components/Read";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Update from "./components/Update";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Create />} />
          <Route path="update" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
