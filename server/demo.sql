# Host: localhost  (Version 5.6.17)
# Date: 2017-02-05 19:46:11
# Generator: MySQL-Front 5.4  (Build 4.157) - http://www.mysqlfront.de/

/*!40101 SET NAMES utf8 */;

#
# Structure for table "comments"
#

DROP TABLE IF EXISTS `comments`;
CREATE TABLE `comments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `topic_id` int(11) DEFAULT NULL,
  `content` text,
  `agrees` int(11) DEFAULT NULL,
  `replies` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `created_name` varchar(64) DEFAULT NULL,
  `created_avatar` varchar(128) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL,
  `modified_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=102 DEFAULT CHARSET=utf8mb4;

#
# Data for table "comments"
#

INSERT INTO `comments` VALUES (3,49,'还以为出问题了',NULL,NULL,1,'admin',NULL,'2017-01-24 18:22:28',1,'2017-01-24 18:22:28'),(4,49,'nice~',NULL,NULL,1,'admin',NULL,'2017-01-24 18:22:34',1,'2017-01-24 18:22:34'),(5,49,'所有问你题一定会出问题！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！打算',NULL,NULL,1,'admin',NULL,'2017-01-24 18:22:46',1,'2017-01-24 18:22:46'),(6,49,'',NULL,NULL,1,'admin',NULL,'2017-01-24 18:22:49',1,'2017-01-24 18:22:49'),(7,49,'大声道',NULL,NULL,1,'admin',NULL,'2017-01-24 18:22:53',1,'2017-01-24 18:22:53'),(8,49,'发放',NULL,NULL,1,'admin',NULL,'2017-01-24 18:22:56',1,'2017-01-24 18:22:56'),(9,49,'  sddassa啊飒飒鞈说',NULL,NULL,1,'admin',NULL,'2017-01-24 18:23:45',1,'2017-01-24 18:23:45'),(10,50,'emoji~',NULL,NULL,1,'admin',NULL,'2017-01-24 21:40:43',1,'2017-01-24 21:40:43'),(11,52,'交换机',NULL,NULL,1,'admin',NULL,'2017-01-24 21:42:24',1,'2017-01-24 21:42:24'),(12,52,'发放',NULL,NULL,1,'admin',NULL,'2017-01-24 21:42:49',1,'2017-01-24 21:42:49'),(13,52,'123',NULL,NULL,1,'admin',NULL,'2017-01-24 22:07:24',1,'2017-01-24 22:07:24'),(14,52,'414',NULL,NULL,1,'admin',NULL,'2017-01-24 22:07:28',1,'2017-01-24 22:07:28'),(15,52,'2512512',NULL,NULL,1,'admin',NULL,'2017-01-24 22:07:32',1,'2017-01-24 22:07:32'),(16,51,'what s',NULL,NULL,1,'admin',NULL,'2017-01-24 22:08:02',1,'2017-01-24 22:08:02'),(17,51,'122',NULL,NULL,1,'admin',NULL,'2017-01-24 22:08:12',1,'2017-01-24 22:08:12'),(18,52,'发放',NULL,NULL,1,'admin',NULL,'2017-01-24 22:14:54',1,'2017-01-24 22:14:54'),(19,49,'嘎嘎嘎',NULL,NULL,1,'admin',NULL,'2017-01-24 22:14:58',1,'2017-01-24 22:14:58'),(20,50,'屁股',NULL,NULL,1,'admin',NULL,'2017-01-24 22:15:08',1,'2017-01-24 22:15:08'),(21,49,'我很好啦~',NULL,NULL,1,'admin',NULL,'2017-01-24 22:16:02',1,'2017-01-24 22:16:02'),(22,53,'123',NULL,NULL,1,'admin',NULL,'2017-01-25 19:50:03',1,'2017-01-25 19:50:03'),(23,53,'432',NULL,NULL,1,'admin',NULL,'2017-01-25 19:50:06',1,'2017-01-25 19:50:06'),(24,53,'大声道',NULL,NULL,1,'admin',NULL,'2017-01-25 20:04:12',1,'2017-01-25 20:04:12'),(25,53,'😃 😃 😃 ',NULL,NULL,1,'admin',NULL,'2017-01-25 20:05:12',1,'2017-01-25 20:05:12'),(26,53,'😃 ',NULL,NULL,1,'admin',NULL,'2017-01-25 20:05:39',1,'2017-01-25 20:05:39'),(27,53,'131',NULL,NULL,1,'admin',NULL,'2017-01-25 21:27:33',1,'2017-01-25 21:27:33'),(28,53,'444',NULL,NULL,1,'admin',NULL,'2017-01-25 21:27:45',1,'2017-01-25 21:27:45'),(29,53,'444',NULL,NULL,1,'admin',NULL,'2017-01-25 21:27:49',1,'2017-01-25 21:27:49'),(30,53,'去去去',NULL,NULL,1,'admin',NULL,'2017-01-25 21:27:55',1,'2017-01-25 21:27:55'),(31,54,'133',NULL,NULL,1,'admin',NULL,'2017-01-25 21:30:39',1,'2017-01-25 21:30:39'),(32,54,'233',NULL,NULL,1,'admin',NULL,'2017-01-25 21:50:53',1,'2017-01-25 21:50:53'),(33,54,'445',NULL,NULL,1,'admin',NULL,'2017-01-25 21:50:56',1,'2017-01-25 21:50:56'),(34,54,'666',NULL,NULL,1,'admin',NULL,'2017-01-25 21:50:59',1,'2017-01-25 21:50:59'),(35,54,'777',NULL,NULL,1,'admin',NULL,'2017-01-25 21:51:03',1,'2017-01-25 21:51:03'),(36,54,'888',NULL,NULL,1,'admin',NULL,'2017-01-25 21:51:05',1,'2017-01-25 21:51:05'),(37,54,'999',NULL,NULL,1,'admin',NULL,'2017-01-25 21:51:08',1,'2017-01-25 21:51:08'),(38,54,'123',NULL,NULL,1,'admin',NULL,'2017-01-25 21:51:11',1,'2017-01-25 21:51:11'),(39,49,'2333',NULL,NULL,1,'admin',NULL,'2017-01-25 21:51:38',1,'2017-01-25 21:51:38'),(40,49,'4445',NULL,NULL,1,'admin',NULL,'2017-01-25 21:51:41',1,'2017-01-25 21:51:41'),(41,49,'124124',NULL,NULL,1,'admin',NULL,'2017-01-25 21:51:44',1,'2017-01-25 21:51:44'),(42,52,'法术',NULL,NULL,1,'admin',NULL,'2017-01-25 21:51:48',1,'2017-01-25 21:51:48'),(43,55,'发放',NULL,NULL,1,'admin',NULL,'2017-01-25 21:51:57',1,'2017-01-25 21:51:57'),(44,55,'123',NULL,NULL,1,'admin',NULL,'2017-01-25 22:28:03',1,'2017-01-25 22:28:03'),(45,55,'223',NULL,NULL,1,'admin',NULL,'2017-01-25 22:28:46',1,'2017-01-25 22:28:46'),(46,56,'1楼',NULL,NULL,1,'admin',NULL,'2017-01-28 14:42:56',1,'2017-01-28 14:42:56'),(47,56,'2楼',NULL,NULL,1,'admin',NULL,'2017-01-28 14:44:20',1,'2017-01-28 14:44:20'),(48,56,'3楼',NULL,NULL,1,'admin',NULL,'2017-01-28 15:40:03',1,'2017-01-28 15:40:03'),(49,56,'4楼',NULL,NULL,1,'admin',NULL,'2017-01-28 15:40:41',1,'2017-01-28 15:40:41'),(50,56,'5楼',NULL,NULL,1,'admin',NULL,'2017-01-28 15:51:14',1,'2017-01-28 15:51:14'),(51,56,'6楼',NULL,NULL,1,'admin',NULL,'2017-01-28 15:52:06',1,'2017-01-28 15:52:06'),(52,56,'7楼',NULL,NULL,1,'admin',NULL,'2017-01-28 15:56:18',1,'2017-01-28 15:56:18'),(53,56,'8楼',NULL,NULL,1,'admin',NULL,'2017-01-28 15:57:16',1,'2017-01-28 15:57:16'),(54,56,'123',NULL,NULL,1,'admin',NULL,'2017-01-28 15:58:05',1,'2017-01-28 15:58:05'),(55,56,'9楼',NULL,NULL,1,'admin',NULL,'2017-01-28 15:58:44',1,'2017-01-28 15:58:44'),(56,56,'10楼',NULL,NULL,1,'admin',NULL,'2017-01-28 15:58:53',1,'2017-01-28 15:58:53'),(57,56,'11楼',NULL,NULL,1,'admin',NULL,'2017-01-28 15:59:04',1,'2017-01-28 15:59:04'),(58,56,'12楼',NULL,NULL,1,'admin',NULL,'2017-01-28 15:59:10',1,'2017-01-28 15:59:10'),(59,56,'13楼',NULL,NULL,1,'admin',NULL,'2017-01-28 15:59:14',1,'2017-01-28 15:59:14'),(60,56,'14楼',NULL,NULL,1,'admin',NULL,'2017-01-28 16:03:26',1,'2017-01-28 16:03:26'),(61,56,'15楼',NULL,NULL,1,'admin',NULL,'2017-01-28 16:04:12',1,'2017-01-28 16:04:12'),(62,56,'16楼',NULL,NULL,1,'admin',NULL,'2017-01-28 16:04:16',1,'2017-01-28 16:04:16'),(63,56,'17楼',NULL,NULL,1,'admin',NULL,'2017-01-28 16:04:20',1,'2017-01-28 16:04:20'),(64,56,'18楼',NULL,NULL,1,'admin',NULL,'2017-01-28 16:04:25',1,'2017-01-28 16:04:25'),(65,56,'19楼',NULL,NULL,1,'admin',NULL,'2017-01-28 16:06:21',1,'2017-01-28 16:06:21'),(66,56,'20楼',NULL,NULL,1,'admin',NULL,'2017-01-28 16:06:30',1,'2017-01-28 16:06:30'),(67,56,'30楼',NULL,NULL,1,'admin',NULL,'2017-01-28 16:06:35',1,'2017-01-28 16:06:35'),(68,56,'20楼',NULL,NULL,1,'admin',NULL,'2017-01-28 16:07:18',1,'2017-01-28 16:07:18'),(69,56,'21楼',NULL,NULL,1,'admin',NULL,'2017-01-28 16:07:22',1,'2017-01-28 16:07:22'),(70,56,'22楼',NULL,NULL,1,'admin',NULL,'2017-01-28 16:07:28',1,'2017-01-28 16:07:28'),(71,56,'23楼',NULL,NULL,1,'admin',NULL,'2017-01-28 16:07:32',1,'2017-01-28 16:07:32'),(72,56,'24楼',NULL,NULL,1,'admin',NULL,'2017-01-28 16:07:36',1,'2017-01-28 16:07:36'),(73,56,'25楼',NULL,NULL,1,'admin',NULL,'2017-01-28 16:07:40',1,'2017-01-28 16:07:40'),(74,56,'26楼',NULL,NULL,1,'admin',NULL,'2017-01-28 16:07:45',1,'2017-01-28 16:07:45'),(75,56,'27楼',NULL,NULL,1,'admin',NULL,'2017-01-28 16:07:49',1,'2017-01-28 16:07:49'),(76,56,'28楼',NULL,NULL,1,'admin',NULL,'2017-01-28 16:07:53',1,'2017-01-28 16:07:53'),(77,56,'20楼',NULL,NULL,1,'admin',NULL,'2017-01-28 16:30:50',1,'2017-01-28 16:30:50'),(78,56,'21楼',NULL,NULL,1,'admin',NULL,'2017-01-28 16:30:55',1,'2017-01-28 16:30:55'),(79,55,'fdsf',NULL,NULL,1,'admin',NULL,'2017-01-28 17:46:22',1,'2017-01-28 17:46:22'),(80,55,'发的',NULL,NULL,1,'admin',NULL,'2017-01-28 17:47:37',1,'2017-01-28 17:47:37'),(81,56,'22楼',NULL,NULL,1,'admin',NULL,'2017-01-28 21:41:21',1,'2017-01-28 21:41:21'),(82,56,'23楼',NULL,NULL,1,'admin',NULL,'2017-01-28 21:41:24',1,'2017-01-28 21:41:24'),(83,56,'24楼',NULL,NULL,1,'admin',NULL,'2017-01-28 21:41:39',1,'2017-01-28 21:41:39'),(84,55,'2',NULL,NULL,1,'admin',NULL,'2017-01-28 21:41:51',1,'2017-01-28 21:41:51'),(85,56,'25楼',NULL,NULL,1,'admin',NULL,'2017-01-28 21:43:30',1,'2017-01-28 21:43:30'),(86,51,'你说什么就是什么咯',NULL,NULL,1,'admin',NULL,'2017-01-29 22:47:07',1,'2017-01-29 22:47:07'),(87,60,'1',NULL,NULL,1,'admin',NULL,'2017-01-31 14:01:22',1,'2017-01-31 14:01:22'),(88,60,'2',NULL,NULL,1,'admin',NULL,'2017-01-31 14:01:23',1,'2017-01-31 14:01:23'),(89,60,'3',NULL,NULL,1,'admin',NULL,'2017-01-31 14:01:25',1,'2017-01-31 14:01:25'),(90,60,'4',NULL,NULL,1,'admin',NULL,'2017-01-31 14:01:27',1,'2017-01-31 14:01:27'),(91,60,'5',NULL,NULL,1,'admin',NULL,'2017-01-31 14:01:28',1,'2017-01-31 14:01:28'),(92,60,'6',NULL,NULL,1,'admin',NULL,'2017-01-31 14:01:30',1,'2017-01-31 14:01:30'),(93,60,'7',NULL,NULL,1,'admin',NULL,'2017-01-31 14:01:31',1,'2017-01-31 14:01:31'),(94,60,'8',NULL,NULL,1,'admin',NULL,'2017-01-31 14:01:32',1,'2017-01-31 14:01:32'),(95,60,'9',NULL,NULL,1,'admin',NULL,'2017-01-31 14:01:34',1,'2017-01-31 14:01:34'),(96,60,'11',NULL,NULL,1,'admin',NULL,'2017-01-31 14:01:35',1,'2017-01-31 14:01:35'),(97,60,'发的',NULL,NULL,1,'admin',NULL,'2017-01-31 17:33:30',1,'2017-01-31 17:33:30'),(98,55,'你说的不错啊',NULL,NULL,1,'admin',NULL,'2017-01-31 18:42:20',1,'2017-01-31 18:42:20'),(99,55,'咳咳咳',NULL,NULL,1,'admin',NULL,'2017-01-31 18:42:25',1,'2017-01-31 18:42:25'),(100,55,'无论你肯或不肯',NULL,NULL,1,'admin',NULL,'2017-01-31 18:42:35',1,'2017-01-31 18:42:35'),(101,62,'我要说一个赞',NULL,NULL,1,'admin',NULL,'2017-01-31 18:43:25',1,'2017-01-31 18:43:25');

#
# Structure for table "locations"
#

DROP TABLE IF EXISTS `locations`;
CREATE TABLE `locations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `users_id` int(11) NOT NULL,
  `latitude` float DEFAULT NULL,
  `longitude` float DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`,`users_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

#
# Data for table "locations"
#


#
# Structure for table "replies"
#

DROP TABLE IF EXISTS `replies`;
CREATE TABLE `replies` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content` text,
  `agrees` int(11) DEFAULT NULL,
  `replies` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `created_name` varchar(64) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

#
# Data for table "replies"
#


#
# Structure for table "topic_categories"
#

DROP TABLE IF EXISTS `topic_categories`;
CREATE TABLE `topic_categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(64) DEFAULT NULL,
  `order` int(11) DEFAULT NULL COMMENT '分类排序,数字大排前面',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

#
# Data for table "topic_categories"
#


#
# Structure for table "topics"
#

DROP TABLE IF EXISTS `topics`;
CREATE TABLE `topics` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `status` enum('0','1','2') DEFAULT '0' COMMENT '0正常 1草稿 2删除',
  `category_id` int(11) DEFAULT NULL,
  `title` varchar(128) DEFAULT NULL,
  `content` text,
  `views` int(11) DEFAULT '0',
  `comments` int(11) DEFAULT '0',
  `created_by` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL,
  `modified_at` datetime DEFAULT NULL,
  `last_reply_by` int(11) DEFAULT NULL,
  `last_reply_name` varchar(64) DEFAULT NULL,
  `last_reply_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=65 DEFAULT CHARSET=utf8mb4;

#
# Data for table "topics"
#

INSERT INTO `topics` VALUES (49,'0',1,'你好啊~','赫赫和小脸',0,5,1,'2017-01-24 18:18:02',1,'2017-01-24 18:18:02',1,'admin','2017-01-25 21:51:44'),(50,'0',1,'12','12',0,1,1,'2017-01-24 18:18:56',1,'2017-01-24 18:18:56',1,'admin','2017-01-24 22:15:08'),(51,'0',1,'12','12',1,2,1,'2017-01-24 18:18:56',1,'2017-01-24 18:18:56',1,'admin','2017-01-29 22:47:07'),(52,'0',1,'今天我的绒衫~','咳咳咳',0,5,1,'2017-01-24 21:41:46',1,'2017-01-24 21:41:46',1,'admin','2017-01-25 21:51:48'),(53,'0',1,'fasf','asfas',0,6,1,'2017-01-25 19:32:23',1,'2017-01-25 19:32:23',1,'admin','2017-01-25 21:27:55'),(54,'0',1,'哥哥哥','',0,8,1,'2017-01-25 21:30:24',1,'2017-01-25 21:30:24',1,'admin','2017-01-25 21:51:11'),(55,'0',1,'法术','法术',0,9,1,'2017-01-25 21:51:54',1,'2017-01-25 21:51:54',1,'admin','2017-01-31 18:42:35'),(56,'0',1,'好开森','我是内容',0,37,1,'2017-01-28 14:42:47',1,'2017-01-28 14:42:47',1,'admin','2017-01-28 21:43:30'),(57,'0',1,'大声道','大声道按时缴费\n\n碍事的金坷垃技术对',0,0,1,'2017-01-31 11:30:24',1,'2017-01-31 11:30:24',1,'admin','2017-01-31 11:30:24'),(58,'0',1,'','',0,0,1,'2017-01-31 11:33:42',1,'2017-01-31 11:33:42',1,'admin','2017-01-31 11:33:42'),(59,'0',1,'只能说你输了','只能说你输了',0,0,1,'2017-01-31 11:34:04',1,'2017-01-31 11:34:04',1,'admin','2017-01-31 11:34:04'),(60,'0',1,'么可与','的骄傲咳嗽了\n\n按时付款解放军\n\n发神经开了房间',0,11,1,'2017-01-31 14:01:05',1,'2017-01-31 14:01:05',1,'admin','2017-01-31 17:33:30'),(61,'0',1,'的撒多','大声道\n\n发顺丰三\n\n\n发顺丰飒飒大师的',0,0,1,'2017-01-31 17:36:17',1,'2017-01-31 17:36:17',1,'admin','2017-01-31 17:36:17'),(62,'0',1,'发生大','大声道',0,1,1,'2017-01-31 18:43:12',1,'2017-01-31 18:43:12',1,'admin','2017-01-31 18:43:25'),(63,'0',1,'','',0,0,1,'2017-02-03 12:58:14',1,'2017-02-03 12:58:14',1,'admin','2017-02-03 12:58:14'),(64,'0',1,'','',0,0,1,'2017-02-03 12:58:18',1,'2017-02-03 12:58:18',1,'admin','2017-02-03 12:58:18');

#
# Structure for table "users"
#

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nickname` varchar(64) NOT NULL,
  `avatar` varchar(256) DEFAULT NULL,
  `sign_up` datetime DEFAULT NULL,
  `last_sign_in` datetime DEFAULT NULL,
  `email` varchar(256) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4;

#
# Data for table "users"
#

INSERT INTO `users` VALUES (1,'admin',NULL,NULL,NULL,NULL,NULL),(10,'chzhbob@gmail.com',NULL,'2017-02-03 21:46:33',NULL,'chzhbob@gmail.com','91c7b042e7f4bf1a41581ccd11dd2e87801db94d0b1113f7affb9246bbed5788'),(11,'fasf',NULL,'2017-02-04 17:21:45',NULL,'fasf','cefa5c9d28a05928d13ee5d080ae1cfa2ab2bebbe189146edbf66b70ca9ee09e'),(12,'123',NULL,'2017-02-04 17:23:11',NULL,'123','1c9f4071ca677fcd70ae2a621c1bd653a8f4e59de97e091f3bfb0ff00d3d4c2e');
