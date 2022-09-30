import { useState } from 'react';
import './App.css';

function App() {
  const [age,setAge] = useState('')
  const [lower,setLower] = useState(0)
  const [upper,setUpper] = useState(0)

  function calculate(e) {
    e.preventDefault()
    const Upper = (220-age) * 0.85
    setLower(Upper)
    const Lower = (220-age) * 0.65
    setUpper(Lower)

  }

  return (
    <div id="content">
      <h3>Heart rate limits calculator</h3>
      <form onSubmit={calculate}>
        <div>
          <label>Age</label>
        </div>
          <div>
            <input value={age} onChange={e => setAge(e.target.value)}/>
          </div>
        <div>
          <label>Heart rate limits</label>
        </div>
          <div>
            <output>{upper}-{lower}</output>
          </div>

        <button>Calculate</button>
      </form>
    </div>
  );
}

export default App;
