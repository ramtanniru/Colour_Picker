import './App.css';
import Wrapper from './Components/Wrapper';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App vh-100" style={{backgroundColor:"#C5B4D8"}}>
      <h1 className='text-center'>Color Picker</h1>
      <Wrapper className='mx-auto'>
      </Wrapper>
    </div>
  );
}

export default App;
