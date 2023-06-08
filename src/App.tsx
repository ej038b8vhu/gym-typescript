import { useEffect, useState } from "react";
import Navbar from "@/scenes/navbar";
import Home from "@/scenes/home";
import Benefits from "@/scenes/benefits";
import OurClasses from "@/scenes/ourClasses";
import ContactUs from "@/scenes/contactUs";
import Footer from "@/scenes/footer";
import { SelectedPage } from "@/shared/types";

function App() {
  //Option 1. => <boolean> indicate the type of state
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  //Option 2. => <Enum> (file path: /src/shared/types.ts)
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );

  //for navbar to have background color when scroll down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
      } else {
        setIsTopOfPage(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-gray-20">
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isTopOfPage={isTopOfPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer />
    </div>
  );
}

export default App;
