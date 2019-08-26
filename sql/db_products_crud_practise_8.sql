-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Vært: 127.0.0.1
-- Genereringstid: 26. 08 2019 kl. 11:03:17
-- Serverversion: 10.1.37-MariaDB
-- PHP-version: 7.3.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `products_crud_practise`
--

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Data dump for tabellen `categories`
--

INSERT INTO `categories` (`id`, `name`, `description`) VALUES
(3, 'lol', 'qwqweewqeqwe'),
(5, 'VILLAGER', 'GRGKIUJTTE4'),
(6, 'cdsd', 'qwedfqwdwqrwr qwr '),
(7, 'adc3', 'wqewqeweq '),
(10, 'wwww', 'weeqwwqeewqwqeqweewq');

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `images`
--

CREATE TABLE `images` (
  `id` int(11) NOT NULL,
  `path` varchar(182) NOT NULL,
  `fk_product` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Data dump for tabellen `images`
--

INSERT INTO `images` (`id`, `path`, `fk_product`) VALUES
(1, '1566376655813_549585-istock-909106260.jpg', NULL);

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `pages`
--

CREATE TABLE `pages` (
  `id` int(11) NOT NULL,
  `title` varchar(32) NOT NULL,
  `content` text NOT NULL,
  `img` varchar(182) NOT NULL,
  `homepage` int(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Data dump for tabellen `pages`
--

INSERT INTO `pages` (`id`, `title`, `content`, `img`, `homepage`) VALUES
(1, 'The Awesome Homepage', 'Lorem Ipsum er ganske enkelt fyldtekst fra print- og typografiindustrien. Lorem Ipsum har været standard fyldtekst siden 1500-tallet, hvor en ukendt trykker sammensatte en tilfældig spalte for at trykke en bog til sammenligning af forskellige skrifttyper. Lorem Ipsum har ikke alene overlevet fem århundreder, men har også vundet indpas i elektronisk typografi uden væsentlige ændringer. Sætningen blev gjordt kendt i 1960\'erne med lanceringen af Letraset-ark, som indeholdt afsnit med Lorem Ipsum, og senere med layoutprogrammer som Aldus PageMaker, som også indeholdt en udgave af Lorem Ipsum.', '_default_cat.jpg', 1);

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL,
  `description` text NOT NULL,
  `price` decimal(6,2) NOT NULL,
  `weight` int(11) NOT NULL,
  `amount` int(11) NOT NULL,
  `img` varchar(172) NOT NULL,
  `fk_category` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Data dump for tabellen `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `price`, `weight`, `amount`, `img`, `fk_category`) VALUES
(7, 'e3ewee', 'w2eeweweqq', '11.00', 323, 111, '1566383947176_cat-care_urine-marking_main-image.jpg', 7);

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `profiles`
--

CREATE TABLE `profiles` (
  `id` int(11) NOT NULL,
  `first_name` varchar(24) NOT NULL,
  `family_name` varchar(24) NOT NULL,
  `email` varchar(128) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Data dump for tabellen `profiles`
--

INSERT INTO `profiles` (`id`, `first_name`, `family_name`, `email`) VALUES
(4, '', '', 'admin@admin.com'),
(5, '', '', 'admin@admin.com'),
(7, '', '', 'employee@employee.com'),
(8, '', '', 'qweqwe@wqeqwe.com'),
(9, '', '', 'eqweqweqwewq'),
(12, '', '', 'wqeqwe@ew.com'),
(14, '', '', 'qweqwe@wqeqwe.com'),
(15, '', '', 'wwwewew@e.com'),
(16, '', '', 'ew@'),
(17, '', '', 'qweqwe@wqeqwe.com'),
(18, '', '', 'asd@sad.com'),
(19, '', '', 'asd@sad.com'),
(20, '', '', 'wqeqweqwe@wqeqwe.com');

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `name` varchar(24) NOT NULL,
  `level` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Data dump for tabellen `roles`
--

INSERT INTO `roles` (`id`, `name`, `level`) VALUES
(1, 'Guest', 1),
(2, 'Costumer', 10),
(3, 'Employee', 50),
(4, 'Admin', 99),
(5, 'SuperAdmin', 100);

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(24) NOT NULL,
  `password` varchar(75) NOT NULL,
  `fk_role` int(11) DEFAULT '1',
  `fk_profile` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Data dump for tabellen `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `fk_role`, `fk_profile`) VALUES
(2, 'admin', '$2a$10$9Pyj5AuP2n0AY3.azV/IcOcvPRoTCxyJoCdfYkG9ZrCOrW2TduTrm', 4, 5),
(4, 'employee', '$2a$10$L0hYRBNo83pmXVgc0xYugeuWf5OJtI.xJUu/es5dpckSy44GvB6KS', 3, 7),
(5, 'qwwqw', '$2a$10$wWDHfy0ORhnQWuSknlZZueSGapqlzTX.wvKBcJ76rtdcAxUut575q', 1, 8),
(6, 'weew13weqw', '$2a$10$Z5IRPG7hpcKs82zG7S3EWuMPMtXhoNmr3WQiuN.Bse0z4RchWXdXe', 1, 9),
(9, 'wwewwew', '$2a$10$rIA16Ml7wqw7gu.SvojqauqHp3/a5lJGLGD5JS5bubA.dZyBk.LqC', 1, 12),
(12, 'wwwe', '$2a$10$dKPpZA6HIeBNW/gvamwOaubLD.SobjTG1D4fQmifI6wdiVKx97gDK', 1, 15),
(13, 'wewe', '$2a$10$W0Qt5FCq.2t3nRBFBkBRqeQGRgZh.88i.crBjT0A/mCH3V.tUaTa.', 1, 16),
(14, 'benben', '$2a$10$SI3IDdiTz4oKHTsAYcgysuE8R0LyuQeAHv33eEKcbfNESHswX6jcS', 1, 17),
(16, 'dddd', '$2a$10$4PpgZc/OfX2vex3dqVFoy.qUg/1EN69odngQ32b4t/hjZLdGyWxO2', 1, 19),
(17, 'wqeqw', '$2a$10$oUI7vebogGnocuKX4Wrw3eyyOgJME71QitjdpNEF6e60gnMM6.uUG', 1, 20);

--
-- Begrænsninger for dumpede tabeller
--

--
-- Indeks for tabel `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indeks for tabel `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`);

--
-- Indeks for tabel `pages`
--
ALTER TABLE `pages`
  ADD PRIMARY KEY (`id`);

--
-- Indeks for tabel `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indeks for tabel `profiles`
--
ALTER TABLE `profiles`
  ADD PRIMARY KEY (`id`);

--
-- Indeks for tabel `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indeks for tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username_UNIQUE` (`username`),
  ADD KEY `fk_profile_idx` (`fk_profile`);

--
-- Brug ikke AUTO_INCREMENT for slettede tabeller
--

--
-- Tilføj AUTO_INCREMENT i tabel `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Tilføj AUTO_INCREMENT i tabel `images`
--
ALTER TABLE `images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Tilføj AUTO_INCREMENT i tabel `pages`
--
ALTER TABLE `pages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Tilføj AUTO_INCREMENT i tabel `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Tilføj AUTO_INCREMENT i tabel `profiles`
--
ALTER TABLE `profiles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- Tilføj AUTO_INCREMENT i tabel `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Tilføj AUTO_INCREMENT i tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- Begrænsninger for dumpede tabeller
--

--
-- Begrænsninger for tabel `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `fk_profile` FOREIGN KEY (`fk_profile`) REFERENCES `profiles` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
