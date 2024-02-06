import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Myheader from './Components/Myheader';
import Features from './Components/Features';
import Our from './Components/Our';
import Brands from './Components/Brands';
import Start from './Components/Start';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Myfooter from './Components/Myfooter';
import About from './Components/About';
import Hero from './Components/Hero';
import Use from './Components/Use';

function App() {
  return (
    <div className='bcg_section'>
      <Use/>
    {/* <About/>
    <Hero/> */}
      {/* <Myheader/> */}
      {/* <Features/>
      <Our/>
      <Brands/>
      <Start/>
      <Myfooter/> */}
    </div>
  );
}

export default App;
