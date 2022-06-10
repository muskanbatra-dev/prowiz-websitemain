import React from "react";
import styled from "styled-components";
import TeamCard from "./TeamCard";


const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 400px) {
    flex-direction: column;
  }
`;

const Team = () => {
  return (
    <Container>
     
      <TeamCard  price="   Taposh Misra   " type="ceo" lista="Sales Lead" listb="core experience "listc="BFSI and Technology domain( 20+ years)"/>
      
      
      <TeamCard price=" Manmay Prasad   " type="ceo" lista=" Ex- HRBP " listb=" Birlasoft technolgy "listc="India Ltd" />
     
     <TeamCard price="Amit Chaterjee" type="ceo" lista="Ex CEO- Acuma - EVP Sales - Marketing" listb="Ex Business Head – Syntel ( Europe) "listc="EX Vice President – Tech Mahindra" />
      <TeamCard price="Sachin Khandewal"type="ceo" lista="Ex MD, ICICI HFC" listb="Ex MD - CEO "listc="Poonawalla FinCorp" />
     
      
    </Container>
  );
};

export default Team;
