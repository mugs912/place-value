import './App.css'
import GenerateNumber from "./Components/GenerateNumber/GenerateNumber"

export default function App() {

  return (
    <div className="App">
        <GenerateNumber/>
        <div className='btn-div'>
          <button className='btn' onClick={() => {window.location.reload(false)} }>Next Question</button>
        </div>
    </div>
  );

}
