// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { Home } from './components/Home';
// import { About } from './components/About';
import { Nav } from './components/Nav';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Page1 } from './Page1';
import { Page2 } from './Page2';

// function App() {
//   return (
//     <div className="App w-full h-screen">
//       <BrowserRouter>
//         <Nav />
//         <Routes>
//           <Route path="/" element={<Home />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;

const App = () => {
  return (
    <Router>
      <Nav />
      {/* <About /> */}
      <Routes>
        <Route exact path="/" element = {<Page1 />} />
        <Route  exact path="/Order" element={<Page2 />} />
      </Routes>
      {/* <Home /> */}
      {/* <About /> */}
      <div className='w-full h-screen'></div>
    </Router>
  )
}

export default App;
