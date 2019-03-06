import React from 'react';

export default function LinkSocial(props) {
    if (props.link !== ''){
        return (
            <li className="list-inline-item">
                <a href={props.link}><span className={props.socialclass} /></a>
            </li>
        )
    }
    return null;
}