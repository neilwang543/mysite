import { defineConfig } from 'umi'

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  exportStatic: {
    htmlSuffix: true,
    dynamicRoot: true,
  },
  routes: [{ path: '/', component: '@/pages/transformBase64/index' }],
  fastRefresh: {},
})
