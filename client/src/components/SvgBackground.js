import React from 'react'

const styles = {
    svgBackground: {
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center 110px',
        backgroundSize: '100%',
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        overflow: 'auto'
    }
}

const SvgBackground = (props) => {

    return (
        <div >
            {props.children}
        </div>
    )
}

export default SvgBackground;