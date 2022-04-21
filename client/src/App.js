import React from "react";
import {Routes,Route,Navigate, BrowserRouter} from 'react-router-dom'
import Main from './components/Main';
import Login from './components/Login';
import Signup from './components/Signup';
function App() {
  const user =localStorage.getItem("token");
  return (
    
     <Routes>
      {user && <Route path='/'  element={<Main></Main>}/>}*/}
      <Route  path='/signup'  element={<Signup/>}/>      
      <Route path='/login'  element={<Login/>}/>     
     <Route path="/"  element={<Navigate replace to="/login"/>}/>     
     </Routes>
  );
}

export default App;
