import React, { useState } from 'react';
import { Card, Tree, Table, Button, Modal, Form, Input, Select, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const { Option } = Select;

interface Organization {
  id: string;
  name: string;
  parentId: string | null;
  address: string;
  adminCode: string;
}

interface User {
  id: string;
  name: string;
  phone: string;
  organizationId: string;
  role: string;
  isAdmin: boolean;
  status: 'active' | 'inactive';
}

const OrganizationList: React.FC = () => {
  const [selectedOrg, setSelectedOrg] = useState<string>('');
  const [users, setUsers] = useState<User[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();

  const organizations: Organization[] = [
    {
      id: '1',
      name: '默认组织',
      parentId: null,
      address: '北京市海淀区',
      adminCode: '110108',
    },
  ];

  const handleEdit = (record: User) => {
    form.setFieldsValue(record);
    setModalVisible(true);
  };

  const handleDelete = (record: User) => {
    Modal.confirm({
      title: '确认删除',
      content: `确定要删除用户 ${record.name} 吗？`,
      onOk: () => {
        setUsers(users.filter((user) => user.id !== record.id));
        message.success('删除成功');
      },
    });
  };

  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '手机号',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: '角色',
      dataIndex: 'role',
      key: 'role',
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => (status === 'active' ? '启用' : '停用'),
    },
    {
      title: '操作',
      key: 'action',
      render: (_, record: User) => (
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

  const handleAddUser = () => {
    form.resetFields();
    setModalVisible(true);
  };

  const handleSubmit = () => {
    form.validateFields().then((values) => {
      const newUser: User = {
        id: Date.now().toString(),
        ...values,
        organizationId: selectedOrg,
        status: 'active',
      };
      setUsers([...users, newUser]);
      setModalVisible(false);
      message.success('添加成功');
    });
  };

  return (
    <div style={{ display: 'flex' }}>
      <Card style={{ width: 300, marginRight: 16 }}>
        <Tree
          treeData={organizations.map((org) => ({
            title: org.name,
            key: org.id,
          }))}
          onSelect={(selectedKeys) => setSelectedOrg(selectedKeys[0] as string)}
        />
      </Card>
      <Card style={{ flex: 1 }}>
        <div style={{ marginBottom: 16 }}>
          <Button type="primary" icon={<PlusOutlined />} onClick={handleAddUser}>
            新增人员
          </Button>
        </div>
        <Table columns={columns} dataSource={users} rowKey="id" />
      </Card>

      <Modal
        title="新增人员"
        open={modalVisible}
        onOk={handleSubmit}
        onCancel={() => setModalVisible(false)}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="name"
            label="姓名"
            rules={[{ required: true, message: '请输入姓名' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="phone"
            label="手机号"
            rules={[
              { required: true, message: '请输入手机号' },
              { pattern: /^1\d{10}$/, message: '请输入正确的手机号' },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="role"
            label="角色"
            rules={[{ required: true, message: '请选择角色' }]}
          >
            <Select>
              <Option value="admin">管理员</Option>
              <Option value="operator">操作员</Option>
              <Option value="maintainer">运维员</Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default OrganizationList; 