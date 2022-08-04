import BurgerContent from "./components/BurgerContent";
import DownloadContent from "./components/DownloadContent";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";
import ItemList from "./components/ItemList";
import MenuList from "./components/MenuList";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemList/>
      <BurgerContent/>
      <MenuList/>
      <Feedback/>
      <DownloadContent/>
      <Footer/>
    </div>
  );
}

export default App;
 