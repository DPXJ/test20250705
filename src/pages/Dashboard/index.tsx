import React from 'react';
import { Card, Row, Col, Statistic } from 'antd';
import { Map, APILoader, ScaleControl, ToolBarControl } from '@uiw/react-baidu-map';
import { LineChart, PieChart } from '@/components/Charts';

const Dashboard: React.FC = () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={6}>
          <Card>
            <Statistic title="设备总数" value={1128} />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic title="每日新增设备" value={12} />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic title="IC卡余额统计" value={56890} suffix="元" />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic title="累计用水量" value={123456} suffix="m³" />
          </Card>
        </Col>
      </Row>

      <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
        <Col span={16}>
          <Card title="设备分布地图">
            <div style={{ height: 500 }}>
              <APILoader akay="YOUR_BAIDU_MAP_KEY">
                <Map
                  widget={['NavigationControl', 'GeolocationControl']}
                  style={{ height: '100%' }}
                  center={{ lng: 116.404, lat: 39.915 }}
                  zoom={11}
                >
                  <ScaleControl />
                  <ToolBarControl />
                </Map>
              </APILoader>
            </div>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="组织人员分布">
            <PieChart
              data={[
                { name: 'A组织', value: 20 },
                { name: 'B组织', value: 30 },
                { name: 'C组织', value: 50 },
              ]}
            />
          </Card>
        </Col>
      </Row>

      <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
        <Col span={12}>
          <Card title="新增设备月度趋势">
            <LineChart
              data={[
                { month: '1月', value: 100 },
                { month: '2月', value: 120 },
                { month: '3月', value: 150 },
                { month: '4月', value: 180 },
              ]}
            />
          </Card>
        </Col>
        <Col span={12}>
          <Card title="用水趋势图">
            <LineChart
              data={[
                { time: '00:00', value: 100 },
                { time: '06:00', value: 200 },
                { time: '12:00', value: 300 },
                { time: '18:00', value: 250 },
              ]}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard; 