import React from "react";
import styled from "styled-components";
import PriceCard from "./PriceCard";


const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 400px) {
    flex-direction: column;
  }
`;

const Price = () => {
  return (
    <Container>
     
      <PriceCard  price="   Taposh Misra   " type="ceo" lista="Sales Lead" listb="core experience "listc="BFSI and Technology domain( 20+ years)"/>
      
      
      <PriceCard price=" Manmay Prasad   " type="ceo" lista=" Ex- HRBP " listb=" Birlasoft technolgy "listc="India Ltd" />
     
     <PriceCard price="Amit Chaterjee" type="ceo" lista="Ex CEO- Acuma - EVP Sales - Marketing" listb="Ex Business Head – Syntel ( Europe) "listc="EX Vice President – Tech Mahindra" />
      <PriceCard price="Sachin Khandewal"type="ceo" lista="Ex MD, ICICI HFC" listb="Ex MD - CEO "listc="Poonawalla FinCorp" />
      < PriceCard price="   Rohit  Munjal  " type="ceo"  lista="CHRO Spinklr" listb="Ex Group CHRO - OLA "listc="HR Leader -GE"/>
      
    </Container>
  );
};

export default Price;
