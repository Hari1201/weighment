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
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;

-- Dumping data for table weighment_db.customer_details: ~3 rows (approximately)
/*!40000 ALTER TABLE `customer_details` DISABLE KEYS */;
INSERT INTO `customer_details` (`customer_id`, `customer_name`, `customer_phone`, `created_date`, `updated_date`) VALUES
	(8, 'Usha Transport', '7358687731', '2020-03-22 21:14:42', '2020-03-22 21:14:55'),
	(9, 'Sandhya Transport', '9940292523', '2020-03-22 21:48:52', NULL),
	(11, 'jks', '9790747337', '2020-03-22 22:45:47', NULL);
/*!40000 ALTER TABLE `customer_details` ENABLE KEYS */;


-- Dumping structure for table weighment_db.product_details
CREATE TABLE IF NOT EXISTS `product_details` (
  `product_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `product_name` varchar(50) NOT NULL,
  `product_rate` varchar(50) DEFAULT NULL,
  `created_date` datetime NOT NULL,
  `updated_date` datetime DEFAULT NULL,
  PRIMARY KEY (`product_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;

-- Dumping data for table weighment_db.product_details: ~5 rows (approximately)
/*!40000 ALTER TABLE `product_details` DISABLE KEYS */;
INSERT INTO `product_details` (`product_id`, `product_name`, `product_rate`, `created_date`, `updated_date`) VALUES
	(8, 'SAND', '', '2020-03-22 21:16:13', '2020-03-22 23:14:26'),
	(9, '20mm', '', '2020-03-22 22:23:14', '2020-03-22 23:14:36'),
	(10, 'wm/sand', '850', '2020-03-22 22:46:03', '2020-03-22 22:47:03'),
	(11, 'YR6YTR', 'RTYRTY', '2020-03-22 23:00:32', NULL),
	(12, '54756756', '', '2020-03-22 23:10:41', '2020-03-22 23:11:18');
/*!40000 ALTER TABLE `product_details` ENABLE KEYS */;


-- Dumping structure for table weighment_db.vehicle_details
CREATE TABLE IF NOT EXISTS `vehicle_details` (
  `vehicle_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `vehicle_number` varchar(50) NOT NULL,
  `vehicle_name` varchar(50) DEFAULT NULL,
  `tare_weight` decimal(10,0) NOT NULL,
  `updated_date` datetime DEFAULT NULL,
  `created_date` datetime NOT NULL,
  PRIMARY KEY (`vehicle_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;

-- Dumping data for table weighment_db.vehicle_details: ~5 rows (approximately)
/*!40000 ALTER TABLE `vehicle_details` DISABLE KEYS */;
INSERT INTO `vehicle_details` (`vehicle_id`, `vehicle_number`, `vehicle_name`, `tare_weight`, `updated_date`, `created_date`) VALUES
	(8, 'TN11CZ1919', 'TATA', 15, '2020-03-24 02:53:39', '2020-03-22 21:15:32'),
	(9, 'TN22AB9228', 'TATA', 4880, '2020-03-22 23:15:04', '2020-03-22 22:23:49'),
	(10, 'TN11U8663', NULL, 4870, NULL, '2020-03-22 22:47:25'),
	(11, 'RYRY', '', 657567, NULL, '2020-03-22 23:01:12'),
	(12, 'HFHDFHD', 'FHFGHFGH', 45454, NULL, '2020-03-22 23:01:50');
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
  `token_no` bigint(20) NOT NULL,
  PRIMARY KEY (`wei_id`),
  KEY `FK2_customer` (`customer_id`),
  KEY `FK3_product` (`product_id`),
  KEY `FK3_vehicle` (`vehicle_id`)
) ENGINE=InnoDB AUTO_INCREMENT=97 DEFAULT CHARSET=latin1;

-- Dumping data for table weighment_db.weighment_entry_details: ~19 rows (approximately)
/*!40000 ALTER TABLE `weighment_entry_details` DISABLE KEYS */;
INSERT INTO `weighment_entry_details` (`wei_id`, `vehicle_id`, `customer_id`, `product_id`, `gross_weight`, `gross_date`, `net_weight`, `rate`, `amount`, `pay_mode`, `created_date`, `token_no`) VALUES
	(78, 8, 8, 8, 30, '2020-03-10 05:30:00', 15, 20, 300, 'CREDIT BILL', '2020-03-22 21:18:14', 0),
	(79, 8, 8, 9, 458, '2020-03-12 05:30:00', 443, 48, 21264, 'CREDIT BILL', '2020-03-22 22:37:31', 0),
	(80, 8, 8, 9, 87, '2020-03-05 05:30:00', 72, 1, 72, 'CREDIT BILL', '2020-03-22 22:40:09', 0),
	(81, 8, 8, 9, 895, '2020-03-06 05:30:00', 880, 8, 7040, 'CREDIT BILL', '2020-03-22 22:42:55', 0),
	(82, 8, 8, 9, 895, '2020-03-06 05:30:00', 880, 8, 7040, 'CREDIT BILL', '2020-03-22 22:44:57', 0),
	(83, 10, 11, 10, 13280, '2020-03-22 05:30:00', 8410, 1, 7149, 'CREDIT BILL', '2020-03-22 22:48:07', 0),
	(84, 8, 8, 8, 25, '2020-03-11 05:30:00', 10, 4, 40, 'CREDIT BILL', '2020-03-23 09:47:09', 0),
	(85, 8, 8, 11, 47, '2020-03-12 05:30:00', 32, 4, 128, 'CREDIT BILL', '2020-03-23 10:10:00', 0),
	(86, 8, 8, 11, 78, '2020-02-12 03:06:00', 63, 4, 252, 'CREDIT BILL', '2020-03-23 10:28:15', 0),
	(87, 8, 8, 9, 122, '2020-03-04 03:56:00', 107, 2, 214, 'CREDIT BILL', '2020-03-23 14:04:36', 222),
	(88, 8, 8, 11, 45, '2020-03-18 04:57:00', 30, 78, 2340, 'CREDIT BILL', '2020-03-24 13:45:31', 78787887),
	(89, 8, 8, 11, 45, '2020-03-05 04:57:00', 30, 78, 2340, 'CREDIT BILL', '2020-03-24 13:49:10', 78787887),
	(90, 8, 8, 11, 45, '2020-03-13 04:57:00', 30, 78, 2340, 'CREDIT BILL', '2020-03-24 13:54:54', 78787887),
	(91, 8, 8, 9, 565, '2020-03-05 03:58:00', 550, 5, 2750, 'CREDIT BILL', '2020-03-24 14:25:07', 45),
	(92, 10, 11, 9, 12390, '2020-03-17 07:45:00', 7520, 1, 4512, 'CREDIT BILL', '2020-03-24 14:30:32', 325),
	(93, 8, 11, 9, 67567, '2020-03-05 02:59:00', 67552, 5, 337760, 'CREDIT BILL', '2020-03-24 14:49:00', 56),
	(94, 8, 11, 9, 56756, '2020-03-04 02:58:00', 56741, 5, 283705, 'AMOUNT', '2020-03-24 14:54:52', 5767),
	(95, 8, 8, 9, 545, '2020-03-05 01:58:00', 530, 454, 240620, 'CREDIT BILL', '2020-03-24 15:06:21', 454),
	(96, 9, 9, 11, 5000, '2020-03-11 01:01:00', 120, 5, 600, 'AMOUNT', '2020-03-24 22:42:16', 565656);
/*!40000 ALTER TABLE `weighment_entry_details` ENABLE KEYS */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
