import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux'

import { getPosts } from './actions/posts'
import Form from './components/Form/Form'
import Posts from './components/Posts/Posts'

const App = () => {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch]);
  
  return (
    <>
      <Posts/>
      <Form/>
    </>
  )
}

export default App