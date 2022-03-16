import React from 'react'
import InputArea from "./InputArea";
import TicketsList from "./TicketsList";
import { useState, useEffect } from "react";
import NoiseBackground from '../NoiseBackground';
import Background from '../Background';
import Navbar from '../MainLayout/Navbar';

const Tickets = () => {
  //main array to save tickets
  const [mainTodoList, setMainTodoList] = useState([]);

  useEffect(() => {
    getKeepList();
  }, []);

  //getKeepList calls firestore's 'keepList' collections, orders it my most recent created todo,
  //gives back a snapshot promise which has an array of all the todo items
  const getKeepList = () => {
    // db.collection("keepList")
    //   .orderBy("timeStamp", "desc")
    //   .onSnapshot((querySnapshot) => {
    //     setMainTodoList(
    //       querySnapshot.docs.map((doc) => ({
    //         id: doc.id,
    //         title: doc.data().title,
    //         body: doc.data().body,
    //       }))
    //     );
    //   });
  };

  return (
    <NoiseBackground>
        <Background className={"dark:bg-transparent min-h-screen"}>
        <Navbar/>
        <InputArea
            mainTodoList={mainTodoList}
            setMainTodoList={setMainTodoList}
        />
        <TicketsList mainTodoList={mainTodoList} />
        {/* <Footer/> */}
        </Background>
    </NoiseBackground>
  );
};

export default Tickets;
