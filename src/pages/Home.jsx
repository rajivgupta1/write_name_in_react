import '../App.css';
import { useEffect, useState } from 'react';
import NavbarComponent from '../Components/NavbarComponent';
import Button from 'react-bootstrap/esm/Button';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

function Home() {

  const [name, setName ] = useState("");
  const storeGFname = (e) =>{
    e.preventDefault();
    localStorage.setItem("gfName", name);
    window.location.reload();
  }
//    useEffect(() =>{
//      alert("website opened");
//    }, [name]);

  return (
    <div>
        {/* <NavbarComponent /> */}
        {/* <h1>{process.env.REACT_APP_G_F_NAME}</h1> */}
        <NavbarComponent title="Girlfriend website" />
        <div className='container mt-4'>
        <h4>Enter your GF name</h4>
        <input
        style={{ width: 300, height: 40}}
         placeholder='Enter your GF name'
          value={name} 
          onChange={(e) => setName( e.target.value)} 
          />
                <Button onClick={storeGFname} style={{marginLeft: 20 }} variant="dark">Submit</Button>
           <h1>{localStorage.getItem("gfName")}</h1>
          </div>
      </div>

);
}

export default Home;
