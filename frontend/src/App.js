import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar"
import DetailsForm from './pages/DetailsForm';
import AllRoutes from './router/AllRoutes';
function App() {
  return (
    <>
    <NavBar/>
   <AllRoutes/>
    </>
  );
}

export default App;
