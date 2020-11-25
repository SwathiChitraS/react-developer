import React from 'react';

import Style from './CustomTimeInput.module.css';

const customTimeInput = (props) => {
    return (
        <div className ={Style.CustomTimeInput}  key={props.Key} id={props.Id}
            onBlur={props.OnFocusOut} dataid={props.Id} onMouseDown={props.OnMouseDown}
            onMouseUp={props.OnMouseUp} onClick={props.OnClick}>
            <p dataid={props.Id}>{props.Label}</p>
            <input type="time" onChange={props.OnChange} value={props.Value} dataid={props.Id}></input>
        </div>
    );
}

export default customTimeInput;