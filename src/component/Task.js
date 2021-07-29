import React from 'react'

const list = [
    {
        id: 1,
        text: 'aaaaa',
        day: '5/7',
        reminder:false
    },{
        id: 2,
        text: 'bbbbbb',
        day: '5/8',
        reminder:false
    },{
        id: 3,
        text: 'ccccc',
        day: '5/9',
        reminder:true
    },
]

const Task = () => {
    return (
        <div>
            {list.map((el,index) => {
                <h3>{el.text}</h3>
            })}
        </div>
    )
}



export default Task
