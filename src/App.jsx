import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState("");
  function handleClick(newValue) {
    setCount(newValue);
  }
  function saveData(){
    setData(count)
    console.log("saved data" +{count})
  }
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-800 mx-auto">
      <div className="w-[20em] h-[20em] border-4 border-sky-300 rounded-full ">
        <div className="flex justify-center items-center bg-sky-100 w-40 h-8 mt-20 mx-auto ">
          {count}
        </div>
        <div className=" w-full h-10 rounded-full ">
          <p className="text-3xl text-sky-400 flex justify-center items-center mt-4">
            {data}
          </p>
        </div>
        <div className="flex justify-center items-center w-44 h-20 mx-auto ">
          <button
            onClick={() => handleClick(count + 1)}
            className="w-9 h-9 bg-sky-300 rounded-full text-2xl justify-center items-center flex p-4 m-4 cursor-pointer text-green-800 "
          >
            +
          </button>
          <button onClick={()=> handleClick(count - 1)} className="w-9 h-9 bg-sky-300 rounded-full text-2xl justify-center items-center flex p-4 m-4 cursor-pointer text-green-800 ">
            -
          </button>
        </div>
        <div className="flex justify-center items-center w-30 h-10 mx-auto">
          <button onClick={saveData} className="bg-sky-500 w-20 h-full rounded-full">save</button>
        </div>
      </div>
    </div>
  );
}

export default App;
