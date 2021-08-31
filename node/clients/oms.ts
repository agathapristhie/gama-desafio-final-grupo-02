import { InstanceOptions, IOContext } from '@vtex/api'
import {OMS} from '@vtex/clients'
import axios from 'axios'


export function statusToError(e: any) {
  if (!e.response) {
    throw e
  }
}

export default class OMSHC extends OMS {
  public constructor (ctx: IOContext, options?: InstanceOptions) {
    super(ctx, {
      ...options,
      headers: {
        ...options && options.headers,
        ...(ctx.storeUserAuthToken
          ? { VtexIdclientAutCookie: ctx.storeUserAuthToken }
          : null),
      }
    })
  }


  public orderid = (id: string) => this.get( this.routes.orderid(id))

  public clientorderemail = (email: string) => this.get(this.routes.clinteorder(email))

    protected get = (url: string)=> {
      //cria um objeto JSON com os parâmetros para chamar a api
        //chamada da api com estes parâmetros e utilização de 'promises' para obter uma resposta
     axios.get(`http://hiringcoders202102.myvtex.com/api/oms/pvt/orders${url}`, { // vtex API
         headers: {
          'X-VTEX-API-AppKey': 'vtexappkey-hiringcoders202102-OEMONM',
          'X-VTEX-API-AppToken': 'KGFUSNJYXABFOBAVMSRCNIRDMYVHIJBWGRGCEHHBWHXBJKQVRGNPDUACPCITRCQOZFYWUXRELQFFKQTBHZQCWLSMQENCZNJURJBELTBTOIENOVSZIGMSMORNMMGQKPEX'
          ,'X-VTEX-Use-Https': true,
          //'Proxy-Authorization': this.context.authToken
        }
      })

        .then (response =>{ response.data} )
        .catch(error => console.log('error', error));

       return this
  }

  private get routes () {
    return {
      orderid: (id: string) => `?${id}`,
      clinteorder: (email: string)=> `?clientEmail=${email}`
    }
  }

  }

