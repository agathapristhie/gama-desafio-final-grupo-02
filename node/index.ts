// node/index.ts
import {
  LRUCache,
  Service,
  ServiceContext,
  ParamsContext,
  RecorderState
} from '@vtex/api'
import { Clients } from './clients'



const MEDIUM_TIMEOUT_MS = 2 * 1000

// Create a LRU memory cache for the Status client.
// The @vtex/api HttpClient respects Cache-Control headers and uses the provided cache.
const memoryCache = new LRUCache<string, any>({ max: 5000 })
metrics.trackCache('status', memoryCache)

declare global {
  type Context = ServiceContext<Clients, State>

  interface State extends RecorderState {
    code: number
  }
}

export default new Service<Clients, State, ParamsContext>({
  clients: {
    implementation: Clients,
    options: {
      default: {
        timeout: MEDIUM_TIMEOUT_MS,
      },
    },
  },
})
