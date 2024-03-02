import { useState } from 'react'
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


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<Home/>}></Route>
      <Route path="/solution" element={<Solution />}></Route>
      <Route path="/pricing" element={<Pricing />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/howitworks" element={<HowItWorks />}></Route>
      {/* <Route path="/services" element={<Services />}></Route>
      <Route path="/project" element={<Project />}></Route>
      <Route path="/testimonial" element={<Testimonial />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/registration" element={<Registration />}></Route>
      <Route path="/protfolio" element={<Login />}></Route> */}
      
    </Route>
  )
);


function App() {
  return <RouterProvider router={router} />;
}

export default App
