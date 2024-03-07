import { useState ,useEffect} from 'react'
import './App.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import Solution from './pages/Solution';
import About from './pages/About';
import Pricing from './pages/Pricing';
import HowItWorks from './pages/HowItworks';
import RootLayout from "./component/rootlayout";
import Preloader from "./component/preloader";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<Home/>}></Route>
      <Route path="/solution" element={<Solution />}></Route>
      <Route path="/pricing" element={<Pricing />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/howitworks" element={<HowItWorks />}></Route>
    </Route>
  )
);


function App() {
  const [isload, setLoad ] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    },6000);
  });

  return(
    <div>
      {
        isload ?<Preloader/>:<RouterProvider router={router} />
      }
    </div>
  );
}

export default App
