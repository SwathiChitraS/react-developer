import React from 'react';

import Style from './CustomPassword.module.css';

const customPassword = (props) => {
    return (
        <div className ={Style.CustomPassword}  key={props.Key} id={props.Id}
        onBlur={props.OnFocusOut} dataid={props.Id} onMouseDown={props.OnMouseDown}
        onMouseUp={props.OnMouseUp} onClick={props.OnClick}>
            <p dataid={props.Id}>{props.Label}</p>
            <input type="password" onChange={props.OnChange} value={props.Value} dataid={props.Id}></input>
        </div>
    );
}

export default customPassword;