import { useContext } from "react";
import { DataContext } from "../../Context/valueProvider";
const Home = () => {
  const { category, setCategory } = useContext(DataContext) as {
    category: string;
    setCategory: (category: string) => void;
  };
  console.log(category, setCategory);
  return (
    <div>
      <h2>home</h2>
    </div>
  );
};

export default Home;
