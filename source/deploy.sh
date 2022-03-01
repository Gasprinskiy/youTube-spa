!/home/gasper/Рабочий стол/CurrentProjects/you-tube-search deploy

# остановить публикацию при ошибках
set -e

# сборка
npm run build

# переход в каталог сборки
cd dist

# если вы публикуете на пользовательский домен
# echo 'www.example.com' > CNAME

git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Gasprinskiy/you-tube-spa.git
git push -u origin main

# если вы публикуете по адресу https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# если вы публикуете по адресу https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -