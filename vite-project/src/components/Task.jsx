import React from 'react'

const Task = () => {
  return (
    <>
    <div className='task'>
        <h2 className='task__title'>TaskName</h2>
        <ul>
            <li className="task__item">
                <input type="checkbox" className='task__checkbox' name='task__checkbox'/>
                <label htmlFor="task__checkbox">Comprar Pão</label>
            </li>
            <li className="task__item">
                <input type="checkbox" className='task__checkbox' name='task__checkbox'/>
                <label htmlFor="task__checkbox">Comprar Pão 2</label>
            </li>
            <li className="task__item">
                <input type="checkbox" className='task__checkbox' name='task__checkbox'/>
                <label htmlFor="task__checkbox">Comprar Pão 3</label>
            </li>
        </ul>
    </div>
    </>
  )
}

export default Task