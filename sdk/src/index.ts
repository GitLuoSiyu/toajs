import { InitOptions } from '../utils/types/types'
import { isWxMiniEnv } from '../utils/utils/utils'
import { setupReplace } from './load'
import { initOptions, log } from '../utils/core/core'
export function init(options: InitOptions = {}) {
  if (!isWxMiniEnv) return
  initOptions(options)
  setupReplace()
  Object.assign(wx, { mitoLog: log })
}

export { log }
