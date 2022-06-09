import React from "react";
import styled from "styled-components";


const Container = styled.div`
hieght:100vh;
width:100vh;
 margin-right:10px;
 margin-left:10px;
  padding: 20px;
  -webkit-box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
  box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
  border radius:20px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 480px) {
   
    margin-bottom: 10px;
    padding: 10px;
  }
`;

const PriceContainer = styled.div`

  display: flex;
  align-items: center;
`;

const Price = styled.span`
  font-weight: bold;
  font-size: 20px;
  text-align: center;
  @media only screen and (max-width: 480px) {
    font-size: 10px;
  }
`;

const Type = styled.button`
  padding: 10px;
  margin: 10px 0;
  border: 1.5px solid crimson;
  color: crimson;
  background-color: white;
  border-radius: 20px;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

const List = styled.ul`
  list-style: none;
  align-items: center;
`;

const ListItem = styled.li`
  margin: 30px 0;
  @media only screen and (max-width: 60px) {
    margin: 10px;
    font-size: 1;
    text-align: center;
  }
`;

const Button = styled.button`
  border: none;
  background-color: darkblue;
  color: white;
  font-size: 16px;
  font-weight: bold;
  padding: 15px;
  border-radius: 10px;
  cursor: pointer;
  @media only screen and (max-width: 480px) {
    font-size: 12px;
    padding: 5px;
    
  }
`;


const PriceCard = ({ price, type , lista, listb , listc, listd }) => {
  return (
    <Container>
      <PriceContainer>
        
        <Price>{price}</Price>
        
      </PriceContainer>
      <Type>{type} </Type>
      <List>
        <ListItem>{lista}</ListItem>
        <ListItem>{listb}</ListItem>
        <ListItem>{listc}</ListItem>
        <ListItem>{listd}</ListItem>
        
      </List>
      <Button>Contact</Button>
    </Container>
  );
};

export default PriceCard;
