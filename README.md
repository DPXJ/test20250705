# 水电双计客户端系统

`@umijs/max` 模板项目，更多功能参考 [Umi Max 简介](https://umijs.org/docs/max/introduce)

## 部署和预览

### 生产环境

项目使用 GitHub Actions 自动部署到 GitHub Pages。每当推送到 `main` 或 `master` 分支时，会自动触发构建和部署。

生产环境访问地址：https://dpxj.github.io/test20250705/

### 预览环境

项目支持 PR 预览功能：
- 当创建或更新 Pull Request 时，会自动部署一个预览环境
- 预览链接会自动添加到 PR 评论中
- 预览环境会在 PR 合并或关闭后自动清理

### 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建项目
npm run build
```

### 分支策略

- `master`: 主分支，用于生产环境
- `preview`: 预览分支，用于 PR 预览
- 开发请基于 master 分支创建新的功能分支
- 功能开发完成后提交 PR 到 master 分支

### 自动部署状态

- 生产环境：[![部署状态](https://github.com/DPXJ/test20250705/actions/workflows/deploy.yml/badge.svg?branch=master)](https://github.com/DPXJ/test20250705/actions/workflows/deploy.yml)
- 预览环境：在相应的 PR 中查看部署状态

### 注意事项

1. PR 预览环境的 URL 格式为：`https://dpxj.github.io/test20250705/pr-preview/pr-{number}/`
2. 每个 PR 都有独立的预览环境，不会互相影响
3. 预览环境仅在 PR 期间可用
