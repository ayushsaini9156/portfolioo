import { useContext } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productlist/ProductList";
import Toggle from "./components/toggle/Toggle";
import Myskills from "./components/myskills/Myskills";
import { ThemeContext } from "./context";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <Toggle />
      <Intro />
      <About />
      <Myskills />
      <ProductList />
      <Contact />
      <ToastContainer />
    </div>
  );
};

export default App;