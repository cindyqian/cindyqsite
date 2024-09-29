
import React from 'react'; //import React library


export function ColorfulLink(props) {
    return (
        <a href={props.link} target="_blank" className="font-medium text-yellow-500 hover:text-yellow-600">{props.text}</a>
    );
}