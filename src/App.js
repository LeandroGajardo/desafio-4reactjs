import './App.css';
import Footer from './components/Footer/Footer';
import { Main } from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';
import ItemCount from './components/ItemListContainer/itemCount/itemCount';

function App() {
  return (
    <div>
      <Navbar/>
      <Main/>
      <ItemCount/>
      <Footer/>
      


    </div>
  );
}

export default App;
