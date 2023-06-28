import { useEffect, useState } from 'react';


import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import Home from './pages/Home';
import About from './pages/About';
import ContactUs from './pages/ContactUs';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  
  {
    path: "about",
    element: <About />,
  },

  {
    path: "contact",
    element: <ContactUs />,
  },

]);
function App() {
   
  return <RouterProvider router={router} />;
}

export default App;
