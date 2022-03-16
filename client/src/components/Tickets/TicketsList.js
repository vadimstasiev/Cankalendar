import { useDispatch, useSelector } from "react-redux";
import { getTasks } from "../../actions/tasks";
import Ticket from "./Ticket";
import { useEffect } from "react";


const TicketsList = ({ mainTodoList }) => {
  const dispatch = useDispatch()
  const { tasks, isLoading } = useSelector((state) => state.tasks);

  useEffect(() => {
    dispatch(getTasks(1));
  }, []);

  //renders the todo array, returns loading if todo hasn't loaded yet
  return tasks.length === 0 || undefined || null ? (
    // <div className=" fixed top-0 left-0 right-0 bottom-0 w-full h-screen overflow-hidden bg-white dark:bg-zinc-500 opacity-50 flex flex-col items-center justify-center">
    <div className=" fixed top-0 left-0 right-0 bottom-0 w-full h-screen overflow-hidden flex flex-col items-center justify-center">
      <h2 className="text-center dark:text-white text-lg lg:text-xl font-medium">
        Notes you add appear here
      </h2>
    </div>
  ) : (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-x-4 gap-y-5 mx-4 sm:mx-12 ">
      {tasks?.map((list) => {
        return (
          <Ticket
            title={list.title}
            id={list._id}
            message={list.message}
            key={list._id}
          />
        );
      })}
    </div>
  );
};

export default TicketsList;
