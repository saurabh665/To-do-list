import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { addtodo,deletetodo,removetodo } from '../actions/index'

const Todolidt = () => {
    const[input,setinputs]=useState('')
    const list=useSelector((state)=>state.todoReducer.list)
    const Dispatch=useDispatch() ;  


  return (
    <div className='min-div'>
      <div className='child-div'>
        <figure>
        <figcaption>Add Your List Here</figcaption>
        </figure>
        <div className="add-item">
          <input type="text" placeholder='Enter list' value={input} onChange={(e)=>setinputs(e.target.value)}></input>
          <i className="fa fa-plus add-btn" onClick={()=>Dispatch(addtodo(input),
            setinputs(''))}></i>
        </div>

        <div className='showitem'>

        {
          
        }




          <div className='eachItem'>
          <h3>Test</h3>
          <i className="far fa-trash-alt add-btn" title="Delete Item"onClick={()=>Dispatch(deletetodo(input),
            setinputs(''))}></i>
          </div>

        </div>
      
      </div>
    </div>
  )
}

export default Todolidt
