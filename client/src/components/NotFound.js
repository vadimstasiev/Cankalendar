import React from 'react'
import { Result } from 'antd';
import { Link } from 'react-router-dom';

import SvgBackground from './SvgBackground';

import {FixedToggle} from './ThemeToggle';
import Background from './Background';


const NotFound = () => {
    return (
        <Background>
        <SvgBackground>
            <FixedToggle/>
            <div className="grid  place-items-center pt-40">
                    <Result
                        className='text-slate-900 dark:text-slate-400'
                        status="404"
                        title="404"
                        subTitle="Sorry, the page you visited does not exist."
                        // extra={}
                    />
                    <Link to='/'>
                            <button type="button" className="mt-5 py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-zinc-900 
                                bg-white rounded-lg border border-zinc-200 hover:bg-zinc-100 hover:text-gray-700 focus:z-10 focus:ring-2
                                focus:ring-gray-700 focus:text-gray-700 dark:bg-zinc-800 dark:text-zinc-400 dark:border-zinc-600 
                                dark:hover:text-white dark:hover:bg-zinc-700"
                            >
                               {"Back Home"}
                            </button>
                    </Link>
            </div>
        </SvgBackground>
        </Background>
    )
}

export default NotFound