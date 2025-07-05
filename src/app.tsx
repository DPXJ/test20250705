import type { Settings } from '@ant-design/pro-layout';
import { AntDesignOutlined } from '@ant-design/icons';
import React from 'react';

export const layout: Settings = {
  title: '水电双计智慧云平台',
  logo: <AntDesignOutlined />,
  menu: {
    locale: false,
  },
  menuDataRender: () => [
    {
      path: '/dashboard',
      name: '数据大屏',
      icon: 'dashboard',
    },
    {
      path: '/organization',
      name: '组织管理',
      icon: 'cluster',
    },
    {
      path: '/well',
      name: '机井管理',
      icon: 'deployment-unit',
    },
    {
      path: '/device',
      name: '设备管理',
      icon: 'api',
      routes: [
        {
          path: '/device/list',
          name: '设备列表',
        },
        {
          path: '/device/monitor',
          name: '实时监测',
        },
        {
          path: '/device/map',
          name: '设备地图',
        },
        {
          path: '/device/control',
          name: '远程控制',
        },
      ],
    },
    {
      path: '/farmer',
      name: '农户管理',
      icon: 'team',
    },
    {
      path: '/ic-card',
      name: 'IC卡管理',
      icon: 'credit-card',
    },
    {
      path: '/pricing',
      name: '计价方案',
      icon: 'dollar',
    },
    {
      path: '/water-right',
      name: '水权市场',
      icon: 'stock',
    },
  ],
  defaultCollapsed: false,
  fixedHeader: true,
  fixSiderbar: true,
  layout: 'mix',
};

export const request = {
  timeout: 1000,
};