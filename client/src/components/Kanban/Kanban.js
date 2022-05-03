import React, { useState, useEffect } from "react";
import NoiseBackground from '../NoiseBackground';
import Background from '../Background';
import Navbar from '../MainLayout/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../MainLayout/Footer';
import { getTasks, getTasksCumulative, getTasksForKanban, setSelectedProject, updateKanbanTasks } from "../../actions/tasks";
import Board, { addColumn, moveCard } from './KanbanBoard'
import SelectProject from "../SelectProject";
import { useParams, useNavigate, Link } from 'react-router-dom';


const defaultBoard = {
  columns: [
    {
      id: 1,
      title: "Tasks",
      cards: []
    },
    {
      id: 2,
      title: "Doing",
      cards: []
    },
    {
      id: 3,
      title: "Complete",
      cards: []
    }
  ]
};



const UncontrolledBoard = ({id}) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { tasks, isLoading } = useSelector((state) => state.tasks);
  const selectedProject = JSON.parse(localStorage.getItem('selectedProject'));
  const [section, setSection] = useState(1);
  const [board, setBoard] = useState(defaultBoard);
  const [ranOnce, setRanOnce] = useState(false)

  const order = ( a, b ) => {
    if ( a.task.order < b.task.order ){
      return -1;
    }
    if ( a.task.order > b.task.order ){
      return 1;
    }
    return 0;
  }

  useEffect(() => {
    dispatch(getTasksForKanban(selectedProject?.id, navigate))
  }, []);
  
  useEffect(() => {
    // convert received tasks into board tasks
    console.log(tasks?.length)
    if(!ranOnce && tasks.length!==0){
      setRanOnce(true)
      const cards = {
        column1: [],  // tasks
        column2: [],  // doing
        column3: [],  // complete
      }
      tasks.map(task=> {
        if(task.column===1){
          cards.column1.push({id: task._id, title: task.title, description: task.message, task: task})
        } else if(task.column===2){
          cards.column2.push({id: task._id, title: task.title, description: task.message, task: task})
        } else if(task.column===3){
          cards.column3.push({id: task._id, title: task.title, description: task.message, task: task})
        }
      })
      console.log((cards.column3).sort(order), cards.column3)
      setBoard(currentBoard => {
          return {...currentBoard, columns: currentBoard.columns.map(column => {
                if(column.id===1){
                  return {...column, cards: (cards.column1).sort(order)}
                } else if(column.id===2){
                  return {...column, cards: (cards.column2).sort(order)}
                } else if(column.id===3){
                  return {...column, cards: (cards.column3).sort(order)}
                }
                return column
              }
            )
          }
        }
      )
    }
    // console.log("tasks changed")
  }, [tasks, selectedProject?.id]);

  
  useEffect(() => {
    // convert board tasks back into tasks that can be posted
    // console.log("board changed")
    const updatedTasks = []
    board?.columns?.forEach(column => {
      // console.log(column.cards)
      column?.cards.forEach((card, i) => {
        updatedTasks.push({order:i, taskId: card.id, column: column.id})
      })
    })
    // console.log(updatedTasks)
    dispatch(updateKanbanTasks(selectedProject?.id, updatedTasks))
  }, [board.columns]);

  // return <></>
  return (
    <>
      {
       board?
        <Board
          allowRemoveLane
          // allowRenameColumn
          // allowRemoveCard
          onLaneRemove={console.log}
          onCardRemove={console.log}
          onLaneRename={console.log}
          board={board}
          setBoard={setBoard}
          // allowAddCard={{ on: "top" }}
          onNewCardConfirm={draftCard => ({
            id: new Date().getTime(),
            ...draftCard
          })}
          onCardNew={console.log}
        />
      : null
      }
    </>
  );
}


const Kanban = () => {
    const { id } = useParams();
    const { selectedProject } = useSelector((state) => state.tasks);

    const dispatch = useDispatch();
    const navigate = useNavigate();


    return (
        <NoiseBackground>
            <Background className={"dark:bg-transparent min-h-screen"}>
            <Navbar/>
            <SelectProject currentUrl="/Kanban" id={id}/>
            {
              selectedProject?
                <UncontrolledBoard id/>
              :null
            }
            {/* <Footer/> */}
            </Background>
        </NoiseBackground>
    );
};

export default Kanban;
