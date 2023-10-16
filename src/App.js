import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function computeInitialCounter() {
  console.log('some calculations....');
  return Math.trunc(Math.random() * 20);
}
function App() {
  let [counter, setCounter] = useState(() => {
    return computeInitialCounter();
  });

  const [state, setState] = useState({
    title: 'Счетчик',
    date: Date.now(),
  });
  function increment() {
    // setCounter(counter + 1);
    setCounter(prevCounter => {
      return prevCounter + 1;
    });

    // setCounter(prev => prev + 1);
  }
  function decrement() {
    setCounter(counter - 1);
  }

  return (
    <div className='App'>
      <h1>Counter: {counter}</h1>
      <button
        onClick={increment}
        className='btn btn-success'
      >
        Add
      </button>
      <button
        onClick={decrement}
        className='btn btn-danger'
      >
        Remove
      </button>
      <button
        onClick={() => setState({ title: 'new name' })}
        className='btn btn-default'
      >
        Edit
      </button>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}

export default App;
