import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Header from './components/Header';
import Home from './components/Home'
import Intro from './components/Intro'
import Artists from './components/Artists'
import Mariachi from './components/Mariachi';
import Cumbias from './components/Cumbias';
import RockEsp from './components/RockEsp';
import RapTrap from './components/RapTrap';
import ClassicRock from './components/ClassicRock';
import Alternative from './components/Alternative';
import Banda from './components/Banda';
import Norteño from './components/Norteño';
import Reggae from './components/Reggae';
import Reggaeton from './components/Reggaeton';
import ClubMusic from './components/ClubMusic';
import Pop from './components/Pop';
import BanderaNews from './components/BanderaNews';
import SponsorContainer from './components/SponsorContainer';
import VideoBackground from './components/VideoBackground';


function App() {
  return (
    <div>
      <VideoBackground/>
      <Router>
        <div className='videoBgcontent'>
          <div className="container">
          <Header />
          
           <Routes>
       <Route path='/' element={<Dashboard />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/home' element={<Home />} />
        <Route path='/intro' element={<Intro />} />
        <Route path='/artists' element={<Artists />} />
        <Route path='/mariachi' element={<Mariachi />} />
        <Route path='/banda' element={<Banda />} />
        <Route path='/norteño' element={<Norteño />} />
        <Route path='/reggaeton' element={<Reggaeton />} />
        <Route path='/cumbias' element={<Cumbias />} />
        <Route path='/rockesp' element={<RockEsp />} />
        <Route path='/raptrap' element={<RapTrap/>}/>
        <Route path='/classicrock' element={<ClassicRock />} />
        <Route path='/pop' element={<Pop />} />
        <Route path='/alternative' element={<Alternative />} />
        <Route path='/reggae' element={<Reggae />} />
        <Route path='/clubmusic' element={<ClubMusic />} />
        <Route path='/banderanews' element={<BanderaNews />} />
          </Routes>
          
          </div>
          </div>
      </Router>
      
       <ToastContainer/>
   
    </div>
    
  );
}

export default App;