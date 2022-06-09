import React from "react";
import styled from "styled-components";
import { useRef } from "react";


const Container = styled.div`
  height: 50px;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.h1`
  font-weight: bold;
  text-decoration: underline crimson;
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;

  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

const MenuItem = styled.li`
  margin-right: 30px;
  font-size: 20px;
  font-weight: bold;
  color: gray;
`;

const Button = styled.button`
  border: 2px solid white;
  padding: 10px 15px;
  background-color: darkblue;
  color: white;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
`;

const Navbar = () => {
  const service = useRef(null);
  const ourteam = useRef(null);
  const contact = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>Prowiz AI</Logo>
          <Menu>
            <MenuItem Click={() => scrollToSection(service)}>Home</MenuItem>
            <MenuItem>About us</MenuItem>
            <MenuItem>Services</MenuItem>
            <MenuItem>Team</MenuItem>
            <MenuItem>Contact us</MenuItem>
          </Menu>
        </Left>
        <Button>JOIN TODAY</Button>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
