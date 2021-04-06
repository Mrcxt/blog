###
 # @LastEditTime: 2021-04-06 23:09:13
 # @Description: 
 # @Date: 2021-04-06 22:07:18
 # @Author: @虾哔哔
### 
#！ /bin/bash
yarn build
cd ./dist
cp index.html 404.html
cd ../
npm run publish