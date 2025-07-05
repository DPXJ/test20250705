import React from 'react';
import { Outlet } from 'umi';
import { Layout, Menu } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import { routes } from '@/config/routes';

const { Header, Sider, Content } = Layout;

const BasicLayout: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleMenuClick = (path: string) => {
    navigate(path);
  };

  const renderMenuItems = (routes: any[]) => {
    return routes.map((route) => {
      if (route.routes) {
        return {
          key: route.path,
          icon: route.icon,
          label: route.name,
          children: renderMenuItems(route.routes),
        };
      }
      return {
        key: route.path,
        icon: route.icon,
        label: route.name,
      };
    });
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ background: '#fff', padding: 0 }}>
        <div style={{ float: 'left', width: 200, height: 64, background: '#001529' }}>
          <div style={{ color: '#fff', fontSize: 20, textAlign: 'center', lineHeight: '64px' }}>
            农业水电改革系统
          </div>
        </div>
      </Header>
      <Layout>
        <Sider width={200} style={{ background: '#fff' }}>
          <Menu
            mode="inline"
            selectedKeys={[location.pathname]}
            style={{ height: '100%', borderRight: 0 }}
            items={renderMenuItems(routes[0].routes)}
            onClick={({ key }) => handleMenuClick(key)}
          />
        </Sider>
        <Layout style={{ padding: '24px' }}>
          <Content
            style={{
              background: '#fff',
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default BasicLayout; 