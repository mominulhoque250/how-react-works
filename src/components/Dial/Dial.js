import React from 'react';

const Dial = (props) => {
    return (
        <div style={{ border: '2px solid blue', magrin: '10px' }}>
            <h5>This is display:</h5>
            <p>So far Today:{props.steps} </p>
        </div>
    );
};

export default Dial;