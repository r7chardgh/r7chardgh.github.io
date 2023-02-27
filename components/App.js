import React,{useState} from "react";

const App = () =>{
  const [count,setCount] = useState(1);
  function increaseCounterHandler() {
    setCount((x)=>x+1);
    setCount((x)=>x+2);

  }
  function increaseCounterAsyncHandler() {
    setTimeout(() => {
       setCount((x)=>x+1);
    setCount((x)=>x+2);
    }, 200);
   

  }
  return (
    <div className="container">
      <p>you clicked {count}</p>
      <button onClick={increaseCounterHandler}>
          Click me
        </button>
      <button onClick={increaseCounterAsyncHandler}>
          Click me minus
        </button>
    </div>
  );
}

export default App;
