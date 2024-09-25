import './App.css';
import Hero from './components/Hero';
import Amplify from './components/Amplify';
import Footer from './components/Footer';
import RoadMap from './components/Roadmap';

function App() {
  return (
    <div className=' max-w-[1920px] overflow-hidden mx-auto'>
      <Hero />
      <Amplify />
      <RoadMap />
      <Footer />
    </div>
  );
}

export default App;
