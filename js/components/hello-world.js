import React from 'react';

export default function Hello(props) {
    return (
        <div className="hello">
            <h1 className="greeting">{props.greeting}</h1>
        </div>
    );
}