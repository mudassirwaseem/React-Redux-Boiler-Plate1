


const INITIAL_STATE = {
    users: [
        {
            name: "mudassir",
            age: 23
        },
        {
            name  : "faheem",
            age :26
        }
        ,
        {
            name  : "behna",
            age :32
        }
    ]
}



export default (state = INITIAL_STATE, action) => {
console.log(action)
    switch (action.type){
        case  "SETDATA":
        return  ({
            ...state,
            users: [...state.users,action.payload]
        })
        default:
        return state
           
      }
}
