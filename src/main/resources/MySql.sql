/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

CREATE DATABASE IF NOT EXISTS `weighment_db` /*!40100 DEFAULT CHARACTER SET latin1 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `weighment_db`;

CREATE TABLE IF NOT EXISTS `customer_details` (
  `customer_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `customer_name` varchar(100) NOT NULL,
  `customer_phone` varchar(10) DEFAULT NULL,
  `created_date` datetime NOT NULL,
  `updated_date` datetime DEFAULT NULL,
  PRIMARY KEY (`customer_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*!40000 ALTER TABLE `customer_details` DISABLE KEYS */;
INSERT INTO `customer_details` (`customer_id`, `customer_name`, `customer_phone`, `created_date`, `updated_date`) VALUES
	(5, 'HARI1', '000000', '2020-03-09 22:24:17', '2020-03-10 23:29:29'),
	(6, 'HHH', '123456789', '2020-03-10 23:45:06', NULL),
	(7, 'HHeeH', '123456789', '2020-03-11 01:07:39', NULL);
/*!40000 ALTER TABLE `customer_details` ENABLE KEYS */;

CREATE TABLE IF NOT EXISTS `product_details` (
  `product_id` bigint(20) NOT NULL,
  `product_name` varchar(50) NOT NULL,
  `product_rate` varchar(50) DEFAULT NULL,
  `created_date` datetime NOT NULL,
  `updated_date` datetime DEFAULT NULL,
  PRIMARY KEY (`product_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*!40000 ALTER TABLE `product_details` DISABLE KEYS */;
INSERT INTO `product_details` (`product_id`, `product_name`, `product_rate`, `created_date`, `updated_date`) VALUES
	(1, 'sand', '1000', '2020-03-09 14:04:01', NULL),
	(2, 'jalli', '500', '2020-03-09 14:04:22', NULL),
	(3, 'Msand', NULL, '2020-03-09 14:04:36', NULL);
/*!40000 ALTER TABLE `product_details` ENABLE KEYS */;

CREATE TABLE IF NOT EXISTS `vehicle_details` (
  `vechile_id` bigint(20) NOT NULL,
  `vehicle_number` varchar(50) NOT NULL,
  `vehicle_name` varchar(50) DEFAULT NULL,
  `tare_weight` decimal(10,0) NOT NULL,
  `updated_date` datetime DEFAULT NULL,
  `created_date` datetime NOT NULL,
  PRIMARY KEY (`vechile_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*!40000 ALTER TABLE `vehicle_details` DISABLE KEYS */;
INSERT INTO `vehicle_details` (`vechile_id`, `vehicle_number`, `vehicle_name`, `tare_weight`, `updated_date`, `created_date`) VALUES
	(1, 'TN11AB1928', 'TATA', 0, '2020-03-09 13:48:13', '2020-03-09 13:48:05'),
	(2, 'TN22CZ1919', 'Leyland', 0, NULL, '2020-03-09 13:53:40'),
	(3, 'TN23HD2928', 'TATA', 0, '2020-03-09 13:54:06', '2020-03-09 13:54:04'),
	(4, 'TN45DF9393', NULL, 0, NULL, '2020-03-09 13:54:29');
/*!40000 ALTER TABLE `vehicle_details` ENABLE KEYS */;

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
  `pay_mode` varchar(10) NOT NULL,
  `created_date` datetime NOT NULL,
  PRIMARY KEY (`wei_id`),
  KEY `FK1_vehicle` (`vehicle_id`),
  KEY `FK2_customer` (`customer_id`),
  KEY `FK3_product` (`product_id`),
  CONSTRAINT `FK1_vehicle` FOREIGN KEY (`vehicle_id`) REFERENCES `vehicle_details` (`vechile_id`),
  CONSTRAINT `FK2_customer` FOREIGN KEY (`customer_id`) REFERENCES `customer_details` (`customer_id`),
  CONSTRAINT `FK3_product` FOREIGN KEY (`product_id`) REFERENCES `product_details` (`product_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*!40000 ALTER TABLE `weighment_entry_details` DISABLE KEYS */;
INSERT INTO `weighment_entry_details` (`wei_id`, `vehicle_id`, `customer_id`, `product_id`, `gross_weight`, `gross_date`, `net_weight`, `rate`, `amount`, `pay_mode`, `created_date`) VALUES
	(1, 1, 5, 2, 34324, '2020-03-14 00:48:09', 32323, 32, 32322, 'AMOUNT', '2020-03-14 00:48:35');
/*!40000 ALTER TABLE `weighment_entry_details` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;




SELECT vd.vehicle_number,vd.tare_weight,vd.created_date,cd.customer_name,pd.product_name,
wed.gross_weight,wed.gross_date,wed.net_weight,wed.amount,wed.pay_mode 
FROM weighment_entry_details wed, customer_details cd, product_details pd, vehicle_details vd 
WHERE 
wed.vehicle_id=vd.vechile_id 
AND
wed.customer_id=cd.customer_id
AND
wed.product_id=pd.product_id
AND
wed.wei_id=1;
