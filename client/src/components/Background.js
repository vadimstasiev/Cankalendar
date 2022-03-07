//Background.js
import React from 'react';

const Background = props => {
    const { children, className } = props 
    return (
        <div className={`bg-white dark:bg-zinc-800 transition-all ${className}`}>
            {children}
        </div>
    )
}

export default Background;