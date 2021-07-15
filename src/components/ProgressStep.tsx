import React from 'react';
interface IProps {
    level: number,
    label: string,
    current: number,
}

const Step = (props: IProps) => {
    return (
        <li className="progress-container">
            <span className="progress-level">{props.level}</span>
            <span className="progress-text">{props.label}</span>
        </li>
    );
}

export default Step;