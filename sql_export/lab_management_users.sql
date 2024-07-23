-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: localhost    Database: lab_management
-- ------------------------------------------------------
-- Server version	8.0.38

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `age` tinyint DEFAULT NULL,
  `mobile_num` text,
  `gender` varchar(20) DEFAULT NULL,
  `address` text,
  `date_created` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'amir',NULL,NULL,NULL,'pindi miani','2024-07-10 02:09:41'),(2,'amir',NULL,NULL,'male','pindi miani','2024-07-10 02:09:41'),(3,'amir',NULL,NULL,'male','pindi miani','2024-07-10 02:10:06'),(4,'amir',NULL,NULL,'male','pindi miani','2024-07-10 02:11:07'),(5,'Amir Shah',21,'434343','male','fsdsfsdf','2024-07-10 03:13:31'),(6,'amir',21,'434343','male','fsdsfsdf','2024-07-10 03:13:58'),(8,'amir',21,'434343','male','fsdsfsdf','2024-07-10 03:50:15'),(9,'amir',21,'434343','male','fsdsfsdf','2024-07-10 03:51:26'),(10,'amir',21,'434343','male','fsdsfsdf','2024-07-10 03:52:03'),(12,'Amir',22,'03168724811','male','oops','2024-07-10 04:23:02'),(13,'Amir',22,'03168724811','male','oops','2024-07-10 04:28:05'),(16,'Amir',22,'03168724811','male','oops','2024-07-10 04:32:45'),(25,'AMIR SHAHZAD',23,'02124524515','male','GUJRAT','2024-07-23 20:25:21'),(26,'Wahab',20,'0144','male','RYK','2024-07-23 20:38:06'),(27,'ASH',12,'2421432','male','35 street lahore','2024-07-23 20:49:29');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-07-24  4:04:14
