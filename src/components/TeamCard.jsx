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

const TeamContainer = styled.div`

  display: flex;
  align-items: center;
`;

const Team = styled.span`
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
  margin: 5px 0;
  @media only screen and (max-width: 60px) {
    
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
    
  }
`;


const TeamCard = ({ team, type , list,listb,listc,listd}) => {
  return (
    <Container>
      <TeamContainer>
        
        <Team>{team}</Team>
        
      </TeamContainer>
      <Type>{type} </Type>
      <List>
        <ListItem>{list}</ListItem>
        <ListItem>{listb}</ListItem>
        <ListItem>{listc}</ListItem>
        <ListItem>{listd}</ListItem>
        
        
      </List>
      <Button>Contact</Button>
    </Container>
  );
};

export default TeamCard;
