// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

function countReducer(state, action) {
  const {type} = action;
  switch (type) {
    case 'increment': {
      const {step} = action;
      return {...state, count: state.count + step};
    }
    default:
      throw new Error('action not implemented')
  }
}

function Counter({initialCount = 0, step = 1}) {
  // 🐨 replace React.useState with React.useReducer.
  // 💰 React.useReducer(countReducer, initialCount)

  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount,
  })

  function setCount() {
    dispatch({type: 'increment', step: step})
  }

  return <button onClick={setCount}>{state.count}</button>
}

function App() {
  return <Counter />
}

export default App
