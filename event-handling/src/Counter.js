import { useState } from "react";



//  Hooks special function to update value
//  useState function in React 
//  (example of a Hook that tracks variable value)

export default function Counter(props){
    const [value, setValue] = useState(props.value);

    function addValue(){
        return setValue(value + 1);
    }

    function subValue(){
        if(value > 0 ){
            return setValue(value - 1);
        }else{
            return setValue(0);
        }
    }

    return (
        <>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous"></link>
            <h1>Counter: {value}</h1>
            <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-primary" onClick={addValue}>Add</button>
                <button type="button" class="btn btn-primary" onClick={subValue}>Subtract</button>
            </div>
        </>
    );
}