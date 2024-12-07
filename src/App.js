import logo from './logo.svg';
import './App.css';
import HomeComponent from './Home';

function App() {
  const name = "John Vessly Alti";
  return (
    <div className="App">
      <HomeComponent />
      <div className='one'>{name}</div>
      <h2 style={{backgroundColor:'red',textAlign:'center'}}>Here it is the h2 element</h2>
    </div>
  );
}

export default App;
