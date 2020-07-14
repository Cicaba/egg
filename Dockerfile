#制定node镜像的版本
FROM node:14.5.0-alpine
#声明作者
MAINTAINER cicaba
#移动当前目录下面的文件到egg目录下
ADD . /egg/
#进入到egg目录下面，类似cd
WORKDIR /egg
#安装依赖
RUN npm install
#对外暴露的端口
EXPOSE 3002
#程序启动脚本
CMD ["npm", "start"]