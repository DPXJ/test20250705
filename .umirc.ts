import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '水电双计智慧云平台',
  },
  routes: [
    {
      path: '/login',
      component: './Login',
      layout: false,
    },
    {
      path: '/',
      redirect: '/home',
      wrappers: ['@/wrappers/auth'],
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
      wrappers: ['@/wrappers/auth'],
    },
    {
      name: '权限演示',
      path: '/access',
      component: './Access',
      wrappers: ['@/wrappers/auth'],
    },
    {
      name: 'CRUD 示例',
      path: '/table',
      component: './Table',
      wrappers: ['@/wrappers/auth'],
    },
  ],
  npmClient: 'npm',
  // GitHub Pages 部署配置
  // 请将 'your-repo-name' 替换为您的实际仓库名称
  publicPath: process.env.NODE_ENV === 'production' ? '/your-repo-name/' : '/',
  // 示例：如果仓库名为 'water-electric-system'，则使用 '/water-electric-system/'
});

