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
-- Table structure for table `circus`
--

DROP TABLE IF EXISTS `circus`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `circus` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(128) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `nationality` varchar(128) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `nb_artist` int(11) DEFAULT NULL,
  `year_creation` int(11) DEFAULT NULL,
  `circus_picture` varchar(256) COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `circus`
--

LOCK TABLES `circus` WRITE;
/*!40000 ALTER TABLE `circus` DISABLE KEYS */;
INSERT INTO `circus` VALUES (2,'WorldCircus','France',33,2000,'https://timedotcom.files.wordpress.com/2015/03/ringling-elephant-circus.jpg'),(3,'TourCircus','France',5,2007,'http://uppervalleyfun.com/wp-content/uploads/2018/06/circus-smirkus-63-e1528053410359-960x636.jpg'),(5,'BeauFlaire','Lituanie',5,1999,'https://vistapointe.net/images/at-the-circus-wallpaper-10.jpg'),(7,'Sarfatti','Italie',15,1987,'http://d1trxack2ykyus.cloudfront.net/artwork/0c077c9ebc13c683/large_image.jpg'),(8,'Le plus que tout','FRANCE',4,2005,'https://wittenbergchamber.com/wp-content/uploads/circus01.jpg'),(9,'La folie des tigres','Siberie',45,1912,'http://www.circusworldbaraboo.org/wp-content/uploads/2015/10/Tigers-8-1024x654.jpg');
/*!40000 ALTER TABLE `circus` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-07-17 15:21:31
