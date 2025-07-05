import React from 'react';
import { Navigate, Outlet } from 'umi';

const AuthWrapper: React.FC = () => {
  // 这里可以添加实际的权限验证逻辑
  // 目前简单返回true，表示已登录
  const isAuthenticated = true;

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default AuthWrapper; 