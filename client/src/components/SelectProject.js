import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Popover, Transition, Menu } from '@headlessui/react'
import { AppstoreAddOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import { setSelectedProject } from "../actions/tasks";


const SelectProjectDropdown = props => {
    const { children, customClass, currentUrl } = props 
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const navigate = useNavigate()
    const dispatch = useDispatch();


    useEffect(() => {
        // dispatch(getProjectsList())
    }, [user]);

    if(!user) return <></>

    return (
      <Menu>
            {({ open }) => (
              <>
                <Menu.Button className="w-full">
                  <div className={customClass}>{children}</div>
                </Menu.Button>
                <Transition
                  show={open}
                  enter="transition ease-out duration-500"
                  enterFrom=" opacity-0 "
                  enterTo=" opacity-100 "
                  leave="transition ease-in duration-500"
                  leaveFrom=" opacity-100 "
                  leaveTo=" opacity-0 "
                >
                  <div className="static">
                    <Menu.Items
                      static
                      className="mt-2 origin-top-right w-full rounded-md shadow-lg outline-none"
                    >
                      {
                        user.result.projects?
                            user.result.projects.owner.map(proj => (
                                <div className="py-1" key={proj.id}>
                                    <Menu.Item>
                                    {({ active }) => (
                                        <div
                                        className={`cursor-pointer ${
                                            active
                                            ? "bg-zinc-100 dark:bg-zinc-600 text-zinc-900 dark:text-zinc-200"
                                            : "text-zinc-700 dark:text-zinc-100"
                                        } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                                        onClick={() => navigate(`${currentUrl}/${proj.id}`)}
                                        >
                                        {proj.name}
                                        </div>
                                    )}
                                    </Menu.Item>
                                </div>
                            ))
                        :
                            null
                      }
                      
                    </Menu.Items>
                  </div>
                </Transition>
              </>
            )}
          </Menu>
    )
  }

const SelectProject = ({currentUrl, currentId}) => {
    const { project } = useSelector((state) => state.tasks);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(setSelectedProject(currentId))
    }, []);

    return <div className="dark:bg-zinc-800 transition duration-300 border dark:border-gray-500 dark:hover:border-gray-300  rounded-md overflow-hidden w-3/4 sm:max-w-md md:max-w-md lg:max-w-lg mx-auto mt-10 mb-5 shadow-md transition cursor-text">
        
            <SelectProjectDropdown currentUrl={currentUrl}>
                <div className="dark:bg-zinc-900 dark:text-white inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="menu-button" aria-expanded="true" aria-haspopup="true">
                Selected: {project.name}
                <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                </div>
            </SelectProjectDropdown>
    </div>
}

export default SelectProject