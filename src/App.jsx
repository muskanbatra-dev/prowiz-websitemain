import styled, { css } from "styled-components";
import { useRef } from "react";
import Contact from "./components/Contact";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Price from "./components/Price";
import How from "./components/How";

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

const Shape = css`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

const IntoShape = styled.div`
  ${Shape}
  clip-path: polygon(67% 0, 100% 0%, 100% 100%, 55% 100%);
 
`;

const FeatureShape = styled.div`
  ${Shape}
  clip-path: polygon(0 0, 55% 0%, 33% 100%, 0 100%);
  
`;

const ServiceShape = styled.div`
  ${Shape}
  clip-path: polygon(0 0, 33% 0%, 33% 100%, 0 100%);
  
`;

const PriceShape = styled.div`
  ${Shape}
  clip-path: polygon(33% 0, 100% 0%, 100% 100%, 67% 100%);
  
`;

const App = () => {
  const service = useRef(null);
  const ourteam = useRef(null);
  const contact = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  const smallScreen = window.screen.width <= 480 ? true : false;
  return (
    <>
      <Container>
        <Navbar title="Section 1"
          
          dark={true}
          id="section1"/>
        <Intro />
        <IntoShape />
      </Container>
      <Container>
        <Feature onClick={() => scrollToSection(service)} />
        <FeatureShape />
      </Container>
      <Container>
        <How />
        {!smallScreen && <ServiceShape />}
      </Container>
      <Container>
        <Price onClick={() => scrollToSection(ourteam)}/>
        <PriceShape />
      </Container>
      <Container>
        <Contact onClick={() => scrollToSection(contact)}/>
        <Footer />
      </Container>
    </>
  );
};

export default App;
