import './App.css';
import { Button } from 'react-bootstrap';
import Header from './components/Header/Header';
import TopHeadline from './components/TopHeadline/TopHeadline';

function App() {

  return (
    <div>
      <h2>React Bootstrap</h2>
      <Button variant='primary'>Primary</Button>
      <Header></Header>
      <TopHeadline></TopHeadline>
    </div>
  )
}

export default App
