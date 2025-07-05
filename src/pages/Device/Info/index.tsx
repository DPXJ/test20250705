import React, { useState } from 'react';
import { Card, Table, Button, Modal, Form, Input, Select, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const { Option } = Select;

interface Device {
  id: string;
  name: string;
  code: string;
  type: 'irrigation' | 'robot' | 'controller';
  status: 'online' | 'offline' | 'fault';
  location: {
    lng: number;
    lat: number;
  };
  wellId: string;
}

const DeviceInfo: React.FC = () => {
  const [devices, setDevices] = useState<Device[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();

  // 移动函数定义到使用之前
  const handleEdit = (record: Device) => {
    form.setFieldsValue(record);
    setModalVisible(true);
  };

  const handleDelete = (record: Device) => {
    Modal.confirm({
      title: '确认删除',
      content: `确定要删除设备 ${record.name} 吗？`,
      onOk: () => {
        setDevices(devices.filter((device) => device.id !== record.id));
        message.success('删除成功');
      },
    });
  };

  const columns = [
    {
      title: '设备名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '设备编号',
      dataIndex: 'code',
      key: 'code',
    },
    {
      title: '设备类型',
      dataIndex: 'type',
      key: 'type',
      render: (type: string) => {
        const types = {
          irrigation: '灌溉一体机',
          robot: '首部机器人',
          controller: '水电双计控制器',
        };
        return types[type as keyof typeof types];
      },
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => {
        const statusMap = {
          online: '在线',
          offline: '离线',
          fault: '故障',
        };
        return statusMap[status as keyof typeof statusMap];
      },
    },
    {
      title: '操作',
      key: 'action',
      render: (_, record: Device) => (
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

  const handleAdd = () => {
    form.resetFields();
    setModalVisible(true);
  };

  const handleSubmit = () => {
    form.validateFields().then((values) => {
      const newDevice: Device = {
        id: Date.now().toString(),
        ...values,
        status: 'online',
        location: {
          lng: 116.404,
          lat: 39.915,
        },
      };
      setDevices([...devices, newDevice]);
      setModalVisible(false);
      message.success('添加成功');
    });
  };

  return (
    <Card>
      {contextHolder}
      <div style={{ marginBottom: 16 }}>
        <Button type="primary" icon={<PlusOutlined />} onClick={handleAdd}>
          新增设备
        </Button>
      </div>
      <Table columns={columns} dataSource={devices} rowKey="id" />

      <Modal
        title="新增设备"
        open={modalVisible}
        onOk={handleSubmit}
        onCancel={() => setModalVisible(false)}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="name"
            label="设备名称"
            rules={[{ required: true, message: '请输入设备名称' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="code"
            label="设备编号"
            rules={[{ required: true, message: '请输入设备编号' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="type"
            label="设备类型"
            rules={[{ required: true, message: '请选择设备类型' }]}
          >
            <Select>
              <Option value="irrigation">灌溉一体机</Option>
              <Option value="robot">首部机器人</Option>
              <Option value="controller">水电双计控制器</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="wellId"
            label="关联机井"
            rules={[{ required: true, message: '请选择关联机井' }]}
          >
            <Select>
              <Option value="1">机井1</Option>
              <Option value="2">机井2</Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </Card>
  );
};

export default DeviceInfo; 