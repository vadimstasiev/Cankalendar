import React from 'react';
// import { Container } from '@material-ui/core';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

// import PostDetails from './components/PostDetails/PostDetails';
// import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import HomeLegacy from './components/Home/legacy/Home'
import SignUp from './components/Auth/SignUp';
import SignIn from './components/Auth/SignIn';
// import CreatorOrTag from './components/CreatorOrTag/CreatorOrTag';
import NotFound from './components/NotFound';
import SignOut from './components/Auth/SignOut';
import Tickets from './components/Tickets/Tickets';
import Kanban from './components/Kanban/Kanban';

const AppRouter = () => {
  const user = JSON.parse(localStorage.getItem('profile'));

  return (
        <Router>
          <Routes>
            <Route path="/signup" exact element={<SignUp/>} />
            <Route path="/signin" exact element={<SignIn/>} />
            <Route path="/signout" exact element={<SignOut/>} />
            <Route path="/" exact element={<Home/>} />

            <Route path="/legacy" exact element={<HomeLegacy/>} />
            
            <Route path="/Tickets" exact element={<Tickets/>} />
            <Route path="/Kanban" exact element={<Kanban/>} />
            {/* <Route path="/" exact element={() => <Navigate to="/posts" />} /> */}
            {/* <Route path="/posts" exact element={<Home/>} /> */}
            {/* <Route path="/posts/search" exact element={<Home/>} /> */}
            {/* <Route path="/posts/:id" exact element={<PostDetails/>} /> */}
            {/* <Route path={['/creators/:name', '/tags/:name']} element={<CreatorOrTag/>} /> */}
            {/* <Route path="/auth" exact element={() => (!user ? <Auth /> : <Navigate to="/posts" />)} /> */}
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </Router>
  );
};

export default AppRouter;
