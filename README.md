# 水电双计客户端系统

`@umijs/max` 模板项目，更多功能参考 [Umi Max 简介](https://umijs.org/docs/max/introduce)

## 部署到 GitHub Pages

### 自动部署

此项目已配置 GitHub Actions 自动部署到 GitHub Pages。每当推送到 `main` 或 `master` 分支时，会自动触发构建和部署。

### 设置步骤

1. 在 GitHub 仓库中，进入 Settings → Pages
2. 选择 Source 为 "GitHub Actions"
3. 推送代码到 `main` 或 `master` 分支
4. 等待 Actions 执行完成

### 配置说明

- **构建输出目录**: `dist`
- **部署分支**: `gh-pages`
- **公共路径**: 需要在 `.umirc.ts` 中将 `your-repo-name` 替换为实际的仓库名称

### 重要配置

**请务必修改 `.umirc.ts` 文件中的 `publicPath` 配置：**

```typescript
// 将 'your-repo-name' 替换为您的实际仓库名称
publicPath: process.env.NODE_ENV === 'production' ? '/your-repo-name/' : '/',
```

例如，如果您的仓库名为 `water-electric-system`，则应该配置为：

```typescript
publicPath: process.env.NODE_ENV === 'production' ? '/water-electric-system/' : '/',
```

### 自定义域名

如需使用自定义域名，请在 `.github/workflows/deploy.yml` 文件中的 `cname` 字段添加您的域名。

### 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建项目
npm run build
```
