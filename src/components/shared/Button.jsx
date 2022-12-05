import React from "react";
import {propTypes} from 'prop-types'



const Button = ({children , type ,isDisabled , version})=>{
    return(
        <>
        <button type={type} disabled={isDisabled} className ={`btn btn-${version}`}>
            {
                children
            }
        </button>
        </>
    )
}


Button.defaultProps={
    isDisabled : false,
    type : "button",
    version : "primary"

}


//this is to assign proptypes
// Button.propTypes ={
//     isDisabled : propTypes.bool,
//     type : propTypes.string
// }
export default Button;