import "./App.css";
import "./assets/css/shapes.css"
import Navbar from './components/Navbar/index'
import Home from "./pages/Home";
import SocialMedia from "./components/SocialMedia/SocialMedia";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SocialMedia />
      <Home/>
      
    </div>
  );
}

export default App;
