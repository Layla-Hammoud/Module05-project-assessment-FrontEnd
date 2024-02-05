import './App.css';
import AppRoutes from './routes/routes'
import Navbar from './Components/Navbar/Navbar';
function App() {
  return (
    <div className="App">
       <Navbar/>
      <AppRoutes/>
    </div>
  );
}

export default App;
