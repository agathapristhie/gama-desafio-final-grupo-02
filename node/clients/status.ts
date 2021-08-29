import type { InstanceOptions, IOContext, IOResponse } from '@vtex/api'
import { ExternalClient } from '@vtex/api'
import { Context } from 'vm'

export default class Status extends ExternalClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super('http://httpstat.us', context, options)
  }

  public async getStatus(status: number): Promise<string> {
    return this.http.get(status.toString(), {
      metric: 'status-get',
    })
  }

  public async getStatusWithHeaders(
    status: number
  ): Promise<IOResponse<string>> {
    return this.http.getRaw(status.toString(), {
      metric: 'status-get-raw',
    })
  }
}

export async function status(ctx: Context, next: () => Promise<any>) {
  const {
    state: { code },
    clients: { catalog },
  } = ctx

  const data = await catalog.getSkuById(code.toString())
  ctx.body = data

  await next()
}
