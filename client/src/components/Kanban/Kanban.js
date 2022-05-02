import React, { useState, useEffect } from "react";
import NoiseBackground from '../NoiseBackground';
import Background from '../Background';
import Navbar from '../MainLayout/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../MainLayout/Footer';
import { getTasks, getTasksCumulative, getTasksForKanban, setSelectedProject } from "../../actions/tasks";
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

  useEffect(() => {
    dispatch(getTasksForKanban(selectedProject?.id, navigate))
  }, [selectedProject?.id]);
  
  useEffect(() => {
    const cards = {
      column1: [],  // tasks
      column2: [],  // doing
      column3: [],  // complete
    }
    tasks.map(task=> {
      if(task.column===1){
        cards.column1.push({id: task._id, title: task.title, description: task.message})
      } else if(task.column===2){
        cards.column2.push({id: task._id, title: task.title, description: task.message})
      } else if(task.column===3){
        cards.column3.push({id: task._id, title: task.title, description: task.message})
      }
    })
    setBoard(currentBoard => {
        return {...currentBoard, columns: currentBoard.columns.map(column => {
              if(column.id===1){
                return {...column, cards: cards.column1}
              } else if(column.id===2){
                return {...column, cards: cards.column2}
              } else if(column.id===3){
                return {...column, cards: cards.column3}
              }
              return column
            }
          )
        }
      }
    )
    
  }, [tasks]);

  
  useEffect(() => {
    console.log("column1", board)
  }, [board]);

  // return <></>
  return (
    <Board
      allowRemoveLane
      // allowRenameColumn
      allowRemoveCard
      onLaneRemove={console.log}
      onCardRemove={console.log}
      onLaneRename={console.log}
      initialBoard={board}
      // allowAddCard={{ on: "top" }}
      onNewCardConfirm={draftCard => ({
        id: new Date().getTime(),
        ...draftCard
      })}
      onCardNew={console.log}
    />
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
