import './App.scss';
import Home from './Home';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Header from './Header';
function App() {
  return (
  <BrowserRouter>
  <Header/>
 <Routes>
  <Route path='/' element={<Home />} />
 </Routes>
 </BrowserRouter>
  )

}

export default App;
