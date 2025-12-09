// import React from 'react';
// import { useState } from 'react';

// //it is a component

// export const Demo=()=>{

// //logic in a component is written here (before return statement) 

// const name="TRISHA";
// const tasks=5;

// //using if else statement

// const taskslogic=()=>{
//      if(tasks===0){
//           return "no tasks pending";
//      }
//      else if(tasks===1){
//           return "1 task pending";
//      }
//      else{
//           return `${tasks} tasks are pending`;
//      }
// }
// //using arrow function and ternary operator
// const hidebutton =false

// const styles= {
//      backgroundColor : "blue",
// }

// let ts=0
// const dbl=()=>{
//      ts++;
//      setCount(count+1);
//      console.log(count);
     
// }

// const handleonChange=(event)=>{
//      setInput(event.target.value);
//      console.log(input);
// }

// const[count, setCount]= useState(0);
// const[input, setInput]= useState("");

// const taskslogic2=()=>tasks===0 ? "no tasks pending" : tasks===1 ? "1 task pending" : `${tasks} tasks are pending`;


//      return(
//           <div>
//                <h1>Task is {count}</h1>
//                <h1> I AM {name} </h1>
//                <h1>completed tasks : till now {tasks} are completed!!!</h1>
//                <h1>{taskslogic()}</h1>
//                <h1>{taskslogic2()}</h1>
//                <button onClick={dbl} disabled={hidebutton} value= "ADD TASK BUTTON">
//                     ADD TASK
//                </button>
//                <h1 style={styles}>STYLED COMPONENT</h1>
//                <button>CLICK ME</button>
//                <input type="text" onChange={handleonChange}
//           </div>
//      )
// }