import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './LoginPage/LoginPage';
import ShoppingList from './ShoppingList/ShoppingList';
import PersonalisedPlan from './PersonalisedPlan/PersonalisedPlan';
import Webinar from './Webinar/Webinar';
import SignupPage from './signuppage/SignupPage';
const App = () => {
  return (
    <Router>
      <Routes>
        {/*Public Route*/}
        <Route path='/login' element={<LoginPage/>} />

        {/*Protected Routes for Users*/}
        <Route path='/shopping' element={<ShoppingList/>} />

        <Route path="/signup" element={<SignupPage/>} />
        <Route path="persplan" element={<PersonalisedPlan/>} />
        <Route path="/webinar" element={<Webinar/>} />
        
        
        {/* Redirect unknown routes to login */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
