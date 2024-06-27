import Students from './Students';
import './App.css';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <Students 
        name="Martin"
        age={18}
        student={true}
        picture={logo}
      />
    </div>
  );
}

export default App;
