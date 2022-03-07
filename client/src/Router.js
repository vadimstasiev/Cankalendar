import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import PostDetails from './components/PostDetails/PostDetails';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/legacy/Auth';
import SignUp from './components/Auth/SignUp';
import CreatorOrTag from './components/CreatorOrTag/CreatorOrTag';

const AppRouter = () => {
  const user = JSON.parse(localStorage.getItem('profile'));

  return (
      <Container maxWidth="xl">
        {/* <Navbar /> */}
        <Router>
          <Routes>
            {/* <Route path="/" exact element={() => <Redirect to="/posts" />} /> */}
            <Route path="/posts" exact element={<Home/>} />
            <Route path="/posts/search" exact element={<Home/>} />
            <Route path="/posts/:id" exact element={<PostDetails/>} />
            {/* <Route path={['/creators/:name', '/tags/:name']} element={<CreatorOrTag/>} /> */}
            {/* <Route path="/auth" exact element={() => (!user ? <Auth /> : <Redirect to="/posts" />)} /> */}
            <Route path="/signup" exact element={<SignUp/>} />
          </Routes>
        </Router>
      </Container>
  );
};

export default AppRouter;
