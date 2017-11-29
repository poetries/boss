mongodb简介
---

- `MongoDB `旨在为WEB应用提供可扩展的高性能数据存储解决方案
- `MongoDB` 将数据存储为一个文档，数据结构由键值(`key=>value`)对组成。`MongoDB` 文档类似于 `JSON` 对象。字段值可以包含其他文档，数组及文档数组

![](http://www.runoob.com/wp-content/uploads/2013/10/crud-annotated-document.png)

**主要特点**

- 高可扩展性
- 分布式存储
- 低成本
- 结构灵活


window下mongodb环境搭建
---

- 下载安装包或压缩包
- 添加`db`存储和日志存储文件夹
- 添加服务、配置环境变量、启动`Mongo`

> 配置演示

- 在任意目录创建几个文件夹

![image.png](http://upload-images.jianshu.io/upload_images/1480597-5831e0dfd11d0593.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![image.png](http://upload-images.jianshu.io/upload_images/1480597-a003b9fd9732c9c3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


**通过命令行启动服务**

> 配置环境变量

```
// --dbpath指定数据存储位置
C:\Program Files\MongoDB\Server\3.4\bin\mongod --dbpath d:\mongodb\data
```

![image.png](http://upload-images.jianshu.io/upload_images/1480597-c7b26e6dfcfbbf2c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


**通配置启动服务**

```
# 配置d:\mongodb\etc\mongodb.conf

#数据库路径
dbpath=d:\mongodb\data\

#日志输出文件路径
logpath=d:\mongodb\logs\mongodb.log

#错误日志采用追加模式，配置这个选项后mongodb的日志会追加到现有的日志文件，而不是从新创建一个新文件
logappend=true

#启用日志文件，默认启用
journal=true

#这个选项可以过滤掉一些无用的日志信息，若需要调试使用请设置为false
quiet=true

#端口号 默认为27017
port=27017

#指定存储引擎（默认先不加此引擎，如果报错了，大家在加进去）
storageEngine=mmapv1

#http配置 开启这个服务才可以在网页中访问 端口28017
httpinterface=true
```

- 启动方式 

```
C:\Program Files\MongoDB\Server\3.4\bin\mongod --config d:\mongodb\data 
```

![image.png](http://upload-images.jianshu.io/upload_images/1480597-a8ee6a8c3346a04e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


**更加简洁的启动方式**
> 安装到`window`的服务里面，打开Windows看一下

```
C:\Program Files\MongoDB\Server\3.4\bin\mongod --config d:\mongodb\data --install --serviceName "MongoDB"
```

![image.png](http://upload-images.jianshu.io/upload_images/1480597-d4264668a126d16a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


**使用MongoVue连接数据库**

![image.png](http://upload-images.jianshu.io/upload_images/1480597-c95265b254748783.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![image.png](http://upload-images.jianshu.io/upload_images/1480597-e829f03b6d3b27c2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


linux下mongodb环境搭建
---

- 下载安装包或压缩包
- 添加`db`存储和日志存储文件夹
- 添加服务、配置环境变量、启动`Mongo`


- 远程登录服务器

```
ssh root@123.142.25.365
```

- 上传本地的安装包

```
// 上传文件夹，传文件不需要r
scp /mongodb/... -r root@123.142.25.365:/home
// 传到服务器的/home/
```

- 在指定的目录创建启动需要的文件

```
$ cd /home/
$ mkdir etc logs data
$ touch logs/mongodb.log etc/mongo.conf
```

```
// /home/etc/mongo.conf配置

dbpath=/home/mongodb/data
logpath=/mongodb/logs/mongodb.log
logappend=true
journal=true
quiet=true
port=2701
```

- 启动服务

```
mongod -f /home/mongodb/etc/mongo.conf
```

- 创建软连接

```
ln -s /home/mongodb/bin/mongo /usr/local/bin/mongo

ln -s /home/mongodb/bin/mongod /usr/local/bin/mongod
```


