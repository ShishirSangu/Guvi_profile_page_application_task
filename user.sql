

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";

--

CREATE TABLE `user` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(30) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(30) NOT NULL,
  `phone` varchar(10) NOT NULL,
  `gender` varchar(8) NOT NULL,
  `degree` varchar(15) NOT NULL,
  `dob` varchar(30) NOT NULL,
  `age` varchar(2) NOT NULL,
  `college` varchar(60) NOT NULL,
  `state` varchar(25) NOT NULL,
  `department` varchar(60) NOT NULL,
  `yop` varchar(4) NOT NULL,
  `aoi` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `email`, `password`, `phone`, `gender`, `degree`, `dob`, `age`, `college`, `state`, `department`, `yop`, `aoi`) VALUES
(1, 'Shishir', 'sangameshshishir@gmail.com', '@sangu23', '9538398740', 'Male', 'B.E.', '2001-03-23', '22', 'KIT tiptur', 'Karnataka', 'Computer Science Engineering', '2023', 'Machine Learning'),
(2, 'Darshan', 'darshan2001@gmail.com', '@doctru29==', '9538395470', 'Male', '', '2001-01-29', '21', '', '', '', '', '');

--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
ALTER TABLE `user`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;