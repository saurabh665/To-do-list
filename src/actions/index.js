
 export const addtodo=(data)=>{
    return{
     type:"ADD_TODO",
     payload:{ 
        id:new Date().getTime().toString(),
        data:data
     }
    }
}


export const deletetodo=()=>{
    return{
     type:"DELETE_TODO"
    }
}

export const removetodo=()=>{
    return{
     type:"REMOVE_TODO"
    }
}
