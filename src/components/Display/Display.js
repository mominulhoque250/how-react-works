import React from 'react';

const Display = (props) => {
    return (
        <div style={{ border: "2px solid green", margin: "10px" }}>
            <h5>This is display:{props.name}</h5>
            <p>So far Today: {props.steps}</p>
        </div>
    );
};

export default Display;