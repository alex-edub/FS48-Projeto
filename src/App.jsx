import "./App.css";
import Body from "./components/body/Body";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import MainBanner from "./components/main-banner/MainBanner";
import Menu from "./components/menu/Menu";

function App() {
  return (
    <>
      <main>
        <Header />
        <Menu />
        <MainBanner />
        <Body />
        <Footer />
      </main>
    </>
  );
}

export default App;
