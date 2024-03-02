import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

export function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
