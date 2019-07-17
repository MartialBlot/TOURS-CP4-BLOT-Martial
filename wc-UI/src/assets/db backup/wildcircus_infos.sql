-- MySQL dump 10.13  Distrib 8.0.16, for macos10.14 (x86_64)
--
-- Host: localhost    Database: wildcircus
-- ------------------------------------------------------
-- Server version	8.0.16

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `infos`
--

DROP TABLE IF EXISTS `infos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `infos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `circus_id` int(11) NOT NULL,
  `city` varchar(128) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `date` date DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `nb_shows` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_infos_circus` (`circus_id`),
  CONSTRAINT `fk_infos_circus` FOREIGN KEY (`circus_id`) REFERENCES `circus` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `infos`
--

LOCK TABLES `infos` WRITE;
/*!40000 ALTER TABLE `infos` DISABLE KEYS */;
INSERT INTO `infos` VALUES (3,2,'Tours','2019-08-26',89,7),(4,3,'Tours','2019-09-03',30,4),(6,5,'TOURS',NULL,NULL,NULL),(7,2,'mulouse',NULL,30,2),(8,2,'strastbourg',NULL,NULL,4),(12,9,'Saint Jean le pieu ','2019-06-12',12,4),(13,8,'Bordeaux','2019-08-26',45,34),(14,8,'La Ferté Bernard','2012-03-02',5,11),(15,8,'Paris','2019-08-26',45,43),(16,9,'Perigueux','2019-08-28',32,67),(17,9,'Etrouville','2019-08-31',23,7),(18,7,'Barcelone','2019-08-28',7,87),(19,7,'Herouville','2019-08-30',8,32),(20,7,'Levallois perret','2019-08-30',456,1),(21,5,'Trouble Ville','2019-09-01',2,45),(22,5,'Cherré','2019-08-31',6,3),(23,3,'Clermont','2019-08-31',88,78),(24,3,'Montreal','2019-08-29',3,21);
/*!40000 ALTER TABLE `infos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-07-17 15:21:30
