# 西游却东行

个人博客，记录学习、梳理知识、练习写作。

## 本地开发

```bash
pnpm install
pnpm run dev
```

访问 http://localhost:4321

## 技术栈

- Astro 静态站点生成
- GitHub Pages 托管
- GitHub Actions 自动构建
- Pages CMS 网页后台

## 写文章

### 方式一：Pages CMS 网页后台（推荐）

1. 访问 https://app.pagescms.org
2. 用 GitHub 账号登录并授权仓库
3. 可视化编辑、上传图片、保存自动发布

### 方式二：GitHub 网页直接编辑

1. 进入 `src/content/posts/` 目录
2. 点击 "Add file" → "Create new file"
3. 文件名：`2026-10-19-my-post.md`
4. 写好 front matter 和正文，提交即发布

### 方式三：本地编辑

在 `src/content/posts/` 下新建 `.md` 文件，然后：

```bash
git add .
git commit -m "新文章"
git push
```

大约 1 分钟后自动发布到 https://shushengritian.github.io
