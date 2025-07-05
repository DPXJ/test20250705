import React, { useState } from 'react';
import { Card, Table, Button, Modal, Form, Input, InputNumber, Select, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { ProTable, ProColumns } from '@ant-design/pro-components';
import * as API from '@/api/well';

const { Option } = Select;

interface Well {
  id: string;
  name: string;
  code: string;
  house: string;
  depth: number;
  pump: {
    name: string;
    code: string;
    power: string;
    depth: number;
    material: string;
    rate: number;
    output: number;
    installDepth: number;
    outletCount: number;
    area: number;
  };
}

const WellManagement: React.FC = () => {
  const [wells, setWells] = useState<Well[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();

  const handleAdd = () => {
    form.resetFields();
    setModalVisible(true);
  };

  const handleEdit = (record: API.WellInfo) => {
    console.log('编辑', record);
  };

  const handleDelete = (record: API.WellInfo) => {
    console.log('删除', record);
  };

  const columns: ProColumns<API.WellInfo>[] = [
    {
      title: '机井名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '机井编号',
      dataIndex: 'code',
      key: 'code',
    },
    {
      title: '井房',
      dataIndex: 'house',
      key: 'house',
    },
    {
      title: '井深(m)',
      dataIndex: 'depth',
      key: 'depth',
    },
    {
      title: '操作',
      key: 'action',
      render: (_, record: API.WellInfo) => (
        <>
          <Button type="link" onClick={() => handleEdit(record)}>
            编辑
          </Button>
          <Button type="link" danger onClick={() => handleDelete(record)}>
            删除
          </Button>
        </>
      ),
    },
  ];

  const handleSubmit = () => {
    form.validateFields().then((values) => {
      const newWell: Well = {
        id: Date.now().toString(),
        ...values,
      };
      setWells([...wells, newWell]);
      setModalVisible(false);
      message.success('添加成功');
    });
  };

  return (
    <Card>
      <div style={{ marginBottom: 16 }}>
        <Button type="primary" icon={<PlusOutlined />} onClick={handleAdd}>
          新增机井
        </Button>
      </div>
      <ProTable<API.WellInfo>
        columns={columns}
        dataSource={wells}
        rowKey="id"
        search={false}
        pagination={{ pageSize: 10 }}
        headerTitle="机井列表"
        toolBarRender={() => [
          <Button type="primary" key="add" onClick={handleAdd}>
            新增机井
          </Button>,
        ]}
      />

      <Modal
        title="新增机井"
        open={modalVisible}
        onOk={handleSubmit}
        onCancel={() => setModalVisible(false)}
        width={800}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="name"
            label="机井名称"
            rules={[{ required: true, message: '请输入机井名称' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="code"
            label="机井编号"
            rules={[{ required: true, message: '请输入机井编号' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="house" label="井房">
            <Input />
          </Form.Item>
          <Form.Item
            name="depth"
            label="井深(m)"
            rules={[{ required: true, message: '请输入井深' }]}
          >
            <InputNumber style={{ width: '100%' }} />
          </Form.Item>

          <h3>水泵信息</h3>
          <Form.Item
            name={['pump', 'name']}
            label="水泵名称"
            rules={[{ required: true, message: '请输入水泵名称' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={['pump', 'code']}
            label="水泵编号"
            rules={[{ required: true, message: '请输入水泵编号' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={['pump', 'power']}
            label="动力输变电设备"
            rules={[{ required: true, message: '请输入动力输变电设备' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={['pump', 'depth']}
            label="埋深(m)"
            rules={[{ required: true, message: '请输入埋深' }]}
          >
            <InputNumber style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item name={['pump', 'material']} label="井管材料">
            <Input />
          </Form.Item>
          <Form.Item name={['pump', 'rate']} label="灌溉设计保证率">
            <InputNumber style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item name={['pump', 'output']} label="单位出水量(m³)">
            <InputNumber style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item
            name={['pump', 'installDepth']}
            label="水泵安装深度(m)"
            rules={[{ required: true, message: '请输入水泵安装深度' }]}
          >
            <InputNumber style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item
            name={['pump', 'outletCount']}
            label="出水口数量(个)"
            rules={[{ required: true, message: '请输入出水口数量' }]}
          >
            <InputNumber style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item name={['pump', 'area']} label="控制灌溉面积(亩)">
            <InputNumber style={{ width: '100%' }} />
          </Form.Item>
        </Form>
      </Modal>
    </Card>
  );
};

export default WellManagement; 