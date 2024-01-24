import React, { useContext, useEffect} from 'react'
import { todoContext } from '../context/TodoContextProvider'

import Comments from './Comments';


const Photos = () => {
    const {users, addTodoId} = useContext(todoContext);
    
    useEffect(() => {
        addTodoId();
    }, []);
    console.log(users);
  return (
    <div>
      {users.map((elem) => (
        <Comments {...elem} key={elem.id} />
      ))}
    </div>
  )  
}

export default Photos
