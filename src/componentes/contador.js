import React from 'react';
import '../styleSheet/Contador.css';

function Contador({numClick}){
    return (
        <div className='contador'>
            {numClick}
        </div>
    )
}

export default Contador