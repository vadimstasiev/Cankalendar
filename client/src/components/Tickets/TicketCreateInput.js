import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { createTask, updateTask } from '../../actions/tasks';
import { useNavigate } from 'react-router-dom';

const TicketCreateInput = () => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputMessage, setInputMessage] = useState("");
  const [showInput, setShowInput] = useState(false);

  const { tasks, isLoading, selectedProject } = useSelector((state) => state.tasks);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const titleRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem('profile'));

    dispatch(createTask({ title: inputTitle, message: inputMessage, creator: user?.result?.email, projectId: selectedProject.id }, navigate));

    setInputMessage("");
    setInputTitle("");
    setShowInput(false);
  };

  //closes the title if clicked outside of inputArea
  const handleClickOutside = (e) => {
    const { current: wrap } = titleRef;
    if (wrap && !wrap.contains(e.target)) {
      setShowInput(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <main className="dark:bg-zinc-800 transition duration-300 relative border dark:border-gray-500 dark:hover:border-gray-300  rounded-md overflow-hidden w-3/4 sm:max-w-md md:max-w-md lg:max-w-lg mx-auto mt-10 mb-5 shadow-md transition cursor-text">
      <form onSubmit={handleSubmit} className="px-2 pt-2 pb-1 ">
        <div className="flex flex-col ">
          {showInput && (
            <input
              ref={titleRef}
              type="text"
              placeholder="Title"
              value={inputTitle}
              onChange={(e) => setInputTitle(e.target.value)}
              onFocus={() => setShowInput(true)}
              className="dark:bg-zinc-800 transition duration-300 font-medium px-1 pt-1 py-1 outline-none font-roboto text-base sm:text-sm md:text-sm lg:text-sm dark:bg-background dark:text-white"
            />
          )}

          <textarea
            className="dark:bg-zinc-800 transition duration-300 font-medium px-1 mt-1 my-2 outline-none font-roboto text-base sm:text-sm md:text-sm lg:text-sm dark:bg-background dark:text-white"
            type="text"
            rows="3"
            cols="20"
            placeholder="Take a note..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onFocus={() => setShowInput(true)}
            style={{ resize: "none" }}
          />
        </div>

        {inputTitle || inputMessage ? (
          <div className="flex justify-end m-0">
            <button
              onFocus={() => setShowInput(true)}
              type="submit"
              tabIndex="0"
              disabled={!inputMessage && !inputTitle}
              className="transition duration-300 font-bold text-xs font-roboto text-gray-700 bg-gray-100 rounded-md px-5 py-2 mr-1 mb-1 md:mr-1.5 md:mb-1.5 select-none hover:bg-gray-200 focus:bg-gray-200 focus:outline-none dark:text-white dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:bg-gray-600"
            >
              Done
            </button>
          </div>
        ) : (
          <div></div>
        )}
      </form>
    </main>
  );
};

export default TicketCreateInput;
