#!/bin/bash

echo "🚀 开始部署到 GitHub..."

# 添加 GitHub 到 known_hosts
ssh-keyscan github.com >> ~/.ssh/known_hosts 2>/dev/null

# 推送到 GitHub
cd /Users/sienaxu/codebuddy/problem-solving-module
git push -u origin main

if [ $? -eq 0 ]; then
    echo "✅ 部署成功！"
    echo "📦 项目地址: https://github.com/siena-xuluofan/panshi"
    echo "🌐 你可以在 GitHub 仓库设置中启用 GitHub Pages"
else
    echo "❌ 部署失败，请检查错误信息"
fi
