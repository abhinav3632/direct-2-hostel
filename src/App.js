import { Nav } from './components/Nav';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Page1 } from './Page1';
import { Page2 } from './Page2';
import { Page3 } from './Page3';
import { Page4 } from './Page4';

const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route exact path="/" element = {<Page1 />} />
        <Route  exact path="/Order" element={<Page2 />} />
        <Route  exact path="/Login" element={<Page3 />} />
        <Route exact path="/SignUp" element={<Page4 />} />
      </Routes>
      <div className='w-full h-screen'></div>
    </Router>
  )
}

export default App;
