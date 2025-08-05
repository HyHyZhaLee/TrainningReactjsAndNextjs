import {useState} from "react";

function HookCounter(){
    const [count, setCount] = useState(1);
    return(
        <div>
            <button onClick ={() => setCount(count == 100 ? count + 1 : 100)}>
                Count: {count}
            </button>
        </div>
    );
}

export default HookCounter;