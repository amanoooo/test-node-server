



# test-node-server



## infra

### start mysql
```bash
# docker run -e MYSQL_ROOT_PASSWORD=amano -e MYSQL_ALLOW_EMPTY_PASSWORD=hikaru -p 3306:3306 mysql:8.3.0

docker run -e MYSQL_ROOT_PASSWORD=amano  -p 3306:3306 mysql:8.3.0 --default-authentication-plugin=mysql_native_password
```



### init schema
```sql
DROP TABLE IF EXISTS `nmr`;
CREATE TABLE `nmr`
(
    `id`                   bigint    NOT NULL AUTO_INCREMENT COMMENT '主键ID',
    `test_point`           varchar(20)             DEFAULT NULL COMMENT '点',
    `amplitude`            bigint        DEFAULT NULL COMMENT '值',
   
    `created_at`           timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    `updated_at`           timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
    `deleted`              char(1)   NOT NULL DEFAULT '0' COMMENT '逻辑删除 1已删',
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
```


### test init
```sql
insert into nmr (`test_point`, `amplitude`) values(1, 2)

-- 目前是通过 gui 实现的导入
```
