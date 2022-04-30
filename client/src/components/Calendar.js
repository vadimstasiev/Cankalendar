import React, { useState, useEffect } from "react";
import NoiseBackground from './NoiseBackground';
import Background from './Background';
import Navbar from './MainLayout/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import Footer from './MainLayout/Footer';
import { getTasks, getTasksCumulative, setSelectedProject } from "../actions/tasks";
import SelectProject from "./SelectProject";
import { useParams, useNavigate, Link } from 'react-router-dom';

const Calendar = () => {
  const { id } = useParams();
  const { selectedProject } = useSelector((state) => state.tasks);

  const dispatch = useDispatch();
  const navigate = useNavigate();


  return (
      <NoiseBackground>
          <Background className={"dark:bg-transparent min-h-screen"}>
          <Navbar/>
          <SelectProject currentUrl="/Calendar" id={id}/>
          {/* <Footer/> */}
          </Background>
      </NoiseBackground>
  );
}

export default Calendar
