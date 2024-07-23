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
-- Table structure for table `tests`
--

DROP TABLE IF EXISTS `tests`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tests` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `test_name` varchar(30) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `result` json DEFAULT NULL,
  `date_created` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `status` varchar(100) DEFAULT 'pending',
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `tests_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tests`
--

LOCK TABLES `tests` WRITE;
/*!40000 ALTER TABLE `tests` DISABLE KEYS */;
INSERT INTO `tests` VALUES (1,5,'CBC',200.00,'[{\"name\": \"gb\", \"unit\": \"mg\", \"normal_value\": \"12-17\", \"resulted_value\": \"13-56\"}, {\"name\": \"gb\", \"unit\": \"mg\", \"normal_value\": \"12-17\", \"resulted_value\": \"13-56\"}]','2024-07-10 02:22:45','completed'),(2,NULL,NULL,200.00,'[{\"unit\": \"g/dL\", \"particulars\": \"Haemoglobin\", \"resultValue\": \"52\", \"referenceValue\": \"13-18 g/dL\"}, {\"unit\": \"million cells/mcL\", \"particulars\": \"RBC Count\", \"resultValue\": \"75\", \"referenceValue\": \"4.7-6.1 million cells/mcL\"}, {\"unit\": \"RG\", \"particulars\": \"mLlL\", \"resultValue\": \"123\", \"referenceValue\": \"221\"}]','2024-07-10 02:23:28','completed'),(3,5,NULL,NULL,'[{\"unit\": \"g/dL\", \"particular\": \"Haemoglobin\", \"resultValue\": \"15.2\", \"referenceValue\": \"13.5-17.5\"}, {\"unit\": \"10^9/L\", \"particular\": \"WBC\", \"resultValue\": \"7.8\", \"referenceValue\": \"4.0-11.0\"}]','2024-07-10 03:50:15','completed'),(4,NULL,NULL,NULL,NULL,'2024-07-10 03:50:15','completed'),(5,NULL,'stool',NULL,NULL,'2024-07-10 03:51:26','completed'),(6,NULL,'cbc',NULL,NULL,'2024-07-10 03:51:26','completed'),(7,NULL,'stool',NULL,NULL,'2024-07-10 03:52:03','completed'),(8,NULL,'cbc',NULL,NULL,'2024-07-10 03:52:03','completed'),(11,12,'CBC',NULL,NULL,'2024-07-10 04:23:02','completed'),(12,13,'CBC',NULL,NULL,'2024-07-10 04:28:05','completed'),(15,16,'CBC',NULL,NULL,'2024-07-10 04:32:45','completed'),(24,NULL,NULL,200.00,'[{\"name\": \"gb\", \"unit\": \"mg\", \"normal_value\": \"12-17\", \"resulted_value\": \"13-56\"}, {\"name\": \"gb\", \"unit\": \"mg\", \"normal_value\": \"12-17\", \"resulted_value\": \"13-56\"}]','2024-07-10 20:25:51','completed'),(25,NULL,NULL,NULL,NULL,'2024-07-10 20:41:40','completed'),(28,25,'STOOL',1234.00,'[{\"unit\": \"g/dL\", \"particulars\": \"Haemoglobin\", \"resultValue\": \"13\", \"referenceValue\": \"13-18 g/dL\"}, {\"unit\": \"million cells/mcL\", \"particulars\": \"RBC Count\", \"resultValue\": \"32\", \"referenceValue\": \"4.7-6.1 million cells/mcL\"}, {\"unit\": \"SDF\", \"particulars\": \"DSFDS\", \"resultValue\": \"12\", \"referenceValue\": \"12\"}]','2024-07-23 20:25:21','completed'),(30,26,'STOOL',865.00,NULL,'2024-07-23 20:38:06','pending'),(31,27,'CBC',245.00,NULL,'2024-07-23 20:49:29','pending'),(32,27,'Blood Group',987.00,'[{\"unit\": \"\", \"particulars\": \"Blood Group\", \"resultValue\": \"56\", \"referenceValue\": \"\"}, {\"unit\": \"\", \"particulars\": \"Rh factor\", \"resultValue\": \"34\", \"referenceValue\": \"\"}]','2024-07-23 20:49:29','completed'),(33,27,'STOOL',232.00,NULL,'2024-07-23 20:49:29','pending');
/*!40000 ALTER TABLE `tests` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-07-24  4:04:15
