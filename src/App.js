import './App.css';
import Banner from './components/Banner.jsx';
import NavBar from './components/NavBar';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Credits from './components/Credits';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Credits />
    </div>
  );
}

export default App;
