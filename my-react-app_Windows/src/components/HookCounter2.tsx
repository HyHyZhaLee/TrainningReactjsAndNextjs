import {useState} from "react"; 

function HookCounter2(){
    const initialCount: number = 0;
    const [count, setCount] = useState(initialCount);

    return(
        <div>
            count: {count}
            <button onClick={() => setCount(initialCount)}> Reset! </button>
            <button onClick={() => setCount(name => name + 1)}> Increment! </button>
        </div>)
}

export default HookCounter2;