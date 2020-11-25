import React from 'react';

import Style from './CustomButton.module.css';
// import NavigationItem from '../../Navigation/NavigationItems/NavigationItem/NavigationItem';

const customButton = (props) => {
    return (
        <div key={props.Key} id={props.Id} className={Style.CustomButton} style={props.CustomStyle}
            onBlur={props.OnFocusOut} dataid={props.Id} onMouseDown={props.OnMouseDown}
            onMouseUp={props.OnMouseUp} onClick={props.OnClick} tabIndex="0">
            <button onClick={props.OnClick} disabled={props.Disabled} dataid={props.Id}>{props.children}</button>
            {/* <NavigationItem linkUrl="/search" Params={"date=" + this.state.today} State={this.state.today}>{props.children}</NavigationItem> */}
        </div>
    );
}
// {props.CustomStyle}
export default customButton;