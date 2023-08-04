import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stack from './components/Stack';
import Project from './components/Project';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div className="container py-12 px-4 lg:px-0 ">
      <Navbar />
      <Hero />
      <Stack />
      <Project />
      <Experience />
      <Contact />
    </div>
  )
}

export default App;
