import React, { useState, useCallback } from "react"

export function Counter() {
  const [counter, setCounter] = useState(0)

  const onIncrement = useCallback(() => {
    setCounter(prev => prev + 1)
  }, [])

  const onDecrement = useCallback(() => {
    setCounter(prev => prev - 1)
  }, [])

  return (
    <>
        <h2>Counter Component: {counter}</h2>
        <button onClick={onDecrement}>-</button>
        <button onClick={onIncrement}>+</button>
    </>
  )
}

export default Counter;

