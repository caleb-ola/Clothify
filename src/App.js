import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Route, Routes } from 'react-router-dom';
// import Hatspage from './pages/hatspage/hatspage.component';
import Shop from './pages/shop/shop.component';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        {/* <Route path="/hats" element={<Hatspage/>}/> */}
        <Route path="/shop" element={<Shop/>} />
      </Routes>
    </div>
  );
}

export default App;
