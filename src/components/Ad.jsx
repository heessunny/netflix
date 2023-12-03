import React from 'react';
import UMC from'./img/Untitled.png'

function Ad(props) {
    if(!props.State){
        return null;
    }
    return (
        <img src={UMC} alt="img" className='adImg'></img>
    );
  }
  
  export default Ad;
  