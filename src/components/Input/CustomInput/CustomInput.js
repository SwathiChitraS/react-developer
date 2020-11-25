import React from 'react';

import Style from './CustomInput.module.css';

const customInput = (props) => {
    return (
        <div tabIndex="0" key={props.Key} id={props.Id} className ={Style.CustomInput} onClick={props.OnClick} 
            onBlur={props.OnFocusOut} dataid={props.Id} onMouseDown={props.OnMouseDown}
            onMouseUp={props.OnMouseUp}>
            <p dataid={props.Id}>{props.Label}</p>
            <input type="text" onChange={props.OnChange} value={props.Value} disabled={props.Disabled} dataid={props.Id}></input>
        </div>
    );
}

export default customInput;