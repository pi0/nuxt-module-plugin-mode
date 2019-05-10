import { resolve } from 'path'

export default function () {
  this.addPlugin({
    src: resolve(__dirname, 'plugin.client.js')
  })
}
