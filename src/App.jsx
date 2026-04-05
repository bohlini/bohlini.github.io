import { Navbar } from "./Components/Navbar";
import { About } from "./Components/About";
import { Work } from "./Components/Work";
import { Illustration } from "./Components/Illustration";
import { Connect } from "./Components/Connect";
import { useScrollReveal } from "./hooks/useScrollReveal";

function App() {
  useScrollReveal();

  return (
    <>
      <Navbar />
      <About />
      <Work />
      <Illustration />
      <Connect />
    </>
  );
}

export default App;
