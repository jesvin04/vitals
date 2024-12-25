import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage/LoginPage';
import ShoppingList from './ShoppingList/ShoppingList';
import SignupPage from "./signuppage/SignupPage"

const App = () => {
  return (
    <Router>
      <Routes>
        {/*Public Route*/}
        <Route path='/login' element={<LoginPage/>} />

        {/*Protected Routes for Users*/}
        <Route path='/shopping' element={<ShoppingList/>} />

        <Route path="/signuppage" element={<SignupPage/>} />
        
        {/* Redirect unknown routes to login */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;