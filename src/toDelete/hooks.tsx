import { useEffect, useState } from "react";


useState(Math.round(Math.random()*10)) // it will be executed everytime. If data will be loaded from local storages then it will be load everytime. When component is rendered.

useState(()=>Math.round(Math.random()*10))  // it will not be executed everytime.


function useIncrement(initialValue: number = 0): [number, () => void] {
    const [value, setValue] = useState(initialValue)
    const increment = () => setValue(value + 1)
    return [value, increment]
}


function IncrementButton() {
    const [value, increment] = useIncrement(1)
    return <button onClick={increment}>Increase: {value}</button>
}



interface ReturnValue {
    value: boolean
    setTrue: () => void
    setFalse: () => void
    toggle: () => void
}
export function useToggle(): ReturnValue {
    const [value, setValue] = useState(false)
    const setTrue = () => setValue(true)
    const setFalse = () => setValue(false)
    const toggle = () => setValue(prev => !prev)
    return {
        value,
        setTrue,
        setFalse,
        toggle
    }
}

export default function App() {
    const { value, setTrue, setFalse, toggle } = useToggle()
  
    return (
      <div>
        <div>Wert: {value ? 'true' : 'false'}</div>
        <button onClick={setTrue}>Set to true</button>
        <button onClick={setFalse}>Set to false</button>
        <button onClick={toggle}>Toggle</button>
      </div>
    )
  }
    