
import React from 'react'; //import React library


export function ColorfulLink(props) {
    return (
        <a href={props.link} target="_blank" class="font-medium text-yellow-500 hover:text-yellow-600">{props.text}</a>
    );
}