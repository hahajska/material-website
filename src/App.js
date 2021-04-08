import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Offers from "./components/Offers";
import MainPage from "./components/MainPage";
import Obrazy from "./components/Obrazy";

function App() {
  return (
    <div className="App">
      <Header />
      <MainPage />
      <Offers />
      <Obrazy />
      <Footer />
    </div>
  );
}

export default App;
