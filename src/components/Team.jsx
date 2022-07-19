import React from "react";
import styled from "styled-components";
import TeamCard from "./TeamCard";


const Container = styled.div`
  height: 100%;
  width:100vh;
  @media only screen and (max-width: 400px) {
    flex-direction: column;
  }
`;

const Team = () => {
  return (
    <Container>
     
      <TeamCard  team="   Taposh Misra   " type="ceo" list="Established Prowiz Consulting(deals in Head Hunting via detailed research followed by the execution of strategic talent acquisition plans).Executes Top management Senior level hiring for BANKING Segment,vizCorporate Banking, Retail & Consumer Banking.Follows research-based approach to reach out to the right talent using various home-grown models of headhunting.Believes in experimenting with innovative recruitment models and has delivered solutions to every complex hiring and staffing challenge that has been faced by the client." listb="Sales Leadership & core experience in BFSI & Technology domain( 20+ years)s "/>
      
      
      <TeamCard team=" Manmay Prasad   " type="ceo" list="10+ years experience in employee engagement, performance management, employee relations"listb="Manmay comes with a legal background and knowledge of the HR Business partnering across IT & manufacturing domains."listc="Specialties: Employee Assimilation, Talent Management, employee engagement & Total Rewards."listd="Ex- HRBP- Birlasoft India Ltd"  />
     
     <TeamCard team="Amit Chaterjee" type="ceo" list="Experienced Chief Executive Officer with a demonstrated history of working in the information technology and services industry. Strong sales professional skilled in Enterprise Software,Customer Relationship Management (CRM).Specialties: Digital Transformation Consulting, Building Execution plans Cognitive Technologies, Engagement & Account Management." listb="Ex CEO- Acuma & EVP Sales & Marketing" listc="Ex Business Head – Syntel ( Europe)" listd="EX Vice President – Tech Mahindra"/>
      <TeamCard team="Sachin Khandewal"type="ceo" list="Ex MD ICICI HFC, set up the entire retail business for ICICI Home finance. Ex MD & CEO  Poonawalla Fincorp, post Acquisition of GE Money Housing Finance. Created over 100 branches, focusing on the self-employed, underbanked segment. Handled additional interim charge for Sales for the entire Loans business for Poonawalla Fincorp, along with Marketing and Product roles. Specialties: Mentoring, Investing, Advising, and helping fundraising for startups in Bike taxi, Logistics, Bullion trading platform, Neighbourhood App" listb="Ex MD - CEO "listc="Poonawalla FinCorp" />
      
    </Container>
  );
};

export default Team;
