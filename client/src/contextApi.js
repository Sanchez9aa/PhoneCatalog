import { createContext, useReducer } from "react"

export const DarkContext = createContext()

const initialState = {darkmode : false}

const darkReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case "TOGGLE":
            return {darkmode: !state.darkmode}
        default:
            return state
    }
}

export const DarkProvider = (props) => {
    const [state, dispatch] = useReducer(darkReducer, initialState)
    return (
        <DarkContext.Provider value={{state, dispatch}}>
            {props.children}
        </DarkContext.Provider> 
    )
}