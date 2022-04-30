import React, { useState, useEffect } from "react";
import NoiseBackground from './NoiseBackground';
import Background from './Background';
import Navbar from './MainLayout/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import Footer from './MainLayout/Footer';
import { getTasks, getTasksCumulative, setSelectedProject } from "../actions/tasks";
import SelectProject from "./SelectProject";
import { useParams, useNavigate, Link } from 'react-router-dom';
import Calendar from 'react-calendar';


const Label = ({text}) => {
  return <div className="px-4">
    <div className={"hover:bg-zinc-200 dark:hover:bg-zinc-900 snap-center justify-self-center grid justify-items-stretch px-5 mb-2 py-1 rounded-lg"}>
      {text}
    </div>
  </div>
}


const CalendarPage = () => {
  const { id } = useParams();
  const { selectedProject } = useSelector((state) => state.tasks);
  const [date, setDate] = useState(new Date());

  const dispatch = useDispatch();
  const navigate = useNavigate();


  return (
      <NoiseBackground>
          <Background className={"dark:bg-transparent min-h-screen"}>
          <Navbar/>
          <SelectProject currentUrl="/Calendar" id={id}/>
          <Calendar 
          className="bg-zinc-100 shadow-md border-2 dark:bg-zinc-800 dark:text-white mx-10 p-5 rounded-xl" 
          tileClassName="h-20 pb-20 bg-white hover:dark:bg-zinc-700  text-left align-text-top shadow-sm border-2  pl-2 pt-2 dark:bg-zinc-600 dark:border-stone-800 place-content-center justify-center"
          // tileContent={<Button className="hover:bg-zinc-900">Hello</Button>}
          nextLabel={<Label text="Next"/>}
          next2Label={""}
          prevLabel={<Label text="Previous"/>}
          prev2Label={""}
          onChange={setDate} value={date} />
          {/* <p className='text-center'>
            <span className='bold'>Selected Date:</span>{' '}
            {date.toDateString()}
          </p> */}
          {/* <Footer/> */}
          </Background>
      </NoiseBackground>
  );
}

export default CalendarPage


