import  { useState} from "react";
const Button = () => {
    const [count,setCount] = useState(0)
    return <button style={{background:'red'}}
        onClick={() => setCount(count +1)}
    > BTN APP 1: {count} </button>
}
export default Button