

import './App.css';
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div>
       <NavBar />
       <ItemListContainer greeting={'Bienvenidos a mi web'} />
    </div>
  );
}


export default App;
