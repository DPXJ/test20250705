export default [
  {
    path: '/',
    component: '@/layouts/BasicLayout',
    routes: [
      {
        path: '/',
        redirect: '/dashboard',
      },
      {
        path: '/dashboard',
        name: '数据BI',
        icon: 'dashboard',
        component: '@/pages/Dashboard',
      },
      {
        path: '/organization',
        name: '组织管理',
        icon: 'team',
        routes: [
          {
            path: '/organization/list',
            name: '组织列表',
            component: '@/pages/Organization/List',
          },
          {
            path: '/organization/role',
            name: '角色管理',
            component: '@/pages/Organization/Role',
          },
        ],
      },
      {
        path: '/well',
        name: '机井管理',
        icon: 'database',
        component: '@/pages/Well',
      },
      {
        path: '/device',
        name: '设备管理',
        icon: 'tool',
        routes: [
          {
            path: '/device/info',
            name: '设备信息',
            component: '@/pages/Device/Info',
          },
          {
            path: '/device/monitor',
            name: '实时监测',
            component: '@/pages/Device/Monitor',
          },
          {
            path: '/device/map',
            name: '设备地图',
            component: '@/pages/Device/Map',
          },
          {
            path: '/device/control',
            name: '远程控制',
            component: '@/pages/Device/Control',
          },
        ],
      },
    ],
  },
];