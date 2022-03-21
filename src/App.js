import './App.css';
import Header from "./components/Header";
import Card from "./components/Card"
import { data } from "./helper/Data"


function App() {
  return (
    <div>
      <Header/>
      <h1 className='header'>POPULAR TOUR PLACES</h1>
      <Card cards = {data}/>
    </div>
  )
}

export default App;
