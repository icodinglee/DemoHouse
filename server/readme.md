## 如何部署项目到服务器（外网ip：100.100.100.100）

### 连接到服务器
ssh ubuntu@100.100.100.100
输入登录密码

### 安装git curl
`
sudo apt-get install git curl
`
### 安装　node
`
- 安装nvm
- curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.29.0/install.sh | bash
- 查看node有哪些版本　nvm ls-remote
- 安装　nvm install v6.5.0
- 使用　nvm use 6.5.0
- nvm alias default 6.5.0
`

### mongodb
[查看这里，详细阅读收益多多](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/)
  - sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv EA312927
  - ubuntu 14.04
    - echo "deb http://repo.mongodb.org/apt/ubuntu trusty/mongodb-org/3.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.2.list
  - ubuntu 16.04
    - echo "deb http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.2.list
  - sudo apt-get update
  - sudo apt-get install -y mongodb-org

安装之后如果显示端口被占用　执行 *sudo service mongod stop*　　重启mongod服务即可

出现 *I CONTROL [initandlisten] * WARNING: /sys/kernel/mm/transparent_hugepage/enabled is 'always'* 的解决办法


`
  只需打开/etc/init/mongod.conf文件，将下方的代码添加到chown $DEAMONUSER /var/run/mongodb.pid 和 end script.之间即可，注意空格的对齐。
`

```
  if test -f /sys/kernel/mm/transparent_hugepage/enabled; then
   echo never > /sys/kernel/mm/transparent_hugepage/enabled
  fi
  if test -f /sys/kernel/mm/transparent_hugepage/defrag; then
   echo never > /sys/kernel/mm/transparent_hugepage/defrag
  fi
```

[click here for more](http://www.myexception.cn/database/1945649.html)
### 安装　nginx
`
sudo apt-get install nginx
`
### 将本地文件上传到服务器的主目录下
｀scp -r bigdome ubuntu@100.100.100.100:
`

### 配置nginx
`
- cd ~
- cd ../../
- cd  /etc/nginx/sites-enabled
- rm -rf default
- sudo vim example.conf
`
### example.conf
`
 server{
        listen 80 default;
        server_name lihongkai.com;
        root /home/ubuntu/bigdome/client;
 }
`

修改配置之后需要重启服务器
`sudo service nginx reload`
查看报错信息
`sudo nginx -t`

### 注意事项
- 文件中的localhost都要改为100.100.100.100；
包括客户端和服务器端,
- 开启多个文件入口需要修改不同的端口号

### 退出登陆　ctrl+D

### 命令行

｀
　i（进入插入模式） --- Esc（结束插入模式）  --- ZZ(按两下大写Z可保存退出)
｀

### 进程在命令行挂起
｀
　在服务器　sudo apt-get install tmux
｀
[参考这里](http://blog.csdn.net/skykingf/article/details/46345057)
