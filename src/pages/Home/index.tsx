import React from 'react';
import { Card, Row, Col, Statistic, Typography } from 'antd';
import { 
  UserOutlined, 
  DatabaseOutlined, 
  SettingOutlined, 
  BarChartOutlined 
} from '@ant-design/icons';

const { Title } = Typography;

const Home: React.FC = () => {
  return (
    <div style={{ padding: 24 }}>
      <Title level={2}>欢迎使用水电双计智慧云平台</Title>
      
      <Row gutter={[16, 16]} style={{ marginTop: 24 }}>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="用户总数"
              value={1128}
              prefix={<UserOutlined />}
              valueStyle={{ color: '#3f8600' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="设备总数"
              value={93}
              prefix={<DatabaseOutlined />}
              valueStyle={{ color: '#cf1322' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="在线设备"
              value={87}
              prefix={<SettingOutlined />}
              valueStyle={{ color: '#1890ff' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="今日数据"
              value={11280}
              prefix={<BarChartOutlined />}
              valueStyle={{ color: '#722ed1' }}
            />
          </Card>
        </Col>
      </Row>

      <Row gutter={[16, 16]} style={{ marginTop: 24 }}>
        <Col span={24}>
          <Card title="系统概览">
            <p>水电双计智慧云平台是一个集成了水电计量、数据监控、设备管理等功能的一体化解决方案。</p>
            <p>通过先进的物联网技术和数据分析，为用户提供精准的计量服务和智能化的管理体验。</p>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Home; 