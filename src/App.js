import './App.css';
import DogDetails from './DogDetails';
import DogList from './DogList';
import Nav from './Nav';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

const dogNames = ["whiskey", "duke", "perry"]

function App() {
  return (
    <BrowserRouter>
      <Nav dogs = {dogNames}/>
      <Routes>
        <Route path="/dogs" />
        <Route element={<DogList />} path="/" />
        <Route element={<DogDetails />} path="/dogs/:name" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
