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



const UncontrolledBoard = ({id}) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { tasks, isLoading } = useSelector((state) => state.tasks);
  const selectedProject = JSON.parse(localStorage.getItem('selectedProject'));
  const [section, setSection] = useState(1);

  const getCurrentVisibleSection = () => {
    setSection(section+1)
  }

  useEffect(() => {
    // if(section===1){
    //   dispatch(getTasks(1, selectedProject?.id))
    // } else {
    //   dispatch(getTasksCumulative(section, selectedProject?.id))
    // }
  }, []);


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
