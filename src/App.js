import { Nav } from './components/Nav';
import { Home } from './components/Home';
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
    <div className='w-full h-screen'></div>
    </>
  )
}

export default App;
