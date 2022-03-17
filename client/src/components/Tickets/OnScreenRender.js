import React, {Children, useRef, useState, useEffect} from 'react'

const useOnScreen = (ref) => {

    const [isIntersecting, setIntersecting] = useState(false)
  
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting)
    )
  
    useEffect(() => {
      observer.observe(ref.current)
      // Remove the observer as soon as the component is unmounted
      return () => { observer.disconnect() }
    }, [])
  
    return isIntersecting
}

const OnScreenRender = ({children, callback}) => {
    const ref = useRef()
    const isVisible = useOnScreen(ref)

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if(isVisible===true && visible===false){
            setVisible(true)
            if(callback){
                callback()
            }
        }
    }, [isVisible]);
    
    return <div ref={ref}>{visible && children}</div>
}

export default OnScreenRender