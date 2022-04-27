import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Home from './components/Home/Home';
import SignUp from './components/Auth/SignUp';
import SignIn from './components/Auth/SignIn';
import NotFound from './components/NotFound';
import SignOut from './components/Auth/SignOut';
import Tickets from './components/Tickets/Tickets';
import Kanban from './components/Kanban/Kanban';
import PrivateRoute from './components/PrivateRoute';
import CreateProject from './components/CreateProject';
import JoinProject from './components/JoinProject';

const AppRouter = () => {
  const user = JSON.parse(localStorage.getItem('profile'));

  return (
        <Router>
          <Routes>
            <Route path="/signup" exact element={<SignUp/>} />
            <Route path="/signin" exact element={<SignIn/>} />
            <Route path="/signout" exact element={<SignOut/>} />
            <Route path="/" exact element={<Home/>} />

            <Route path='/CreateProject' element={<PrivateRoute from="/CreateProject"/>}>
              <Route path="/CreateProject" exact element={<CreateProject/>} />
            </Route>   
            <Route path='/JoinProject' element={<PrivateRoute from="/JoinProject"/>}>
              <Route path="/JoinProject" exact element={<JoinProject/>} />
            </Route>         
            <Route path='/Tickets' element={<PrivateRoute from="/Tickets"/>}>
              <Route path="/Tickets" exact element={<Tickets/>} />
              <Route path="/Tickets/:id" exact element={<Tickets/>} />
            </Route>
            <Route path='/Kanban' element={<PrivateRoute from="/Kanban"/>}>
              <Route path="/Kanban" exact element={<Kanban/>} />
              <Route path="/Kanban/:id" exact element={<Kanban/>} />
            </Route>
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
