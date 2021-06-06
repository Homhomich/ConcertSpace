-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Июн 06 2021 г., 17:08
-- Версия сервера: 8.0.15
-- Версия PHP: 7.1.22

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `concert_space2`
--

-- --------------------------------------------------------

--
-- Структура таблицы `artist`
--

CREATE TABLE `artist` (
  `id` int(11) NOT NULL,
  `artist_name` varchar(255) DEFAULT NULL,
  `genre` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `artist`
--

INSERT INTO `artist` (`id`, `artist_name`, `genre`) VALUES
(1, 'ПнП', 'Альтернативный Эмо Метал'),
(2, 'Монеточка', 'Поп');

-- --------------------------------------------------------

--
-- Структура таблицы `concert`
--

CREATE TABLE `concert` (
  `id` int(11) NOT NULL,
  `concert_name` varchar(255) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `artist_id` int(11) DEFAULT NULL,
  `concert_organization_id` int(11) DEFAULT NULL,
  `venue_id` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `concert`
--

INSERT INTO `concert` (`id`, `concert_name`, `date`, `description`, `artist_id`, `concert_organization_id`, `venue_id`) VALUES
(1, 'Концерт группы Комбикорм', '2021-06-23', 'Спасибо, папаша', 1, 1, 1),
(2, 'Без комбикорма', '2021-06-30', 'Спасибо, маманя', 2, 2, 2);

-- --------------------------------------------------------

--
-- Структура таблицы `concert_organization`
--

CREATE TABLE `concert_organization` (
  `id` int(11) NOT NULL,
  `bar` bit(1) DEFAULT NULL,
  `can_bring_liquids` bit(1) DEFAULT NULL,
  `hookah` bit(1) DEFAULT NULL,
  `light_show` bit(1) DEFAULT NULL,
  `shooting` bit(1) DEFAULT NULL,
  `snack` bit(1) DEFAULT NULL,
  `organizer_id` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `concert_organization`
--

INSERT INTO `concert_organization` (`id`, `bar`, `can_bring_liquids`, `hookah`, `light_show`, `shooting`, `snack`, `organizer_id`) VALUES
(1, b'1', b'1', b'1', b'1', b'1', b'1', 1),
(2, b'0', b'0', b'0', b'0', b'0', b'0', 2);

-- --------------------------------------------------------

--
-- Структура таблицы `customer_tickets`
--

CREATE TABLE `customer_tickets` (
  `id` int(11) NOT NULL,
  `ticket_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `customer_tickets`
--

INSERT INTO `customer_tickets` (`id`, `ticket_id`, `user_id`) VALUES
(1, 1, 1),
(2, 2, 2);

-- --------------------------------------------------------

--
-- Структура таблицы `ticket`
--

CREATE TABLE `ticket` (
  `id` int(11) NOT NULL,
  `serial_number` varchar(255) DEFAULT NULL,
  `concert_id` int(11) DEFAULT NULL,
  `ticket_settings_id` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `ticket`
--

INSERT INTO `ticket` (`id`, `serial_number`, `concert_id`, `ticket_settings_id`) VALUES
(1, 'ййййй1', 1, 1),
(2, 'ййййй2', 1, 2);

-- --------------------------------------------------------

--
-- Структура таблицы `ticket_settings`
--

CREATE TABLE `ticket_settings` (
  `id` int(11) NOT NULL,
  `amount` int(11) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `concert_id` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `ticket_settings`
--

INSERT INTO `ticket_settings` (`id`, `amount`, `description`, `price`, `type`, `concert_id`) VALUES
(1, 100, 'Танцуют все', 800, 'Танцпол', 1),
(2, 10, 'Сидим', 2000, 'VIP', 1);

-- --------------------------------------------------------

--
-- Структура таблицы `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `phone_number` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `user`
--

INSERT INTO `user` (`id`, `email`, `name`, `phone_number`) VALUES
(1, 'кто-то', 'Я', '2525695'),
(2, 'что-то', 'Ты', '+79802435622');

-- --------------------------------------------------------

--
-- Структура таблицы `venue`
--

CREATE TABLE `venue` (
  `id` int(11) NOT NULL,
  `capacity` int(11) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `img_path` varchar(255) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `owner_email` varchar(255) DEFAULT NULL,
  `owner_phone` varchar(255) DEFAULT NULL,
  `rent_per_hour` int(11) DEFAULT NULL,
  `square` int(11) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `venue_name` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `venue`
--

INSERT INTO `venue` (`id`, `capacity`, `description`, `img_path`, `location`, `owner_email`, `owner_phone`, `rent_per_hour`, `square`, `type`, `venue_name`) VALUES
(1, 150, 'Блабла', 'Оттуда', 'Там', 'fjjfjf@gmail.com', '88005553535', 250, 60, 'Лофт', 'Отбойчик'),
(2, 200, 'Блабла', 'Оттуда', 'Тама', 'fjjfjf@gmail.com', '88005553535', 300, 80, 'Кек', 'Забойчик');

-- --------------------------------------------------------

--
-- Структура таблицы `venue_schedule`
--

CREATE TABLE `venue_schedule` (
  `id` int(11) NOT NULL,
  `date` date DEFAULT NULL,
  `venue_id` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `venue_schedule`
--

INSERT INTO `venue_schedule` (`id`, `date`, `venue_id`) VALUES
(1, '2021-06-23', 1),
(2, '2021-06-30', 2);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `artist`
--
ALTER TABLE `artist`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `concert`
--
ALTER TABLE `concert`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK2o0ps5vl7d9dhcbt235et5iij` (`artist_id`),
  ADD KEY `FK8pqu9bvb8u727vuxvuo7p72t0` (`concert_organization_id`),
  ADD KEY `FKllw6cymtwrumecg1bcnsubw56` (`venue_id`);

--
-- Индексы таблицы `concert_organization`
--
ALTER TABLE `concert_organization`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKodxuj4080a432at7c275yuy8d` (`organizer_id`);

--
-- Индексы таблицы `customer_tickets`
--
ALTER TABLE `customer_tickets`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKa1qtnhy9nr4tjjm33i2d57s5b` (`ticket_id`),
  ADD KEY `FKkxd4o9rgsf7bg71531x4y4jiv` (`user_id`);

--
-- Индексы таблицы `ticket`
--
ALTER TABLE `ticket`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKjopj22j9q92hs2kpi0l8bt3gs` (`concert_id`),
  ADD KEY `FKfdv6y1synifodamntgv22hg4l` (`ticket_settings_id`);

--
-- Индексы таблицы `ticket_settings`
--
ALTER TABLE `ticket_settings`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKj4sthn971t5ggyjck5llvs74c` (`concert_id`);

--
-- Индексы таблицы `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `venue`
--
ALTER TABLE `venue`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `venue_schedule`
--
ALTER TABLE `venue_schedule`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK6wydo4nygro4upg65a0oiphrm` (`venue_id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `artist`
--
ALTER TABLE `artist`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT для таблицы `concert`
--
ALTER TABLE `concert`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT для таблицы `concert_organization`
--
ALTER TABLE `concert_organization`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT для таблицы `customer_tickets`
--
ALTER TABLE `customer_tickets`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT для таблицы `ticket`
--
ALTER TABLE `ticket`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT для таблицы `ticket_settings`
--
ALTER TABLE `ticket_settings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT для таблицы `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT для таблицы `venue`
--
ALTER TABLE `venue`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT для таблицы `venue_schedule`
--
ALTER TABLE `venue_schedule`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
