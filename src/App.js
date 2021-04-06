import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Offers from "./components/Offers";
import MainPage from "./components/MainPage";

function App() {
  return (
    <div className="App">
      <Header />
      <MainPage />
      <Offers />
      <Footer />
    </div>
  );
}

export default App;
