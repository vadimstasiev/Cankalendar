import React from 'react'
import TicketCreateInput from "./TicketCreateInput";
import TicketsList from "./TicketsList";
import { useState, useEffect } from "react";
import NoiseBackground from '../NoiseBackground';
import Background from '../Background';
import Navbar from '../MainLayout/Navbar';
import { getTasks } from '../../actions/tasks';
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../MainLayout/Footer';
import SelectProject from '../SelectProject';
import { useParams } from 'react-router-dom';

const Tickets = () => {
  const { id } = useParams();

  return (
    <NoiseBackground>
        <Background className={"dark:bg-transparent min-h-screen"}>
        <Navbar/>
        <SelectProject currentUrl="/Tickets" id={id}/>
        <TicketCreateInput/>
        <TicketsList/>
        {/* <Footer/> */}
        </Background>
    </NoiseBackground>
  );
};

export default Tickets;
