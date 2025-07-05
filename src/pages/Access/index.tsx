import React from 'react';
import { Card, Button, Space, message } from 'antd';
import { useAccess } from 'umi';

const Access: React.FC = () => {
  const access = useAccess();

  const handleAdminAction = () => {
    message.success('管理员操作执行成功！');
  };

  const handleUserAction = () => {
    message.success('普通用户操作执行成功！');
  };

  return (
    <div style={{ padding: 24 }}>
      <Card title="权限演示页面">
        <p>当前用户权限状态：</p>
        <ul>
          <li>管理员权限: {access.canAdmin ? '是' : '否'}</li>
          <li>普通用户权限: {access.canUser ? '是' : '否'}</li>
        </ul>

        <Space direction="vertical" style={{ width: '100%', marginTop: 16 }}>
          {access.canAdmin && (
            <Button type="primary" onClick={handleAdminAction}>
              管理员操作
            </Button>
          )}
          
          {access.canUser && (
            <Button onClick={handleUserAction}>
              普通用户操作
            </Button>
          )}
          
          {!access.canAdmin && !access.canUser && (
            <p style={{ color: '#999' }}>您暂无任何操作权限</p>
          )}
        </Space>
      </Card>
    </div>
  );
};

export default Access; 