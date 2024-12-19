//import logo from './logo.svg';
//import {Router, Route,Routes } from 'react-router-dom';
import './App.css';
import NavBar from './AUTHICATION/Compontents/NavBar';
import About from './AUTHICATION/Compontents/pages/About';
import Contact from './AUTHICATION/Compontents/pages/Contact';
import Home from './AUTHICATION/Compontents/pages/Home';
import Login from './AUTHICATION/Compontents/pages/Login';
import Register from './AUTHICATION/Compontents/pages/Register'
import { BrowserRouter, Routes,Route,} from 'react-router-dom';
import ForgotPassword from './AUTHICATION/Compontents/pages/Forget';
//import AdminDashboard from './AUTHICATION/Compontents/pages/Admindashboard';
import UserDashboard from './AUTHICATION/Compontents/pages/UserDashboard';
import Usermangement from './admincompontent/User-management';
import Setting from './admincompontent/Setting';
import Support from './admincompontent/Support';
import { ThemeProvider } from '../src/admincompontent/css/themeprovider';
import Comange from './admincompontent/Comange';
import Dash from './admincompontent/Dash';
//import React, { Suspense, lazy } from 'react';


// const Home = lazy(() => import('./AUTHICATION/Compontents/pages/Home'));
// const About = lazy(() => import('./AUTHICATION/Compontents/pages/About'));

//import router from './admincompontent/Router';
//import {RouterProvider}  from 'react-router-dom';
//import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Admindashboard from './AUTHICATION/Compontents/pages/Admindashboard';
/*
const router = createBrowserRouter([
  {
      path:'/',
      element: <Admindashboard/>,
      children:[
          {
              index: true,
              element:<Dash/>
          },
          {
              path : "./usermangement",
              element: <Usermangement/>
          },
          {
              path : "./settings",
              element: <Setting/>
          }
      , {
          path : "./comange",
          element: <Comange/>
      }
    ]
  }
  ])
 
const board = createBrowserRouter([
  {
      path:'/',
      element: <Home/>,
      children:[
          {
              index: true,
              element:<About/>
          },
          {
              path : "./contact",
              element: <Contact/>
          },
          {
              path : "./login",
              element: <Login/>
          }
      , {
          path : "./register",
          element: <Register/>
      }
    ]
  }
  ])*/


function App(){
  return (
    
    
    
    <ThemeProvider>
    
  <BrowserRouter>
      
    <NavBar/>
    
   


  <Routes>
  < Route  path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/register" element={<Dash/>} />
    <Route path='/Forget' element={<ForgotPassword/>}/>
    <Route path="/admin" element={<Admindashboard component={Admindashboard} />} />
    <Route path="/user" element={<UserDashboard component={UserDashboard}  />} />
    
    
    
    <Route path="/" element={<Admindashboard/>}>
      <Route path="/usermangement" element={<Usermangement/>} />
       <Route path="/comange" element={<Comange/>} />
       <Route path="/setting" element={<Setting/>} />
       <Route path="/support" element={<Support/>}/>
        <Route path="/dashboard" element={<Dash/>}/>
</Route>

    </Routes>
</BrowserRouter>

</ThemeProvider> 
/*
<>
<RouterProvider router={router}/>
<RouterProvider router={board}/>
</>*/
);
}

export default App;

//Wishing you much happiness on your special day.