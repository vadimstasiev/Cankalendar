import React, {useState, useEffect} from 'react'
import Background from './Background';
import SvgBackground from "./SvgBackground";
import {FixedToggle} from "./ThemeToggle";
import { useNavigate, useLocation } from "react-router-dom";
import { Modal, Button } from 'antd';   
import { SyncOutlined, CloseOutlined, CheckOutlined, ExclamationCircleOutlined  } from '@ant-design/icons';
import { createproject } from '../actions/auth';
import { useDispatch } from 'react-redux';




const CreateProject = (props) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [error, setError] = useState("");


    const submit = async () => {
        dispatch(createproject({userEmail: user?.result.email, projectName: name}, navigate)).catch((error) => {
            setError(error.response?.data?.message)
        })
    }



    useEffect(() => {
    }, []);


    
    return (
        <Background>
        <SvgBackground>
            <FixedToggle/>
            
            <div className="flex my-auto items-center justify-center">
                <div className="grid bg-white dark:bg-zinc-900 rounded-lg shadow-xl w-11/12 md:w-9/12 lg:w-2/5">
                    <div className="grid grid-cols-1 mt-5 mx-7">
                        <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold pb-5">Please enter a project name</label>
                        <input value={name} onChange={e => setName(e.target.value)} className="py-2 px-3 rounded-lg border-2 border-gray-300 dark:bg-zinc-900 dark:border-zinc-500 text-zinc-700 dark:text-white mt-1 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent" type="text" placeholder="Please enter a descriptive title" />
                    </div>

                    {
                        error?
                        <>
                            <div className="bg-red-100 dark:bg-red-900 border-l-4 border-red-500 text-red-700 dark:text-red-300 p-4 mx-7 mt-3" role="alert">
                                <p className="font-bold">{error}</p>
                            </div>

                            
                        </>
                        :
                        null
                    }
                    <div className='flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5'>
                        <button className='w-auto bg-gray-500 hover:bg-gray-700 rounded-lg shadow-xl font-medium text-white px-4 py-2' onClick={() => navigate('/')} >Cancel</button>
                        <button className='w-auto bg-gray-500 hover:bg-gray-700 rounded-lg shadow-xl font-medium text-white px-4 py-2' onClick={() => submit()}>Submit</button>
                    </div>
                </div>
            </div>
        </SvgBackground>
        </Background>
    )
}

export default CreateProject