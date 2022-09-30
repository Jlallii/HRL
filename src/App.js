import { useState } from 'react';
import './App.css';

function App() {
  const [age,setAge] = useState('')
  const [hrl,setHRL] = useState('')

  function calculate(e) {
    e.preventDefault()
    const Upper = (220-age) * 0.85
    setHRL(Upper)
    const Lower = (220-age) * 0.65
    setHRL(Lower)

  }

  return (
    <div id="content">
      <h3>Heart rate limits calculator</h3>
      <form onSubmit={calculate}>
        <div>
          <label>Age</label>
          <input value={age} onChange={e => setAge(e.target.value)}/>
        </div>
        <div>
          <label>Heart rate limits</label>
          <output>{hrl}</output>
        </div>
        <button>Calculate</button>
      </form>
    </div>
  );
}

export default App;
