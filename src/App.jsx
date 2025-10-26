import './App.css';
import { Button } from 'react-bootstrap';
import News from './components/News/News';

function App() {

  return (
    <div>
      <h2>React Bootstrap</h2>
      <Button variant='primary'>Primary</Button>
      <News></News>
    </div>
  )
}

export default App
