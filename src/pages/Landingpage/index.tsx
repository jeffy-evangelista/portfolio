// import About from "components/Landingpage/About";
import Contact from "components/Landingpage/Contact";
import Hero from "components/Landingpage/Hero";
import Projects from "components/Landingpage/Projects";
import Skills from "components/Landingpage/Skills";

function index() {
  return (
    <>
      <Hero />
      {/* <About /> */}
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default index;
