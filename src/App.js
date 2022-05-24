import "./App.css";
import Header from "./components/header";
import NavBar from "./components/navigation-bar";
import Banner from "./components/carousel";
import OwnerInfo from "./components/owner-info";
import Services from "./components/services";
import Prices from "./components/pricing";
import Footer from "./components/footer";
import Quotation from "./components/quotation";
import MobileNav from "./components/mobile-nav";

function App() {
  return (
    <div className="App">
      <MobileNav />

      <NavBar />
      <Banner />
      <OwnerInfo />
      <Services />
      <Prices />
      <Quotation />
      <Footer />
    </div>
  );
}

export default App;
