import Pagination from "../components/Pagination/Pagination";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LaunchBody from "../components/LaunchBody/LaunchBody";
const Home = () => {
  return (
    <div>
      <Header />
      <LaunchBody />
      <Pagination />
      <Footer />
    </div>
  );
};

export default Home;
