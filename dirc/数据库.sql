-- --------------------------------------------------------
-- 主机:                           127.0.0.1
-- 服务器版本:                        5.5.53 - MySQL Community Server (GPL)
-- 服务器操作系统:                      Win32
-- HeidiSQL 版本:                  9.5.0.5220
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- 导出 vuepro 的数据库结构
CREATE DATABASE IF NOT EXISTS `vuepro` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `vuepro`;

-- 导出  表 vuepro.cp1-messager 结构
CREATE TABLE IF NOT EXISTS `cp1-messager` (
  `id` int(11) NOT NULL,
  `username` varchar(50) DEFAULT NULL,
  `pwd` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='产品1的管理员列表';

-- 正在导出表  vuepro.cp1-messager 的数据：0 rows
/*!40000 ALTER TABLE `cp1-messager` DISABLE KEYS */;
/*!40000 ALTER TABLE `cp1-messager` ENABLE KEYS */;

-- 导出  表 vuepro.cp1-student 结构
CREATE TABLE IF NOT EXISTS `cp1-student` (
  `id` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `uid` varchar(50) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `img` varchar(500) DEFAULT NULL,
  `class` varchar(500) DEFAULT NULL,
  `grade` varchar(500) DEFAULT NULL,
  `sex` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='产品1的学生基本信息表';

-- 正在导出表  vuepro.cp1-student 的数据：0 rows
/*!40000 ALTER TABLE `cp1-student` DISABLE KEYS */;
/*!40000 ALTER TABLE `cp1-student` ENABLE KEYS */;

-- 导出  表 vuepro.cp1-teacher 结构
CREATE TABLE IF NOT EXISTS `cp1-teacher` (
  `id` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `img` varchar(500) DEFAULT NULL,
  `zhicheng` varchar(500) DEFAULT NULL,
  `sex` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='产品1的教师表';

-- 正在导出表  vuepro.cp1-teacher 的数据：0 rows
/*!40000 ALTER TABLE `cp1-teacher` DISABLE KEYS */;
/*!40000 ALTER TABLE `cp1-teacher` ENABLE KEYS */;

-- 导出  表 vuepro.cp1-testdef 结构
CREATE TABLE IF NOT EXISTS `cp1-testdef` (
  `id` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `class` varchar(50) DEFAULT NULL,
  `grade` varchar(50) DEFAULT NULL,
  `fenshu` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='产品1的默认拥有的考试信息表';

-- 正在导出表  vuepro.cp1-testdef 的数据：0 rows
/*!40000 ALTER TABLE `cp1-testdef` DISABLE KEYS */;
/*!40000 ALTER TABLE `cp1-testdef` ENABLE KEYS */;

-- 导出  表 vuepro.goods 结构
CREATE TABLE IF NOT EXISTS `goods` (
  `id` int(11) NOT NULL,
  `GoodsName` varchar(50) DEFAULT NULL,
  `jiekou` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='网站提供的产品的基本信息';

-- 正在导出表  vuepro.goods 的数据：0 rows
/*!40000 ALTER TABLE `goods` DISABLE KEYS */;
/*!40000 ALTER TABLE `goods` ENABLE KEYS */;

-- 导出  表 vuepro.testlist 结构
CREATE TABLE IF NOT EXISTS `testlist` (
  `id` int(11) NOT NULL,
  `testname` varchar(50) DEFAULT NULL,
  `grade` varchar(50) DEFAULT NULL,
  `text` varchar(500) DEFAULT NULL,
  `date` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='考试列表';

-- 正在导出表  vuepro.testlist 的数据：0 rows
/*!40000 ALTER TABLE `testlist` DISABLE KEYS */;
/*!40000 ALTER TABLE `testlist` ENABLE KEYS */;

-- 导出  表 vuepro.user 结构
CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) DEFAULT NULL,
  `tel` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `img` varchar(500) DEFAULT NULL,
  `text` varchar(500) DEFAULT NULL,
  `pwd` varchar(50) DEFAULT NULL,
  `sex` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COMMENT='存储网站的用户信息';

-- 正在导出表  vuepro.user 的数据：3 rows
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` (`id`, `username`, `tel`, `email`, `img`, `text`, `pwd`, `sex`) VALUES
	(1, 'jack', '13122332145', '24333@qq.com', NULL, '这个人什么也没写', '123', '男'),
	(2, NULL, NULL, '123@qq.com', NULL, NULL, '234', NULL),
	(3, NULL, NULL, '2333@qq.com', NULL, NULL, '123', NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;

-- 导出  表 vuepro.xiangmu 结构
CREATE TABLE IF NOT EXISTS `xiangmu` (
  `id` int(11) NOT NULL,
  `route` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='服务大厅的服务项目表';

-- 正在导出表  vuepro.xiangmu 的数据：0 rows
/*!40000 ALTER TABLE `xiangmu` DISABLE KEYS */;
/*!40000 ALTER TABLE `xiangmu` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
