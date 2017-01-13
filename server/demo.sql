/*
SQLyog Ultimate v11.24 (32 bit)
MySQL - 5.6.17 : Database - vchat
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`vchat` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_german2_ci */;

USE `vchat`;

/*Table structure for table `comments` */

DROP TABLE IF EXISTS `comments`;

CREATE TABLE `comments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content` text COLLATE utf8mb4_german2_ci,
  `agrees` int(11) DEFAULT NULL,
  `replies` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `created_name` varchar(64) COLLATE utf8mb4_german2_ci DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL,
  `modified_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_german2_ci;

/*Data for the table `comments` */

insert  into `comments`(`id`,`content`,`agrees`,`replies`,`created_by`,`created_name`,`created_at`,`modified_by`,`modified_at`) values (1,'i am comment No. 1',1,2,1,'admin','2017-01-12 14:52:50',NULL,NULL);

/*Table structure for table `locations` */

DROP TABLE IF EXISTS `locations`;

CREATE TABLE `locations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `users_id` int(11) NOT NULL,
  `latitude` float DEFAULT NULL,
  `longitude` float DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`,`users_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_german2_ci;

/*Data for the table `locations` */

/*Table structure for table `replies` */

DROP TABLE IF EXISTS `replies`;

CREATE TABLE `replies` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content` text COLLATE utf8mb4_german2_ci,
  `agrees` int(11) DEFAULT NULL,
  `replies` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `created_name` varchar(64) COLLATE utf8mb4_german2_ci DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_german2_ci;

/*Data for the table `replies` */

/*Table structure for table `topic_categories` */

DROP TABLE IF EXISTS `topic_categories`;

CREATE TABLE `topic_categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(64) COLLATE utf8mb4_german2_ci DEFAULT NULL,
  `order` int(11) DEFAULT NULL COMMENT '分类排序,数字大排前面',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_german2_ci;

/*Data for the table `topic_categories` */

insert  into `topic_categories`(`id`,`name`,`order`) values (1,'综合讨论区',1),(2,'吐槽反馈区',2),(3,'互助区',3);

/*Table structure for table `topics` */

DROP TABLE IF EXISTS `topics`;

CREATE TABLE `topics` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category_id` int(11) DEFAULT NULL,
  `title` varchar(128) COLLATE utf8mb4_german2_ci DEFAULT NULL,
  `content` text COLLATE utf8mb4_german2_ci,
  `views` int(11) DEFAULT NULL,
  `comments` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL,
  `modified_at` datetime DEFAULT NULL,
  `last_reply_by` int(11) DEFAULT NULL,
  `last_reply_name` varchar(64) COLLATE utf8mb4_german2_ci DEFAULT NULL,
  `last_reply_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_german2_ci;

/*Data for the table `topics` */

insert  into `topics`(`id`,`category_id`,`title`,`content`,`views`,`comments`,`created_by`,`created_at`,`modified_by`,`modified_at`,`last_reply_by`,`last_reply_name`,`last_reply_at`) values (1,1,'hello world','why here',0,0,1,'2017-01-13 14:51:01',1,'2017-01-13 14:51:11',NULL,NULL,NULL);

/*Table structure for table `users` */

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nickname` varchar(64) COLLATE utf8mb4_german2_ci NOT NULL,
  `avatar` varchar(256) COLLATE utf8mb4_german2_ci DEFAULT NULL,
  `sign_up` datetime DEFAULT NULL,
  `last_sign_in` datetime DEFAULT NULL,
  `email` varchar(256) COLLATE utf8mb4_german2_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_german2_ci;

/*Data for the table `users` */

insert  into `users`(`id`,`nickname`,`avatar`,`sign_up`,`last_sign_in`,`email`) values (1,'admin',NULL,NULL,NULL,NULL);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
