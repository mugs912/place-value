import './App.css';
import BoxList from './Components/BoxList/BoxList';

function App() {

  return (
    <div className="App">
        <h1>One Thousand Three Hundred Twenty Four</h1>
        <BoxList list={[1,3,2,4]}/>
    </div>
  );

}

export default App;
