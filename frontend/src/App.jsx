import React from 'react';
import {Route,Routes} from "react-router-dom";
import Home from './components/Home';
import AddBooks from './components/AddBooks';
import NavBar from './components/NavBar';
import Books from './components/Books';
import EditBook from "./components/EditBook";
import DeleteBook from './components/DeleteBook';
import SignUp from './pages/signup/Signup';
import Login from './pages/login/Login';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/books' element={<Books/>}/>
        <Route path='/addBooks' element={<AddBooks/>}/>
        <Route path='/updateBooks/:id' element={<EditBook/>}/>
        <Route path='/deleteBook/:id' element={<DeleteBook/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <Footer/>
    </div> 
  )
}

export default App;