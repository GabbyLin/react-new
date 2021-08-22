import { FaTimes } from 'react-icons/fa'

export const Task_tpl = ({ el, onDelte }) => {
    return (
        <div className="event">
            <a href="/#" className="closeBtn"><FaTimes onClick={()=>onDelte(el.id)}/></a>
            <h3>{el.text}</h3>
            <p>{ el.day }</p>
        </div>
    )
}
export default Task_tpl