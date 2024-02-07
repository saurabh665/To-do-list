import { useState } from "react";

const initialState = {
    list: []
  };
  
  const TodoReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_TODO":
        const { id, data } = action.payload;
        return {
          ...state,
          list: [
            ...state.list,
            {
              id: id,
              data: data
            }
          ]
        };
  
  
      default:
        return state;
    }
  };
  
  export default TodoReducer;
  
