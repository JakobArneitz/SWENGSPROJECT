-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 22, 2018 at 02:33 PM
-- Server version: 10.1.37-MariaDB
-- PHP Version: 7.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ima16_arneitz_swengs_1`
--

-- --------------------------------------------------------

--
-- Table structure for table `actor`
--

CREATE TABLE `actor` (
  `id` bigint(20) NOT NULL,
  `alive` bit(1) NOT NULL,
  `day_of_birth` datetime DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `rating` int(11) DEFAULT NULL,
  `version` bigint(20) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `genre`
--

CREATE TABLE `genre` (
  `id` bigint(20) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `version` bigint(20) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `hero`
--

CREATE TABLE `hero` (
  `id` bigint(20) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `superhero_name` varchar(255) NOT NULL,
  `alive` bit(1) NOT NULL,
  `rating` int(11) NOT NULL,
  `gender` varchar(255) NOT NULL,
  `super_power` varchar(255) NOT NULL,
  `avatar` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `hero`
--

INSERT INTO `hero` (`id`, `first_name`, `last_name`, `superhero_name`, `alive`, `rating`, `gender`, `super_power`, `avatar`) VALUES
(2, 'Bruce', 'Banner', 'Hulk', b'1', 6, 'MALE', 'Strength', '5'),
(3, 'Tony', 'Stark', 'Iron Man', b'1', 9, 'MALE', 'Weaponized suit', '6'),
(5, 'Clark', 'Kent', 'Superman', b'1', 10, 'MALE', 'Incredible Strength', '1');

-- --------------------------------------------------------

--
-- Table structure for table `hire`
--

CREATE TABLE `hire` (
  `id` bigint(20) NOT NULL,
  `enemy_name` varchar(255) NOT NULL,
  `enemy_power` varchar(255) NOT NULL,
  `hire_from` datetime NOT NULL,
  `hire_to` datetime NOT NULL,
  `superhero` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `movie`
--

CREATE TABLE `movie` (
  `id` bigint(20) NOT NULL,
  `color` bit(1) NOT NULL,
  `length` int(11) NOT NULL,
  `plot` varchar(255) DEFAULT NULL,
  `release_date` datetime DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `version` bigint(20) NOT NULL,
  `genre_id` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `movie`
--

INSERT INTO `movie` (`id`, `color`, `length`, `plot`, `release_date`, `title`, `version`, `genre_id`) VALUES
(15, b'0', 0, NULL, NULL, 'Hulk', 0, NULL),
(14, b'0', 0, NULL, NULL, 'Iron Man', 0, NULL),
(13, b'0', 0, NULL, NULL, 'Justice League', 0, NULL),
(12, b'0', 0, NULL, NULL, 'Superman', 0, NULL),
(11, b'0', 0, NULL, NULL, 'Batman', 0, NULL),
(10, b'0', 0, NULL, NULL, 'Spider-man', 0, NULL),
(9, b'0', 0, NULL, NULL, 'Wonder Woman', 0, NULL),
(16, b'0', 0, NULL, NULL, 'Avengers', 0, NULL),
(17, b'0', 0, NULL, NULL, 'Black Panther', 0, NULL),
(18, b'0', 0, NULL, NULL, 'Deadpool', 0, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `movies_actors`
--

CREATE TABLE `movies_actors` (
  `actor_id` bigint(20) NOT NULL,
  `movie_id` bigint(20) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `movies_heros`
--

CREATE TABLE `movies_heros` (
  `movie_id` bigint(20) NOT NULL,
  `hero_id` bigint(20) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `movies_heros`
--

INSERT INTO `movies_heros` (`movie_id`, `hero_id`) VALUES
(16, 2),
(15, 2),
(14, 2),
(16, 3),
(15, 3),
(14, 3),
(13, 3),
(10, 3),
(12, 5),
(13, 5);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` bigint(20) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `admin` bit(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `password`, `admin`) VALUES
(10, 'admin', '12345', b'1'),
(11, 'tester', '12345', b'0');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `hero`
--
ALTER TABLE `hero`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `hire`
--
ALTER TABLE `hire`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `movie`
--
ALTER TABLE `movie`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK2ggat6246891h4goynp4h9lk5` (`genre_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `hero`
--
ALTER TABLE `hero`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `hire`
--
ALTER TABLE `hire`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `movie`
--
ALTER TABLE `movie`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
