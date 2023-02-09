import { Nav } from './components/Nav';
import { Home } from './components/Home';
import { About } from './components/About';
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
        
//       </header>
//     </div>
//   );
// }

const App = () =>
{
  return (
    <>
    <Nav />
    <Home />
    <About />
    <div className='w-full h-screen'></div>
    </>
  )
}

export default App;
