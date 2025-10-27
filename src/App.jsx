import './App.css'
import { Button } from '@mui/material'
import News from './components/News/News'
function App() {

  return (
    <div>
      <Button>Hello World</Button>
      <Button variant='outlined' color='secondary'>Secondary</Button>       
      <News></News>
    </div>
  )
}

export default App
