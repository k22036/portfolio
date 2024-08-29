import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/home';
import PersonalDev from './pages/personalDev';
import SmallProgram from './pages/smallProgram';
import TeamDev from './pages/teamDev';
import TestProgram from './pages/testProgram';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personal-dev" element={<PersonalDev />} />
        <Route path="/team-dev" element={<TeamDev />} />
        <Route path="/small-program" element={<SmallProgram />} />
        <Route path="/test-program" element={<TestProgram />} />
      </Routes>
    </>
  );
}

export default App;
