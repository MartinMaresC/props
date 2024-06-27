import Students from './Students';
import './App.css';
import picture from './picture.png';

function App() {
  return (
    <div className="App">
      <Students 
        name="Martin"
        age={18}
        student={true}
        picture={picture}
      />

      <Students 
        
      />
    </div>
  );
}



export default App;
