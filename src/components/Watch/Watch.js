import React, { useEffect, useState } from 'react';
import Dial from '../Dial/Dial';
import Display from '../Display/Display';

const Watch = () => {
    const [steps, setSteps] = useState(0)
    const increaseCount = () => {
        const newStepsCount = steps + 2;
        setSteps(newStepsCount)
    }

    useEffect(() => {
        console.log(steps)
    }, [steps])

    return (
        <div style={{ border: '2px solid red', margin: '10px' }}>
            <h1>This is Smart Watch.</h1>
            <h2>My steps...: {steps}</h2>
            <button onClick={increaseCount}>Take Steps</button>
            <Display name="garmin" steps={steps}></Display>
            <Dial steps={steps}></Dial>
        </div>
    );
};

export default Watch;