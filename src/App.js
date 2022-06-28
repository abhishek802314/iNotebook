import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Navbar from './components/Navbar';
import { Home } from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';



function App() {
  return (

    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />


        <Route path="about" element={<NoteState><About /></NoteState>} >

        </Route>


      </Routes>

    </Router>

  );
}

export default App;
