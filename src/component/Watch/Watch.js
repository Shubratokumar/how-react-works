import React, {useState} from 'react';
import Display from './../Display/Display';

const Watch = () => {
    const [steps, setSteps] = useState(0);
    const increaseSteps = () =>{
        const newStepsCount = steps + 1;
        setSteps(newStepsCount);
    }
    return (
        <div style={{border : '3px solid green', margin : '10px', padding : '20px'}}>
            <h2>This is my Smart watch</h2>
            <h2>Steps taken : {steps}</h2>
            <button onClick={increaseSteps}>Increase Step</button>
            <Display name ="Apple" steps = {steps}></Display>
        </div>
    );
};

export default Watch;