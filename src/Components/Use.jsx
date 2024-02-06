import {useState , React  } from "react";

const Use = () => {
    const [count , setcount] = useState(0)
    function dataupdate(){
        setcount(count + 1) 
    }
  return (
    <div>
        <h1>How many {count} clicked</h1>
        <button onClick={dataupdate} className=" px-5 py-2D  mb-0 fs_20 text-white bg-black rounded-5 border-0">click me</button>
    </div>
  )
}

export default Use