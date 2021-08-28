import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getLeadsAPI } from './resources';
import { Lead } from './commons';

export default function LeadList() {
  const [leads, setLeads] = useState<Lead[]>([]);

  useEffect(() => {
      getLeadsAPI().then((data) => setLeads(data.body.dados)) 
  }, []);

  return (
    <ListContainer>
      {leads.map((lead) => {
        return (
          <LeadContainer>
            <li>Nome: {lead.name}</li> 
            <li>Email: {lead.email}</li> 
            <li>Telefone: {lead.phone}</li> 
            <li>Data: {lead.date}</li> 
            <li>Tipo: {lead.client ? 'cliente' : 'prospecto'}</li> 
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

const LeadContainer = styled.ul`
  list-style: none;
  padding: 15px;
  margin: 10px;
  width: 300px;
  height: 200px;
  border: black 2px solid;
  border-radius: 5%;
  text-align: justify;
  font-size: 16px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
`;

