import react, { useState } from "react";
import { increase, decrease, reset, resetAll, addByValue,subByValue } from "./counterSlice";
import { useAppDispatch, useAppSelector } from "./hooks";
import "../css/counter.css"
const Counter = () => {
    const value = useAppSelector((state) => state.counter.value)
    const click = useAppSelector((state) => state.counter.click)
    const dispatch = useAppDispatch();
    const [amount, setAmount] = useState(0);
    const [amount1, setAmount1] = useState(0);
    

    return (
        <div>
            

            <h1>Value:{value}
                click:{click}
            </h1>
            <button onClick={() => dispatch(decrease())}>-</button>
            <button onClick={() => dispatch(increase())}>+</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
            <button onClick={() => dispatch(resetAll())}>Reset All</button>
            <div>
                <input id="2" onChange={(e) => setAmount(Number((e.target as HTMLInputElement).value))}
                    value={amount} placeholder="Enter Number"
                />
                <button onClick={() => dispatch(addByValue(amount))}>Add</button></div>
            <div>
                <input id="1" onChange={(e) => setAmount1(Number((e.target as HTMLInputElement).value))}
                    value={amount1} placeholder="Enter Number 2"
                />
                <button onClick={() => dispatch(subByValue(amount1))}>Sub</button></div>

        </div>

    )
}
export default Counter;