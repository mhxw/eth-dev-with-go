yarn build
cd build
rm -rf .git
git init
git config --global user.name "mhxw"
git config --global user.email "32643286+mhxw@users.noreply.github.com"
git add .
git commit -m "first commit"
git branch -M web
git remote add origin https://github.com/mhxw/eth-dev-with-go.git
git push -u -f origin web
cd ../
rm -rf build