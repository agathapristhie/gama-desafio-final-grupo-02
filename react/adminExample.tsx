import React, { FC } from 'react'
import { Layout, PageBlock } from 'vtex.styleguide'
//import {Form} from './components/Form/stylesForm'
//import { useQuery } from 'react-apollo'

import  {orders} from '../node/handler/orders'

//console.log(Hook)


let resposta = JSON.stringify(orders);
console.log(resposta)

const AdminExample: FC = () => {
//const { data } = useQuery(Orders)
return (
    <Layout>
      <PageBlock title="Titulo" subtitle="Alguma explicação." variation="full">
        <h1>Hello, World!</h1>
        {/* <div>{orders}</div> */}
          <p>{resposta}</p>
      </PageBlock>
    </Layout>
  )
}

export default AdminExample
