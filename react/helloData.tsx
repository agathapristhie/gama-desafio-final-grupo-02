import { ApolloClient, InMemoryCache } from '@apollo/client';
import { RestLink } from 'apollo-link-rest';
import { gql } from '@apollo/client';
import fetch from 'cross-fetch';


// Set `RestLink` with your endpoint

let restlink = new RestLink({
  endpoints: { v1: '?_stats', v2: '?clientEmail=' },
  uri: 'https://hiringcoders202102.myvtex.com/api/',
  customFetch: fetch,
  headers: {'Content-Type': 'application/json',
  Accept: 'application/json',
  'X-VTEX-API-AppKey': 'vtexappkey-hiringcoders202102-OEMONM',
  'X-VTEX-API-AppToken': 'KGFUSNJYXABFOBAVMSRCNIRDMYVHIJBWGRGCEHHBWHXBJKQVRGNPDUACPCITRCQOZFYWUXRELQFFKQTBHZQCWLSMQENCZNJURJBELTBTOIENOVSZIGMSMORNMMGQKPEX'
   }
  })


export const getTotalOrders = gql`
  query getOrderById {
    post @rest(type: "Get", path: "oms/pvt/orders", endpoint: "v1") {
      id
      name
      email
    }
  }
`;
export const getOrderByEmail = gql`
  query getOrderByEmail(email: string) {
    post @rest(type: "Email", path: "oms/pvt/orders", endpoint: "v2" + email) {
      id
      name
      email
    }
  }
`;

// Setup your client
export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: restlink
});


