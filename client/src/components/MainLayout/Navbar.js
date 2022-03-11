import React, {useState} from "react";
import { Popover, Transition, Menu } from '@headlessui/react'
import { Toggle } from "../ThemeToggle";
import { useNavigate } from "react-router-dom";
import { AppstoreAddOutlined } from '@ant-design/icons';
import { ThemeContext } from "../ThemeContext";


const AddMoreItemsIconMenu = props => {
  const { children, customClass } = props 
  const navigate = useNavigate()

  

  return (
    <Menu>
          {({ open }) => (
            <>
              <Menu.Button>
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
                    className="absolute right-[180px] w-40 mt-6 origin-top-right bg-zinc-300 dark:bg-zinc-900 border border-zinc-200  divide-zinc-100 rounded-md shadow-lg outline-none"
                  >
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <>
                            <div
                              className={`cursor-pointer ${
                                active
                                ? "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-200"
                                : "text-zinc-700 dark:text-zinc-100"
                              } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                              onClick={() => navigate('/ItemCreate')}
                            >
                              Publish an item
                            </div>
                            <div
                              className={`cursor-pointer ${
                                active
                                ? "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-200"
                                : "text-zinc-700 dark:text-zinc-100"
                              } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                              onClick={() => navigate('/ViewPersonal')}
                            >
                              View Listed
                            </div>
                          </>
                        )}
                      </Menu.Item>
                      {/* <Menu.Item>
                        {({ active }) => (
                          <div
                            className={`cursor-pointer ${
                              active
                              ? "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-200"
                              : "text-zinc-700 dark:text-zinc-100"
                            } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                            onClick={() => navigate("/")}
                          >
                            Option 2
                          </div>
                        )}
                      </Menu.Item> */}
                    </div>
                  </Menu.Items>
                </div>
              </Transition>
            </>
          )}
        </Menu>
  )
}

const ProfileIconMenu = props => {
  const { children, customClass } = props 
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const navigate = useNavigate()

  return (
    <Menu>
          {({ open }) => (
            <>
              <Menu.Button>
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
                {user?
                  <Menu.Items
                    static
                    className="absolute right-[85px] w-52 mt-6 origin-top-right bg-zinc-300 dark:bg-zinc-900 border border-zinc-200 divide-y divide-zinc-100 rounded-md shadow-lg outline-none"
                  >
                    <div className="px-4 py-3">
                      <p className="text-sm leading-5 text-zinc-900 dark:text-zinc-200">Signed in as</p>
                      <p className="text-sm font-medium leading-5 text-zinc-900 dark:text-zinc-200 truncate">
                        {user.result.email}
                      </p>
                    </div>
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <div
                            className={`cursor-pointer ${
                              active
                                ? "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-200"
                                : "text-zinc-700 dark:text-zinc-100"
                            } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                            onClick={() => navigate('/AccountSettings')}
                          >
                            Account settings
                          </div>
                        )}
                      </Menu.Item>
                    </div>
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <div
                            className={`cursor-pointer ${
                              active
                              ? "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-200"
                              : "text-zinc-700 dark:text-zinc-100"
                            } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                            onClick={() => navigate('/SignOut')}
                          >
                            Sign out
                          </div>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                  :
                  <Menu.Items
                    static
                    className="absolute right-[85px] w-[130px] mt-6 origin-top-right bg-zinc-300 dark:bg-zinc-900 border border-zinc-200 divide-y divide-zinc-100 rounded-md shadow-lg outline-none"
                  >
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <div
                            className={`cursor-pointer ${
                              active
                              ? "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-200"
                              : "text-zinc-700 dark:text-zinc-100"
                            } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                            onClick={() => navigate('/SignIn')}
                          >
                            Sign In
                          </div>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <div
                            className={`cursor-pointer ${
                              active
                              ? "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-200"
                              : "text-zinc-700 dark:text-zinc-100"
                            } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                            onClick={() => navigate('/SignUp')}
                          >
                            Sign Up
                          </div>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                }
                </div>
              </Transition>
            </>
          )}
        </Menu>
  )
}

const Header = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);
  const [isActive, setIsActive] = useState(false);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const navigate = useNavigate()



  const activeSide = "bg-zinc-300 dark:bg-zinc-900 h-screen w-80 transform transition-all relative duration-700 text-white flex justify-center p-2"
  const hiddenSide = "bg-zinc-300 dark:bg-zinc-900 h-screen w-80 transform transition-all relative duration-700 text-white flex justify-center p-2 -translate-x-80"
  const activeButton = "z-20 cursor-pointer transition-all transform duration-700 flex items-center justify-center"
  const normalButton = "z-20 fixed cursor-pointer transition-all transform duration-700 flex items-center justify-center"

    return (
      <header>
        <nav id="header" className=" w-full top-0 transition-all dark:bg-gradient-to-r dark:from-zinc-700">
          <div className={`order-1 flex transform fixed transition-all duration-1000 md:hidden ${isActive ? "z-10":"z-0"}`}>
            <div className={isActive ? activeSide:hiddenSide}>
              <ul className="md:flex text-base text-zinc-700 pt-4 pt-14">
                <li><a className="inline-block no-underline font-medium dark:text-zinc-200 dark:hover:text-white hover:underline dark:hover:no-underline py-2 px-4 cursor-pointer" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>Toggle Theme</a></li>
                <li><a className="inline-block no-underline font-medium dark:text-zinc-200 dark:hover:text-white hover:underline dark:hover:no-underline py-2 px-4 cursor-pointer" onClick={() => navigate('/ItemCreate')}>Publish an Item</a></li>
                <li><a className="inline-block no-underline font-medium dark:text-zinc-200 dark:hover:text-white hover:underline dark:hover:no-underline py-2 px-4 cursor-pointer" onClick={() => navigate('/Kanban')}>Kanban</a></li>
                {/* <li><a className="inline-block no-underline font-medium dark:text-zinc-200 dark:hover:text-white hover:underline dark:hover:no-underline py-2 px-4 cursor-pointer" onClick={() => navigate('/FAQ')}>FAQ</a></li> */}
                {
                  user?
                    <>
                      <li><a className="inline-block no-underline font-medium dark:text-zinc-200 dark:hover:text-white hover:underline dark:hover:no-underline py-2 px-4 cursor-pointer" onClick={() => navigate('/AccountSettings')}>Account settings</a></li>
                      <li><a className="inline-block no-underline font-medium dark:text-zinc-200 dark:hover:text-white hover:underline dark:hover:no-underline py-2 px-4 cursor-pointer" onClick={() => navigate('/Calendar')}>Calendar</a></li>
                      <li><a className="inline-block no-underline font-medium dark:text-zinc-200 dark:hover:text-white hover:underline dark:hover:no-underline py-2 px-4 cursor-pointer" onClick={() => navigate('/ViewPersonal')}>View Listed</a></li>
                      <li><a className="inline-block no-underline font-medium dark:text-zinc-200 dark:hover:text-white hover:underline dark:hover:no-underline py-2 px-4 cursor-pointer" onClick={() => navigate('/SignOut')}>Sign Out</a></li>

                    </>
                  :
                    <>
                      <li><a className="inline-block no-underline font-medium dark:text-zinc-200 dark:hover:text-white hover:underline dark:hover:no-underline py-2 px-4 cursor-pointer" onClick={() => navigate('/SignIn')}>Sign In</a></li>
                      <li><a className="inline-block no-underline font-medium dark:text-zinc-200 dark:hover:text-white hover:underline dark:hover:no-underline py-2 px-4 cursor-pointer" onClick={() => navigate('/SignUp')}>Sign Up</a></li>
                    </>
                }
              </ul>
            </div>
          </div>
          <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3 pt-4">     
            <div className="order-2 md:hidden">       
              <div className={isActive ? normalButton : activeButton}
              onClick={() =>setIsActive(!isActive)}>
                  <label htmlFor="menu-toggle" className="cursor-pointer block">
                    <svg className="fill-current text-zinc-900 dark:text-zinc-200 hover:text-black dark:hover:text-white" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                      <title>menu</title>
                      <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                    </svg>
                  </label>
              </div>
              <input className="hidden" type="checkbox" id="menu-toggle" />
            </div>
            <div className="lg:order-3 order-8 hidden md:flex md:items-center md:pt-4 lg:pt-0 w-auto w-full" id="menu">
              <nav>
                <ul className="md:flex items-center justify-between text-base text-zinc-700 pt-4 md:pt-0">
                  <li><a className="inline-block no-underline font-medium dark:text-zinc-200 dark:hover:text-white hover:underline dark:hover:no-underline py-2 px-4 cursor-pointer" onClick={() => navigate('/Kanban')}>Kanban</a></li>
                  <li><a className="inline-block no-underline font-medium dark:text-zinc-200 dark:hover:text-white hover:underline dark:hover:no-underline py-2 px-4 cursor-pointer" onClick={() => navigate('/Calendar')}>Calendar</a></li>
                  {/* <li><a className="inline-block no-underline font-medium dark:text-zinc-200 dark:hover:text-white hover:underline dark:hover:no-underline py-2 px-4 cursor-pointer" onClick={() => navigate('/FAQ')}>FAQ</a></li> */}
                </ul>
              </nav>
            </div>
            <div className="lg:order-4 order-6">
              <a onClick={() => navigate(`/`)} className="cursor-pointer flex items-center tracking-wide no-underline hover:no-underline font-bold text-xl text-zinc-800 dark:text-zinc-100 hover:text-black dark:hover:text-white" >
                <svg className="fill-current mr-2 text-zinc-800 dark:text-zinc-100 dark:hover:text-white" viewBox="0 0 500 500" width={40}>
                  <path d="M 278.689 361.061 C 278.689 361.061 277.254 361.351 346.91 360.954 L 253.94 240.498 L 292.895 204.151 C 303.087 194.694 313.465 185.428 324.024 176.357 C 333.931 167.858 349.351 164.418 362.667 164.418 C 362.803 164.418 362.667 159.733 362.667 159.733 C 362.667 159.733 362.608 159.712 315.154 160.947 C 314.926 160.953 315.02 169.9 313.997 171.995 C 311.369 177.375 307.29 181.945 303.001 186.194 C 283.396 205.489 233.615 251.784 227.972 257.018 C 227.858 247.515 227.977 164.27 227.977 164.27 L 257.57 164.276 L 257.57 159.59 L 171.3 159.59 L 171.3 164.276 L 197.546 164.254 L 197.603 355.783 L 170.325 355.773 L 170.325 361.001 C 170.319 360.93 257.212 361.001 257.212 361.001 L 257.212 355.91 L 227.768 355.915 L 227.79 265.417 C 227.745 265.406 229.934 263.651 231.46 262.427 C 234.324 265.867 237.647 269.85 237.681 269.861 L 305.355 355.833 L 278.689 355.838 L 278.689 361.061 Z" />
                  <path d="M 349.372 152.992 C 313.481 135.905 267.087 130.022 223.414 137.024 C 185.786 143.27 152.088 156.535 126.794 175.069 C 65.791 219.497 47.773 283.135 80.511 338.179 C 101.091 372.278 139.749 403.689 194.398 418.398 C 216.489 424.267 240.166 427.438 264.161 427.733 C 267.432 427.766 270.693 427.657 273.938 427.405 C 304.701 424.913 333.755 417.128 357.879 404.915 C 366.795 400.438 379.468 391.052 388.786 382.697 C 418.611 355.954 413.824 322.39 413.824 322.39 L 402.282 322.348 C 402.282 322.348 401.483 330.597 401.343 334.283 C 399.885 344.68 395.941 355.703 388.056 364.962 C 385.36 368.219 382.59 371.433 379.825 374.601 C 352.228 406.253 289.561 421.296 231.669 409.883 C 202.024 403.924 173.566 392.449 157.824 377.617 C 143.366 363.995 99.206 334.632 110.522 262.386 C 114.986 233.886 122.105 224.19 129.717 212.881 C 145.942 188.775 176.327 167.826 188.383 161.449 C 193.406 158.792 221.988 148.625 235.628 147.094 C 263.627 143.951 333.318 145.602 365.169 170.997 C 384.41 186.425 396.983 204.701 401.686 224.049 C 402.211 226.783 403.721 232.248 403.721 232.248 L 414.421 232.248 L 414.492 147.294 L 401.845 147.311 C 401.957 147.311 401.822 150.627 401.755 152.25 C 401.456 160.643 386.914 163.497 375.324 162.259 C 365.077 161.156 357.353 156.846 349.372 152.992 Z M 1143.745 23.735 L 1143.745 25.065 L 1138.368 25.065 L 1138.368 34.823 L 1136.174 34.823 L 1136.174 25.065 L 1130.797 25.065 L 1130.797 23.735 L 1143.745 23.735 Z M 1148.106 23.735 L 1151.215 23.735 L 1155.789 33.112 L 1160.339 23.735 L 1163.403 23.735 L 1163.403 34.823 L 1161.348 34.823 L 1161.348 28.272 L 1161.368 27.153 L 1161.39 25.469 L 1156.84 34.823 L 1154.69 34.823 L 1150.117 25.469 L 1150.117 25.805 L 1150.142 27.043 L 1150.187 28.264 L 1150.187 34.804 L 1148.106 34.804 L 1148.106 23.735 Z" transform="matrix(0.999848, 0.017451, -0.017451, 0.999848, 2.071659, -20.855738)"/>
                  <g transform="matrix(5.671142, 0, 0, 5.486385, 63.055569, 119.590775)"/>
                </svg>
                CanKalendar
              </a>
            </div>
            <div className="z-50 lg:order-5 order-7 hidden md:flex relative items-center " id="nav-content">
              

              <AddMoreItemsIconMenu customClass="mr-4 ml-4 pt-0.5 inline-block " >
                <span className="rounded-md shadow-sm">
                  <div className=" inline-flex justify-center w-full px-4  text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white dark:bg-zinc-900 border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none active:bg-gray-50 active:text-gray-800">
                    <AppstoreAddOutlined className="pt-0.5 text-lg dark:text-zinc-200 hover:text-black dark:hover:text-white"/>
                    <div className="py-2">

                      <svg
                        className="w-5 h-5 ml-2 -mr-1 fill-current dark:text-zinc-200 hover:text-black dark:hover:text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                          />
                      </svg>
                    </div>
                  </div>
                </span>
              </AddMoreItemsIconMenu>
              
              <ProfileIconMenu customClass="mr-4 pt-0.5 inline-block" >
              <span className="rounded-md shadow-sm">
                  <div className=" inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white dark:bg-zinc-900 border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:shadow-outline-gray active:bg-gray-50 active:text-gray-800">
                    <svg className="fill-current dark:text-zinc-200 hover:text-black dark:hover:text-white" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                      <circle fill="none" cx="12" cy="7" r="3" />
                      <path d="M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 5-5S14.757 2 12 2zM12 10c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3S13.654 10 12 10zM21 21v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h2v-1c0-2.757 2.243-5 5-5h4c2.757 0 5 2.243 5 5v1H21z" />
                    </svg>
                    <svg
                      className="w-5 h-5 ml-2 -mr-1 fill-current dark:text-zinc-200 hover:text-black dark:hover:text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
              </span>
              </ProfileIconMenu>
              {/* <a className="pl-1 inline-block" >
                <svg className="h-6 w-6 fill-current text-zinc-700 hover:text-zinc-600 dark:text-zinc-200 dark:hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M12,4.595c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758c-2.353,2.363-2.352,6.059,0.002,8.412 l7.332,7.332c0.17,0.299,0.498,0.492,0.875,0.492c0.322,0,0.609-0.163,0.792-0.409l7.415-7.415 c2.354-2.354,2.354-6.049-0.002-8.416c-1.137-1.131-2.631-1.754-4.209-1.754C14.513,3.037,13.104,3.589,12,4.595z M18.791,6.205 c1.563,1.571,1.564,4.025,0.002,5.588L12,18.586l-6.793-6.793C3.645,10.23,3.646,7.776,5.205,6.209 c0.76-0.756,1.754-1.172,2.799-1.172s2.035,0.416,2.789,1.17l0.5,0.5c0.391,0.391,1.023,0.391,1.414,0l0.5-0.5 C14.719,4.698,17.281,4.702,18.791,6.205z" />
                </svg>
              </a> */}
              <a className="inline-block pl-2" >
                <Toggle className="text-zinc-700 hover:text-zinc-600 dark:text-zinc-200 dark:hover:text-white text-md"/>
              </a>
            </div>
          </div>
        </nav>
      </header>
    );
}
export default Header;