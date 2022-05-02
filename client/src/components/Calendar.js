import React, { useState, useEffect } from "react";
import NoiseBackground from './NoiseBackground';
import Background from './Background';
import Navbar from './MainLayout/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import Footer from './MainLayout/Footer';
import { getTasks, getTasksCumulative, getTasksNewerThanDate, setSelectedProject } from "../actions/tasks";
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

const today = new Date();

const CalendarPage = () => {
  const { id } = useParams();
  const { tasks, isLoading, selectedProject } = useSelector((state) => state.tasks);
  const [date, setDate] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date((new Date()).setDate(today.getDate()-7)));

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(startDate)
    dispatch(getTasksNewerThanDate(startDate, selectedProject.id, navigate))
    
  }, [startDate, selectedProject.id]);

  useEffect(() => {
    console.log(tasks)
  }, [tasks]);

  return (
      <NoiseBackground>
          <Background className={"dark:bg-transparent min-h-screen"}>
          <Navbar/>
          <SelectProject currentUrl="/Calendar" id={id}/>
          <Calendar 
          className="bg-zinc-100 shadow-md border-2 dark:bg-zinc-800 dark:text-white mx-10 p-5 rounded-xl" 
          tileClassName="h-20 pb-20 bg-white hover:bg-zinc-300 hover:dark:bg-zinc-700  text-left align-text-top shadow-sm border-2  pl-2 pt-2 dark:bg-zinc-600 dark:border-stone-800 place-content-center justify-center"
          tileContent={(e)=><div className="hover:bg-zinc-400 dark:hover:bg-zinc-900 inline-table float-right p-1">
            {
              tasks.map(task => {
                if (task.dueDate===e.date.setHours(0,0,0,0)) {
                  return <div className='rounded-xl bg-red-700 py-2 px-2'></div> 
                }
              }
              )
            }
            
            </div>
          }
          // TODO make api requests to render data relevant inside tiles "e" holds data information for the given tile  
          nextLabel={<Label text="Next"/>}
          next2Label={""}
          prevLabel={<Label text="Previous"/>}
          prev2Label={""}
          // activeStartDate
          onActiveStartDateChange={e=>{
            var d = new Date(e.activeStartDate);
            d.setDate(d.getDate()-7);
            setStartDate(d)
          }} 
          onChange={setDate}
          value={date}
           />
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


