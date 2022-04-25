import React, { useState, useEffect } from "react";
import NoiseBackground from '../NoiseBackground';
import Background from '../Background';
import Navbar from '../MainLayout/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../MainLayout/Footer';
import { getTasks, getTasksCumulative, setSelectedProject } from "../../actions/tasks";
import Board, { addColumn, moveCard } from './KanbanBoard'
import SelectProject from "../SelectProject";
import { useParams, useNavigate, Link } from 'react-router-dom';


// import '@asseinfo/react-kanban/dist/styles.css'
// import useStyles from './kanbanStyles.css';


// const TicketsList = () => {
//   const dispatch = useDispatch()
//   const { tasks, isLoading } = useSelector((state) => state.tasks);
//   const [section, setSection] = useState(1);

//   const getCurrentVisibleSection = () => {
//     setSection(section+1)
//   }

//   useEffect(() => {
//     if(section===1){
//       dispatch(getTasks(1))
//     } else {
//       dispatch(getTasksCumulative(section))
//     }
//   }, [section]);


//   //renders the todo array, returns loading if todo hasn't loaded yet
//   return tasks.length === 0 || undefined || null ? (
//     // <div className=" fixed top-0 left-0 right-0 bottom-0 w-full h-screen overflow-hidden bg-white dark:bg-zinc-500 opacity-50 flex flex-col items-center justify-center">
//     <div className=" fixed top-0 left-0 right-0 bottom-0 w-full h-screen overflow-hidden flex flex-col items-center justify-center">
//       <h2 className="text-center dark:text-white text-lg lg:text-xl font-medium">
//         Notes you add appear here
//       </h2>
//       {/* <OnScreenRender callback={getCurrentVisibleSection}/> */}
//     </div>
//   ) : (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-x-4 gap-y-5 mx-4 sm:mx-12 ">
//       {tasks?.map((list, i) => {
//         return (
//           <div key={list._id}>
//               {/* <Ticket
//                 title={list.title}
//                 id={list._id}
//                 message={list.message}
//               /> */}
//             {/* {tasks.length-1 === i?<OnScreenRender callback={getCurrentVisibleSection}/>:null} */}
//           </div>
//         )})
//       }
      
//     </div>
//   );
// };

const board = {
  columns: [
    {
      id: 1,
      title: "Tasks",
      cards: [
        {
          id: 1,
          title: "Card title 1",
          description: "Card content"
        },
        {
          id: 2,
          title: "Card title 2",
          description: "Card content"
        },
        {
          id: 3,
          title: "Card title 3",
          description: "Card content"
        }
      ]
    },
    {
      id: 2,
      title: "Doing",
      cards: [
        {
          id: 9,
          title: "Card title 9",
          description: "Card content"
        }
      ]
    },
    {
      id: 3,
      title: "Complete",
      cards: [
        {
          id: 10,
          title: "Card title 10",
          description: "Card content"
        },
        {
          id: 11,
          title: "Card title 11",
          description: "Card content"
        }
      ]
    }
  ]
};

const ControlledBoard = () => {
  // You need to control the state yourself.
  const [controlledBoard, setBoard] = useState(board);

  function handleCardMove(_card, source, destination) {
    const updatedBoard = moveCard(controlledBoard, source, destination);
    setBoard(updatedBoard);
  }

  return (
    <Board onCardDragEnd={handleCardMove} disableColumnDrag>
      {controlledBoard}
    </Board>
  );
}

const UncontrolledBoard = ({id}) => {
  const dispatch = useDispatch()
  const { tasks, isLoading } = useSelector((state) => state.tasks);
  const [section, setSection] = useState(1);

  const getCurrentVisibleSection = () => {
    setSection(section+1)
  }

  useEffect(() => {
    if(section===1){
      dispatch(getTasks(1))
    } else {
      dispatch(getTasksCumulative(section))
    }
  }, [section]);
  return (
    <Board
      allowRemoveLane
      // allowRenameColumn
      allowRemoveCard
      onLaneRemove={console.log}
      onCardRemove={console.log}
      onLaneRename={console.log}
      initialBoard={board}
      allowAddCard={{ on: "top" }}
      onNewCardConfirm={draftCard => ({
        id: new Date().getTime(),
        ...draftCard
      })}
      onCardNew={console.log}
    />
  );
}

// const App = () => {
//   return (
//     <>
//       <h4>Example of an uncontrolled board</h4>
//       <UncontrolledBoard />
//       <h4>Example of a controlled board</h4>
//       <p>Just the card moving is implemented in this demo.</p>
//       <p>
//         In this kind of board, you can do whatever you want. We just mirror your
//         board state.
//       </p>
//       <ControlledBoard />
//     </>
//   );
// }



const Kanban = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // get current project from store


    // must check if when loading page with invalid id it goes to default

    // must check if loading page with valid id it selects that id

    useEffect(() => {
      // dispatch(getPostsBySearch({ search, tags: tags.join(',') }));
      dispatch(setSelectedProject(id, navigate))
    }, [id]);

    // useEffect(() => {
    //   // navigate to that id
    // }, [current project from store]);

    return (
        <NoiseBackground>
            <Background className={"dark:bg-transparent min-h-screen"}>
            <Navbar/>
            <SelectProject currentUrl="/Kanban" currentId={id}/>
            {
              id?
                <UncontrolledBoard id/>
              :null
            }
            {/* <Footer/> */}
            </Background>
        </NoiseBackground>
    );
};

export default Kanban;
