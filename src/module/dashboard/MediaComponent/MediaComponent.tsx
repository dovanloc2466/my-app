import axios from 'axios';
import * as React from 'react';
import { NewModel } from '../../../modal';

interface MediaComponentProps extends NewModel {
}

export const MediaComponent: React.FunctionComponent<MediaComponentProps> = (props) => {

    return (
        <li className="media">
            <img src={props.image} className="mr-3" alt="..." />
            <div className="media-body">
                <h5 className="mt-0 mb-1">{props.title}</h5>
                {props.content}
            </div>
        </li>
    );
};

