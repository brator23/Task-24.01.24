import axios from 'axios';
import React, { createContext, useReducer } from 'react'
import { API } from '../helpers/const';
export const todoContext = createContext();



const TodoContextProvider = ({children}) => {
    const INIT_STATE = {
        users: [],
        user: {},
    }

    const reducer = (state = INIT_STATE, action) => {
        switch(action.type){
            case "PHOTOS":
            return{...state, users: action.payload};
            case "ALBUMS":
            return{...state, user: action.payload}
        }
    }
    const [state, dispatch] = useReducer(reducer, INIT_STATE);
    
    const addTodoId = async () => {
        const {data} = await axios(`${API}/users`)
        dispatch({type: "PHOTOS", payload: data})
        // console.log(data);
    }
    const getOneTodo = async (id) => {
        const {data} = await axios(`${API}/posts?userId=${id}`)
        dispatch({type: "ALBUMS", payload: data})
        console.log(data);
    }
    
    const virus = {
        users: state.users,
        user: state.user,
        addTodoId,
        getOneTodo,
        
    }
  return (
    <todoContext.Provider value={virus}>
      {children}
    </todoContext.Provider>
  )
}

export default TodoContextProvider
