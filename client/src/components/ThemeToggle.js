//ThemeToggle.js
import React from 'react';
import { FaSun, FaMoon} from "react-icons/fa";
import { ThemeContext } from './ThemeContext';


const Toggle = (props) => {
    const { theme, setTheme } = React.useContext(ThemeContext);
    const customClasses = props.className
    return <div className="transition duration-500 ease-in-out rounded-full p-2">
        {theme === 'dark' ? (
            <FaSun
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className={`text-zinc-500 dark:text-zinc-400 text-2xl cursor-pointer  ${customClasses}`}
            />
        ) : (
                <FaMoon
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className={`text-zinc-500 dark:text-zinc-400 text-2xl cursor-pointer  ${customClasses}`}
                />
            )}
    </div>
}


const FixedToggle = () => {
    return (
        <div className="absolute right-0 top-0 mr-4 mt-4 md:mr-6 md:mt-6">
            <Toggle/>
        </div>
    );
};

export {Toggle, FixedToggle};