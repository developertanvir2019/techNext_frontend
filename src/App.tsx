import "./App.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes";
import DataProvider from "./Context/valueProvider";

function App() {
  return (
    <>
      <DataProvider>
        <RouterProvider router={routes} />
      </DataProvider>
    </>
  );
}

export default App;
