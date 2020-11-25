import React from 'react';

import Style from './CustomTextArea.module.css';

const customTextArea = (props) => {
    return (
        <div className ={Style.CustomTextarea}  key={props.Key} id={props.Id}
        onBlur={props.OnFocusOut} dataid={props.Id} onMouseDown={props.OnMouseDown}
        onMouseUp={props.OnMouseUp} onClick={props.OnClick} tabIndex="0">
            <p dataid={props.Id}>{props.Label}</p>
            <textarea onChange={props.OnChange} value={props.Value} disabled={props.Disabled} dataid={props.Id}></textarea>
        </div>
    );
}

export default customTextArea;