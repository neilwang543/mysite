import { defineConfig } from 'umi'

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  exportStatic: {},
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/home', component: '@/pages/home/index' },
    { path: '/transform', component: '@/pages/transformBase64/index' },
  ],
  fastRefresh: {},
})
