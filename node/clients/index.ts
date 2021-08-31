import { IOClients } from '@vtex/api'


import { Checkout, Catalog } from '@vtex/clients'
import { Context } from 'vm'
import  OMSHC  from './oms'


export const queries = {
 order: ( { clients: { oms } }: Context) =>
    oms.orderid(""),
}


export default class Clients extends IOClients {

  public get oms() {
    return this.getOrSet('oms', OMSHC)
  }

   public get checkout() {
    return this.getOrSet('checkout', Checkout)
  }

  public get catalog() {
    return this.getOrSet('catalog', Catalog)
  }

}

