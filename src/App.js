import { useState } from 'react'
import Header from './component/Header';
import Task from './component/Task'
import './App.css';



function App() {
  const deleteItem = (id) => {
    console.log('delete:'+id)
  }
  const [list, setTasks] = useState([
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
    ])
  return (
    <div className="App">
      <Header title="vvvvvv" />
      <Task list={list} onDelte={deleteItem}/>
    </div>
  );
}



export default App;
