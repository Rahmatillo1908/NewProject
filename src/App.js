import './App.css';
import Brands from './Component/Brands';
import Callcenter from './Component/Callcenter';
import Footer from './Component/Footer';
import Navbar from './Component/Navbar';
import RecentProject from './Component/RecentProject';
import Teams from './Component/Teams';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Brands/>
      <RecentProject/>
      <Teams/>
      <Callcenter/>
      <Footer/>
    </div>
  );
}

export default App;
