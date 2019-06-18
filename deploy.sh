#!/usr/bin/env sh
set -e
yarn run docs:build
cp -r docs/.vuepress/dist  D:/www/docker/news
cd D:www/docker

git init
git add -A
git commit -m '每日分享'

<<<<<<< HEAD
git push -u git@github.com:osalien/docker.git master
=======
git push -f git@github.com:osalien/docker.git master
>>>>>>> ff61b433fea1f26a6151680bbaeb37ce3dcbea8c

cd -
