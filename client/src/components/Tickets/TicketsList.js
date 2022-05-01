import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearTasks, getTasks, getTasksCumulative } from "../../actions/tasks";
import Ticket from "./Ticket";
import { useEffect } from "react";
import OnScreenRender from "./OnScreenRender";
import { useNavigate } from "react-router-dom";


const TicketsList = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { tasks, isLoading } = useSelector((state) => state.tasks);
  const selectedProject = JSON.parse(localStorage.getItem('selectedProject'));
  const [currentProject, setCurrentProject] = useState("");

  const [section, setSection] = useState(1);

  const getCurrentVisibleSection = () => {
    setSection(section+1)
  }

  useEffect(() => {
    if(section===1){
      dispatch(getTasks(1, selectedProject.id))
    } else {
      dispatch(getTasksCumulative(section, selectedProject.id))
    }
  }, [section]);

  useEffect(() => {
    if(selectedProject.id!==currentProject && !selectedProject.id){
      setCurrentProject(selectedProject.id)
    } else {
      dispatch(clearTasks(navigate))
      setSection(1)
    }
  }, [selectedProject.id]);


  //renders the array, returns loading if todo hasn't loaded yet
  return tasks.length === 0 || undefined || null ? (
    // <div className=" fixed top-0 left-0 right-0 bottom-0 w-full h-screen overflow-hidden bg-white dark:bg-zinc-500 opacity-50 flex flex-col items-center justify-center">
    <div className="top-0 left-0 right-0 bottom-0 w-full mt-60 overflow-hidden flex flex-col items-center justify-center">
      <h2 className="text-center dark:text-white text-lg lg:text-xl font-medium">
        Notes you add appear here
      </h2>
      <OnScreenRender callback={getCurrentVisibleSection}/>
    </div>
  ) : (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-x-4 gap-y-5 mx-4 sm:mx-12 ">
      {tasks?.map((list, i) => {
        return (
          <div key={list._id}>
            <Ticket
              title={list.title}
              id={list._id}
              message={list.message}
            />
            {tasks.length-1 === i?<OnScreenRender callback={getCurrentVisibleSection}/>:null}
          </div>
        )})
      }
      
    </div>
  );
};

export default TicketsList;
