import * as React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getLeadsAPI } from './resources';
import { Lead } from './commons/interfaces';
//import { sortByName } from './commons/utils';

export default function LeadList() {
  const [leads, setLeads] = useState<Lead[]>([]);

  useEffect(() => {
      getLeadsAPI()
        .then((response) => response.body.data)
        .then((data) => setLeads(data))
  }, []);

  return (
    <ListContainer>
      {leads.map((lead) => {
        return (
          <LeadContainer>
            <LeadTitle>Nome: <LeadData>{lead.name}</LeadData></LeadTitle>
            <LeadTitle>Email: <LeadData>{lead.email}</LeadData></LeadTitle>
            <LeadTitle>Telefone: <LeadData>{lead.phone}</LeadData></LeadTitle>
            <LeadTitle>Tipo: <LeadData>{lead.client ? 'Cliente' : 'Prospecto'}</LeadData></LeadTitle>
            <LeadTitle>Data lead: <LeadData>{lead.date}</LeadData></LeadTitle>
            {lead.client && <LeadTitle>Data cliente: <LeadData>{lead.clientDate}</LeadData></LeadTitle>}
          </LeadContainer>
        )
      })}
    </ListContainer>
  )
}

const ListContainer = styled.div`
  margin: 0 auto;
  padding: 20px;
  max-width: 800px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`;

const LeadContainer = styled.div`
  margin: 10px;
  padding: 10px;
  width: 600px;
  min-height: 200px;
  border: black 2px solid;
  border-radius: 5%;
  text-align: justify;
  font-size: 16px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
`;
const LeadTitle = styled.h3`
  font-size: 17px;
`;
const LeadData = styled.span`
  font-size: 15px;
  font-weight: 400;
`;

