# 问题信息模块

基于 TDesign React 组件库构建的问题信息管理系统模块。

## 功能特点

- **项目基础信息展示**：显示项目固有基础信息（不可编辑）
- **问题信息管理**：支持问题名称、状态、级别、场景和描述的录入
- **更多信息选项**：可展开/收起的高级表单字段，默认收起
- **响应式布局**：适配不同屏幕尺寸
- **字段布局优化**：字段标签和内容在同一行显示，间距紧凑

## 项目基础信息

系统默认展示以下项目固有基础信息：
- 项目编码：20211108209778
- 项目名称：金华和悦-未来社区
- 项目行业：旅建农体/建筑与不动产/地产与物业服务
- 项目状态：交付中
- 客户名称：金华金开数智运营科技有限公司
- 客户UIN：100020778069
- 一级通路：国内东区
- 销售经理：yuanXXX
- 项目经理：kenXXX
- 架构师：xxxx
- 分包商务经理：xxxx

## 问题信息必填字段

- 问题名称
- 问题状态（选项：草稿、处理中、已关闭）
- 问题级别（选项：低、中、高、重大、特大）
- 问题场景
- 问题识别人（自动填充：sienxu(徐罗帆)）

## 更多信息选项（非必填，默认收起）

- 问题类型
- 主要原因
- 次要原因
- 合作伙伴
- 涉及产品
- 问题影响对象
- 影响金额
- 影响延期
- 影响验收里程碑
- 周报显示（单选：是/否）
- 逾期控制提醒（单选：是/否）
- 问题影响及措施
- 问题描述（非必填）

## 问题场景选项

1. 场景1-腾讯胜诉，但客户无偿付能力
2. 场景2-质保金等尾款长期未回
3. 场景3-验收款长期未回
4. 场景4-项目核减，A面未定
5. 场景5-项目核减，A面已定，B面未确定
6. 场景6-项目核减，AB面均已定，但A面尚未回款
7. 场景7-A面未签合同，B面提前交付
8. 场景8-其他

## 技术栈

- React 18
- TypeScript
- TDesign React 1.12.0
- Vite 5
- Tailwind CSS 3.4.17

## 部署到 Vercel

### 方法一：通过 Vercel 网站部署（推荐）

1. 访问 [Vercel](https://vercel.com)
2. 使用 GitHub 账号登录
3. 点击 "New Project"
4. 导入你的 GitHub 仓库：`siena-xuluofan/panshi`
5. 配置项目：
   - **Root Directory**: 选择 `problem-info-module`
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. 点击 "Deploy"

### 方法二：使用 Vercel CLI

```bash
# 安装 Vercel CLI
npm install -g vercel

# 在项目目录下运行
cd problem-info-module
vercel
```

## 安装与运行

### 开发环境运行

1. 安装依赖：
   ```bash
   npm install
   ```

2. 启动开发服务器：
   ```bash
   npm run dev
   ```
   然后访问 http://localhost:5173

### 静态文件预览

1. 直接在浏览器中打开 `app.html` 文件，这是一个完全独立的静态预览版本
   - 包含完整的表单功能和交互
   - 使用CDN加载TDesign和Tailwind CSS
   - 不需要本地服务器

2. 使用Python HTTP服务器预览：
   ```bash
   python3 -m http.server 8001
   ```
   然后访问：
   - http://localhost:8001/app.html (主预览)
   - http://localhost:8001/preview.html (备用预览)

### 生产构建

1. 构建生产版本：
   ```bash
   npm run build
   ```

2. 预览生产构建：
   ```bash
   npm run preview
   ```

### 文件说明

- `index.html` - Vite构建的入口文件（仅用于构建过程）
- `app.html` - 完全独立的静态预览文件，可直接在浏览器中打开
- `preview.html` - 备用静态预览文件
- `src/components/ProblemInfoModule.tsx` - React组件源代码
- `package.json` - 项目依赖和脚本

## 组件结构

```
src/
├── components/
│   └── ProblemInfoModule.tsx  # 问题信息模块组件
├── App.tsx                    # 应用入口
├── main.tsx                   # 主入口文件
└── index.css                  # 样式文件
```

## 使用说明

1. 问题基础信息在顶部展示，为只读信息，字段标签和内容在同一行
2. 问题信息表单中必填字段位于表单上部
3. 问题识别人自动填充，不可编辑
4. 点击"更多信息"可展开更多可选字段
5. 周报显示和逾期控制提醒字段使用单选按钮
6. 问题描述为非必填项
7. 填写完成后点击"保存问题"提交表单

## 自定义配置

如需修改项目基础信息，请编辑 `src/components/ProblemInfoModule.tsx` 中的 `projectInfo` 对象。