import React, {useEffect, useCallback} from 'react'
import { useState, useRef } from "react";
import { DeleteOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { LoadingOutlined } from '@ant-design/icons';
import { getTask, deleteTask, updateTask } from '../../actions/tasks';


const TicketModal = ({ id, showModal, setShowModal }) => {
  const navigate = useNavigate()

  const [modalTitle, setModalTitle] = useState("");
  const [modalMessage, setModalMessage] = useState("");

  const modalRef = useRef();

  const dispatch = useDispatch()
  const { task, isLoading } = useSelector((state) => state.tasks);

  const removeTodo = () => {
    dispatch(deleteTask(id, navigate))
  };

  //updates todo when changes are made in modal
  const updateTodo = () => {
    dispatch(updateTask(id, {...task, title:modalTitle, message:modalMessage}))
  };

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
      updateTodo();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTodo();
    setShowModal(false);
  };

  const handleTitleChange = (e) => {
    setModalTitle(e.target.value);
  };

  const handleBodyChange = (e) => {
    setModalMessage(e.target.value);
  };

  
  useEffect(() => {
    if(showModal){
      dispatch(getTask(id, navigate))
    }
  }, [showModal]);
  
  useEffect(() => {
    if(task){
      setModalTitle(task.title)
      setModalMessage(task.message)
    }
  }, [task]);

  const escFunction = useCallback((event) => {
    if(event.keyCode === 27) {
      //Do whatever when esc is pressed
      setShowModal(false)
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, []);

  return (
    <div>
      {showModal ? (
        <React.Fragment>
          <div
            onMouseDown={closeModal}
            ref={modalRef}
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <main className="border dark:border-gray-400  bg-white dark:bg-zinc-800 break-all p-3 pb-1 rounded-md overflow-hidden  w-full sm:w-3/4 sm:max-w-md md:max-w-md lg:max-w-lg mx-auto mt-10 mb-5 shadow-md transition cursor-text">
              <form onSubmit={handleSubmit}>
                {
                isLoading?
                  <div className="grid  place-items-center py-10">
                    <LoadingOutlined style={{ fontSize: 100 }} className="text-zinc-500 dark:text-zinc-400" spin />
                  </div>
                :
                  <div className="flex flex-col">
                    <input
                      type="text"
                      placeholder="Title"
                      onChange={handleTitleChange}
                      className="bg-white dark:bg-zinc-800 lg:tracking-wide dark:text-white font-medium px-2 pt-1 outline-none pb-2 font-roboto text-base sm:text-sm md:text-sm lg:text-sm"
                      value={modalTitle}
                    />

                    <textarea
                      value={modalMessage}
                      className="bg-white dark:bg-zinc-800 lg:tracking-wide flex-grow dark:text-white font-normal px-2 pt-2 outline-none font-roboto text-base sm:text-sm md:text-sm lg:text-sm"
                      type="text"
                      rows="6"
                      cols="20"
                      placeholder="Take a note..."
                      onChange={handleBodyChange}
                      style={{ resize: "none" }}
                    />
                    <div className="flex justify-between">
                      <div
                        tabIndex="0"
                        className=" self-end p-4  transition rounded select-none focus:outline-none dark:text-white "
                      >
                        <DeleteOutlined
                          onClick={() => removeTodo()}
                          className="cursor-pointer" 
                        />
                      </div>
                      <button
                        type="submit"
                        tabIndex="0"
                        className="transition duration-300 font-semibold text-xs font-roboto text-gray-700 bg-gray-100 rounded-md px-5 py-2 mr-1 mb-1 md:mr-1.5 md:mb-1.5 select-none hover:bg-gray-200 focus:bg-gray-200 focus:outline-none dark:text-white dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:bg-gray-600"
                      >
                        Done
                      </button>
                    </div>
                  </div>
                }
              </form>
            </main>
          </div>
          <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
        </React.Fragment>
      ) : null}
    </div>
  );
};

export default TicketModal;