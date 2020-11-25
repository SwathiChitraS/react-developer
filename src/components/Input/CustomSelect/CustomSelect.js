import React from 'react';

import Style from './CustomSelect.module.css';

const customSelect = (props) => {
    let options = [];
    for(let option of props.Options){
        options.push(<option key={option.value} value={option.value} dataid={props.Id}>{option.label}</option>);
    }
    return (
        <div className={Style.CustomSelect}  key={props.Key} id={props.Id}
        onBlur={props.OnFocusOut} dataid={props.Id} onMouseDown={props.OnMouseDown}
        onMouseUp={props.OnMouseUp} onClick={props.OnClick}>
            <p dataid={props.Id}>{props.Label}</p>
            <select onChange={props.OnChange} value={props.Value} disabled={props.Disabled} dataid={props.Id}>
                {
                   options 
                }
            </select>
        </div>
    );
}

export default customSelect;