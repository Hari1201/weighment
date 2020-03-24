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
  `product_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `product_name` varchar(50) NOT NULL,
  `product_rate` varchar(50) DEFAULT NULL,
  `created_date` datetime NOT NULL,
  `updated_date` datetime DEFAULT NULL,
  PRIMARY KEY (`product_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- Dumping data for table weighment_db.product_details: ~3 rows (approximately)
/*!40000 ALTER TABLE `product_details` DISABLE KEYS */;
INSERT INTO `product_details` (`product_id`, `product_name`, `product_rate`, `created_date`, `updated_date`) VALUES
	(1, 'sand', '1000', '2020-03-09 14:04:01', NULL),
	(2, 'jalli', '500', '2020-03-09 14:04:22', NULL),
	(3, 'Msand', NULL, '2020-03-09 14:04:36', NULL);
/*!40000 ALTER TABLE `product_details` ENABLE KEYS */;


-- Dumping structure for table weighment_db.vehicle_details
CREATE TABLE IF NOT EXISTS `vehicle_details` (
  `vechile_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `vehicle_number` varchar(50) NOT NULL,
  `vehicle_name` varchar(50) DEFAULT NULL,
  `tare_weight` decimal(10,0) NOT NULL,
  `updated_date` datetime DEFAULT NULL,
  `created_date` datetime NOT NULL,
  PRIMARY KEY (`vechile_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

-- Dumping data for table weighment_db.vehicle_details: ~4 rows (approximately)
/*!40000 ALTER TABLE `vehicle_details` DISABLE KEYS */;
INSERT INTO `vehicle_details` (`vechile_id`, `vehicle_number`, `vehicle_name`, `tare_weight`, `updated_date`, `created_date`) VALUES
	(1, 'TN11AB1928', 'TATA', 0, '2020-03-09 13:48:13', '2020-03-09 13:48:05'),
	(2, 'TN22CZ1919', 'Leyland', 0, NULL, '2020-03-09 13:53:40'),
	(3, 'TN23HD2928', 'TATA', 0, '2020-03-09 13:54:06', '2020-03-09 13:54:04'),
	(4, 'TN45DF9393', NULL, 0, NULL, '2020-03-09 13:54:29');
/*!40000 ALTER TABLE `vehicle_details` ENABLE KEYS */;


-- Dumping structure for table weighment_db.weighment_entry_details
CREATE TABLE IF NOT EXISTS `weighment_entry_details` (
  `wei_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `vehicle_id` bigint(20) NOT NULL,
  `customer_id` bigint(20) NOT NULL,
  `product_id` bigint(20) NOT NULL,
  `gross_weight` decimal(10,0) NOT NULL,
  `gross_date` datetime NOT NULL,
  `net_weight` decimal(10,0) NOT NULL,
  `rate` decimal(10,0) NOT NULL,
  `amount` decimal(10,0) NOT NULL,
  `pay_mode` varchar(20) NOT NULL,
  `created_date` datetime NOT NULL,
  PRIMARY KEY (`wei_id`),
  KEY `FK2_customer` (`customer_id`),
  KEY `FK3_product` (`product_id`),
  KEY `FK3_vehicle` (`vehicle_id`),
  CONSTRAINT `FK2_customer` FOREIGN KEY (`customer_id`) REFERENCES `customer_details` (`customer_id`),
  CONSTRAINT `FK3_product` FOREIGN KEY (`product_id`) REFERENCES `product_details` (`product_id`),
  CONSTRAINT `FK3_vehicle` FOREIGN KEY (`vehicle_id`) REFERENCES `vehicle_details` (`vechile_id`),
  CONSTRAINT `FKk8q68grarb9uptyjfrrrg1jcq` FOREIGN KEY (`product_id`) REFERENCES `product_details` (`product_id`),
  CONSTRAINT `FKp0j0c77kssi78mrpr4v705c7e` FOREIGN KEY (`vehicle_id`) REFERENCES `vehicle_details` (`vechile_id`),
  CONSTRAINT `FKpbeydw9t6qeq7mgkrgsgrkqo` FOREIGN KEY (`customer_id`) REFERENCES `customer_details` (`customer_id`)
) ENGINE=InnoDB AUTO_INCREMENT=74 DEFAULT CHARSET=latin1;

-- Dumping data for table weighment_db.weighment_entry_details: ~51 rows (approximately)
/*!40000 ALTER TABLE `weighment_entry_details` DISABLE KEYS */;
INSERT INTO `weighment_entry_details` (`wei_id`, `vehicle_id`, `customer_id`, `product_id`, `gross_weight`, `gross_date`, `net_weight`, `rate`, `amount`, `pay_mode`, `created_date`) VALUES
	(1, 1, 5, 2, 34324, '2020-03-14 00:48:09', 32323, 32, 32322, 'AMOUNT', '2020-03-14 00:48:35'),
	(2, 1, 5, 1, 534534, '2020-03-14 17:50:01', 45345, 2, 11, 'AMOUNT', '2020-03-14 17:52:19'),
	(3, 1, 5, 1, 534534, '2020-03-14 17:50:01', 45345, 2, 11, 'AMOUNT', '2020-03-14 17:54:11'),
	(4, 1, 5, 1, 534534, '2020-03-14 17:50:01', 45345, 2, 11, 'AMOUNT', '2020-03-14 17:55:44'),
	(5, 1, 5, 1, 0, '2020-03-14 17:50:01', 45345, 2, 11, 'AMOUNT', '2020-03-14 18:35:27'),
	(6, 1, 5, 1, 0, '2020-03-14 17:50:01', 45345, 2, 11, 'AMOUNT', '2020-03-14 18:37:27'),
	(7, 1, 5, 1, 1, '2020-03-13 17:50:01', 45345, 2, 11, 'AMOUNT', '2020-03-14 18:54:36'),
	(8, 1, 5, 1, 1, '2020-03-13 17:50:01', 45345, 2, 11, 'AMOUNT', '2020-03-14 19:04:11'),
	(9, 1, 5, 1, 1, '2020-03-13 17:50:01', 45345, 2, 23452534, 'AMOUNT', '2020-03-14 19:04:33'),
	(10, 1, 5, 1, 1, '2020-03-13 17:50:01', 45345, 2, 23452534, 'AMOUNT', '2020-03-14 19:36:19'),
	(11, 1, 5, 1, 1, '2020-03-13 17:50:01', 45345, 2, 23452534, 'AMOUNT', '2020-03-14 19:38:26'),
	(15, 1, 5, 1, 1, '2020-03-13 17:50:01', 45345, 2, 23452534, 'AMOUNT', '2020-03-14 19:56:17'),
	(16, 1, 5, 1, 1, '2020-03-13 17:50:01', 45345, 2, 23452534, 'AMOUNT', '2020-03-14 19:59:26'),
	(17, 1, 5, 1, 1, '2020-03-13 17:50:01', 45345, 2, 23452534, 'AMOUNT', '2020-03-14 19:59:39'),
	(18, 1, 5, 1, 1, '2020-03-13 17:50:01', 45345, 2, 23452534, 'AMOUNT', '2020-03-14 19:59:45'),
	(19, 1, 5, 1, 1, '2020-03-13 17:50:01', 45345, 2, 23452534, 'AMOUNT', '2020-03-14 20:00:10'),
	(20, 1, 5, 1, 1, '2020-03-13 17:50:01', 45345, 2, 23452534, 'AMOUNT', '2020-03-14 20:00:51'),
	(23, 1, 5, 1, 1, '2020-03-13 17:50:01', 45345, 2, 23452534, 'AMOUNT', '2020-03-14 20:11:09'),
	(24, 1, 7, 1, 10, '2020-03-14 21:26:22', 2, 34353, 10, 'CREDIT BILL', '2020-03-14 21:28:07'),
	(25, 1, 7, 1, 10, '2020-03-14 21:26:22', 2, 34353, 10, 'CREDIT BILL', '2020-03-14 21:30:17'),
	(26, 1, 7, 1, 10, '2020-03-14 21:26:22', 2, 34353, 10, 'CREDIT BILL', '2020-03-14 21:30:18'),
	(27, 1, 7, 1, 10, '2020-03-14 21:26:22', 2, 34353, 10, 'CREDIT BILL', '2020-03-14 21:31:02'),
	(28, 1, 7, 1, 10, '2020-03-14 21:26:22', 2, 34353, 10, 'CREDIT BILL', '2020-03-14 21:33:35'),
	(29, 1, 7, 1, 10, '2020-03-14 21:26:22', 2, 34353, 10, 'CREDIT BILL', '2020-03-14 21:38:04'),
	(31, 1, 7, 1, 10, '2020-03-14 21:26:22', 2, 34353, 10, 'CREDIT BILL', '2020-03-14 21:40:32'),
	(32, 1, 7, 1, 10, '2020-03-14 21:26:22', 2, 34353, 10, 'CREDIT BILL', '2020-03-14 21:43:05'),
	(33, 1, 7, 1, 10, '2020-03-14 21:26:22', 2, 34353, 10, 'CREDIT BILL', '2020-03-14 21:43:52'),
	(34, 1, 7, 1, 10, '2020-03-14 21:26:22', 2, 34353, 10, 'CREDIT BILL', '2020-03-14 21:45:03'),
	(35, 1, 7, 1, 10, '2020-03-14 21:26:22', 2, 34353, 10, 'CREDIT BILL', '2020-03-14 21:50:46'),
	(37, 1, 7, 1, 10, '2020-03-14 21:26:22', 2, 34353, 10, 'CREDIT BILL', '2020-03-14 21:52:32'),
	(38, 1, 7, 1, 10, '2020-03-14 21:26:22', 2, 34353, 10, 'CREDIT BILL', '2020-03-14 21:54:09'),
	(39, 1, 7, 1, 10, '2020-03-14 21:26:22', 2, 34353, 10, 'CREDIT BILL', '2020-03-14 21:55:45'),
	(46, 1, 7, 1, 10, '2020-03-14 21:26:22', 2, 34353, 1212, 'CREDIT BILL', '2020-03-14 22:04:43'),
	(56, 1, 7, 1, 10, '2020-03-14 21:26:22', 2, 34353, 1212, 'CREDIT BILL', '2020-03-14 22:55:14'),
	(57, 1, 7, 1, 10, '2020-03-14 21:26:22', 2, 34353, 1212, 'CREDIT BILL', '2020-03-14 22:55:55'),
	(58, 1, 5, 1, 56, '2020-03-20 00:38:20', 5405, 11, 6760, 'AMOUNT', '2020-03-20 00:39:13'),
	(59, 1, 5, 1, 56, '2020-03-20 00:38:20', 5405, 11, 6760, 'AMOUNT', '2020-03-20 00:41:13'),
	(60, 1, 5, 1, 56, '2020-03-20 00:38:20', 5405, 11, 6760, 'AMOUNT', '2020-03-20 00:43:08'),
	(61, 1, 5, 1, 56, '2020-03-20 00:38:20', 5405, 11, 6760, 'AMOUNT', '2020-03-20 00:49:32'),
	(62, 1, 5, 1, 56, '2020-03-20 00:38:20', 5405, 11, 6760, 'AMOUNT', '2020-03-20 00:51:59'),
	(63, 1, 5, 1, 56, '2020-03-20 00:38:20', 5405, 11, 6760, 'AMOUNT', '2020-03-20 00:52:49'),
	(64, 1, 5, 1, 56, '2020-03-20 00:38:20', 5405, 11, 6760, 'AMOUNT', '2020-03-20 01:03:14'),
	(65, 1, 5, 1, 56, '2020-03-20 00:38:20', 5405, 11, 6760, 'AMOUNT', '2020-03-20 01:08:09'),
	(66, 1, 5, 1, 56, '2020-03-20 00:38:20', 5405, 11, 6760, 'AMOUNT', '2020-03-20 01:12:24'),
	(67, 1, 5, 1, 56, '2020-03-20 00:38:20', 5405, 11, 6760, 'AMOUNT', '2020-03-20 01:15:25'),
	(68, 1, 5, 1, 56, '2020-03-20 00:38:20', 5405, 11, 6760, 'AMOUNT', '2020-03-20 01:23:38'),
	(69, 1, 5, 1, 56, '2020-03-20 00:38:20', 5405, 11, 6760, 'AMOUNT', '2020-03-20 01:25:41'),
	(70, 1, 5, 1, 56, '2020-03-20 00:38:20', 5405, 11, 6760, 'AMOUNT', '2020-03-20 01:27:09'),
	(71, 1, 5, 1, 56, '2020-03-20 00:38:20', 5405, 11, 6760, 'AMOUNT', '2020-03-20 01:28:27'),
	(72, 1, 5, 1, 56, '2020-03-20 00:38:20', 5405, 11, 6760, 'AMOUNT', '2020-03-20 01:43:53'),
	(73, 1, 5, 1, 56, '2020-03-20 00:38:20', 5405, 11, 6760, 'AMOUNT', '2020-03-20 01:47:19');
/*!40000 ALTER TABLE `weighment_entry_details` ENABLE KEYS */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
