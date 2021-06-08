import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Documents from './components/Documents';
import Members from './components/Members';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <HeroSection />
      <Documents />
      <Members />
    </div>
  );
}

export default App;
