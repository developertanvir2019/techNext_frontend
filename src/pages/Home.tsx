import { useContext } from "react";
import { DataContext } from "../Context/valueProvider";
import Pagination from "../components/Pagination/Pagination";
import Footer from "../components/Footer";
import Header from "../components/Header";
const Home = () => {
  const { category, setCategory } = useContext(DataContext) as {
    category: string;
    setCategory: (category: string) => void;
  };
  console.log(category, setCategory);
  return (
    <div>
      <Header />
      <Pagination />
      <Footer />
    </div>
  );
};

export default Home;
