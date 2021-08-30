import * as React from 'react'
import { Layout, PageBlock } from 'vtex.styleguide'
//import {client, getTotalOrders}  from './helloData'

import { render } from 'react-dom';
/* import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from "@apollo/client";

 */
/* const teste = getTotalOrders as any;
client.query(teste).then(response => {
  console.log(response.data.name);
}); */

/* function App() {
  return (
    <div>
      <h2>My first Apollo app 🚀</h2>
    </div>
  );
}
*/
const element = <Layout>
<PageBlock title="Titulo" subtitle="Alguma explicação." variation="full">
</PageBlock>
</Layout>;

render( element, document.getElementById('root'));

