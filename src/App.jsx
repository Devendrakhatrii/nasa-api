import { useState } from "react";
import Footer from "./components/Footer";
import Main from "./components/Main";
import SideBar from "./components/SideBar";

function App() {
  const [description, setDescription] = useState(false);
  const handleToggle = () => {
    setDescription(!description);
  };
  return (
    <>
      <Main />
      {description && <SideBar handleToggle={handleToggle} />}
      <Footer handleToggle={handleToggle} />
    </>
  );
}

export default App;
