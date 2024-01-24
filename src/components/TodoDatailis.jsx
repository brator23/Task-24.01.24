import React, { useContext, useEffect } from 'react'
import { todoContext } from '../context/TodoContextProvider'
import { useParams } from 'react-router-dom';

const TodoDatailis = () => {
    const {user, getOneTodo} = useContext(todoContext);
    const {id} = useParams();
    useEffect(() => {
        getOneTodo(id);
    }, [])
    
  return (
    <div>
      {Array.isArray(user) &&
        user.map((elem) => <h3 key={elem.id}>{elem.title}</h3>)}
    </div>
  )
}

export default TodoDatailis
