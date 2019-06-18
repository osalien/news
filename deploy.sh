#!/usr/bin/env sh
set -e
yarn run docs:build
cp -r docs/.vuepress/dist  D:/www/docker/news
cd D:www/docker

git init
git add -A
git commit -m '每日分享'

git push -u git@github.com:osalien/docker.git master

cd -
