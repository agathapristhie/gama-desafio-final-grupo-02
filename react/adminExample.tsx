import React, { FC } from 'react'
import { Layout, PageBlock } from 'vtex.styleguide'
import LeadList from './LeadList'

const AdminExample: FC = () => {
//const { data } = useQuery(Orders)
return (
    <Layout>
      <PageBlock title="Clients e Leads - AWS" subtitle="Cadastro de Leads e Clientes" variation="full">
       <LeadList/>

      </PageBlock>
    </Layout>
  )
}


export default AdminExample
