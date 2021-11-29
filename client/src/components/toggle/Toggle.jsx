import './toggle.css'
import {useContext} from 'react'
import { DarkContext } from '../../contextApi'
import {Moon} from 'react-feather'

const Toggle = () => {
    
    const dark = useContext(DarkContext)

    const handleClick = () => {
        dark.dispatch({type:"TOGGLE"})
    }
    
    return(
        <div className="tg" onClick={handleClick}>
            <Moon aria-hidden="true" size={20} color={!dark.state.darkmode ? "black" : "white"} />
            <span className={!dark.state.darkmode ? null : "darkColor"}>Dark Mode</span>
        </div>
    )
}

export default Toggle