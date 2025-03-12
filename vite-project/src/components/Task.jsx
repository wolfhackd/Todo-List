import React from 'react'

// Posso criar um componente para as tasks list
// Posso criar um componente para o controlador

const Task = () => {
  return (
    <>
    <div className='task'>
        <h2 className='task__title'>TaskName</h2>
        <ul>
            {/* Arrumar os ids */}
            <li className="task__item">
                <input type="checkbox" id='task__checkbox' name='task__checkbox'/>
                <label htmlFor="task__checkbox">Comprar Pão</label>
            </li>
            <li className="task__item">
                <input type="checkbox" id='task__checkbox' name='task__checkbox'/>
                <label htmlFor="task__checkbox">Comprar Pão 2</label>
            </li>
            <li className="task__item">
                <input type="checkbox" id='task__checkbox' name='task__checkbox'/>
                <label htmlFor="task__checkbox">Comprar Pão 3</label>
            </li>
        </ul>
    </div>
    </>
  )
}

export default Task