import React from 'react'
import Tasktpl from './Task_tpl'




const Task = ({ list, onDelte }) => {
    
    return (
        <div className="wrapper">
            {list.map((el,index) => {
                return (<Tasktpl key={el.id} el={el} onDelte={onDelte} />)
            })}
        </div>
    )
}



export default Task
