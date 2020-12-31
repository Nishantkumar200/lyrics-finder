import React from "react";
import {Spinners} from '../spinner.gif';

function Spinner() {
  return (
    <>
     <img alt = 'Loading...' src ={Spinners} style ={{width:'200px',margin:'50px auto',display:'block'}}/>
    </>
  );
}

export default Spinner;
