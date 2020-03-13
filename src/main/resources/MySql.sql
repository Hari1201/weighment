-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               5.5.49 - MySQL Community Server (GPL)
-- Server OS:                    Win64
-- HeidiSQL Version:             9.3.0.4984
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Dumping database structure for weighment_db
CREATE DATABASE IF NOT EXISTS `weighment_db` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `weighment_db`;


-- Dumping structure for table weighment_db.customer_details
CREATE TABLE IF NOT EXISTS `customer_details` (
  `customer_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `customer_name` varchar(100) NOT NULL,
  `customer_phone` varchar(10) DEFAULT NULL,
  `created_date` datetime NOT NULL,
  `updated_date` datetime DEFAULT NULL,
  PRIMARY KEY (`customer_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

-- Dumping data for table weighment_db.customer_details: ~3 rows (approximately)
/*!40000 ALTER TABLE `customer_details` DISABLE KEYS */;
INSERT INTO `customer_details` (`customer_id`, `customer_name`, `customer_phone`, `created_date`, `updated_date`) VALUES
	(5, 'HARI1', '000000', '2020-03-09 22:24:17', '2020-03-10 23:29:29'),
	(6, 'HHH', '123456789', '2020-03-10 23:45:06', NULL),
	(7, 'HHeeH', '123456789', '2020-03-11 01:07:39', NULL);
/*!40000 ALTER TABLE `customer_details` ENABLE KEYS */;


-- Dumping structure for table weighment_db.product_details
CREATE TABLE IF NOT EXISTS `product_details` (
  `product_id` bigint(20) NOT NULL,
  `product_name` varchar(50) NOT NULL,
  `product_rate` varchar(50) DEFAULT NULL,
  `created_date` datetime NOT NULL,
  `updated_date` datetime DEFAULT NULL,
  PRIMARY KEY (`product_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table weighment_db.product_details: ~3 rows (approximately)
/*!40000 ALTER TABLE `product_details` DISABLE KEYS */;
INSERT INTO `product_details` (`product_id`, `product_name`, `product_rate`, `created_date`, `updated_date`) VALUES
	(1, 'sand', '1000', '2020-03-09 14:04:01', NULL),
	(2, 'jalli', '500', '2020-03-09 14:04:22', NULL),
	(3, 'Msand', NULL, '2020-03-09 14:04:36', NULL);
/*!40000 ALTER TABLE `product_details` ENABLE KEYS */;


-- Dumping structure for table weighment_db.ticket
CREATE TABLE IF NOT EXISTS `ticket` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `amount` double NOT NULL,
  `catagory` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

-- Dumping data for table weighment_db.ticket: ~1 rows (approximately)
/*!40000 ALTER TABLE `ticket` DISABLE KEYS */;
INSERT INTO `ticket` (`id`, `amount`, `catagory`) VALUES
	(10, 3, NULL);
/*!40000 ALTER TABLE `ticket` ENABLE KEYS */;


-- Dumping structure for table weighment_db.user
CREATE TABLE IF NOT EXISTS `user` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(45) NOT NULL DEFAULT '',
  `email` varchar(45) NOT NULL DEFAULT '',
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- Dumping data for table weighment_db.user: ~1 rows (approximately)
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` (`user_id`, `user_name`, `email`) VALUES
	(1, 'fgdfg', 'fdgdfg');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;


-- Dumping structure for table weighment_db.vehicle_details
CREATE TABLE IF NOT EXISTS `vehicle_details` (
  `vechile_id` bigint(20) NOT NULL,
  `vehicle_number` varchar(50) NOT NULL,
  `vehicle_name` varchar(50) DEFAULT NULL,
  `created_date` datetime NOT NULL,
  `updated_date` datetime DEFAULT NULL,
  PRIMARY KEY (`vechile_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table weighment_db.vehicle_details: ~4 rows (approximately)
/*!40000 ALTER TABLE `vehicle_details` DISABLE KEYS */;
INSERT INTO `vehicle_details` (`vechile_id`, `vehicle_number`, `vehicle_name`, `created_date`, `updated_date`) VALUES
	(1, 'TN11AB1928', 'TATA', '2020-03-09 13:48:05', '2020-03-09 13:48:13'),
	(2, 'TN22CZ1919', 'Leyland', '2020-03-09 13:53:40', NULL),
	(3, 'TN23HD2928', 'TATA', '2020-03-09 13:54:04', '2020-03-09 13:54:06'),
	(4, 'TN45DF9393', NULL, '2020-03-09 13:54:29', NULL);
/*!40000 ALTER TABLE `vehicle_details` ENABLE KEYS */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
