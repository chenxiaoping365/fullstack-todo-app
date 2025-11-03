# 📝 Fullstack To-Do List Application

一个使用 React + Express + PostgreSQL 构建的全栈待办事项应用，专为 Replit 平台优化。

## 🚀 快速开始

### 在 Replit 中部署（推荐）

1. **导入项目**：在 Replit 中选择 "Import from GitHub"，输入：
   ```
   https://github.com/chenxiaoping365/fullstack-todo-app.git
   ```

2. **添加数据库**：左侧工具栏 → Database → Add Database → PostgreSQL

3. **安装依赖**：
   ```bash
   npm run install:all
   ```

4. **运行应用**：点击 "Run" 按钮

5. **部署**：点击 "Deploy" → Autoscale → Publish

详细步骤请查看：[REPLIT-DEPLOY.md](./REPLIT-DEPLOY.md)

---

## 📁 项目结构

```
fullstack-todo-app/
├── server/              # Express 后端
│   ├── index.js         # 服务器入口
│   ├── db.js           # 数据库操作
│   └── package.json    # 后端依赖
├── client/             # React 前端
│   ├── src/
│   │   ├── App.jsx     # 主应用组件
│   │   ├── main.jsx    # React 入口
│   │   └── index.css   # 样式
│   ├── index.html      # HTML 模板
│   └── package.json   # 前端依赖
├── .replit             # Replit 配置
├── package.json        # 根目录脚本
└── README.md          # 项目说明
```

---

## 🛠️ 技术栈

- **前端**: React 18 + Vite + Tailwind CSS
- **后端**: Node.js + Express
- **数据库**: PostgreSQL（Replit 内置）
- **部署**: Replit Autoscale

---

## 📋 功能特性

- ✅ 添加任务
- ✅ 标记完成/未完成
- ✅ 删除任务
- ✅ 实时统计（总数、已完成、进行中）
- ✅ 美观的响应式 UI
- ✅ 数据持久化（PostgreSQL）

---

## 🔌 API 端点

- `GET /api/todos` - 获取所有任务
- `POST /api/todos` - 创建新任务
- `PATCH /api/todos/:id` - 更新任务状态
- `DELETE /api/todos/:id` - 删除任务
- `GET /health` - 健康检查

---

## 📖 使用示例

### 创建任务
```bash
curl -X POST https://你的URL/api/todos \
  -H "Content-Type: application/json" \
  -d '{"title":"完成项目文档"}'
```

### 获取所有任务
```bash
curl https://你的URL/api/todos
```

### 标记完成
```bash
curl -X PATCH https://你的URL/api/todos/1 \
  -H "Content-Type: application/json" \
  -d '{"completed":true}'
```

### 删除任务
```bash
curl -X DELETE https://你的URL/api/todos/1
```

---

## 🔧 本地开发（可选）

### 前置要求
- Node.js 18+
- PostgreSQL 数据库
- npm 或 yarn

### 安装依赖
```bash
npm run install:all
```

### 配置环境变量
创建 `.env` 文件：
```
DATABASE_URL=你的PostgreSQL连接字符串
```

### 运行后端
```bash
cd server
npm run dev
```

### 运行前端
```bash
cd client
npm run dev
```

---

## 📚 相关文档

- [详细部署指南](./REPLIT-DEPLOY.md) - 完整的 Replit 部署步骤
- [Replit 官方文档](https://docs.replit.com)

---

## 🐛 故障排除

遇到问题？查看 [REPLIT-DEPLOY.md](./REPLIT-DEPLOY.md) 中的"常见问题解决"章节。

---

## 📝 许可证

MIT License

---

## 🙏 致谢

使用 [Replit](https://replit.com) 快速开发和部署。

---

**⭐ 如果这个项目对你有帮助，请给个 Star！**

