import logo from './logo.svg';
import './App.css';
import HomeComponent from './Home';

function App() {
  const name = "John Vessly Alti";
  const student = {
    name:'John',
    rollNo:32,
    age:21
  }
  return (
    <div className="App">
      <HomeComponent />
      <div className='one'>{name}</div>
      <h2 style={{backgroundColor:'red',textAlign:'center'}}>Here it is the h2 element</h2>
      <p>{student.name}</p>
      <p>{student.rollNo}</p>
      <p>{student.age}</p>
    </div>
  );
}

export default App;
