import React from "react";
import styled from "styled-components";
import App from "../img/app.png";
import AnimatedShapes from "./AnimatedShapes";

const Container = styled.div`
  display: flex;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
    padding: 30px 20px;
  }
`;

const Left = styled.div`
  width: 50%;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

const Image = styled.img`
  width: 90%;
  height: 90%
  
`;

const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Title = styled.span`
  font-size: 70px;
  @media only screen and (max-width: 480px) {
    font-size: 50px;
  }
`;

const SubTitle = styled.span`
  font-size: 24px;
  font-style: italic;
  color: #333;
  margin-top: 30px;
`;

const Desc = styled.p`
  font-size: 20px;
  color: #777;
  margin-top: 30px;
`;


const Feature = () => {
  return (
    <Container>
      <Left>
        <Image src={App} />
      </Left>
      <Right>
        <Title>
          <b>About</b> Us
          
        </Title>
        <SubTitle>Digital Reality Need for Hyper-Personalization</SubTitle>
        <Desc>
        We are an HR Technology startup, focused on improving employee experience. Using AMY, our artificial intelligence-enabled Virtual assistant helps organizations manage employee engagement, personality assessment, predict attrition, and measure company culture on a real-time basis. In automation space, 
        AMY supports organizations in AUTOMATION of HR policies, processes thereby improving overall employee experience
        </Desc>
        <Desc>
        We are an expert team dedicated to leveraging HR technology for organizations in the area of manpower productivity enhancement through manpower engagement, organizational development initiatives, addressing major gaps in the organization by providing the right human resource strategy,
         and facilitating the implementation of the same through effective tools and techniques.
        </Desc>
        <br/>
        
      </Right>
      <AnimatedShapes/>
    </Container>
  );
};

export default Feature;
