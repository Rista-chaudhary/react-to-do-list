import React from "react";
import "./style.css";

function ToDoApp(){
    const inputRef = React.useRef();
    const [value, setValue]= React.useState([]);
    
    function displayText(){
        // debugger;
        const answer = inputRef.current.value
        // const result = answer.value;
        // setValue([...value, answer]);
        // console.log(inputRef.current.value);
        setValue([...value, {name:answer, isCompleted:true}])
    }
    function handleRemove(index){
        const newVal = [...value];
        newVal.splice(index, 1);
       setValue (newVal);

    }
    function lineThrough(){
    }
    return(
        <div className="whole-body">
            <h1>React with TS Demo App</h1>
            <div className="first-parent-body">
            <div className="parent-body">
                <div className="box-holding-inputbox-and-button">
                    <input ref={inputRef} className="input-box" />
                    <button className="button" onClick={displayText}>Add</button>
                </div>
               { value.length>0?value.map(function(item, index) {
                   return(<div className="ans-div-parent">
                   <div className="answer-div" onClick={lineThrough}>
                    {item.name}</div>
                    <div className="cross" onClick={()=>handleRemove(index)}>X</div>
                   </div>)
               }):null}
               
            </div>
            
            </div>
            
            
        </div>
    )
}
export default ToDoApp;

