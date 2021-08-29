import { Context } from "vm"

import  ordersAPI from '../clients/orders'


export async function orders(ctx: Context, next: () => Promise<any>) {
  ctx.status = 200
  ctx.body = 'OK'
  ctx.set('cache-control', 'no-cache')

  const orders = await ordersAPI("priscilapportes@gmail.com")

  console.log(orders)
  await next()

  return orders
}
