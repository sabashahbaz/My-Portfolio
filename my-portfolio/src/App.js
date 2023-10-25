import logo from './logo.svg';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import {NavBar} from './components/NavBar';
import {Banner} from './components/Banner';
import {Skills} from './components/Skills';
import {Projects} from './components/Projects';
import {AboutMe} from './components/AboutMe'
import {Resume} from './components/Resume'
import {Footer} from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Banner/>}/>
            <Route path="projects" element={<Projects />}/>
            <Route path="about-me" element={<AboutMe />}/>
            <Route path="resume" element={<Resume />}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
