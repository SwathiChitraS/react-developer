import React from 'react';

import Style from './CustomLink.module.css';
import NavigationItem from '../../Navigation/NavigationItems/NavigationItem/NavigationItem';

const customLink = (props) => {
    return (
        <div className={[Style.CustomLink, props.Display ? "" : Style.Hide].join(" ")} style={props.CustomStyle}
        key={props.Key} id={props.Id}
        onBlur={props.OnFocusOut} dataid={props.Id} onMouseDown={props.OnMouseDown}
        onMouseUp={props.OnMouseUp} onClick={props.OnClick}>
            {/* <button onClick={props.OnClick}>{props.children}</button> */}
            <NavigationItem linkUrl={props.Url} Params={props.Params} State={props.States}>{props.children}</NavigationItem>
        </div>
    );
}
// {props.CustomStyle}
export default customLink;